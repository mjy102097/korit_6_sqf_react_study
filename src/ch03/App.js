import { useState } from "react";

function App() {
    const [ num, setNum ] = useState(0);
    let num2 = 0;

    const handleClik = (e) => {
        const value = parseInt(e.target.value);
        // setNum(num + value);
        num2 += value;
        console.log(num + "첫줄");
        console.log(num2 + "넘투첫줄");
    }

    console.log(num + "둘째줄");
    console.log(num2 + "넘투둘째줄");
    
    return <>
        <h1>번호 : {num}</h1>
        <h1>번호2 : {num2}</h1>
        <button onClick={handleClik} value={-10}>-10</button>
        <button onClick={handleClik} value={+10}>+10</button>
        <button onClick={handleClik} value={-100}>-100</button>
        <button onClick={handleClik} value={+100}>+100</button>
    </>
}

export default App;