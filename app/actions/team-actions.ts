"use server";

import { prisma } from '@/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function team() {
    const user = await currentUser();
    if (!user) return null;

    const tasks = await prisma.user.findUnique({
        where: {
            email: user.emailAddresses[0]?.emailAddress,
        }
    });

    return tasks;
}