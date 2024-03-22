import { styled } from 'styled-components';
import Home_illustration from '../../assets/home-illustration.svg';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 5% 0%;
  margin: 5%;
  background-color: ${colors.backgroundLight};
`
const StyledDiv = styled.div`
  width: 50%;
  margin: 0% 5%;
`

const StyledH1 = styled.h1`
  font-size: 56px ;
`

const StyledLink = styled(Link)`
    padding: 10px 90px;
    color: white;
    text-decoration: none;
    font-size: 22px;
    border-radius: 30px;
    background-color: ${colors.primary};
`

export function sum(a, b) {
  return a + b;
}

function Home() {
  return (
    <StyledMain>
      <StyledDiv>
      <StyledH1>
        {sum(40, 2)}
      </StyledH1>
      <StyledH1>
        Repérez vos besoins,
        on s'occupe du reste,
        avec les meilleurs 
        talents
      </StyledH1>
      <StyledLink to='survey/1' >Faire le test</StyledLink>
      </StyledDiv>
      <img src={Home_illustration} alt='Home-illustration' style={{width: '50%', margin: '0% 5%'}}/>
    </StyledMain>
  )
}

export default Home;
