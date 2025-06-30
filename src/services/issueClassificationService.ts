import { ClassifyEmailResponse, Email } from "@/types";

class IssueClassificationService {
  async classifyEmail(email: Email): Promise<ClassifyEmailResponse> {
    const apiKey = process.env.OPENAI_API_KEY;
    const prompt = `You are an expert email classification assistant.\n\nClassify the following email and return ONLY a valid JSON object with these fields: reasoning, responsible_party, reason, details.\n\nEmail:\n${email.content}`;

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
    console.log('OpenAI API raw response:', data);

    let parsed = null;
    let content = '';
    if (data.error) {
      parsed = { reasoning: 'OpenAI API error: ' + data.error.message, responsible_party: '', reason: '', details: '' };
    } else if (data.choices && data.choices.length > 0 && data.choices[0].message && data.choices[0].message.content) {
      content = data.choices[0].message.content;
      try {
        // Try to extract JSON from the response, even if extra text is present
        const match = content.match(/\{[\s\S]*\}/);
        parsed = match ? JSON.parse(match[0]) : JSON.parse(content);
      } catch (e) {
        parsed = { reasoning: 'OpenAI did not return valid JSON. Raw response: ' + content, responsible_party: '', reason: '', details: '' };
      }
    } else {
      parsed = { reasoning: 'No response from OpenAI', responsible_party: '', reason: '', details: '' };
    }

    return {
      issue: parsed,
      duration: 0,
      model: "openai"
    };
  }
}

export default IssueClassificationService;