
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import LocalSwitcher from "./local-switcher";

function Navbar({ className }: { className?: string }) {

  const [active, setActive] = useState<string | null>(null);
  


  return (
    <div
    className={cn(" top-5 inset-x-0 max-w-2xl mx-auto px-3 z-50 ", className)}
    >

      <Menu setActive={setActive} >
        <Link href="/">
      <MenuItem item="Home" setActive={setActive} active={active}/>
      </Link>
      <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>  
        
        <LocalSwitcher/>
        
      </Menu>

    </div>
  )
}

export default Navbar