import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { message } = body;

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_IDS = [
    process.env.CHAT_ID_1,
    process.env.CHAT_ID_2,
  ].filter(Boolean);

  try {
    for (const chatId of CHAT_IDS) {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message", details: error },
      { status: 500 }
    );
  }
}
