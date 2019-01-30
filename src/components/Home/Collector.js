import React from "react";
import Shows from "../shows/Shows";
import Movies from "../movies/Movies";
import Sitebar from "../Home/Navbar"

let Collector = (props) => (
    <div>
    <Sitebar />
    <Shows />
    <Movies />
    </div>
)

export default Collector