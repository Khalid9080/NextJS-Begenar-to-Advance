import { notFound } from 'next/navigation';
import React from 'react'

export default async function ProductDetails({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  console.log('slug:', slug);

  //   if(slug?.length===2){
  //     return(
  //       <p>
  //        Viewing Product for Category: {slug[0]} and Product: {slug[1]}
  //     </p>
  //     )
  // }
  //   else if(slug?.length===1){
  //       return (
  //         <p>
  //           Viewing Product for Category: {slug[0]}
  //         </p>
  //       ) 
  //     }

      if(slug?.length>3){
        notFound();
      }




  return (
    <div className='p-5'>
      <h1>This is Product Details Page</h1>
      {
        slug?.length > 0 && slug.map((item, index) => (
          <p key={index}>{item}</p> // Use item inside <p> for displaying the value
        ))
      }
    </div>
  )
}
