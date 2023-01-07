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
import Search from "./Components/Search"


export default function Innerlistings({ allcategorydata,subcategorydata2,jobsdata, astrologydata,propertiesdata,automobilesdata, servicesdata,user,automobilecategories,subcategorydata,electandappl }) {

  console.log(user);
  console.log(subcategorydata);
  console.log(allcategorydata);

  const jobdata = jobsdata.nodes;

  const automobiledata = automobilesdata.nodes;


  const servicedata = servicesdata.nodes;

  console.log(jobdata, automobiledata, servicedata);


  const router = useRouter();

  const getcategoryname = router.query.category[0];

  const [service, setService] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [automobiles, setAutomobiles] = useState(false);
  const [elect,setElect] = useState(false);
  const [astrology,setAstrology] = useState(false);
  const [properties,setProperties] = useState(false);


  let [categoryname, setCategoryname] = useState(getcategoryname);

  let [motorcycles,setMotorcycles] = useState(false);

  useEffect(() => {
    if (categoryname === "service") {
      setService(true);
    }
    else if (categoryname === "jobs") {
      setJobs(true);
    }
    else if (categoryname === "automobile") {
      setAutomobiles(true);
    }
    else if(categoryname === "electronicandapplian")
    {
      setElect(true);
    }
    else if(categoryname === "astrology")
    {
      setAstrology(true);
    }
    else if(categoryname === "properties")
    {
      setProperties(true);
    }
    if(router.query.category[0]==="motorcycles")
    {
      setMotorcycles(true);
    }


  }, []);

  console.log(router.query.uri);


  let [getsubcategoryname,setGetsubcategoryname] = useState("");

  console.log(getsubcategoryname);

  console.log(servicesdata.nodes && automobilesdata.nodes);


  return (
    <Format> 
    <Bredcrumb sub={getsubcategoryname} allcategory={allcategorydata}></Bredcrumb>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-12">
            <Subcategory subdata={subcategorydata} subdata2={subcategorydata2} />
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
                              {/* {
                                ele.categories.nodes.map((e)=>
                                {
                                  return(
                                    <span>{e.name}</span>
                                  )
                                })

                             } */}
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
                      console.log(ele)
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <Link href={`${ele.uri}`} onClick={()=>{
                              setGetsubcategoryname();
                            }}
                            >
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                             <p className="mb-3">Location : {ele.automobfeatures.location}</p>
                             {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span>{e.name}</span>
                                  )
                                })

                             }
                            </div>
                            </Link>
                          </article>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              : null
            }
            {
              elect ?
              <div>
                <div className='row position-relative mt-3'>
                  {
                    electandappl.map((ele, ind) => {
                      console.log(ele)
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <Link href={`${ele.uri}`} onClick={()=>{
                              setGetsubcategoryname();
                            }}
                            >
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                             <p className="mb-3">Location : {ele.eleandappfeatures.location}</p>
                             {/* {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span>{e.name}</span>
                                  )
                                })

                             } */}
                            </div>
                            </Link>
                          </article>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              : null
            }
            {
              astrology ?
              <div>
                <div className='row position-relative mt-3'>
                  {
                    astrologydata.map((ele, ind) => {
                      console.log(ele)
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <Link href={`${ele.uri}`} onClick={()=>{
                              setGetsubcategoryname();
                            }}
                            >
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                             {/* <p className="mb-3">Location : {ele.astrofeatures.location}</p> */}
                             {/* {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span>{e.name}</span>
                                  )
                                })

                             } */}
                            </div>
                            </Link>
                          </article>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              : null
            }
            {
              properties ?
              <div>
                <div className='row position-relative mt-3'>
                  {
                    propertiesdata.map((ele, ind) => {
                      console.log(ele)
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <Link href={`${ele.uri}`} onClick={()=>{
                              setGetsubcategoryname();
                            }}
                            >
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                             <p className="mb-3">Location : {ele.propertyfeatures.location}</p>
                             {/* {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span>{e.name}</span>
                                  )
                                })

                             } */}
                            </div>
                            </Link>
                          </article>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              : null
            }
          </div>

      </div>
      <div className="col-xl-3 col-lg-4 col-md-12"> 
        <Advtsmall></Advtsmall>
        <Filterproperty subcategory={allcategorydata}></Filterproperty>
      </div>
    </div>
     </div>

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
            jobPosition
            location
            salaryFrom
            salaryTo
          }
          categories {
            nodes {
              name
            }
          }
          title
          uri
          date
        }
      }
      automobiles {
        nodes {
          automobfeatures {
            address
            alternateContactNumber
            contactNumber
            description
            fieldGroupName
            location
          }
          categories {
            nodes {
              name
            }
          }
          title
          uri
          slug
        }
      }
      automob2: automobiles(where: {categoryName: "${context.query.category[0]}" }) {
        nodes {
          automobfeatures {
            address
            alternateContactNumber
            contactNumber
            description
            fieldGroupName
            location
          }
          categories {
            nodes {
              name
            }
          }
          title
          uri
          slug
        }
      }
      services2: allServices(where: {categoryName: ""}) {
        nodes {
          categories {
            nodes {
              name
            }
          }
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
          categories {
            nodes {
              name
            }
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
          categories {
            nodes {
              name
            }
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
          categories {
            nodes {
              name
            }
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
          categories {
            nodes {
              name
            }
          }
          title
          uri
          date
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
      automobilesdata: data.automobiles,
      automobilecategories:data.automobiles.nodes,
      servicesdata: data.allServices,
      propertiesdata: data.allProperties.nodes,
      astrologydata: data.allAstrology.nodes,
      electandappl: data.allElectronicsAndAppliances.nodes,
      user: data.pages.nodes,
      subcategorydata: data.automob2.nodes,
      subcategorydata2: data.services2.nodes,
      allcategorydata: data,
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