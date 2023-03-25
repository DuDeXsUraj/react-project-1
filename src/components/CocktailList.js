import React from 'react'
import Cocktail from './Cocktail';

import { useGlobalContext } from '../Context'
import Loading from './Loading'


function CocktailList() {
    const{loading,cocktails} = useGlobalContext();
    if(loading){
        return<Loading/>
    }
    if(cocktails.length<1){
         return ( <h1 className='text-center mt-4'>no cocktails matched your search criteria.</h1>
     )
    }
  return (
    <div className='row col-10 mx-auto '>
      {cocktails.map((item)=>{
        return <Cocktail key={item.id} {...item}/>
      })}
    </div>
  )
}

export default CocktailList

