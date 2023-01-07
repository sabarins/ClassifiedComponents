import React, { useEffect } from 'react'
import { gql } from "@apollo/client"
import client from '../../client';


export default function Search({getsearchdata}) {

  console.log(getsearchdata);

          // const filterdata = await client.query(
          //   {
          //       query : gql `
          //       query NewQuery($searchinp : String!) {
          //           allAstrology(where: {search:$searchinp}) {
          //             nodes {
          //               astrofeatures {
          //                 address
          //                 contactNumber
          //                 description
          //                 location
          //               }
          //               title
          //             }
          //           }
          //           allJobs(where: {search: $searchinp}) {
          //             nodes {
          //               jobfeatures {
          //                 address
          //                 alternateContanctNumber
          //                 city
          //                 contactNumber
          //                 description
          //                 jobPosition
          //                 location
          //                 salaryFrom
          //                 salaryTo
          //               }
          //               title
          //             }
          //           }
          //           allProperties(where: {search:$searchinp}) {
          //             nodes {
          //               propertyfeatures {
          //                 acre
          //                 address
          //                 alternateContactNumber
          //                 cent
          //                 city
          //                 contactNumber
          //                 description
          //                 fieldGroupName
          //                 location
          //                 price
          //                 priceTo
          //                 sqft
          //               }
          //               title
          //               uri
          //             }
          //           }
          //           allServices(where: {search:$searchinp}) {
          //             nodes {
          //               servicefeatures {
          //                 address
          //                 alternateContactNumber
          //                 contactNumber
          //                 description
          //                 location
          //                 price
          //                 sqft
          //               }
          //               title
          //               uri
          //             }
          //           }
          //           allElectronicsAndAppliances(where: {search:$searchinp}) {
          //             nodes {
          //               eleandappfeatures {
          //                 address
          //                 alternateContactNumber
          //                 contactNumber
          //                 description
          //                 location
          //               }
          //               title
          //               uri
          //             }
          //           }
          //           automobiles(where: {search:$searchinp}) {
          //             nodes {
          //               automobfeatures {
          //                 address
          //                 alternateContactNumber
          //                 contactNumber
          //                 description
          //                 fieldGroupName
          //                 location
          //               }
          //               title
          //               uri
          //             }
          //           }
          //         }
          //       `,
    
          //       variables: {
          //         searchinp,
          //         },
            
          //   });
            
          //   const posts = filterdata || null;


    
  return (
    <div>
    </div>
  )
}


export async function getServerSideProps() {

    let searchinp = "car";

    const { data } = await client.query({
        query: gql `
        query ewQuery($searchinp: String!) {
            allAstrology(where: {search: $searchinp}) {
              nodes {
                astrofeatures {
                  address
                  contactNumber
                  description
                  location
                }
                title
              }
            }
            allJobs(where: {search: $searchinp}) {
              nodes {
                jobfeatures {
                  address
                  alternateContanctNumber
                  city
                  contactNumber
                  description
                  jobPosition
                  location
                  salaryFrom
                  salaryTo
                }
                title
              }
            }
            allProperties(where: {search: $searchinp}) {
              nodes {
                propertyfeatures {
                  acre
                  address
                  alternateContactNumber
                  cent
                  city
                  contactNumber
                  description
                  fieldGroupName
                  location
                  price
                  priceTo
                  sqft
                }
                title
                uri
              }
            }
            allServices(where: {search: $searchinp}) {
              nodes {
                servicefeatures {
                  address
                  alternateContactNumber
                  contactNumber
                  description
                  location
                  price
                  sqft
                }
                title
                uri
              }
            }
            allElectronicsAndAppliances(where: {search: $searchinp}) {
              nodes {
                eleandappfeatures {
                  address
                  alternateContactNumber
                  contactNumber
                  description
                  location
                }
                title
                uri
              }
            }
            automobiles(where: {search: $searchinp}) {
              nodes {
                automobfeatures {
                  address
                  alternateContactNumber
                  contactNumber
                  description
                  fieldGroupName
                  location
                }
                title
                uri
              }
            }
          }
        `,
        variables: {
            searchinp,
          }
        
    });
    return {
        props : {
            getsearchdata : data,            
        }
    }

}