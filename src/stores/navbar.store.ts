import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

// SVGs
import togoSvg from "../assets/icon-todo.svg";
import calendarSvg from "../assets/icon-calendar.svg";
import remindersSvg from "../assets/icon-reminders.svg";
import planningSvg from "../assets/icon-planning.svg";

export interface NavlinkItem {
  id: string;
  label: string;
  url: string;
  svg?: string;
}

export interface DropdownMenu {
  anchor: "left" | "right";
  id: string;
  label: string;
  items: NavlinkItem[];
}

export const NAV_DROPDOWNS: DropdownMenu[] = [
  {
    id: uuid(),
    anchor: "right",
    label: "Features",
    items: [
      { id: uuid(), label: "Todo List", url: "/", svg: togoSvg },
      { id: uuid(), label: "Calendar", url: "/", svg: calendarSvg },
      { id: uuid(), label: "Reminders", url: "/", svg: remindersSvg },
      { id: uuid(), label: "Planning", url: "/", svg: planningSvg },
    ],
  },
  {
    id: uuid(),
    anchor: "left",
    label: "Company",
    items: [
      { id: uuid(), label: "History", url: "/" },
      { id: uuid(), label: "Our Team", url: "/" },
      { id: uuid(), label: "Blog", url: "/" },
    ],
  },
];

export const NAV_LINKS: NavlinkItem[] = [
  { id: uuid(), label: "Carrers", url: "/" },
  { id: uuid(), label: "About", url: "/" },
];

// ---- State ---- //
interface NavbarStore {
  activeNavitem: string | null;
  mobileMenuOpen: boolean;
  openDropdown: string | null;
}

export const navbarStore = writable<NavbarStore>({
  activeNavitem: null,
  mobileMenuOpen: false,
  openDropdown: null,
});

// ---- Reducers ---- //

export const setOpenDropdown = (id: string | null) =>
  navbarStore.update((current) => ({ ...current, openDropdown: id }));
export const setActiveNavItem = (linkId: string | null) =>
  navbarStore.update((current) => {
    const mobileMenuOpen = current.mobileMenuOpen ? false : true;
    const openDropdown = current.openDropdown !== null ? null : current.openDropdown;
    return { activeNavitem: linkId, mobileMenuOpen, openDropdown };
  });
export const toggleMobileMenu = () =>
  navbarStore.update((current) => ({ ...current, mobileMenuOpen: !current.mobileMenuOpen }));
