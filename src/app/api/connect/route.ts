import { NextResponse } from "next/server";

const N8N_WEBHOOK_URL = "https://brve.app.n8n.cloud/webhook/forms";

export async function POST(req: Request) {
  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  try {
    const upstream = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!upstream.ok) {
      return NextResponse.json(
        { ok: false, error: "Upstream webhook error" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error instanceof Error ? error.message : "Webhook request failed" },
      { status: 502 }
    );
  }
}

