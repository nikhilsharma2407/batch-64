import React, { useCallback, useMemo, useRef, useState } from 'react'
import MyButton from './MyButton';

const ReactHooks = () => {
    console.log('render');
    const [num, setNum] = useState(0);
    const [childState, setChildState] = useState(1);
    const [text, setText] = useState('click me');


    const valueRef = useRef(0);
    console.log("🚀 ~ ReactHooks ~ valueRef:", valueRef.current);
    console.log("🚀 ~ ReactHooks ~ num:", num);


    const calcFactorial = (num) => {
        console.log('calculating', num, 'factorial')
        let res = 1;
        for (let i = 1; i <= num; i++) {
            res *= i;
        }
        return res;
    };


    let nonMemosiedValue = 0;
    const memoisedResult = useMemo(() => calcFactorial(num), [num]);
    console.log("🚀 ~ ReactHooks ~ memoisedResult:", memoisedResult)
    console.log("🚀 ~ onClickHandler ~ nonMemosiedValue:", nonMemosiedValue)


    const onClickHandler = useCallback(() => {
        nonMemosiedValue += 10;
        setText('updated text')
        console.log("🚀 ~ onClickHandler ~ nonMemosiedValue:", nonMemosiedValue)
    }, []);


    // Referential equality check
    const obj1 = { val: 123 };
    const obj2 = { val: 123 };

    const obj3 = obj1;

    console.log(obj1 === obj2)
    console.log(obj1 === obj3)





    return (<>
        <input type='number' onChange={e => {
            setNum(+e.target.value);
        }} placeholder='state upadte' />
        <br />
        Factorial of {num} is {memoisedResult}
        <br />

        <input type='number' onChange={e => {
            setResult(+e.target.value);
        }} placeholder='other state upadte' />
        {/* <input type='number' onChange={e => valueRef.current = e.target.value} placeholder='ref update' /> */}
        {/* <input type='number' ref={valueRef} placeholder='ref update' />
        <button onClick={() => setValue(valueRef.current.value)}>click me</button>
        value of ref is - {value} */}

        <MyButton result={result} setResult={setResult} text={text} onClick={onClickHandler} />



    </>

    )
}

export default ReactHooks