import React, { useState } from "react"
import styled from "styled-components"
import { Link as ReactRouterDomLink, useLocation } from "react-router-dom"
import { Toggle } from "components/common"

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
  border-bottom: ${p => p.theme.secondaryColor} 3px solid;
`

const Menu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  font-family: "Open Sans";
  width: 100%;
  top: 60px;
  padding: 8px;
  box-sizing: border-box;
  background: white;
  border-bottom: ${p => p.theme.secondaryColor} 3px solid;

  @media (min-width: 768px) {
    display: flex;
    background: none;
    left: initial;
    top: initial;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
  }
`

// const MenuAlt = styled(Menu)`
//   border-top: 5px solid black;
// `

const Link = ({ isActive, children, ...props }) => (
  <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>
)

const StyledLink = styled(Link)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
  color: black;
`

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;

  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`

const Header = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <HeaderWrapper>
      <MobileMenuIcon
        onClick={() => setMenuOpen((menuOpenValue) => !menuOpenValue)}
      >
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <StyledLink to="/" isActive={pathname === "/"}>
          Home
        </StyledLink>
        <StyledLink to="/login" isActive={pathname === "/login"}>
          Login
        </StyledLink>
        <Toggle isActive/>
      </Menu>
    </HeaderWrapper>
  )
}

export default Header
