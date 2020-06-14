import React from 'react'
import { useState } from 'react'

const InputCharacter = ({ request, fillState }) => {
    const [userInput, setUserInput] = useState('')

    const onChange = (event) => {
        const userInput = event.target.value
        setUserInput(userInput)
        fetch(`personnages/${request}/${userInput}`)
            .then(res => res.json())
            .then(users => fillState(users));
    }

    return (
        <input className='input' type='text' value={userInput} onChange={onChange} placeholder={`Search for ${request}`} />
    )
}
export default InputCharacter