import { Alert, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon } from "lucide-react"

export function AlertDemo({ message }: { message: string }) {
    return (
        <div className="grid w-full max-w-md items-start gap-4 absolute bottom-10 left-10">
            <Alert>
                <CheckCircle2Icon />
                <AlertTitle>{message}</AlertTitle>
            </Alert>
        </div>
    )
}
