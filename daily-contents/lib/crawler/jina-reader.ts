export interface ArticleContent {
  title: string;
  content: string;
}

export async function readWithJina(
  url: string
): Promise<ArticleContent> {

  const target =
    `https://r.jina.ai/http://${url.replace(/^https?:\/\//, "")}`;

  const response = await fetch(target, {
    headers: {
      Accept: "text/plain",
      ...(process.env.JINA_API_KEY
        ? {
            Authorization: `Bearer ${process.env.JINA_API_KEY}`,
          }
        : {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Jina Reader Error (${response.status})`);
  }

  const text = await response.text();

  if (!text.trim()) {
    throw new Error("Jina returned empty content.");
  }

  return {
    title: "",
    content: text,
  };
}