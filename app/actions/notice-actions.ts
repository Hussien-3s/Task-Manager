"use server";

import { prisma } from '@/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function fetchUserNotices() {
    const user = await currentUser();
    if (!user) return null;

    const tasks = await prisma.user.findUnique({
        where: {
            clerkId: user.id,
        },
        include: {
            tasks: true,
        }
    });

    return tasks;
}