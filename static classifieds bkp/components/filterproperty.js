
import Link from "next/link"

export default function filterproperty() {
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
               <i class="bx bx-buildings mx-1 text-brand"></i> Properties
        </button>
      </h2>
      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div className="accordion-body">
        <div className="filter-product-checkboxs"> 
   
    <Link href="innerlistings" className="text-dark">
      <label className="custom-control form-checkbox mb-3"> 
    <i className="bx bx-minus mx-1" /> House Rent <span className="label label-secondary float-end">14</span> 
     </label>
     </Link>

     <Link href="innerlistings" className="text-dark">
      <label className="custom-control form-checkbox mb-3"> 
    <i className="bx bx-minus mx-1" /> Plots and Lands <span className="label label-secondary float-end">14</span> 
     </label>
     </Link>

     <Link href="innerlistings" className="text-dark">
      <label className="custom-control form-checkbox mb-3"> 
    <i className="bx bx-minus mx-1" /> Flat Old <span className="label label-secondary float-end">14</span> 
     </label>
     </Link>

     <Link href="innerlistings" className="text-dark">
      <label className="custom-control form-checkbox mb-3"> 
    <i className="bx bx-minus mx-1" /> Flat New <span className="label label-secondary float-end">14</span> 
     </label>
     </Link>

     <Link href="innerlistings" className="text-dark">
      <label className="custom-control form-checkbox mb-3"> 
    <i className="bx bx-minus mx-1" /> Real Estate <span className="label label-secondary float-end">14</span> 
     </label>
     </Link>

     <Link href="innerlistings" className="text-dark">
      <label className="custom-control form-checkbox mb-3"> 
    <i className="bx bx-minus mx-1" /> Go down rental <span className="label label-secondary float-end">14</span> 
     </label>
     </Link>

     <Link href="innerlistings" className="text-dark">
      <label className="custom-control form-checkbox mb-3"> 
    <i className="bx bx-minus mx-1" />Agriculture land sale <span className="label label-secondary float-end">14</span> 
     </label>
     </Link>

     <Link href="innerlistings" className="text-dark">
      <label className="custom-control form-checkbox mb-3"> 
    <i className="bx bx-minus mx-1" />Lease <span className="label label-secondary float-end">14</span> 
     </label>
     </Link>


    
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
