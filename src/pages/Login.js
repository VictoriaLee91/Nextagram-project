import React from 'react';
import { Form, FormGroup, Label, Input, Button, ModalFooter } from 'reactstrap';
import axios from 'axios';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.toggle()
        axios.post("https://insta.nextacademy.com/api/v1/login",
            {
                email: this.state.email,
                password: this.state.password,
            }
        )
            .then(response => {
                console.log(response)
                localStorage.setItem('jwt', response.data.auth_token)
                localStorage.setItem('myUsername', response.data.user.username)
                localStorage.setItem('myProfileImage', response.data.user.profile_picture)
                sessionStorage.getItem('clickCount')
                this.props.setUser()
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    };

    handleInput = event => {
        this.setState({ email: event.target.value })
    }
    render() {
        const { email, password } = this.state;
        const isEnabled = email.length > 0 && password.length > 0;
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
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
                    <ModalFooter>
                        <Button disabled={!isEnabled} color="primary" value="submit" onClick={this.toggle}>Log In</Button>{' '}

                    </ModalFooter>
                </Form>

            </div>
        );
    }
}
export default Login
