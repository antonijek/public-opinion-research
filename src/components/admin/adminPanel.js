import { React, useContext } from "react";
import { QuestionnaireContext } from "../common/questionnaireContext";
import { Link } from "react-router-dom";
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
import StyleIcon from "@mui/icons-material/Style";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ScienceIcon from "@mui/icons-material/Science";
import ShowChartSharpIcon from "@mui/icons-material/ShowChartSharp";

const AdminPanel = ({ rows, setCurrentResearch, setIsOpen }) => {
  const makeNewResearch = () => {
    setCurrentResearch(rows[rows.length - 1]);
  };

  return (
    <Box
      sx={{
        width: "20vw",
        bgcolor: "#519cae",
        display: { xs: "none", sm: "block" },
        minHeight: "80vh",
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
              color: "rgb(86, 88, 86);",
            }}
            src="/broken-image.jpg"
          />
          <Typography
            sx={{ textAlign: "center", mb: 4, mt: 2, color: "white" }}
          >
            Admin
          </Typography>
          <Divider sx={{ bgcolor: "white", mb: "6vw" }} />

          <ListItem
            disablePadding
            sx={{ mb: "5%", mt: "5%" }}
            onClick={() => setIsOpen(true)}
          >
            <ListItemButton>
              <ListItemIcon>
                <ScienceIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Research" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ mb: "5%" }}
            onClick={() => setIsOpen(false)}
          >
            <ListItemButton>
              <ListItemIcon>
                <StyleIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Statistics" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <Link
            to={`/questionnaire/${rows.length - 1}`}
            style={{ textDecoration: "none" }}
          >
            <ListItem
              disablePadding
              sx={{ mt: "-5%" }}
              onClick={makeNewResearch}
            >
              <ListItemButton>
                <ListItemIcon>
                  <DynamicFormIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Make new research"
                  sx={{ color: "white" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </nav>
    </Box>
  );
};

export default AdminPanel;
