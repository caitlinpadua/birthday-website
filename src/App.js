import React from 'react';
import firebase from './firebase'
import background from './img/background.png'
import tablet from './img/tablet.png'
import mobile from './img/mobile.png'
import mobile2 from './img/mobile2.png'
import tablet2 from './img/tablet2.png'
import AddEmailForm from './components/add-to-list-form'
import './index.css'
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className ="gradient-text">Nanay Cora</h1>
        <h2 className ="gradient-text">@80</h2>
        <p>COMING SOON</p>
        <AddEmailForm/>
      </div>
    </div>
  );
}

export default App;
