import { useState } from "react";

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

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 bg-amber-200 min-h-[100vh]">
      <h1 className="font-thin leading-none text-[70px] tracking-wider">
        Discover CodeSandbox templates
      </h1>

      <button className="border-b-2 border-black" onClick={fetchTemplates}>
        Fetch Templates
      </button>

      <div className="pt-20">
        {templates.map((item) => {
          return (
            <div
              key={item.title}
              className="border-b-2 border-black pb-3 flex gap-4 ml-20 mb-4"
            >
              <div>
                <img className="w-[50px]" src={item.custom_template.icon_url} />
              </div>
              <div>
                <div className="font-medium text-[30px]">{item.title}</div>
                <div className="opacity-60">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
