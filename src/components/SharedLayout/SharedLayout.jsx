import { Outlet } from "react-router-dom";
import { Suspense} from "react";
import { StyledLayout, StyledNavLink, StyledNav } from "./SharedLayout.styled";

const SharedLayout = () => {
    return (<StyledLayout>
    <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
        </StyledNav>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
           </Suspense>
        </StyledLayout>)
}

export default SharedLayout;