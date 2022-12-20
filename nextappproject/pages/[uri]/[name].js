import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function DetailsPage() {


    let router = useRouter();
  return (
    <div>DetailsPage for {router.query.uri} {router.query.name}</div>
  )
}
