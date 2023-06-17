import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
const FooterPagePro = () => {
  return (
    <MDBFooter color="black" className="page-footer font-small pt-0">
      <div style={{ backgroundColor: "yellow" }}>
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
              <h5 className="mb-0 black-text">
                  <ul> <strong>Get connected with us on social networks!</strong> </ul>
              </h5>
            </MDBCol>
            
            <br />
            <MDBCol md="6" lg="7" className="text-center text-md-right">
              <a className="fb-ic ml-0" href="https://www.facebook.com/directadmissiononline/">
                <i className="fab fa-facebook-f black-text mr-lg-4"> </i>
              </a>
              <a className="tw-ic" href="https://twitter.com/iwantadmission" >
                <i className="fab fa-twitter black-text mr-lg-4"> </i>
              </a>
              {/* <a className="gplus-ic">
                <i className="fab fa-google-plus-g black-text mr-lg-4"> </i>
              </a> */}
              <a className="li-ic" href="https://www.linkedin.com/company/direct-admission/about/">
                <i className="fab fa-linkedin-in black-text mr-lg-4"> </i>
              </a>
              <a className="ins-ic" href="https://www.instagram.com/directadmissiongroup/">
                <i className="fab fa-instagram black-text mr-lg-4"> </i>
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <MDBRow className="mt-3">
          <MDBCol md="3" lg="4" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Company name</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
            <h5><strong> Direct Admission Global</strong> </h5>
            </p>
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Services</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="MbaConsultants">MBA Consultants</a>
            </p>
            <p>
              <a href="/SOP">SOP/LOR</a>
            </p>
            <p>
              <a href="Mock">MOCk</a>
            </p>
            <p>
              <a href="/AWT">AWT</a>
            </p>
            <p>
              <a href="/Scolarship">Scolarship</a>
            </p>
          </MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Useful links</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <a href="/Book">Book An Appointment</a>
            </p>
            <p>
              <a href="/Application">Application Form</a>
            </p>
            <p>
              <a href="/Payment">Payment</a>
            </p>
            <p>
              <a href="/Hiring">Career</a>
            </p>
            <p>
              <a href="/Blog">Blog</a>
            </p>
          </MDBCol>
          <br />
          <MDBCol md="4" lg="3" xl="3" className="mb-4">
            <h6 className="text-uppercase font-weight-bold">
              <strong>Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p>
              <i className="fa fa-home mr-3" />  Direct Admission Global, 136, Second Floor, Vishal House, Block C, Adjacent to Bluebells School International, Zamrudpur, East of Kailash, New Delhi - 110048
            </p>
            <p>
              <i className="fa fa-envelope mr-3" />email@thedirectadm.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" />1800-3000-2688 (Tollfree)
            </p>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
     
      <div className="footer-copyright text-center py-3">
        
        <MDBContainer fluid>
         Copyright © 2023 Direct Admission Global. All rights reserved.
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPagePro;