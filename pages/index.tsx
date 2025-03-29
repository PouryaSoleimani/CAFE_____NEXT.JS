// ^ HOME PAGE =================================================================================================================================================
import Image from "next/image";
import Link from "next/link";
import { FaAward, FaCoffee, FaEnvelope, FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTruck, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiCalendarScheduleFill } from "react-icons/ri";



//  COMPONENT ================================================================================================================================================
export default function HomePage() {
  return (
    <>
      {/* <!-- Navbar Start --> */}
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <Link href="/" className="navbar-brand px-lg-4 m-0">
            <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
          </Link>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav ml-auto p-4">
              <Link href="/" className="nav-item nav-link active">Home</Link>
              <Link href="/about-us" className="nav-item nav-link">About</Link>
              <Link href="/services" className="nav-item nav-link">Services</Link>
              <Link href="/menu" className="nav-item nav-link">Menu</Link>
              <div className="nav-item dropdown">
                <Link href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                <div className="dropdown-menu text-capitalize">
                  <Link href="/reservation" className="dropdown-item">Reservation</Link>
                  <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                </div>
              </div>
              <Link href="/contact-us" className="nav-item nav-link">Contact</Link>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- Navbar End --> */}

      {/* <!-- Carousel Start --> */}
      <div className="container-fluid p-0 mb-5">
        <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image className="w-100" src="/img/carousel-1.jpg" alt="Image" width={3000} height={3000} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                <h1 className="display-1 text-white m-0">COFFEE</h1>
                <h2 className="text-white m-0">* SINCE 1950 *</h2>
              </div>
            </div>
            <div className="carousel-item">
              <Image className="w-100" src="/img/carousel-2.jpg" alt="Image" width={3000} height={3000} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                <h1 className="display-1 text-white m-0">COFFEE</h1>
                <h2 className="text-white m-0">* SINCE 1950 *</h2>
              </div>
            </div>
          </div>
          <Link className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </Link>
          <Link className="carousel-control-next" href="#blog-carousel" data-slide="next">
            <span className="carousel-control-next-icon"></span>
          </Link>
        </div>
      </div>
      {/* <!-- Carousel End --> */}


      {/* <!-- About Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>About Us</h4>
            <h1 className="display-4">Serving Since 1950</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Our Story</h1>
              <h5 className="mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
              <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
              <Link href="/" className="btn btn-secondary font-weight-bold py-2 px-4 mt-2">Learn More</Link>
            </div>
            <div className="col-lg-4 py-5 py-lg-0" style={{ minHeight: "500px" }}>
              <div className="position-relative h-100">
                <Image className="position-absolute w-100 h-100" src="/img/about.png" style={{ objectFit: "cover" }} alt="pic" width={800} height={800} />
              </div>
            </div>
            <div className="col-lg-4 py-0 py-lg-5">
              <h1 className="mb-3">Our Vision</h1>
              <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
              <h5 className="mb-3"><span className="fa fa-check text-primary mr-3"></span> Lorem ipsum dolor sit amet</h5>
              <h5 className="mb-3"><span className="fa fa-check text-primary mr-3"></span> Lorem ipsum dolor sit amet</h5>
              <h5 className="mb-3"><span className="fa fa-check text-primary mr-3"></span> Lorem ipsum dolor sit amet</h5>
              <Link href="/" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">Learn More</Link>
            </div>
          </div>
        </div>
      </div >
      {/* <!-- About End --> */}


      {/* <!-- Service Start --> */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
            <h1 className="display-4">Fresh &amp;Organic Beans</h1>
          </div>
          <div className="row mx-auto">
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <div className="img-fluid mb-3 mb-sm-0">
                    <Image src="/img/service-1.jpg" alt="pic" width={300} height={300} />
                  </div>
                </div>
                <div className="col-sm-7">
                  <h4><span className="fa fa-truck service-icon"><FaTruck /></span> Fastest Door Delivery</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <Image className="/img-fluid mb-3 mb-sm-0" src="/img/service-2.jpg" alt="pic" width={300} height={300} />
                </div>
                <div className="col-sm-7">
                  <h4><span className="fa fa-coffee service-icon"><FaCoffee /></span> Fresh Coffee Beans</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <Image className="/img-fluid mb-3 mb-sm-0" src="/img/service-3.jpg" alt="pic" width={300} height={300} />
                </div>
                <div className="col-sm-7">
                  <h4><span className="fa fa-award service-icon"><FaAward /></span> Best Quality Coffee</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-5">
                  <Image className="/img-fluid mb-3 mb-sm-0" src="/img/service-4.jpg" alt="pic" width={300} height={300} />
                </div>
                <div className="col-sm-7">
                  <h4><span className="fa fa-table service-icon"><RiCalendarScheduleFill /></span> Online Table Booking</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit
                    invidunt, dolore tempor diam ipsum takima erat tempor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}


      {/* <!-- Offer Start --> */}
      <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
        <div className="container py-5">
          <h1 className="display-3 text-primary mt-3">50% OFF</h1>
          <h1 className="text-white mb-3">Sunday Special Offer</h1>
          <h4 className="text-white font-weight-normal mb-4 pb-3">Only for Sunday from 1st Jan to 30th Jan 2045</h4>
          <form className="form-inline justify-content-center mb-4">
            <div className="input-group">
              <input type="text" className="form-control p-4" placeholder="Your Email" style={{ height: "60px" }} />
              <div className="input-group-append">
                <button className="btn btn-primary font-weight-bold px-4" type="submit">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- Offer End --> */}


      {/* <!-- Menu Start --> */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Menu &amp; Pricing</h4>
            <h1 className="display-4">Competitive Pricing</h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5">Hot Coffee</h1>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-1.jpg" alt="pic" width={100} height={100} />
                  <h5 className="menu-price">$5</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Black Coffee</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-2.jpg" alt="pic" width={100} height={100} />
                  <h5 className="menu-price">$7</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Chocolete Coffee</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-3.jpg" alt="pic" width={100} height={100} />
                  <h5 className="menu-price">$9</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Coffee With Milk</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="mb-5">Cold Coffee</h1>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-1.jpg" alt="pic" width={100} height={100} />
                  <h5 className="menu-price">$5</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Black Coffee</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-2.jpg" alt="pic" width={100} height={100} />
                  <h5 className="menu-price">$7</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Chocolete Coffee</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <Image className="w-100 rounded-circle mb-3 mb-sm-0" src="/img/menu-3.jpg" alt="pic" width={100} height={100} />
                  <h5 className="menu-price">$9</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Coffee With Milk</h4>
                  <p className="m-0">Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Menu End --> */}


      {/* <!-- Reservation Start --> */}
      <div className="container-fluid my-5">
        <div className="container">
          <div className="reservation position-relative overlay-top overlay-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6 my-5 my-lg-0">
                <div className="p-5">
                  <div className="mb-4">
                    <h1 className="display-3 text-primary">30% OFF</h1>
                    <h1 className="text-white">For Online Reservation</h1>
                  </div>
                  <p className="text-white">Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                    ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea</p>
                  <ul className="list-inline text-white m-0">
                    <li className="py-2"><span className="fa fa-check text-primary mr-3"></span> Lorem ipsum dolor sit amet</li>
                    <li className="py-2"><span className="fa fa-check text-primary mr-3"></span> Lorem ipsum dolor sit amet</li>
                    <li className="py-2"><span className="fa fa-check text-primary mr-3"></span> Lorem ipsum dolor sit amet</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-center p-5" style={{ background: "rgba(51, 33, 29, .8)" }}>
                  <h1 className="text-white mb-4 mt-5">Book Your Table</h1>
                  <form className="mb-5">
                    <div className="form-group">
                      <input type="text" className="form-control bg-transparent border-primary p-4" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control bg-transparent border-primary p-4" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <div className="date" id="date" data-target-input="nearest">
                        <input type="text" className="form-control bg-transparent border-primary p-4 datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="time" id="time" data-target-input="nearest">
                        <input type="text" className="form-control bg-transparent border-primary p-4 datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" />
                      </div>
                    </div>
                    <div className="form-group">
                      <select className="custom-select bg-transparent border-primary px-4" style={{ height: "49px" }}>
                        <option selected>Person</option>
                        <option value="1">Person 1</option>
                        <option value="2">Person 2</option>
                        <option value="3">Person 3</option>
                        <option value="3">Person 4</option>
                      </select>
                    </div>

                    <div>
                      <button className="btn btn-primary btn-block font-weight-bold py-3" type="submit">Book Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Reservation End --> */}


      {/* <!-- Testimonial Start --> */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Testimonial</h4>
            <h1 className="display-4">Our Clients Say</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item">
              <div className="d-flex align-items-center mb-3">
                <Image className="/img-fluid" src="/img/testimonial-1.jpg" alt="pic" width={100} height={100} />
                <div className="ml-3">
                  <h4>Client Name</h4>
                  <span>Profession</span>
                </div>
              </div>
              <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div>
            <div className="testimonial-item">
              <div className="d-flex align-items-center mb-3">
                <Image className="/img-fluid" src="/img/testimonial-2.jpg" alt="pic" width={100} height={100} />
                <div className="ml-3">
                  <h4>Client Name</h4>
                  <span>Profession</span>
                </div>
              </div>
              <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div>
            <div className="testimonial-item">
              <div className="d-flex align-items-center mb-3">
                <Image className="/img-fluid" src="/img/testimonial-3.jpg" alt="pic" width={100} height={100} />
                <div className="ml-3">
                  <h4>Client Name</h4>
                  <span>Profession</span>
                </div>
              </div>
              <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div>
            <div className="testimonial-item">
              <div className="d-flex align-items-center mb-3">
                <Image className="/img-fluid" src="/img/testimonial-4.jpg" alt="pic" width={100} height={100} />
                <div className="ml-3">
                  <h4>Client Name</h4>
                  <span>Profession</span>
                </div>
              </div>
              <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}


      {/* <!-- Footer Start --> */}
      <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
        <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Get In Touch</h4>
            <p className="flex items-center"><span className="fa fa-map-marker-alt mr-2 "><FaMapMarkerAlt /></span> 123 Street, New York, USA</p>
            <p className="flex items-center"><span className="fa fa-phone-alt mr-2 "><FaPhone /></span> +012 345 67890</p>
            <p className="m-0 flex items-center"><span className="fa fa-envelope mr-2 "><FaEnvelope /></span> info@example.com</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Follow Us</h4>
            <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
            <div className="d-flex justify-content-start">
              <Link href="/"><FaTwitter className="w-12 h-12 mx-2  text-white hover:-translate-y-2 duration-200" /> </Link>
              <Link href="/"><FaFacebookSquare className="w-12 h-12 mx-2  text-white hover:-translate-y-2 duration-200" /> </Link>
              <Link href="/"><FaLinkedin className="w-12 h-12 mx-2  text-white hover:-translate-y-2 duration-200" /> </Link>
              <Link href="/"><FaSquareInstagram className="w-12 h-12 mx-2  text-white hover:-translate-y-2 duration-200" /> </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Open Hours</h4>
            <div>
              <h6 className="text-white text-uppercase">Monday - Friday</h6>
              <p>8.00 AM - 8.00 PM</p>
              <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
              <p>2.00 PM - 8.00 PM</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: "3px" }}>Newsletter</h4>
            <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
            <div className="w-100">
              <div className="input-group">
                <input type="text" className="form-control border-light" style={{ padding: "25px" }} placeholder="Your Email" />
                <div className="input-group-append">
                  <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{ borderColor: " rgba(256, 256, 256, .1) !important;" }}>
          <p className="mb-2 text-white">Copyright &amp;copy; <Link className="font-weight-bold" href="/">Domain</Link> . All Rights Reserved</p>
          <p className="m-0 text-white">Designed by <Link className="font-weight-bold" href="https://htmlcodex.com">HTML Codex</Link> </p>
        </div>
      </div >
      {/* <!-- Footer End --> */}


      {/* <!-- Back to Top --> */}
      <Link href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><span className="fa fa-angle-double-up"></span></Link>
    </>
  );
}
