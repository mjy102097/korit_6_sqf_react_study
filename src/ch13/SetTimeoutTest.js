function SetTimeoutTest() {
    /**
     * 비동기
     */

    setTimeout(() => {
        print(count);
    }, 2000); 

    function print(fx) {
        console.log(4);
        fx();
    }
    
    function count() {
        console.log(1);
        console.log(2);
        console.log(3);
    }

    /**
     * 콜백함수
     * - 함수의 매개변수에 함수를 넣는 것.
     * ex) .map 에 들어가는 것 () => {} 이것도 콜백함수
     */
    function test(fx) {
        console.log("test 함수 호출")
        fx();
    }

    function add() {
        console.log("add 함수 호출")
    }

    test(add);
    
    return (
        <>
        
        </>
    );
}

export default SetTimeoutTest;