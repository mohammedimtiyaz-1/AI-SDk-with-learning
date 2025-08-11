import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export const runtime = "edge"; // faster cold starts

export async function POST() {
  const result = await streamText({
    model: openai("gpt-4o-mini"),
    prompt: "Explain JavaScript closures simply.",
  });

  return result.toTextStreamResponse();
}
