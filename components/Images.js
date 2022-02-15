
import Image from "next/image"


export default function Images({ item }) {



    return <div  className="max-w mt-5 flex flex-col  mb-5 h-full max-w-lg mx-auto bg-gray-700 rounded-lg bg-white rounded-lg border mx-auto border-gray-200 shadow-md ">
        <div className="w-full aspect-video ...">
            <a href={item.pageURL}>
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
                                {item.user.username}
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


                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg> */}
                        <p className="font-medium">{item.download}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
