import { Badge } from "@material-ui/core";
import ContentModal from "./ConentModal";
import { img_300, unavailable } from "./config";
import "./SingleContent.css";
const SingleContent = ({
    id,
  poster,
  title,
  date,
  vote_average,
}) => {
    return (

      <ContentModal className='media' id={id}>
            <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
           <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
       <b className="title">{title}</b>
      <span className="subTitle">
        {"Movie"}
        <span className="subTitle">{date}</span>
      </span>
      </ContentModal >
    )
}

export default SingleContent
