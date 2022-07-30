import { browser } from "$app/env";

export function setDocumentScroll(value: boolean) {
  if (!browser) return;
  value
    ? document.documentElement.classList.add("overflow-y-hidden")
    : document.documentElement.classList.remove("overflow-y-hidden");
}
