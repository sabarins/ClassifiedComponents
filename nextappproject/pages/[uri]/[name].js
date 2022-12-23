import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { gql } from "@apollo/client";
import client from '../../client';
import Header from '../Components/Header';


export default function DetailsPage({categorydetail,automobilefeatures,jobsfeatures}) {

  console.log(categorydetail,automobilefeatures,jobsfeatures);


    let router = useRouter();

    let [categorydetails,setCategorydetails] = useState([]);

    let [getlocalstorage,setGetlocalstorage] = useState("");

    let [logged,setLogged] = useState(false);

    useEffect(()=>
    {
      setCategorydetails(categorydetail);

      setGetlocalstorage(localStorage.getItem("name"));

      if(getlocalstorage!=null)
      {
        console.log("Logged On",getlocalstorage);
        setLogged(true);
      }
      else
      {
        console.log("Logged Off");
        setLogged(false);
      }

    })
   
    console.log(logged);

  return (
    <div>
      
      <div>
        <Header />
        DetailsPage for {router.query.uri} {router.query.name}
      </div>
      <div>
        <p>Contact Number : 
          <span>
            {logged ? automobilefeatures.contactNumber : <a href="" style={{color:"skyblue"}}>Show number</a>}
          </span>
        </p>   
      </div>
     
    </div>
  )
}



export async function getServerSideProps(context)
{

  const uri = "/"+`${context.query.uri}`+"/"+`${context.query.name}`;
  console.log(uri);
  const {data} = await client.query(
    {
      query: gql `
      query NewQuery($uri: String!) {
      nodeByUri(uri: $uri) {
        __typename
        ... on Jobs {
          id
          jobsFeatures {
            address
            computerClass
            contactNumber
          }
        }
         ... on Service {
          id
          serviceFeatures {
          fieldGroupName
         }
     }
    ... on Automobiles {
      id
      automobilesFeature {
        motorcycles {
          brandAndModel {
            allBrands {
              tvs
            }
            allModels {
              heroAchiever
            }
          }
        }
        contactNumber
      }
      uri
      date
    }
    uri
  }
}
      `,
      variables: {
        uri,
      }
    }
  );
  return{
    props :
    {
      categorydetail : data.nodeByUri,
      jobsfeatures : data.nodeByUri.jobsFeatures  || null,
      automobilefeatures : data.nodeByUri.automobilesFeature || null,
    }
  }
}















// export async function getStaticPaths({params})
// {
//   const { data } = await client.query({
//     query: gql`
//     query NewQuery($id: String) {
//       post(id: $id, idType: URI) {
//         jobsFeatures {
//           address
//           contactNumber
//           courseDetails
//         }
//         blocksJSON
//         uri
//         title
//       }
//     }
//     `,
//     variables: {
//       id: params.uri
//     }
//   });

//   return{
    
//   };
// };
