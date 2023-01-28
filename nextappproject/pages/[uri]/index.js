import Filterproperty from "../Components/filterproperty"
import Advtsmall from "../Components/advtsmall"
import client from "../../client"
import { gql } from "@apollo/client"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import Link from "next/link"
import Subcategory from "../subcategory"
import dummyImage from '../../public/img/dummy.png'
import Image from 'next/image';
import Format from "../layout/Format"
import Bredcrumb from "../Components/_child/bredcrumb"
import SubIndex from "./[name]/index";
import Filter, { checkboxvalue } from "../Components/Filter"
import Card from "../Components/card"
import React from "react"




export default function Innerlistings({ alldata, servicesubcategory, allsubcategorydata, allcategorydata, subcategorydata2,
  jobsdata, astrologydata, propertiesdata, automobilesdata, servicesdata, user, automobilecategories, subcategorydata,
  electandappl, automobilesubcategorydata, propertysubcategory, astrologysubcategorydata, electrsubcategory }) {

  console.log(subcategorydata);
  console.log(allcategorydata);

  const jobdata = jobsdata.nodes;
  let automobiledata = automobilesdata.nodes;

  const servicedata = servicesdata.nodes;
  const [autoLocation, setAutoLocation] = useState([]);

  let arr2 = [];

  const getlocation = () => {
    automobiledata.map((ele) => {
      arr2.push(ele.automobfeatures.location);
    })
  }

  console.log(arr2);
  const valueCase = (automobiledata) => {
    automobiledata.filter((element, index) => {
      return element.automobfeatures.location.indexOf(element) === index;
      // arr2.([new Set([ele.automobfeatures.location])])
    })
  }
  console.log(valueCase(automobiledata))



  let arr = [];

  let duplicates;

  let location1 = automobiledata.map((element, index) => {
    arr.push(element.automobfeatures.location);
  })

  let location2 = automobiledata.map((element, index) => {
    arr2.push(element.automobfeatures.location);
  })

  let newarr = [];
  automobiledata.forEach((item) => {
    newarr.push(item.automobfeatures.location)
    console.log(newarr)
  })

  let autonewarr = new Set(newarr);

  let newarr2 = [];
  autonewarr.forEach((ele) => {
    newarr2.push(ele);
  })

  console.log(autonewarr);

  function locationdata() {
    automobiledata.map((e) => {

      let array = [e.automobfeatures]

      array.map((el) => {
        let newArray = [];
        let newObj = {};
        let ar = [el];


        // ar.filter((element, index) => {
        //   return ar.location.indexOf(element) === index;

        // })

        // for (let i in ar) {
        //   console.log(new Set([ar[i].location]))
        //   let objTitle = new Set([ar[i].location])
        //   newObj[objTitle] = ar[i];
        // }
        // for (let j in newObj) {
        //   newArray.push(newObj[j]);
        // }
        console.log(newArray);
      })
    })
    // let array = [automobiledata];
    // console.log(automobiledata);
  } locationdata()

  console.log(locationdata());
  console.log(arr2);

  const router = useRouter();

  const getcategoryname = router.query.uri;

  const [service, setService] = useState(false);
  const [jobs, setJobs] = useState(false);
  const [automobiles, setAutomobiles] = useState(false);
  const [elect, setElect] = useState(false);
  const [astrology, setAstrology] = useState(false);
  const [properties, setProperties] = useState(false);



  let [categoryname, setCategoryname] = useState(getcategoryname);
  let [checkboxvalue, setCheckboxvalue] = useState([]);

  const [isChecked, setIschecked] = useState(false);

  let [checked, setChecked] = useState();

  var [checklist, setChecklist] = useState([]);

  const [checkboxValue, setCheckboxValue] = useState(false);

  const check = (e) => {
    var chbx = [...checklist];

    if (e.target.checked) {
      chbx = [...checklist, e.target.value];
    }

    setChecklist(chbx);

  }
  console.log(checklist);

  const handleCheckChange = (e) => {
    const { name, checked } = e.target;

    setCheckboxValue((prev) => {
      return {
        ...prev,
        [name]: checked
      };
    });
  };

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
    else if (categoryname === "electronicandapplian") {
      setElect(true);
    }
    else if (categoryname === "astrology") {
      setAstrology(true);
    }
    else if (categoryname === "properties") {
      setProperties(true);
    }

  }, []);

  console.log("uri:", router.query.category);

  let [getsubcategoryname, setGetsubcategoryname] = useState("");

  console.log(getsubcategoryname);
  console.log("all" + router.query.uri.charAt(0).toUpperCase() + router.query.uri.slice(1).toLowerCase());

  console.log(servicesdata.nodes && automobilesdata.nodes);

  console.log(checkboxvalue);

  return (
    <Format>
      <Bredcrumb sub={getsubcategoryname} allcategory={allcategorydata}></Bredcrumb>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8 col-md-12">
            {/* <Filter allcatdata={allcategorydata} getdata={getdatas}  ></Filter> */}
            <div className="row mt-4">
              <div className="col-12 ">
                <div className="blog-post ">
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <div className="p-2 rounded checkbox-form">
                        <div className="form-check">
                          <input className="form-check-input"
                            type="checkbox"
                            value="Chennai"
                            onClick={() => { getdatas(checkboxvalue); setIscheckedChennai(!isCheckedChennai); }}
                            onChange={(e) => { setCheckboxvalue(e.target.value); }}
                            id="flexCheckDefault-1"
                          />
                          <label className=" newsletter form-check-label" htmlFor="flexCheckDefault-1">
                            Chennai
                          </label>
                        </div>
                        {/* {
                          newarr2.map((ex) => {
                            return (
                              <div className="form-check">
                                <input className="form-check-input"
                                  type="checkbox"
                                  value={ex}

                                  onChange={handleCheckChange}

                                  // onChange={(e) => {
                                  //   if (!isChecked) {
                                  //     setCheckboxvalue(e.target.value);
                                  //   }
                                  // }}
                                  onClick={check}

                                  // defaultChecked={checked}
                                  id="flexCheckDefault-1"
                                />
                                <label className=" newsletter form-check-label" htmlFor="flexCheckDefault-1">
                                  {ex}
                                </label>
                              </div>
                            )
                          })
                        } */}
                      </div>
                      <div className="p-2 rounded checkbox-form">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox" onClick={() => { getdatas(checkboxvalue); setIscheckedKovai(!isCheckedKovai) }}
                            value="Coimbatore" onChange={(e) => { setCheckboxvalue(e.target.value); }}
                            id="flexCheckDefault-2"
                          />
                          <label className=" prospect form-check-label" htmlFor="flexCheckDefault-2">
                            Kovai
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">

                      <div className="p-2 rounded checkbox-form">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Madurai"
                            onClick={() => { getdatas(checkboxvalue); setIscheckedMadurai(!isCheckedMadurai) }}
                            onChange={(e) => { setCheckboxvalue(e.target.value); }}
                            id="flexCheckDefault-3" />
                          <label className=" newsletter form-check-label" htmlFor="flexCheckDefault-3">
                            Madurai
                          </label>
                        </div>
                      </div>
                      <div className="p-2 rounded checkbox-form">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="Pondy"
                            onClick={() => { getdatas(checkboxvalue); setIscheckedPondy(!isCheckedPondy) }}
                            onChange={(e) => { setCheckboxvalue(e.target.value); }}
                            id="flexCheckDefault-4"
                          />
                          <label className=" prospect form-check-label" htmlFor="flexCheckDefault-4">
                            Pondy
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 col-6">
                      <div className="p-2 rounded checkbox-form">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            value="Tirunelveli"
                            onClick={() => { getdatas(checkboxvalue); setIscheckedThirunalveli(!isCheckedThirunalveli) }}
                            onChange={(e) => { setCheckboxvalue(e.target.value); }}
                            type="checkbox"
                            id="flexCheckDefault-5" />
                          <label className=" newsletter form-check-label" htmlFor="flexCheckDefault-5">
                            Tirunelveli
                          </label>
                        </div>
                      </div>
                      <div className="p-2 rounded checkbox-form">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            value="Nagercoil"
                            onClick={() => { getdatas(checkboxvalue); setIschecked("") }}
                            onChange={(e) => { setCheckboxvalue(e.target.value); }}
                            type="checkbox"
                            id="flexCheckDefault-6" />
                          <label className=" prospect form-check-label" htmlFor="flexCheckDefault-6">
                            Nagercovil
                          </label>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>
            {service ?
              <div className='row mt-4'>
                {
                  servicedata.map((ele, ind) => {
                    if (ele.servicefeatures.location.includes(checkboxvalue) || !isCheckedKovai & !isCheckedChennai & !isCheckedPondy & !isCheckedMadurai & !isCheckedThirunalveli) {
                      return (
                        <Card
                          title={ele.title}
                          uri={ele.uri}
                          date={ele.date}
                          location={ele.servicefeatures.location}
                          image={dummyImage}
                        />
                      )
                    }

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
                        console.log(ele.jobfeatures.location)
                        if (ele.jobfeatures.location.includes(checkboxvalue) || !isCheckedKovai & !isCheckedChennai & !isCheckedPondy & !isCheckedMadurai & !isCheckedThirunalveli) {
                          return (
                            <Card
                              title={ele.title}
                              uri={ele.uri}
                              date={ele.date}
                              location={ele.jobfeatures.location}
                              image={dummyImage}
                            />
                          )
                        }

                      })
                    }
                  </div>
                </div>
                : null}
            </div>
            <div>
              {automobiles ?
                <React.Fragment>
                  <div className='row position-relative mt-4'>
                    {
                      automobiledata.map((ele, ind) => {
                        if (ele.automobfeatures.location) {
                          console.log(ele.automobfeatures.location);
                            return (
                              <Card
                                title={ele.title}
                                uri={ele.uri}
                                date={ele.date}
                                location={ele.automobfeatures.location}
                                image={dummyImage}
                              />
                            )
                        }
                      }
                      )
                    }
                  </div>
                </React.Fragment>
                : null
              }
              {
                elect ?
                  <div>
                    <div className='row position-relative mt-4'>
                      {
                        electandappl.map((ele, ind) => {
                          console.log(ele)
                          if (ele.eleandappfeatures.location.includes(checkboxvalue) || !isCheckedKovai & !isCheckedChennai & !isCheckedPondy & !isCheckedMadurai & !isCheckedThirunalveli) {
                            return (
                              <Card
                                title={ele.title}
                                uri={ele.uri}
                                date={ele.date}
                                location={ele.eleandappfeatures.location}
                                image={dummyImage}
                              />
                            )
                          }
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
                          if (ele.astrofeatures.location.includes(checkboxvalue) || !isCheckedKovai & !isCheckedChennai & !isCheckedPondy & !isCheckedMadurai & !isCheckedThirunalveli) {
                            return (
                              <Card
                                title={ele.title}
                                uri={ele.uri}
                                date={ele.date}
                                location={ele.astrofeatures.location}
                                image={dummyImage}
                              />
                            )
                          }
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
                        if (ele.propertyfeatures.location.includes(checkboxvalue) || !isCheckedKovai & !isCheckedChennai & !isCheckedPondy & !isCheckedMadurai & !isCheckedThirunalveli) {
                          return (
                            <Card
                              title={ele.title}
                              uri={ele.uri}
                              date={ele.date}
                              location={ele.propertyfeatures.location}
                              image={dummyImage}
                            />
                          )
                        }
                      })
                    }
                  </div>
                  : null
              }
            </div>

          </div>
          <div className="col-xl-3 col-lg-4 col-md-12">
            <Advtsmall></Advtsmall>
            <Filterproperty alldata={allcategorydata}></Filterproperty>
          </div>
        </div>
      </div>

    </Format>
  )
}



export async function getServerSideProps(context) {
  console.log("seuri", context.query.name);
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
              count
            }
          }
          title
          uri
          id
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
              count
              slug
            }
          }
          title
          uri
          id
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
              count
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
              count
            }
          }
          uri
          title
          id
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
              count
            }
          }
          title
          uri
          id
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
              count
            }
          }
          title
          id
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
      automobilecategories: data.automobiles.nodes,
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

