import firebase from '../firebase'
import React, { useState } from 'react'

const AddEmailForm = () => {

    //declare the field(s) as an array form and assign it to an empty useState('')
    const [email, setEmail] = useState('')

    //submit button
    function onSubmit(e) {
        e.preventDefault() //prevents refreshing the app when button is clicked

        //saves the email to firestore
        firebase
            .firestore()
            .collection('list')
            .add({
                email
               
            })
            .then( () => {
                setEmail('')
            })  
    }

    return (
        <form onSubmit = {onSubmit}>
           <div>
           <input 
                type="text" 
                placeholder="email address"
                value={email} //sets the value to the user's input
                onChange={ e => setEmail(e.currentTarget.value)} //sets the current value of the email to setEmail
                />
           </div>
           <button className="gold-button">Notify me!</button>
        </form>
    )
}

export default AddEmailForm