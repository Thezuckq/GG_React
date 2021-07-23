import * as React from "react";
import { useState, useEffect } from "react";
import GifImage from "../card";

const GifListComp = (props) => {
  const [listGiphy, setListGiphy] = useState([]);
  const GIPHY_API = process.env.REACT_APP_NOT_SECRET_CODE;

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${props.giphyName}&api_key=${GIPHY_API}&rating=g&limit=6`
    )
      .then((response) => response.json())
      .then((giphy) => {
        setListGiphy(giphy.data);
      });  // eslint-disable-next-line
  }, [props.giphyName], [GIPHY_API]);

  return (
    <div className="StyleContent">
      {listGiphy.length !== 0
        ? listGiphy.map((gif, id) =>
        <GifImage
            key={id}
            title={gif.title}
            url={gif.images.original.url}
            rating={gif.rating}
        />)
        : ""}
    </div>
  );
};
export default GifListComp;