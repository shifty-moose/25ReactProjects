import './App.css'
import React, {useState} from 'react'
import Accordion from './Components/Accordion/index.jsx';
import GenerateRandomColour from './Components/ColourPicker/index.jsx';
import StarRating from './Components/StarRating/index.jsx';
import ImageSlider from './Components/ImageSlider/index.jsx';

import './App.css'

function App() {

  return (
    <>
    {/* <Accordion /> */}
    {/* <GenerateRandomColour /> */}
    {/* <StarRating numOfStars={10}/> */}
    <ImageSlider 
      url={`https://picsum.photos/v2/list`} 
      page={1}
      limit={10} />
    </>
  )
}

export default App
