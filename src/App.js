import React from 'react';
import firebase from './firebase'
import background from './img/background.png'
import tablet from './img/tablet.png'
import mobile from './img/mobile.png'
import mobile2 from './img/mobile2.png'
import tablet2 from './img/tablet2.png'
import AddEmailForm from './components/add-to-list-form'
import './App.css';

//test store to firestore
//UPDATE: working
/*
firebase.firestore().collection('list').add({
  email: 'testing.com'
})
*/

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className ="gradient-text">Cora @ 80</h1>
        <p>COMING SOON</p>
        <AddEmailForm/>
      </div>
    </div>
  );
}

export default App;
