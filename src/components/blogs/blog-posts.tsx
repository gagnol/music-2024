"use client";

import React from "react";
import Image from "next/image";
import BlogCardWithImage from "./blog-card-with-image";
import SimpleBlogCard from  "./simple-blog-card";
import { Card, Strong, Text } from "@radix-ui/themes";

const SIMPLE_CONTENT = [
  {
    title: "Podcasts",
    subtitle: "An interview with Tesla founder.",
    name: "By Alexa Rossa",
  },
  {
    title: "Interviews",
     subtitle: "Make $500k through small biz or raise it from family.",
    name: "By Jonathan Silvia",
  },
  {
    title: "News",
    subtitle: "Behind Scene",
    name: "By Kim Lenox",
  },
];

export function BlogPost() {
  return (
    <section className="w-full max-w-7xl mx-auto flex 
    flex-col items-center px-4 py-20">
      <Text color="gray" className="my-3 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md" size="9">
        Latest Blogs
      </Text>
      <Text   className="text-center" >
        Check out the latest articles
      </Text >
      <Text 
        color="gray"
        className="mt-2 mb-8 w-full text-center font-normal
         !text-gray-400 max-w-4xl">
        Stay at the forefront of the latest developments in the world of
        biology, as our team of expert writers and researchers bring you fresh
        insights, groundbreaking discoveries, and captivating stories from the
        ever-evolving realm of biological sciences.
      </Text >
      <div className="mt-10 gap-5 grid grid-cols-1 md:grid-cols-2
       lg:grid-cols-4">
        <div className=" md:border-r px-3 border-blue-gray-100">
          <div className="!border-b border-blue-gray-100 mb-5">
            <Card className="p-2">
              <div className="p-0 pb-5">
                <Text 
                  size="3"
                  className=" leading-[45px] mb-4 !text-white "
                >
                  <Strong>Exploring the Role</Strong>
                    </Text ><br/>
                <Text className="py-2 text-normal mb-4 !text-base text-gray-400 ">
                  Investigate the emerging field of epigenetics and its impact
                  on understanding how environmental factors can influence gene
                  expression and inheritance.
                </Text>
                <div className="my-2 flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/images/avatar2.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Text  className="!font-bold !text-sm text-gray-400">
                      Mathew Glock
                    </Text ><br/>
                    <Text  className="!font-normal !text-xs text-gray-500">
                      Author
                    </Text >
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="!border-b md:border-none border-blue-gray-100 mb-5">
            <Card  className="p-2">
              <div className="p-0 pb-5">
                <Text 
                 size="3"
                  className="leading-[45px] mb-4 !text-white "
                >
                  <Strong>Gut Bacteria Affect Our Health</Strong> 
                </Text ><br/>
                <Text  className="py-2 text-normal mb-4 !text-base text-gray-400 ">
                  Dive into the latest research on the human microbiome.<br/>
                  Gut bacteria play a crucial role in maintaining our overall health by influencing various bodily functions.
                  
                </Text >
                <div className="my-2 flex items-center gap-3">
                  <div className="">
                    <Image
                      width={256}
                      height={256}
                      src="/images/avatar1.jpg"
                      className="w-12 object-cover h-12 rounded-lg"
                      alt="photo"
                    />
                  </div>
                  <div>
                    <Text  className="!font-bold !text-sm text-gray-400">
                      Alexa Kin
                    </Text ><br/>
                    <Text  className="!font-normal !text-xs text-gray-500">
                      Author
                    </Text >
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <BlogCardWithImage />
        </div>
        <div className="md:border-l px-3 border-blue-gray-100">
          <div className="!border-b border-blue-gray-100 mb-3">
            <Card className="p-2">
              <div className="p-0 pb-5">
                <div className="w-full mb-4 h-[149px] ">
                  <Image
                    width={768}
                    height={768}
                    src="/images/blogs/blog-2.png"
                    className="w-10/12 md:w-full 
                    object-cover h-full rounded-lg"
                    alt=""
                  />
                </div>
                <Text 
                  size="3"
                  className=" leading-[45px] mb-6 text-white "
                >
                  <Strong>Inspired Innovations</Strong>
                </Text >
                <br/>
                <Text  className=" text-gray-400  !font-bold !text-sm ">
                  by Sandra Fox
                </Text >
              </div>
            </Card>
          </div>
          <div className="!border-b md:border-none 
          border-blue-gray-100 mb-3">
            <Card className="p-2">
              <div className="p-0 pb-5">
                <div className="w-full mb-4 h-[149px]">
                  <Image
                    width={768}
                    height={768}
                    src="/images/blogs/blog-3.png"
                    className="w-10/12 md:w-full object-cover
                     h-full rounded-lg"
                    alt="image"
                  />
                </div>
                <Text size="3" className=" leading-[45px] mb-6 !text-white ">
                 <Strong> Bringing Back Extinct Species</Strong>
                </Text >
                <br/>
                <Text  className=" !font-bold !text-sm text-gray-400">
                  by Emma Roberts
                </Text >
              </div>
            </Card>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 md:grid-cols-1 md:border-l 
         md:pr-36 border-blue-gray-100">
          {SIMPLE_CONTENT.map((props, idx) => (
            <div
              key={idx}
              className={`${
                SIMPLE_CONTENT.length - 1 !== idx
                  ? "md:border-b"
                  : "md:border-none"
              } border-blue-gray-100 mb-6 `}
            >
              <SimpleBlogCard key={idx} {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPost;
