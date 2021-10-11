import React from "react";

function Home({ username, city, color}) {
  const fontColor = {color}
  return (
    <div id="home">
      <h1 style={fontColor}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
