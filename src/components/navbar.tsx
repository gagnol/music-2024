"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useTransition } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";
import { Button, DropdownMenu, Text } from "@radix-ui/themes";
import { FaCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const links = [
  { url: "/", title: "Home" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const LANG = [
  { lang: "English", locale: "en" },
  { lang: "Español", locale: "es" },
];

const Socials = [
  {
    name: "Insta",
    src: "/instagram.svg",
    link: "https://www.instagram.com/jsxplanet/",
  },
  {
    name: "LinkedIn",
    src: "/linkedin.png",
    link: "https://www.linkedin.com/in/guilleagnoletti",
  },
];

const Navbar = () => {
  /* Language */
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const onSelectChange = (locale: string) => {
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };

  /* responsive animate */
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      className="w-full h-[65px] top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10"
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="hidden xl:flex h-auto w-auto xl:flex-row items-center">
          <Text size="6"> Music Wave </Text>
        </div>

        <div className="hidden xl:flex w-[500px] h-full xl:flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {links.map((link) => (
              <NavLink link={link} key={link.title} />
            ))}
          </div>
        </div>

        <div className="hidden xl:flex xl:flex-row gap-5">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name}>
              <Image src={social.src} alt={social.name} width={24} height={24} />
            </Link>
          ))}
        </div>

        <div className="hidden xl:flex h-auto w-auto xl:flex-row items-center">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="surface" size="3" mx="5">
              {localeActive}
                <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content size="2">
              {LANG.map((item) => (
                <DropdownMenu.Item
                  key={item.lang}
                  onSelect={() => onSelectChange(item.locale)}
                >
                  <FaCircle />
                  {item.lang}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>

        {/* RESPONSIVE MENU */}
        <div className="md:hidden">
          {/* MENU BUTTON */}
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.div
              variants={topVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
            <motion.div
              variants={centerVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded"
            ></motion.div>
            <motion.div
              variants={bottomVariants}
              animate={open ? "opened" : "closed"}
              className="w-10 h-1 bg-white rounded origin-left"
            ></motion.div>
          </button>

          {/* MENU LIST */}
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            >
              {links.map((link) => (
                <motion.div variants={listItemVariants} key={link.title}>
                  <Link href={link.url}>{link.title}</Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
