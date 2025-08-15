"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from 'next/image'

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    url: string;
    src: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);
        
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        // Set direction
        if (containerRef.current) {
          if (direction === "left") {
            containerRef.current.style.setProperty(
              "--animation-direction",
              "forwards",
            );
          } else {
            containerRef.current.style.setProperty(
              "--animation-direction",
              "reverse",
            );
          }
        }

        // Set speed
        if (containerRef.current) {
          if (speed === "fast") {
            containerRef.current.style.setProperty("--animation-duration", "20s");
          } else if (speed === "normal") {
            containerRef.current.style.setProperty("--animation-duration", "40s");
          } else {
            containerRef.current.style.setProperty("--animation-duration", "80s");
          }
        }

        setStart(true);
      }
    };

    addAnimation();
  }, [direction, speed]);


  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-10 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <li
            className="relative"
            key={item.url}
          >
              <a href={item.url} target="blank" title={item.title}>
                <Image src={item.src}
                  alt=""
                  width={150}
                  height={450}
                  />
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
