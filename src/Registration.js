import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
//const fs = require(`fs`)

function Registration() {
  const next = () => {
    if (name && phone) {
      setView(false);
      console.log(name, phone, email);
    } else alert("name and phone required");
  };

  const checkIn = () => {
    console.log(name, email, phone, company, alecUser, nbOfGuest, visitReason);
  };
  //const test = require('./registration.json')
  //console.log(test)
  const query = useQuery();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [view, setView] = useState(true);
  const [alecUser, setAlecUser] = useState("");
  const [nbOfGuest, setNbOfGuest] = useState(0);
  const [guestNames, setGuestNames] = useState([]);
  const [visitReason, setVisitReason] = useState("");

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    setPhone(phone);
  };

  const handleCompanyChange = (e) => {
    const company = e.target.value;
    setCompany(company);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleAlecUser = (e) => {
    setAlecUser(e.target.value);
  };

  const handleNbOfGuests = (e) => {
    setNbOfGuest(e.target.value);
  };

  const handleGuestNames = (e) => {
    setGuestNames(e.target.value);
  };

  const handleVisitReason = (e) => {
    setVisitReason(e.target.value);
  };

  //add to json

  // const newRegistraion = {
  //   visitorId: 1,
  //   phoneNo: phone,
  //   company: company,
  //   email: email,
  //   alecUserHost: alecUser,
  //   visitReason: visitReason,
  //   noOfGuests: nbOfGuest,
  //   guestName: [guestNames],
  //   locationId: "1",
  //   checkInDate: Date,
  // };

  const userType = query.get("userType") || "new";
  return (
    <div className="reg-container">
      {userType === "new" ? (
        view ? (
          <div class="container-reg">
            <div class="top-row-reg">
              <img src="preview.png" alt="Image 1" height={50} width={50} />
              <h1>Welcome To ALEC</h1>
              <img src="logo.png" height={30} width={30} alt="Image 2" />
            </div>

            <div class="form-container-reg">
              <div>
                <label for="name">Name*</label>
                <input
                  type="text"
                  id="name"
                  onChange={handleNameChange}
                  placeholder="Please enter your full name"
                  isrequired
                />
              </div>
              <div>
                <label for="phone">Phone*</label>
                <input
                  type="number"
                  id="phone"
                  onChange={handlePhoneChange}
                  placeholder="Please enter your phone number"
                  isrequired
                />
              </div>
            </div>
            <div class="form-container-reg">
              <div>
                <label for="company">Company</label>
                <input
                  type="text"
                  id="company"
                  onChange={handleCompanyChange}
                  placeholder="Please enter your company name"
                />
              </div>
              <div>
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={handleEmailChange}
                  placeholder="Please enter your email"
                />
              </div>
            </div>
            <button onClick={next}>Next</button>
          </div>
        ) : (
          <div class="container-reg">
            <div class="top-row-reg">
              <img src="preview.png" alt="Image 1" height={50} width={50} />
              <h1>Welcome To ALEC</h1>
              <img src="logo.png" height={30} width={30} alt="Image 2" />
            </div>

            <div class="form-container-reg">
              <div>
                <label for="name2">Who you are visiting?</label>
                <input
                  type="text"
                  id="name2"
                  value={alecUser}
                  onChange={handleAlecUser}
                  placeholder="Please enter your full name"
                  required
                />
              </div>
              <div>
                <label for="phone">Number of Guests</label>
                <input
                  type="number"
                  id="number2"
                  value={nbOfGuest}
                  onChange={handleNbOfGuests}
                  placeholder="Please enter number of guests"
                  required
                />
              </div>
            </div>
            <div class="form-container-reg">
              <div>
                <label for="company">Reason of visit</label>
                <select onChange={handleVisitReason}>
                  <option value="" disabled>
                    Select the visiting reason{" "}
                  </option>
                  <option key={1} value="">
                    Meeting
                  </option>
                  <option key={2} value="">
                    Training{" "}
                  </option>
                  <option key={3} value="">
                    Testing
                  </option>
                </select>
              </div>
              <div>
                <label for="guest">Guest Names*</label>
                {nbOfGuest == 0 ? (
                  <input
                    type="text"
                    id="text2"
                    onChange={handleGuestNames}
                    value={guestNames}
                    placeholder="" disabled
                  />
                ) : (
                  <input
                    type="text"
                    id="text2"
                    onChange={handleGuestNames}
                    value={guestNames}
                    placeholder="" 
                  />
                )}
              </div>
            </div>
            <button onClick={checkIn}>CheckIn</button>
          </div>
        )
      ) : (
        <div>Returning</div>
      )}
    </div>
  );
}

export default Registration;
