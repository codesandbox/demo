import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./Card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./Table";
import { Button } from "./Button";

function App() {
  const [templates, setTemplates] = useState<any>([])

  const fetchTemplates  = async () => {
    const data = await fetch("https://codesandbox.io/api/v1/sandboxes/templates/official")
    const json = await data.json()
    const sandboxes = json[0].sandboxes

    console.log(sandboxes)

    setTemplates(sandboxes.filter(item => (item.custom_template?.icon_url ?? "").startsWith("http")))
  }

  fetchTemplates()

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 bg-amber-200 min-h-[100vh]">

      <h1 className="font-thin leading-none text-[70px] pb-10">Discover CodeSandbox templates</h1>

      {templates.map((item) => {
        return (
          <div key={item.title} className="border-b-2 border-gray-100">
            <div><img className="w-[50px]" src={item.custom_template.icon_url} /></div>
            <div className="font-medium">{item.title}</div>
            <div>{item.description}</div>
          </div>
          );
        })}

      {/* <Card>
        <CardHeader>
          <CardTitle>
            CodeSandbox templates 
            <Button variant="outline" onClick={fetchTemplates}>Load</Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Icon</TableHead>
                  <TableHead>Name</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {templates.map((item) => {
                  return (
                    <TableRow key={item.title}>
                      <TableCell><img className="w-[50px]" src={item.custom_template.icon_url} /></TableCell>
                      <TableCell className="font-medium">{item.title}</TableCell>
                      <TableCell>{item.description}</TableCell>
                    </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        </CardContent> 
      </Card> */}
    </div>
  );
}

export default App;
