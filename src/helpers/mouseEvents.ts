interface MouseEventProps {
  callback: () => void;
  listen?: boolean; // Listens by default
}

// export function clickOutside(element: Element, callbackFunction: () => void) {
//   function onClick(event: MouseEvent) {
//     if (!element.contains(event.target as Node)) {
//       callbackFunction();
//     }
//   }

//   document.body.addEventListener("click", onClick);

//   return {
//     update(newCallbackFunction: () => void) {
//       callbackFunction = newCallbackFunction;
//     },
//     destroy() {
//       document.body.removeEventListener("click", onClick);
//     },
//   };
// }

export function mouseOut(element: Element, props: MouseEventProps) {
  function onMouseOver(event: MouseEvent) {
    if (!element.contains(event.target as Node)) {
      props.callback();
    }
  }

  if (props.listen === undefined || props.listen) {
    document.body.addEventListener("mouseover", onMouseOver);
  }

  return {
    update(newProps: MouseEventProps) {
      props = { ...newProps };
      if (props.listen === undefined || props.listen) {
        document.body.addEventListener("mouseover", onMouseOver);
      } else {
        document.body.removeEventListener("mouseover", onMouseOver);
      }
    },
    destroy() {
      document.body.removeEventListener("mouseover", onMouseOver);
    },
  };
}
