import Image from "next/image"
import Link from "next/link"
import { useState,useEffect } from "react";


export default function section1() {
  let [locationdata, setLocationdata] = useState([]);

  async function locat() {
    let tokenkey = "e7fcb42a58c1ef";
    let url = `https://ipinfo.io/json?token=${tokenkey}`;
    let response = await fetch(url);
    let data = await response.json();
    setLocationdata(data);
    console.log(data);
  }
  console.log(locationdata)
  useEffect(() => {
    locat();
  }, [])
  return (
   <section> 
  <div className="banner-1 cover-image sptb-2 sptb-tab bg-background2"> 
    <div className="header-text mb-0"> 
      <div className="container"> 
        <div className="intro"> <h2>Find your best classified</h2></div>
        <div className="row"> <div className="col-xl-12 col-lg-12 col-md-12 d-block mx-auto"> 
            <div className="search-background bg-transparent"> 
              <div className="form row g-0 "> 
                <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-1 bg-white mx-1 "> 
                  <input type="text" className="form-control input-lg" id="text4" placeholder="Find Property, Jobs & more" />
                </div> 
                <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-1 bg-white position-relative dropdown mx-1"> 
                  {/* <button type="button" className="form-control input-lg dropdown-toggle text-start" data-bs-toggle="dropdown" style={{color: '#6c757d', height: 44}}>
                    Search City, Area or Location
                  </button> */}
                  <input list="locations" className="form-control input-lg dropdown-toggle text-start" style={{color: '#6c757d', height: 44}} value={locationdata.region} />
                    <datalist id="locations">
                      <option><Link href="#" className="dropdown-item">Chennai </Link></option>
                      <option><Link href="#" className="dropdown-item">Madurai </Link></option>
                      <option><Link href="#" className="dropdown-item">Villupuram </Link></option>
                      <option><Link href="#" className="dropdown-item">Kovai </Link></option>
                      <option><Link href="#" className="dropdown-item">Trichy </Link></option>
                    </datalist>
=                  {/* <ul className="dropdown-menu input-lg text-start" style={{width: '100%'}}>
                    <li> <Link href="#" className="dropdown-item">Use Current Location <span><i className="fa fa-map-marker location-gps me-1" /> </span></Link></li>

                    <li><hr className="dropdown-divider" /></li>
                    <li><h6 className="dropdown-header text-muted">Recent Locations</h6></li>
                    <li><Link href="#" className="dropdown-item">Chennai </Link></li>
                    <li><Link href="#" className="dropdown-item">Madurai </Link></li>
                    <li><Link href="#" className="dropdown-item">Kovai </Link></li>
                    <li><Link href="#" className="dropdown-item">Pondicherry </Link></li>
                    <li><Link href="#" className="dropdown-item">Tirunelveli </Link></li>
                    <li><Link href="#" className="dropdown-item">Nagercovil </Link></li>
                  </ul>  */}
                </div> 
                <div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-0 bg-white position-relative dropdown text-start mx-1"> 
                  <button type="button" className="form-control input-lg dropdown-toggle text-start" data-bs-toggle="dropdown" style={{color: '#6c757d', height: 44}}>
                    Choose Category
                  </button>
                  <ul className="dropdown-menu input-lg text-lg-start" style={{width: '100%'}}>                   
                    <li><Link href="/innerlisting" className="dropdown-item">Properties </Link></li>
                    <li><Link href="/innerlisting" className="dropdown-item">Electronics &amp; Appliances </Link></li>
                    <li><Link href="/jobs" className="dropdown-item">Jobs </Link></li>
                    <li><Link href="/innerlisting" className="dropdown-item">Adtrology </Link></li>
                    <li><Link href="/services" className="dropdown-item">Services </Link></li>
                    <li><Link href="/automob" className="dropdown-item">Automobiles </Link></li>
                  </ul> 
                </div> 
                <div className="col-xl-2 col-lg-3 col-md-12 mobtop"> 
                <Link href="#" className="btn btn-brand ms-lg-3">Search Here </Link>
                </div> 
              </div> </div> </div> </div> </div> </div>
  </div> 
</section>

  )
}
