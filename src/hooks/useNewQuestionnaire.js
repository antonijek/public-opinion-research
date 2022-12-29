import { useContext } from "react";
import "../styles/new-anket.css";
import { postData } from "../api";
import { QuestionnaireContext } from "../components/questionnaireContext";

const useNewQuestionnaire = () => {
  const { data, setData, token } = useContext(QuestionnaireContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const changeQuestion = (e, num) => {
    let copy = { ...data };
    copy.questions[num].title = e.target.value;
    setData(copy);
  };
  const changeAnswer = (e, num, num1) => {
    let copy = { ...data };
    copy.questions[num].options[num1].option = e.target.value;
    setData(copy);
  };
  const submitData = async () => {
    try {
      let copy = { ...data };
      copy.id = copy.length - 1;
      let res = await postData(copy, token);
    } catch (err) {
      console.log(err);
    }
  };
  const removeAnswer = (question, answer) => {
    let copy = { ...data };
    let a = copy.questions[question].options;
    if (a.length > 1) {
      let x = a.filter((item) => item !== a[answer]);
      copy.questions[question].options = x;
    }
    setData(copy);
  };

  const removeQuestion = (question) => {
    let copy = { ...data };

    if (copy.questions.length > 1) {
      let filteredOptions = copy.questions.filter(
        (item) => item !== copy.questions[question]
      );
      copy.questions = filteredOptions;
    }

    setData(copy);
  };

  const addAnswer = (question, answer) => {
    let copy = { ...data };
    let x = copy.questions[question].options;
    let spreadAnswer = x
      .slice(0, answer)
      .concat({ option: "" })
      .concat(x.slice(answer));
    copy.questions[question].options = spreadAnswer;

    setData(copy);
  };

  const addQuestion = (num) => {
    let newAnswer = { title: "", options: [{ option: "" }] };
    let copy = { ...data };
    let spreadArr = copy.questions
      .slice(0, num)
      .concat(newAnswer)
      .concat(copy.questions.slice(num));
    copy.questions = spreadArr;

    setData(copy);
  };

  return {
    data,
    addAnswer,
    addQuestion,
    removeAnswer,
    removeQuestion,
    submitData,
    changeAnswer,
    changeQuestion,
    handleChange,
  };
};

export default useNewQuestionnaire;
