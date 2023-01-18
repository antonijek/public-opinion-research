import { React } from "react";

import "../../styles/age.css";
const Age = ({ changeAge, changeSlider, age, style }) => {
  return (
    <div className={style}>
      <h1>How old are you?</h1>
      <form className="age">
        <div>
          <input
            type="radio"
            id="first"
            name="age"
            value="0-18"
            onChange={changeAge}
          />
          <label htmlFor="first">0-18</label>
          <br />
          <input
            type="radio"
            id="second"
            name="age"
            value="18-25"
            onChange={changeAge}
          />
          <label htmlFor="second">18-25</label>
          <br />
          <input
            type="radio"
            id="third"
            name="age"
            value="25-35"
            onChange={changeAge}
          />
          <label htmlFor="third">25-35</label>
          <br />
          <input
            type="radio"
            id="fourth"
            name="age"
            value="35-50"
            onChange={changeAge}
          />
          <label htmlFor="fourth">35-50</label>
          <br />
          <input
            type="radio"
            id="fifth"
            name="age"
            value="50 and more"
            onChange={changeAge}
          />
          <label htmlFor="fifth">50 and more</label>
          <br />
        </div>
        <div className="btn-age">
          <button disabled={!age} onClick={(e) => changeSlider("sex")}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Age;
