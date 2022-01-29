import React, {useState} from 'react';

const HelloWorld = () => {
    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState('');

    const toggle = () => value === 'hello' && setVisible(prev => !prev);
    const handleInput = (e) => setValue(e.target.value);

    return (
        <div>
            <input id="search" value={value} onChange={handleInput} type="text"/>
            <button id="toggle" onClick={toggle}>HELLO</button>
            {visible && <h1 id="hello">HELLO WORLD</h1>}
        </div>
    );
};

export default HelloWorld;
