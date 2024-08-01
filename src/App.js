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
  const list = props.liList.map( item => (
    <li key={item.id}>
      <a href="/" onClick={(event)=>{
        event.preventDefault();
        props.onChangeMode(item.title);
      }} >{item.title}</a>
    </li>
  ));
  return ( <nav><ul>{list}</ul></nav> );
}

function Article(props) {
  return ( <article> <h2>{props.title}</h2>
                     <p>{props.note}</p> </article> );
}
function App() {
  // state를 이용해서 하위 컴포넌트에 props로 state값을 넘깁니다
  const [title, setTitle] = useState("기본제목");
  const liList = [
    {id:1, title:'맛집', note: '맛집 리뷰 목록들'},
    {id:2, title:'여행', note: '여행 리뷰 목록들'},
    {id:3, title:'축제', note: '겨울 축제 추천 목록들'}
  ];
  const [mode, setMode] = useState("main");
  let contents = null;
  if(mode == "main") {
    contents = <div>메인페이지입니다</div>;
  } else {
    const selected = liList.find( item => item.title === mode );
    contents = <Article title={selected.title} note={selected.note} />;
  }

  return (
    <div className="App">
      {/* <Header title="제목입니다" /> */}
      <Header title={title} onChangeMode={()=>{
        console.log("onChangeMode함수가 호출되었습니다");
        setTitle("변경된 제목");
        setMode("main");
      }} />
      {/* 모드 확인 */}
      <p>{mode}</p>
      {/* 메뉴선택 */}
      <Nav liList={liList} onChangeMode={(menu)=>{
        console.log(`${menu} click!!`);
        setMode(menu);
      }} />
      {/* 모드에 따른 콘텐츠 출력 부분 */}
      {contents}
    </div>
  );
}

export default App;
