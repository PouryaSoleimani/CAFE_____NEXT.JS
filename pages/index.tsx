// ^ HOME PAGE =================================================================================================================================================
import Link from "next/link";
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

      {/* <!-- Back to Top --> */}
      <Link href="/" className="btn btn-lg btn-primary btn-lg-square back-to-top"><span className="fa fa-angle-double-up"></span></Link>
    </>
  );
}
// GET STATIC PROPS =================================================================================================================
export const getStaticProps: GetStaticProps = async (ctx) => {

  const request = await fetch("https://cafe-server-5u3w.onrender.com//services")
  const data = await request.json()

  const menuReq = await fetch("https://cafe-server-5u3w.onrender.com//menu")
  const menuData = await menuReq.json()

  const commentsReq = await fetch("https://cafe-server-5u3w.onrender.com//comments")
  const comments = await commentsReq.json()

  return {
    props: { data: data, menuData: menuData, comments: comments },
    revalidate: 43200
  }
}

export default HomePage