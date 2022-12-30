import Script from "next/script";
import Image from "next/image";
import Link from "next/link"

export default function footer() {
  return (
    <div>
      <footer>
  <div className="footer-top text-center">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center">
          <h4 className="navbar-brand">Classifieds
            <span className="dot">.</span> Dinamalar</h4>
          <p>Here some tag line</p>
          <div className="col-auto social-icons">
            <Link href="#"><i className="bx bxl-facebook" /></Link>
            <Link href="#"><i className="bx bxl-twitter" /></Link>
            <Link href="#"><i className="bx bxl-instagram" /></Link>
            <Link href="#"><i className="bx bxl-pinterest" /></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom text-center">
    <p className="mb-0">Copyright@2022. All rights Reserved</p>
  </div>
</footer>

<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Post an Advertisement</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <p>Here Form will come..</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-brand">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body p-0">
        <div className="container-fluid">
          <div className="row py-2">
            <div className="col-lg-5 col-sm-12 bg-cover loginbg">
              <div>
              </div>
            </div>
            <div className="col-lg-7">
              <form className="col-12 row g-3">
                <div className="text-center">
                  <h1>Login</h1>
                </div>
                <div className="col-12">
                  <label htmlFor="userName" className="form-label">Enter Mobile Number</label>
                  <div className="input-group">
                    <span className="input-group-text border-0" id="basic-addon1">+91</span>
                    <input type="number" className="form-control" placeholder="Mobile Number" aria-label="Mobilenumber" aria-describedby="basic-addon1" />
                  </div>
                </div>
                <div className="col-12 mb-4 text-center">
                  <button type="submit" className="btn btn-brand">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </div>
</div>

    </div>
    
  )
}
