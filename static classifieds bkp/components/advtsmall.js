import Script from "next/script"
import Image from "next/image";
import advtImage from '../public/img/advt.jpg';

export default function advtsmall() {
  return (
    <div className="border mb-3 mt-3 ">

<div className="text-center text-muted">  <Image className="img-fluid" alt="Advt Image" src={advtImage} />  <small> Advertisement</small> </div>
      
    </div>
  )
}
