/** @jsxImportSource @emotion/react */
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import * as s from "./style";

function RouteStudySubPage1(props) {
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);
    console.log(location.pathname.lastIndexOf("/"));
    const index = location.pathname.lastIndexOf("/");
    console.log(location.pathname.substring(index + 1));

    const handleAgeClick = () => {
        navigate("/routestudy/page1/age", {replace: true});
        // window.location.href = "https://naver.com"     => replace: false
        // window.location.replace("https://naver.com")    => replace: true 일때는 뒤로가기를 했을때 history(기록)을 남기지 않는다.
    }


    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"} ><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"} ><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"} ><li>주소</li></Link>
            </ul> 
            <button onClick={handleAgeClick} >나이</button>
            <div>
                <Routes>
                    <Route path="/name" element={<h1>문주영</h1>} />
                    <Route path="/age" element={<h1>28</h1>} />
                    <Route path="/address" element={<h1>김해시 내외동</h1>} />
                </Routes>
            </div>  
        </div>
    );
}

export default RouteStudySubPage1;