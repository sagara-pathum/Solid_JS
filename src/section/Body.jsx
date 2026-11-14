import { darkTheme } from "../theme/theme";
import BodyLeft from "../section/Body.left"
import BodyMid from "../section/Body.mid"
import BodyRight from "../section/Body.right"

export default () => {
  return (
    <div class="site_body" classList={{
      "bg-gray-900 text-white": darkTheme()
    }}>
      <BodyLeft />
      <BodyMid />
      <BodyRight />
    </div>
  );
};
