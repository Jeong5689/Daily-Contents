"use client";

import { useState } from "react";
import { isValidUrl } from "@/lib/validator/validate-url";
import { mockSummary } from "@/lib/mock-summary";
import SummaryCard from "@/components/summary/SummaryCard";
import type { NewsSummary } from "@/types/news";

export default function NewsInput() {

  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [summary, setSummary] =
    useState<NewsSummary | null>(null);


  function handleGenerate() {

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


    // Mock AI Summary 출력
    setSummary({

      ...mockSummary,

      sourceUrl: url,

    });

  }


  return (

    <div className="space-y-6">


      <div className="flex gap-3">


        <input

          className="
          flex-1
          rounded-xl
          border
          px-4
          py-3
          text-lg
          "

          placeholder="
          뉴스 URL을 입력하세요
          "

          value={url}

          onChange={(e)=>
            setUrl(e.target.value)
          }

        />


        <button

          onClick={handleGenerate}

          className="
          rounded-xl
          bg-blue-600
          px-6
          text-white
          "

        >

          Generate

        </button>


      </div>



      {
        error && (

          <div className="
          text-red-500
          "
          >

            {error}

          </div>

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