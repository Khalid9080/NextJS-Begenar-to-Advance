import React from 'react'

export default async function BlogPage({params}:{params:Promise<{id:string}>}) {
    const{id}= await params;
  return (
    <div>Blog Details page:{id}</div>
  )
}
