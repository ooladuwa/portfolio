import React from "react";

const Sunshine = () => {
  return (
    <div>
      <img
        src="https://i.ibb.co/BghNjVh/flowers-Border.png"
        alt="flowers"
        usemap="#image-map"
      />
      <map name="image-map">
        <area
          target="_blank"
          alt="Instagram"
          title="Instagram"
          href="https://www.instagram.com/rbwanderlust/"
          coords="112,110,105"
          shape="circle"
        />

        <area
          target="_blank"
          alt="Github"
          title="Github"
          href="https://github.com/ooladuwa"
          coords="70,351,105"
          shape="circle"
        />
        <area
          target="_blank"
          alt="Twitter"
          title="Twitter"
          href="https://twitter.com/ooladuwa"
          coords="365,75,88"
          shape="circle"
        />
      </map>
    </div>
  );
};

export default Sunshine;
