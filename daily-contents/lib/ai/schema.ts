export const NewsSummarySchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    title: {
      type: "string",
    },
    summary: {
      type: "string",
    },
    facts: {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 3,
      maxItems: 3,
    },
    businessInsight: {
      type: "string",
    },
  },
  required: [
    "title",
    "summary",
    "facts",
    "businessInsight",
  ],
} as const;