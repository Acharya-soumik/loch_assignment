import Gradient from "@/assets/images/bg_gradient.svg";
import Bell from "@/assets/icons/bell.svg";
import Card from "../cards/Card";

import Cohort from "@/assets/images/Cohorts.png";
import Eye from "@/assets/icons/eye.svg";
import Logo from "@/assets/icons/logo.svg";
import Testimonials from "../testimonials/Testimonials";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonailData = [
  {
    title: "Jack F",
    desc: "'Love how Loch integrates portfolio analytics and whale watching into one unified app.'",
    role: "ex Blockchain PM",
  },
  {
    title: "Test 1",
    desc: "'Love how Loch integrates portfolio analytics and whale watching into one unified app.'",
    role: "ex Blockchain PM",
  },
  {
    title: "TEst 3",
    desc: "'Love how Loch integrates portfolio analytics and whale watching into one unified app.'",
    role: "ex Blockchain PM",
  },
  {
    title: "TEst 4",
    desc: "'Love how Loch integrates portfolio analytics and whale watching into one unified app.'",
    role: "ex Blockchain PM",
  },
  {
    title: "Test 4",
    desc: "'Love how Loch integrates portfolio analytics and whale watching into one unified app.'",
    role: "ex Blockchain PM",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 1 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Gradient})`,
      }}
      className="overflow-auto hidden sm:block flex-1 pt-6  pl-[2vw] bg-cover bg-no-repeat bg-blue-950 no-scrollbar"
    >
      <div className="flex h-[30vh]">
        <div className="w-1/2 mt-10">
          <img className="mb-4" src={Bell} alt="" />
          <h2 className="mb-4 header text-white">
            Get notified when a highly correlated whale makes a move
          </h2>
          <p className="desc text-gray-50 pr-4">
            Find out when a certain whale moves more than any preset amount
            on-chain or when a dormant whale you care about becomes active.
          </p>
        </div>
        <div className="w-1/2 border border-green-500 pl-6 py-4 ">
          <Carousel
            responsive={responsive}
            autoPlay
            swipeable
            ssr
            infinite
            arrows={false}
            itemClass="mr-8"
          >
            <Card />
            <Card />
            <Card />
          </Carousel>
        </div>
      </div>
      <br />
      <br />
      <div className=" flex h-[46vh]">
        <div className="flex-1 flex items-center">
          <img className="max-h-[100%]" src={Cohort} alt="" />
        </div>
        <div className="flex-1 text-right px-8">
          <img src={Eye} className="ml-auto" />
          <br />
          <h2 className="header text-white">Watch what the whales are doing</h2>
          <br />
          <p className="desc text-gray-50">
            All whales are not equal. Know exactly what the whales impacting
            YOUR portfolio are doing.
          </p>
        </div>
      </div>
      <div className="h-[20vh]">
        <h2 className="text-right relative right-16 mb-4 header text-white">
          Testimonials
        </h2>
        <hr className="w-[90%] mx-auto" />
        <div className="flex py-8">
          <img src={Logo} className="mt-auto" />
          <Carousel
            className="w-[90%] flex ml-auto"
            responsive={responsive}
            autoPlay
            swipeable
            ssr
            infinite
            arrows={false}
          >
            {testimonailData.map((item) => (
              <Testimonials {...item} key={item.title} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
