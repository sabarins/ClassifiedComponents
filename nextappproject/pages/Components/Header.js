import Link from "next/link"
import APILog from '../APILogin/APILog'

export default function header() {
  return (
   <header>
<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
  <div className="container-fluid">
  <Link legacyBehavior  href="/"><a className="navbar-brand">Classifieds<span className="dot">.</span> Dinamalar</a></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link legacyBehavior  href="/"><a className="nav-link" >Home</a></Link>
        </li>
        <li className="nav-item">
        <Link legacyBehavior  href="/innerlistings"><a className="nav-link" >Properties</a></Link>
        </li>
        <li className="nav-item">
        <Link legacyBehavior href="/innerlistings"><a className="nav-link" >Electronics &amp; Appliances</a></Link>
        </li>
        <li className="nav-item">
        <a legacyBehavior href="/jobs" className="nav-link">Jobs</a>
        </li>
        <li className="nav-item">
        <Link legacyBehavior href="/innerlistings" ><a className="nav-link" >Astrology</a></Link>
        </li>
        <li className="nav-item">
        <a legacyBehavior href="/service" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
        <a legacyBehavior href="/automob" className="nav-link">Automobiles</a>
        </li>
      </ul>
      <Link legacyBehavior href="#"><a data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-brand ms-lg-3">Post an Advt</a></Link>
      <APILog></APILog>
      {/* <Link legacyBehavior href="#"><a data-bs-toggle="modal" data-bs-target="#exampleModal2" className="btn btn-brand ms-3" >Login</a></Link> */}
    </div>
  </div>
</nav>

   </header>
  )
}
