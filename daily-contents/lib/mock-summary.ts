import type { NewsSummary } from "@/types/news";

export const mockSummary: NewsSummary = {
  title: "생성형 AI 시장, 기업 활용 단계로 빠르게 전환",

  summary:
    "생성형 AI 기술이 단순한 실험 단계를 넘어 기업의 업무 자동화와 생산성 향상을 위한 핵심 도구로 활용되고 있습니다. 다양한 산업에서 AI 기반 서비스 도입이 확대되면서 새로운 비즈니스 기회가 만들어지고 있습니다.",

  facts: [
    "글로벌 기업들이 생성형 AI 도입을 확대하고 있음",
    "AI 기반 업무 자동화 서비스 시장이 빠르게 성장하고 있음",
    "기업 경쟁력이 AI 활용 능력에 의해 좌우되는 시대가 되고 있음",
  ],

  businessInsight:
    "개인과 기업은 AI 도구 활용 역량을 강화하고 반복 업무 자동화 시스템을 구축해야 합니다.",

  sourceUrl:
    "https://example.com/news",

  createdAt:
    new Date().toISOString(),
};