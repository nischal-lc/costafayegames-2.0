// /pages/api/send-message.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success?: boolean;
  error?: string;
  data?: unknown;
  details?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!TELEGRAM_TOKEN || !CHAT_ID) {
    return res.status(500).json({ error: "Telegram credentials are missing" });
  }

  try {
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      return res.status(500).json({ error: "Failed to send message", data });
    }

    return res.status(200).json({ success: true, data });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return res
      .status(500)
      .json({ error: "Error sending message", details: errorMessage });
  }
}
