import { useRef, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";


function App() {
    const test = {
        a: "aaa",
        b: "bbb"
    }
    console.log(test[a]);

    const emptyUser = {
        username: "",
        password: "",
        name: ""
    }
    const [ inputData, setInputData ] = useState({...emptyUser});
    const [ userList, setUserList ] = useState([]);

    const inputRef = {
        username: useRef(),
        password: useRef(),
        name: useRef()
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            switch(e.target.name) {
                case "username":
                    inputRef.password.current.focus();
                    break;
                case "password":
                    inputRef.name.current.focus();
                    break;
                case "name": 
                    inputRef.username.current.focus();
                    setUserList(userList => [...userList, inputData]);
                    setInputData({...emptyUser});
                    break;
                default:
            }
        }
    }

    const handleInputChange = (e) => {
        setInputData(inputData => {
            return {
                ...inputData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleEditClick = (key, index) => { // key, index를 매개변수로 받아서 실행
        Swal.fire({
            title: `${key} edit`, // ``를 사용하여 key값을 문자열에 집어넣을때 사용
            input: "text",
            inputValue: userList[index][key], // 객체에다가 []괄호 쓰면 value를 꺼낼수 있음
            showCancelButton: true,
            cancelButtonText: "취소",
            confirmButtonText: "확인"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.map((user, i) => {
                    if(i === index) {
                        return {
                            ...user,
                            [key]: result.value // 기존값을 가져오고 key값의 자리에 result.value값으로 바꿈
                        }
                    }
                    return user;
                }) ])
            }
        })
    }

    const handleDeleteClick = (e) => {
        Swal.fire({
            title: "사용자 삭제",
            text: "해당 사용자를 삭제하시겠습니까?",
            icon: "question",
            confirmButtonText: "삭제",
            confirmButtonColor: "red",
            // showCancelButton을 true 설정 해주어야 cancelButton이 화면에 나타남
            showCancelButton: true, 
            cancelButtonText: "취소"
        }).then(result => {
            if(result.isConfirmed) {
                setUserList(userList => [ ...userList.filter((user, index) => index !== parseInt(e.target.value)) ])
            }
        });
    }


    

    return <>
        {/*
            1. 입력후에 엔터를 입력하면 다음 input 으로 포커스 이동
            2. name 필드에서 엔터를 입력하면 배열에 user객체 추가
                그리고 input value들 초기화
        */}
        <input name="username" placeholder="사용자명"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={inputData.username}
            ref={inputRef.username}/>
        <input name="password" placeholder="비밀번호"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={inputData.password}
            ref={inputRef.password}/>
        <input name="name" placeholder="이름"
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            value={inputData.name}
            ref={inputRef.name}/>
        {/*
            3. tbody -> tr묶음을 userList에서 map통해 렌더링
            4. table 디자인 -> border: 1px solid #dbdbdb
        */}
        <table>
            <thead>
                <tr>
                    <th>index</th>
                    <th>username</th>
                    <th>password</th>
                    <th>name</th>
                    <th>edit</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    userList.map(({ username, password, name }, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td onClick={() => handleEditClick("username", index)} >{username}</td>
                                <td onClick={() => handleEditClick("password", index)} >{password}</td>
                                <td onClick={() => handleEditClick("name", index)} >{name}</td>
                                <td>
                                    <button value={index}>edit</button>
                                </td>
                                <td>
                                    <button onClick={handleDeleteClick} value={index}>delete</button>
                                </td>
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    </>
}

export default App;