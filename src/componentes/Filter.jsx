import React from 'react'


const Filter = ({handleFilter,name}) =>{

    return(
       <>
         <h2>{name}</h2>
         <div>
            Filter: <input onChange={handleFilter}/>
         </div>
       </>
    )
}


export default Filter;