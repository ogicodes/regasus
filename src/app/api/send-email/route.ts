import { EmailTemplate } from "@/components/EmailTemplate/EmailTemplate";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailTo = process.env.EMAIL || "";

export async function POST(request: Request) {
  try {
    const { name, email, company, projectDetails } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "Regasus <regasus@resend.dev>",
      to: [emailTo],
      subject: "Hello world",
      react: EmailTemplate({ name, email, company, projectDetails }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
