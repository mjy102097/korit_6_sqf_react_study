function PromiseTest() {
    /**
     * Promise 비동기 객체
     * 프로미스의 3가지 상태
     * 1. 대기 -> 이행되지도 거부되지도 않은 상태
     * 2. 이행 -> 연산이 성공했을 때의 상태(비동기 처리) .then
     * 3. 거부 -> 연산을 실패했을 때의 상태 .catch
     */

    function p1(name) {
        return new Promise((resolve, reject) => { // resolve : 이행,    reject : 거부
            // 대기(동기) 상태
            console.log(name + "프로미스 생성");
            if(!name) {
                reject("오류 !!");
            }
            resolve(name); // resolve가 있어야 .then 사용 가능
        });
    }

    async function p2() { // async를 function 앞에 붙힘으로 인해 p3의 return new Promise() 만든것과 똑같이 된다.
        let a = null;
        // p4().then(r => { // then은 비동기 처리고 밑에 return은 동기 처리라서 a에는 아직 null이 들어가있는 상태이다.
        //     a = r
        // });
        try {
            a = await p4(); // await -> 이행할 때까지 기다려 / p4()의 리턴값을 받아옴
            // await은 async안에서만 사용할 수 있고, Promise 객체에만 사용할 수 있다.
            // await setTimeout(() => {}, 2000);  -> setTimeout은 Promise 객체가 아니라서 await을 사용 할수 없다.
            // 그래서 2초 뒤에 호출을 하고 싶다면 호출을 할때 setTimeout 안에 p2() 를 넣어서 만들어준다.
            
            // 오류가 났을때 a를 "p5"로 바꾸고 싶을때
            // await p5();
        } catch(error) { // 오류(거부상태)일 때 try-catch로 동기처리를 할 수 있다.
            console.log(error);
            a = "p5";
        }
        return a;
    }

    function p3() {
        return new Promise((resolve, reject) => {
            resolve("p3");
        })
    }

    async function p4() {
        return "p4";
    }

    async function p5() {
        throw new Error("오류 !!!!")
    }

    const handleClick = (e) => {
        p1("p1").then(result => { // .then 또다른 대기 상태
            console.log("이행");
            console.log(result);
            if(true) {
                throw new Error("거부 !!"); // throw new Error가 거부(reject)
            }
            return "두번째 then" // return이 이행(resolve)
        })
        .then(result => { // promise에 또 promise를 할수 있다
            console.log(result);
        }).catch(error => { //p1의 매개변수로 아무것도 넣지 않으면 위의 .then들은 생략하고 catch만 실행 시켜줌
            // console.log(error);
        });

        console.log("출력1");
        p1("p2");
        console.log("출력2");
        p1("p3");
    }

    const handleClick2 = () => {
        setTimeout(() => {
            p2().then(r => {
                console.log(r);
            })
        }, 2000);
        // p3().then(r => console.log(r));
    }

    return (
        <>
            <button onClick={handleClick}>promise</button>
            <button onClick={handleClick2}>async</button>
        </>
    );
}

export default PromiseTest;