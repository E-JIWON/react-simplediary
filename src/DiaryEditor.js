import { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef(); //React.MutableRefObject<undefined>
  const contentInput = useRef();
  //MutableRefObject HTML DOM 요소에 접근할 수 있는 기능임
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
    if (diaryState.author.length < 1) {
      alert("작성자는 최소 1글자 이상 입력해주세요.");
      authorInput.current.focus();
      return;
    }
    if (diaryState.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요.");
      contentInput.current.focus();
      return;
    }

    console.log("저장된 일기", diaryState);
  };
  return (
    <section className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          type="text"
          name="author"
          value={diaryState.author}
          onChange={handleChangeState}
          placeholder="일기 제목을 입력해주세요."
          tabIndex={10}
          ref={authorInput} //ref라는 레퍼런스 객체를 통해서 input을 접근 할 수 있음
        />
      </div>
      <div>
        <textarea
          name="content"
          value={diaryState.content}
          onChange={handleChangeState}
          placeholder="일기 내용을 입력해주세요."
          tabIndex={20}
          ref={contentInput}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={diaryState.emotion}
          onChange={handleChangeState}
          tabIndex={30}
          title="감정 점수"
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
        <button type="button" onClick={handleSubmit} tabIndex={40}>
          일기 저장
        </button>
      </div>
    </section>
  );
};
export default DiaryEditor;
