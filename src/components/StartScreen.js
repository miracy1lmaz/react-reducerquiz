import React from 'react'

export default function StartScreen({numQuestions, dispatch}) {
  return (
    <div    className='start'>
        <h2>Welcome React QUIZ</h2>
        <h2>{numQuestions} questions test</h2>
        <button className='btn btn-ui' onClick={() => dispatch({type:"start"})}>let's go </button>

    </div>
  )
}
