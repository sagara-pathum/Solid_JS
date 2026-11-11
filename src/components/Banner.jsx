import bannerImg from "../assets/Banner-Solid-JS.png";

const Banner = () => {
    return (
        <div>
            <img src={bannerImg} alt="banner" class="site_banner" />
        </div>
    );
}

export default Banner;