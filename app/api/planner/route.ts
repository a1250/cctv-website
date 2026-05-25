import { NextRequest, NextResponse } from "next/server";
import type { ApiResponse, PlannerSubmitPayload } from "@/types";

// Lead notification recipient defined as: sales@cctv.org
// To activate delivery: install `resend` and replace the console.info below with:
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "noreply@cctv.org",
//     to: LEAD_RECIPIENT,
//     subject: `New Project Brief: ${body.contact.name}`,
//     text: `Name: ${body.contact.name}\nEmail: ${body.contact.email}\nServices: ${body.selectedServices.join(", ")}\nBudget: ${body.budget}\nTimeline: ${body.timeline}\nProperty: ${body.propertyType}\nNotes: ${body.contact.notes}`,
//   });

const LEAD_RECIPIENT = "sales@cctv.org";

export async function POST(req: NextRequest): Promise<NextResponse<ApiResponse>> {
  try {
    const body: PlannerSubmitPayload = await req.json();

    if (!body.contact?.email || !body.selectedServices?.length) {
      return NextResponse.json(
        { success: false, message: "Email and at least one service selection are required." },
        { status: 400 }
      );
    }

    // Delivery target: LEAD_RECIPIENT (sales@cctv.org) — wire Resend here
    console.info("[planner] Submission received → route to:", LEAD_RECIPIENT, {
      email: body.contact.email,
      services: body.selectedServices,
      budget: body.budget,
    });

    return NextResponse.json(
      { success: true, message: "Project brief received. A specialist will contact you within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}
