import "./App.css"

function App() {
    return (
    <>
    <div class="profile-container">
        <h2>프로필</h2>
        <div class="profile-image"></div>
        <form id="profile-form">
            <div class="form-group">
                <label for="name">이름</label>
                <input type="text" id="name" name="name"/>
            </div>
            <div class="form-group">
                <label for="email">이메일</label>
                <input type="email" id="email" name="email"/>
            </div>
            <button type="button" onclick="saveProfile()">저장</button>
        </form>
    </div>
    <script src="script.js"></script>

    </>
    );
}

export default App;