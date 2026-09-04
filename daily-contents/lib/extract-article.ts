import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";

export interface ArticleContent {
  title: string;
  content: string;
}

export async function extractArticle(
  url: string
): Promise<ArticleContent> {

  const response = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("기사를 가져오지 못했습니다.");
  }

  const html = await response.text();

  const dom = new JSDOM(html, {
    url,
  });

  const reader = new Readability(
    dom.window.document
  );

  const article = reader.parse();

  if (!article) {
    throw new Error("기사 추출 실패");
  }

  return {
    title: article.title ?? "",
    content: article.textContent ?? "",
  };
}