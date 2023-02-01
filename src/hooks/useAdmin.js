import { useState, useContext, useEffect } from "react";
import "../styles/new-anket.css";
import { postData } from "../api";
import { getData } from "../api";

let token = localStorage.getItem("token");

const useAdmin = () => {
  const [rows, setRows] = useState([]);
  const [currentResearch, setCurrentResearch] = useState([]);
  const [option, setOption] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAllQuestionnaires = async () => {
    try {
      setLoading(true);
      let res = await getData(token);
      setRows(res.data);
      setCurrentResearch(res.data[res.data.length - 1]);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllQuestionnaires();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentResearch({ ...currentResearch, [name]: value });
  };

  const changeQuestion = (e, num) => {
    let copy = { ...currentResearch };
    copy.questions[num].title = e.target.value;
    setCurrentResearch(copy);
  };

  const changeAnswer = (e, num, num1) => {
    let copy = { ...currentResearch };
    copy.questions[num].options[num1].option = e.target.value;
    setCurrentResearch(copy);
  };

  const submitData = async () => {
    try {
      setLoading(true);
      let copy = { ...currentResearch };
      copy.id = copy.length - 1;
      copy.date = new Date().toLocaleDateString();
      await postData(copy, token);
      setLoading(false);
      window.location.href = "http://localhost:3000/admin/research";
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const removeAnswer = (question, answer) => {
    let copy = { ...currentResearch };
    let a = copy.questions[question].options;
    if (a.length > 1) {
      let x = a.filter((item) => item !== a[answer]);
      copy.questions[question].options = x;
    }

    setCurrentResearch(copy);
  };

  const removeQuestion = (question) => {
    let copy = { ...currentResearch };

    if (copy.questions.length > 1) {
      let filteredOptions = copy.questions.filter(
        (item) => item !== copy.questions[question]
      );
      copy.questions = filteredOptions;
    }

    setCurrentResearch(copy);
  };

  const addAnswer = (question, answer) => {
    let copy = { ...currentResearch };
    let x = copy.questions[question].options;
    let spreadAnswer = x
      .slice(0, answer + 1)
      .concat({ option: "" })
      .concat(x.slice(answer + 1));
    copy.questions[question].options = spreadAnswer;

    setCurrentResearch(copy);
  };

  const addQuestion = (num) => {
    let newAnswer = { title: "", options: [{ option: "" }] };
    let copy = { ...currentResearch };
    let spreadArr = copy.questions
      .slice(0, num)
      .concat(newAnswer)
      .concat(copy.questions.slice(num));
    copy.questions = spreadArr;

    setCurrentResearch(copy);
  };

  return {
    rows,
    setRows,
    setCurrentResearch,
    option,
    setOption,
    currentResearch,
    addAnswer,
    addQuestion,
    removeAnswer,
    removeQuestion,
    submitData,
    changeAnswer,
    changeQuestion,
    handleChange,
    loading,
    setLoading,
  };
};

export default useAdmin;
