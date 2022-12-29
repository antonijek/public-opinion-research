import { React, useState, useContext } from "react";
import NewQuestionnaire from "./newQuestionnaire";
import "../styles/admin.css";
import { DataGrid } from "@mui/x-data-grid";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import Questionnaire from "./questionnaire";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Typography,
} from "@mui/material";

import ScienceIcon from "@mui/icons-material/Science";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";
import { QuestionnaireContext } from "../components/questionnaireContext";

const Admin = () => {
  const { rows } = useContext(QuestionnaireContext);
  const [newForm, setNewForm] = useState(false);

  const renderEditIcon = () => {
    return <EditSharpIcon />;
  };
  const renderDeleteIcon = () => {
    return <DeleteIcon />;
  };

  const columns = [
    { field: "id", headerName: "Id", width: 80 },
    { field: "title", headerName: "Title", width: 120 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "method", headerName: "Method", width: 100 },
    {
      field: "edit",
      headerName: "Edit",
      width: 80,
      renderCell: renderEditIcon,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 80,
      renderCell: renderDeleteIcon,
    },
  ];

  return (
    <Box className="admin-page">
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          maxWidth: { sm: "35%", md: "20%", minWidth: "15vw" },
          bgcolor: "#1976d2",
          color: "white",
          display: { xs: "none", sm: "block" },
        }}
      >
        <nav aria-label="main mailbox folders">
          <Divider sx={{ bgcolor: "white" }} />
          <List sx={{ mb: 4 }}>
            <Avatar
              sx={{
                mx: "auto",
                mt: "5%",
                width: { xs: "10vw", sm: "4vw" },
                height: { xs: "10vw", sm: "4vw" },
              }}
              src="/broken-image.jpg"
            />
            <Typography sx={{ textAlign: "center", mb: 4, mt: 2 }}>
              Admin
            </Typography>
            <Divider sx={{ bgcolor: "white" }} />

            <ListItem disablePadding sx={{ mb: "5%", mt: "5%" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ScienceIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Research" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ mb: "10%" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ShowChartSharpIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Statistics" />
              </ListItemButton>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ mt: "-5%" }}
              onClick={() => setNewForm(true)}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DynamicFormIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Make new research" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      {newForm ? (
        <Box className="wraper">
          <NewQuestionnaire />
          <Questionnaire width="40vw" />
        </Box>
      ) : (
        <Box sx={{ color: "white", height: "50vh", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            autoPageSize
            autoHeight
          />
        </Box>
      )}
    </Box>
  );
};

export default Admin;
