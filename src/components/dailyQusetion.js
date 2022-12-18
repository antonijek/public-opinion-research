import React from "react";
import TitlePage from "./titlePage";
import Answer from "./answer";
import Question from "./question";

const DailyQusetion = () => {
  return (
    <div>
      <TitlePage title="Luka Bar" />
      <Question question="Sta mislite o otkupu akcija Luke Bar?" />
      <Answer id="1" name="luka" content="Mislim da je dobar potez" />
      <Answer id="2" name="luka" content="Mislim da nije dobar potez" />
      <Answer
        id="3"
        name="luka"
        content="Mislim da je to predizborni marketing"
      />
      <Answer id="4" name="luka" content="Nista od ponudjenog" />
      <Question question="Sta mislite o prodaji Luke??" />
      <Answer id="5" name="prodaja" content="Mislim da je dobar potez. " />
      <Answer id="6" name="prodaja" content="Los potez." />
      <Answer id="7" name="prodaja" content="Predizborni marketing" />
      <Answer id="8" name="prodaja" content="Nista od navedenog" />
      <Question question="Je li Driran lopov?" />
      <Answer id="9" name="lopov" content="Naravno da jeste" />
      <Answer id="10" name="lopov" content="NIje " />

      <div className="answer">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default DailyQusetion;
