import { Button, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Grid2
      container
      mt={5}
      rowSpacing={3}
      className="flex flex-col max-w-lg mx-auto"
    >
      <Typography variant="h3" color="initial" textAlign={"center"} mb={5} >
        Register
      </Typography>
      <form>
        <Grid2>
          <TextField
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            fullWidth
          />
        </Grid2>

        <Grid2>
          <TextField
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            fullWidth
          />
        </Grid2>

        <Grid2>
          <TextField
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            fullWidth
          />
        </Grid2>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="text-white bg-green-700 hover:bg-green-800 mt-16 p-2 text-2xl rounded-xl"
        >
          Register
        </Button>
      </form>
      <Link to={'/login'} className="mt-5 flex gap-1" >
        <Typography variant="body1" color="initial">Already have an account?</Typography>
        <Typography variant="body1" color="blue">Login</Typography>
      </Link>
    </Grid2>
  );
};

export default Signup;
