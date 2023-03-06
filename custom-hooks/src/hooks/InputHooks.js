import { useState } from "react";

export function InputHooks(
    initalValue = 0, 
    incValue = 1, 
    decVal = 1, 
    resetVal = 0
){
    const [count, setCount] = useState(initalValue);

    const increment = () => {
        setCount((prev) => prev + incValue);
    };

    const decrement = () => {
        setCount((prev) => prev - decVal);
    };

    const reset = () => {
        setCount(resetVal);
    };

    return [count, increment, decrement, reset];
}