import Link from "next/link";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";


export default function Bredcrumb({allcategorydata,sub}) {

  console.log(allcategorydata,sub);

  let [automobile,setAutomobile] = useState(false);
  

  let [services,setServices] = useState("");


  let [showbredcrumb,setShowbredcrumb] = useState(false);

  useEffect(()=>
  {
    if(router.query.name)
    {
      setShowbredcrumb(true);
    }    
    else
    {
      setShowbredcrumb(false);
    }
    
  })

  const router = useRouter();

  console.log(router.pathname);


  return (
    <div className="bg-white border-bottom mt-2"> <div className="container"> 
    <div className="page-header"><ol className="breadcrumb"> 
    <li className="breadcrumb-item"> <Link href="/">Home</Link></li> 
   
      <li style={{marginLeft:"10px"}}>/</li>
      {/* {
        automobile ?  
        <li style={{marginLeft:"10px"}} className="breadcrumb-item"><Link href={"/"+`${router.query.uri}`}>
          Automobiles</Link></li>  : null

      } */}

      {
        !showbredcrumb ? 
        <div>
          <li style={{marginLeft:"10px"}} className="breadcrumb-item"><Link href={"/"+`${router.asPath}`}>{router.asPath.charAt(1).toUpperCase() + router.asPath.slice(2)}</Link></li>  
        </div>:null
      }


    {
      showbredcrumb ? 
      <div style={{display:"flex"}}>
        <li style={{marginLeft:"10px"}} className="breadcrumb-item"><Link href={"/"+`${router.query.uri}`}>{allcategorydata.__typename}</Link></li> 
        <li className="breadcrumb-item"><Link href="#">{allcategorydata.title}</Link></li> 
      </div>
      : null
    }    
    {/* <li className="breadcrumb-item active" aria-current="page">Ad Details</li>  */}
    </ol> </div> </div> </div>

  )
}

