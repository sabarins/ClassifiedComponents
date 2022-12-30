import Link from "next/link";
export default function Bredcrumb() {
  return (
    <div className="bg-white border-bottom mt-2"> <div className="container"> 
    <div className="page-header"><ol className="breadcrumb"> 
    <li className="breadcrumb-item"> <Link href="/">Home</Link></li> 
    <li className="breadcrumb-item"><Link href="innerlistings">Properties</Link></li> 
    <li className="breadcrumb-item"><Link href="innerlistings">Real Estate</Link></li> 
    {/* <li className="breadcrumb-item active" aria-current="page">Ad Details</li>  */}
    </ol> </div> </div> </div>

  )
}
