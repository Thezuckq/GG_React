import React from "react";
import { useState } from "react";
import {SearchBarComp, GifListComp} from "../../components";

const Home = () => {
    const [query, setQuery] = useState("Pop Smoke");

    const handleQuery = (q) => {
      setQuery(q);
    //   console.log(query);
    };
  
    return (
      <div>
          
        <SearchBarComp handleQuery={handleQuery} />
        <GifListComp giphyName={query} />
      </div>
    );
}

export default Home;