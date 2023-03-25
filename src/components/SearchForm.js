import React, { useEffect, useRef, useState } from 'react'
import { Form, FormControl,} from 'react-bootstrap';
import { useGlobalContext } from '../Context';

function SearchForm() {
  const{setSearchTerm} =useGlobalContext();
  const searchValue = useRef('')
 
  useEffect(()=>{
   searchValue.current.focus()
  },[])
 const searchCocktail = ()=>{
   setSearchTerm(searchValue.current.value)
 }
  
 const handleSubmit = (e)=>{
  e.preventDefault();
 }

  return (
    <Form className='text-center col-6 container' onSubmit={handleSubmit}>
      <FormControl type="text" id='name' placeholder="Search Cocktail" className="mr-sm-2 container text-center mt-4 border-success" ref={searchValue} onChange={searchCocktail}/>
    </Form>

  )
}

export default SearchForm