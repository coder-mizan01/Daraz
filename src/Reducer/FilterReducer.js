

const FilterReducer = (state,action) => {

    let products = action.payload

   if(action.type === 'highest'){

   let highestPriceProducts = products.sort((a,b)=>b.price - a.price)
    return {
        ...state,
        highest : highestPriceProducts
       }

   }

   if(action.type === 'lowest'){
      let lowestPriceProducts = products.sort((a,b)=> a.price - b.price)

      return {
        ...state,
        lowest:lowestPriceProducts
      }
   }


  return state
 
}

export default FilterReducer