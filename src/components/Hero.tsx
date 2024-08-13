"use client"
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { useTranslations } from "next-intl";
import { Button, Text } from "@radix-ui/themes";
import Image from "next/image";

function Hero() {
  const t = useTranslations("Home")
  return (
    <div className="max_width_sc flex justify-center text-center
    items-center w-full h-[750px] m-4"
    style={{
      backgroundImage: "url('/22.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"/>
      <div className="mt-[150px] xl:mt-0 max-w-[300px] md:max-w-[70%]">
        <Text size="9" className="text-center  p-3 m-2">
          {t("t1")}
        </Text>
          <div className="mt-8 mb-10">
        <Text size="4" className="text-center p-3 m-2">
          {t("t2")}
       </Text>
       </div>
        <div className="text-center justify-center items-center">
          <Link href="/courses">
            <Button size="4" variant="surface">
              Explore Courses
            </Button>
          </Link>
          <div className="block xl:flex">
            <Image src="/225.png" alt="imageLogos" width={500} height={500}
              className=" h-[175px] xl:my-20" />
            <Image src="/226.png" alt="imageLogos" width={500} height={500}
              className="hidden xl:block h-[175px] xl:my-20" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;