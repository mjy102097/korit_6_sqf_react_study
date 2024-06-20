import { useState } from "react";

function App() {
    // inputValue 상태
    const [ inputValue , setInputValue ] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleResetClick = () => {
        setInputValue("");
    }

    return <>
        <h3>값: {inputValue}</h3>   
        <button onClick={handleResetClick}>초기화</button> 
        <input type="text" onChange={handleInputChange} value={inputValue} /> 
    </> // onChange는 value가 바뀔때마다 실행됨
    
}

export default App;