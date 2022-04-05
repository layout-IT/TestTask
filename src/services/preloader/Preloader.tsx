import preloaderImg from "../../assets/img/preloader/preloader.gif";

import { ReturnComponent } from "types";

export const Preloader = (): ReturnComponent => (
  <div>
    <img src={preloaderImg} alt="preloader" />
  </div>
);
