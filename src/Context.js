import { createContext, useCallback, useContext, useEffect, useState } from "react";

 const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

 
 const AppContext = createContext();

 export const AppProvider = ({children})=>{

    const[loading,setLoading] = useState(true)
    const[searchTerm,setSearchTerm] = useState('a')
    const[cocktails,setCocktails] = useState([])

  const fetchDrinks= useCallback(async()=>{
   setLoading(true)
      try {
         const response = await fetch(`${url}${searchTerm}`);
         const data = await response.json();
         const{drinks} = data;
         if(drinks){
            setLoading(true)
            const newCocktails = drinks.map((item)=>{
               const {idDrink,strDrink,strAlcoholic,strGlass,strDrinkThumb} = item;
               return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic,glass:strGlass}
            })
            setCocktails(newCocktails)
         }
         
         else{
            setCocktails([])
         }
         setLoading(false)

      } catch (error) {
         console.log(error)
         setLoading(false)
      }
    })

    useEffect(()=>{
      fetchDrinks();
    },[searchTerm])

    return <AppContext.Provider value={{loading,searchTerm,cocktails,setSearchTerm ,setLoading}}>{children}</AppContext.Provider>
 }

 export const useGlobalContext = ()=>{
    return useContext(AppContext)
 }
