import React, { useState } from 'react'

export default function Search() {

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
        setSearchBoxes({ ...searchBoxes, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <input type="text" placeholder='Search Card Name' name='cardName' value={searchBoxes.cardName} onChange={handleInputChange}/>
            <input type="text" placeholder='Search Type' name='type' value={searchBoxes.type} onChange={handleInputChange} />
            <input type="text" placeholder='Search Subtype' name='subtype' value={searchBoxes.subtype} onChange={handleInputChange} />
            <input type="text" placeholder='Search Set' name='set' value={searchBoxes.set} onChange={handleInputChange} />
            <input type="text" placeholder='Search Text' name='text' value={searchBoxes.text} onChange={handleInputChange} />
            <input type='number' placeholder='Search Mana Value' name='cmc' value={searchBoxes.cmc} onChange={handleInputChange} />
        </div>
    )
}
