// components/ui/3d-card.tsx

import React, { createContext, useState, useContext, useRef, useEffect } from "react";
import { cn } from "@/utils/cn";

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined);

export const CardContainer = ({ children, className, containerClassName }: { children?: React.ReactNode; className?: string; containerClassName?: string; }) => {
  // Same as provided in the code snippet
  // ...
};

export const CardBody = ({ children, className }: { children: React.ReactNode; className?: string; }) => {
  // Same as provided in the code snippet
  // ...
};

export const CardItem = ({ as: Tag = "div", children, className, translateX = 0, translateY = 0, translateZ = 0, rotateX = 0, rotateY = 0, rotateZ = 0, ...rest }: { as?: React.ElementType; children: React.ReactNode; className?: string; translateX?: number | string; translateY?: number | string; translateZ?: number | string; rotateX?: number | string; rotateY?: number | string; rotateZ?: number | string; [key: string]: any; }) => {
  // Same as provided in the code snippet
  // ...
};

export const useMouseEnter = () => {
  // Same as provided in the code snippet
  // ...
};
