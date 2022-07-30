import { v4 as uuid } from "uuid";
import audiophileSvg from "../assets/client-audiophile.svg";
import databizSvg from "../assets/client-databiz.svg";
import makerSvg from "../assets/client-maker.svg";
import meetSvg from "../assets/client-meet.svg";

interface Client {
  id: string;
  label: string;
  svg: string;
}

export const CLIENTS: Client[] = [
  { id: uuid(), label: "Databiz", svg: databizSvg },
  { id: uuid(), label: "Audiophile", svg: audiophileSvg },
  { id: uuid(), label: "Meet", svg: meetSvg },
  { id: uuid(), label: "Maker", svg: makerSvg },
];
