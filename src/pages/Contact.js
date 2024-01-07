import React from "react";
import Meta from "../components/Meta";
import BreadCrum from "../components/BreadCrum";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from "../components/Container";
const Contact = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <BreadCrum title="Contact Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12" style={{ height: "500px" }}>
            <iframe
              title="google map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7771.690358540094!2d77.48230139276129!3d13.108992648155553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae2390815cdccf%3A0x3e49f91af960ba91!2sHesargatta%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1704258956817!5m2!1sen!2sin"
              style={{ width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-details-wrapper d-flex justify-content-between py-3 px-4">
              <div>
                <h3 className="contact-title">Contact</h3>
                <form action="#" className="d-flex gap-15 flex-column">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name *"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email *"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number *"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="10"
                      placeholder="Commets *"
                      required
                    ></textarea>
                  </div>
                  <div className="d-flex  justify-content-center">
                    <button className="button rounded-pill" type="submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title text-start">Get in touch With</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex align-items-center gap-3">
                      <AiOutlineHome className="fs-5" />
                      <address className="mb-0">
                        Ho 92 Hessaghatta Bangalore North 560088
                      </address>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-3">
                      <AiOutlineMail className="fs-5" />
                      <a href="tel:+91 6362379895">+91 6362379895</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-3">
                      <BiPhoneCall className="fs-5" />
                      <a href="mailto:shivuroopesh6362@gmail.com">
                        shivuroopesh6362@gmail.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-3">
                      <BiInfoCircle className="fs-5" />
                      <p className="mb-0">Monday -- Friday 10 AM - 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
