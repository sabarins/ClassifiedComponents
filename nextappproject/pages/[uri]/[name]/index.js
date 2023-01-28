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



  // Job Category

  // For Job category storing subcategory name and slug.
  let obj = [];

  // it will store default name  
  let namearr = [];
  // it is for storing only unique elements for name in array
  let arr2 = [];

  //same as creating the slug for store default slug
  let slug = [];
  // it is for storing only unique elements for slug
  let slugarr = [];


  jobss.forEach((item) => {
    item.categories.nodes.forEach((el) => {
      namearr.push(el.name);
      slug.push(el.slug);
    })
  });
  let newarr = new Set(namearr);
  let newarr2 = new Set(slug);
  newarr.forEach((ele) => {
    arr2.push(ele);
  })
  newarr2.forEach((el) => {
    slugarr.push(el);
  })
  arr2.forEach((elem, ind) => {
    obj.push({ lname: elem, slug: slugarr[ind] });
  })
  console.log(obj);

  // Property category

  // For Property category storing subcategory name and slug.
  let propertyobj = [];

  // it will store default name  
  let propnamearr = [];
  // it is for storing only unique elements for name in array
  let proparr2 = [];

  //same as creating the slug for store default slug
  let propslug = [];
  // it is for storing only unique elements for slug
  let propslugarr = [];
  properties.forEach((item) => {
    item.categories.nodes.forEach((el) => {
      propnamearr.push(el.name);
      propslug.push(el.slug);
    })
  });

  let propnewarr = new Set(propnamearr);
  let propnewarr2 = new Set(propslug);


  propnewarr.forEach((ele) => {
    proparr2.push(ele);
  })

  propnewarr2.forEach((el) => {
    propslugarr.push(el);
  })

  proparr2.forEach((elem, ind) => {
    propertyobj.push({ lname: elem, slug: propslugarr[ind] });
  })


  // ElectronicaAnd Applicances category

  // For Property category storing subcategory name and slug.
  let electappobj = [];

  // it will store default name  
  let electrnamearr = [];
  // it is for storing only unique elements for name in array
  let electarr2 = [];

  //same as creating the slug for store default slug
  let electslug = [];
  // it is for storing only unique elements for slug
  let electslugarr = [];
  electrandap.forEach((item) => {
    item.categories.nodes.forEach((el) => {
      electrnamearr.push(el.name);
      electslug.push(el.slug);
    })
  });

  let electrnewarr = new Set(electrnamearr);
  let electrnewarr2 = new Set(electslug);


  electrnewarr.forEach((ele) => {
    electarr2.push(ele);
  })

  electrnewarr2.forEach((el) => {
    electslugarr.push(el);
  })

  electarr2.forEach((elem, ind) => {
    electappobj.push({ lname: elem, slug: electslugarr[ind] });
  })


  // Astrology category

  // For Property category storing subcategory name and slug.
  let astrologyobj = [];

  // it will store default name  
  let astrologynamearr = [];
  // it is for storing only unique elements for name in array
  let astrologyarr2 = [];

  //same as creating the slug for store default slug
  let astrologyslug = [];
  // it is for storing only unique elements for slug
  let astrologyslugarr = [];
  astrology.forEach((item) => {
    item.categories.nodes.forEach((el) => {
      astrologynamearr.push(el.name);
      astrologyslug.push(el.slug);
    })
  });

  let astrologynewarr = new Set(astrologynamearr);
  let astrologynewarr2 = new Set(astrologyslug);


  astrologynewarr.forEach((ele) => {
    astrologyarr2.push(ele);
  })

  astrologynewarr2.forEach((el) => {
    astrologyslugarr.push(el);
  })

  astrologyarr2.forEach((elem, ind) => {
    astrologyobj.push({ lname: elem, slug: astrologyslugarr[ind] });
  })

 // Service category

  // For Property category storing subcategory name and slug.
  let serviceobj = [];

  // it will store default name  
  let servicenamearr = [];
  // it is for storing only unique elements for name in array
  let servicearr2 = [];

  //same as creating the slug for store default slug
  let serviceslug = [];
  // it is for storing only unique elements for slug
  let serviceslugarr = [];
  services.forEach((item) => {
    item.categories.nodes.forEach((el) => {
      servicenamearr.push(el.name);
      serviceslug.push(el.slug);
    })
  });

  let servicenewarr = new Set(servicenamearr);
  let servicenewarr2 = new Set(serviceslug);


  servicenewarr.forEach((ele) => {
    servicearr2.push(ele);
  })

  servicenewarr2.forEach((el) => {
    serviceslugarr.push(el);
  })

  servicearr2.forEach((elem, ind) => {
    serviceobj.push({ lname: elem, slug: serviceslugarr[ind] });
  })

  // Automobiles category

  // For Property category storing subcategory name and slug.
  let automobileobj = [];

  // it will store default name  
  let automobilenamearr = [];
  // it is for storing only unique elements for name in array
  let automobilearr2 = [];

  //same as creating the slug for store default slug
  let automobileslug = [];
  // it is for storing only unique elements for slug
  let automobileslugarr = [];
  automobiless.forEach((item) => {
    item.categories.nodes.forEach((el) => {
      automobilenamearr.push(el.name);
      automobileslug.push(el.slug);
    })
  });

  let automobilenewarr = new Set(automobilenamearr);
  let automobilenewarr2 = new Set(automobileslug);


  automobilenewarr.forEach((ele) => {
    automobilearr2.push(ele);
  })

  automobilenewarr2.forEach((el) => {
    automobileslugarr.push(el);
  })

  automobilearr2.forEach((elem, ind) => {
    automobileobj.push({ lname: elem, slug: automobileslugarr[ind] });
  })

  console.log(electrandap, jobss);


  let [automobiles, setAutomobiles] = useState(false);

  let [service, setService] = useState(false);

  let [jobs, setJobs] = useState(false);

  let [property, setProperty] = useState(false);

  let [electroandapp, setElectroandapp] = useState(false);

  let [astrologies, setAstrologies] = useState(false);

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
                                    <Image alt="img" src={dummyImage} />
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

                {/* Filter Component */}

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
                                  automobileobj.map((el) => {
                                    console.log(el);
                                    return (
                                      <div>
                                        <a href={`${el.slug}`} className="text-dark">

                                          <label className="custom-control form-checkbox mb-3">
                                            <i className="bx bx-minus mx-1" />{el.lname} <span className="label label-secondary float-end">14</span>
                                          </label>
                                        </a>
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
                                  serviceobj.map((el) => {
                                    console.log(el);
                                    return (
                                      <div>
                                        <a href={`${el.slug}`} className="text-dark">

                                          <label className="custom-control form-checkbox mb-3">
                                            <i className="bx bx-minus mx-1" />{el.lname} <span className="label label-secondary float-end">14</span>
                                          </label>
                                        </a>
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
                                  obj.map((el) => {
                                    console.log(el);
                                    return (
                                      <div>
                                        <a href={`${el.slug}`} className="text-dark">

                                          <label className="custom-control form-checkbox mb-3">
                                            <i className="bx bx-minus mx-1" />{el.lname} <span className="label label-secondary float-end">14</span>
                                          </label>
                                        </a>
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
                                  electappobj.map((el) => {
                                    console.log(el);
                                    return (
                                      <div>
                                        <a href={`${el.slug}`}  className="text-dark">

                                          <label className="custom-control form-checkbox mb-3">
                                            <i className="bx bx-minus mx-1" />{el.lname} <span className="label label-secondary float-end">14</span>
                                          </label>
                                        </a>
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
                                  propertyobj.map((el) => {
                                    console.log(el);
                                    return (
                                      <div>
                                        <a href={`${el.slug}`}  className="text-dark">

                                          <label className="custom-control form-checkbox mb-3">
                                            <i className="bx bx-minus mx-1" />{el.lname} <span className="label label-secondary float-end">14</span>
                                          </label>
                                        </a>
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
                                  astrologyobj.map((el) => {
                                    console.log(el);
                                    return (
                                      <div>
                                        <a href={`${el.slug}`} className="text-dark">

                                          <label className="custom-control form-checkbox mb-3">
                                            <i className="bx bx-minus mx-1" />{el.lname} <span className="label label-secondary float-end">14</span>
                                          </label>
                                        </a>
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




