import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouteLink } from "@reach/router";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function chooseRandomImage(images) {
  const keys = Object.keys(images);
  const randIndex = Math.floor(Math.random() * keys.length);
  const randKey = keys[randIndex];
  const imageUrl = images[randKey];
  return imageUrl;
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  row: {
    display: "flex",
    column: {
      maxWidth: "33%"
    },
    innerImage: {
      width: "25vw",
      borderRadius: ".5vw",
      padding: 1
    }
  }
}));

export default function SignInPage({ setSignInForm, signInForm, signIn }) {
  const classes = useStyles();
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }
    const images = importAll(
      require.context("../assets", false, /\.(png|jpe?g|svg)$/)
    );
    let imgArr = [];
    for (let i = 0; i < 30; i++) {
      imgArr.push(chooseRandomImage(images));
    }
    setRandomImages(imgArr);
  }, []);
  console.log(randomImages);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7}>
        <div className={classes.row} style={{ maxWidth: "100vw" }}>
          {" "}
          {Array.from(Array(3).keys()).map((el1, i) => {
            return (
              <div className={classes.column}>
                {Array.from(Array(10).keys()).map((el2, j) => {
                  return (
                    <img
                      className={classes.innerImage}
                      src={randomImages[10 * i + j]}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </Grid>

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <TextField
            onChange={e =>
              setSignInForm({
                ...signInForm,
                username: e.target.value
              })
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="user name"
            autoComplete="username"
            autoFocus
          />
          <TextField
            onChange={e =>
              setSignInForm({
                ...signInForm,
                password: e.target.value
              })
            }
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            onClick={signIn}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                <RouteLink to="/signup">
                  {" "}
                  {"Don't have an account? Sign Up"}
                </RouteLink>
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}

// const SignInPage = ({ signIn, setSignInForm, signInForm }) => {
//   return (
//     <div>
//       <input
//         onChange={e =>
//           setSignInForm({ ...signInForm, username: e.target.value })
//         }
//       />
//       <input
//         type="password"
//         onChange={e =>
//           setSignInForm({ ...signInForm, password: e.target.value })
//         }
//       />
//       <button onClick={signIn}>Sign In</button>
//     </div>
//   );
// };
// export default SignInPage;
