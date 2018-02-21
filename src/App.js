import React from 'react';
import NameForm from "./container/NameForm";
import './App.css';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <p className="Header">Find out the largest number of consecutive zeros in your name</p>
                <NameForm/>
            </div>
        );
    }
}

export default App;
