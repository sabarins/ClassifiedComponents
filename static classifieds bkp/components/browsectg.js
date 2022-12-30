import React from "react";
var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import properyIcon from '../public/img/loan.png';
import electronicsIcon from '../public/img/electronics.png';
import jobsIcon from '../public/img/graduation.png';
import astrologyIcon from '../public/img/call-center.png';
import servicesIcon from '../public/img/store.png';
import automobilesIcon from '../public/img/delivery-truck.png';



const OwlCarousel = dynamic(() => import("react-owl-carousel"),
{ssr: false,}
);

const Responsive = {
    0: {
      items: 2.5,
      margin: 5
    },
    768: {
      items: 4.5,
      margin: 10
    },
    1024: {
      items: 5.5,
      margin: 20
    }
  }
  

export default function browsectg() {
  return (
    <section className="bg-light" id="portfolio">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="intro">
          <h2>Browse category</h2>                            
        </div>
      </div>
    </div>
  </div>
  <div className="container">
  <OwlCarousel loop={true}
  responsiveRefreshRate={0}
  autoplay={true}
  autoplayTimeout={3000}
  autoplayHoverPause={true}
      responsive={Responsive}
    >
      <div className="item">
         <div className="mb-0"> 
            <div className="cat-item text-center">
            <Link href="/innerlistings" className="dropdown-item"><div className="cat-img">
              <Image
        alt="Property"
        src={properyIcon}        
      />
       </div> 
            <div className="cat-desc"> <h5 className="mb-1">Properties</h5> </div>
            </Link> 
           </div> 
        </div>
      </div>
      <div className="item">
         <div className="mb-0"> 
            <div className="cat-item text-center">
            <Link href="/innerlistings" className="dropdown-item"><div className="cat-img">
              <Image
        alt="Electronics"
        src={electronicsIcon}        
      />
       </div> 
            <div className="cat-desc"> <h5 className="mb-1">Electronics &amp; Appliances</h5> </div>
            </Link> 
           </div> 
        </div>
      </div>
      <div className="item">
         <div className="mb-0"> 
            <div className="cat-item text-center">
            <Link href="/innerlistings" className="dropdown-item"><div className="cat-img">
              <Image
        alt="Jobs"
        src={jobsIcon}        
      />
       </div> 
            <div className="cat-desc"> <h5 className="mb-1">Jobs</h5> </div>
            </Link> 
           </div> 
        </div>
      </div>
      <div className="item">
         <div className="mb-0"> 
            <div className="cat-item text-center">
            <Link href="/innerlistings" className="dropdown-item"><div className="cat-img">
              <Image
        alt="Astrology"
        src={astrologyIcon}        
      />
       </div> 
            <div className="cat-desc"> <h5 className="mb-1">Astrology</h5> </div>
            </Link> 
           </div> 
        </div>
      </div>
      <div className="item">
         <div className="mb-0"> 
            <div className="cat-item text-center">
            <Link href="/innerlistings" className="dropdown-item"><div className="cat-img">
              <Image
        alt="Service"
        src={servicesIcon}        
      />
       </div> 
            <div className="cat-desc"> <h5 className="mb-1">Services</h5> </div>
            </Link> 
           </div> 
        </div>
      </div>

      <div className="item">
         <div className="mb-0"> 
            <div className="cat-item text-center">
            <Link href="/innerlistings" className="dropdown-item"><div className="cat-img">
              <Image
        alt="Automobiles"
        src={automobilesIcon}        
      />
       </div> 
            <div className="cat-desc"> <h5 className="mb-1">Automobiles</h5> </div>
            </Link> 
           </div> 
        </div>
      </div>

   

      
    </OwlCarousel>
  </div>
</section>

  )
}
