import "./Home.css";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Clock from "./Clock";

function Home() {
  const navigate = useNavigate();
  const [siteLocation, setSiteLocation] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [middleText, setMiddleText] = useState(false);

  const goHome = (path) => {
    navigate(path);
  };
  const goSettings = (path) => {
    navigate(path);
  };
  const goRegistration = (path, userType) => {
    window.location.href = `${path}?userType=${userType}`
    
  };
  const removeLocation = () => {
    setSiteLocation("");
    localStorage.setItem("siteLocation", "");
  };
  useEffect(() => {
    // Retrieve the location from local storage
    const savedLocation = localStorage.getItem("siteLocation");
    if (savedLocation) {
      setSiteLocation(savedLocation);
    }
  }, []);
  return (
    <div className="container">
      {siteLocation ? (
        <div className="container">
          <div className="top-left-logo" onClick={() => goHome("/")}>
            <img src="logo.png" height={70} width={150} />
          </div>
          <div className="top-right" onClick={() => goSettings("/settings")}>
            {siteLocation}
            <img src="icon2.png" height={50} width={50} />
          </div>
          <div className="middle">
            <div
              className="visitor-container"
              onClick={() => goRegistration("/registration", "new")}
            >
              <img
                src="image.png"
                height={100}
                width={100}
                alt="Visitor Icon"
              />
              <div>I am a new visitor</div>
            </div>

            <div
              className="visitor-container"
              onClick={() => goRegistration("/registration", "returning")}
            >
              <img
                src="books.jpg"
                height={100}
                width={100}
                alt="Returning Visitor Icon"
              />
              <div>I am a returning visitor</div>
            </div>
          </div>
          <div className="bottom-left">
            <Clock />
          </div>
          <div className="bottom-right" onClick={() => removeLocation()}>
            Privacy Statement
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="top-left-logo" onClick={() => goHome("/")}>
            <img src="logo.png" height={70} width={150} />
          </div>
          <div className="top-right" onClick={() => goSettings("/settings")}>
            <img src="icon2.png" height={50} width={50} />
          </div>
          <div className="middle">
            Go to settings icon to set site location.
          </div>
          <div className="bottom-left">
            <Clock />
          </div>
          <div className="bottom-right" onClick={() => removeLocation()}>
            Privacy Statement
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
/* inside return
 <div className="container">
      <div className="top-left-logo" onClick={() => goHome("/")}>
        Home
      </div>
      <div className="top-right" onClick={() => goSettings("/settings")}>
        setings
      </div>
      <div className="middle">go to</div>
      <div className="bottom-left">time</div>
      <div className="bottom-right">privacy</div>
    </div> 
    
    
    
    <div>
      {siteLocation ? (
        <div>There is site location</div>
      ) : (
        <div>no site location</div>
      )}
    </div>
    
    
    */
