import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const diaryDataList = [
    {
      id: 1,
      author: "이지원",
      content: "hi 1",
      emotion: 5,
      created_date: new Date(),
    },
    {
      id: 2,
      author: "이지2",
      content: "hi 2",
      emotion: 3,
      created_date: new Date(),
    },
    {
      id: 3,
      author: "이지3",
      content: "hi 3",
      emotion: 2,
      created_date: new Date(),
    },
    {
      id: 4,
      author: "이지4",
      content: "hi 4",
      emotion: 1,
      created_date: new Date(),
    },
  ];
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryDataList={diaryDataList} />
    </div>
  );
}

export default App;
