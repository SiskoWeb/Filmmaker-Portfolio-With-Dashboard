
import '../style/video.css'

import { filterByCatMainVid } from '../../hook/useFiltercategory'
import Gellery from '../utily/Gellery'
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { getAllVids } from '../../Redux/Actions/videoAction'
import { useSelector, useDispatch } from 'react-redux'

import { AnimationOnScroll } from 'react-animation-on-scroll';
import '../style/gellery.css'

import LightGallery from 'lightgallery/react';
import Loading from '../utily/Loading'
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgVideo from 'lightgallery/plugins/video';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';

export default function VideosSection() {
  const category = [{ cat: "Editorial" }, { cat: "Commercial" }, { cat: "Automobile" }, { cat: "Personal" }]
  const [videos, setVideos] = useState([])
  const [update, setUpdate] = useState(false)
  const dispatchNovies = useDispatch();



  //get data from fireStore using redux
  useEffect(() => {
    // getMovies()
    dispatchNovies(getAllVids())

  }, [update])
  const dataVideos = useSelector(state => state.Video.VidsUrls)


  useEffect(() => {
    
    const newAr = dataVideos.filter((item) => item.categoryVid === 'Editorial')
    setVideos(newAr)
  }, [dataVideos])

    //fitlter by category
    const filterByCatVid = (cat) => {

      filterByCatMainVid(cat,setVideos,dataVideos)
    }
    const [toggle, setToggle] = useState(0)

  const toggleAll = (cat,index) => {

    filterByCatVid(cat)
    toggleModal(index)

 
    }
  const toggleModal = (index) => {


  setToggle(index)
    }

  return (
  
    <section className='video' id='Videos'>
    <div className='container '>
    <div className='card-video'>
    <div className='card-body'>
   <h2>Filmmaking</h2>
  
   <div className='category'>{category.map((i,index) => <h3 className={toggle === index? 'active': null} id={i.cat} onClick={() => toggleAll(i.cat,index)} key={Math.random()} >{i.cat}</h3>)}</div>


        
 {dataVideos.length >=1?(  <LightGallery

  elementClassNames="gallery22"
  plugins={[ lgVideo]}
  mode="lg-fade" >
  
 
 
 
  {videos.map((i) => {
 
    return (
      <a
        className="gallery-item  animate__animated animate__fadeInUp"
        data-src={i.urlVid}
        key={i.id}
 
      >
   
     
        <img loading='lazy'
          style={{ maxWidth: '100%' }}
          className="video2"
 
          alt=""
          src={i.thumb}
        />
 
 
 
 
      </a>
    )
  })}
 
 </LightGallery>) :   <Loading className="loading-images"/>}

    </div>
    </div>
    </div>
    </section>
  
  )
}