import { Grid, Typography, Button, Link } from "@mui/material";
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
          <div>
            <Button className="pb-5" variant="h6">
              ABOUT
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              BLOGS{" "}
            </Button>
          </div>{" "}
          <div>
            <Button className="pb-5" variant="h6">
              JOBS
            </Button>
          </div>{" "}
          <div>
            <Button className="pb-5" variant="h6">
              PRESS
            </Button>
          </div>{" "}
          <div>
            <Button className="pb-5" variant="h6">
              PARTENERS
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              MARKETING{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              ANALYTICS{" "}
            </Button>
          </div>{" "}
          <div>
            <Button className="pb-5" variant="h6">
              COMMERCE{" "}
            </Button>
          </div>{" "}
          <div>
            <Button className="pb-5" variant="h6">
              INSIGHT{" "}
            </Button>
          </div>{" "}
          <div>
            <Button className="pb-5" variant="h6">
              SUPPORT
            </Button>
          </div>
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation{" "}
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              GUIDE
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              API STATUS{" "}
            </Button>
          </div>{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              CLAIM{" "}
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6">
              PRIVACY{" "}
            </Button>
          </div>{" "}
          <div>
            <Button className="pb-5" variant="h6">
              TERMS{" "}
            </Button>
          </div>{" "}
        </Grid>
        <Grid className="pt-20" item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024 My Compamy All right reserved.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            Made with Love by me.
          </Typography>
          <Typography variant="body2" component="p" align="center">
            LINKED IN
            <Link href="https://www.linkedin.com/in/rajat-garg-5809071a7/">
              {" "}
              Visit my profile
            </Link>{" "}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
