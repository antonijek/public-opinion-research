import { React, useState, useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { QuestionnaireContext } from "../common/questionnaireContext";
import { deleteData } from "../../api/index";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminPanel from "./adminPanel";
import { getData } from "../../api";
import Statistics from "./statistics";

let token = localStorage.getItem("token");

const Admin = () => {
  const [rows, setRows] = useState([]);
  const [currentResearch, setCurrentResearch] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const getAllQuestionnaires = async () => {
    try {
      let res = await getData(token);
      setRows(res.data);
      setCurrentResearch(res.data[res.data.length - 1]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllQuestionnaires();
  }, []);

  console.log(currentResearch);
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
          <Link to={`/cards`}>
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
          <Link to={`/questionnaire/${cellValues.id}`}>
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
    }
    if (e.field === "delete") {
      let res = await deleteData(e.id, token);
      let copy = [...rows];
      let filteredRows = copy.filter((item) => item.id !== e.id);
      setRows(filteredRows);
    }
    if (e.field === "statistics") {
      setCurrentResearch(e.row);
      console.log(e.row);
    }
  };

  return (
    <Box className="admin-page">
      <AdminPanel
        rows={rows}
        setCurrentResearch={setCurrentResearch}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen ? (
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
      ) : (
        <Statistics currentResearch={currentResearch} />
      )}
    </Box>
  );
};

export default Admin;
