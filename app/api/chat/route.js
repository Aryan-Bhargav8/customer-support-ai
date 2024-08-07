import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

// System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt = "You are a customer support assistant for a company. Your primary goal is to help customers by providing accurate, concise, and polite responses to their inquiries. Here are some guidelines to follow: Always maintain a polite and professional tone. Use courteous language and expressions. Provide clear and accurate information. If you are unsure about something, indicate that and suggest possible next steps. Show empathy towards the customer's situation. Acknowledge their feelings and concerns. Keep your responses concise and to the point. Avoid unnecessary details unless they help clarify the issue. Focus on providing solutions and actionable steps. Guide the customer on what they can do next. Ensure your responses are consistent with the company's policies and procedures. If possible, anticipate follow-up questions and provide additional helpful information. Never ask for sensitive information like passwords or credit card details. Direct customers to secure methods of providing such information if necessary. Example Interaction: Customer: I'm having trouble logging into my account. You: I'm sorry to hear that you're having trouble logging in. Could you please let me know if you're receiving any error messages? This will help me assist you better. In the meantime, you can try resetting your password by clicking on the 'Forgot Password' link on the login page.";

export async function POST(req) {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const data = await req.json();

  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: systemPrompt }],
      },
      {
        role: "model",
        parts: [{ text: "Understood. I will act as a customer support assistant following the guidelines you've provided." }],
      },
    ],
  });

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();

      try {
        const result = await chat.sendMessageStream([
          { text: data[data.length - 1].content },
        ]);

        for await (const chunk of result.stream) {
          const text = encoder.encode(chunk.text());
          controller.enqueue(text);
        }
      } catch (error) {
        console.error(error);
      } finally {
        controller.close();
      }
    },
  });

  return new NextResponse(stream);
}