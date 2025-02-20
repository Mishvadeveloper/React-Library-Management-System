import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const LoginPage = () => {
  const [userName, setUserName] = useState("");

  const handleUsernameInput = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9.]*$/;
    if (regex.test(value)) {
      setUserName(value);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#F8E7F6",
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
        height: "100vh",
        paddingRight: 5,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F2E5F7",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: 350,
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          Login
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" align="left">
            User Name
          </Typography>
          <TextField
            fullWidth
            required
            type="text"
            variant="outlined"
            sx={{ mt: 1 }}
            autoComplete="off"
            inputProps={{ maxlength: 20 }}
            value={userName}
            onInput={handleUsernameInput}
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" align="left">
            Password
          </Typography>
          <TextField
            fullWidth
            required
            type="password"
            variant="outlined"
            inputProps={{ maxlength: 25 }}
            sx={{ mt: 1 }}
          />
        </Box>

        <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
