import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Settings.css'
function Settings() {
  const [locations, setLocations] = useState([]);
  const [siteLocation, setSiteLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState([]);

  const [pin, setPin] = useState("");
  const [isPinCorrect, setIsPinCorrect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/locations.json")
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  const handlePinChange = (e) => {
    const inputPin = e.target.value;
    setPin(inputPin);

    if (inputPin === "1234") {
      setIsPinCorrect(true);
    } else {
      setIsPinCorrect(false);
      setSelectedLocation("");
    }
  };

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    console.log(e.target.value);
  };

  const handleSave = () => {
    if (selectedLocation) {
      // Save the selected location (e.g., to local storage or context)
      localStorage.setItem("siteLocation", selectedLocation);
      // Navigate to another page if needed
      navigate("/");
      console.log("Saved location:", selectedLocation);
    } else if(selectedLocation ===null) alert("Please select a location.");
  };

  return (
    <div className="container">
    <div className="form-container">
        <text>Enter PIN</text>
      <input
        type="password"
        placeholder="PIN"
        onChange={handlePinChange}
        value={pin}
      />

      {isPinCorrect && (
        <div className="location-select">
          <text>Select a Location: </text>
          <select
            id="location"
            value={selectedLocation}
            onChange={handleLocationChange}
            style={{ width: "300px" }} // Adjust width as needed
          >
            <option value="" >
              Select a Location{" "}
            </option>
            {locations.map((location) => (
              <option key={location.id} value={location.name}>
                {location.name} - {location.address}
              </option>
            ))}
          </select>
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Settings;

/*useEffect(()=>{
    fetch('/public/locations.json')
    .then(response => response.json())
    .then(data=>setLocations(data))
    .catch(error => console.error('Error fetching locations:', error));
}) */
