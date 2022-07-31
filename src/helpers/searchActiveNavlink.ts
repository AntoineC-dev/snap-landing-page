import type { NavlinkItem } from "../stores/navbar.store";

export function searchActiveNavlink({ activeNavitem, items }: { activeNavitem: string | null; items: NavlinkItem[] }) {
  let active = false;
  items.forEach((item) => {
    if (item.id === activeNavitem) {
      active = true;
    }
  });
  return active;
}
