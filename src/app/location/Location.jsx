import Link from "next/link";
import "./location.css";

const Location = () => {

  const locationData = [
    {
      state: "Andhra Pradesh",
      cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajamahendravaram", "Tirupati", "Kakinada", "Kadapa", "Anantapuramu"],
    },
    {
      state: "Arunachal Pradesh",
      cities: ["Itanagar", "Naharlagun", "Pasighat"],
    },
    {
      state: "Assam",
      cities: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
    },
    {
      state: "Bihar",
      cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
    },
    {
      state: "Chhattisgarh",
      cities: [
        "Raipur",
        "Bilaspur",
        "Durg",
        "Korba",
        "Bhilai",
        "Rajnandgaon",
        "Jagdalpur",
        "Ambikapur",
        "Raigarh",
        "Dhamtari",
        "Mahasamund",
        "Kanker",
        "Kawardha",
        "Janjgir",
        "Sakti",
      ],
    },
  ];
  
  return (
    <div className="location-section">
      <h1>INDIA</h1>

      <div className="locationContainer">
        {locationData?.map((location, index) => {
          return (
            <div className="location-card" key={index}>
              <span>
                {location?.state}
                <ul>
                  {location?.cities.map((city, cityIndex) => {
                    return (
                      <Link className="linkOfCity" key={cityIndex} href={`/location/${city}`}>
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
