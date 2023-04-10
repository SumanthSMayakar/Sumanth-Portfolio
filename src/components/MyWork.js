import React, { Fragment } from 'react'
import { GrPrevious, GrNext } from 'react-icons/gr';
import { BsLaptop } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import bp from '../images/bp.png'
import ecom from '../images/ecom.png'
import mp from '../images/mp.png'
import airline from '../images/airline.jpg'
import jewel from '../images/jewel.jpg'

function MyWork() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 slide-in-top">
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2">Projects</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-4 text-center my-2">
                        <div id="carouselExampleControls1" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={bp} className="d-block w-100" alt="..." height={"150px"}/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Be-Practical Template</h5>
                            <div className="row d-flex justify-content-center">
                                <a href="https://github.com/SumanthSMayakar/Be-Practical-Template" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                    </div>
                    
                    <div className="col-md-4 text-center my-2">
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={ecom} className="d-block w-100" alt="..." height={"150px"}/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">E-commerce (MERN) Project</h5>
                            <div className="row d-flex justify-content-center">
                                {/* <a href="https://natour-yg.herokuapp.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a> */}
                                <a href="https://github.com/SumanthSMayakar/ecomm-react-api-1" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                        
                    </div>

                    <div className="col-md-4 text-center my-2">
                        <div id="carouselExampleControls6" className="carousel slide my-1" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={mp} className="d-block w-100" alt="..." height={"150px"}/>
                                </div>
                            </div>
                        </div>
                            <h5 className="ff-jose my-1">Music Player React Project</h5>
                            <div className="row d-flex justify-content-center">
                                {/* <a href="https://natour-yg.herokuapp.com/" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><BsLaptop/> Watch Live</a> */}
                                <a href="https://github.com/SumanthSMayakar/MusicPlayer" className="col-sm-12 col-md-5 portfolio-link text-decoration-none text-white m-1 px-2 py-1 bg-blue rounded" target="_blank"><AiFillGithub/> Source Code</a>
                            </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default MyWork