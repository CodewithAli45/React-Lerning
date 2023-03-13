import React, { useCallback, useState } from 'react';
import  Child1  from './Child1';
import Child2 from './Child2';

export function Parent() {
    const [aliAge, setAliAge] = useState(20);
    const [babitaAge, setBabitaAge] = useState(35);

    const incrementAliAge = useCallback(() => {
        setAliAge(aliAge + 1);
    },[aliAge]);

    const incrementBabitaAge = useCallback(() => {
        setBabitaAge(babitaAge + 1);
    },[babitaAge]);


  return (
    <>
        <div>
        <Child1 age={aliAge} name={"Ali"}/>
        <Child2 action={incrementAliAge} />
        </div>
        <div>
        <Child1 age={babitaAge} name={"Babita"} />
        <Child2 action={incrementBabitaAge} />
        </div>
    </>
  )
}
