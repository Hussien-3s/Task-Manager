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
import { checkboxAction } from "@/app/actions/checkbox-actions";
import { deleteAction } from "@/app/actions/delete-actions";

export function CardSmall({ title, description, content, completed, id }: { title: string, description: string, content: string, completed: boolean, id: string }) {
    return (
        <Card size="sm" className="mx-auto w-full max-w-5xl">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    {title} <Checkbox id="terms-checkbox-2" onClick={() => { checkboxAction(id, completed); }} name="terms-checkbox-2" defaultChecked={completed} />
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
                <Button onClick={() => { deleteAction(id); }}>Delete</Button>
            </CardFooter>
        </Card>
    )
}
