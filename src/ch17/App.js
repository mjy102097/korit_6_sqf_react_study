/** @jsxImportSource @emotion/react */
import * as s from "./style"; 
// style 파일에 있는 모든파일(* 이 모든파일)을 들고와서 s로 부르겠다.


function App(props) {
    return (
        <div css={s.root}>
            <div css={s.container(800)} >
                <div css={s.container2} >
                    <div css={s.container3} >
                        <div css={s.container4} >

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;