import React from "react";
import gym from "../components/image/gym-bg.jpg";

const Home = () => {
    return(
        <>
        <div className="row">
            <div className="col">
            <img className="background" src={gym} alt="pic"></img>
            </div>
        </div>
        </>
    )
}

export default Home;