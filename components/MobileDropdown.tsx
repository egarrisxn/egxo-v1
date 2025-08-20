"use client";

import { useState } from "react";
import Link from "next/link";
import { HamburgerIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { NavItem } from "./NavbarItem";

export function MobileDropdown() {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="none" size="icon">
          <HamburgerIcon className="size-[1rem] transition-all hover:text-slate-500" />
          <span className="sr-only">Dropdown menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleItemClick}>
          <NavItem href="/" label="home">
            HOME
          </NavItem>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleItemClick}>
          <NavItem href="/about" label="about">
            ABOUT
          </NavItem>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleItemClick}>
          <NavItem href="/projects" label="projects">
            PROJECTS
          </NavItem>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleItemClick}>
          <NavItem href="/contact" label="contact">
            CONTACT
          </NavItem>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleItemClick}>
          <Link
            href="https://egxo.fyi"
            className="flex hover:text-yellow-400 sm:items-center sm:justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            BLOG
            <span className="sr-only">Link to my blog</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
