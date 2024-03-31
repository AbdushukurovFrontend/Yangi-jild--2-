import React from "react";
import styled from "styled-components";
import {
  FaCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Col, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";
import { Button } from "bootstrap";

function Footer() {
  return (
    <StyledFooter>
      <footer className="bg_color mt-5 pt-4">
        <div className="container text-white">
          <div className="row ">
            {/* col-1 */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12  col-12 card-box">
              <h4 className="footer_h4 w-75 fw-bold mt-20 display-5 ">
                For More Details Contact Us!
              </h4>

              <div className="flex align-items-center footer_hrm ">
                <div className=" fs-6">
                  <FaCircle />
                </div>
                <div className="footer_hr"></div>
              </div>
              <p className="footer_p   ">
                Send our team a quick message with your question, project ideas
                and we’ll get back to you as soon as possible. We’re pretty
                responsive and will try to respond in a few hours 🙂
              </p>

              <p className="footer_follow fw-bold fs-4">Follow us :</p>
              <div className=" flex mb-20">
                <ul className="footer_ul  fs-4 ">
                  <li className=" flex align-items-center gap-2 ">
                    <a className="text-white" href="#">
                      <FaFacebook />
                    </a>
                    Facebook
                  </li>
                  <li className=" flex align-items-center gap-2 ">
                    <a className="text-white" href="#">
                      <FaSquareXTwitter />
                    </a>
                    Twitter
                  </li>
                  <li className=" flex align-items-center gap-2 ">
                    <a className="text-white" href="#">
                      <FaLinkedin />
                    </a>
                    Linkendin
                  </li>
                  <li className=" flex align-items-center gap-2 ">
                    <a className="text-white" href="#">
                      <FaInstagram />
                    </a>
                    Instagram
                  </li>
                </ul>
              </div>
            </div>

            {/* col-2 */}
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12  polty  ">
              <Form className=" mb-10 ">
                <Row className="mb-3">
                  <Form.Group as={Col} xl="8" lg="8" md="12" sm="12 "  controlId="validationCustom01">
                    <Form.Label className="footer_label fs-5 text-white">
                      Full Name *
                    </Form.Label>
                    <Form.Control
                      required
                      type="text"
                      // placeholder="First name"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    xl="8" lg="8" md="12" sm="12 "
                    className=" mt-3"
                    controlId="validationCustom02"
                  >
                    <Form.Label className="footer_label fs-5">
                      Phone *
                    </Form.Label>
                    <Form.Control
                      required
                      type=" Phone nummber"
                      // placeholder="Last name"
                      defaultValue=""
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    xl="8" lg="8" md="12" sm="12 "
                    className=" mt-3"
                    controlId="formGroupEmail"
                  >
                    <Form.Label className="footer_label fs-5">
                      Email address *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      // placeholder="Enter email"
                      required
                    />
                  </Form.Group>

                  <Form.Label className="footer_label mt-3 fs-5 ">
                    Comment or Message *
                  </Form.Label>
                  <FloatingLabel
                    className="bg_color "
                    controlId="floatingTextarea"
                    label=""
                    as={Col}
                    xl="8" lg="8" md="12" sm="12 "
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                    />
                  </FloatingLabel>

                 <div>
                 <div className="row text-center mt-3">
                    <div className="col-xl-4 col-lg-3 col-md-12  col-sm-5  col-12 ">
                     <div className="p-2">
                     <button className=" footer_button1">Attache </button>
                     </div>
                    </div>
                    <div className="col-xl-4 col-lg-3 col-md-12    col-sm-5  col-12 ">
                    <div className="p-2 ">  
                    <button className="  footer_button" type="submit">Submit</button>

                    </div>
                    </div>
                  </div>
                 </div>
                  
                </Row>
              </Form>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Map */}
      <div className="footer_map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11984.83248494579!2d69.2281415!3d41.32608755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1711603656874!5m2!1sru!2s"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`

@media screen and (max-width:760px ){
  
.polty{
  margin-top: 10px !important;
}
}


.polty{
  margin-top: 65px;
}

.footer_button{
  background-color: wheat;
  padding: 5px;
  width: 150px;
  height: 40px;
  color: #FF7F00;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;

  &:hover{
    background: #FF7F00;
    color: white;
    border: 2px solid  #f4f4f4 ;
  }
}


.footer_button1{
  background:  #FF7F00;
    color: #FF7F00;
    border: none;
    color: wheat;
  padding: 5px;
  width: 150px;
  height: 40px;
  font-size: 18px;
  border-radius: 30px;
  cursor: pointer;

  &:hover{
    
    background: #FF7F00;
    color: white;
    border: 2px solid  #f4f4f4 ;
    transition: 0ms.2s;

  }
}

  input,
  textarea {
    background-color: transparent !important;
    box-sizing: border-box;
    border: 1px solid rgb(119, 119, 119);
    border-radius: 8px;
    height: 55px;
  }
  textarea {
  
    max-height: 120px;
  }

  .card-box {
    padding-right: 50px !important;
  }

  .bg_color {
    background-color: rgb(255, 127, 0);
    /* color: white !important; */
  }
  .footer_ul {
    margin: 0;
    padding: 0;
  }
  .footer_hr {
    height: 2px;
    width: 22%;
    background-color: white;
  }
  .footer_hrm {
    margin-top: 26px;
  }
  .footer_label {
    color: rgb(255, 255, 255);
  }
  .footer_but {
    color: rgb(255, 127, 0);
  }
  .footer_p {
    margin-top: 36px;
    margin-bottom: 25px;
    color: rgb(255, 255, 255);
    font-size: 26px;
    font-weight: 300;
    line-height: 107.52%;
    letter-spacing: 0%;
    text-align: left;
  }
`;

export default Footer;