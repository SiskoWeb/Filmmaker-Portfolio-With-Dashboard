import React from 'react'
import { useEffect } from 'react';
import '../style/backgroundslider.css'
import mbg1 from '../images/bg/mb/1.jpg'

import bg1 from '../images/bg/1.jpg'




import { useState } from 'react';


export default function BackGroundSlider() {

  const [currentState,setCurrentState]=useState(0)

  const [width,setWidth]=useState(window.innerWidth)


  const [bg,setBg]=useState([])









// useEffect(()=>{

//   setWidth(window.innerWidth)


      


// },[window.innerWidth])


    
// useEffect(() => {

//   if(width <= 800){
  
//     const imgMapMobile =[
//       mbg1,

    
//     ];
 
//     setBg(imgMapMobile)
//       }
//       if(width > 800){

//       const imgMap =[
//         bg1,
  
      
//       ];


//       setBg(imgMap)
//     }
   
//   const timer = setTimeout(() => {

//   if(currentState===bg.length -1){
//     setCurrentState(0)
//   }
//   else{
//     setCurrentState(currentState + 1)
//   }
   

//   }, 5300);

//   return () => clearTimeout(timer);
// }, [currentState]);




// const backgroundStyle = {
//   // backgroundImage: `url( /src/Theme1${imgMap[currentState]})`,
//   // backgroundImage: `url( /src/Theme1${imgMap[currentState]})`,

//   // transitionDuration: '.4s'
//   transition: 'all .5s linear',
//   backgroundPosition: "center",
//   zIndex: "-1",
//   backgroundSize: "cover",
//   position: "fixed",
//   backgroundRepeat: "no-repeat",
//   width: "100%",
//   height: "100vh"
// }

// <div className='bg-image img-1' style={backgroundStyle}>

// </div>
// <img className='bg-main' preload="yes" loading='lazy' src={bg[currentState]} ></img>
  return (
<div className='bg-main'>

<img  preload="yes"   ></img>
</div>


  )
}
