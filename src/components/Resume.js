import React, { Fragment } from "react";
import { SiCodechef, SiHackerrank } from "react-icons/si";

function Resume() {
  return (
    <Fragment>
      <div className="col p-4">
        <div className="p-4 bg-dark slide-in-top">
          <div className="row">
            <div className="col-6">
              <h2 className="ff-jose fw-bold ls-2">Sumanth S Mayakar</h2>

              <h5 className="d-inline fw-bold ls-2">Mail Id:</h5> <a href="mailto:sumanthmayakar@gmail.com" className="h5 text-danger ls-2">  sumanthmayakar@gmail.com</a><br />
              <h5 className="d-inline fw-bold ls-2">Phone No:</h5> <a href="https://call.me/8095482007" className="h5 text-danger ">  8095482007</a>
            </div>
          </div>
          <hr></hr>
          <div className="row">
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">EDUCATION</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    Diploma - EEE
                  </h4>
                  <p className="m-0">M N T I, Bengaluru</p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    BBA - Bachelor of Business Administration (Pursuing)
                  </h4>
                  <p className="m-0">The Kingdom College, Bengaluru</p>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4 className="ff-jose ls-2">Certification</h4>
              <ul>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    <a href=""
                      className="ff-jose my-1 text-red text-decoration-none">
                      Masai
                    </a>
                  </h4>
                  <p className="m-0">Basics of Web Development Certificate </p>
                </li>
                <li>
                  <h4 className="ff-jose my-1 text-red">
                    <a
                      href="https://drive.google.com/file/d/1PsCN2Xc6UVfP_SiUvytvTRsIkwoiILSB/view?usp=share_link"
                      className="ff-jose my-1 text-red text-decoration-none"
                    >
                      MERN Stack Developer Course Certificate
                    </a>
                  </h4>
                  <p className="m-0">Be-Practical Tech Solutions Bangalore</p>
                </li>
              </ul>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4 className="ff-jose">Languages Known</h4>
              <div className="row">
                <ul className="col mx-5">
                  <li>
                    <h5>English</h5>
                  </li>
                  <li>
                    <h5>Hindi</h5>
                  </li>
                </ul>
                <ul className="col mx-5">
                  <li>
                    <h5>Kannada</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr></hr>

          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h4 className="ff-jose">Interests</h4>
              <div className="row">
                <ul className="col ms-5">
                  <li>
                    <h5>Sketching</h5>
                  </li>
                  <li>
                    <h5>Traveller</h5>
                  </li>
                </ul>
                <ul className="col ms-5">
                  <li>
                    <h5>Badminton</h5>
                  </li>
                  <li>
                    <h5>Playing Guitar</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Resume;
