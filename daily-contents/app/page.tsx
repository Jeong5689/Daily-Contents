import NewsInput from "@/components/news/NewsInput";


export default function Home() {

  return (

    <main
      className="
      min-h-screen
      bg-gray-50
      px-6
      py-12
      "
    >

      <div
        className="
        mx-auto
        max-w-5xl
        space-y-8
        "
      >

        <header>

          <h1
            className="
            text-5xl
            font-bold
            "
          >
            Daily Contents
          </h1>


          <p
            className="
            mt-3
            text-gray-500
            text-xl
            "
          >
            Create once. Publish everywhere.
          </p>

        </header>


        <NewsInput />


      </div>

    </main>

  );
}