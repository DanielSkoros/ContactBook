import React from "react";
import { faSearch, faPlus, faTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormInput,
    Collapse
} from "shards-react";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            collapseOpen: false
        };
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
            }
        });
    }

    render() {
        return (
            <Navbar type="dark" theme="primary" expand="md">
                <NavbarBrand href="/">ContactBook</NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} />
                <Collapse open={this.state.collapseOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink active href="#">
                                <FontAwesomeIcon icon={faPlus} />
                                Add contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active href="#">
                                <FontAwesomeIcon icon={faTag} />
                                Add tags
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar className="ml-auto">
                        <InputGroup size="sm" seamless>
                            <InputGroupAddon type="prepend">
                                <InputGroupText>
                                    <FontAwesomeIcon icon={faSearch} />
                                </InputGroupText>
                            </InputGroupAddon>
                            <FormInput className="border-0" placeholder="Search..." />
                        </InputGroup>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}
