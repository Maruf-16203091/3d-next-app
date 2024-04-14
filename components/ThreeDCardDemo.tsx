import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer>
      <CardBody>
        <CardItem translateZ="50" className="text-xl font-bold">
          Make things float in air
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-sm mt-2">
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="mt-4">
          <Image
            src="/images/sample-image.jpg"
            height="400"
            width="600"
            className="object-cover"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem as={Link} href="https://twitter.com/mannupaaji" target="__blank" className="px-4 py-2 rounded-xl text-xs font-normal">
            Try now →
          </CardItem>
          <CardItem as="button" className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold">
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
