import { gql } from '@apollo/client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import client from '../../../client';
import Format from '../../layout/Format';
import dummyImage from '../../../public/img/dummy.png'
import Filterproperty from '../../Components/filterproperty';
import Link from 'next/link';
import Advtsmall from '../../Components/advtsmall';
import Bredcrumb from '../../Components/_child/bredcrumb';




export default function subcategory({ allcdata, allcategorydata }) {
  const router = useRouter();
  console.log(router.query.uri, router.query.name);

  console.log(allcategorydata);
  let [automobile, setAutomobile] = useState(false);

  const [allcatedata, setAllcatedata] = useState([]);
  let astrology = allcategorydata.astrology2.nodes;
  let properties = allcategorydata.prop2.nodes;
  let automobiless = allcategorydata.automob2.nodes;
  let services = allcategorydata.services2.nodes;
  let electrandap = allcategorydata.electr2.nodes;
  let jobss = allcategorydata.job2.nodes;


  let getcategoryname = router.query.uri;

  console.log(electrandap, jobss);

  let [automobiles, setAutomobiles] = useState(false);

  let [service, setService] = useState(false);

  let [jobs, setJobs] = useState(false);

  let [property, setProperty] = useState(false);

  let [electroandapp, setElectroandapp] = useState(false);

  let [astrologies, setAstrologies] = useState(false);



  // useEffect(() => {
  //     let automob = alldata.automob2.nodes;
  //     let service = alldata.services2.nodes;
  //     let astrolo = alldata.astrology2.nodes;
  //     let property = alldata.prop2.nodes;
  //     let jobs = alldata.job2.nodes;
  //     let elect = alldata.electr2.nodes;

  //     let cpys = [...automob, ...service, ...astrolo, ...property, ...jobs, ...elect];
  //     setAllcatedata(cpys);

  // }, [])

  let [categoryname, setCategoryname] = useState(getcategoryname);


  useEffect(() => {
    if (allcategorydata.allServices.nodes.length > 0) {
      setAllcatedata(allcategorydata.allServices.nodes);
    }
    else if (allcategorydata.allProperties.nodes.length > 0) {
      setAllcatedata(allcategorydata.allProperties.nodes);
    }
    else if (allcategorydata.allAstrology.nodes.length > 0) {
      setAllcatedata(allcategorydata.allAstrology.nodes);
    }
    else if (allcategorydata.allJobs.nodes.length > 0) {
      setAllcatedata(allcategorydata.allJobs.nodes);
    }
    else if (allcategorydata.allElectronicsAndAppliances.nodes.length > 0) {
      setAllcatedata(allcategorydata.allElectronicsAndAppliances.nodes);
    }
    else if (allcategorydata.automobiles.nodes.length > 0) {
      setAllcatedata(allcategorydata.automobiles.nodes);
    }

    if (router.query.uri === "automobile") {
      setAutomobile(true);
    }


    if (categoryname === "service") {
      setService(true);
    }
    else if (categoryname === "jobs") {
      setJobs(true);
    }
    else if (categoryname === "automobile") {
      setAutomobiles(true);
    }
    else if (categoryname === "electronicandapplian") {
      setElectroandapp(true);
    }
    else if (categoryname === "astrology") {
      setAstrologies(true);
    }
    else if (categoryname === "properties") {
      setProperty(true);
    }
  })

  console.log(allcatedata);
  return (
    <div>
      <Format>
        <Bredcrumb></Bredcrumb>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-8 col-md-12">
                {
                  router.query.name ?
                    <div>
                      <div className='row position-relative mt-3'>
                        {
                          allcatedata.map((ele, ind) => {
                            return (
                              <div className="col-md-4 col-6" key={ind}>
                                <article className="blog-post">
                                  <a href={`${ele.uri}${ele.id}`}>
                                    <Image alt="jobimg" src={dummyImage} />
                                    <small>{ele.date}</small>
                                    <div className="content">
                                      <h5>{ele.title}</h5>
                                     
                                    </div>
                                  </a>
                                </article>
                              </div>
                            )
                          })
                        }
                      </div>

                    </div> : null
                }
              </div>
              <div className="col-xl-3 col-lg-4 col-md-12">
                <Advtsmall></Advtsmall>
                <div className="accordion-item px-3 py-2 mb-3">
                  <Link href="/">
                    <div className="d-flex">

                      <div className="flex-grow-1"> <i className="bx bx-category mx-1 text-brand"></i> All Categories </div>
                      <div><i className="bx bx-right-arrow-alt mx-1 text-brand"></i></div>

                    </div>
                  </Link>

                </div>

                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <i class="bx bx-buildings mx-1 text-brand"></i> {router.query.uri.charAt(0).toUpperCase() + router.query.uri.slice(1).toLowerCase()}
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body">
                        <div className="filter-product-checkboxs">
                          {
                            automobiles ?
                              <div>
                                {
                                  automobiless.map((ele, ind) => {
                                    console.log(ele.categories.nodes);
                                    return (
                                      <div>
                                        {
                                          ele.categories.nodes.map((e) => {

                                            var c = 0;
                                            console.log(c);


                                            return (
                                              <div>
                                                <a href={`${e.slug}`} onClick={() => { console.log("count") }} className="text-dark">
                                                  <label className="custom-control form-checkbox mb-3">
                                                    <i className="bx bx-minus mx-1" /> {e.name} <span className="label label-secondary float-end">14</span>
                                                  </label>
                                                </a>
                                              </div>
                                            )
                                          }
                                          )
                                        }
                                      </div>
                                    )
                                  })
                                }
                              </div> : null
                          }
                          {
                            service ?
                              <div>
                                {
                                  services.map((ele, ind) => {
                                    console.log(ele.categories.nodes.slice(1, 2));
                                    return (
                                      <div>
                                        {
                                          ele.categories.nodes.map((e) => {

                                            console.log(e.name)
                                            return (
                                              <div>
                                                <a href={`${e.slug}`} className="text-dark">
                                                  <label className="custom-control form-checkbox mb-3">
                                                    <i className="bx bx-minus mx-1" /> {e.name} <span className="label label-secondary float-end">14</span>
                                                  </label>
                                                </a>
                                              </div>
                                            )
                                          })
                                        }
                                      </div>
                                    )
                                  })
                                }

                              </div> : null
                          }
                          {
                            jobs ?
                              <div>
                                {
                                  jobss.map((ele, ind) => {
                                    console.log(ele.categories.nodes.slice(1, 2));
                                    return (
                                      <div>
                                        {
                                          ele.categories.nodes.map((e) => {

                                            console.log(e.name)
                                            return (
                                              <div>
                                                <a href={`${e.slug}`} className="text-dark">
                                                  <label className="custom-control form-checkbox mb-3">
                                                    <i className="bx bx-minus mx-1" /> {e.name} <span className="label label-secondary float-end">14</span>
                                                  </label>
                                                </a>
                                              </div>
                                            )

                                          })
                                        }
                                      </div>
                                    )
                                  })
                                }

                              </div> : null
                          }
                          {
                            electroandapp ?
                              <div>
                                {
                                  electrandap.map((ele, ind) => {
                                    console.log(ele);
                                    return (
                                      <div>
                                        {
                                          ele.categories.nodes.map((e) => {
                                            console.log(e.slug)
                                            return (
                                              <div>
                                                <a href={`${e.slug}`} className="text-dark">
                                                  <label className="custom-control form-checkbox mb-3">
                                                    <i className="bx bx-minus mx-1" /> {e.name} <span className="label label-secondary float-end">14</span>
                                                  </label>
                                                </a>
                                              </div>
                                            )

                                          })
                                        }
                                      </div>
                                    )
                                  })
                                }

                              </div> : null
                          }
                          {
                            property ?
                              <div>
                                {
                                  properties.map((ele, ind) => {
                                    console.log(ele.categories.nodes.slice(1, 2));
                                    return (
                                      <div>
                                        {
                                          ele.categories.nodes.map((e) => {

                                            console.log(e.name)
                                            return (
                                              <div>
                                                <a href={`${e.slug}`} className="text-dark">
                                                  <label className="custom-control form-checkbox mb-3">
                                                    <i className="bx bx-minus mx-1" /> {e.name} <span className="label label-secondary float-end">14</span>
                                                  </label>
                                                </a>
                                              </div>
                                            )

                                          })
                                        }
                                      </div>
                                    )
                                  })
                                }
                              </div> : null
                          }
                          {
                            astrologies ?
                              <div>
                                {
                                  astrology.map((ele, ind) => {
                                    console.log(ele.categories.nodes.slice(1, 2));
                                    return (
                                      <div>
                                        {
                                          ele.categories.nodes.map((e) => {

                                            console.log(e.name)
                                            return (
                                              <div>
                                                <a href={`${e.slug}`} className="text-dark">
                                                  <label className="custom-control form-checkbox mb-3">
                                                    <i className="bx bx-minus mx-1" /> {e.name} <span className="label label-secondary float-end">14</span>
                                                  </label>
                                                </a>
                                              </div>
                                            )

                                          })
                                        }
                                      </div>
                                    )
                                  })
                                }

                              </div> : null
                          }

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="innerlistingspanelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <i className="bx bx-current-location mx-1 text-brand" /> Locations
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body">
                        <i className="bx bx-minus mx-1 text-brand" />  Chennai
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <i className="bx bx-filter-alt mx-1 text-brand" /> Budget
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body p-2">
                        <div className="text-muted"> Choose a range below</div>

                        <div className="input-group">
                          <input type="number" className="form-control" placeholder="Min" aria-label="Min" />
                          <span className="input-group-text border-0"> to </span>
                          <input type="number" className="form-control" placeholder="Max" aria-label="Max" />
                          <button className="btn border-0 btn-sm btn-brand btn-outline-secondary" type="button" id="button-addon2">Button</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* {
                        automobile ?
                        <div>
                            <Filterproperty alldata={allcategorydata}></Filterproperty>
                        </div>:null
                       } */}



      </Format>
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log("seuri", context.query.name);
  const { data } = await client.query({
    query: gql
      `
        query myquery{
            
       automobiles(where: {categoryName: "${context.query.name}" }) {
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
                  slug
                  uri
                }
              }
              title
              uri
              date
              id
            }
          }
         allJobs(where: {categoryName: "${context.query.name}"}) {
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
              id
            }
          }
          allServices(where: {categoryName: "${context.query.name}"}) {
            nodes {
              categories {
                nodes {
                  id
                  name
                  slug
                  uri
                }
              }
              servicefeatures {
                address
                alternateContactNumber
                contactNumber
                description
                location
                price
                sqft
              }
              uri 
              id
              title
              date
            }
          }
          allAstrology(where: {categoryName: "${context.query.name}"}) {
            nodes {
              astrofeatures {
                address
                alternateContactNumber
                contactNumber
                description
                fieldGroupName
                location
              }
              id
              title
              uri
              date
              categories {
                nodes {
                  name
                  uri
                  slug
                }
              }
            }
          }
          allProperties(where: {categoryName: "${context.query.name}"}) {
            nodes {
              categories {
                nodes {
                  name
                  slug
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
         allElectronicsAndAppliances(where: {categoryName: "${context.query.name}"}) {
            nodes {
              categories {
                nodes {
                  name
                  slug
                }
              }
              uri
              id
              title
              date
              eleandappfeatures {
                address
                alternateContactNumber
                contactNumber
                description
                location
              }
            }
          }
          automob2:automobiles {
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
                  slug
                  uri
                }
              }
              title
              uri
              date
              slug
            }
          }
          job2:allJobs {
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
          services2:allServices {
            nodes {
              categories {
                nodes {
                  id
                  name
                  uri
                  slug
                }
              }
              servicefeatures {
                address
                alternateContactNumber
                contactNumber
                description
                location
                price
                sqft
              }
              uri 
              title
              date
            }
          }
          astrology2:allAstrology {
            nodes {
              astrofeatures {
                address
                alternateContactNumber
                contactNumber
                description
                fieldGroupName
                location
              }
              id
              title
              uri
              categories {
                nodes {
                  name
                  slug
                  uri
                }
              }
            }
          }
          prop2:allProperties {
            nodes {
              categories {
                nodes {
                  name
                  slug
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
                location
                price
                priceTo
                sqft
              }
              title
              uri
            }
          }
          electr2:allElectronicsAndAppliances {
            nodes {
              categories {
                nodes {
                  name
                  slug
                }
              }
              
              uri
              title
              eleandappfeatures {
                address
                alternateContactNumber
                contactNumber
                description
                location
              }
            }
          }
         
        
        }
        `
  });

  const { data2 } = await client.query({

    query: gql
      `
            query squery{
automob2:automobiles {
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
      slug
    }
  }
  job2:allJobs {
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
  services2:allServices {
    nodes {
      categories {
        nodes {
          id
          name
          slug
          uri
        }
      }
      servicefeatures {
        address
        alternateContactNumber
        contactNumber
        description
        location
        price
        sqft
      }
      uri 
      title
    }
  }
  astrology2:allAstrology {
    nodes {
      astrofeatures {
        address
        alternateContactNumber
        contactNumber
        description
        fieldGroupName
        location
      }
      id
      title
      uri
      categories {
        nodes {
          name
          slug
          uri
        }
      }
    }
  }
  prop2:allProperties {
    nodes {
      categories {
        nodes {
          name
          slug
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
        location
        price
        priceTo
        sqft
      }
      title
      uri
    }
  }
  electr2:allElectronicsAndAppliances {
    nodes {
      categories {
        nodes {
          name
          slug
        }
      }
      uri
      title
      eleandappfeatures {
        address
        alternateContactNumber
        contactNumber
        description
        location
      }
    }
  }
}
        `
  });
  return {
    props:
    {
      allcategorydata: data,
    }
  }

}




