import Image from "next/image";
import Link from "next/link";
import houseImage from '../public/img/housesale.jpg';

export default function detailcard() {
  return (
    <>
    <div className="card overflow-hidden mt-3 mb-3"> <div className="ribbon ribbon-top-right text-danger"><span className="bg-primary">featured</span></div> <div className="card-body h-100 boot-slider"> <div className="item-det mb-4"> 
    <h3 className>Industrial Shed Sales</h3>
    <ul className="d-flex"> 
    <li className="me-5"><Link href="innerlistings" className="icons">
    <i class="bx bx-building-house mx-1 text-brand"></i> Real Estate</Link></li> 
    <li className="me-5"><a href="#" className="icons"><i className="bx bx-location-plus mx-1 text-brand" /> Kovai - SIDCO</a></li>
    <li className="me-5"><a href="#" className="icons"><i className="bx bx-time mx-1 text-brand" /> 5 hours ago</a></li>
    </ul>
    </div>
    <div className="position-relative">
        <div class="arrow-ribbon2 bg-primary"> Rs. 5000</div>
    <Image alt="House Image" src={houseImage} />
    </div>
     </div> </div> 
    
    <div className="card mb-3"> 
    <div className="card-header">
     <h3 className="card-title">Description</h3>
      </div> 
      
      <div className="card-body"> 
      <div className="mb-4"> 
      <div>Kilaku Vasal, 40 feet Road, Coimabatore, SIDCO</div>
      
    </div> <h4 className="mb-4">Specifications</h4> 
    <div className="row"> 
    <div className="col-xl-6 col-md-12"> 
    <ul className="list-unstyled widget-spec mb-0"> 
    <li className> <i class="bx bx-bed mx-1 text-brand"></i> 2 BedRooms </li> 
    <li className> <i class="bx bx-bath mx-1 text-brand"></i> 2 BathRooms </li> 
   
    </ul> 
    </div> 
    
    <div className="col-xl-6 col-md-12"> 
    <ul className="list-unstyled widget-spec mb-0"> 
    <li className> <i className="bx bx-car mx-1 text-brand"></i> 2 Car Parking </li> 
   <li className> <i className="bx bx-directions mx-1 text-brand"></i> Kilaku Vasal </li>
    </ul> 
    </div> 

    

    </div>
    <hr/>
<div> <h3>Posted in</h3>
<div> SIDCO, Coimabatore</div>
<div>Contact Number <span className="btn mx-2 btn-outline-dark ">96396598654</span></div>
</div>
     </div> 
    
    <div className="card-footer"> <div className="icons mx-1"> <Link href="#" className="btn btn-info">
    <i className="bx bx-share-alt mx-1"></i> Share Ad</Link> 
    
    <Link href="#" className="btn btn-danger mx-1 " data-bs-toggle="modal" data-bs-target="#report">
    <i className="bx bx-bug mx-1"></i> Report Abuse</Link> 
    </div> </div> </div>
    </>
  )
}
