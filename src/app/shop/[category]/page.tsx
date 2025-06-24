import React from 'react'

export default function Category({params}: {params: {category: string}}) {
  const { category } = params;
  return (
    <div> 
      
      <h1>This is Category page</h1>

      <ul>
        <li>Catagory Name: {category}</li>
        
        
      </ul>




    </div>
  )
}
