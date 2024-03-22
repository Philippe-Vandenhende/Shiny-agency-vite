import PropTypes from "prop-types";
import DefaultPicture from "../../assets/profile.png";
import styled from 'styled-components';
import { useTheme } from '../../utils/hooks';
import colors from "../../utils/style/colors";
import { useState } from "react";

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    background-color: ${colors.backgroundLight};
    border-radius: 30px;
    width: 300px;
    height: 300px;
    margin: 10px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
`

const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardLabel = styled.span`
    color: #5843e4;
    font-size: 22px;
    font-weight:bold;
`;

const CardImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 50%;
`

export function Card({ label, title, picture }) {
    const { theme } = useTheme()
    const [isFavorite, setIsFavorite] = useState(false)
    const star = isFavorite ? '⭐️' : ''
  
    return (
      <CardWrapper theme={theme} onClick={() => setIsFavorite(!isFavorite)}>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme}>
          {star} {title} {star}
        </CardTitle>
      </CardWrapper>
    )
  }

Card.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
    label: '',
    title: '',
    picture: DefaultPicture,

}

export default Card;