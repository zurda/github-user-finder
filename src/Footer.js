import React from "react";

const Footer = () => {
  return (
    <div className="Footer">
      <footer>
        <div className="text-footer">
          <p>
            Created by{" "}
            <a
              href="https://zurda.github.io/one-page-website/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Michal Weizman
            </a>
            <br />
            This site's code is available on{" "}
            <a
              href="https://github.com/zurda/github-user-finder"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
