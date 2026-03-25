import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2Icon, InfoIcon } from "lucide-react"

export function AlertDemo() {
    return (
        <div className="grid w-full max-w-md items-start gap-4 absolute bottom-10 left-10">
            <Alert>
                <CheckCircle2Icon />
                <AlertTitle>Done</AlertTitle>
            </Alert>
        </div>
    )
}
