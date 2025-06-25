"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { getTrackBackground, Range } from "react-range";

export type PriceRange = [number, number];

interface Props {
  onPriceChange: (priceRange: PriceRange) => void;
  priceRange: PriceRange;
}

export default function FilterPriceRange({ priceRange, onPriceChange }: Props) {
  const [values, setValues] = useState<PriceRange>(priceRange);
  const [isOpen, setOpen] = useState<boolean>(true);

  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex justify-between items-center w-full cursor-pointer font-bold text-lg md:text-xl text-primary"
      >
        <span>Price</span>
        <FaChevronRight
          className={`transition-transform text-sm ${isOpen && "rotate-90"}`}
        />
      </button>
      <div
        className={`grid ${
          isOpen ? "grid-rows-1 mt-5 pb-8" : "grid-rows-[0px] overflow-hidden"
        }`}
      >
        <Range
          min={0}
          max={1000}
          values={values}
          step={50}
          onChange={(values) => setValues(values as PriceRange)}
          onFinalChange={(values) => {
            onPriceChange(values as PriceRange);
          }}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                background: getTrackBackground({
                  values,
                  min: 0,
                  max: 1000,
                  colors: ["#f0f0f0", "#000", "#f0f0f0"],
                }),
              }}
              className="h-1 w-full rounded-lg bg-muted"
            >
              {children}
            </div>
          )}
          renderThumb={({ props, index }) => (
            <div
              {...props}
              key={props.key}
              className="w-3 h-3 rounded-full bg-primary"
            >
              <div
                className={`absolute top-4 text-sm text-primary ${
                  index === 0 ? "left-0" : "right-0"
                }`}
              >
                ${values[index].toFixed()}
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
