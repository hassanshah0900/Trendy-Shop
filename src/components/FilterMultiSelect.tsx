"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";

interface Props {
  options: string[];
  onChange: (selectedOptions: string[]) => void;
  selectedOptions: string[];
  title: string;
  open?: boolean;
}
export default function FilterMultiSelect({
  options,
  onChange,
  selectedOptions,
  title,
  open = false,
}: Props) {
  const [isOpen, setOpen] = useState<boolean>(open);

  function toggle(option: string) {
    // remove current option from selectedOptions if it is present. Otherwise, add it to selectedOptions
    const idx = selectedOptions.findIndex((op) => op === option);
    idx !== -1 ? selectedOptions.splice(idx, 1) : selectedOptions.push(option);

    onChange(selectedOptions);
  }
  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex justify-between items-center font-bold text-lg md:text-xl text-primary w-full cursor-pointer"
      >
        <span>{title}</span>
        <FaChevronRight
          className={`transition-transform text-sm ${isOpen && "rotate-90"}`}
        />
      </button>
      <div
        className={`grid overflow-hidden transition-all ${
          isOpen ? "grid-rows-[max-content] pt-5" : "grid-rows-[0px]"
        }`}
      >
        <div className="flex gap-x-1 gap-y-2 flex-wrap p-1">
          {options.map((option) => (
            <button
              tabIndex={isOpen ? 0 : 1}
              key={option}
              onClick={() => toggle(option)}
              className={`py-1 px-4 rounded-full cursor-pointer ${
                selectedOptions.includes(option)
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
