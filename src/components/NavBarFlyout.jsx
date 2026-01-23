"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  BookmarkSquareIcon,
  AcademicCapIcon,
  MicrophoneIcon,
  UserPlusIcon,
  BriefcaseIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  CubeIcon,
  PhoneIcon,
  PlayCircleIcon,
  RectangleGroupIcon,
} from "@heroicons/react/20/solid";
import { LOGO_ASSETS, LOGO_ASSETS_2 } from "@/data/consts";

const aboutUs = [
  {
    name: "Partner with Us",
    description:
      "Explore partnership opportunities with Right Rudder Marketing",
    href: "/about/partnerships",
    icon: UserPlusIcon,
  },
  {
    name: "Career Opportunities",
    description:
      "Join the Right Rudder Marketing team and help shape the future of aviation marketing",
    href: "/about/careers",
    icon: BriefcaseIcon,
  },
  {
    name: "Investor Relations",
    description:
      "Learn more about investment opportunities with Right Rudder Marketing",
    href: "/about/investors",
    icon: PresentationChartBarIcon,
  },
];
const resources = [
  {
    name: "Flight School Marketing Handbook",
    description: "Comprehensive guide to marketing for flight schools",
    href: "/resources/flight-school-marketing-handbook",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Flight Deck Magazine",
    description: "Insights and trends in the aviation industry",
    href: "/resources/flight-deck-magazine",
    icon: BookOpenIcon,
  },
  {
    name: "Webinars",
    description: "Learn from industry experts through our webinars",
    href: "/webinars",
    icon: AcademicCapIcon,
  },
  {
    name: "The Aviation Business Podcast",
    description: "Interviews and discussions on aviation business topics",
    href: "https://theaviationbusinesspodcast.com/",
    icon: MicrophoneIcon,
  },
];
const callsToActionAboutUs = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
  { name: "View all services", href: "#", icon: RectangleGroupIcon },
];
const callsToActionResources = [
  { name: "Our Marketing System", href: "/marketing-system", icon: CubeIcon },
  { name: "View all resources", href: "#", icon: RectangleGroupIcon },
];

export default function NavbarFlyout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 isolate z-50">
      <nav
        aria-label="Global"
        className="mx-auto font-sans flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Right Rudder Marketing</span>
            <img
              alt="Grow My FBO Logo"
              src={LOGO_ASSETS_2}
              className="h-16 w-auto hover:scale-105 hover:rotate-z-1 transition-all duration-300"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex justify-end w-1/2 lg:gap-x-12">
          <a
            href="/#marketing-system"
            className="flex flex-col gap-0 text-center group hover:scale-105 transition-all duration-200"
          >
            <span className="text-xs/6 p-0 m-0 font-light text-white group-hover:text-crimson-100">
              Our Marketing
            </span>
            <span className="font-extrabold -mt-2 p-0 text-2xl uppercase text-gray-50">
              System
            </span>
          </a>

          <a
            href="/blog"
            className="flex flex-col gap-0 text-center group hover:scale-105 transition-all duration-200"
          >
            <span className="text-xs/6 p-0 m-0 font-light text-white group-hover:text-crimson-100">
              News & Tips
            </span>
            <span className="font-extrabold -mt-2 p-0 text-2xl uppercase text-gray-50">
              Blog
            </span>
          </a>

          <a
            href="/#meet-the-team"
            className="flex flex-col gap-0 text-center group hover:scale-105 transition-all duration-200"
          >
            <span className="text-xs/6 p-0 m-0 font-light text-white group-hover:text-crimson-100">
              Meet the
            </span>
            <span className="font-extrabold -mt-2 p-0 text-2xl uppercase text-gray-50">
              Team
            </span>
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Right Rudder Marketing Logo"
                src="/RRM-R-symbol-474.webp"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <a
                  href="/marketing-system"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-white hover:bg-white/5"
                >
                  Our System
                </a>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white/5">
                    Resources
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...resources, ...callsToActionResources].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-white hover:bg-white/5"
                >
                  Blog
                </a>
                <a
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-white hover:bg-white/5"
                >
                  About Us
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/contact"
                  className="btn-primary -mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-light text-white hover:bg-white/5"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
