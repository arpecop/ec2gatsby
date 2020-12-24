import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default ({ children }) => {
  const ListLink = props => (
    <li className="nav-link">
      <Link to={props.to}>{props.children}</Link>
    </li>
  )

  const showYear = new Date().getFullYear()

  const FooterMenu = styled.ul`
    padding: 0;
    margin: 0;
    font-family: var(--serif);
    font-weight: 300;

    li {
      display: inline;
      /* padding-right: calc(var(--spacing) / 4); */

      &::after {
        content: "/";
        display: inline-block;
        padding-left: calc(var(--spacing) / 2);
      }

      a {
        font-weight: 300;
        text-decoration: none;
        color: var(--charcoal);
        transition: var(--transMed);
      }

      &:hover {
        a {
          color: var(--primaryColor);
        }
      }

      @media (min-width: 768px) {
        padding-left: calc(var(--spacing) / 2);
      }
    }
  `

  const Footer = styled.footer`
    padding: var(--spacing) calc(var(--spacing) * 2);
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  `

  return (
    <Footer>
      <FooterMenu>
        <li>&copy; {showYear} rudixLab</li>

        <ListLink to="/privacy/">Privacy</ListLink>
        <ListLink to="/cookies/">Cookies</ListLink>
      </FooterMenu>
    </Footer>
  )
}
