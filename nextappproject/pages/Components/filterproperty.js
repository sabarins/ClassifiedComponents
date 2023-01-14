
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


  let getcategoryname = router.query.uri;

  console.log(getcategoryname);

  let [automobiles, setAutomobiles] = useState(false);

  let [service, setService] = useState(false);

  let [jobs, setJobs] = useState(false);

  let [property, setProperty] = useState(false);

  let [electroandapp, setElectroandapp] = useState(false);

  let [astrologies, setAstrologies] = useState(false);



  let [allsubcategoriesdata, setAllsubcategoriesdata] = useState([]);

  console.log(router.query.uri,router.query.name);

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
                                        <a href={`${router.query.uri}`+"/"+`${e.slug}`} onClick={()=>{console.log("count")}} className="text-dark">
                                          <label className="custom-control form-checkbox mb-3">
                                            <i className="bx bx-minus mx-1" /> {e.name} <span className="label label-secondary float-end">14</span>
                                          </label>
                                        </a>
                                      </div>
                                    )
                                  }
                                

                                )}

                            </div>
                          )
                                })
                              }
                              </div>:null                     
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
                                      <a href={`${router.query.uri}`+"/"+`${e.slug}`} className="text-dark">
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
                                      <a href={`${router.query.uri}`+"/"+`${e.slug}`} className="text-dark">
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
                          console.log(ele.categories.nodes.slice(1, 2));
                          return (
                            <div>
                              {
                                ele.categories.nodes.map((e) => {

                                  console.log(e.name)
                                  return (
                                    <div>
                                      <a href={`${router.query.uri}`+"/"+`${e.slug}`} className="text-dark">
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
                                      <a href={`${router.query.uri}`+"/"+`${e.slug}`} className="text-dark">
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
                                      <a href={`${router.query.uri}`+"/"+`${e.slug}`} className="text-dark">
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