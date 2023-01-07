import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from '../client';
import Format from './layout/Format'
import Section1 from './Components/Section1'
import Browsectg from './Components/browsectg'
import Homecards from './Components/homecards'

// importing all categories cards as a component
import AllCtegoriescards from './Components/AllCtegoriescards';

//import category component
import Categories from './Categories';
import Header from './Components/Header';
import { useState } from 'react';
import Search from './Components/Search';


 export default function Home({allsearchdata, jobsdata, jobsfeatures, automobilesdata, servicesdata, propertiesdata, astrologydata, electandappl }) {
  console.log(allsearchdata);


  return (
    <div className={styles.container}>

      <Format>
        <Section1 searchdata={allsearchdata}></Section1>
        <Browsectg></Browsectg>
        <div className='displayallcards'>
          <AllCtegoriescards alljobsdata={jobsdata} jobfeature={jobsfeatures} amdata={automobilesdata} servicedata={servicesdata} propertydata={propertiesdata}
            astrologiesdata={astrologydata} elecandappl={electandappl} />
        </div>
      </Format>
      
    </div>
  )

    }
 export async function getStaticProps({getvalue}) {

  console.log("serverside",getvalue)

  let searchinp = "wanted";
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        automobiles {
          nodes {
            automobfeatures {
              address
              alternateContactNumber
              contactNumber
              description
              location
            }
            title
            uri
            date
          }
        }
        allServices {
          nodes {
            servicefeatures {
              address
              alternateContactNumber
              contactNumber
              description
              fieldGroupName
              location
              price
              sqft
            }
            title
            uri
            date
          }
        }
        allElectronicsAndAppliances {
          nodes {
            eleandappfeatures {
              address
              alternateContactNumber
              contactNumber
              description
              fieldGroupName
              location
            }
            uri
            title
            date
          }
        }
        allProperties {
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
            date
          }
        }
        allAstrology {
          nodes {
            astrofeatures {
              address
              contactNumber
              alternateContactNumber
              description
              fieldGroupName
              location
            }
            title
            uri
            date
          }
        }
        allJobs {
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
            uri
            date
          }
        }
      }
      `

  });

  const newdata = await client.query({
    query : gql `

     query newquery($searchinp : String!)
     {
      allAstrology(where: {search:$searchinp}) {
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
      allProperties(where: {search:$searchinp}) {
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
      allServices(where: {search:$searchinp}) {
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
       allElectronicsAndAppliances(where: {search:$searchinp}) {
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
       automobiles(where: {search:$searchinp}) {
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
    },
  });

    console.log(searchinp);



  console.log("h", data.automobiles, "d", data.allServices);
  return {
    props: {
      jobsdata: data.allJobs.nodes,
      jobsfeatures: data.allJobs.nodes.jobfeatures || null,
      automobilesdata: data.automobiles.nodes,
      servicesdata: data.allServices.nodes,
      propertiesdata: data.allProperties.nodes,
      astrologydata: data.allAstrology.nodes,
      electandappl: data.allElectronicsAndAppliances.nodes,
      allsearchdata : newdata || null
    }
  }

}

