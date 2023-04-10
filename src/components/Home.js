import React, { Fragment } from 'react'
import sam2 from '../images/sam2.png'

function Home() {
  return (
    <Fragment>
        <div className="col py-3 d-flex align-items-center"> 
            <div className="container">
              <div className="row ms-md-5">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center">
                  <div style={{display: 'sm-block'}} >
                    <h1 className="m-0 font-big slide-in-top">Hi,</h1>
                    <h1 className="m-0 font-big animate-character" id="typed">I'm Sumanth S Mayakar,</h1>
                    <p className="mt-2 slide-in-bottom ls-2" id="typed" style={{fontSize:'25px'}}>MERN Full Stack Developer </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <img className="img-fluid rounded-pill" src={sam2} style={{height: "400px"}} alt="..."></img>
                </div>
              </div>
            </div>
        </div>
    </Fragment>
    
  )
}

export default Home