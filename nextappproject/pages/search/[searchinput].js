import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { gql } from "@apollo/client"
import client from '../../client';
import Bredcrumb from '../Components/_child/bredcrumb';
import Format from '../layout/Format';
import Section1 from '../Components/section1';
import dummyImage from '/public/img/dummy.png';
import Image from 'next/image';
import Advtsmall from '../Components/advtsmall';
import Filterproperty from '../Components/filterproperty';




export default function SearchInput({ getdata, searchinp }) {

  const router = useRouter();

  let [jobsdata, setJobsdata] = useState([]);
  let [electappldata, setElectappldata] = useState([]);
  let [astrologydata, setAstrologydata] = useState([]);
  let [propertiesdatas, setPropertiesdatas] = useState([]);
  let [servicesdata, setServicesdata] = useState([]);
  let [automobilesdata, setAutomobilesdata] = useState([]);



  let [usersearcheddata,setUsersearcheddata] = useState([]);



  console.log(getdata, getdata.allJobs.nodes.title);

  let [searchinpdata, setSearchinpdata] = useState(getdata);

  useEffect(() => {
    if (getdata.allJobs.nodes.length > 0) {
      setJobsdata(getdata.allJobs.nodes);
    }
    if (getdata.allElectronicsAndAppliances.nodes.length > 0) {
      setElectappldata(getdata.allElectronicsAndAppliances.nodes);
    }
    if (getdata.allAstrology.nodes.length > 0) {
      setAstrologydata(getdata.allAstrology.nodes);
    }
    if (getdata.allProperties.nodes.length > 0) {
      setPropertiesdatas(getdata.allProperties.nodes); 
    }
    if (getdata.allServices.nodes.length > 0) {
      setServicesdata(getdata.allServices.nodes);
    }
    if (getdata.automobiles.nodes.length > 0) {
      setAutomobilesdata(getdata.automobiles.nodes);
    }

    let searchcpydata = [...jobsdata,...electappldata,...astrologydata,...propertiesdatas,...servicesdata,...automobilesdata]
    setUsersearcheddata(searchcpydata);

  },[jobsdata,electappldata,astrologydata,propertiesdatas,servicesdata,automobilesdata]);

  console.log(usersearcheddata);
  return (
    <Format>

      {/* <Bredcrumb></Bredcrumb> */}
      <div>
        <div class="container">
        <div class="row mt-4">
        <div className="col-xl-9 col-lg-8 col-md-12">
        {
          usersearcheddata.map((ele,ind)=>
          {
            return(
              <div className="col-md-4 col-6" key={ind}>
                    <article className="blog-post">
                      <a href={`${ele.uri}/${ele.id}`}>
                        <Image alt="jobimg" src={dummyImage} />
                        <small>{ele.date}</small>
                        <div className="content">
                          <h5>{ele.title}</h5>                         
                          <span style={{ fontWeight: "bold" }}>{ele.__typename}</span>
                        </div>
                      </a>
                    </article>
              </div>
            )
          })
        }
        </div>
        <div className="col-xl-3 col-lg-4 col-md-12"> 
          <Advtsmall></Advtsmall>
        </div>
        </div>
        
        </div>
        
      </div>
      
    </Format>
    
  )
}


export async function getServerSideProps(context) {

  let searchinp = `${context.query.searchinput}`;

  const { data } = await client.query({
    query: gql`
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
          uri
          id
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
          id
          uri
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
          id
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
          id
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
          id
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
          id
          uri
        }
      }

     }
    `,

    variables: {
      searchinp,
    },

  });

  return {
    props:
    {
      getdata: data || null,
    }
  }
}