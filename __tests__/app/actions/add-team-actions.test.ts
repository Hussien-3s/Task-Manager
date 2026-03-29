import { acceptTeamInvitation } from '@/app/actions/add-team-actions'
import { prisma } from '@/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'
import { rejectTeamInvitation } from '@/app/actions/delete-team-actions'

// Mock rejectTeamInvitation
jest.mock('@/app/actions/delete-team-actions', () => ({
  rejectTeamInvitation: jest.fn(),
}))

describe('add-team-actions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('acceptTeamInvitation', () => {
    it('should throw Unauthorized if no user email', async () => {
      ;(currentUser as jest.Mock).mockResolvedValue({ emailAddresses: [] })
      await expect(acceptTeamInvitation('team@example.com')).rejects.toThrow('Unauthorized')
    })

    it('should throw User not found if user not in db', async () => {
      ;(currentUser as jest.Mock).mockResolvedValue({
        emailAddresses: [{ emailAddress: 'user@example.com' }],
      })
      ;(prisma.user.findUnique as jest.Mock).mockResolvedValue(null)

      await expect(acceptTeamInvitation('team@example.com')).rejects.toThrow('User not found')
    })

    it('should accept invitation and revalidate path', async () => {
      const userEmail = 'user@example.com'
      const teamEmail = 'team@example.com'

      ;(currentUser as jest.Mock).mockResolvedValue({
        emailAddresses: [{ emailAddress: userEmail }],
      })
      ;(prisma.user.findUnique as jest.Mock).mockResolvedValue({ notice: [] })

      const result = await acceptTeamInvitation(teamEmail)

      expect(prisma.user.update).toHaveBeenCalledTimes(2)
      // First update for current user
      expect(prisma.user.update).toHaveBeenNthCalledWith(1, {
        where: { email: userEmail },
        data: { team: { push: teamEmail } },
      })
      // Second update for team member
      expect(prisma.user.update).toHaveBeenNthCalledWith(2, {
        where: { email: teamEmail },
        data: { team: { push: userEmail } },
      })

      expect(revalidatePath).toHaveBeenCalledWith('/')
      expect(rejectTeamInvitation).toHaveBeenCalledWith(teamEmail)
      expect(result).toEqual({ success: true })
    })
  })
})
