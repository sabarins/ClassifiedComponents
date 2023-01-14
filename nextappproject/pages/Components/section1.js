import { gql } from "@apollo/client";
import { data } from "jquery";
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";
import { getStaticProps } from "../index";
import client from "../../client";
import Search from "./Search";
import { SearchInput } from "../search/[searchinput]";
import { useRouter } from "next/router";



export default function Section1({ searchdata }) {

  console.log(searchdata);
  // let [locationdata, setLocationdata] = useState([]);

  let [getlocationname, setGetlocationname] = useState("");
  let router = useRouter();

  let [userinputsearch, setUserinputsearch] = useState("");

  // let [usersearchinp,setUsersearchinp] = SearchInput(userinputsearch);
  console.log(getlocationname);

  return (
    <section>
      <div className="banner-1 cover-image sptb-2 sptb-tab bg-background2">
        <div className="header-text mb-0">
          <div className="container">
            <div className="intro"> <h2>Find your best classified</h2></div>
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 d-block mx-auto">
                <div className="search-background bg-transparent">
                  <div className="form row">
                    <div className="form-group  col-xl-6 col-lg-6 mb-1 bg-white position-relative dropdown text-start">
                      <div className="input-group mb-3">
                        <input type="text" class="form-control" onChange={(e) => { setUserinputsearch(e.target.value) }} placeholder="Find Property, Jobs & more" />
                        <button className="btn btn-brand py-0" onClick={() => { router.push(`/search/${userinputsearch}`) }} type="button" id="button-addon2"><i className="bx bx-sm bx-search"></i></button>
                      </div></div>
                    <div className="form-group col-xl-6 col-lg-6 mb-1 bg-white position-relative dropdown text-start">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" onChange={(e)=>{setGetlocationname(e.target.value)}}
                          data-bs-toggle="dropdown" aria-expanded="false" placeholder="Search City, Area or Location" />
                        <button className="btn btn-brand py-0" type="button" onClick={()=>{router.push(`location/${getlocationname}`)}} id="button-addon3"><i className="bx bx-sm bxs-map-pin"></i></button>
                        <ul className="dropdown-menu input-lg text-start" style={{ width: '100%' }}>
                          <li> <Link href="#" className="dropdown-item"><i class="bx bx-current-location"></i> Use Current Location </Link></li>

                          <li><hr className="dropdown-divider" /></li>
                          <li><h6 className="dropdown-header text-muted">Recent Locations</h6></li>
                          <li><Link href="#" className="dropdown-item">Chennai </Link></li>
                          <li><Link href="#" className="dropdown-item">Madurai </Link></li>
                          <li><Link href="#" className="dropdown-item">Kovai </Link></li>
                          <li><Link href="#" className="dropdown-item">Pondicherry </Link></li>
                          <li><Link href="#" className="dropdown-item">Tirunelveli </Link></li>
                          <li><Link href="#" className="dropdown-item">Nagercovil </Link></li>
                        </ul>
                      </div>
                    </div>



                  </div> </div>
              </div>

            </div>

            </div> 
            </div> 

      </div>
    </section>

  )
}
