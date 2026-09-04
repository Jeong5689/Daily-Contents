export interface ArticleContent {
  title: string;
  content: string;
}

export async function readWithFirecrawl(
  url: string
): Promise<ArticleContent> {

  const response = await fetch(
    "https://api.firecrawl.dev/v1/scrape",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.FIRECRAWL_API_KEY}`,
      },

      body: JSON.stringify({
        url,
        formats: ["markdown"],
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Firecrawl Error");
  }

  const json = await response.json();

  return {
    title: json.data?.metadata?.title ?? "",
    content: json.data?.markdown ?? "",
  };
}