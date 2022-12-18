import { React, useState } from "react";
import "../styles/occupation.css";
import "../styles/loader.css";
import { useNavigate } from "react-router-dom";

const Occupation = ({ changeOccupation, occupation, style }) => {
  const navigate = useNavigate();

  return (
    <div className={style}>
      <h1>Degree of vocational education</h1>
      <form className="age">
        <div>
          <input
            type="radio"
            id="first"
            name="degree"
            value="III"
            onChange={changeOccupation}
          />
          <label htmlFor="first">III degree</label>
          <br />
          <input
            type="radio"
            id="second"
            name="degree"
            value="IV"
            onChange={changeOccupation}
          />
          <label htmlFor="second">IV degree</label>
          <br />
          <input
            type="radio"
            id="third"
            name="degree"
            value="V"
            onChange={changeOccupation}
          />
          <label htmlFor="third">V degree</label>
          <br />
          <input
            type="radio"
            id="fourth"
            name="degree"
            value="VI"
            onChange={changeOccupation}
          />
          <label htmlFor="fourth">VI degree</label>
          <br />
          <input
            type="radio"
            id="fifth"
            name="degree"
            value="VII"
            onChange={changeOccupation}
          />
          <label htmlFor="fifth">VII degree</label>
          <br />
          <input
            type="radio"
            id="sixth"
            name="degree"
            value="VIII"
            onChange={changeOccupation}
          />
          <label htmlFor="sixth">VIII degree</label>
          <br />
        </div>

        <div className="btn-age">
          <button
            disabled={!occupation}
            onClick={(e) => {
              e.preventDefault();
              navigate("/anket");
            }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Occupation;