import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Container } from "react-bootstrap";

const NavUnlisted = styled.ul`
	display: flex;
	a {
		text-decoration: none;
	}
	li {
		color: red;
		margin: 0 0.8rem;
		font-size: 1.3rem;
		position: relative;
		list-style: none;
	}

	.current {
		li {
			border-bottom: 2px solid black;
		}
	}
`;

const links = [
	{ name: "Home", path: "/" },
	{ name: "About", path: "/about" },
];

function MyNavbar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
			<Container fluid>
				{/* title */}
				<Navbar.Brand>
					<NavLink to="/" className="">
						Title
					</NavLink>
				</Navbar.Brand>

				{/* navbar button */}
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />

				{/* links on collapse */}
				<Navbar.Collapse id="responsive-navbar-nav">
					<NavUnlisted>
						{links.map((link, index) => (
							<NavLink
								key={index}
								to={link.path}
								exact
								activeClassName="current"
							>
								<li>{link.name}</li>
							</NavLink>
						))}
					</NavUnlisted>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default MyNavbar;
