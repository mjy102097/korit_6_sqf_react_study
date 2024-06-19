import { useState } from "react";

function App() {
    const [ number, setNumber] = useState(100);
    const [name, setName] = useState(null);
    

    const [test, testPrint ] = 
        [100, function (){console.log("test함수 호출")}];
    
    testPrint();

    console.log(number);
    
    if(number === 100) {
        setTimeout(() => setNumber(200), 2000);
        // 상태 변화 > 상태 변화 때 함수 재호출(재렌더링)
        // 재렌더링 시점에는 상태 초기화는 일어나지 않는다.
    }

    if(number === 200) {
        setNumber(300); // useState의 setter는 비동기
        console.log(number);
    }

    if(name === null) {
        setName("문주영");
    }
    console.log(name);
    

    return <>
        <h1>number 상태 확인</h1>
        <h2>{number}</h2>
    </>
}

export default App;