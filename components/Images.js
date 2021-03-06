
import Image from "next/image"


export default function Images({ item }) {


  
    return <div key={item.id} className="max-w mt-5 flex flex-col  mb-5 h-full max-w-lg mx-auto bg-gray-800 rounded-lg rounded-lg border mx-auto border-gray-200 shadow-md">
        <div className="w-full aspect-auto ...">
            <a target="_blank" rel="noreferrer" href={item.pageURL}>
                <Image
                    loader={item.urls.small}
                    src={item.urls.small}
                    width={item.width}
                    height={item.height}
                    className="rounded-lg rounded-b-none w-full aspect-square"
                    alt="rewrewr"
                    loading="lazy"
                    layout="intrinsic"
                    unoptimized={true}
                    quality={100}

                />
            </a>
        </div>
        <div className="flex justify-between -mt-4 px-4">
            <span
                className="inline-block z-50 ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5"
            >{item.tags.map((item, index) => (
                <div className="inline px-1" key={index}>
                    {item.title}
                </div>
            ))}</span
            >
            <span
                className="flex h-min space-x-1 z-50 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <p className="text-blue-500 font-semibold text-xs">
                    6 Mins
                </p>
            </span>
        </div>
        <div className="py-2 px-4">
            <h1
                className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer"
            >
                <a href="blog/detail">{item.user.bio}</a>

            </h1>
        </div>
        {/* <div className="px-4 space-y-2">
<p className="text-gray-400 font-normal leading-5 tracking-wide">
Tailwind CSS v2.1 introduces a new just-in-time compiler for Tailwind CSS that generates your styles on-demand...
</p>
<router-link
to="blog/detail"
className="font-bold hover:text-blue-400 text-gray-100"
>read more...</router-link
>
</div> */}
        <div className="flex flex-row items-end h-full w-full px-4 mt-4">
            <div className="flex border-t border-gray-700 w-full py-4">
                <div
                    className="flex items-center space-x-3 border-r border-gray-700 w-full"
                >
                    <Image
                        className="object-cover w-8 h-8 border-2 border-white rounded-full"
                        src={item.user.profile_image.small}
                        width={20}
                        height={20}
                        alt="profile users"
                        loading="lazy"
                        layout="intrinsic"
                        unoptimized={true}
                        quality={100}
                    />
                    <div className="">
                        <p className="text-sm font-semibold tracking-wide text-gray-200">
                            <a target="_blank" rel="noreferrer" href={item.user.social.portfolio_url}>
                                {item.user.name}

                            </a>
                        </p>
                        <p className="text-xs font-light tracking-wider text-gray-300">
                            2 Hours ago
                        </p>
                    </div>
                </div>
                <div className="flex items-center flex-shrink-0 px-2">
                    <div className="flex items-center space-x-1 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                        <p className="font-medium">{item.likes}</p>


                        <a target="_blank" rel="noreferrer" href={item.user.social.portfolio_url}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5  opacity-50 m-2"
                                viewBox="0 0 448 512"
                                fill="white"
                                stroke="currentColor"
                            >
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                />
                            </svg>
                        </a>

                    
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                        <p className="font-medium">{item.download}</p> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
}
