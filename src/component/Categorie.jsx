import React from 'react'

function Categorie({Title,Url}) {

  return (
    <div>
        <div className='overflow-hidden'>
            <img className=' transition-transform cursor-pointer object-cover hover:scale-110' src={`${Url}`}/>
        </div>
       <h1 className='text-xl py-4 font-bold'>{Title}</h1> 
    </div>
  )
}

export default Categorie