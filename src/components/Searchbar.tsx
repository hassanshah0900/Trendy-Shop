"use client";

import React, { useState } from "react";
import Input from "./Input";
import { CiSearch } from "react-icons/ci";
import Button from "./Button";
import { GrClose } from "react-icons/gr";

export default function Searchbar() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const openSearchBar = () => {
    setOpen(true);
  };

  const closeSearchBar = () => {
    setOpen(false);
  };
  return (
    <>
      <Input
        className="bg-muted max-w-[400px] w-full hidden md:flex"
        icon={<CiSearch />}
        placeholder="Search for Products..."
      />
      <Button
        onClick={openSearchBar}
        className="block md:hidden"
        variant="secondary"
        display="iconRound"
      >
        <CiSearch />
      </Button>
      <div
        className={`absolute top-0 left-0 h-full w-full bg-secondary flex justify-center items-center gap-4 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <Input
          className="bg-muted w-full"
          icon={<CiSearch />}
          placeholder="Search for Products..."
        />
        <Button
          onClick={closeSearchBar}
          variant="secondary"
          display="iconSquare"
        >
          <GrClose />
        </Button>
      </div>
    </>
  );
}
