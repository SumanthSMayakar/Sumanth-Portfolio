import React, { Fragment } from 'react'
import {VscHome} from 'react-icons/vsc'
import {FiUser} from 'react-icons/fi'
import {BsCode} from 'react-icons/bs'
import {MdOutlineDashboard, MdOutlineContactPage, MdEmail} from 'react-icons/md'
import {AiFillLinkedin, AiFillSkype, AiFillGithub, AiOutlineUnorderedList, AiFillWechat, AiOutlineWhatsApp} from 'react-icons/ai'
import {Link, NavLink} from "react-router-dom";

// import resume from '../files/resume'




function Sidebar() {
  return (
    <Fragment>        
            <div className="col-3 col-md-3 col-xl-2 px-sm-1 px-0 bg-dark slide-in-left navbar-md-expand">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-4 text-white min-vh-100">
                    <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="" style={{fontWeight: '800', fontSize: '20px'}}>Portflio</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link align-middle px-0 text-white">
                                <VscHome className='fs-5'/> <span className="ms-1 d-none d-sm-inline">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link align-middle px-0 text-white">
                                <FiUser className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">About</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/skills" className="nav-link align-middle px-0 text-white">
                                <BsCode className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Skills</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/mywork" className="nav-link align-middle px-0 text-white">
                                <MdOutlineDashboard className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">My Work</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resume" className="nav-link align-middle px-0 text-white">
                                <AiOutlineUnorderedList className='fs-5'/> <span className="ms-1 d-none d-sm-inline ">Resume</span>
                            </NavLink>
                        </li>
                        <div className="dropdown pb-4 dropdown mt-2">
                        <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <MdOutlineContactPage className='fs-5'/>
                            <span className="d-none d-sm-inline mx-1">Contact</span>
                        </a>
                        
                        <ul className="dropdown-menu shadow" aria-labelled by="dropdownUser1">
                            <li><a className="dropdown-item text-black" href="mailto:sumanthmayakar@gmail.com"><MdEmail className='fs-5'/> Email</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://www.linkedin.com/in/sumanth-mayakar-b674551b4" target="/blank"><AiFillLinkedin className='fs-5'/> LinkedIn</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://wa.me/8095482007" target="/blank"><AiOutlineWhatsApp className='fs-5'/> WhatsApp</a></li>
                            <li> <hr className="dropdown-divider"/> </li>
                            <li><a className="dropdown-item text-black" href="https://github.com/SumanthSMayakar" target="/blank"><AiFillGithub className='fs-5'/> Github</a></li>
                            
                            <li> <hr className="dropdown-divider"/> </li>
                            <li> <a className="btn btn-outline-dark ms-3" href={require("../files/SumanthResume.pdf")} download="SumanthResume">Download CV</a></li>
                        </ul>
                        
                    </div>
                    </ul>
                    <hr/>
                    
                </div>
            </div>

    </Fragment>
  )
}

export default Sidebar