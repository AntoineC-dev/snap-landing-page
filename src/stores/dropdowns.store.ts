import { writable } from "svelte/store";
import { v4 as uuid } from "uuid";

// SVGs
import togoSvg from "../assets/icon-todo.svg";
import calendarSvg from "../assets/icon-calendar.svg";
import remindersSvg from "../assets/icon-reminders.svg";
import planningSvg from "../assets/icon-planning.svg";

export interface DropdownItem {
  id: string;
  label: string;
  url: string;
  svg?: string;
}

export interface DropdownMenu {
  id: string;
  label: string;
  items: DropdownItem[];
}

export const NAV_DROPDOWNS: DropdownMenu[] = [
  {
    id: uuid(),
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
    label: "Company",
    items: [
      { id: uuid(), label: "History", url: "/" },
      { id: uuid(), label: "Our Team", url: "/" },
      { id: uuid(), label: "Blog", url: "/" },
    ],
  },
];

export type NavlinkItem = Omit<DropdownItem, "svg">;

export const NAV_LINKS: NavlinkItem[] = [
  { id: uuid(), label: "Carrers", url: "/" },
  { id: uuid(), label: "About", url: "/" },
];

// ---- State ---- //
export const activeNavItem = writable<DropdownItem["id"] | undefined>(undefined);

// ---- Reducers ---- //

export const toggleActiveDropdown = (id: DropdownItem["id"]) =>
  activeNavItem.update((current) => (id !== current ? id : undefined));

export const setActiveDropdown = (id?: DropdownItem["id"]) =>
  activeNavItem.update((current) => (current === id ? current : id));
