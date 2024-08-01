import { useState } from "react";
function App() {
  let counter = 0;    // 지역 변수를 선언
  // 지역 변수 counter의 값을 변경하는 함수 선언
  const addcount = () => { counter += 1; console.log('카운터 : ', counter); };

  // state를 선언 :  [ state의 이름, set함수의 이름 ] = useState(초기값);
  const [sCounter, setCounter] = useState(0);
  // state를 변경할때에는 set함수를 호출합니다
  const addScount = () => { setCounter(sCounter+1); };

  return (
    <div className="App">
      <h1>React state 렌더링 예제</h1>
      <p>자바스크립트 변수 카운터 : {counter}</p>
      <button onClick={addcount}>카운터 증가</button>
      <hr />
      <p>state 카운터 : {sCounter}</p>
      <button onClick={addScount}>카운터 증가</button>
    </div>
  );
}

export default App;
