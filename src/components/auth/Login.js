import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
        };
    }

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
}

handleSubmit = (event) => {
    fetch("http://localhost:3000/user/login", {
        method:'POST',
        body: JSON.stringify({user:this.state}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        (response) => response.json()
    ).then((data) => {
        this.props.setToken(data.sessionToken)
    })
    event.preventDefault()
}
    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>Login to see more of the sickest movies and shows!</h6>
                <Form onSubmit={this.handleSubmit} > 
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="li_password" type="password" name="password" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                </Form>
            </div>
        )
    }
}
export default Login;

//this form will be handling our username and password fields
//id props start with "li". This is our choice for 'log in'. It doesnt mean 'list item'