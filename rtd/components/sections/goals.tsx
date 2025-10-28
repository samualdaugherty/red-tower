import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionHeadline } from "@/components/ui/section-headline";

export function Goals() {
  return (
    <section className="relative w-full bg-bg z-12" data-background="dark">
      {/* Content wrapper - excludes rounded corners so headline unsticks naturally */}
      <div>
        {/* Section Headline */}
        <SectionHeadline
          title="Intro"
          number="/01"
          codeLeft="introduction ( section (1), people (2) ) {"
          className="pt-9 md:pt-4"
        />

      {/* Content */}
      <div className="flex flex-col gap-6 md:gap-8 items-center px-6 md:px-12 lg:px-20 py-12 md:py-16 lg:py-24 pt-14 text-center text-fg max-w-7xl mx-auto">
        <h2 className="font-header text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-[-0.03em]">
          Your goals, our priority
        </h2>
        <div className="font-body font-light text-sm md:text-base leading-[1.5] max-w-4xl">
          <p className="mb-4">
            Business owners are a lot of things, but rarely are they web developers. And while many no-code options exist in the marketplace today, the learning curve is steep, and the time investment is high. If you want to do that, you certainly can, and we even have a{" "}
            <Link 
              href="#" 
              className="font-semibold text-accent hover:underline decoration-accent decoration-2 underline-offset-2"
            >
              handy guide
            </Link>
            {" "}to help you through the process, too.
          </p>
          <p>
            But there&apos;s an easier way. What if you had a full staff of designers and engineers ready to take over for you, craft a website that creates good experiences for your customers, and can make all of your updates for you? Now you can.
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch pt-8 md:pt-14 px-4 md:px-6 lg:px-8 pb-0 max-w-md md:max-w-xl lg:max-w-7xl mx-auto">
        {/* Card 1: 24/7 priority care */}
        <div className="flex-1 bg-bg border border-fg rounded-lg overflow-hidden flex flex-col">
          <div className="relative w-full aspect-[4096/2731]">
            <Image
              src="/images/priority-care.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 p-4 md:p-6 text-center text-fg">
            <h3 className="font-header text-2xl md:text-3xl leading-none tracking-[-0.03em]">
              24/7 priority care
            </h3>
            <p className="font-body font-light text-sm md:text-base leading-[1.5]">
              High-priority clients receive an average response time of less than 24 hours.
            </p>
          </div>
        </div>

        {/* Card 2: Tweaks & Updates */}
        <div className="flex-1 bg-bg border border-fg rounded-lg overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col gap-4 p-4 md:p-6 text-center text-fg">
            <h3 className="font-header text-2xl md:text-3xl leading-none tracking-[-0.03em]">
              Tweaks & Updates
            </h3>
            <p className="font-body font-light text-sm md:text-base leading-[1.5]">
              Request revisions or updates any time after the site is launched with the addition of a maintenance plan.
            </p>
          </div>
          
          {/* Checkboxes */}
          <div className="bg-fg flex flex-col gap-3 px-4 md:px-6 py-3 rounded mx-4 mb-4">
            <p className="font-header text-lg md:text-2xl leading-none text-center text-bg">
              Monthly updates
            </p>
            <div className="flex gap-2 items-center w-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF2B39"/>
                <path d="M5 10L8.5 13.5L15 7" stroke="#E6E8DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-body font-light text-base leading-[1.5] text-bg opacity-50 line-through">
                Update seasonal menu
              </p>
            </div>
            <div className="flex gap-2 items-center w-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF2B39"/>
                <path d="M5 10L8.5 13.5L15 7" stroke="#E6E8DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-body font-light text-base leading-[1.5] text-bg opacity-50 line-through">
                Add new staff members
              </p>
            </div>
            <div className="flex gap-2 items-center w-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="10" fill="#FF2B39"/>
                <path d="M5 10L8.5 13.5L15 7" stroke="#E6E8DA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="font-body font-light text-base leading-[1.5] text-bg opacity-50 line-through">
                Update holiday events
              </p>
            </div>
            <div className="flex gap-2 items-center w-full">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="9" stroke="#FF2B39" strokeWidth="2"/>
              </svg>
              <p className="font-body font-light text-base leading-[1.5] text-bg">
                Update brand colors
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Real Time Updates */}
        <div className="flex-1 bg-bg border border-fg rounded-lg overflow-hidden flex flex-col">
          <div className="relative w-full h-[245px] overflow-hidden">
            {/* Blurred background */}
            <div className="absolute left-0 top-0 w-full h-[256px] blur-md">
              <Image
                src="/images/notification-bg.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            {/* Notification mockup */}
            <div className="absolute top-[30px] left-1/2 -translate-x-1/2 w-[295px] h-[215px]">
              <div className="absolute left-[25px] top-0 w-[245px] h-[215px]">
                <Image
                  src="/images/notification-screen.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              {/* iOS Notification */}
              <div className="absolute bottom-[23px] left-0 right-0">
                <div className="bg-[rgba(245,245,245,0.4)] backdrop-blur-[32px] rounded-[18px] p-[11px] flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="relative w-[35px] h-[35px] rounded-full overflow-hidden shadow-sm">
                        <Image
                          src="/images/avatar.png"
                          alt=""
                          fill
                          className="object-cover"
                        />
                        {/* App Icon Badge */}
                        <div className="absolute bottom-0 right-0 w-[11px] h-[11px] rounded overflow-hidden shadow-sm">
                          <Image
                            src="/images/app-icon.png"
                            alt=""
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <p className="font-semibold text-[13px] leading-[16px] text-black tracking-[-0.7px]">
                          Red Tower Digital
                        </p>
                        <p className="font-normal text-[10px] leading-[14px] text-black tracking-[-0.06px] opacity-50">
                          34m ago
                        </p>
                      </div>
                      <p className="font-normal text-[10px] leading-[14px] text-black tracking-[-0.06px] line-clamp-2">
                        I got those events added to the calendar on your website. Let me know if you need anything else.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4 md:p-6 text-center text-fg">
            <h3 className="font-header text-2xl md:text-3xl leading-none tracking-[-0.03em]">
              Real Time Updates
            </h3>
            <p className="font-body font-light text-sm md:text-base leading-[1.5]">
              We take communication seriously, and provide project updates at every step.
            </p>
          </div>
        </div>
      </div>
      </div>
      {/* End content wrapper */}

      {/* Rounded Corner Transition */}
      <div className="bg-fg pt-0 pb-8 md:pb-14">
        <div className="bg-bg w-full h-10 md:h-28 rounded-bl-[80px] md:rounded-bl-[112px] rounded-br-[80px] md:rounded-br-[112px] shadow-clock" />
      </div>
    </section>
  );
}

