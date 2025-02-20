"use client";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import "./headeCompo.css";
import {
  Brush,
  Codesandbox,
  Compass,
  FileChartPie,
  icons,
  Ribbon,
  UserRoundPen,
  Video,
} from "lucide-react";

const Main = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [submenuVisible, setSubmenuVisible] = useState(false);

  const seviceHeader = [
    {
      heading: "Digital Marketing",
      icon: <Compass size={30} color="blue" />,
      subHeading: [
        { title: "Seo", href: "/seo" },
        { title: "Social Media", href: "/social-media" },
      ],
    },
    {
      heading: "Performance Marketing",
      icon: <FileChartPie size={30} color="pink" />,
      subHeading: [
        { title: "Website design", href: "/Websitedesign" },
        { title: "Website Developement", href: "/WebsiteDevelopement" },
        { title: "E-commerce Developement", href: "/e-commerceDevelopement" },
        { title: "Application Developement", href: "/ApplicationDevelopement" },
        { title: "Software Developement", href: "/SoftwareDevelopement" },
      ],
    },
    {
      heading: "Design & development",
      icon: <Codesandbox size={30} color="green" />,
      subHeading: [
        { title: "UI", href: "/UI" },
        { title: "UX", href: "/UX" },
        { title: "Figma", href: "/Figma" },
        { title: "PhotoShop", href: "/PhotoShop" },
        { title: "VS code", href: "/VS-code" },
      ],
    },
    {
      heading: "Graphic Design",
      icon: <Brush size={30} color="yellow" />,
      subHeading: [
        { title: "Flat Art", href: "/Flat-Art" },
        { title: "Vector Art", href: "/Vector-Art" },
        { title: "Sketch Art", href: "/Sketch-Art" },
      ],
    },
    {
      heading: "Video Production",
      icon: <Video size={30} color="purple" />,
      subHeading: [
        { title: "Final Cut Pro", href: "/finalcutpro" },
        { title: "Filmora", href: "/social-media" },
        { title: "After Effect", href: "/social-media" },
      ],
    },
    {
      heading: "Brand Promotion",
      icon: <Ribbon size={30} color="orange" />,
      subHeading: [
        { title: "Social Promotion", href: "/Social" },
        { title: "Media Markeging", href: "/Media" },
        { title: "Aticle & blog", href: "/Aticle" },
      ],
    },
    {
      heading: "Virtual Assistance",
      icon: <UserRoundPen size={30} color="orange" />,
      subHeading: [
        { title: "Seo", href: "/seo" },
        { title: "Social Media", href: "/social-media" },
      ],
    },
  ];

  const servicesLinks = {
    "digital marketing": [
      { label: "SEO", href: "/services/digital-marketing/seo" },
      {
        label: "Social Media",
        href: "/services/digital-marketing/social-media",
      },
    ],
    "Performance Marketing": [
      {
        label: "Website Design",
        href: "/services/design-and-development/website-design",
      },
      {
        label: "Website Development",
        href: "/services/design-and-development/website-development",
      },
      {
        label: "E-Commerce Development",
        href: "/services/design-and-development/e-commerce-development",
      },
      {
        label: "Application Development",
        href: "/services/design-and-development/application-development",
      },
      {
        label: "Software Development",
        href: "/services/design-and-development/software-development",
      },
    ],
    "Design & Development": [
      {
        label: "Website Design",
        href: "/services/design-and-development/website-design",
      },
      {
        label: "Website Development",
        href: "/services/design-and-development/website-development",
      },
      {
        label: "E-Commerce Development",
        href: "/services/design-and-development/e-commerce-development",
      },
      {
        label: "Application Development",
        href: "/services/design-and-development/application-development",
      },
      {
        label: "Software Development",
        href: "/services/design-and-development/software-development",
      },
    ],
    "Graphic Designing": [
      {
        label: "Website Design",
        href: "/services/design-and-development/website-design",
      },
      {
        label: "Website Development",
        href: "/services/design-and-development/website-development",
      },
      {
        label: "E-Commerce Development",
        href: "/services/design-and-development/e-commerce-development",
      },
      {
        label: "Application Development",
        href: "/services/design-and-development/application-development",
      },
      {
        label: "Software Development",
        href: "/services/design-and-development/software-development",
      },
    ],
    "video Production": [
      {
        label: "Website Design",
        href: "/services/design-and-development/website-design",
      },
      {
        label: "Website Development",
        href: "/services/design-and-development/website-development",
      },
      {
        label: "E-Commerce Development",
        href: "/services/design-and-development/e-commerce-development",
      },
      {
        label: "Application Development",
        href: "/services/design-and-development/application-development",
      },
      {
        label: "Software Development",
        href: "/services/design-and-development/software-development",
      },
    ],
    "Brand Promotion": [
      {
        label: "Website Design",
        href: "/services/design-and-development/website-design",
      },
      {
        label: "Website Development",
        href: "/services/design-and-development/website-development",
      },
      {
        label: "E-Commerce Development",
        href: "/services/design-and-development/e-commerce-development",
      },
      {
        label: "Application Development",
        href: "/services/design-and-development/application-development",
      },
      {
        label: "Software Development",
        href: "/services/design-and-development/software-development",
      },
    ],

    // Other services...
  };

  const ourWorkLinks = [
    { label: "Website Portfolio", href: "/our-work/website-portfolio" },
    { label: "Application Portfolio", href: "/our-work/application-portfolio" },
    { label: "Software Portfolio", href: "/our-work/software-portfolio" },
    { label: "Graphics Portfolio", href: "/our-work/graphics-portfolio" },
    { label: "SEO Portfolio", href: "/our-work/seo-portfolio" },
    { label: "Performance Portfolio", href: "/our-work/performance-portfolio" },
  ];

  const companyLinks = [
    { label: "About Vd Infotech", href: "/company/about-vd-infotech" },
    { label: "Mission, Vision & Goals", href: "/company/mission-vision-goals" },
    { label: "Why Vd Infotech", href: "/company/why-vd-infotech" },
    { label: "Our Client", href: "/company/our-client" },
    { label: "Testimonials", href: "/company/testimonials" },
    { label: "Social Responsibility", href: "/company/social-responsibility" },
  ];

  const packageLinks = [
    { label: "SEO Packages", href: "/packages/standard-package" },
    { label: "SMO Packages", href: "/packages/premium-package" },
    { label: "PPC Packages", href: "/packages/ppc-package" }, // Updated href
    { label: "SMM Packages", href: "/packages/smm-package" }, // Updated href
    { label: "Graphics Packages", href: "/packages/graphics-package" }, // Updated href
    { label: "Website Packages", href: "/packages/website-package" }, // Updated href
    { label: "Application Packages", href: "/packages/application-package" }, // Updated href
    { label: "Software Packages", href: "/packages/software-package" }, // Updated href
    {
      label: "Email Marketing Packages",
      href: "/packages/email-marketing-package",
    }, // Updated href
    {
      label: "Digital Marketing Packages",
      href: "/packages/digitalmarketing-package",
    },
  ];

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
    setSubmenuVisible(true);
  };

  const handleMouseLeave = () => {
    setSubmenuVisible(false);
  };

  return (
    <div className={`header_main ${styles.main_header}`}>
      <Container className={styles.main_header__container}>
        <div className={styles.parent_row}>
          <div>
            <Link href={"/"}>
              <Image
                src="/images/logo/logo-light.png"
                width="190"
                className="d-inline-block align-top"
                alt="Company logo"
                height={50}
              />
            </Link>
          </div>
          <div className={styles.main_header__middle_links}>
            <ul className={styles.nav_list}>
              <li>
                <Link className={styles.nav_links} href={"/"}>
                  Home
                </Link>
              </li>
              <li
                className={styles.dropdown}
                onClick={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className={styles.nav_dropdown} href="#">
                  Services
                </Link>
                <div className={styles.sub_menu}>
                  <div className="navContainer">
                    <ul className="ul">
                      {seviceHeader?.map((navItems, index) => {
                        return (
                          <li className="listhover" key={index}>
                            <h3>
                              {navItems?.heading} {navItems?.icon}
                            </h3>
                            <ul>
                              {navItems.subHeading?.map((subHead, index) => {
                                return (
                                  <Link
                                    href={`/service${subHead?.href}`}
                                    key={index}
                                  >
                                    <li className="li listhover">
                                      {subHead?.title}
                                    </li>
                                  </Link>
                                );
                              })}
                            </ul>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                 
                </div>
              </li>
              <li
                className={styles.dropdown}
                onMouseEnter={() => handleMouseEnter("Our Work")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className={styles.nav_dropdown} href="#">
                  Our Work
                </Link>
                <div className={styles.sub_menu}>
                  <ul>
                    {ourWorkLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          className={styles.dropdown_items}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li
                className={styles.dropdown}
                onMouseEnter={() => handleMouseEnter("Packages")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className={styles.nav_dropdown} href="#">
                  Packages
                </Link>
                <div className={styles.sub_menu}>
                  <ul>
                    {packageLinks.map((item) => (
                      <li key={item.href}>
                        <Link
                          className={styles.dropdown_items}
                          href={item.href}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li
                className={styles.dropdown}
                onMouseEnter={() => handleMouseEnter("Company")}
                onMouseLeave={handleMouseLeave}
              >
                <Link className={styles.nav_dropdown} href="#">
                  Company
                </Link>
                {activeMenu === "Company" && submenuVisible && (
                  <div className={styles.sub_menu}>
                    <ul>
                      {companyLinks.map((item) => (
                        <li key={item.href}>
                          <Link
                            className={styles.dropdown_items}
                            href={item.href}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link href="/location">Location</Link>
              </li>
              <li>
                <Link href="/industries">Industries</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link href="/get-free-consultation">
              <Button
                variant="primary"
                className={`ms-lg-3 text-uppercase ${styles.btn_primary} ${styles.main__btn_style}`}
              >
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Main;
