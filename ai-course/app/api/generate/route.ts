import { NextResponse } from "next/server";
import { generateText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST() {
  const out = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: "Write a haiku about TypeScript.",
  });

  return NextResponse.json(out);
}
