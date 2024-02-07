import React, {useState, useEffect } from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './styles.css';

const ImageSlider = ({url, limit = 5, page = 1}) => {

  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const fetchImages = async (getUrl) => {
    try {
        const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await response.json();

        if(data) {
          setLoading(false);
          setImages(data);
        }

    } catch (error) {
        setLoading(false);
        setErrorMessage(error.message);
    }
  };

  useEffect (() => {
    if (url !== '') { 
      fetchImages(url);
  }}, [url]);

  console.log(images);
  

  if (loading) return <p>Loading...</p>

  if (errorMessage) return <p>Error Occured: {errorMessage}</p>

  return (
    <div className='container'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handlePrevSlide} />
      {
        images && images.length 
        ? images.map((imageItem, index) => {
          return (
              <img 
                key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? 'currentImg' : 'currentImg hideCurrentImg'}
              />
          );
        }) : null
      }
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={handleNextSlide} />
      {
        <span className='circleIndicators'>
            {
              images && images.length ? 
              images.map((_, index) => {
                return (
                <button key={index} className={
                  currentSlide === index 
                  ? 'currentIndicator' 
                  : 'currentIndicator inactiveIndicator'
                }
                onClick={() => {setCurrentSlide(index)}}>

                </button>
              )})
              : null
            }
        </span>
      }

    </div>
  )
}

export default ImageSlider;