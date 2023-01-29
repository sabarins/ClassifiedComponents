import React, { useState } from "react";

export default function Filter() {
  let arr = [
    {
      name: "abc",
      automobfeatures: {
        location: "chennai",
      },
    },
    {
      name: "xyz",
      automobfeatures: {
        location: "trichy",
      },
    },
    {
      name: "xyz",
      automobfeatures: {
        location: "madurai",
      },
    },
  ];

  let [check, setCheck] = useState();
  let [selectedcheckbox, setSelectedcheckbox] = useState([]);

  let [allcheckeddatas,setAllcheckeddatas] = useState([]);

  const handlechange = (el, index,ele) => {

    const adata = document.getElementById(index).checked;
    const adata2 = document.getElementById(index).value;

    setCheck(adata);
    console.log(adata2);

    if(adata == true)
    {
        setAllcheckeddatas([...allcheckeddatas,ele]);
    }
    else
    {
        setAllcheckeddatas(adata2.filter(values=>values!=adata2))
    }
  
  };

  console.log(allcheckeddatas);
  return (
    <div>
      <>
        {arr.map((ele, i) => {
          return (
            <div key={i}>
              <input
                id={i}
                type="checkbox"
                onChange={(e) => handlechange(e, i,ele)}
                value={ele.automobfeatures.location}
              ></input>
              <label>{ele.automobfeatures.location}</label>
            </div>
          );
        })}
      </>

      <div>
        {arr.map((ele, ind) => {
          if (check != true) {
            return (
              <div key={ind} style={{ display: "flex" }}>
                <label>{ele.automobfeatures.location}</label>
              </div>
            );
          }
        })}
      </div>

      <div>
        {
            allcheckeddatas.map((elem,ind)=>
            {
                return(
                    <div>{elem.name}{elem.automobfeatures.location}</div>
                )
            })
        }
      </div>
    </div>
  );
}
