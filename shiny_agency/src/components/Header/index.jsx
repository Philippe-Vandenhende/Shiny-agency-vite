import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Logo from '../../assets/dark-logo.png';

const StyledLink = styled(Link)`
    padding: 8px 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    ${(props) =>  
        props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary}; margin-left: 15px; padding: 8px 30px`}
`

const StyledNav = styled.nav`
    display: flex;
    justify-content: right;
    align-items: center;
`
const StyledHeader = styled.header`
    padding: 0% 5%;
    display:flex;
    justify-content: space-between;
`

function Header() {
    
    return (
        <StyledHeader>
            <img src={Logo} alt="Logo de Shiny-Agency" />
            <StyledNav>
                <StyledLink to="/">Acceuil</StyledLink>
                <StyledLink to="Freelances">Profils</StyledLink>      
                <StyledLink to="survey/1" $isFullLink>Faire le test</StyledLink>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;