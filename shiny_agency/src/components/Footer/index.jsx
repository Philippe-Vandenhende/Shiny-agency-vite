import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useTheme } from '../../utils/hooks';

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: rows;
    align-items: center;
    justify-content: center;
    padding-top: 60px;
`

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`

function Footer() {
    const { toggleTheme, theme } = useTheme();

    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}>
                Changer de mode : {theme === 'light' ? 'Jour' : 'Nuit'}
            </NightModeButton>
        </FooterContainer>
    )
}

export default Footer