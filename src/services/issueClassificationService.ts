import { ClassifyEmailResponse, Email } from "@/types";
import { issueMappings } from "@/helpers/issueMappings";
import { exampleAnswers } from "@/helpers/exampleAnswers";
import { glossary } from "@/helpers/glossary"
const vertexAi = require("@google-cloud/vertexai");


class IssueClassificationService {
  private vertexAiClient
  constructor() {
    this.vertexAiClient = new vertexAi.VertexAI({
      project: 'ai-poc-390318',
      location: "us-central1",
    });
  }

  async classifyEmail(email: Email): Promise<ClassifyEmailResponse> {
    const operationStart = Date.now();
    try {
      console.log("classify email job started");
      const body = email.content.replace(/(\n)/g, "");
      const MAX_TOKENS = 12000 - 500;
      const estimatedTokens = body.split(/\s+/).length;

      let truncatedBody = body;
      if (estimatedTokens > MAX_TOKENS) {
        const words = body.split(/\s+/);
        truncatedBody = words.slice(0, MAX_TOKENS).join(' ');
      }

      const request = await this.prepareClassificationRequest(
        email.content,
        truncatedBody,
        issueMappings,
        exampleAnswers,
      );

      const generativeModel = this.vertexAiClient.preview.getGenerativeModel({
        model: "gemini-2.0-flash-001",
        generation_config: {
          max_output_tokens: 1000,
          temperature: 0,
          top_p: 1,
        },
      });

      const classificationResponse = await generativeModel.generateContentStream(
        request
      );
      let parsedResult = (await classificationResponse.response).candidates[0].content.parts[0].text;
      const operationEnd = Date.now();

      try {
        parsedResult = JSON.parse(parsedResult);
      } catch (error) {
        const jsonPattern = /```json\n([\s\S]*?)\n```/;
        const matches = parsedResult.match(jsonPattern);

        if (matches && matches[1]) {
          try {
            parsedResult = JSON.parse(matches[1].trim());
          } catch (error) {
            console.error('Failed to parse JSON: Invalid JSON content');
          }
        } else {
          console.error('Failed to parse JSON: No valid JSON content found');
          return {
            issue: null,
            duration: operationEnd - operationStart,
            model: "gemini-2.0-flash-001",
          };
        }
      }

      return {
        issue: { ...parsedResult },
        duration: operationEnd - operationStart,
        model: "gemini-2.0-flash-001",
      };
    } catch (error) {
      console.error('Failed to parse JSON: Invalid JSON content');
      return {
        issue: null,
        duration: Date.now() - operationStart,
        model: "gemini-2.0-flash-001",
      };
    }
  }

  async prepareClassificationRequest(subject: string, body: string, issueMappings: any, exampleAnswers: any) {
    const text = ` ### Instructions ### 
                      You are an expert in supply chain management and exception management. Exception management refers to the process of identifying, analyzing, and resolving anomalies that occur during the shipping process. 
                      These exceptions can include any event that changes the arrival time, such as lost containers, port congestion, or damaged goods, each of which can disrupt the supply chain.
                      
                      ### Task ###
                      Read the EMAIL and designate the exception type of an issue ticket in the EMS. It's completely ok to say you don't know. It's much more important to not make mistakes instead of making a wrong prediction.
                      The subject of the email is "${subject}".
                      Here are the exception type codes and their descriptions:
                      1. Consignor Issues (CO)
                         ├── 1.1. Delay
                         │   └── O_CO01: Consignor delays pickup
                         ├── 1.2. Schedule
                         │   └── O_CO07: Consignor cancels transport 
                         ├── 1.3. Volume
                         │   ├── O_CO02: Consignor provides a higher volume than advised
                         │   ├── O_CO03: Consignor provides lower volume than advised
                         │   └── O_CO08: Consignor fails to provide goods
                         └──  1.4. Other
                             ├── O_CO04 - Incorrect order content detected
                             ├── O_CO05: Missing or incorrect transport documents
                             └── O_CO06: Customs issue
                      
                      2. Carrier Issues (CR)
                         ├── 2.1. Delay
                         │   ├── O_CR01: Carrier is late for pick up
                         │   └── O_CR06: Carrier is late for delivery
                         └── 2.2. Schedule
                             ├── O_CR11: Carrier requesting changes to schedule
                             └── O_CR12: Carrier delivery prior schedule
                      
                      3. Recipient Issues (RE)
                         ├── 3.1. Delay
                         │   └── O_RE03: Recipient delays delivery  
                         └── 3.2. Schedule
                             ├── O_RE02: Expedited transport requested
                             └── S_RE03: Recipient requests cancelling shipment
                      
                      Analyze the details of EMAIL and designate it into the appropriate exception type.
                      Return a response exactly in this format:
                      {
                          "reasoning": "<Use provided reasoning examples. If you are not 100% sure say you don't know, out of scope. Be laconic.>",
                          "class": "<Most relevant code>"
                          "responsible_party" : <by the received class get responsible_party from the Issue Mappings array>
                          "reason" : <by the received class get reason from the Issue Mappings array>
                          "details" : <by the received class get details from the Issue Mappings array>
                      }
                      
                      ##Examples
                      {${exampleAnswers}}

                      ##Glossary
                      {${glossary}}

                      ##Issue Mappings
                      {${issueMappings}}
                    
                      
                      Mail Chain:
                      >>
                      ${body}
                      <<   `

    return {
      contents: [
        {
          role: "user",
          parts: [
            {
              text: text,
            },
          ],
        },
      ],
    };
  }
}

export default IssueClassificationService;