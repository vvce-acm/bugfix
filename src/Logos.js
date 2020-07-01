import React from "react";

const Logos = () => {
  return (
    <div className="logos">
      <ul>
        <li>
          <a
            href="https://vvce.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/2.png`}
              alt="vvceLogo"
            />
          </a>
        </li>
        <li>
          <a
            href="https://vvce.acm.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={`${process.env.PUBLIC_URL}/images/1.png`} alt="acmLogo" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Logos;
