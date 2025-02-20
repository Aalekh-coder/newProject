// import React from "react";
// import styles from "./styles.module.scss";
// import { Button, Col, Row } from "react-bootstrap";
// import SubmitBtn from "../../../miniComponents/Submit";

// export default function ContactForm() {
//   return (
//     <form>
//       <div className={styles.form_container}>
//         <Row className={styles.form_row}>
//           <Col sm={6} md={6}>
//             <input type="text" id="name" name="name" placeholder="Full Name" />
//           </Col>
//           <Col sm={6} md={6}>
//             <input type="email" id="email" name="email" placeholder="Email" />
//           </Col>
//         </Row>

//         <Row className={styles.form_row}>
//           <Col sm={6} md={6}>
//             <input type="tel" id="phone" name="phone" placeholder="Phone No." />
//           </Col>
//           <Col sm={6} md={6}>
//             <input
//               type="tel"
//               id="whatsapp"
//               name="whatsapp"
//               placeholder="WhatsApp No."
//             />
//           </Col>
//         </Row>

//         <Row className={styles.form_row}>
//           <Col>
//             <input
//               type="text"
//               id="location"
//               name="location"
//               placeholder="Enter Your Location"
//             />
//           </Col>
//         </Row>

//         <Row className={styles.form_row}>
//           <Col>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Message"
//             ></textarea>
//           </Col>
//         </Row>

//         <Row className={styles.form_row}>
//           <Col className="d-flex justify-content-center">
//             {/* <button type="submit">Submit</button> */}
//             <SubmitBtn />
//           </Col>
//         </Row>
//       </div>
//     </form>
//   );
// }


// my work 
"use client"
import { useState } from "react";
import "./ContactForm.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    toast.success(`Thanks for contacting us, ${formData.name}!`);
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="input-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp Number"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
};

export default ContactForm;
