import { NextRequest, NextResponse } from "next/server";
import { extractArticle } from "@/lib/extract-article";
import { openai } from "@/lib/ai/openai";

export async function POST(request: NextRequest) {
  try {

    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 }
      );
    }

    // 기사 추출
    const article = await extractArticle(url);

    const prompt = `
기사 제목

${article.title}

기사 본문

${article.content}

아래 JSON 형식으로만 응답하세요.

{
  "title":"",
  "summary":"",
  "facts":[
    "",
    "",
    ""
  ],
  "businessInsight":"",
    "marketImpact": "긍정 | 중립 | 부정",
  "keywords": [
    "",
    "",
    "",
    "",
    ""
  ],
  "category": "",
  "sentiment": "positive | neutral | negative",
  "importance": 1
}
`;

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      input: prompt,
    });

    const result = JSON.parse(response.output_text);

    return NextResponse.json(result);

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "OpenAI API Error",
      },
      {
        status: 500,
      }
    );
  }
}