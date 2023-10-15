import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Search, Close } from "@mui/icons-material";

const SearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleReset = () => {
    setSearchText("");
  };

  return (
    <div className="searchForm w-24 sm:w-3/4 bg-slate-100">
      <TextField
        type="text"
        fullWidth={true}
        id="searchInput"
        placeholder="Search..."
        variant="standard"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: <Search color="primary" />,
          endAdornment:
            isFocused && searchText ? (
              <Close
                color="danger"
                style={{ cursor: "pointer" }}
                onClick={handleReset}
              />
            ) : null,
        }}
        className="bg-transparent p-1"
        onFocus={handleFocus}
      />
    </div>
  );
};

export default SearchInput;
