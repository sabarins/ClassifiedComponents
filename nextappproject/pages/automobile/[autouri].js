import React from 'react'
import { useRouter } from 'next/router'
import { gql } from "@apollo/client"
import client from '../../client';


export default function DynamicSubCategory({ getdata }) {

  console.log(getdata)

  const router = useRouter();
  return (
    <div>DynamicSubCategory for {router.query.autouri}</div>
  )
}


export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
    query NewQuery {
allAutomobiles {
  nodes {
    automobilesFeature {
      motorcycles {
        title
        price
        kmDriven
      }
    }
    uri
    title
  }
}
  }
`
  });
  return {
    props:
    {
      getdata: data.allAutomobiles.nodes || null,
    }
  }
}