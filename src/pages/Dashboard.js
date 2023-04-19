import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  Cog6ToothIcon,
  HeartIcon,
  CheckIcon,
  HomeIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/20/solid";
import { ReactComponent as LogoNoText } from "../assets/logo-elements/logo-white-pets-transparent-background.svg";
import Auth from "../utils/auth";
import Quickview from "../components/Quickview";
import MyPets from "../components/MyPets";
import MyTasks from "../components/MyTasks";
import MyCalendar from "../components/MyCalendar";
import MyProfile from "../components/MyProfile";

// Nav Data
const navigation = [
  {
    name: "Dashboard",
    href: "#",
    icon: HomeIcon,
    current: true,
    page: "Quickview",
  },
  {
    name: "My Pets",
    href: "#",
    icon: HeartIcon,
    current: false,
    page: "MyPets",
  },
  {
    name: "My Tasks",
    href: "#",
    icon: CheckIcon,
    current: false,
    page: "MyTasks",
  },
  {
    name: "My Calendar",
    href: "#",
    icon: CalendarIcon,
    current: false,
    page: "MyCalendar",
  },
  {
    name: "My Profile",
    href: "#",
    icon: UserIcon,
    current: false,
    page: "MyProfile",
  },
];

// Teams Data - To be built later if we wish to make use of this functionality
// const teams = [
//   { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
//   { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
//   { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
// ];

// User Nav Data
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" },
];

// ?
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  // Sidebar open/close
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState("Quickview");

  function displayComponent() {
    switch (view) {
      case "Quickview":
        return <Quickview />;
      case "MyPets":
        return <MyPets />;
      case "MyTasks":
        return <MyTasks />;
      case "MyCalendar":
        return <MyCalendar />;
      case "MyProfile":
        return <MyProfile />;
      default:
        return <Quickview />;
    }
  }

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <a href="/dashboard">
                        <LogoNoText
                          className="h-12 w-auto"
                          alt="My Pets logo"
                          aria-label="My Pets logo: sillhouettes of a dog, cat, bird, and heart, cradled by a yellow hand, encircled by a yellow border."
                        />
                      </a>
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  onClick={() => {
                                    setView(item.page);
                                    setSidebarOpen(false);
                                  }}
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? "text-white"
                                      : " text-white ",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:bg-light-blue focus:ring-1 focus:ring-slate"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-indigo-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          {/* <div className="text-xs font-semibold leading-6 text-indigo-200">
                            Your teams
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-indigo-700 text-white"
                                      : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul> */}
                        </li>
                        <li className="mt-auto">
                          <a
                            href="#"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 hover:bg-light-blue hover:text-white"
                          >
                            <Cog6ToothIcon
                              className="h-6 w-6 shrink-0 group-hover:text-white"
                              aria-hidden="true"
                            />
                            Settings
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-blue px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <LogoNoText
                className="h-12 w-auto rounded-full"
                alt="My Pets logo"
                aria-label="My Pets logo: sillhouettes of a dog, cat, bird, and heart, cradled by a yellow hand, encircled by a yellow border."
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-white"
                              : "hover:text-white hover:bg-indigo-700",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold hover:bg-light-blue focus:ring-1 focus:ring-slate"
                          )}
                          onClick={() => setView(item.page)}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  {/* <div className="text-xs font-semibold leading-6 text-indigo-200">
                    Your teams
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? "bg-indigo-700 text-white"
                              : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul> */}
                </li>
                <li className="mt-auto">
                  <a
                    href="#"
                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6  hover:bg-light-blue hover:text-white"
                  >
                    <Cog6ToothIcon
                      className="h-6 w-6 shrink-0 group-hover:text-white"
                      aria-hidden="true"
                    />
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Separator */}
            <div
              className="h-6 w-px bg-yellow lg:hidden"
              aria-hidden="true"
            />

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form className="relative flex flex-1" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <MagnifyingGlassIcon
                  className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-slate"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-full border-0 py-0 pl-8 pr-0 text-slate placeholder:text-blue focus:ring-0 sm:text-sm"
                  placeholder="Search..."
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">View notifications</span>
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>

                {/* Separator */}
                <div
                  className="hidden lg:block lg:h-6 lg:w-px lg:bg-yellow"
                  aria-hidden="true"
                />

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <Menu.Button className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6"
                        aria-hidden="true"
                      >
                        Welcome, {Auth.getProfile().firstName}
                      </span>
                      <ChevronDownIcon
                        className="ml-2 h-5 w-5 text-blue hover:text-slate focus:bg-light-blue"
                        aria-hidden="true"
                      />
                    </span>
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-blue focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-light-blue text-white" : "",
                                "block px-3 py-1 text-sm leading-6 "
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8">{displayComponent()}</div>
          </main>
        </div>
      </div>
    </>
  );
}
