import react from 'react';
import { useState } from 'react';

function List() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
    <>
    <div>
        <ul>
            <li><button onClick={handleClick}>Kliknięto {count}</button></li>
            <li><button >Kliknięto {count*2}</button></li>
            <li><button >Kliknięto {count*3}</button></li>
        </ul>
    </div>
    </>)
}

export default List;