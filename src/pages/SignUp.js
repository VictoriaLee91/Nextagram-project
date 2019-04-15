import React from 'react';
import { Form, FormGroup, Label, Input, Button, ModalFooter } from 'reactstrap';
import axios from 'axios';

export default class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            verifyPassword: "",
        };
    }
    handleUsernameChange = event => {
        this.setState({ username: event.target.value });
    };
    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };
    handleVerifyPasswordChange = event => {
        this.setState({ verifyPassword: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { username, email, password, verifyPassword } = this.state;
        if (password !== verifyPassword) {
            alert("Passwords do not match!");
        } else {
            alert(`A name was submitted with username:${username} email:${email} password: ${password} verify password: ${verifyPassword}`);
        }

        this.props.toggle()

        axios.post("https://insta.nextacademy.com/api/v1/users/",
            {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
            }
        )
            .then(response => {
                console.log(response)
                localStorage.setItem('jwt', response.data.auth_token)
                sessionStorage.getItem('clickCount')
                this.props.setUser()
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    };

    canBeSubmitted() {
        const { username, email, password, verifyPassword } = this.state;
        return username.length > 0 && email.length > 0 && password.length > 0 && verifyPassword === password;
    }

    render() {
        const isEnabled = this.canBeSubmitted();
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="exampleUsername">Username</Label>
                    <Input
                        type="text" name="username" id="exampleUsername" placeholder="minimum 6 characters"
                        value={this.state.username}
                        onChange={this.handleUsernameChange}

                    />

                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email" name="email" id="exampleEmail" placeholder="name@example.com"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password" name="password" id="examplePassword" placeholder="Password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleVerifyPassword">Confirm password</Label>
                    <Input
                        type="password" name="verifyPassword" id="exampleVerifyPassword" placeholder="Confirm password"
                        value={this.state.verifyPassword}
                        onChange={this.handleVerifyPasswordChange}
                    />
                </FormGroup>
                <ModalFooter>
                    <Button disabled={!isEnabled} color="primary" value="submit" onClick={this.toggle}>Sign Up</Button>{' '}
                </ModalFooter>
            </Form>
        );
    }
}
