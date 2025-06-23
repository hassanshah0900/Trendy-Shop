"use client";

import { useFilters } from "@/contexts/FilterContext";
import { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrClose } from "react-icons/gr";
import Button from "./Button";
import Input from "./Input";

export default function Searchbar() {
  const { filters, setFilters } = useFilters();
  const [isOpen, setOpen] = useState<boolean>(false);

  const openSearchBar = () => {
    setOpen(true);
  };

  const closeSearchBar = () => {
    setOpen(false);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.currentTarget.value });
  };

  return (
    <>
      <Input
        className="bg-muted max-w-[400px] w-full hidden md:flex"
        icon={<CiSearch />}
        placeholder="Search for Products..."
        onChange={handleSearch}
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
          onChange={handleSearch}
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
