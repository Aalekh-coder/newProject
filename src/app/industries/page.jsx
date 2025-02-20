"use client";

import React from "react";
import Top from "../../components/Header/Top";
import Main from "../../components/Header/HeaderComp";
import ServiceBanner from "../../components/banners/ServiceBanner";
import Footer from "../../components/Footer";
import { Box, Typography, Grid, Button } from "@mui/material";
import "./industry.scss"; // Import the SCSS file
import Link from "next/link";

const page = () => {
  // const industryData = [
  //   "Drugs & Pharmaceuticals",
  //   "Apparel & Garments",
  //   "Hospital & Diagnostics",
  //   "Food & Beverages",
  //   "Industrial Plants & Machinery",
  //   "Industrial Supplies",
  //   "Building & Construction",
  //   "Electronics & Electrical",
  //   "Packaging Machines & Goods",
  //   "Chemicals, Dyes & Solvents",
  //   "Mechanical Parts & Spares",
  //   "Lab Instruments & Supplies",
  //   "Furniture & Supplies",
  //   "Automobile, Parts & Spares",
  //   "Agriculture & Farming",
  //   "Housewares & Supplies",
  //   "Metals, Alloys & Minerals",
  //   "Hand & Machine Tools",
  //   "Handicrafts & Decoratives",
  //   "Kitchen Utensils & Appliances",
  //   "Textiles, Yarn & Fabrics",
  //   "Books & Stationery",
  //   "Cosmetics & Personal Care",
  //   "Home Textile & Furnishing",
  //   "Engineering Services",
  //   "Gems, Jewelry & Astrology",
  //   "Computer & IT Solutions",
  //   "Fashion Accessories & Gear",
  //   "Herbal & Ayurvedic Products",
  //   "Security Systems & Services",
  //   "Sports Goods, Toys & Games",
  //   "Telecom Equipment & Goods",
  //   "Paper & Paper Products",
  //   "Bags, Belts & Wallets",
  //   "Media, PR & Publishing",
  //   "Marble, Granite & Stones",
  //   "Event Planner & Organizer",
  //   "IT & Telecom Services",
  //   "Product Rental & Leasing",
  //   "Transportation & Logistics",
  //   "Business & Audit Services",
  //   "Financial & Legal Services",
  //   "Education & Training",
  //   "Travel, Tourism & Hotels",
  //   "Call Center & BPO Services",
  //   "Bicycle, Rickshaw & Spares",
  //   "R&D and Testing Labs",
  //   "Architecture & Interiors",
  //   "HR Planning & Recruitment",
  //   "Housekeeping Services",
  //   "Leather Products",
  //   "Contractors & Freelancers",
  //   "Electronics Components",
  //   "Electrical Equipment",
  //   "Hospital, Clinic & Consultation",
  // ];


  const industryData = [
  {
    name: "Drugs & Pharmaceuticals",
    subcategories: [
      "Active Pharmaceutical Ingredients (API)",
      "Generic Medicines",
      "Biotechnology Products",
      "Vitamins & Supplements",
      "Ayurvedic & Herbal Medicines",
      "Pharmaceutical Machinery",
      "Medical Devices & Equipment",
      "Pharmaceutical Packaging",
      "Bulk Drugs & Intermediates",
      "Vaccines & Biopharmaceuticals",
      "Contract Manufacturing",
      "Pharmaceutical R&D",
      "Hospital & Medical Supplies",
    ],
  },
  {
    name: "Apparel & Garments",
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Kids' Wear",
      "Sportswear",
      "Ethnic Wear",
      "Denim & Jeans",
      "Winter Wear",
      "Footwear & Accessories",
    ],
  },
  {
    name: "Hospital & Diagnostics",
    subcategories: [
      "Medical Equipment",
      "Diagnostic Services",
      "Pathology Labs",
      "Healthcare Consulting",
      "Emergency Medical Services",
      "Home Healthcare",
      "Pharmaceuticals",
      "Telemedicine",
    ],
  },
  {
    name: "Food & Beverages",
    subcategories: [
      "Organic Foods",
      "Beverages & Juices",
      "Dairy & Milk Products",
      "Bakery & Confectionery",
      "Frozen & Processed Foods",
      "Spices & Condiments",
      "Fast Food & Snacks",
    ],
  },
  {
    name: "Industrial Plants & Machinery",
    subcategories: [
      "Automation Systems",
      "CNC Machines",
      "Heavy Machinery",
      "Textile Machinery",
      "Packaging Machinery",
      "Agricultural Machinery",
      "Food Processing Machinery",
    ],
  },
  {
    name: "Building & Construction",
    subcategories: [
      "Cement & Concrete",
      "Steel & Metal Structures",
      "Construction Equipment",
      "Plumbing & Sanitary Ware",
      "Roofing & Flooring Materials",
      "Glass & Windows",
      "Smart Buildings",
    ],
  },
  {
    name: "Electronics & Electrical",
    subcategories: [
      "Consumer Electronics",
      "Home Appliances",
      "Electrical Wiring & Accessories",
      "LED Lighting",
      "Batteries & UPS",
      "Semiconductors & Chips",
      "Electric Vehicles",
    ],
  },
  {
    name: "Packaging Machines & Goods",
    subcategories: [
      "Flexible Packaging",
      "Cartons & Boxes",
      "Plastic Packaging",
      "Food & Beverage Packaging",
      "Packaging Machines",
      "Eco-friendly Packaging",
    ],
  },
  {
    name: "Chemicals, Dyes & Solvents",
    subcategories: [
      "Industrial Chemicals",
      "Organic Chemicals",
      "Dyes & Pigments",
      "Adhesives & Sealants",
      "Cleaning Chemicals",
      "Agrochemicals",
    ],
  },
  {
    name: "Furniture & Supplies",
    subcategories: [
      "Home Furniture",
      "Office Furniture",
      "Wooden Furniture",
      "Modular Furniture",
      "Outdoor & Garden Furniture",
      "Hospital Furniture",
    ],
  },
  {
    name: "Automobile, Parts & Spares",
    subcategories: [
      "Two-Wheeler Parts",
      "Four-Wheeler Parts",
      "Electric Vehicle Components",
      "Car Accessories",
      "Batteries & Lubricants",
      "Automobile Manufacturing",
    ],
  },
  {
    name: "Agriculture & Farming",
    subcategories: [
      "Fertilizers & Pesticides",
      "Agricultural Equipment",
      "Irrigation Systems",
      "Organic Farming",
      "Horticulture & Floriculture",
      "Livestock & Poultry",
    ],
  },
  {
    name: "Security Systems & Services",
    subcategories: [
      "CCTV & Surveillance",
      "Biometric Systems",
      "Home Security",
      "Fire & Safety Equipment",
      "Cybersecurity Services",
      "Private Security Agencies",
    ],
  },
  {
    name: "Computer & IT Solutions",
    subcategories: [
      "Software Development",
      "Cloud Computing",
      "IT Consulting",
      "Data Centers & Servers",
      "AI & Machine Learning",
      "Cybersecurity Solutions",
    ],
  },
  {
    name: "Education & Training",
    subcategories: [
      "Schools & Colleges",
      "E-learning Platforms",
      "Vocational Training",
      "Coaching & Tuition",
      "Skill Development",
      "Corporate Training",
    ],
  },
  {
    name: "Travel, Tourism & Hotels",
    subcategories: [
      "Travel Agencies",
      "Hotels & Resorts",
      "Holiday Packages",
      "Adventure Tourism",
      "Pilgrimage Tours",
      "Cruise & Luxury Travel",
    ],
  },
  {
    name: "Financial & Legal Services",
    subcategories: [
      "Banking & Insurance",
      "Accounting & Taxation",
      "Legal Advisory",
      "Wealth Management",
      "Loan & Mortgage Services",
      "Stock Market Investments",
    ],
  },
  {
    name: "HR Planning & Recruitment",
    subcategories: [
      "Staffing Solutions",
      "Executive Search",
      "HR Consultancy",
      "Payroll Management",
      "Workforce Outsourcing",
      "Freelancing & Gig Jobs",
    ],
  },
];


  return (
    <>
      <Top />
      <Main />
    
      <ServiceBanner
      bannerText="Industries "
      bannerImage="/path/to/your-image.jpg"
    />
      <div>
        <Box className="industry-section">
          <Typography variant="h3" align="center" gutterBottom>
            Explore Our Industries
          </Typography>
          <Grid container spacing={4}>
            {industryData.map((industry, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Link href={`industries/${industry?.name.split(" ")[0]}`} className="industry-card">
                  <Typography variant="h6">{industry?.name}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      <Footer />
    </>
  );
};

export default page;
