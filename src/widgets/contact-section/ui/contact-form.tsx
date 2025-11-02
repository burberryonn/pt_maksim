"use client";

import { useRef, useState, useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Button } from "@/shared/ui/button";
import { Confetti, type ConfettiRef } from "@/shared/ui/confetti";
import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/textarea";

type ContactFormProps = {
  labels: {
    name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  validation: {
    name: string;
    email: string;
    message: string;
  };
  success: {
    title: string;
    description: string;
  };
};

const contactSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z
    .string()
    .trim()
    .optional(),
  message: z.string().trim().min(1),
});

export function ContactForm({
  labels,
  placeholders,
  validation,
  success,
}: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const confettiRef = useRef<ConfettiRef>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  const schema = contactSchema.extend({
    name: contactSchema.shape.name.min(1, validation.name),
    email: contactSchema.shape.email.email(validation.email),
    message: contactSchema.shape.message.min(1, validation.message),
  });

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof schema>) => {
    setHasSubmitted(false);
    startTransition(() => {
      // Simulate server interaction; replace with API integration.
      setTimeout(() => {
        console.log("Contact request", values);
        setHasSubmitted(true);
        form.reset();
        toast.success(success.title, {
          description: success.description,
        });
        const button = submitButtonRef.current;
        if (button && typeof window !== "undefined") {
          const rect = button.getBoundingClientRect();
          void confettiRef.current?.fire({
            particleCount: 160,
            spread: 70,
            startVelocity: 45,
            origin: {
              x: (rect.left + rect.width / 2) / window.innerWidth,
              y: (rect.top + rect.height / 2) / window.innerHeight,
            },
          });
        }
      }, 600);
    });
  };

  return (
    <Form {...form}>
      <Confetti
        ref={confettiRef}
        manualstart
        className="pointer-events-none fixed inset-0 z-50"
      />
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.name}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={placeholders.name}
                    className="h-12 rounded-2xl border-background/30 bg-background/10 text-background placeholder:text-background/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{labels.email}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    placeholder={placeholders.email}
                    className="h-12 rounded-2xl border-background/30 bg-background/10 text-background placeholder:text-background/50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{labels.phone}</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholders.phone}
                  className="h-12 rounded-2xl border-background/30 bg-background/10 text-background placeholder:text-background/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{labels.message}</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder={placeholders.message}
                  className="min-h-[160px] rounded-3xl border-background/30 bg-background/10 text-background placeholder:text-background/50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          ref={submitButtonRef}
          type="submit"
          disabled={isPending}
          className="h-14 rounded-full bg-background text-foreground transition hover:bg-background/90"
        >
          {isPending ? `${labels.submit}…` : labels.submit}
        </Button>
        {hasSubmitted ? (
          <p className="text-center text-sm text-background/60">
            {success.description}
          </p>
        ) : null}
      </form>
    </Form>
  );
}
