"use server"

import { prisma } from '@/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function request(teamEmail: string) {
  const user = await currentUser();
  if (!user) throw new Error("Unauthorized");

  await prisma.user.update({
    where: {
      email: teamEmail,
    },
    data: {
      notice: {
        push: user.emailAddresses[0].emailAddress
      }
    }
  });
}