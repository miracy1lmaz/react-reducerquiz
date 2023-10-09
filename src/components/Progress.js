import React from 'react'

export default function Progress({index, numQuestions,points}) {
  return (
    <header className='progress'>
     <p> <p> Question - </p> <strong> {index} /  {numQuestions}  </strong> </p>   
     <p><strong> Point : {points}</strong>  / 150 </p>
    </header>
  )
}
