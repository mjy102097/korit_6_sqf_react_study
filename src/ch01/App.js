/*
  컴포넌트 -> 함수 -> HTML 태그를 리턴하는 함수
  JSX 특징
   1. 태그를 열었으면 닫아야한다. <a></a>, <a />
   2. 여러 태그를 리턴해야하는 경우에는 하나로 묶어야 한다.
   3. JSX 안에 값 또는 변수를 사용하려면 {}표현식을 사용해야한다.
*/
import "./App.css"; // css는 이렇게 불러오면 됨
import { Fragment } from "react";
import Hello from "./componunts/Hello";
import CustomInput from "./componunts/CustomInput";
import Box from "./componunts/Box";

function App() {
  const name = "문주영";
  const fontColorRed = {
    color: "red"
  }
  const age = <h2>{28}</h2>

  return <>
          <div>
            <Hello></Hello>
          </div>
          <div>
            <Hello></Hello>
          </div>
          <h1 style={fontColorRed} className={"fs-20 itelic"}>{name}</h1>
          <CustomInput ph={"이름"} disable={true} value={"문주영"} />
          <CustomInput ph={"나이"} disable={false} />
          <CustomInput ph={"연락처"} disable={true} />
          <Box name={"문주영"} isShow={true}>
            <h2>{28}</h2>
            {age}
          </Box>
  </>
}

export default App;
