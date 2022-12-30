import Image from "next/image";
import Link from "next/link";
import dummyImage from '../public/img/dummy.png';
import houseImage from '../public/img/housesale.jpg';

export default function homecards() {
  return (
    <section id="blog">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="intro">
                  
                    <h2>Fresh recommendations</h2>
                   
                </div>
            </div>
        </div>
        <div className="row">

            <div className="col-md-3 col-6">
                <article className="blog-post">
                <Link href="innerlistings"><span>Properties</span> </Link>
                <Link href="detail">  
                    <Image alt="House Image" src={houseImage} />
                    <small>Today</small>
                    <div className="content">
                        <h5>Industrial Shed Sales</h5>
                        <p>Kilaku Vasal, 40 feet Road</p>
                        <p className="text-muted">Kovai - SIDCO</p>
                    </div>
                </Link>
                </article>
            </div>

            <div className="col-md-3 col-6">
                <article className="blog-post">
                <Link href="innerlistings"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div className="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p className="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div className="col-md-3 col-6">
                <article className="blog-post">
                <Link href="innerlistings"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div className="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p className="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div className="col-md-3 col-6">
                <article className="blog-post">
                <Link href="innerlistings"><span>Jobs</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div className="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p className="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div className="col-md-3 col-6">
                <article className="blog-post">
                <Link href="innerlistings"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div className="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p className="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div className="col-md-3 col-6">
                <article className="blog-post">
                <Link href="innerlistings"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div className="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p className="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div className="col-md-3 col-6">
                <article className="blog-post">
                <Link href="innerlistings"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div className="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p className="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>

            <div className="col-md-3 col-6">
                <article className="blog-post">
                <Link href="innerlistings"><span>Services</span> </Link>
                <Link href="#">  
                    <Image alt="Dummy Image" src={dummyImage} />
                    <small>Today</small>
                    <div className="content">
                        <h5>₹ 25,000</h5>
                        <p>SOFA FOR SALE</p>
                        <p className="text-muted"> Mount Road, Chennai</p>
                    </div>
                </Link>
                </article>
            </div>
         
        </div>
    </div>
</section>
  )
}
