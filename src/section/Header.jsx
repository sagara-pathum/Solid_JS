import bannerImage from "../assets/Banner-Solid-JS.png";
import { changeThemeDark } from "../theme/theme.js"
import { darkTheme } from "../theme/theme.js"

export default () => {
  return (
    <div class="site_header " classList={{
      "bg-gray-700 text-white": darkTheme()
    }}>
      <div class="flex justify-between">
        <p>this is header</p>
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
