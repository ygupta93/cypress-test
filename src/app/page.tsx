"use client";

import { Box, Button, TextField } from "@mui/material";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      minHeight="screen"
      p={24}
      gap={2}
    >
      <TextField
        inputProps={{
          "data-test": "cypress-login-email",
        }}
        label="Email"
      />
      <Button
        onClick={() => {}}
        size="large"
        variant="contained"
        data-test="cypress-login-button"
      >
        Login
      </Button>
    </Box>
  );
}
