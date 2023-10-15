import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import Typography from "@mui/material/Typography";
import SearchInput from "./SearchInput";
import HeaderList from "./HeaderList";

const Header = () => {
  const styleClass = {
    flex: "flex justify-content-between items-center",
    header: "flex flex-wrap gap-2 p-3",
    header1: "text-slate-500 font-bold text-3xl sm:text-3xl",
    header2: "text-slate-700 font-bold text-3xl sm:text-3xl",
  };

  return (
    <header className="bg-slate-200 shadow-md">
      <Grid2 container className={styleClass.flex}>
        <Grid2 xs={12} sm={4} md={4.5} className={styleClass.header}>
          <Typography variant="h2" className={styleClass.header1}>
            DevSS
          </Typography>
          <Typography variant="h2" className={styleClass.header2}>
            Estate
          </Typography>
          <Grid2 className="sm:hidden mx-auto">
            <SearchInput />
          </Grid2>
        </Grid2>
        <Grid2 xs={12} sm={3} md={4.5} className="p-3 hidden sm:block">
          <SearchInput />
        </Grid2>
        <Grid2 xs={12} sm={5} md={3} className="p-3">
          <HeaderList />
        </Grid2>
      </Grid2>
    </header>
  );
};

export default Header;
