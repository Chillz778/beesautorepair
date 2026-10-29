import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// One booking action, two placements: the hero button and the fixed edge tab.
// Both open the same dialog, so the copy and the "not available yet" state stay identical.
export function BookingButton({ floating = false }: { floating?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {floating ? (
          <button type="button" className="booking-fixed" aria-label="Book an appointment with BEE'S Auto Repair">
            <CalendarCheck className="size-5 shrink-0" aria-hidden />
            <span>Book an Appointment</span>
          </button>
        ) : (
          <Button className="btn btn-accent btn-lg h-auto whitespace-normal">
            <CalendarCheck aria-hidden />
            <span>Book an Appointment</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100%_-_2rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>Online booking is not available yet. Please check back soon to schedule your visit.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
