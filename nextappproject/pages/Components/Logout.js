import { useRouter } from 'next/router';
import React from 'react'


export default function Logout() {
  const router = useRouter();
  return (
    <div>
        <div id="hidelogoutbtn" >
          <button
            onClick={(e) => {
              localStorage.removeItem("name");
              localStorage.removeItem("pnumber");
              document.getElementById("hidelogoutbtn").style.display = "none";
              // window.location.reload();
              router.push('/')


            }}
            className="loginbtn"
            style={{ backgroundColor: "red" }}>Logout</button>
        </div>
    </div>
  )
}
