import React from 'react'
import { useState } from 'react'

const InputCharacter = ({ fillState }) => {
    const [userInput, setUserInput] = useState('')

    const onChange = (event) => {
        const userInput = event.target.value
        setUserInput(userInput)
        fetch(`/personnages/people/${userInput}`)
            .then(res => res.json())
            .then(users => fillState(users));

        console.log(userInput);
    }

    return (
        <input type='text' value={userInput} onChange={onChange} />
    )
}
export default InputCharacter