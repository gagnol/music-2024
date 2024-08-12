import { Card, Quote, Strong, Text } from "@radix-ui/themes";
import Image from "next/image";



export function BlogCardWithImage() {
  return (
    <Card  className="p-5 shadow-lg "  >
      <div className="p-0 ">
        <div className="w-full mb-4 h-[211px] ">
          <Image
            width={768}
            height={768}
            src="/images/blogs/blog-1.png"
            className="w-full h-full rounded-lg"
            alt=""
          />
        </div>
        <Text  size="3" className="leading-[45px] mb-4 text-white">
         <Strong>How to Build a $24 Billions </Strong> 
        </Text ><br/>
        <Quote  className="font-normal mb-4 !text-base text-gray-400 ">
          I&apos;ve come to the conclusion that 50% of folks in this world
          don&apos;t even spend enough time alone with their thoughts to have
          their own opinions. They haven&apos;t done the work to decide what
          they think. And that isn&apos;t a rewarding way to live.
        </Quote ><br/><br/><br/>
        <div className="flex items-center gap-3">
          <div className="">
            <Image
              width={256}
              height={256}
              src="/images/avatar3.jpg"
              className="w-12 h-12 rounded-lg"
              alt="photo"
            />
          </div>
          <div>
            <Text  className="!font-bold !text-sm text-gray-400 px-1">
              Andrew Peterson
            </Text ><br/>
            <Text  className="!font-normal !text-xs text-gray-500 px-1 ">
              Redactor
            </Text >
          </div>
        </div>
      </div>
    </Card>
  );
}

export default BlogCardWithImage;
