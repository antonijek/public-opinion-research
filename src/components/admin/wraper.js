import { React, useContext, useState } from "react";
import Statistics from "./statistics";
import { Box, TextField, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import { QuestionnaireContext } from "../common/questionnaireContext";
import { deleteData } from "../../api/index";
import EditQuestionnaire from "../common/editQuestionnaire";
import SearchAndDeleteBAr from "./searchAndDeleteBAr";

let token = localStorage.getItem("token");

const Wraper = () => {
  const [data, setData] = useState();
  const [selectedRows, setSelectedRows] = useState();
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
    loading,
    setLoading,
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
      field: "statistics",
      headerName: "Statistics",
      flex: 1,
      align: "center",
      headerAlign: "center",

      renderCell: (cellValues) => {
        return (
          <Link
            to={`/admin/research`}
            style={{ color: "#519cae", textDecoration: "none" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2.5vw", sm: "1.5vw", lg: "1vw" },
                ":hover": {
                  color: "#d1e7dd",
                },
              }}
            >
              Statistics
            </Typography>
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
            <EditSharpIcon
              sx={{
                color: "#519cae",
                ":hover": {
                  color: "#d1e7dd",
                },
              }}
            />
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
        return (
          <Link>
            <DeleteIcon
              sx={{
                color: "#519cae",
                ":hover": {
                  color: "#d1e7dd",
                },
              }}
            />
          </Link>
        );
      },
    },
  ];

  const handleClick = async (e) => {
    if (e.field === "edit") {
      setCurrentResearch(e.row);
      setOption(3);
    }
    if (e.field === "delete") {
      try {
        setLoading(true);
        await deleteData(e.id, token);
        let copy = [...rows];
        let filteredRows = copy.filter((item) => item.id !== e.id);
        setRows(filteredRows);
        setLoading(false);
      } catch {
        setLoading(false);
      }
    }
    if (e.field === "statistics") {
      setCurrentResearch(e.row);
      setOption(2);
    }
  };

  return (
    <Box sx={{ width: "100%", pb: { sm: "10vh" } }}>
      {option === 2 ? (
        <Statistics />
      ) : option === 1 ? (
        <Box
          sx={{
            color: "#666666",
            width: "100%",
            pt: 2,
          }}
        >
          <Box sx={{ zIndex: 0 }}>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                fontSize: { xs: "5vw", sm: "3vw", lg: "2vw" },
              }}
            >
              ALL ANKETS
            </Typography>
            <SearchAndDeleteBAr
              rows={rows}
              setRows={setRows}
              setData={setData}
              selectedRows={selectedRows}
            />
          </Box>

          <DataGrid
            sx={{
              boxShadow: { md: "20px 20px 50px #9E9E9E" },
              mx: { xs: 1, md: 3 },
              my: 1,
              textAlign: "center",
              backgroundColor: "#c5d6dd",
            }}
            disableSelectionOnClick
            onCellClick={(e) => handleClick(e)}
            rows={data ? data : rows}
            columns={columns}
            pageSize={6}
            rowsPerPageOptions={[5]}
            checkboxSelection
            autoPageSize
            autoHeight
            loading={loading}
            onSelectionModelChange={(e) => setSelectedRows(e)}
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
          loading={loading}
          setLoading={setLoading}
        />
      ) : null}
    </Box>
  );
};

export default Wraper;
