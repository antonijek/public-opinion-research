import { React, useContext } from "react";
import Statistics from "./statistics";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { QuestionnaireContext } from "../common/questionnaireContext";
import { deleteData } from "../../api/index";
import EditQuestionnaire from "../common/editQuestionnaire";

let token = localStorage.getItem("token");

const Test = () => {
  const {
    rows,
    setRows,
    currentResearch,
    setCurrentResearch,
    option,
    setOption,
    addAnswer,
    addQuestion,
    removeAnswer,
    removeQuestion,
    submitData,
    changeAnswer,
    changeQuestion,
    handleChange,
  } = useContext(QuestionnaireContext);

  const columns = [
    {
      field: "id",
      headerName: "Id",
      flex: 0.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1.5,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "method",
      headerName: "Method",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "statistics",
      headerName: "Statistics",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <Link to={`/admin/research`}>
            <p>View details</p>
          </Link>
        );
      },
    },
    {
      field: "edit",
      headerName: "Edit",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: (cellValues) => {
        return (
          <Link to={`questionnaire/${cellValues.id}`}>
            <EditSharpIcon />
          </Link>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: () => {
        return <DeleteIcon />;
      },
    },
  ];

  const handleClick = async (e) => {
    if (e.field === "edit") {
      setCurrentResearch(e.row);
      setOption(3);
    }
    if (e.field === "delete") {
      await deleteData(e.id, token);
      let copy = [...rows];
      let filteredRows = copy.filter((item) => item.id !== e.id);
      setRows(filteredRows);
    }
    if (e.field === "statistics") {
      setCurrentResearch(e.row);
      setOption(2);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      {option === 2 ? (
        <Statistics />
      ) : option === 1 ? (
        <Box
          sx={{
            color: "#666666",
            height: "50vh",
            width: "100%",
          }}
        >
          <h2>ALL ANKETS</h2>
          <DataGrid
            sx={{
              boxShadow: { md: "20px 20px 50px #9E9E9E" },
              m: 3,
              textAlign: "center",
              backgroundColor: "#c5d6dd",
            }}
            disableSelectionOnClick
            onCellClick={(e) => handleClick(e)}
            rows={rows}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
            autoPageSize
            autoHeight
          />
        </Box>
      ) : option === 3 ? (
        <EditQuestionnaire
          currentResearch={currentResearch}
          addAnswer={addAnswer}
          addQuestion={addQuestion}
          removeAnswer={removeAnswer}
          removeQuestion={removeQuestion}
          submitData={submitData}
          changeAnswer={changeAnswer}
          changeQuestion={changeQuestion}
          handleChange={handleChange}
        />
      ) : null}
    </Box>
  );
};

export default Test;
