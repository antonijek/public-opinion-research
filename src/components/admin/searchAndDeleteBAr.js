import { React, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";

const SearchAndDeleteBAr = ({ rows, setRows, setData, selectedRows }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    let filteredItems = rows.filter((row) =>
      row.title.toUpperCase().includes(value.toUpperCase())
    );
    setData(filteredItems);
  };

  const deleteSelectedItems = () => {
    let filtered = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(filtered);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#c5d6dd",
        height: "8vh",
        mx: { xs: 1, md: 3 },
        my: 0,
        borderRadius: "5px",
      }}
    >
      <Box sx={{ ml: 2 }}>
        <TextField
          onChange={handleChange}
          label="Search by title"
          size="small"
          variant="outlined"
          margin="dense"
          InputProps={{
            endAdornment: <SearchIcon />,

            style: { backgroundColor: "white" },
          }}
        ></TextField>
      </Box>

      <Box>
        <Button onClick={deleteSelectedItems}>
          <DeleteIcon
            sx={{
              color: "#307ecf",
              ":hover": {
                color: "#d1e7dd",
              },
            }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default SearchAndDeleteBAr;
