import axios from "axios"
import { useEffect, useState } from "react";
import "./Toprated.css";
import SingleContent from "../components/SingleContent";


const Toprated = () => {
   const [content, setContent] = useState([]);
   const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setContent(data.results);
   }
    useEffect(() => {
       fetchTrending();
    }, [])
    return (
        <div>
            <span className="pageTitle">Top Rated</span>
            <div className="trending">
                {
                    content && content.map((c)=><SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type={c.media_type}
                    vote_average={c.vote_average}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default Toprated;
