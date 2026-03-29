import { Alert, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export function AlertDemo({ message }: { message: string }) {
    return (
        <div className="grid w-full xl:w-1/2 max-w-md items-start gap-4 absolute bottom-10 left-10">
            <Alert className="w-full">
                <CheckCircle2Icon />
                <AlertTitle>{message}</AlertTitle>
            </Alert>
        </div>
    )
}
