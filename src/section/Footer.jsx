import { darkTheme } from "../theme/theme.js";

export default () => {
  return (
    <div class="site_footer" classList={{
      "bg-gray-900 text-gray-100": darkTheme(),
      "bg-gray-100 text-gray-900": !darkTheme(),
    }}>
      <p>this is footer</p>
    </div>
  );
};
