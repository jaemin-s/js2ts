import React, { useEffect, useState, useRef } from 'react'
import { ImageInfo } from './LazyLoadingImage.types'





const options: IntersectionObserverInit = {
  rootMargin: "600px"
}

const LazyLoadingImage = ({ imgSrc }: ImageInfo) => {
  const imgRef = useRef(null);
  const [imageSrc,setImageSrc] = useState("")

  const callback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        console.log("화면 들어옴")
        setImageSrc(imgSrc)
        observer.unobserve(imgRef.current!)
      }
    })
  }
  useEffect(()=>{

    const observer = new IntersectionObserver(callback, options)
    if(imgRef.current){
      observer.observe(imgRef.current)
    }

    return()=>{
      if(imgRef.current){
        observer.unobserve(imgRef.current)
      }
    }
  },[])
  


  return (
    <img ref={imgRef} width={"300px"} height={"auto"} src={imageSrc}/>
  )
}

export default LazyLoadingImage