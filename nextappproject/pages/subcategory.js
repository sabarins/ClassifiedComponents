import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Filterproperty from './Components/filterproperty';
import dummyImage from '../public/img/dummy.png';
import Image from 'next/image';
import Bredcrumb from './Components/_child/bredcrumb';



export default function subcategory({ alldata, autodata, servicedata, propdata, astrodata, allcdata }) {

    let [automobiles, setAutomobiles] = useState(false);

    let [allsubdata, setAllsubdata] = useState([]);

    const router = useRouter();

    console.log(servicedata);
    console.log(allcdata);

    console.log(router.query.uri);

    const [allcatedata, setAllcatedata] = useState([]);

    useEffect(() => {
        let automob = allcdata.automob2.nodes;
        let service = allcdata.services2.nodes;
        let astrolo = allcdata.astrology2.nodes;
        let property = allcdata.prop2.nodes;
        let jobs = allcdata.job2.nodes;
        let elect = allcdata.electr2.nodes;

        let cpys = [...automob, ...service, ...astrolo, ...property, ...jobs, ...elect];
        setAllcatedata(cpys);

    }, [])

    console.log(allcatedata);
    // console.log(alldata.all+router.query.category[0].charAt(0).toUpperCase()+router.query.category[0].slice(1).toLowerCase().nodes);


    return (
        <div>
            {
                router.query.uri ?
                    <div>
                        <div className='row position-relative mt-3'>
                            {
                                allcatedata.map((ele, ind) => {
                                    return (
                                        <div className="col-md-4 col-6" key={ind}>
                                            <article className="blog-post">
                                                <a href={`${ele.uri}`}>
                                                    <Image alt="jobimg" src={dummyImage} />
                                                    <small>{ele.date}</small>
                                                    <div className="content">
                                                        <h5>{ele.title}</h5>
                                                        {/* {
                                                            ele.categories.nodes.map((e) => {
                                                                console.log(e);

                                                                return (
                                                                    <span>{e.name}</span>
                                                                )
                                                            })

                                                        } */}
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
