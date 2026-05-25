import { NextRequest, NextResponse } from "next/server";
import type { ApiResponse } from "@/types";

// Lead notification recipient defined as: sales@cctv.org
// To activate delivery: install `resend` and replace the console.info below with:
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "noreply@cctv.org",
//     to: LEAD_RECIPIENT,
//     subject: `New Contact: ${body.name}`,
//     text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nService: ${body.service}\nMessage: ${body.message}`,
//   });

const LEAD_RECIPIENT = "sales@cctv.org";

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await req.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Delivery target: LEAD_RECIPIENT (sales@cctv.org) — wire Resend here
    console.info("[contact] Submission received → route to:", LEAD_RECIPIENT, { name: body.name, email: body.email });

    return NextResponse.json(
      { success: true, message: "Message received. We will be in touch shortly." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
