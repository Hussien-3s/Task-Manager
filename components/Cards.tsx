"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
} from "@/components/ui/card"
import { Button } from "./ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { updateTaskStatus, deleteTask } from "@/app/actions/task-actions";

export function TaskCard({ title, description, content, completed, id }: { title: string, description: string, content: string, completed: boolean, id: string }) {
    return (
        <Card size="sm" className="mx-auto w-full max-w-5xl">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    {title} <Checkbox id="terms-checkbox-2" onClick={() => { updateTaskStatus(id, completed); }} name="terms-checkbox-2" defaultChecked={completed} />
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p>
                    {content}
                </p>
            </CardContent>
            <CardFooter>
                <Button onClick={() => { deleteTask(id); }}>Delete</Button>
            </CardFooter>
        </Card>
    )
}
