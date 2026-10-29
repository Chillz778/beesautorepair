import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

// The single booking action on the page. It opens a dialog that states plainly
// that online booking is not live yet, so nobody gets a false confirmation.
export function BookingButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn btn-accent btn-lg h-auto whitespace-normal">
          <CalendarCheck aria-hidden />
          <span>Book an Appointment</span>
        </Button>
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
