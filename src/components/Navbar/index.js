import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCode } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/Constants";
import { useTheme } from "styled-components";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
              textDecoration: "none",
            }}>
            <DiCode size="3rem" /> <Span>giaxup.dev</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Su di me</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Esperienze</NavLink>
          <NavLink href="#projects">Progetti</NavLink>
          <NavLink href="#contacts">Contattami</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Profilo Github
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              Projects
            </MobileLink>
            <MobileLink
              href="#contacts"
              onClick={() => {
                setIsOpen(!isOpen);
              }}>
              Contact Me
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank">
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
