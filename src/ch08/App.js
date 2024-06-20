import { useRef } from "react";

function App() { 
    const aRef = useRef(); // use가 붙는 것들이 훅함수
    const bRef = useRef(); // 훅함수들은 해당 function의 최상단에 위치해야함
    const cRef = useRef();

    const inputRef = { // 위의 여러개 Ref를 간단하게 만드는 법
        a: useRef(),
        b: useRef(),
        c: useRef(),
    }

    const handleKeyDown = (e) => {
        // const inputs = document.querySelectorAll("input"); // 버츄얼DOM을 거치지 않고 리얼DOM에 직접적으로 영향

        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "a":
                    inputRef.b.current.focus();
                    break;
                case "b":
                    inputRef.c.current.focus();
                    break;
                case "c":
                    inputRef.a.current.focus();
                    break;
                default:
            }
        }
    }

    return <>
        <input name="a" onKeyDown={handleKeyDown} ref={inputRef.a}/>
        <input name="b" onKeyDown={handleKeyDown} ref={inputRef.b}/>
        <input name="c" onKeyDown={handleKeyDown} ref={inputRef.c}/>
    </>
}

export default App;