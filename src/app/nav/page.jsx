"use client";
import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "./Navbar.css";
import { HiSpeakerphone } from "react-icons/hi";
import { CgPerformance } from "react-icons/cg";
import Link from "next/link";
import { FaPaintBrush, FaVideo, FaFilm, FaBullhorn } from "react-icons/fa";

const Page = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ourWorksDropdownOpen, setOurWorksDropdownOpen] = useState(false);
  const [packages, setPackages] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    ourWorksDropdownOpen
      ? setOurWorksDropdownOpen(!ourWorksDropdownOpen)
      : null;
    packages ? setPackages(!packages) : null;
    companyDropdown ? setCompanyDropdown(!companyDropdown) : null;
  };

  const toggleOurWorksDropdown = () => {
    setOurWorksDropdownOpen(!ourWorksDropdownOpen);
    dropdownOpen ? setDropdownOpen(!dropdownOpen) : null;
    packages ? setPackages(!packages) : null;
    companyDropdown ? setCompanyDropdown(!companyDropdown) : null;

  };

  const togglePackages = () => {
    setPackages(!packages);
    ourWorksDropdownOpen
      ? setOurWorksDropdownOpen(!ourWorksDropdownOpen)
      : null;
    dropdownOpen ? setDropdownOpen(!dropdownOpen) : null;
    companyDropdown ? setCompanyDropdown(!companyDropdown) : null;

  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdown(!companyDropdown);
    ourWorksDropdownOpen
      ? setOurWorksDropdownOpen(!ourWorksDropdownOpen)
      : null;
    packages ? setPackages(!packages) : null;
    companyDropdown ? setCompanyDropdown(!companyDropdown) : null;

  };

  const navData = [
    {
      heading: "Digital Marketing",
      icon: <HiSpeakerphone color="pink" />,
      links: [
        { name: "SEO", link: "seo" },
        { name: "Social Media", link: "socialMedia" },
      ],
    },
    {
      heading: "Performance Marketing",
      icon: <HiSpeakerphone />,
      links: [
        { name: "Website Designing", link: "webdesign" },
        { name: "Website Development", link: "webdevelopment" },
        { name: "E-Commerce Development", link: "ecommerce" },
        { name: "Application Development", link: "appdevelopment" },
        { name: "Software Development", link: "softdevelopment" },
      ],
    },
    {
      heading: "Graphic Design",
      icon: <FaPaintBrush color="orange" />,
      links: [
        { name: "Logo Design", link: "logoDesign" },
        { name: "Brand Identity", link: "brandIdentity" },
        { name: "UI/UX Design", link: "uiux" },
        { name: "Illustrations", link: "illustrations" },
      ],
    },
    {
      heading: "Video Editing",
      icon: <FaVideo color="blue" />,
      links: [
        { name: "Motion Graphics", link: "motionGraphics" },
        { name: "YouTube Video Editing", link: "youtubeEditing" },
        { name: "Corporate Videos", link: "corporateVideos" },
        { name: "Short Films", link: "shortFilms" },
      ],
    },
    {
      heading: "Video Production",
      icon: <FaFilm color="purple" />,
      links: [
        { name: "Advertisement Production", link: "advertProduction" },
        { name: "Documentaries", link: "documentaries" },
        { name: "Event Videography", link: "eventVideography" },
        { name: "Product Videos", link: "productVideos" },
      ],
    },
    {
      heading: "Brand Promotion",
      icon: <FaBullhorn color="red" />,
      links: [
        { name: "Influencer Marketing", link: "influencerMarketing" },
        { name: "Social Media Ads", link: "socialMediaAds" },
        { name: "Public Relations", link: "publicRelations" },
        { name: "Affiliate Marketing", link: "affiliateMarketing" },
      ],
    },
  ];

  const ourWorks = [
    { name: "Website Portfolio", link: "websitePortfolio" },
    { name: "Application Portfolio", link: "applicationPortfolio" },
    { name: "Software Portfolio", link: "softwarePortfolio" },
    { name: "Graphic Portfolio", link: "graphicPortfolio" },
    { name: "SEO Portfolio", link: "seoPortfolio" },
    { name: "Performance Portfolio", link: "performancePortfolio" },
  ];

  const packagesArray = [
    { name: "SEO Packages", link: "seoPackages" },
    { name: "SMO Packages", link: "smoPackages" },
    { name: "PPC Packages", link: "ppcPackages" },
    { name: "SMM Packages", link: "smmPackages" },
    { name: "Graphics Packages", link: "graphicsPackages" },
    { name: "Website Packages", link: "websitePackages" },
    { name: "Application Packages", link: "applicationPackages" },
    { name: "Software Packages", link: "softwarePackages" },
    { name: "Email Packages", link: "emailPackages" },
    { name: "Digital Packages", link: "digitalPackages" },
  ];

  const company = [
    { name: "About Info Tech", link: "about-info-tech" },
    { name: "Mission", link: "mission" },
    { name: "Vision & Goals", link: "vision-goals" },
    { name: "Why VD Infotech", link: "why-vd-infotech" },
    { name: "Our Clients", link: "our-clients" },
    { name: "Testimonials", link: "testimonials" },
    { name: "Social Responsibility", link: "social-responsibility" },
  ];

  return (
    <div className="navContainer">
      {/* Logo */}
      <div>Logo</div>

      {/* Navigation Links */}
      <div className="nav">
        <span>Home</span>

        {/* Services Dropdown */}
        <div
          className="nav-item"
          onMouseEnter={toggleDropdown}
          onClick={toggleDropdown}
        >
          <span>
            Services <IoMdArrowDropdown />
          </span>

          {/* Dropdown Content */}
          {dropdownOpen && (
            <div className="dropdown">
              <div className="navDropdownContainer">
                <div className="container">
                  {navData.map((item, index) => {
                    return (
                      <div key={index}>
                        <span className="NavHeading">
                          {item.heading}
                          <span color="red">{item.icon}</span>
                        </span>
                        {item.links.map((link) => {
                          return (
                            <Link key={index} href={link.link}>
                              <li className="navLink">{link.name}</li>
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className="nav-item"
          onMouseEnter={toggleOurWorksDropdown}
          onClick={toggleOurWorksDropdown}
        >
          <span>
            Our Work <IoMdArrowDropdown />
          </span>

          {/* Dropdown Content */}
          {ourWorksDropdownOpen && (
            <div className="dropdown">
              <div className="navDropdownContainer">
                <div className="container">
                  {ourWorks.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link href={item.link} className="NavHeading">
                          {item?.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={togglePackages}
          onClick={togglePackages}
        >
          <span>
            Packages <IoMdArrowDropdown />
          </span>

          {/* Dropdown Content */}
          {packages && (
            <div className="dropdown">
              <div className="navDropdownContainer">
                <div className="container">
                  {packagesArray?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link href={item.link} className="NavHeading">
                          {item?.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className="nav-item"
          onMouseEnter={toggleCompanyDropdown}
          onClick={toggleCompanyDropdown}
        >
          <span>
            Company <IoMdArrowDropdown />
          </span>

          {/* Dropdown Content */}
          {companyDropdown && (
            <div className="dropdown">
              <div className="navDropdownContainer">
                <div className="container">
                  {company?.map((item, index) => {
                    return (
                      <div key={index}>
                        <Link href={item.link} className="NavHeading">
                          {item?.name}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        <Link href="location">
          <span className="line">Location</span>{" "}
        </Link>
        <Link href="industries">Industries</Link>
      </div>

      {/* Button */}
      <button className="getFreeConsult">Get Free Consultation</button>
    </div>
  );
};

export default Page;

