"use client";

import { useState } from "react";
import { isValidUrl } from "@/lib/validator/validate-url";

import SummaryCard from "@/components/summary/SummaryCard";
import type { NewsSummary } from "@/types/news";


export default function NewsInput() {

  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [summary, setSummary] =
    useState<NewsSummary | null>(null);



  async function handleGenerate(
  e: React.FormEvent
) {

  e.preventDefault();

  setError("");
  setSummary(null);


  if (!url.trim()) {

    setError(
      "뉴스 URL을 입력해주세요."
    );

    return;

  }


  if (!isValidUrl(url)) {

    setError(
      "올바른 URL 형식이 아닙니다."
    );

    return;

  }


  setLoading(true);


  try {

    const response = await fetch(
      "/api/summarize",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          url,
        }),
      }
    );


    const data = await response.json();


    if (!response.ok) {

      throw new Error(
        data.error ||
        "AI 요약 실패"
      );

    }


    setSummary(data);


  } catch(error) {


    setError(
      error instanceof Error
      ? error.message
      : "알 수 없는 오류 발생"
    );


  } finally {


    setLoading(false);


  }

}



  return (

    <div className="space-y-6">


      <form
        onSubmit={handleGenerate}
        className="flex gap-3"
      >

        <input

          type="url"

          value={url}

          onChange={(e)=>
            setUrl(e.target.value)
          }

          placeholder="Enter news URL"

          className="
          flex-1
          rounded-xl
          border
          px-4
          py-3
          "

        />


        <button

          type="submit"

          disabled={loading}

          className="
          rounded-xl
          bg-blue-600
          px-6
          text-white
          disabled:opacity-50
          "

        >

          {
            loading
              ? "Generating..."
              : "Generate"
          }


        </button>


      </form>



      {
        error && (

          <p className="text-red-500">
            {error}
          </p>

        )
      }



      {
        summary && (

          <SummaryCard
            summary={summary}
          />

        )
      }


    </div>

  );

}