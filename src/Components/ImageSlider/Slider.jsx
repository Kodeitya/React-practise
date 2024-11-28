import React,{useEffect,useState} from 'react'

function Slider() {
    const [currentIndex,setIndex] = useState(0);
    const images = [
        'https://via.placeholder.com/800x300?text=Image+1',
        'https://via.placeholder.com/800x300?text=Image+2',
        'https://via.placeholder.com/800x300?text=Image+3',
    ];
    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((previdx)=>(previdx+1)%images.length);
        },2000);
        return ()=>clearInterval(interval);
    },[currentIndex]);

    const goToPrevious=()=>{
        setIndex((previdx)=> previdx===0 ? images.length-1:previdx-1);
    }

    const goToNext = ()=>{
        setIndex((previdx)=>(previdx+1)%images.length);
    }

  return (
    <div className="slider-container">
    <button className="prev-btn" onClick={goToPrevious}>
        &#10094;
    </button>
    <div className="slider">
        <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="slider-image"
        />
    </div>
    <button className="next-btn" onClick={goToNext}>
        &#10095;
    </button>
</div>
  )
}

export default Slider