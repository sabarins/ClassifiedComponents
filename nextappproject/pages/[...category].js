import Format from "./layout/Format"
import Bredcrumb from "./Components/_child/bredcrumb"
import Innercards from "./Components/innercards"
import Filterproperty from "./Components/filterproperty"
import Advtsmall from "./Components/advtsmall"
import Dynamicategories from "./[...category]"
import client from "../client"
import { gql } from "@apollo/client"
import { useRouter } from "next/router"
import WayNavbar from "./WayNavbar"
import { useState,useEffect } from "react"
import Link from "next/link"
import Subcategory from "./subcategory"
import dummyImage from '../public/img/dummy.png';
import Image from 'next/image';

export default function Innerlistings({ jobsdata, automobilesdata, servicesdata,user,automobilecategories,subcategorydata }) {

  console.log(user);
  console.log(subcategorydata);

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

  let [motorcycles,setMotorcycles] = useState(false);

  useEffect(() => {
    if (categoryname === "service") {
      setService(true);
    }
    else if (categoryname === "jobs") {
      setJobs(true);
    }
    else if (categoryname === "automob") {
      setAutomobiles(true);
    }
    if(router.query.category[0]==="motorcycles")
    {
      setMotorcycles(true);
    }
  }, []);

  console.log(router.query.category)

  return (
    <Format> 
    <Bredcrumb></Bredcrumb>
    <div className="container">
    <div className="row">
    <div className="col-xl-9 col-lg-8 col-md-12">
            <Subcategory subdata={subcategorydata} />
          {service ?
              <div className='row'>
                {
                  servicedata.map((ele, ind) => {
                    return (
                     <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <a href={`${ele.uri}`}>
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                              <span>
                              Services
                              </span>
                              <p>Location: </p>
                              <p> Qualification: </p>
                            </div>
                            </a>
                          </article>
                      </div>
                    )
                  })
                }
              </div>
            : null}
          <div>
            {jobs ?
              <div>
                <div className='row'>
                  {
                    jobdata.map((ele, ind) => {
                      return (
                        <div class="col-md-4 col-6" key={ind}>
                          <article class="blog-post">
                          <a href={`${ele.uri}`}>
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div class="content">
                            <h5>{ele.title}</h5>
                              {/* <p>Qualification : <b style={{fontWeight:"bold"}}>{ele.jobsFeatures.qualification}</b></p> */}
                              <p>Location : {ele.jobfeatures.location}</p>
                              <span style={{fontWeight:"bold"}}>Jobs</span>
                              {/* <span style={{fontWeight:"bold"}} class="text-muted">{ele.date}</span> */}
                            </div>
                            </a>
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
              <div>
                <div className='row position-relative mt-3'>
                  {
                    automobiledata.map((ele, ind) => {
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <a href={`${ele.uri}`}>
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                              {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p> */}
                             <p className="mb-3">Location : {ele.automobfeatures.location}</p>
                             {
                                ele.categories.nodes.map((e)=>
                                {
                                  return(
                                    <span>{e.name}</span>
                                  )
                                })

                             }
                            </div>
                            </a>
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
    <div className="col-xl-3 col-lg-4 col-md-12"> 
    <Advtsmall></Advtsmall>
    <Filterproperty subcategory={automobilesdata.nodes || null}></Filterproperty>
    </div></div></div>

   </Format>
  )
}

export async function getServerSideProps(context) {

  const { data } = await client.query({
    query: gql`
    query NewQuery {
      allJobs {
        nodes {
          jobfeatures {
            address
            alternateContanctNumber
            city
            contactNumber
            description
            fieldGroupName
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
     allAutomob {
        nodes {
          categories {
            nodes {
              name
            }
          }
          automobfeatures {
            address
            alternateContactNumber
            contactNumber
            description
            location
          }
          uri
          date
          title
        }
      }
      automob2: allAutomob(where: {categoryName: "${context.query.category[0]}" }) {
        nodes {
          automobfeatures {
            address
            alternateContactNumber
            contactNumber
            description
            location
          }
          uri
          title
          slug
          automobId
          categories {
            nodes {
              name
            }
          }
        }
      }
      allService {
        nodes {
          servicefeatures {
            address
            contactNumber
            description
            location
            price
            sqft
            alternateContactNumber
            fieldGroupName
          }
          title
          uri
        }
      }
      pages {
        nodes 
        {
           title
           uri
         }
       }
       
    }
    `
  });
  console.log("h", data.automob2, "d", data.allService);
  return {
    props: {
      jobsdata: data.allJobs,
      automobilesdata: data.allAutomob,
      automobilecategories:data.allAutomob.nodes,
      servicesdata: data.allService,
      user: data.pages.nodes,
      subcategorydata: data.automob2.nodes
    }
  }
}



// import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import { gql } from "@apollo/client";
// import client from '../client';
// import Link from 'next/link';
// import WayNavbar from './WayNavbar';



// export default function Dynamicategories({ jobsdata, automobilesdata, servicesdata }) {


//   const jobdata = jobsdata.nodes;

//   const automobiledata = automobilesdata.nodes;
  

//   const servicedata = servicesdata.nodes;

//   console.log(jobdata, automobiledata, servicedata);


//   const router = useRouter();

//   const getcategoryname = router.query.category[0];

//   const [service, setService] = useState(false);
//   const [jobs, setJobs] = useState(false);
//   const [automobiles, setAutomobiles] = useState(false);



//   let [categoryname, setCategoryname] = useState(getcategoryname);

//   let [motorcycles,setMotorcycles] = useState(false);

//   useEffect(() => {
//     if (categoryname === "service") {
//       setService(true);
//     }
//     else if (categoryname === "jobs") {
//       setJobs(true);
//     }
//     else if (categoryname === "automobiles") {
//       setAutomobiles(true);
//     }
//     if(router.query.category[0]==="motorcycles")
//     {
//       setMotorcycles(true);
//     }
//   }, []);


//   return (
//     <div>
//       Dynamic Category page for {router.query.category}
//       <div>
//         <WayNavbar />
//       </div>
//       <div className='containersubcontainer'>
//         <div className='subcategories'>
//           <div className='subcategory'>
//             <p>All Categories</p>
//             <div className='categoryforautomobiles'>
//               {
//                 automobiles ? 
//                 <div>
//                     <a href={`/${router.query.category}`} style={{marginLeft:"20px"}}>{router.query.category}</a> 
//                     <div>
//                       <a href={`/motorcycles`} style={{margin:"40px 0px 0px 40px"}}>Motorcycles</a> 
//                     </div>
//                     <div>
//                       <a href={`/scooters`} style={{margin:"40px 0px 0px 40px"}}>Scooters</a> 
//                     </div>
//                     <div>
//                       <a href={`/spareparts`} style={{margin:"40px 0px 0px 40px"}}>Spare Parts</a> 
//                     </div>
//                 </div>
//                 :null
//               }
//               {
//                 jobs ? 
//                 <div>
//                     <a href={`/${router.query.category}`} style={{marginLeft:"20px"}}>{router.query.category}</a> 
//                     <div>
//                       <a href={`/motorcycles`} style={{margin:"40px 0px 0px 40px"}}>IT candidates</a> 
//                     </div>
//                     <div>
//                       <a href={`/scooters`} style={{margin:"40px 0px 0px 40px"}}>Homecare</a> 
//                     </div>
//                 </div>
//                 :null
//               }
             
//             </div>
//           </div>
//         </div>
//         <div className='listing'>
//               {
//                 motorcycles ? 
//                 <div>
//                   <p>Hello</p>
//                 </div>:null
//               }
//           {service ?
//             <div className='container'>
//               <div className='row'>
//                 {
//                   servicedata.map((ele, ind) => {
//                     return (
//                       <div className="col-md-3 col-6" key={ind}>
//                         <article className="blog-post">
//                           <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
//                           <Link href={`${ele.uri}`} className="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
//                           <div className="content">
//                             {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
//                             <p>Location : {ele.jobsFeatures.location}</p> */}
//                             <span className="text-muted">{ele.date}</span>
//                           </div>
//                         </article>
//                       </div>
//                     )
//                   })
//                 }
//               </div>
//             </div>
//             : null}
//           <div>
//             {jobs ?
//               <div className='container'>
//                 <div className='row'>
//                   {
//                     jobdata.map((ele, ind) => {
//                       return (
//                         <div className="col-md-3 col-6" key={ind}>
//                           <article className="blog-post">
//                             <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
//                             <Link href={`${ele.uri}`} className="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
//                             <div className="content">
//                               {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
//                     <p>Location : {ele.jobsFeatures.location}</p> */}
//                               <span className="text-muted">{ele.date}</span>
//                             </div>
//                           </article>
//                         </div>
//                       )
//                     })
//                   }
//                 </div>
//               </div>
//               : null}
//           </div>

//           <div>
//             {automobiles ?
//               <div className='container'>
//                 <div className='row'>
//                   {
//                     automobiledata.map((ele, ind) => {
//                       return (
//                         <div class="col-md-3 col-6" key={ind}>
//                           <article class="blog-post">
//                             <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
//                             <Link href={`${ele.uri}`} class="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
//                             <div class="content">
//                               {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
//                              <p>Location : {ele.jobsFeatures.location}</p> */}
//                               <span class="text-muted">{ele.date}</span>
//                             </div>
//                           </article>
//                         </div>
//                       )
//                     })
//                   }
//                 </div>
//               </div>
//               : null}
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// };





// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//     query NewQuery {
//       allJobs {
//         nodes {
//           jobsFeatures {
//             address
//             alternateContactNumber
//             computerClass
//             contactNumber
//             courseDetails
//             delivery
//             distributorsWanted
//             driver
//             fieldGroupName
//             homeCare
//             itCandidates
//             listOfPosition
//             location
//             qualification
//             salesMarketing
//             tailorCourse
//             tailoringVacancy
//           }
//           title
//           jobsId
//           date
//           blocksJSON
//           uri
//         }
//       }
//       allAutomobiles {
//         nodes {
//           title
//           uri
//           date
//         }
//       }
//       allService {
//         nodes {
//           date
//           title
//           uri
//           serviceFeatures {
//             fieldGroupName
//           }
//         }
//       }
//     }
//     `
//   });
//   console.log("h", data.allAutomobiles, "d", data.allService);
//   return {
//     props: {
//       jobsdata: data.allJobs,
//       automobilesdata: data.allAutomobiles,
//       servicesdata: data.allService,
//     }
//   }
// }