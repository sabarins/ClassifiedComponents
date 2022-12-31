import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import Filterproperty from './Components/filterproperty';
import dummyImage from '../public/img/dummy.png';
import Image from 'next/image';




export default function subcategory({ subdata }) {

    const router = useRouter();
    return (
        <div>
            {
                router.query.category[0] ?
                    <div>
                        <div className='row position-relative mt-3'>
                            {
                                subdata.map((ele, ind) => {
                                    return (
                                        <div className="col-md-4 col-6" key={ind}>
                                            <article className="blog-post">
                                                <a href={`${ele.uri}`}>
                                                    <Image alt="jobimg" src={dummyImage} />
                                                    <small>{ele.date}</small>
                                                    <div className="content">
                                                        <h5>{ele.title}</h5>
                                                        <span style={{fontWeight:"bold"}}>{router.query.category[0]}</span>                                                      
                                                    </div>
                                                </a>
                                            </article>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div> : null
            }

        </div>
    )
}
