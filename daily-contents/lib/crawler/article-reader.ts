import {
  readWithJina,
  ArticleContent,
} from "./jina-reader";

import {
  readWithFirecrawl,
} from "./firecrawl";

export async function extractArticle(
  url: string
): Promise<ArticleContent> {

  try {

    console.log("Jina Reader...");

    return await readWithJina(url);

  } catch (error) {

    console.warn("Jina 실패", error);

  }

  try {

    console.log("Firecrawl...");

    return await readWithFirecrawl(url);

  } catch (error) {

    console.error("Firecrawl 실패", error);

    throw new Error(
      "기사 본문을 추출할 수 없습니다."
    );

  }

}