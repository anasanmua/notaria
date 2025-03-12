import emailjs from "@emailjs/browser";

export interface User extends Record<string, unknown> {
  name: string;
  surname: string;
  email: string;
  phone: number;
  contactWay: string;
  message: string;
  privacy: boolean;
}

export const sendEmail = (values: User) => {
  emailjs
    .send("contact_service", "contact_form", values, {
      publicKey: process.env.NEXT_PUBLIC_EMAIL_SENDER_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error);
      },
    );
};
