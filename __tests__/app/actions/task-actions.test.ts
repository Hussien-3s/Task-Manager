import { addTask, updateTaskStatus, deleteTask } from '@/app/actions/task-actions'
import { prisma } from '@/prisma'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

describe('task-actions', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('addTask', () => {
    it('should throw Unauthorized if no user', async () => {
      ;(currentUser as jest.Mock).mockResolvedValue(null)
      const formData = new FormData()
      await expect(addTask(formData)).rejects.toThrow('Unauthorized')
    })

    it('should add a task and revalidate path', async () => {
      ;(currentUser as jest.Mock).mockResolvedValue({ id: 'user_123' })
      const formData = new FormData()
      formData.append('title', 'Test Task')
      formData.append('description', 'Test Description')
      formData.append('content', 'Test Content')

      await addTask(formData)

      expect(prisma.user.update).toHaveBeenCalledWith({
        where: { clerkId: 'user_123' },
        data: {
          tasks: {
            create: {
              title: 'Test Task',
              description: 'Test Description',
              content: 'Test Content',
            },
          },
        },
      })
      expect(revalidatePath).toHaveBeenCalledWith('/tasks')
    })
  })

  describe('updateTaskStatus', () => {
    it('should update task status and revalidate path', async () => {
      ;(currentUser as jest.Mock).mockResolvedValue({ id: 'user_123' })
      await updateTaskStatus('task_123', false)

      expect(prisma.task.update).toHaveBeenCalledWith({
        where: { id: 'task_123' },
        data: { completed: true },
      })
      expect(revalidatePath).toHaveBeenCalledWith('/tasks')
    })
  })

  describe('deleteTask', () => {
    it('should delete task and revalidate path', async () => {
      ;(currentUser as jest.Mock).mockResolvedValue({ id: 'user_123' })
      await deleteTask('task_123')

      expect(prisma.task.delete).toHaveBeenCalledWith({
        where: { id: 'task_123' },
      })
      expect(revalidatePath).toHaveBeenCalledWith('/tasks')
    })
  })
})
