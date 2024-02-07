// Single selection Accordion
import React, { useState } from 'react';
import data from './data';
import './styles.css';

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId);
    };

    const handleMultiSelection = (getCurrentId) => {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);


        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(getCurrentId);
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }

        setMultiple(copyMultiple);
        console.log(multiple);

    };

    const toggleMultiSelection = () => {
        setEnableMultiSelection(!enableMultiSelection);
        console.log(enableMultiSelection);
    };

    return ( 
        <div className="wrapper">

            <button onClick={toggleMultiSelection}>Enable Multiselection</button>
            
            <div className="accordion">

                {data && data.length > 0 ? data.map(dataItem => (
                    <div className='item'>
                        <div className='title' onClick={
                            enableMultiSelection
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)
                            }>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {
                            enableMultiSelection ? multiple.indexOf(dataItem.id) !== -1 && (
                                <div className='content'>{dataItem.answer}</div>
                            ) : selected === dataItem.id && (
                                <div className='content'>{dataItem.answer}</div>
                            )
                        }
                        {
                            selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                            <div className='content'>{dataItem.answer}</div>
                            ) : null
                        }
                    </div>
                )) : <div>No data</div>}

            </div>

        </div>
    )
}

