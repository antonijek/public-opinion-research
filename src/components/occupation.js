import React from "react";
import "../styles/occupation.css";
const Occupation = ({ changeOccupation, occupation, age, sex }) => {
  return (
    <div>
      <h1>Your occupation</h1>
      <div className="age">
        <input
          type="text"
          id="occupation"
          onChange={changeOccupation}
          style={{ height: "25px", marginLeft: "2%" }}
        />
        <div className="btn-age">
          <button
            disabled={!occupation}
            onClick={() =>
              console.log(`age =  ${age},sex =${sex},occupation =${occupation}`)
            }
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Occupation;
