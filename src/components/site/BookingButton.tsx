import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function BookingButton({ floating = false }: { floating?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={floating ? "booking-fixed" : "btn btn-accent btn-lg h-auto whitespace-normal"}>
          <CalendarCheck aria-hidden />
          <span>Book an Appointment</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[calc(100%-2rem)] sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>Online booking is not available yet. Please check back soon to schedule your visit.</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}