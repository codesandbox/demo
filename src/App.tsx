import { useEffect, useState } from "react";

function App() {
  const [templates, setTemplates] = useState<any>([]);

  const fetchTemplates = async () => {
    const data = await fetch(
      "https://codesandbox.io/api/v1/sandboxes/templates/official",
    );
    const json = await data.json();
    const sandboxes = json[0].sandboxes;

    console.log(sandboxes);

    setTemplates(
      sandboxes.filter((item) =>
        (item.custom_template?.icon_url ?? "").startsWith("http"),
      ),
    );
  };

  useEffect(() => {
    fetchTemplates();
  }, []);

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 bg-amber-100 min-h-[100vh]">
      <div className="fixed">
        <h1 className="font-thin leading-none text-[70px] tracking-wider mb-4">
          Discover CodeSandbox templates
        </h1>

        <button
          className="border-b-2 border-black font-bold pointer hover:border-b-4"
          onClick={fetchTemplates}
        >
          Fetch templates
        </button>
      </div>

      <div className="h-[300px] pointer-events-none" />

      <div className="relative z-1">
        {templates.map((item) => {
          return (
            <div
              key={item.title}
              className="border-2 border-r-4 border-b-4 border-black p-3 flex gap-4 ml-[140px] mb-2 bg-amber-200 relative"
            >
              <div>
                <img className="w-[50px]" src={item.custom_template.icon_url} />
              </div>

              <div>
                <div className="font-medium text-[20px]">{item.title}</div>
                <div className="opacity-60 text-[14px]">{item.description}</div>
              </div>

              <svg
                className="absolute right-4 top-4 cursor-pointer"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
