import React from 'react'

export default function ProductDetails({params}:{params:{category:string,id:string}}) {
  const { category,id} =  params;
  return (
    <div>
      <h1>Product Details Page:</h1>
      <p>Product Category:<span className='capitalize'>{category}</span></p>
      <p><span className='capitalize'>{category} Items-</span>{id}</p>



    </div>
  )
}
