/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import * as s from "./style";

function RouteStudySubPage1(props) {
    return (
        <div>
            <ul>
                <Link to={"/routestudy/page1/name"} ><li>이름</li></Link>
                <Link to={"/routestudy/page1/age"} ><li>나이</li></Link>
                <Link to={"/routestudy/page1/address"} ><li>주소</li></Link>
            </ul> 
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