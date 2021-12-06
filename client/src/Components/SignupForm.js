import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

function SignupForm({ newUserSubmitHandler, newUserChangeHanldler, newUser}) {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <>
        
        <Grid id="signup-container">
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                    <form onSubmit={newUserSubmitHandler} >
                    <TextField fullWidth label='Name' name='name' value={newUser.name} onChange={newUserChangeHanldler}   placeholder="Enter your name" />
                        <TextField fullWidth label='Email' name='email' value={newUser.email} onChange={newUserChangeHanldler}  placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                <FormControlLabel  value="true" onChange={newUserChangeHanldler} name="photographer" control={<Radio />} label="Photographer" />
                                <FormControlLabel value="false" onChange={newUserChangeHanldler} name="photographer" control={<Radio />} label="Car Owner" />
                        </RadioGroup>
                    </FormControl>
                    {/* <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" /> */}
                        <TextField fullWidth label='Password' name='password' value={newUser.password} onChange={newUserChangeHanldler}  placeholder="Enter your password"/>
                    {/* <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/> */}
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button id="signup-btn" type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
        
        </>
    )
}

export default SignupForm