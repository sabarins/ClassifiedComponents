
import { gql } from "@apollo/client";
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import client from "../../client";


export default function filterproperty({ subcategory, alldata }) {

  console.log(subcategory, alldata);

  const router = useRouter();

  let astrology = alldata.allAstrology.nodes;
  let properties = alldata.allProperties.nodes;
  let automobiless = alldata.automobiles.nodes;
  let services = alldata.allServices.nodes;
  let electrandap = alldata.allElectronicsAndAppliances.nodes;
  let jobss = alldata.allJobs.nodes;

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
  let automobilecount = [];
  // it is for storing only unique elements for slug
  let automobileslugarr = [];
  automobiless.forEach((item) => {
    item.categories.nodes.forEach((el) => {
      automobilenamearr.push(el.name);
      automobileslug.push(el.slug);
      automobilecount.push(el.count);
    })
  });

  let automobilenewarr = new Set(automobilenamearr);
  let automobilenewarr2 = new Set(automobileslug);
  let automobilenewarr3 = new Set(automobilecount);


  automobilenewarr.forEach((ele) => {
    automobilearr2.push(ele);
  })

  automobilenewarr2.forEach((el) => {
    automobileslugarr.push(el);
  })

  automobilearr2.forEach((elem, ind) => {
    automobileobj.push({ lname: elem, slug: automobileslugarr[ind], count: automobilecount});
  })

  console.log(automobilecount)
  // Following are Usestate() 
  let getcategoryname = router.query.uri;

  console.log(getcategoryname);

  let [automobiles, setAutomobiles] = useState(false);

  let [service, setService] = useState(false);

  let [jobs, setJobs] = useState(false);

  let [property, setProperty] = useState(false);

  let [electroandapp, setElectroandapp] = useState(false);

  let [astrologies, setAstrologies] = useState(false);



  let [allsubcategoriesdata, setAllsubcategoriesdata] = useState([]);

  console.log(router.query.uri, router.query.name);

  useEffect(() => {

    // setAllsubcategoriesdata([...astrology, ...properties, ...automobiless, ...services, ...electrandap, ...jobss])
    if (getcategoryname === "automobile") {
      setAutomobiles(true);
    }
    else if (getcategoryname === "service") {
      setService(true);
    }
    else if (getcategoryname === "jobs") {
      setJobs(true);
    }
    else if (getcategoryname === "electronicandapplian") {
      setElectroandapp(true);
    }
    else if (getcategoryname === "properties") {
      setProperty(true);
    }
    else if (getcategoryname === "astrology") {
      setAstrologies(true);
    }
  }, [])

  console.log(allsubcategoriesdata);
  console.log(router.query.uri);

  return (
    <div>

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

                {/* {
                  
                } */}

                {
                  automobiles ?
                    <div>
                      {
                        automobileobj.map((el) => {
                          console.log(el);
                          return (
                            <div>
                              <a href={`${router.query.uri}` + "/" + `${el.slug}`} className="text-dark">

                                <label className="custom-control form-checkbox mb-3">
                                  <i className="bx bx-minus mx-1" />{el.lname} <span className="label label-secondary float-end">{el.count}</span>
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
                              <a href={`${router.query.uri}` + "/" + `${el.slug}`} onClick={() => { console.log("count") }} className="text-dark">

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
                              <a href={`${router.query.uri}` + "/" + `${el.slug}`} onClick={() => { console.log("count") }} className="text-dark">

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
                              <a href={`${router.query.uri}` + "/" + `${el.slug}`} onClick={() => { console.log("count") }} className="text-dark">

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
                              <a href={`${router.query.uri}` + "/" + `${el.slug}`} onClick={() => { console.log("count") }} className="text-dark">

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
                              <a href={`${router.query.uri}` + "/" + `${el.slug}`} onClick={() => { console.log("count") }} className="text-dark">

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
  )
}

// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query NewQuery {
//        pages {
//          nodes
//          {
//             title
//             uri
//           }
//         }
//       }
// `
//   });

//   return {
//     props: {
//       user: data,
//     }
//   }
// }