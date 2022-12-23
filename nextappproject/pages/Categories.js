import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'


export default function Categories() {

  const router = useRouter();
  return (
    <div className='categorieslist' style={{display:"flex",columnGap:"50px"}}>
        <a style={{cursor:'pointer'}} onClick={()=>{router.push(`/service`)}}>Services</a>
        <a style={{cursor:'pointer'}} onClick={()=>{router.push(`/jobs`)}}>Jobs</a>
        <a style={{cursor:'pointer'}} onClick={()=>{router.push(`/automobiles`)}}>Automobiles</a>
    </div>
  )
}
