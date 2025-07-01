import { ClassifyEmailResponse, Email } from "@/types";

class IssueClassificationService {
  async classifyEmail(email: Email): Promise<ClassifyEmailResponse> {
    const prompt = `You are an expert email classification assistant.

Classify the following email and return ONLY a valid JSON object with exactly these 4 keys:
- reasoning
- responsible_party
- reason
- details

⚠️ Do NOT include any explanations or text outside the JSON object.

Email:
${email.content}`;

    const apiKey = process.env.GROK_API_KEY;
    if (!apiKey) {
      return {
        issue: {
          reasoning: "Missing GROK_API_KEY in environment",
          class: '',
          responsible_party: '',
          reason: '',
          details: ''
        },
        duration: 0,
        model: "grok"
      };
    }

    // Log the key (for debug only — remove in production!)
    if (process.env.NODE_ENV !== "production") {
      console.log("🔐 Loaded GROK_API_KEY (partial):", apiKey.slice(0, 12) + "...[hidden]");
      console.log("GROK_API_KEY from server env:", process.env.GROK_API_KEY);
    }

    const startTime = Date.now();

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            { role: "system", content: "You are a JSON-only classifier." },
            { role: "user", content: prompt }
          ]
        })
      });

      const data = await response.json();
      const duration = Date.now() - startTime;

      if (process.env.NODE_ENV !== "production") {
        console.log("🧠 Grok API raw response:", JSON.stringify(data, null, 2));
      }

      let parsed = null;
      let content = '';

      if (
        data.choices &&
        data.choices.length > 0 &&
        data.choices[0].message &&
        data.choices[0].message.content
      ) {
        content = data.choices[0].message.content;
        try {
          const match = content.match(/\{[\s\S]*\}/);
          parsed = match ? JSON.parse(match[0]) : JSON.parse(content);
        } catch (e) {
          parsed = {
            reasoning: 'Grok did not return valid JSON. Raw response: ' + content,
            class: '',
            responsible_party: '',
            reason: '',
            details: ''
          };
        }
      } else if (data.error) {
        parsed = {
          reasoning: 'Grok API error: ' + data.error.message,
          class: '',
          responsible_party: '',
          reason: '',
          details: ''
        };
      } else {
        parsed = {
          reasoning: 'No response from Grok',
          class: '',
          responsible_party: '',
          reason: '',
          details: ''
        };
      }

      return {
        issue: parsed,
        duration,
        model: "grok"
      };

    } catch (error: any) {
      const errorMsg =
        error instanceof Error
          ? error.message
          : typeof error === "object" && error !== null
          ? JSON.stringify(error)
          : String(error);

      return {
        issue: {
          reasoning: 'Grok API fetch error: ' + errorMsg,
          class: '',
          responsible_party: '',
          reason: '',
          details: ''
        },
        duration: 0,
        model: "grok"
      };
    }
  }
}

export default IssueClassificationService;
