import { React, useState, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { QuestionnaireContext } from "./questionnaireContext";
import { deleteData } from "../api/index";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AdminPanel from "./adminPanel";

const Admin = () => {
  const { rows, setRows, currentResearch, setCurrentResearch, token } =
    useContext(QuestionnaireContext);

  const [num, setNum] = useState(1);

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
      setNum(e.id);
    }
    if (e.field === "delete") {
      let res = await deleteData(e.id, token);
      let copy = [...rows];
      let filteredRows = copy.filter((item) => item.id !== e.id);
      setRows(filteredRows);
    }
  };

  return (
    <Box className="admin-page">
      <AdminPanel />

      <Box
        sx={{
          color: "#666666",
          height: "50vh",
          width: "100%",
        }}
      >
        <h2>All ankets:</h2>
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
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          autoPageSize
          autoHeight
        />
      </Box>
    </Box>
  );
};

export default Admin;
