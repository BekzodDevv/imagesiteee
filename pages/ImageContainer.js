
import InfiniteScroll from "react-infinite-scroll-component";
import Images from "../components/Images";




export default function ImageContainer({ dataaa, fetchImages, hasMore }) {

    return <div>

        <InfiniteScroll
            dataLength={dataaa}
            next={fetchImages}
            hasMore={hasMore}
            loader={<p>Load more...</p>}
        >


            <div className="xl:columns-3 md:columns-2 sm:columns-1  container mx-auto mt-5">
                {dataaa ? dataaa.map((item, index) => (
                    <Images item={item} index={index} />
                )) : "Loading..."}

            </div>
        </InfiniteScroll >
    </div >;
}
