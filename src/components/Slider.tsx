"use client";

import React, { ReactNode, useRef, useState } from "react";
import Button from "./Button";
import { GrClose } from "react-icons/gr";

interface Props {
  children: ReactNode;
  button: ReactNode;
  alignment: "left" | "right";
  className?: string;
}
export default function Slider({
  children,
  button,
  alignment,
  className,
}: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  const openSlider = () => {
    ref.current?.showModal();
    setOpen(true);
  };

  const closeSlider = () => {
    setTimeout(() => ref.current?.close(), 200);
    setOpen(false);
  };
  return (
    <div className={className}>
      <Button onClick={openSlider} variant="secondary" display="iconRound">
        {button}
      </Button>
      <dialog
        onClick={(e) => e.currentTarget === e.target && closeSlider()}
        ref={ref}
      >
        <div
          className={`fixed transition-all top-0 h-full w-[80%] sm:w-1/2 md:w-1/3 p-3 bg-secondary ${setAlignmentClasses(
            alignment,
            isOpen
          )}`}
        >
          <div
            className={`w-max ${alignment === "left" ? "ms-auto" : "me-auto"}`}
          >
            <Button
              onClick={closeSlider}
              variant="secondary"
              display="iconSquare"
            >
              <GrClose />
            </Button>
          </div>
          <div>{children}</div>
        </div>
      </dialog>
    </div>
  );
}

function setAlignmentClasses(alignment: "left" | "right", isOpen: boolean) {
  if (alignment === "left") {
    return `left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`;
  }

  return `right-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`;
}
