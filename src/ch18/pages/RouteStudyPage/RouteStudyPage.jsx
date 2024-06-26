/** @jsxImportSource @emotion/react */
import { Link, Route, Routes } from "react-router-dom";
import * as s from "./style.js";
import MainContainer from "../../components/MainContainer/MainContainer.jsx";
import RouteStudySubPage1 from "../RouteStudySubPage1/RouteStudySubPage1.jsx";

function RouteStudyPage(props) {
    return (
        <MainContainer>
            <div>
                <h1>라우트 수업</h1>
                <ul>
                    <Link to={"/routestudy/page1"} ><li>1번 페이지</li></Link>
                    <Link to={"/routestudy/page2"} ><li>2번 페이지</li></Link>
                    <Link to={"/routestudy/page3"} ><li>3번 페이지</li></Link>
                </ul>
                <div>
                    <Routes>
                        <Route path="/page1/*" element={<RouteStudySubPage1 />} />
                        <Route path="/page2" element={<div>페이지 2</div>} />
                        <Route path="/page3" element={<div>페이지 3</div>} />
                    </Routes>
                </div>
            </div>
        </MainContainer>
    );
}

export default RouteStudyPage;
