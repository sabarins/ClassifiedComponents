import Format from "../../layout/format"
import Bredcrumb from "../../components/_child/bredcrumb"
export default function Page(){
    return (
        <Format> 
            <Bredcrumb></Bredcrumb>
            <Homecards></Homecards>
           </Format>
    )
}