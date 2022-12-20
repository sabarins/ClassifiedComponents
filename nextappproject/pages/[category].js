import { useRouter } from 'next/router';
import React from 'react'


export default function Category() {
    const router = useRouter();
  return (
    <div>
        Welcome {router.query.category}
    </div>
  )
}
