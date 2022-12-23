import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { gql } from "@apollo/client";
import client from '../client';
import Link from 'next/link';


export default function Dynamicategories({ jobsdata, automobilesdata, servicesdata }) {

  const jobdata = jobsdata.nodes;

  const automobiledata = automobilesdata.nodes;

  const servicedata = servicesdata.nodes;

  console.log(jobdata, automobiledata, servicedata);


  const router = useRouter();

  const getcategoryname = router.query.category[0];

  const [service, setService] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [automobiles, setAutomobiles] = useState(false);



  let [categoryname, setCategoryname] = useState(getcategoryname);

  useEffect(() => {
    if (categoryname === "service") {
      setService(true);
    }
    else if (categoryname === "jobs") {
      setJobs(true);
    }
    else if (categoryname === "automobiles") {
      setAutomobiles(true);
    }
  }, []);


  return (
    <div>
      Dynamic categories page for {router.query.category}
      <div style={{display:"flex",columnGap:"10px"}}>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <label>/</label>
        </div>
      </div>
      {service ?
        <div className='container'>
          <div className='row'>
            {
              servicedata.map((ele, ind) => {
                return (
                  <div className="col-md-3 col-6" key={ind}>
                    <article className="blog-post">
                      <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
                      <Link href={`${ele.uri}`} className="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
                      <div className="content">
                        {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
                            <p>Location : {ele.jobsFeatures.location}</p> */}
                        <span className="text-muted">{ele.date}</span>
                      </div>
                    </article>
                  </div>
                )
              })
            }
          </div>
        </div>
        : null}
      <div>
        {jobs ? 
          <div className='container'>
          <div className='row'>
            {
              jobdata.map((ele, ind) => {
                return (
                  <div className="col-md-3 col-6" key={ind}>
                    <article className="blog-post">
                      <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
                      <Link href={`${ele.uri}`} className="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
                      <div className="content">
                        {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
                    <p>Location : {ele.jobsFeatures.location}</p> */}
                        <span className="text-muted">{ele.date}</span>
                      </div>
                    </article>
                  </div>
                )
              })
            }
          </div>
        </div>        
        : null}
      </div>

      <div>
        {automobiles ? 
          <div className='container'>
          <div className='row'>
            {
              automobiledata.map((ele, ind) => {
                return (
                  <div class="col-md-3 col-6" key={ind}>
                    <article class="blog-post">
                      <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
                      <Link href={`${ele.uri}`} class="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
                      <div class="content">
                        {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
                    <p>Location : {ele.jobsFeatures.location}</p> */}
                        <span class="text-muted">{ele.date}</span>
                      </div>
                    </article>
                  </div>
                )
              })
            }
          </div>
        </div>                
        : null}
      </div>
    </div>
  )
};





export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        allJobs {
          nodes {
            jobsFeatures {
              address
              alternateContactNumber
              computerClass
              contactNumber
              courseDetails
              delivery
              distributorsWanted
              driver
              fieldGroupName
              homeCare
              itCandidates
              listOfPosition
              location
              qualification
              salesMarketing
              tailorCourse
              tailoringVacancy
            }
            title
            jobsId
            date
            blocksJSON
            uri
          }
        }
        allAutomobiles {
          nodes {
            automobilesFeature {
              address
              alternateContactNumber
              bicycles
              car
              contactNumber
              description
              fieldGroupName
              location
              motorcycles
              scooters
              spareParts
            }
            title
            uri
            date
          }
        }
        allService {
          nodes {
            date
            title
            uri
            serviceFeatures {
              fieldGroupName
            }
          }
        }
      }
      `
  });
  console.log("h", data.allAutomobiles, "d", data.allService);
  return {
    props: {
      jobsdata: data.allJobs,
      automobilesdata: data.allAutomobiles,
      servicesdata: data.allService,
    }
  }
}