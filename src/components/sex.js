import React from "react";

const Sex = ({ changeSex, changeSlider, sex }) => {
  return (
    <div>
      <h1>Choose sex</h1>
      <form className="age">
        <div>
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            onChange={changeSex}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            onChange={changeSex}
          />
          <label htmlFor="female">Female</label>
          <br />
        </div>
        <div className="btn-age">
          <button
            disabled={!sex}
            onClick={(e) => changeSlider(e, "occupation")}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Sex;
