import { React, useContext } from "react";
import { QuestionnaireContext } from "../common/questionnaireContext";
import { Link, useNavigate } from "react-router-dom";
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
import HideAdminPanel from "./hideAdminPanel";

const AdminPanel = ({ token1, isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const { rows, setCurrentResearch, setOption } =
    useContext(QuestionnaireContext);

  const makeNewResearch = () => {
    setCurrentResearch(rows[rows.length - 1]);
    navigate("/admin/research");
    setOption(3);
  };

  return (
    <Box
      sx={{
        position: { xs: "absolute", md: "relative" },
        zIndex: 1,
        width: { xs: "35vw", sm: "25vw", md: "20vw", lg: "15vw" },
        bgcolor: "#519cae",
        height: { xs: "100%", sm: "80vh" },
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
            {token1}
          </Typography>
          <Divider sx={{ bgcolor: "white", mb: "6vw" }} />
          <Link to={`/admin/research`} style={{ textDecoration: "none" }}>
            <ListItem
              disablePadding
              sx={{ mb: "5%", mt: "5%" }}
              onClick={() => setOption(1)}
            >
              <ListItemButton>
                <ListItemIcon sx={{ color: "white", minWidth: "3vw" }}>
                  <ScienceIcon />
                </ListItemIcon>
                <ListItemText primary="Research" sx={{ color: "white" }} />
              </ListItemButton>
            </ListItem>
          </Link>

          <ListItem
            disablePadding
            sx={{ mb: "5%", mt: "5%" }}
            onClick={() => setOption(2)}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "white", minWidth: "3vw" }}>
                <StyleIcon />
              </ListItemIcon>
              <ListItemText primary="Statistics" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>

          <ListItem
            disablePadding
            sx={{ mt: "-5%", mt: "5%" }}
            onClick={makeNewResearch}
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "white", minWidth: "3vw" }}>
                <DynamicFormIcon />
              </ListItemIcon>
              <ListItemText primary="New research" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default AdminPanel;
