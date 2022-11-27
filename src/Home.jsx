import React from 'react'
import Cardcopy from './CardPage'
import Data from './Data'



function AllCard(val){
    return(
    <>
    <Cardcopy
        imgsrc={val.imgsrc}
        title={val.title}
        text={val.text}
    />
    </>
    )
  }
  

const Home = ()=>{
    return(
        <>
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="
      https://w0.peakpx.com/wallpaper/138/244/HD-wallpaper-gray-and-black-laptop-computer-on-surface.jpg" className="d-block w-100" alt="Background img"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='courselheading' >Slide To Know More</h5>
        <p className='courselpara' >You are landing our first page this page tells you the process.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1321288902/photo/black-grey-wooden-plank-wall-texture-background-old-natural-pattern-of-dark-wood-grained.jpg?b=1&s=170667a&w=0&k=20&c=yhXBT7-l23YBvyKGDDGkajz2aMuyxaooJQtyaKnTt_M=" className="d-block w-100" alt="Background img"/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='courselheading' >Second slide label</h5>
        <p className='courselpara' >Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="laptop img" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5 className='courselheading' >Third slide label</h5>
        <p className='courselpara' >Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    <div className='cardStyle' >
    {Data.map(AllCard)}
    </div>   
        </>
    )
}

export default Home;