import * as React from "react"
import { Dialog } from "radix-ui"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

function Sheet(props: React.ComponentProps<typeof Dialog.Root>) {
  return <Dialog.Root data-slot="sheet" {...props} />
}

function SheetTrigger(props: React.ComponentProps<typeof Dialog.Trigger>) {
  return <Dialog.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props: React.ComponentProps<typeof Dialog.Close>) {
  return <Dialog.Close data-slot="sheet-close" {...props} />
}

function SheetPortal(props: React.ComponentProps<typeof Dialog.Portal>) {
  return <Dialog.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Overlay>) {
  return (
    <Dialog.Overlay
      data-slot="sheet-overlay"
      className={cn("fixed inset-0 z-50 bg-black/70", className)}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = "right",
  ...props
}: React.ComponentProps<typeof Dialog.Content> & {
  side?: "top" | "right" | "bottom" | "left"
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <Dialog.Content
        data-slot="sheet-content"
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-zinc-950 text-white shadow-lg",
          side === "right" &&
            "inset-y-0 right-0 h-full w-[90vw] max-w-md border-l border-zinc-800",
          side === "left" &&
            "inset-y-0 left-0 h-full w-[90vw] max-w-md border-r border-zinc-800",
          side === "top" &&
            "inset-x-0 top-0 h-auto border-b border-zinc-800",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t border-zinc-800",
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-400">
          <X className="size-4" />
          <span className="sr-only">Close</span>
        </Dialog.Close>
      </Dialog.Content>
    </SheetPortal>
  )
}

function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4 pr-10", className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof Dialog.Title>) {
  return (
    <Dialog.Title
      data-slot="sheet-title"
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
}
