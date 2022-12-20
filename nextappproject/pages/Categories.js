import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'


export default function Categories() {

  const router = useRouter();
  return (
    <div>Caategories
      <p>
        <a onClick={()=>{router.push()}}>Services</a>
      </p>
    </div>
  )
}
