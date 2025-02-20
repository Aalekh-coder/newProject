"use client";
import React, { useState } from "react";
import { toast } from "react-toastify"; // Importing toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import SubmitBtn from "../../../miniComponents/Submit";
import "./FormPage.scss";

const ResumeSubmition = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    position: "",
    resume: null,
  });



  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  // Form submission with validation and Toastify messages
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!formData.name) {
      toast.error("Name is required!");
      return;
    }

    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }

    if (!formData.position) {
      toast.error("Please select a position!");
      return;
    }

    if (!formData.resume) {
      toast.error("Please upload a resume!");
      return;
    }

    // If all validation passed, show success message
    toast.success("Form submitted successfully!");

    // Handle actual form submission (e.g., sending data to a server)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Apply for a Position</h1>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="position">Select Position</label>
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="frontend">Frontend Developer</option>
            <option value="backend">Backend Developer</option>
            <option value="ai-ml">AI/ML Developer</option>
            <option value="devops">DevOps</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <SubmitBtn />
      </form>
    </div>
  );
};

export default ResumeSubmition;
