import Marquee from "@/app/components/common/Marquee";
import Image from "next/image";
const images = [
  "/company/1.png",
  "/company/2.png",
  "/company/3.png",
  "/company/4.png",
  "/company/5.png",
  "/company/6.png",
  "/company/7.png",
  "/company/8.png",
  "/company/9.png",
  "/company/10.png",
  "/company/11.png",
  "/company/12.png",
  "/company/14.png",
];
const revers = [
  "/company/1.png",
  "/company/2.png",
  "/company/3.png",
  "/company/4.png",
  "/company/5.png",
  "/company/6.png",
  "/company/7.png",
  "/company/8.png",
  "/company/9.png",
  "/company/10.png",
  "/company/11.png",
  "/company/12.png",
  "/company/14.png",
].reverse();
function ClientMarquee() {
  return (
    <div className=" w-full  flex-col flex text-white max-md:mb-10 my-20 items-center justify-center">
      <div className="max-md:text-3xl max-md:px-4  text-4xl font-extrabold tracking-ms leading-ms text-center w-full md:w-1/4">
        <p>Clients we&apos;ve partnered with</p>
      </div>
      <div className=" w-full mt-20 max-md:mt-10">
        <Marquee className="[--duration:40s]">
          {images.map((url) => (
            <Image
              key={url}
              height={500}
              className=" mx-5  object-contain size-8 w-full"
              width={500}
              alt="client-logo-image"
              src={url}
            />
          ))}
        </Marquee>
      </div>
      <div className=" w-full mt-8 mb-12">
        <Marquee reverse className="[--duration:40s]">
          {revers.map((url) => (
            <Image
              key={url}
              height={500}
              className=" mx-5 object-contain  size-8 w-full"
              width={500}
              alt="client-logo-image"
              src={url}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default ClientMarquee;
