"use client";

import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { NoticeButton } from "./NoticeButton";
import { fetchUserNotices } from '@/app/actions/notice-actions';

export function NoticeCard() {
    const [tasks, setTasks] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchUserNotices().then((data) => {
            setTasks(data);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <Card className="...">Loading...</Card>;


    return (
        <Card size="sm" className="absolute top-16 left-85 w-full">
            {tasks?.notice.map((notice: any, index: number) => (
                <NoticeButton key={`${notice}-${index}`} notice={notice} />
            ))}
        </Card>
    );
}