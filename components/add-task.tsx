"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { addTaskAction } from "@/app/actions/task-actions";

export function CardSmall({ setOpenButton, setOpenCard }: { setOpenButton: (open: boolean) => void, setOpenCard: (open: boolean) => void }) {
  async function clientAction(formData: FormData) {
    await addTaskAction(formData);
    setOpenButton(true);
    setOpenCard(false);
  }

  return (
    <Card className="mx-auto w-full flex flex-row max-w-5xl p-0">
      <form action={clientAction} className="flex w-full">
        <CardContent className="space-y-4 text-left p-5 flex-1">
          <CardDescription>Fill out the details below.</CardDescription>

          <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input id="title" name="title" placeholder="e.g. Details..." required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input id="description" name="description" placeholder="e.g. Details..." />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Input id="content" name="content" placeholder="e.g. Details..." />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col justify-center p-5 border-l">
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700">
            Add Task
          </Button>
          <Button
            type="button"
            onClick={() => { setOpenButton(true); setOpenCard(false) }}
            className="w-full mt-2"
            variant="outline"
          >
            Cancel
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}