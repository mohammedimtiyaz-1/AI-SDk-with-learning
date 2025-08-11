import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const schema = z.object({
    name: z.string(),
    talent: z.string(),
    skills: z.array(z.string()),
  });
  const { object } = await generateObject({
    model: openai("gpt-4o-mini"),
    schema,
    prompt: "give me the powerfull character info of Thanos",
    // You can use body data here if needed
  });
  return NextResponse.json(object);
}
