import Link from "next/link";
import "./industries.css";

const Location = () => {
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
    <div className="location-section">
      <h1>INDUSTRIES</h1>

      <div className="locationContainer">
        {industryData?.map((industries, index) => {
          return (
            <div className="location-card" key={index}>
              <span>
                {/* {industries.name} */}
                <ul>
                  {industries?.subcategories?.map((city, cityIndex) => {
                    return (
                      <Link className="linkOfCity" key={cityIndex} href={`/industries/${city.split(" ")[0]}/`}>
                        <li>{city}</li>
                      </Link>
                    );
                  })}
                </ul>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Location;
