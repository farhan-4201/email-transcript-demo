import { ClassifyEmailResponse, Email } from "@/types";

class IssueClassificationService {
  async classifyEmail(email: Email): Promise<ClassifyEmailResponse> {
    const apiKey = process.env.OPENAI_API_KEY;
    const prompt = `Classify this email:\n\n${email.content}\n\nReturn a JSON object with fields: reasoning, responsible_party, reason, details.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are an email classification assistant." },
          { role: "user", content: prompt }
        ],
        max_tokens: 300
      })
    });

    const data = await response.json();
    // Parse the OpenAI response to match your ClassifyEmailResponse type
    let parsed = null;
    try {
      parsed = JSON.parse(data.choices[0].message.content);
    } catch (e) {
      parsed = { reasoning: data.choices[0].message.content, responsible_party: '', reason: '', details: '' };
    }

    return {
      issue: parsed,
      duration: 0,
      model: "openai"
    };
  }
}

export default IssueClassificationService;