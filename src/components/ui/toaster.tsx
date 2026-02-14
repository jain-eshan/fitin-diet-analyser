
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { cn } from "@/lib/utils"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        // Enhanced toast styling with better contrast and visibility
        const toastClasses = {
          default: "bg-[var(--color-background)] border-[var(--color-border)] text-[var(--color-foreground)] shadow-md",
          destructive: "bg-red-100 border-red-200 text-red-700 shadow-md",
          success: "bg-green-100 border-green-200 text-green-700 shadow-md",
          warning: "bg-yellow-100 border-yellow-200 text-yellow-700 shadow-md",
          info: "bg-blue-100 border-blue-200 text-blue-700 shadow-md",
        }
        
        return (
          <Toast 
            key={id} 
            {...props}
            className={cn(
              "rounded-lg p-4",
              variant && toastClasses[variant as keyof typeof toastClasses]
            )}
          >
            <div className="grid gap-1">
              {title && <ToastTitle className="font-medium text-[var(--color-foreground)]">{title}</ToastTitle>}
              {description && (
                <ToastDescription className="opacity-90 text-[var(--color-foreground)]/90">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-[var(--color-foreground)] opacity-70 hover:opacity-100" />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
