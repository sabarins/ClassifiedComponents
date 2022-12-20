import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { gql } from "@apollo/client";
import client from '../../client';

export default function DetailsPage() {

    let router = useRouter();
  return (
    <div>DetailsPage for {router.query.uri} {router.query.name}</div>
  )
}

export async function getStaticPaths({params})
{
  const { data } = await client.query({
    query: gql`
    query NewQuery($id: ID!) {
      post(id: $id, idType: URI) {
        jobsFeatures {
          address
          contactNumber
          courseDetails
        }
        blocksJSON
        uri
        title
      }
    }
    `,
    variables: {
      id: params.uri
    }
  });

  return{
    
  };
};
