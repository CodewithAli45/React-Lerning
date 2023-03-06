import { useState } from "react";

export function FormsHooks(initialState, type){
    const [value, setValue] = useState(initialState);
    const bindObj = {
        type,
        value,
        onChange: (e) => (setValue(e.target.value))
    }
    const reset = () => {
        setValue(initialState);
    }
    return [value, bindObj, reset];
}