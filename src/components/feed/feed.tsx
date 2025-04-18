import { Picture } from "@/actions/pictures-get";
import FeedPictures from "./feed-pictures";

export default function Feed({ pictures }: { pictures: Picture[] }) {
    return (
        <div>
            <FeedPictures pictures={pictures} />
        </div>
    );
}