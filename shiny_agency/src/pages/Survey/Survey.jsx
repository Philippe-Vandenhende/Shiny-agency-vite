import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useFetch } from '../../utils/hooks';
import colors from '../../utils/style/colors';
import { Loader } from '../../utils/style/Atoms';
import styled from 'styled-components';
import { SurveyContext } from '../../utils/context/contexts';

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
    &:first-child {
      margin-right: 15px;
    }
    &:last-of-type {
      margin-left: 15px;
    }
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`


function Survey() {
    const { questionNumber } = useParams();
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1;
    const nextQuestionNumber = questionNumberInt + 1;
    const { answers, saveAnswers } = useContext(SurveyContext);
    const { data, isLoading, error } = useFetch('http://localhost:8000/survey');
    const { surveyData } = data;
    console.log(surveyData);

    function saveReply(answer) {
      saveAnswers({[questionNumber]: answer })
    }


    if(error) {
      return <span>Oups il y a eu un problème</span>
    }

    return (
        <SurveyContainer>   
            <QuestionTitle>Question {questionNumber}</QuestionTitle>
            {isLoading ? (
              <Loader />
            ) : (
              <QuestionContainer>
                <QuestionContent>{surveyData[questionNumber]}  </QuestionContent>                
                <ReplyWrapper>
                  <ReplyBox
                    onClick={() => saveReply(true)}
                    isSelected= {answers[questionNumber] === true}
                  >
                    Oui
                  </ReplyBox>
                  <ReplyBox
                    onClick={() => saveReply(false)}
                    isSelected= {answers[questionNumber] === false}
                  >
                    Non
                  </ReplyBox>
                </ReplyWrapper>
                <LinkWrapper>
                  <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
                  {surveyData[questionNumberInt + 1] ? (
                    <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
                  ) : (
                    <Link to="/results">Résultats</Link>
                    )}
                </LinkWrapper>
              </QuestionContainer> 
                )}  
        </SurveyContainer>
    )}

export default Survey;