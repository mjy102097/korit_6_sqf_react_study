function Button({ text, setNumber }) {

    const handleClik = () => {
        if(text === "증가") {
            setNumber(number => number + 1);
        }
        if(text === "감소") {
            setNumber(number => number - 1);
        }
    }

    return <button onClick={handleClik} >{text}</button>
}

export default Button;