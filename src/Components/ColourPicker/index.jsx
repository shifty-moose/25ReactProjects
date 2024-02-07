import React, { useEffect, useState } from 'react';

export default function RandomColourGenerator() { 

    const [typeOfColour, setTypeOfColour] = useState('hex');
    const [colour, setColour] = useState('#000000');

    const randomColourUtil = (length) => {
        return Math.floor(Math.random() * length);
    };

    const handleCreateRandomHexColour = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColour = '#';

        for (let i = 0; i < 6; i++) {
            hexColour += hex[randomColourUtil(hex.length)];
        };

        setColour(hexColour);
    };

    const handleCreateRandomRgbColour = () => {
        const r = randomColourUtil(255);
        const g = randomColourUtil(255);
        const b = randomColourUtil(255);

        setColour(`rgb(${r},${g},${b})`);
    };

    useEffect(() => {
        typeOfColour === 'rgb' ? handleCreateRandomRgbColour() : handleCreateRandomHexColour();  
    }, [typeOfColour]);

    return (
        <div 
            className='container'
            style={{
                width: '100vh',
                height: '100vh',
                background: colour,
            }}>
            <button onClick={()=> setTypeOfColour('hex')}>Create HEX Colour</button>
            <button onClick={()=> setTypeOfColour('rgb')} >Create RGB Colour</button>
            <button onClick={
                typeOfColour === 'hex' 
                ? ()=> handleCreateRandomHexColour() 
                : ()=> handleCreateRandomRgbColour()
                }>
                    Generate Random Colour
                </button>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    marginTop: '2rem',
                    flexDirection: 'column',
                    gap: '1rem',
                }}>
                    <h3>{typeOfColour === 'rgb' ? 'RGB Colour' : 'HEX Colour'}</h3>
                    <h1>{colour}</h1>
                </div>
        </div>
    );
};