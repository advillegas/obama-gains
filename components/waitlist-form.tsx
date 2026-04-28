"use client";

import { useState, useTransition } from "react";
import { Loader2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { joinWaitlist } from "@/app/actions/waitlist";
import { toast } from "sonner";

export function WaitlistForm() {
  const [pending, startTransition] = useTransition();
  const [done, setDone] = useState(false);

  function onSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await joinWaitlist(formData);
      if (result.ok) {
        setDone(true);
        toast.success(result.message);
      } else {
        toast.error(result.error);
      }
    });
  }

  if (done) {
    return (
      <div className="flex items-center justify-center gap-3 rounded-xl border border-bull/30 bg-bull/10 px-5 py-4 text-bull">
        <CheckCircle2 className="h-5 w-5" />
        <span className="text-sm font-semibold">
          You&apos;re in. Hope is on the way.
        </span>
      </div>
    );
  }

  return (
    <form
      action={onSubmit}
      className="flex flex-col gap-3 sm:flex-row"
      noValidate
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <Input
        id="email"
        type="email"
        name="email"
        required
        disabled={pending}
        placeholder="your.email@theworkingclass.com"
        className="h-12 flex-1 text-base"
      />
      <Button
        type="submit"
        variant="gold"
        size="lg"
        disabled={pending}
        className="h-12 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Adding you…
          </>
        ) : (
          <>
            Join the Movement
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  );
}
