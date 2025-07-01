import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const apiKey = process.env.GROK_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not loaded" }, { status: 500 });
  }

  const { emailContent } = await req.json();
  if (!emailContent) {
    return NextResponse.json({ error: "Missing email content" }, { status: 400 });
  }

  const prompt = `You are an expert email classification assistant.\n\nClassify the following email and return ONLY a valid JSON object with these fields: reasoning, responsible_party, reason, details.\n\nEmail:\n${emailContent}`;

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        messages: [
          { role: 'system', content: 'You are a JSON-only classifier.' },
          { role: 'user', content: prompt },
        ],
      }),
    });
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}
