import React from "react";
import { TailSpin, RotatingLines, FidgetSpinner } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="loader">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#519cae", "#d62944", "#0000ff"]}
        backgroundColor="#519cae"
      />
    </div>
  );
};

export default Loader;
