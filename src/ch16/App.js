import Swal from "sweetalert2";
import "./App.css"
import { useState } from "react";
function App() {
    const [ imgSrc, setImgSrc ] = useState("");

    const handleImgClick = (e) => {
        Swal.fire({
            title: "프로필 이미지 변경",
            text: "프로필 이미지를 변경하시겠습니까?",
            showCancelButton: true,
            confirmButtonText: "예",
            cancelButtonText: "아니오"
        }).then(result => {
            if(result.isConfirmed) {
                const fileElement = document.createElement("input");
                fileElement.setAttribute("type", "file");
                fileElement.click();

                fileElement.onchange = (e) => {
                    const file = e.target.files[0];
                    const fileReader = new FileReader();
                    fileReader.onload = (e) => {
                        setImgSrc(e.target.result);
                    }
                    fileReader.readAsDataURL(file);
                }
            }
        })
    }
    return (
        <>
            <div className="contain">
                <h1 className="profile">프로필</h1>
                <div className="img-frame" onClick={handleImgClick}>
                    <img className="img-select" src={imgSrc} alt="" />
                </div>
                <h4 className="name-text">이름</h4>
                <input className="name" type="text" />
                <h4 className="email-text">이메일</h4>
                <input className="email" type="text" value={email}/>
                <button className="bt" >저장</button>
            </div>
        </>
    );
}

export default App;