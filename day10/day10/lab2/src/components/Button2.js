import React from 'react';

const Button = (props) => (
    <button onClick={() => props.decrementBy(2)}>decrement</button>
);

export default Button;
