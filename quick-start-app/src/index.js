import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

/*function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
    <Welcome name={"shu"} />,
    document.getElementById('root')
);*/

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
