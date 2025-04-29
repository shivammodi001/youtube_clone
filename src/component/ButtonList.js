import React from 'react'
import Button from './Button';

const list = ["All" , "Gaming" , "Live", "News" , "Cricket" , "Cooking" , "Music" , "Cartoons" , "Movies" , "BiggBoss"];

const ButtonList = () => {
  return (
    <div className='flex '>
      {
        list.map((value,index)=>{
          return <Button key={index} name={value} />
        })
      }
      
    </div>
  )
}

export default ButtonList;