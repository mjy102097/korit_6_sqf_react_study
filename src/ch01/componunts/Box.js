function Box({ name, isShow, children}) {
    const result = false && 10;
    console.log(result);
    return <div>
        <h1>{name}</h1>
        {children}
        {1 + 1}
        {true && "문주영"}
        {isShow && <h3>안녕하세요</h3>}
        {isShow ? <h3>안녕하세요</h3> : <h4>안녕하세요</h4>}
    </div>
}

export default Box;