import { useRouter } from 'next/router';
import React from 'react'


export default function Logout() {
  const router = useRouter();
  return (
    <div>
        <div id="hidelogoutbtn">
        <p style={{fontWeight:"bolder",margin:"30px 0px 0px 10px"}}>Welcome {localStorage.getItem("name")}!</p>
          <button
            onClick={(e) => {
              localStorage.removeItem("name");
              localStorage.removeItem("pnumber");
              localStorage.removeItem("logged");
              router.push('/')
              document.getElementById("hidelogoutbtn").style.display = "none";
            }}
            className="loginbtn"
            style={{ backgroundColor: "red" }}>Logout</button>
        </div>
    </div>
  )
}
