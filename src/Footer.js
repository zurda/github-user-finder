import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="text-footer">
        <p style={{ color: "white" }}>
          Created by{" "}
          <a
            className="footer-links"
            href="https://zurda.github.io/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michal Weizman
          </a>
          <br />
          This site code is available on{" "}
          <a
            className="footer-links"
            href="https://github.com/zurda/github-user-finder"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
