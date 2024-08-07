import { NextResponse } from "next/server";
import OpenAI from "openai";


// System prompt for the AI, providing guidelines on how to respond to users
const systemPrompt = ""// Use your own system prompt here

export async function POST(req) {
    const openai = new OpenAI(process.env.OPENAI_API_KEY);// Use your own OpenAI API key here to authenticate with the OpenAI API to Create a new instance of the OpenAI client
    const data = await req.json();// Parse the JSON body of the incoming request

    // Create a chat completion request to the OpenAI API
    const completion = await openai.chat.completions.create({
        messages: [{
            role: 'system',
            content: systemPrompt
        }, ...data],// Include the system prompt and user messages
        model: 'gpt-4o',
        stream: true,// Enable streaming responses
    })

    
}