import Image from 'next/image'
import React, { useState, useRef } from 'react'
// import dummyImage from '../../public/img/dummy.png'



export default function Card(props) {

    // let ele = allcatedata.automobiles.nodes;
    console.log(props.title)
    const ref = useRef();

    return (
        <React.Fragment>
            <div className="col-md-4 col-6" >
                <article className="blog-post">
                    <a href={`${props.uri}/${props.id}`}>
                        <Image src={props.image} alt="" />
                        <small>{props.date}</small>
                        <div className="content">
                            <h5>{props.title}</h5>
                            <p>Location : {props.location}</p>
                            <span style={{ fontWeight: "bold" }}>{props.__typename}</span>
                        </div>
                    </a>
                </article>
            </div>
        </React.Fragment>
    )
}
