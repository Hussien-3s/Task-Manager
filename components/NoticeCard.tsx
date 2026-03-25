"use client";

import { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import { NoticeButton } from "./NoticeButton";
import { noticeAction } from '@/app/actions/notice-actions';

export function NoticeCard() {
    const [tasks, setTasks] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        noticeAction().then((data) => {
            setTasks(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <Card className="...">Loading...</Card>;

    console.log(tasks);

    return (
        <Card size="sm" className="absolute top-16 left-85 w-full">
            {tasks?.notice.map((notice: any, index: number) => (
                <NoticeButton key={`${notice}-${index}`} notice={notice} />
            ))}
        </Card>
    );
}