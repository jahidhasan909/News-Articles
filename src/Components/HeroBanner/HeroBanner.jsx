

const HeroBanner = () => {
    return (
        <div className=" relative">
            <img src="https://i.ibb.co.com/DP1NHFzz/Screenshot-2026-08-02-at-4-13-37-PM.png" className=" relative "></img>
            <div className=" backdrop-blur-[2px] bg-linear-to-r from-black/30 to-black/20 inset-0 absolute"></div>
            <h1 className=" text-xl lg:text-7xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 z-50 text-white">News & Articles</h1>
        </div>
    );
};

export default HeroBanner;