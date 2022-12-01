import React, { useEffect, useState } from "react";
import Stories, { WithHeader } from "react-insta-stories";
import {
  Main_Story_img,
  user_profile_img,
  weedEmoji,
} from "../../constant/index";
import "../../assets/css/stories.css";
import { Link } from "react-router-dom";
const Stories_View = () => {
  const storyContent = {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
    background: "transparent",
  };
  const [currentId, setCurrentId] = useState(0);
  return (
    <section className="stories-wrapper">
      <div className="container">
        <div className="close-icon">
          <Link to="/">
            <svg
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-x"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </Link>
        </div>
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div
              className="Story-card"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <p className="previous" style={{ color: "white" }}>
                <button
                  onClick={() => {
                    setCurrentId((currentId) => currentId - 1);
                  }}
                >
                  <i className="fa fa-angle-left"></i>
                </button>
              </p>
              <Stories
                currentIndex={currentId}
                loop
                storyStyles={storyContent}
                keyboardNavigation
                defaultInterval={1500}
                stories={stories}
                onStoryEnd={(s, st) => {
                  console.log("story ended", s, st);
                  setCurrentId((currentId) => currentId + 1);
                }}
                onAllStoriesEnd={(s, st) => {
                  console.log("all stories ended", s, st);
                  setCurrentId((currentId) => 0);
                }}
                onStoryStart={(s, st) => {
                  console.log("story started", s, st);
                  setCurrentId((currentId) => currentId + 1 - 1);
                }}
              />
              <p className="next" style={{ color: "white" }}>
                <button
                  onClick={() => {
                    setCurrentId((currentId) => currentId + 1);
                  }}
                >
                  <i className="fa fa-angle-right"></i>
                </button>
              </p>
              <div className="bottom-bar">
                <div className="comment">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="comment"
                  />
                  <button>
                    <i class="fa fa-paper-plane" aria-hidden="true"></i>
                  </button>
                </div>
                <div className="gift">
                  <button>
                    <img src={weedEmoji} alt="123" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </section>
  );
};

const stories = [
  {
    url: Main_Story_img,
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: user_profile_img,
    },
  },
  {
    url: Main_Story_img,
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: user_profile_img,
    },
  },
  {
    url: Main_Story_img,
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: user_profile_img,
    },
  },
];

export default Stories_View;
