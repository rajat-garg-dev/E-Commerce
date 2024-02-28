import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white mt-10 text-center"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
