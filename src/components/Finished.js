import React from 'react'

    const handleClick = () => {
      window.location.href = 'about:blank'
    }
  

export default function Finished() {
  return (<div >
    <button className='btn btn-ui   '   onClick={handleClick}>     Exit   </button>
  
   
    </div>

  )
}
