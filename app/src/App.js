
import './App.css';
import {Grid, Typography, TextField, Button} from "@mui/material";
import {useState} from "react";

function App() {

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        sendData();
    }
    const sendData = async () => {
        fetch('http://localhost/React%20+%20PHP/backend/',{
            method: "POST",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password })
        })
            .then(res => res.json())
            .then(data => data.map(obj => ( console.log(obj) )))
            .catch(error => error.message)
    }

    return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e)}>
          <Grid container spacing={5} padding={12}>
              <Grid item lg={12}>
                  <Typography variant={"h5"} color={"secondary"}>
                      Form
                  </Typography>
              </Grid>
              <Grid item lg={12}>
                  <TextField label={"First Name"} fullWidth value={firstName} color={"secondary"} type={"text"} onChange={ (e) => setFirstName(e.target.value) } />
              </Grid>
              <Grid item lg={12}>
                  <TextField label={"Last Name"} fullWidth value={lastName} color={"secondary"} type={"text"} onChange={ (e) => setLastName(e.target.value) } />
              </Grid>
              <Grid item lg={12}>
                  <TextField label={"Email"} fullWidth value={email} color={"secondary"} type={"email"} onChange={ (e) => setEmail(e.target.value) } />
              </Grid>
              <Grid item lg={12}>
                  <TextField label={"Password"} fullWidth value={password} color={"secondary"} type={"password"} onChange={ (e) => setPassword(e.target.value) } />
              </Grid>
              <Grid item>
                  <Button  type={"submit"} variant={"contained"} color={"secondary"}>Submit</Button>
              </Grid>
          </Grid>

      </form>
    </div>
  );
}

export default App;
