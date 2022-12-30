import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function WayNavbar() {

    const router = useRouter();
    console.log(router.query.uri)
  return (
    <div>
        <div style={{display:"flex",columnGap:"10px"}}>
        <div>
          <p><Link href="/">Home</Link></p>
        </div>
        <div>
          <label>/</label>
        </div>
        <div>
          {/* <p><a style={{cursor:"pointer"}} onClick={()=>{router.push(`/${router.query.category}`)}} >{router.query.category}</a></p> */}
          <a style={{cursor:"pointer"}} onClick={()=>{router.push(`/${router.query.uri}`)}}>{router.query.uri}</a> /<a style={{cursor:"pointer"}} onClick={()=>{router.push(`/${router.query.uri} / ${router.query.name}`)}} >{router.query.name}</a>
        </div>
      </div>
    </div>
  )
}
