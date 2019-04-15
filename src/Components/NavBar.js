import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import ModalForm from '../pages/Modal';

export default class NavBarLink extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleLogOut = event => {
        event.preventDefault()
        localStorage.removeItem('jwt')
        this.props.setUser()
    }

    render() {
        return (

            <Navbar color="light" light expand="md" sticky='top'>
                <NavbarBrand href="/">Nextagram</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to={`/profile`}><NavLink>My Profile</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <ModalForm currentUser={this.props.currentUser} setUser={this.props.setUser}><button /></ModalForm>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Upload Photos
                                </DropdownItem>
                                <DropdownItem>
                                    Notifications
                                    </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.handleLogOut}>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar >

        );
    }
}


