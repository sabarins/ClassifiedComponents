import { gql } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import client from '../../client';
import Advtsmall from '../Components/advtsmall';
import Format from '../layout/Format';


import dummyImage from '/public/img/dummy.png';



export default function LocationPage({ alldatas }) {
    console.log(alldatas);

    const router = useRouter();
    let astrolocation = alldatas.allAstrology.nodes;
    let joblocation = alldatas.allJobs.nodes;
    let propertylocation = alldatas.allProperties.nodes;
    let servicelocation = alldatas.allServices.nodes;
    let electrlocation = alldatas.allElectronicsAndAppliances.nodes;
    let automobilelocation = alldatas.automobiles.nodes;

    let getlocatname = router.query.locationame.charAt(0).toUpperCase() + router.query.locationame.slice(1).toLowerCase();

    console.log(getlocatname);
    return (

        <Format>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-xl-9 col-lg-8 col-md-12">
                        <div className='row relative'>
                            {
                                astrolocation.map((ele, ind) => {
                                    if (getlocatname === ele.astrofeatures.location) {
                                        return (
                                            <div class="col-md-4 col-6" key={ind}>
                                                <article className="blog-post">
                                                    <a href={`${ele.uri}/${ele.id}`}>
                                                        <Image alt="jobimg" src={dummyImage} />
                                                        <small>{ele.date}</small>
                                                        <div className="content">
                                                            <h5>{ele.title}</h5>
                                                            <p>Location : {ele.astrofeatures.location}</p>
                                                            <span style={{ fontWeight: "bold" }}>{ele.__typename}</span>
                                                        </div>
                                                    </a>
                                                </article>
                                            </div>
                                        )
                                    }
                                })
                            }
                            {
                                joblocation.map((ele, ind) => {
                                    if (getlocatname === ele.jobfeatures.location) {
                                        return (
                                            <div className="col-md-4 col-6" key={ind}>
                                                <article className="blog-post">
                                                    <a href={`${ele.uri}/${ele.id}`}>
                                                        <Image alt="jobimg" src={dummyImage} />
                                                        <small>{ele.date}</small>
                                                        <div className="content">
                                                            <h5>{ele.title}</h5>
                                                            <p>Location : {ele.jobfeatures.location}</p>
                                                            <span style={{ fontWeight: "bold" }}>{ele.__typename}</span>
                                                        </div>
                                                    </a>
                                                </article>
                                            </div>
                                        )
                                    }
                                })
                            }
                            {
                                propertylocation.map((ele, ind) => {
                                    if (getlocatname === ele.propertyfeatures.location) {
                                        return (
                                            <div className="col-md-4 col-6" key={ind}>
                                                <article className="blog-post">
                                                    <a href={`${ele.uri}/${ele.id}`}>
                                                        <Image alt="jobimg" src={dummyImage} />
                                                        <small>{ele.date}</small>
                                                        <div className="content">
                                                            <h5>{ele.title}</h5>
                                                            <p>Location : {ele.propertyfeatures.location}</p>
                                                            <span style={{ fontWeight: "bold" }}>{ele.__typename}</span>
                                                        </div>
                                                    </a>
                                                </article>
                                            </div>
                                        )
                                    }
                                })
                            }
                            {
                                servicelocation.map((ele, ind) => {
                                    if (getlocatname === ele.servicefeatures.location) {
                                        return (
                                            <div className="col-md-4 col-6" key={ind}>
                                                <article className="blog-post">
                                                    <a href={`${ele.uri}/${ele.id}`}>
                                                        <Image alt="jobimg" src={dummyImage} />
                                                        <small>{ele.date}</small>
                                                        <div className="content">
                                                            <h5>{ele.title}</h5>
                                                            <p>Location : {ele.servicefeatures.location}</p>
                                                            <span style={{ fontWeight: "bold" }}>{ele.__typename}</span>
                                                        </div>
                                                    </a>
                                                </article>
                                            </div>
                                        )
                                    }
                                })
                            }
                            {
                                electrlocation.map((ele, ind) => {
                                    if (getlocatname === ele.eleandappfeatures.location) {
                                        return (
                                            <div className="col-md-4 col-6" key={ind}>
                                                <article className="blog-post">
                                                    <a href={`${ele.uri}/${ele.id}`}>
                                                        <Image alt="jobimg" src={dummyImage} />
                                                        <small>{ele.date}</small>
                                                        <div className="content">
                                                            <h5>{ele.title}</h5>
                                                            <p>Location : {ele.eleandappfeatures.location}</p>
                                                            <span style={{ fontWeight: "bold" }}>{ele.__typename}</span>
                                                        </div>
                                                    </a>
                                                </article>
                                            </div>
                                        )
                                    }
                                })
                            }
                            {
                                automobilelocation.map((ele, ind) => {
                                    if (getlocatname === ele.automobfeatures.location) {
                                        return (
                                            <div className="col-md-4 col-6" key={ind}>
                                                <article className="blog-post">
                                                    <a href={`${ele.uri}/${ele.id}`}>
                                                        <Image alt="jobimg" src={dummyImage} />
                                                        <small>{ele.date}</small>
                                                        <div className="content">
                                                            <h5>{ele.title}</h5>
                                                            <p>Location : {ele.automobfeatures.location}</p>
                                                            <span style={{ fontWeight: "bold" }}>{ele.__typename}</span>
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
                    <div className="col-xl-3 col-lg-4 col-md-12">
                        <Advtsmall></Advtsmall>
                    </div>
                </div>
            </div>
        </Format>

    )
}
export async function getServerSideProps() {

    const { data } = await client.query({
        query: gql`
        query NewQuery {
          automobiles {
            nodes {
                categories {
                    nodes {
                      name
                      uri
                      count
                    }
                  }
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
              id
            }
          }
          allServices {
            nodes {
                categories {
                    nodes {
                      name
                      uri
                      count
                    }
                  }
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
              id
            }
          }
          allElectronicsAndAppliances {
            nodes {
                categories {
                    nodes {
                      name
                      uri
                      count
                    }
                  }
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
              id
              date
            }
          }
          allProperties {
            nodes {
                categories {
                    nodes {
                      name
                      uri
                      count
                    }
                  }
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
                categories {
                    nodes {
                      name
                      uri
                      count
                    }
                  }
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
                categories {
                    nodes {
                      name
                      uri
                      count
                    }
                  }
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

    return {
        props: {
            alldatas: data,
        }
    }
}