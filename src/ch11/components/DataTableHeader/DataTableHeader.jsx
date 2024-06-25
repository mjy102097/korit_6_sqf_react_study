import { useEffect, useRef, useState } from "react";
import "./style.css";
import Swal from "sweetalert2";

function DataTableHeader( { mode, setMode, products, setProducts, setDeleting, editProductId }) {
    
    const emptyProduct = {
        id: "",
        productName: "",
        size: "",
        color: "",
        price: ""
    };

    const inputRef = {
        productName: useRef(),
        size: useRef(),
        color: useRef(),
        price: useRef(),
    };

    const [ inputData, setInputData ] = useState({ ...emptyProduct });

    useEffect(() => {
        const [ product ] = products.filter(product => product.id === editProductId);
        // 필터 조건에 맞는 값들을 배열 product에 한개씩 집어 넣음 (비구조 할당)
        // 변수명 product에 [] 말고 맨뒤에 editProductId)[0] 해줘도 됨
        setInputData(!product ? { ...emptyProduct } : { ...product });
    }, [editProductId]);

    const handleInputChange = (e) => {
        setInputData(inputData => ({ // () 괄호를 하나 더 하면 함수가 아니라 값을 리턴하는 역활
            ...inputData,
            [e.target.name]: e.target.value
        }));
    }

    const handleInputKeyDown = (e) => {
        if(e.keyCode === 13) {
            if(e.target.name === "productName") {
                inputRef.size.current.focus();
            }
            if(e.target.name === "size") {
                inputRef.color.current.focus();
            }
            if(e.target.name === "color") {
                inputRef.price.current.focus();
            }
            if(e.target.name === "price") {
                handleSubmitClick();
                inputRef.productName.current.focus();
            }
        }
    };

    const handleChangeModeClick = (e) => {
        setMode(parseInt(e.target.value));
    }
    
    const handleSubmitClick = () => {
        if(mode === 1) {
            setProducts(products => {
                const productIds = products.map(product => product.id);
                const maxId = productIds.length === 0 ? 0 : Math.max.apply(null, productIds);
                return [ ...products, { ...inputData, id: maxId + 1 } ];
            });
            Swal.fire({
                title: "상품 정보 추가 완료",
                icon: "success",
                position: "top-end",
                showConfirmButton: false,
                timer: 500
            });
            resetMode();
        }
        if(mode === 2) {
            Swal.fire({
                title: "상품 정보 수정",
                showCancelButton: true,
                confirmButtonText: "확인",
                cancelButtonText: "취소"
            }).then((result) => {
                if(result.isConformed) {
                    setProducts(products => [ 
                        ...products.map(product => { // 새로운 주소를 만들어 주기 위해 스프레드 사용 ...products
                            if(product.id === editProductId) {
                                const { id, ...rest } = inputData; // rest문법 : inputData에서 id를 제외하고 나머지를 rest에 넣어줌
                                return {
                                    ...product,
                                    ...rest
                                }
                            }
                            return product;
                        })
                    ]);
                    resetMode();
                }
            });
        }
        if(mode === 3) {
            Swal.fire({
                title: "상품 정보 삭제",
                text: "정말로 삭제 하겠습니까?",
                showCancelButton: true,
                confirmButtonText: "삭제",
                confirmButtonColor: "red",
                cancelButtonText: "취소"
            }).then(result => {
                if(result.isConfirmed) {
                    setDeleting(true)
                }
            });
        }
    }

    const handleChangeClick = () => {
        resetMode();
    }

    const resetMode = () => {
        setMode(0);
        setInputData({ ...emptyProduct });
    }
    return (  
        <header className="table-header">
            <div className="input-group">
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="productName"
                    value={inputData.productName}
                    placeholder="상품명" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.productName}
                    autoFocus 
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="size"
                    value={inputData.size}
                    placeholder="사이즈" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.size}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="color"
                    value={inputData.color}
                    placeholder="색상" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.color}
                />
                <input 
                    type="text" 
                    disabled={mode === 0 || mode === 3} 
                    name="price"
                    value={inputData.price}
                    placeholder="가격" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    ref={inputRef.price}
                />
            </div>
            <div>
                {
                    !mode && (
                        <div className="button-group">
                            <button onClick={handleChangeModeClick} value={1}>추가</button>
                            <button onClick={handleChangeModeClick} value={2}>수정</button>
                            <button onClick={handleChangeModeClick} value={3}>삭제</button>
                        </div>
                    )
                }
                {
                    !!mode && (
                        <div className="button-group">
                            <button onClick={handleSubmitClick} >확인</button>
                            <button onClick={handleChangeClick} >취소</button>
                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default DataTableHeader;