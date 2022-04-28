import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mountQuestionByIndex } from '@actions/questionSelectActtion';
import { Card } from '../components/card';
import { QuestionView } from './QuestionView';
import { getQuestions } from '@actions/questions.actions';
import { setCurrentQuestionIndex } from '@actions/gameStatus.action';
import Loader from '../components/loader';

export const Game = () => {
  const { questionSelectReducer, userReducer, gameStatusReducer } = useSelector(state => state);
  const { currentQuestionIndex } = gameStatusReducer;

  const dispatch = useDispatch();

  useEffect(() => {
    if ( userReducer.id ) {
      dispatch(getQuestions());
    }
  }, [userReducer]);

  useEffect(() => {
    dispatch( mountQuestionByIndex(currentQuestionIndex) );
  }, [ currentQuestionIndex ]);

  const nextQuestion = () => {
    // TODO: validar que no se desborde el array
    // mandar el resultado de las preguntas
    dispatch(setCurrentQuestionIndex(currentQuestionIndex + 1));
    // if ( questionsReducer.lenght < indexQuestion ) {
    // } else {
    //   alert('No hay mas preguntas');
    // }
  }

  return (
    <Card>
      {questionSelectReducer?.id ? (<QuestionView nextQuestion={nextQuestion} />)
        :
        (<Loader />)
      }
      {/* // ) : (<Loader />)} */}
      {/* {welcomeInit == 0 ? QuestionView : WelcomeView } */}
      {/* {
        currentQuestionIndex==10? (<h1>Ya no hay preguntas</h1>) : ('hola')
      } */}
    </Card>
  )
}
