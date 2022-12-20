import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';


export default function AllCtegoriescards({allcategorydata,amdata,servicedata}) {

  const router = useRouter();

  console.log(router);

    const str = allcategorydata.allJobs.nodes;

    const automobiledata = amdata.nodes;

    const servicesdata = servicedata.nodes;
   
    console.log(servicesdata);

   let [jobsdata,setJobsdata] = useState(str);

   let [automobilesdata,setAutomobilesdata] = useState(automobiledata);

   let [servicesdatas,setServicesdata] = useState(servicesdata);

   let [allcategorydatas,setAllcategorydatas] = useState([]);

   useEffect(()=>
   {

    let cpy = [...jobsdata,...automobilesdata,...servicesdatas];
    setAllcategorydatas(cpy);

    // let cpy2 = [...allcategorydatas,automobilesdata];

    // setAllcategorydatas(...cpy,...cpy2);


   },[]);

   console.log(allcategorydatas);


  return (
    <div>
      <p onClick={()=>{router.push(`/`)}}>Hello</p>
        <div class="container">
          <div class="row">
            {
              allcategorydatas.map((ele,ind) => {
                if(ele.__typename==="Jobs")
                {
                    return (
                        <div class="col-md-3 col-6" key={ind}>
                          <article class="blog-post">
                            <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
                            <Link href={`${ele.uri}`} class="tag" style={{textTransform:"uppercase",marginLeft:"30px"}}><i>{ele.title}</i></Link>
                            <div class="content">
                              <p>Qualification : <span style={{fontWeight:"bold"}}>{ele.jobsFeatures.qualification}</span></p>
                              <p>Location : {ele.jobsFeatures.location}</p>
                              <span class="text-muted">{ele.date}</span>
                            </div>
                          </article>
                        </div>
                      )
                }
                else
                {
                    return (
                        <div class="col-md-3 col-6" key={ind}>
                          <article class="blog-post">
                            <img alt="jobimg" src="https://apollo-singapore.akamaized.net/v1/files/6u4rj8ixy3c31-IN/image;s=300x600;q=60" />
                            <Link href={`${ele.uri}`} class="tag" style={{textTransform:"uppercase",marginLeft:"30px"}}><i>{ele.title}</i></Link>
                            <div class="content">
                              <span class="text-muted">{ele.date}</span>
                            </div>
                          </article>
                        </div>
                      )
                }
                
              })
            }
          </div>
        </div>
    </div>
  )
}
