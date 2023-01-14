import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


export default function Bredcrumb({ allcategorydata, sub }) {

  console.log(allcategorydata, sub);

  let [automobile, setAutomobile] = useState(false);


  let [services, setServices] = useState("");


  let [showbredcrumb, setShowbredcrumb] = useState(false);

  let [categoryway,setCategoryway] = useState(false);

  let [subcategoryway, setSubcategoryway] = useState(false);

  useEffect(() => {
    if (router.query.uri && router.query.name && router.query.id) {
      setShowbredcrumb(true);
    }
    else if(router.query.uri) {
      setCategoryway(true);
    }

    if (router.query.uri && router.query.name) {
      setSubcategoryway(true);
    }

  })

  const router = useRouter();

  const exp = router.asPath.slice(1).replace(/[^0+/A-Za-z0-100]/g, '');

  console.log(exp.replaceAll('0', ''));


  return (
    <div className="bg-white border-bottom mt-2"> <div className="container">
      <div className="page-header"><ol className="breadcrumb">
        <li className="breadcrumb-item"> <Link href="/">Home</Link></li>

        <li style={{ marginLeft: "10px" }}>/</li>
        {/* {
        automobile ?  
        <li style={{marginLeft:"10px"}} className="breadcrumb-item"><Link href={"/"+`${router.query.uri}`}>
          Automobiles</Link></li>  : null

      } */}

        {/* {
          !showbredcrumb ?
            <div>
              <li style={{ marginLeft: "10px" }} className="breadcrumb-item"><Link href={"/" + `${router.asPath}`}>{exp.replaceAll('0', '')}</Link></li>
            </div> : null
        } */}

        {
          categoryway ?
          <div>
            <li style={{ marginLeft: "10px" }} className="breadcrumb-item"><Link href={"/" + `${router.query.uri}`}>{router.query.uri.charAt(0).toUpperCase() + router.query.uri.slice(1).toLowerCase()}</Link></li>

          </div>:null
        }

        {
          showbredcrumb ?
            <div style={{ display: "flex" }}>
              <li style={{ marginLeft: "10px" }} className="breadcrumb-item"><a href={"/" + `${router.query.uri}`}>{allcategorydata.__typename}</a> / <a href={"/" + `${router.query.uri}` + "/" + `${router.query.name}` + "/" + `${router.query.id}` }>{router.query.name}</a></li>
            </div>
            : null
        }

        {
          subcategoryway ?
          <div>
            <li><span style={{ marginLeft: "10px" }} className="breadcrumb-item">/</span><Link style={{ marginLeft: "10px" }} href={"/" + `${router.query.uri}` + "/" + `${router.query.name}`}>{router.query.name}</Link></li>
          </div>:null
        }
       
       
      </ol> </div> </div> </div>
  )
}

