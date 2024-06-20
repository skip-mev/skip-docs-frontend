import { z } from "zod";

export const contactFormSchema = z.object({
  from_name: z.string({ required_error: "Please enter your name" }).min(1),
  reply_to: z
    .string({ required_error: "Please enter your email address" })
    .email(),
  subject: z.string({ required_error: "Please enter a subject" }).min(1),
  message: z.string({ required_error: "Please enter a message" }).min(1),
});
