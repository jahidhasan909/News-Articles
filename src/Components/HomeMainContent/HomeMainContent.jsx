import CategoryMenu from "./CategoryManu";


const HomeMainContent = () => {
    return (
        <div className="bg-base-200">

            <div className=" max-w-11/12 mx-auto">
                <label className="input mt-20 w-full">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search" />
                </label>

                <div className="pt-9 hidden lg:block">

                    <h1 className="text-2xl py-2">Featured News & Articles</h1>
                    <div className="w-full rounded-xl  shadow-md">
                        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2">
                            <img
                                src="https://i.ibb.co.com/KxjWNmjM/Screenshot-2026-08-02-at-5-50-52-PM-Picsart-Ai-Image-Enhancer.webp"
                                className="w-full rounded-lg"
                            />
                            <div className="pt-15 space-y-5">
                                <h1 className="text-3xl font-bold">Relief distribution among <br /> flood victims in Greater...</h1>
                                <p className="">
                                    A severe flood hit Chittagong in the first <br /> week of this month. Extensive areas in <br /> Chittagong, Cox's Bazar, and Bandarban were
                                </p>
                                <p>July 22, 2026</p>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="grid grid-cols-4 mt-5">
                    <div className="col-span-1">
                        <CategoryMenu></CategoryMenu>
                    </div>
                    <div className="bg-green-300 col-span-3">
                        right side
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomeMainContent;