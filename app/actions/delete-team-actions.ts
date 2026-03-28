"use server"

import { prisma } from '@/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';

export async function rejectTeamInvitation(teamEmail: string) {
  const user = await currentUser();
  const userEmail = user?.emailAddresses[0]?.emailAddress;

  if (!userEmail) throw new Error("Unauthorized");

  const dbUser = await prisma.user.findUnique({
    where: { email: userEmail },
    select: { notice: true }
  });

  if (!dbUser) throw new Error("User not found");

  const updatedNotices = dbUser.notice.filter((email: string) => email !== teamEmail);

  await prisma.user.update({
    where: {
      email: userEmail,
    },
    data: {
      notice: {
        set: updatedNotices
      }
    }
  });

  revalidatePath("/");

  return { success: true };
}