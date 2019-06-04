import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Login from './Login';
import SignUp from './SignUp';

class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            isSignup: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    toggleSignup = () => {
        this.setState({
            isSignup: !this.state.isSignup
        })
    }

    render() {
        const { isSignup } = this.state;

        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}{this.props.currentUser ? 'Logged in' : 'Log in'}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{isSignup ? 'Sign Up' : 'Log In'}</ModalHeader>
                    <ModalBody>
                        {this.state.isSignup
                            ? <SignUp setUser={this.props.setUser} toggle={this.toggle} />
                            : <Login setUser={this.props.setUser} toggle={this.toggle} />
                        }
                    </ModalBody>
                    <ModalFooter>
                        <p style={styles.Paragraph}>{isSignup ? 'Already a member?' : 'Not a member yet?'} </p>
                        <p><Button color='info' onClick={this.toggleSignup}>{this.props.buttonLabel}{isSignup ? 'Log In' : 'Sign up'}</Button></p>
                        <p><Button color="secondary" onClick={this.toggle}>Cancel</Button></p>
                    </ModalFooter>
                </Modal>
            </div >
        );
    }
}

const styles = {
    Paragraph: {
        paddingLeft: '15px'
    },
}

export default ModalForm;