import Link from "next/link";
import { useRouter } from "next/router";

export default function Bredcrumb() {

  const router = useRouter();
  console.log(router.query.name);
  return (
    <div className="bg-white border-bottom mt-2"> <div className="container"> 
    <div className="page-header"><ol className="breadcrumb"> 
    <li className="breadcrumb-item"> <Link href="/">Home</Link></li> 
    {/* <li className="breadcrumb-item"><Link href="innerlistings">{router.query.category[0]}</Link></li>  */}
    
    {/* <li className="breadcrumb-item active" aria-current="page">Ad Details</li>  */}
    </ol> </div> </div> </div>

  )
}
