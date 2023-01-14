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


 export default function Home({allsearchdata, jobsdata, jobsfeatures, automobilesdata, servicesdata, propertydata, astrologydata, electandappl }) {
  console.log(allsearchdata);


  return (
    <div className={styles.container}>

      <Format>
        <Section1 searchdata={allsearchdata}></Section1>
        <Browsectg></Browsectg>
        <div className='displayallcards'>
          <AllCtegoriescards alljobsdata={jobsdata} jobfeature={jobsfeatures} amdata={automobilesdata} servicedata={servicesdata} propertydata={propertydata}
            astrologiesdata={astrologydata} elecandappl={electandappl} />
        </div>
      </Format>
      
    </div>
  )

    }
 export async function getStaticProps({getvalue}) {

  console.log("serverside",getvalue)

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
            id
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
            id
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
            id
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
            id
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
            id
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
            id
          }
        }
      }
      `

  });


  console.log("h", data.automobiles, "d", data.allServices);
  return {
    props: {
      jobsdata: data.allJobs.nodes,
      jobsfeatures: data.allJobs.nodes.jobfeatures || null,
      automobilesdata: data.automobiles.nodes,
      servicesdata: data.allServices.nodes,
      propertydata: data.allProperties.nodes,
      astrologydata: data.allAstrology.nodes,
      electandappl: data.allElectronicsAndAppliances.nodes,
    }
  }

}

