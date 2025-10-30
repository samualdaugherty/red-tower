"use client";

import * as React from "react";
import Image from "next/image";
import { LinkOutButton } from "@/components/ui/link-out-button";
import { ComingSoonBadge } from "@/components/ui/coming-soon-badge";

interface PortfolioItemProps {
  title: string;
  description: string;
  desktopImage: string;
  mobileImage?: string;
  link?: string;
  comingSoon?: boolean;
  index: number;
  showDesktopBorder?: boolean; // optional: toggle border around desktop screenshot
  desktopFit?: "cover" | "contain"; // object-fit for desktop screenshot
}

export function PortfolioItem({
  title,
  description,
  desktopImage,
  mobileImage,
  link,
  comingSoon = false,
  showDesktopBorder = true,
  desktopFit = "cover",
}: PortfolioItemProps) {
  return (
    <div
      className="portfolio-item relative w-full py-14 px-6 md:px-8 rounded-2xl bg-bg shadow-clock"
      style={{
        position: "sticky",
        top: "60px",
      }}
    >
      {/* Desktop Layout (>= 768px) */}
      <div className="hidden md:flex gap-6 items-stretch w-full max-w-7xl mx-auto">
        {/* Summary Column (Left) */}
        <div className="flex flex-col items-start justify-between w-[375px] shrink-0">
          {/* Top Corner Border */}
          <div className="flex items-center justify-center">
            <div className="w-8 h-8 -rotate-90">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H31V31" stroke="var(--rtd-color-accent)" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1 flex items-end px-1">
            <p className="font-body font-light text-base leading-[1.5] text-fg">
              {description}
            </p>
          </div>

          {/* Bottom Corner Border */}
          <div className="flex items-center justify-center self-end -mt-4">
            <div className="w-8 h-8 rotate-90">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H31V31" stroke="var(--rtd-color-accent)" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Shots Column (Right) */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Header: Title + Button */}
          <div className="flex gap-8 items-center">
            <h3 className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg whitespace-nowrap">
              {title}
            </h3>
            {comingSoon ? (
              <ComingSoonBadge />
            ) : link ? (
              <LinkOutButton href={link} variant="dark" size="large" />
            ) : null}
          </div>

          {/* Screenshots */}
          <div className="flex gap-4 items-stretch w-full flex-1">
            {/* Desktop Screenshot */}
            <div className="flex-1 backdrop-blur-sm bg-fg/10 rounded-2xl p-6 flex items-center justify-center">
              <div className={`w-full ${showDesktopBorder ? "border border-fg" : ""} rounded-2xl overflow-hidden shadow-photo`}>
                <div className="relative w-full aspect-[1920/1200]">
                  <Image
                    src={desktopImage}
                    alt={`${title} desktop screenshot`}
                    fill
                    className={`${desktopFit === "contain" ? "object-contain object-center" : "object-cover object-top"}`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>

            {/* Mobile Screenshot (if provided) */}
            {mobileImage && (
              <div className="backdrop-blur-sm bg-fg/10 rounded-2xl p-6 flex items-center justify-center shrink-0">
                <div className="w-[180px] overflow-hidden shadow-photo">
                  <div className="relative w-full aspect-[894/1842]">
                    <Image
                      src={mobileImage}
                      alt={`${title} mobile screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="180px"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout (< 768px) */}
      <div className="flex md:hidden flex-col gap-6 w-full">
        {/* Shots First (Title + Single Image) */}
        <div className="flex flex-col gap-4">
          {/* Header: Title + Button */}
          <div className="flex gap-4 items-center">
            <h3 className="font-header text-[32px] leading-none tracking-[-0.96px] text-fg whitespace-nowrap">
              {title}
            </h3>
            {comingSoon ? (
              <div className="border-2 border-accent rounded-full px-3 py-0.5 flex items-center justify-center">
                <p className="font-header text-[20px] leading-none tracking-[-0.6px] text-fg whitespace-nowrap">
                  Coming Soon
                </p>
              </div>
            ) : link ? (
              <LinkOutButton href={link} variant="dark" size="small" />
            ) : null}
          </div>

          {/* Desktop Screenshot Only (mobile hides mobile screenshot) */}
          <div className="backdrop-blur-sm bg-fg/10 rounded-2xl p-6 flex items-center justify-center w-full">
            <div className={`w-full ${showDesktopBorder ? "border border-fg" : ""} rounded-2xl overflow-hidden shadow-photo`}>
              <div className="relative w-full aspect-[1920/1080]">
                <Image
                  src={desktopImage}
                  alt={`${title} desktop screenshot`}
                  fill
                  className={`${desktopFit === "contain" ? "object-contain object-center" : "object-cover object-top"}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Summary Below */}
        <div className="flex flex-col gap-4 w-full">
          {/* Top Corner Border (rotated 180°) */}
          <div className="flex items-center justify-center self-start -mb-8 -ml-1">
            <div className="w-8 h-8 -rotate-90">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H31V31" stroke="var(--rtd-color-accent)" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </div>
          </div>

          {/* Description */}
          <p className="font-body font-light text-base leading-[1.5] text-fg px-2">
            {description}
          </p>

          {/* Bottom Corner Border (rotated 180°) */}
          <div className="flex items-center justify-center self-end -mt-8 -mr-1">
            <div className="w-8 h-8 rotate-90">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1H31V31" stroke="var(--rtd-color-accent)" strokeWidth="2" strokeLinecap="square"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

