import React from 'react'

function Display({calculDisplay}) {
  return (
   <div className='row'>
     <div className='col-12 m-auto'>
        <input type="text" className='mt-3 mb-3 w-100' value={calculDisplay} readOnly />
    </div>
   </div>
  )
}

export default Display