import bannerImage from "../assets/Banner-Solid-JS.png";
import { changeThemeDark } from "../theme/theme.js"
import { darkTheme } from "../theme/theme.js"
import { A } from "@solidjs/router";

export default () => {
  return (
    <div class="site_header " classList={{
      "bg-gray-700 text-white": darkTheme()
    }}>
      <div class="flex justify-between p-2">
        <div class="flex gap-5">
          <A href="/" class="hover:text-gray-600 hover:cursor-pointer">Home</A>
          <A href="/router" class="hover:text-gray-600 hover:cursor-pointer">Router</A>
        </div>
        <span class="material-symbols-outlined cursor-pointer" onClick={changeThemeDark} >
          light_mode
        </span>
      </div>
      <div>
        <img src={bannerImage} alt="banner" />
      </div>
    </div>
  );
};
