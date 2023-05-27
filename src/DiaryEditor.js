import { useState } from "react";

//리액트의 기능에서  useState를 가져온다.

const DiaryEditor = () => {
  const [diaryState, setDiaryState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = (e) => {
    setDiaryState({
      ...diaryState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("저장된 일기", diaryState);
  };
  return (
    <section>
      <h2>오늘의 일기</h2>
      <div>
        <input
          type="text"
          name="author"
          value={diaryState.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          rows={10}
          cols={20}
          name="content"
          value={diaryState.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={diaryState.emotion}
          onChange={handleChangeState}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>

      <div>
        <button type="button" onClick={handleSubmit}>
          일기 저장
        </button>
      </div>
    </section>
  );
};
export default DiaryEditor;
