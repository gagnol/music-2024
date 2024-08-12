
import {  Strong, Text } from "@radix-ui/themes"

interface SimpleContentCard {
    title: string;
    subtitle: string;
    name: string;

  }
  
  export function SimpleBlogCard({
    title,
    subtitle,
    name,
  
  }: SimpleContentCard) {
    return (
      <div className="p-2 pb-10 shadow-lg xl:w-[300px]
       shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
        <div className="flex items-center mb-3 gap-2">
           <Text className="w-full" size="2" >
           <Strong>{title}</Strong> 
          </Text>
        </div>
        <Text className="!text-base w-7/12 md:w-full mb-3 font-normal
         !text-gray-400">
          {subtitle}
        </Text><br/>
        <Text className="!text-xs font-normal !text-gray-500">
          {name}
        </Text>
      </div>
    );
  }

  export default SimpleBlogCard;