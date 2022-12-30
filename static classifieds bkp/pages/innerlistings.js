import Format from "../layout/format"
import Bredcrumb from "../components/_child/bredcrumb"
import Innercards from "../components/innercards"
import Filterproperty from "../components/filterproperty"
import Advtsmall from "../components/advtsmall"

export default function Innerlistings() {
  return (
    <Format> 
    <Bredcrumb></Bredcrumb>
    <div className="container">
    <div className="row">
    <div className="col-xl-9 col-lg-8 col-md-12">
    <Innercards></Innercards></div>
    <div className="col-xl-3 col-lg-4 col-md-12"> 
    <Advtsmall></Advtsmall>
    <Filterproperty></Filterproperty>
    </div></div></div>

   </Format>
  )
}
