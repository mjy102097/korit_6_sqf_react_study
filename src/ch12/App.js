import { useEffect, useState } from "react";

function App() {
    const [ number, setNumber ] =useState(0);
    const [ number2, setNumber2 ] =useState(0);
    const [ number3, setNumber3 ] =useState(0);

    useEffect(() => {
        // 마운트 지점, 화면에서 보이는 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점, 화면이 전환되고 사라지는 시점
        }
    }, [number, number2]); // (함수, [배열]) 디펜던시
    // 첫 호출때 한번 실행이 된다, 그 후 배열의 값이 변경되면 다시 실행
    // 디펜던시가 없으면 처음한번만 실행 되고 그 이후에는 실행되지 않는다.

    const handleButtonClick = (e) => {
        setNumber(a => a + 1); // 비동기 처리라서 number는 아직 0이여서 number2는 맨처음 0이 나온다
        // setNumber2(number * 10);
    }

    const handleButtonClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return ( 
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonClick} >num1 증가</button>
            <button onClick={handleButtonClick2} >num2 증가</button>
        </>
    );
}

export default App;