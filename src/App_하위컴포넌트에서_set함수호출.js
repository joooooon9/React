import { useState } from "react";
function Header(props) {
  // 부모 컴포넌트로부터 state의 값과, set함수를 전달받아
  // state값 변경시 재 렌더링이 발생할수 있도록 set함수를 호출합니다
  return (
    <header>
      <h1>
        <a href="/" onClick={(event)=>{
          event.preventDefault(); // 기본 링크 동작을 막음
          console.log("Header가 클릭되었습니다");
          props.onChangeMode(); // 부모컴포넌트에서 props로 전달받은 함수를 호출
        }} >{props.title}</a>
      </h1>
    </header>
  );
}
function App() {
  // state를 이용해서 하위 컴포넌트에 props로 state값을 넘깁니다
  const [title, setTitle] = useState("기본제목");
  return (
    <div className="App">
      {/* <Header title="제목입니다" /> */}
      <Header title={title} onChangeMode={()=>{
        console.log("onChangeMode함수가 호출되었습니다");
        setTitle("변경된 제목");
      }} />
    </div>
  );
}

export default App;
