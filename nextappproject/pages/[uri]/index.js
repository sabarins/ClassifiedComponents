import Filterproperty from "../Components/filterproperty"
import Advtsmall from "../Components/advtsmall"
import client from "../../client"
import { gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState,useEffect } from "react"
import Link from "next/link"
import Subcategory from "../subcategory"
import dummyImage from '../../public/img/dummy.png'
import Image from 'next/image';
import Format from "../layout/Format"
import Bredcrumb from "../Components/_child/bredcrumb"
import SubIndex from "./[name]/index";



export default function Innerlistings({alldata,servicesubcategory,allsubcategorydata,allcategorydata,subcategorydata2,
  jobsdata, astrologydata,propertiesdata,automobilesdata, servicesdata,user,automobilecategories,subcategorydata,
  electandappl, automobilesubcategorydata,propertysubcategory,astrologysubcategorydata,electrsubcategory,jobsubcategory }) {

  console.log(allsubcategorydata);
  console.log(subcategorydata);
  console.log(allcategorydata);

  const jobdata = jobsdata.nodes;

  const automobiledata = automobilesdata.nodes;


  const servicedata = servicesdata.nodes;

  console.log(jobdata, automobiledata, servicedata);


  const router = useRouter();

  const getcategoryname = router.query.uri;

  const [service, setService] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [automobiles, setAutomobiles] = useState(false);
  const [elect,setElect] = useState(false);
  const [astrology,setAstrology] = useState(false);
  const [properties,setProperties] = useState(false);


  let [categoryname, setCategoryname] = useState(getcategoryname);


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



  }, []);

  console.log("uri:",router.query.category);


  let [getsubcategoryname,setGetsubcategoryname] = useState("");

  console.log(getsubcategoryname);
  console.log("all"+router.query.uri.charAt(0).toUpperCase()+router.query.uri.slice(1).toLowerCase());

  console.log(servicesdata.nodes && automobilesdata.nodes);


  return (
    <Format> 
    <Bredcrumb sub={getsubcategoryname} allcategory={allcategorydata}></Bredcrumb>
    <div className="container">
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-12">
            {/* <SubIndex allcdata = {allcategorydata} ></SubIndex> */}
          {service ?
              <div className='row mt-4'>
                {
                  servicedata.map((ele, ind) => {
                    return (
                     <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <a href={`${ele.uri}/${ele.id}`}>
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                              
                            </div>
                            </a>
                            {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span ><a href={`${e.slug}`} style={{cursor:"pointer"}}>{e.name}</a></span>
                                  )
                                })

                             }
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
                <div className='row mt-4'>
                  {
                    jobdata.map((ele, ind) => {
                      return (
                        <div class="col-md-4 col-6" key={ind}>
                          <article class="blog-post">
                          <a href={`${ele.uri}/${ele.id}`}>
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div class="content">
                            <h5>{ele.title}</h5>
                              <p>Location : {ele.jobfeatures.location}</p>
                              {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span ><a href={"/" + `${e.name}`} style={{cursor:"pointer"}}>{e.name}</a></span>
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

          <div>
            {automobiles ?
              <div>
                <div className='row position-relative mt-4'>
                  {
                    automobiledata.map((ele, ind) => {
                      console.log(ele)
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <a href={`${ele.uri}/${ele.id}`} onClick={()=>{
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
                                    <span ><a href={"/" + `${e.name}`} style={{cursor:"pointer"}}>{e.name}</a></span>
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
              : null
            }
            {
              elect ?
              <div>
                <div className='row position-relative mt-4'>
                  {
                    electandappl.map((ele, ind) => {
                      console.log(ele)
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <a href={`${ele.uri}/${ele.id}`} onClick={()=>{
                              setGetsubcategoryname();
                            }}
                            >
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                             <p className="mb-3">Location : {ele.eleandappfeatures.location}</p>
                             {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span ><a href={"/" + `${e.name}`} style={{cursor:"pointer"}}>{e.name}</a></span>
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
              : null
            }
            {
              astrology ?
              <div>
                <div className='row position-relative mt-4'>
                  {
                    astrologydata.map((ele, ind) => {
                      console.log(ele)
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <a href={`${ele.uri}/${ele.id}`} onClick={()=>{
                              setGetsubcategoryname();
                            }}
                            >
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                              {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span ><a href={"/" + `${e.name}`} style={{cursor:"pointer"}}>{e.name}</a></span>
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
              : null
            }
            {
              properties ?
                <div className='row position-relative mt-4'>
                  {
                    propertiesdata.map((ele, ind) => {
                      console.log(ele)
                      return (
                        <div className="col-md-4 col-6" key={ind}>
                          <article className="blog-post">
                            <a href={`${ele.uri}/${ele.id}`} onClick={()=>{
                              setGetsubcategoryname();
                            }}
                            >
                            <Image alt="jobimg" src={dummyImage} />
                            <small>{ele.date}</small>
                            <div className="content">
                              <h5>{ele.title}</h5>
                              <p className="mb-3">Location : {ele.propertyfeatures.location}</p> 
                              {
                                ele.categories.nodes.map((e)=>
                                {
                                  console.log(e);
                                  
                                  return(
                                    <span ><a href={"/" + `${e.name}`} style={{cursor:"pointer"}}>{e.name}</a></span>
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
              : null
            }
          </div>

      </div>
      <div className="col-xl-3 col-lg-4 col-md-12"> 
        <Advtsmall></Advtsmall>
        <Filterproperty alldata = {allcategorydata}></Filterproperty>
      </div>
    </div>
     </div>

   </Format>
  )
}



export async function getServerSideProps(context) {
  console.log("seuri",context.query.name);
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
              id
              name
              uri
              slug
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
              id
              name
              uri
              slug
            }
          }
          title
          uri
          
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
              id
              name
              uri
              slug
            }
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
          categories {
            nodes {
              id
              name
              uri
              slug
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
              id
              name
              uri
              slug
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
              id
              name
              uri
              slug
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
      allcategorydata: data,
      // automobilesubcategorydata : data.automob2,
      // servicesubcategory : data.services2,
      // astrologysubcategorydata : data.astrology2,
      // propertysubcategory : data.prop2,
      // jobsubcategory: data.job2,
      // electrsubcategory: data.electr2
    }
  }
}

