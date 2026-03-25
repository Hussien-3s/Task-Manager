"use server"

import { prisma } from '@/prisma';
import { currentUser } from '@clerk/nextjs/server';
import { revalidatePath } from 'next/cache';
import { deleteTeam } from './delete-team-actions';

export async function addTeam(teamEmail: string) {
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress;

    if (!userEmail) throw new Error("Unauthorized");

    const dbUser = await prisma.user.findUnique({
        where: { email: userEmail },
        select: { notice: true }
    });

    if (!dbUser) throw new Error("User not found");

    await prisma.user.update({
        where: {
            email: userEmail,
        },
        data: {
            team: {
                push: teamEmail
            }
        }
    });

    await prisma.user.update({
        where: {
            email: teamEmail,
        },
        data: {
            team: {
                push: userEmail
            }
        }
    });

    revalidatePath("/");
    deleteTeam(teamEmail);

    return { success: true };
}