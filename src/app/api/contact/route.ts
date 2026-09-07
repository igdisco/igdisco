import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (!data || typeof data !== "object")
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    const { name, email, meetingType, date, message = "" } = data;
    if (
      typeof name !== "string" ||
      !name.trim() ||
      name.length > 120 ||
      typeof email !== "string" ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !["online", "in-person"].includes(meetingType) ||
      typeof date !== "string" ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      Number.isNaN(Date.parse(date)) ||
      typeof message !== "string" ||
      message.length > 5000
    ) {
      return NextResponse.json(
        { error: "Please check the form fields" },
        { status: 400 },
      );
    }
    const endpoint = process.env.CONTACT_WEBHOOK_URL;
    if (!endpoint)
      return NextResponse.json(
        { error: "Contact delivery is not configured" },
        { status: 503 },
      );
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        meetingType,
        date,
        message: message.trim(),
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok)
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to process request" },
      { status: error instanceof SyntaxError ? 400 : 502 },
    );
  }
}
