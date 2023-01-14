import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import dummyImage from '/public/img/dummy.png';
import Image from 'next/image';



export default function AllCtegoriescards({ alljobsdata, jobfeature, amdata, servicedata, propertydata, astrologiesdata, elecandappl }) {

  const router = useRouter();

  console.log(router);


  // const jobdata = alljobsdata.nodes;

  // const automobiledata = amdata.nodes;

  // const servicesdata = servicedata.nodes;

  // console.log(servicesdata);

  let [jobsdata, setJobsdata] = useState(alljobsdata);

  let [automobilesdata, setAutomobilesdata] = useState(amdata);

  let [servicesdatas, setServicesdata] = useState(servicedata);

  let [propertydatas, setPropertydatas] = useState(propertydata);

  let [astrologydatas, setAstrologydatas] = useState(astrologiesdata);

  let [electrandappldats, setElectrandappldats] = useState(elecandappl);



  let [allcategorydatas, setAllcategorydatas] = useState([]);

  useEffect(() => {

    let cpy = [...jobsdata, ...automobilesdata, ...servicesdatas, ...propertydatas, ...astrologydatas, ...electrandappldats];
    setAllcategorydatas(cpy);

    // let cpy2 = [...allcategorydatas,automobilesdata];

    // setAllcategorydatas(...cpy,...cpy2);


  }, []);

  console.log(allcategorydatas);


  return (
    <div>
      <div class="container">
      <div className="row">
            <div className="col-12">
                <div className="intro mt-4">
                  
                    <h2>Fresh recommendations</h2>
                   
                </div>
            </div>
        </div>

        <div class="row">
          {
            allcategorydatas.map((ele, ind) => {
              if (ele.__typename === "Jobs") {
                return (
                  <div class="col-md-3 col-6" key={ind}>
                    <article class="blog-post">
                      <a href={`${ele.uri}${ele.id}`}>
                        <Image alt="jobimg" src={dummyImage} />
                        <small>{ele.date}</small>
                        <div class="content">
                          <h5>{ele.title}</h5>
                          {/* <p>Qualification : <b style={{fontWeight:"bold"}}>{ele.jobsFeatures.qualification}</b></p> */}
                          <p>Location : {ele.jobfeatures.location}</p>
                          <span style={{ fontWeight: "bold" }}>Jobs</span>
                          {/* <span style={{fontWeight:"bold"}} class="text-muted">{ele.date}</span> */}
                        </div>
                      </a>
                    </article>
                  </div>
                )
              }
              else if (ele.__typename === "Automobile") {
                return (
                  <div class="col-md-3 col-6" key={ind}>
                    <article class="blog-post">
                      <a href={`${ele.uri}${ele.id}`}>
                        <Image alt="jobimg" src={dummyImage} />
                        <small>{ele.date}</small>
                        <div class="content">
                          <h5>{ele.title}</h5>
                          <p>Location : {ele.automobfeatures.location}</p>
                          <span style={{ fontWeight: "bold" }}>Automobiles</span>
                        </div>
                      </a>
                    </article>
                  </div>
                )
              }
              else if (ele.__typename === "Services") {
                return (
                  <div class="col-md-3 col-6" key={ind}>
                    <article class="blog-post">
                      <a href={`${ele.uri}${ele.id}`}>
                        <Image alt="jobimg" src={dummyImage} />
                        <small>{ele.date}</small>
                        <div class="content">
                          <h5>{ele.title}</h5>
                          <span style={{ fontWeight: "bold" }}>Services</span>
                        </div>
                      </a>
                    </article>
                  </div>
                )
              }
              else if (ele.__typename === "Properties") {
                return (
                  <div class="col-md-3 col-6" key={ind}>
                    <article class="blog-post">
                      <a href={`${ele.uri}${ele.id}`}>
                        <Image alt="jobimg" src={dummyImage} />
                        <small>{ele.date}</small>
                        <div class="content">
                          <h5>{ele.title}</h5>
                          <span style={{ fontWeight: "bold" }}>Properties</span>
                        </div>
                      </a>
                    </article>
                  </div>
                )
              }
              else if (ele.__typename === "Astrology") {
                return (
                  <div class="col-md-3 col-6" key={ind}>
                    <article class="blog-post">
                      <a href={`${ele.uri}${ele.id}`}>
                        <Image alt="jobimg" src={dummyImage} />
                        <small>{ele.date}</small>
                        <div class="content">
                          <h5>{ele.title}</h5>
                          <span style={{ fontWeight: "bold" }}>Astrology</span>
                        </div>
                      </a>
                    </article>
                  </div>
                )
              }
              else if (ele.__typename === "ElectronicsAndAppliances") {
                return (
                  <div class="col-md-3 col-6" key={ind}>
                    <article class="blog-post">
                      <a href={`${ele.uri}${ele.id}`}>
                        <Image alt="jobimg" src={dummyImage} />
                        <small>{ele.date}</small>
                        <div class="content">
                          <h5>{ele.title}</h5>
                          <span style={{ fontWeight: "bold" }}>ElectronicsAndAppliances</span>
                        </div>
                      </a>
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
