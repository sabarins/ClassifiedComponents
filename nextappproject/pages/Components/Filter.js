import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import dummyImage from '../../public/img/dummy.png'



export default function Filter({ allcatdata, getdata }) {

    const router = useRouter();
    let [checkboxvalue, setCheckboxvalue] = useState("");

    console.log(getdata);


    let [automobile, setAutomobile] = useState(false);
    const [service, setService] = useState(false);
    const [jobs, setJobs] = useState(false);
    const [elect, setElect] = useState(false);
    const [astrology, setAstrology] = useState(false);
    const [properties, setProperties] = useState(false);

    let astrolocation = allcatdata.allAstrology.nodes;
    let joblocation = allcatdata.allJobs.nodes;
    let propertylocation = allcatdata.allProperties.nodes;
    let servicelocation = allcatdata.allServices.nodes;
    let electrlocation = allcatdata.allElectronicsAndAppliances.nodes;
    let automobilelocation = allcatdata.automobiles.nodes;

   
    const [filter, setFilter] = useState(automobilelocation);

    let [cname,setCname] = useState(false);

    // const [check,setCheck] = useState(false);

    console.log(cname)

    useEffect(() => {

        if (router.query.uri === "automobile") {
            setAutomobile(true);
        }
        else if (router.query.uri === "service") {
            setService(true);
        }
        else if (router.query.uri === "jobs") {
            setJobs(true);
        }
        else if (router.query.uri === "electronicandapplian") {
            setElect(true);
        }
        else if (router.query.uri === "astrology") {
            setAstrology(true);
        }
        else if (router.query.uri === "properties") {
            setProperties(true);
        }

        var c = document.getElementsByClassName("form-check-input");

        console.log(c);

    })




    console.log(checkboxvalue);

    return (
        <div>
            <div className="row mt-4">
                <div className="col-12 ">
                    <div className="blog-post ">
                        <div className="row">
                            <div className="col-md-3 col-6">
                                <div className="p-2 rounded checkbox-form">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Chennai" onChange={(e) => { setCheckboxvalue(e.target.value); }} defaultValue id="flexCheckDefault-1" />
                                        <label className=" newsletter form-check-label" htmlFor="flexCheckDefault-1">
                                            Chennai
                                        </label>
                                    </div>
                                </div>
                                <div className="p-2 rounded checkbox-form">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"  onClick={() => getdata(checkboxvalue)} value="Coimbatore" onChange={(e) => { setCheckboxvalue(e.target.value); }} defaultValue id="flexCheckDefault-2" />
                                        <label className=" prospect form-check-label" htmlFor="flexCheckDefault-2">
                                            Kovai
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">

                                <div className="p-2 rounded checkbox-form">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Madurai" onChange={(e) => { setCheckboxvalue(e.target.value) }} defaultValue id="flexCheckDefault-3" />
                                        <label className=" newsletter form-check-label" htmlFor="flexCheckDefault-3">
                                            Madurai
                                        </label>
                                    </div>
                                </div>
                                <div className="p-2 rounded checkbox-form">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="Pondy" onChange={(e) => { setCheckboxvalue(e.target.value) }} defaultValue id="flexCheckDefault-4" />
                                        <label className=" prospect form-check-label" htmlFor="flexCheckDefault-4">
                                            Pondy
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6">
                                <div className="p-2 rounded checkbox-form">
                                    <div className="form-check">
                                        <input className="form-check-input" value="Tirunelveli" onChange={(e) => { setCheckboxvalue(e.target.value) }} type="checkbox" defaultValue id="flexCheckDefault-5" />
                                        <label className=" newsletter form-check-label" htmlFor="flexCheckDefault-5">
                                            Tirunelveli
                                        </label>
                                    </div>
                                </div>
                                <div className="p-2 rounded checkbox-form">
                                    <div className="form-check">
                                        <input className="form-check-input" value="Nagercoil" onChange={(e) => { setCheckboxvalue(e.target.value) }} type="checkbox" defaultValue id="flexCheckDefault-6" />
                                        <label className=" prospect form-check-label" htmlFor="flexCheckDefault-6">
                                            Nagercovil
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-6 align-middle">
                                {/* <Link legacyBehavior href="#"><a className="btn btn-brand mt-4"  >Filter</a></Link> */}
                                <button className="btn btn-brand mt-4">Filter</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {automobile ?
                <div class="row position-relative mt-4">
                    {
                        automobilelocation.map((ele, ind) => {

                            if (checkboxvalue === ele.automobfeatures.location) {
                                //ele.automobfeatures.location
                                return (
                                    <>
                                        <div className="col-md-4 col-6" >
                                            <article className="blog-post">
                                                <a href={`${ele.uri}/${ele.id}`}>
                                                    <Image src={dummyImage} alt="" />
                                                    <small>{ele.date}</small>
                                                    <div className="content">
                                                        <h5>{ele.title}</h5>
                                                        <p>Location : {ele.automobfeatures.location}</p>
                                                        <span style={{ fontWeight: "bold" }}>{ele.__typename}</span>
                                                    </div>
                                                </a>
                                            </article>
                                        </div>
                                    </>
                                )
                            }

                        })
                    }
                </div> : null
            }

            {
                service ?
                    <div class="row position-relative mt-4">
                        {
                            servicelocation.map((ele, ind) => {
                                if (checkboxvalue === ele.servicefeatures.location) {
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
                    </div> : null
            }
            {
                jobs ?
                    <div class="row position-relative mt-4">
                        {
                            joblocation.map((ele, ind) => {
                                if (checkboxvalue === ele.jobfeatures.location) {
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
                    </div> : null
            }
            {
                elect ?
                    <div class="row position-relative mt-4">
                        {
                            electrlocation.map((ele, ind) => {
                                if (checkboxvalue === ele.eleandappfeatures.location) {
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
                    </div> : null
            }



        </div>
    )
}
