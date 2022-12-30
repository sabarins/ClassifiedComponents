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



export default function Innerlistings({ jobsdata, automobilesdata, servicesdata }) {


  return (
    <Format> 
    <Bredcrumb></Bredcrumb>
    <div className="container">
    <div className="row">
    <div className="col-xl-9 col-lg-8 col-md-12">
    {/* <Innercards></Innercards> */}
    <div style={{textAlign:"center",marginTop:"100px"}}>
      <p>No Content</p>
    </div>
    </div>
    <div className="col-xl-3 col-lg-4 col-md-12"> 
    <Advtsmall></Advtsmall>
    {/* <Filterproperty></Filterproperty> */}
    </div></div></div>

   </Format>
  )
  // const jobdata = jobsdata.nodes;

  // const automobiledata = automobilesdata.nodes;
  

  // const servicedata = servicesdata.nodes;

  // console.log(jobdata, automobiledata, servicedata);


  // const router = useRouter();

  // const getcategoryname = router.query.category;

  // const [service, setService] = useState(false);
  // const [jobs, setJobs] = useState(false);
  // const [automobiles, setAutomobiles] = useState(false);



  // let [categoryname, setCategoryname] = useState(getcategoryname);

  // let [motorcycles,setMotorcycles] = useState(false);

  // useEffect(() => {
  //   if (categoryname === "service") {
  //     setService(true);
  //   }
  //   else if (categoryname === "jobs") {
  //     setJobs(true);
  //   }
  //   else if (categoryname === "automobiles") {
  //     setAutomobiles(true);
  //   }
  //   if(router.query.category==="motorcycles")
  //   {
  //     setMotorcycles(true);
  //   }
  // }, []);

  // console.log(router.query.category)

  // return (
  //   <Format> 
  //   <Bredcrumb></Bredcrumb>
  //   <div className="container">
  //   <div className="row">
  //   <div className="col-xl-9 col-lg-8 col-md-12">
  //   <div>
  //     Dynamic Category page for {router.query.category}
  //     <div>
  //       <WayNavbar />
  //     </div>
  //     <div className='containersubcontainer'>
  //       <div className='subcategories'>
  //         <div className='subcategory'>
  //           <p>All Categories</p>
  //           <div className='categoryforautomobiles'>
  //             {
  //               automobiles ? 
  //               <div>
  //                   <a href={`/${router.query.category}`} style={{marginLeft:"20px"}}>{router.query.category}</a> 
  //                   <div>
  //                     <a href={`/motorcycles`} style={{margin:"40px 0px 0px 40px"}}>Motorcycles</a> 
  //                   </div>
  //                   <div>
  //                     <a href={`/scooters`} style={{margin:"40px 0px 0px 40px"}}>Scooters</a> 
  //                   </div>
  //                   <div>
  //                     <a href={`/spareparts`} style={{margin:"40px 0px 0px 40px"}}>Spare Parts</a> 
  //                   </div>
  //               </div>
  //               :null
  //             }
  //             {
  //               jobs ? 
  //               <div>
  //                   <a href={`/${router.query.category}`} style={{marginLeft:"20px"}}>{router.query.category}</a> 
  //                   <div>
  //                     <a href={`/motorcycles`} style={{margin:"40px 0px 0px 40px"}}>IT candidates</a> 
  //                   </div>
  //                   <div>
  //                     <a href={`/scooters`} style={{margin:"40px 0px 0px 40px"}}>Homecare</a> 
  //                   </div>
  //               </div>
  //               :null
  //             }
             
  //           </div>
  //         </div>
  //       </div>
  //       <div className='listing'>
  //             {
  //               motorcycles ? 
  //               <div>
  //                 <p>Hello</p>
  //               </div>:null
  //             }
  //         {service ?
  //           <div className='container'>
  //             <div className='row'>
  //               {
  //                 servicedata.map((ele, ind) => {
  //                   return (
  //                     <div className="col-md-3 col-6" key={ind}>
  //                       <article className="blog-post">
  //                         <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
  //                         <Link href={`${ele.uri}`} className="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
  //                         <div className="content">
  //                           {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
  //                           <p>Location : {ele.jobsFeatures.location}</p> */}
  //                           <span className="text-muted">{ele.date}</span>
  //                         </div>
  //                       </article>
  //                     </div>
  //                   )
  //                 })
  //               }
  //             </div>
  //           </div>
  //           : null}
  //         <div>
  //           {jobs ?
  //             <div className='container'>
  //               <div className='row'>
  //                 {
  //                   jobdata.map((ele, ind) => {
  //                     return (
  //                       <div className="col-md-3 col-6" key={ind}>
  //                         <article className="blog-post">
  //                           <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
  //                           <Link href={`${ele.uri}`} className="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
  //                           <div className="content">
  //                             {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
  //                   <p>Location : {ele.jobsFeatures.location}</p> */}
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
  //         </div>

  //         <div>
  //           {automobiles ?
  //             <div className='container'>
  //               <div className='row'>
  //                 {
  //                   automobiledata.map((ele, ind) => {
  //                     return (
  //                       <div class="col-md-3 col-6" key={ind}>
  //                         <article class="blog-post">
  //                           <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
  //                           <Link href={`${ele.uri}`} class="tag" style={{ textTransform: "uppercase", marginLeft: "30px" }}><i>{ele.title}</i></Link>
  //                           <div class="content">
  //                             {/* <p>Qualification : <span style={{ fontWeight: "bold" }}>{ele.jobsFeatures.qualification}</span></p>
  //                            <p>Location : {ele.jobsFeatures.location}</p> */}
  //                             <span class="text-muted">{ele.date}</span>
  //                           </div>
  //                         </article>
  //                       </div>
  //                     )
  //                   })
  //                 }
  //               </div>
  //             </div>
  //             : null}
  //         </div>
  //       </div>
  //     </div>

  //   </div>    </div>
  //   <div className="col-xl-3 col-lg-4 col-md-12"> 
  //   <Advtsmall></Advtsmall>
  //   <Filterproperty></Filterproperty>
  //   </div></div></div>

  //  </Format>
  // )
}
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