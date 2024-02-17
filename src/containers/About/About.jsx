import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./About.scss";

import { AppWrap, MotionWrap } from "../../wrapper";
// import { images } from "../../constants";
import { urlFor, client } from "../../client";

// const abouts = [
//   {
//     title: "Web Dev",
//     description: "I am a good Web Developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web Design",
//     description: "I am a good Web Developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "UI/UX",
//     description: "I am a good Web Developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Web Animation",
//     description: "I am a good Web Developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      {/* <h2 className="head-text">
        I know that <span> Good Dev </span>
        <br /> means <span> Good Business </span>
      </h2> */}
      <h2 className="head-text">
        Always in mood for <br /> <span> Coffee </span> and <span> Code </span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            {/* <img src={about.imgUrl} alt={about.title} /> */}
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bod-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

// export default About;
export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
