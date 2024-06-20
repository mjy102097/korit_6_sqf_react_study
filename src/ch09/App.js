import { useState } from "react";

// 배열 렌더링
function App() { 
    const [ inputValue, setInputValue ] = useState("");
    const [ names, setNames] = useState([]);
    const liList = [
        <li>{"test1"}</li>,
        <li>{"test2"}</li>,
        <li>{"test3"}</li>,
        <li>{"test4"}</li>
    ]
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputKetDown = (e) => {
        if(e.keyCode === 13) {
            setNames(names => [...names, inputValue]);
            setInputValue("");
        }
    }
    return <>
        <input onChange={handleInputChange} onKeyDown={handleInputKetDown} value={inputValue}/>
        <ul> {liList}
            { names.map((name, index) => <li key={index}>{name}</li>) }
        </ul>
    </>
    // map을 사용하면 key값은 잡아주기, map에서 index를 받아 와서라도 잡아주기
}

export default App;