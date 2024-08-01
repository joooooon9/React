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

function Nav(props) {
  const list = [] // 빈 배열 생성
  for( let i = 0; i < props.liList.length; i++ ) {
    // props로 전달받은 배열에서 인덱스 i인 원소를 꺼낸다
    const item = props.liList[i];
    const title = item.title;
    console.log(item);
    console.log("li에 적을 내용 : ", title);
    // jsx 생성
    const html = <ul key={item.id}>
      <li>
        <a href="/" onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode(title);
        }} >{title}</a>
      </li>
    </ul>;
    list.push(html);  // 배열에 추가
  }
  return (
    <nav>{list}</nav>
  );
}
function App() {
  // state를 이용해서 하위 컴포넌트에 props로 state값을 넘깁니다
  const [title, setTitle] = useState("기본제목");
  const liList = [
    {id:1,title:'맛집'},
    {id:2,title:'여행'},
    {id:3,title:'축제'}
  ];
  const [mode, setMode] = useState("main");
  return (
    <div className="App">
      {/* <Header title="제목입니다" /> */}
      <Header title={title} onChangeMode={()=>{
        console.log("onChangeMode함수가 호출되었습니다");
        setTitle("변경된 제목");
      }} />
      <p>{mode}</p>
      <Nav liList={liList} onChangeMode={(menu)=>{
        console.log(`${menu} click!!`);
        setMode(menu);
      }} />
    </div>
  );
}

export default App;
