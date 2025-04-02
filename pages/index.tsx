// ^ HOME PAGE =================================================================================================================================================
import Image from "next/image";
import Link from "next/link";
import { FaEnvelope, FaFacebookSquare, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTruck, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import 'animate.css';
import AboutUsTemplate from "@/components/templates/HomePage/AboutUsTemplate";
import SliderTemplate from "@/components/templates/HomePage/SliderTemplate";
import ServicesTemplate from "@/components/templates/HomePage/ServicesTemplate";
import { GetStaticProps } from "next";
import OfferTemplate from "@/components/templates/HomePage/OfferTemplate";
import MenuTemplate from "@/components/templates/HomePage/MenuTemplate";
import ReservationTemplate from "@/components/templates/HomePage/ReservationTemplate";
import TestimonialTemplate from "@/components/templates/HomePage/TestimonialTemplate";

interface ServicesTemplateProps {
  data: [{ serviceID: number, serviceTitle: string, description: string, imgSRC: string, iconName: React.ElementType }],
  menuData: [{ id: number, name: string, imgSRC: string, icon: string, price: number | string, description: string }],
  comments: [{ id: number | string, username: string, body: string, imgSRC: string, productID: string }]
}

//  COMPONENT ================================================================================================================================================
const HomePage: React.FC<ServicesTemplateProps> = ({ data, menuData, comments }) => {
  return (
    <>

      <SliderTemplate />
      <AboutUsTemplate />
      <ServicesTemplate data={data} />
      <OfferTemplate />
      <MenuTemplate menuData={menuData} />
      <ReservationTemplate />
      <TestimonialTemplate comments={comments} />

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
        <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{ borderColor: " rgba(256, 256, 256, .1) !important" }}>
          <p className="mb-2 text-white">Copyright &amp;copy; <Link className="font-weight-bold" href="/">Domain</Link> . All Rights Reserved</p>
        </div>
      </div >
      {/* <!-- Footer End --> */}


      {/* <!-- Back to Top --> */}
      <Link href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><span className="fa fa-angle-double-up"></span></Link>
    </>
  );
}
// GET STATIC PROPS =================================================================================================================
export const getStaticProps: GetStaticProps = async (ctx) => {

  const request = await fetch("http://localhost:4000/services")
  const data = await request.json()

  const menuReq = await fetch("http://localhost:4000/menu")
  const menuData = await menuReq.json()

  const commentsReq = await fetch("http://localhost:4000/comments")
  const comments = await commentsReq.json()

  return {
    props: {
      data: data,
      menuData: menuData,
      comments: comments
    }, revalidate: 43200
  }
}

export default HomePage