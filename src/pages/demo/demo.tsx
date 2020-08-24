import React, { useState, useMemo, useEffect, useCallback } from 'react';

export default  function WithoutMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    function expensive() {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }

    return <div>
        <h4>{count}-{expensive()}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)} />
        </div>
        <ShowCount count={count} />
    </div>;
}


function WithMemo() {
    const [count, setCount] = useState(1);
    const [val, setValue] = useState('');
    const expensive = useMemo(() => {
        console.log('compute');
        let sum = 0;
        for (let i = 0; i < count * 100; i++) {
            sum += i;
        }
        return sum;
    }, [count]);
    return <div>
        <h4>{count}-{expensive}</h4>
        {val}
        <div>
            <button onClick={() => setCount(count + 1)}>+c1</button>
            <input value={val} onChange={event => setValue(event.target.value)} />
        </div>
        
    </div>;
}

const ShowCount: React.FC<{ count: number }> = ({ count }) => {
    useEffect(() => {
        console.log("count chang")
    }, [count])
    return <div>
        {count}
    </div>
}