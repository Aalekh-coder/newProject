"use client"
import Link from "next/link";
import "../location.css";
import { useParams } from "next/navigation";


const Location = () => {

  const { City } = useParams();
  console.log(City);

  const locationData = [
    {
      state: "Andhra Pradesh",
      cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajamahendravaram", "Tirupati", "Kakinada", "Kadapa", "Anantapuramu","Itanagar", "Naharlagun", "Pasighat","Guwahati", "Dibrugarh", "Silchar", "Jorhat","Patna", "Gaya", "Bhagalpur", "Muzaffarpur","Raipur","Bilaspur","Durg","Korba","Bhilai","Rajnandgaon","Jagdalpur","Ambikapur","Raigarh","Dhamtari","Mahasamund","Kanker","Kawardha","Janjgir","Sakti","Raipur",
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
        "Sakti",],
    },
    
  ];
  
  return (
    <div className="location-section">
      <h1>{City}</h1>

      <div className="locationContainer">
        {locationData?.map((location, index) => {
          return (
            <div className="location-card" key={index}>
              <span>
                {/* {location?.state} */}
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
