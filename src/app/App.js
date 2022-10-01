import './App.css';
import React from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav"


class App extends React.Component {
    render() {
        let nav = {
            "main": '/index',
            "about": '/about',
            "price": 'buy/price'
        }
        return (
            <div className="App">
                <Header/>
                <Nav nav = {nav} />
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default App;
