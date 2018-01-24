import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
    <Welcome name={"shu"} />,
    document.getElementById('root')
);

/*
class Welcome2 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

ReactDOM.render(
    <Welcome2 name={"shu2"} />,
    document.getElementById('root')
);*/
