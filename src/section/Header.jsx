import bannerImage from "../assets/Banner-Solid-JS.png";

export default () => {
  return (
    <div class="site_header">
      <div>
        <p>this is header</p>
      </div>
      <div>
        <img src={bannerImage} alt="banner" />
      </div>
    </div>
  );
};
