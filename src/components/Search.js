import React, { useState } from 'react'
import { Form, Button} from 'react-bootstrap'


export default function Search() {

    // const mtg = require('mtgsdk')

    const initialState = {
        cardName: '',
        type: '',
        subtype: '',
        set: '',
        text: '',
        cmc: null,
    }

    const [searchBoxes, setSearchBoxes] = useState(initialState)

    const handleInputChange = (e) => {
        e.preventDefault()
        setSearchBoxes({ ...searchBoxes, [e.target.name]: e.target.value })
    }

    const consoleLogError = (e) => {
        e.preventDefault()
        console.log(searchBoxes)
    }

    return (
        <Form>
            <Form.Control type="text" placeholder='Search Card Name' name='cardName' value={searchBoxes.cardName} onChange={handleInputChange} />
            <Form.Control type="text" placeholder='Search Type' name='type' value={searchBoxes.type} onChange={handleInputChange} />
            <Form.Control type="text" placeholder='Search Subtype' name='subtype' value={searchBoxes.subtype} onChange={handleInputChange} />
            <Form.Control type="text" placeholder='Search Set' name='set' value={searchBoxes.set} onChange={handleInputChange} />
            <Form.Control type="text" placeholder='Search Text' name='text' value={searchBoxes.text} onChange={handleInputChange} />
            <Form.Control type='number' placeholder='Search Mana Value' name='cmc' value={searchBoxes.cmc} onChange={handleInputChange} />
            <Button onClick={consoleLogError}>Console Error</Button>
        </Form>
    )
}
