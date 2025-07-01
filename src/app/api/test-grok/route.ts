import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const apiKey = process.env.GROK_API_KEY;
  console.log("GROK_API_KEY used:", apiKey);

  if (!apiKey) {
    return NextResponse.json({ error: "API key not loaded" }, { status: 500 });
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama3-8b-8192",
      messages: [
        { role: "system", content: "You are a JSON-only classifier." },
        { role: "user", content: "Classify: My order was delayed 2 weeks." }
      ]
    })
  });

  const data = await response.json();
  return NextResponse.json(data);
}
