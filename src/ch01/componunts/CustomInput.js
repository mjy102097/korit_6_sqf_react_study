function CustomInput({ph, disabled, value}) { // 컴포넌트에서는 객체 props를 받음
                                              // props 대신 비구조화 할당 사용
    return <input type="text" placeholder={ph} disabled={disabled} value={value}/>;
}

CustomInput.defaultProps = {
    ph: "test",
    disabled: false,
    value: "빈값"
}

export default CustomInput;