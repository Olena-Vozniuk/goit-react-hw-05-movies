import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLayout = styled.div`
ul {
  margin-left: 0;
  padding-left: 0;
};
li {list-style: none; };
a { text-decoration: none};
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #212121;
  background-color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const StyledNavLink = styled(NavLink)`
margin-right: 10px;
font-size: 32px;
font-weight: 500;
color: black;
&.active {
    color: orangered;
  }
`;

export const StyledNav = styled.nav`
background-color: whitesmoke;
padding: 20px;
box-shadow: 1px 2px 7px 3px rgba(0,0,0,0.4);
`;

