import type { NewsSummary } from "@/types/news";


interface Props {
  summary: NewsSummary;
}


export default function SummaryCard({
  summary,
}: Props) {

  return (

    <div
      className="
      rounded-2xl
      bg-white
      p-6
      shadow-lg
      space-y-4
      "
    >

      <h2 className="text-2xl font-bold">
        {summary.title}
      </h2>


      <p className="text-gray-700">
        {summary.summary}
      </p>


      <div>

        <h3 className="font-semibold">
          핵심 팩트
        </h3>

        <ul className="list-disc pl-5">

          {summary.facts.map((fact,index)=>(
            <li key={index}>
              {fact}
            </li>
          ))}

        </ul>

      </div>


      <div
        className="
        rounded-xl
        bg-blue-50
        p-4
        "
      >

        <h3 className="font-semibold">
          비즈니스 시사점
        </h3>

        <p>
          {summary.businessInsight}
        </p>

      </div>


    </div>

  );
}