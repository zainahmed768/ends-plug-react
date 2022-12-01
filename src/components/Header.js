import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ChromePicker } from "react-color";
import {
  blue_flag,
  cambridge,
  european_union,
  germany,
  greek,
  logo,
  navbar_cart,
  navbar_chat,
  navbar_notification,
  norway,
  uk,
  usa,
  vietnam,
  profile_img,
  msg1,
  msg2,
  msg3,
  msg4,
  msg5,
  con1,
  con2,
  con3,
  con4,
  con5,
  no1,
  no2,
  notification_img,
  no3,
  no4,
  no5,
  Leaf,
  liveStream,
  NewFollower1,
  NewFollower2,
  NewFollower3,
  NewFollower4,
  NewFollower5,
  Nug1,
  Nug2,
  Nug3,
  Stream1,
  StreamerImg,
  weedEmoji,
  WeedIcon,
  StoryBack1,
  StoryBack3,
  StoryBack2,
  StoryBack4,
  StoryBack5,
  Coin,
  WinnerImg,
  m1,
  m2,
  m3,
  m4,
  m5,
  m6,
  userProfile,
} from "../constant";

const Header = () => {
  const [color, setColor] = useState("#000");
  const [fontcolor, setFontcolor] = useState("#fff");
  const [backopen, setBackopen] = useState(false);
  const [fontopen, setFontopen] = useState(false);
  const [open, setOpen] = useState(false);
  const [notification, setnotification] = useState(false);
  

  // const handleopenmsg = () => {
  // 	setOpen(true);
  // };
  // const handleclosemsg = () => {
  // 	setOpen(false);
  // };
  // const handleopennoti = () => {
  // 	setnotification(true);
  // };
  // const handleclosenoti = () => {
  // 	setnotification(false);
  // };
  const messsage = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  const messages_profile = [
    {
      id: 1,
      name: "Christopher",
      profile: msg1,
      is_active: true,
    },
    {
      id: 2,
      name: "Reese",
      profile: msg2,
      is_active: true,
    },
    {
      id: 3,
      name: "Christopher",
      profile: msg3,
      is_active: true,
    },
    {
      id: 4,
      name: "Laura",
      profile: msg4,
      is_active: true,
    },
    {
      id: 5,
      name: "Maldo",
      profile: msg5,
      is_active: true,
    },
    {
      id: 6,
      name: "Christopher",
      profile: msg1,
      is_active: true,
    },
    {
      id: 5,
      name: "Reese",
      profile: msg2,
      is_active: true,
    },
  ];
  const Conversation = [
    {
      id: 1,
      name: "Herman Pope",
      msg: "Hey! How's it going?",
      time: "04:04AM",
      img: con1,
      total_msg: 3,
    },
    {
      id: 2,
      name: "Sue Caldwell",
      msg: "What kind of music do you like? ",
      time: "08:58PM",
      img: con2,
      total_msg: 1,
    },
    {
      id: 3,
      name: "Ada Reyes",
      msg: "Sounds good to me!",
      time: "11:33PM",
      img: con3,
      total_msg: 0,
    },
    {
      id: 4,
      name: "Hallie Sandoval",
      msg: "Hi Tina. How's your night going?",
      time: "06:58PM",
      img: con4,
      total_msg: 0,
    },
    {
      id: 5,
      name: "Dean Warren",
      msg: "What did you do over the weekend?",
      time: "09:43PM",
      img: con5,
      total_msg: 0,
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <header id="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5">
              <div className="logo-and-search-wrapper">
                <div className="logo-warpper">
                  <Link to="/">
                    <img src={logo} className="img-fluid" />
                  </Link>
                </div>
                <div className="search-wrapper">
                  <form>
                    <input
                      className="form-control"
                      placeholder="Search"
                      type="text"
                    />
                    <button className="btn">
                      <i className="fa fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-"></div> */}
            <div className="col-lg-7 align-self-center">
              <div className="navbar-profile-icon-wrapper">
                <div className="navbar-wrapper">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">
                        My Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/market-place">
                        Merch
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="#">
                        Add Product
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navbar-icon-wrapper">
                  <div className="icon-wrapper">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/shopping-cart">
                          <img src={navbar_cart} className="img-fluid" />
                          <span className="count">2</span>
                        </Link>
                      </li>
                      <li
                        className="nav-item"
                        onMouseEnter={() => setOpen(true)}
                        onMouseLeave={() => setOpen(false)}
                      >
                        <button className="nav-link" to="javascript:void(0)">
                          <img src={navbar_chat} className="img-fluid" />
                          <span className="count">2</span>
                        </button>
                        <div
                          className={
                            open
                              ? "header-messages-wrapper show"
                              : "header-messages-wrapper hide"
                          }
                        >
                          <div className="heading-wrapper">
                            <h6>Messages</h6>
                          </div>
                          <div className="messsages-profile-wrapper">
                            <div className="stori-wrappper">
                              <Slider {...messsage}>
                                {messages_profile.map((data, index) => {
                                  return (
                                    <div key={index} className="profile-wrp">
                                      <button className="msg-btn">
                                        <figure>
                                          <img src={data?.profile} alt="" />
                                          {data?.is_active ? (
                                            <div className="online"></div>
                                          ) : (
                                            <div className="offline"></div>
                                          )}
                                        </figure>
                                        <div className="name-wrapper">
                                          <h6>{data?.name}</h6>
                                        </div>
                                      </button>
                                    </div>
                                  );
                                })}
                              </Slider>
                            </div>
                          </div>
                          <div className="messages-wrapper">
                            {Conversation.map((data, index) => {
                              return (
                                <div key={index} className="single-msg-wrapper">
                                  <div className="img-wrapper">
                                    <figure>
                                      <img src={data?.img} alt="" />
                                      {data?.total_msg == 0 ? (
                                        ""
                                      ) : (
                                        <span className="totalmsg">
                                          {" "}
                                          {data?.total_msg}{" "}
                                        </span>
                                      )}
                                    </figure>
                                  </div>
                                  <div className="mg-content-wrapper">
                                    <div className="msg-name-wrapper">
                                      <h6>{data?.name}</h6>
                                      <span>{data?.time}</span>
                                    </div>
                                    <div className="msg-wrappper">
                                      <p>{data?.msg}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </li>
                      <li
                        className="nav-item"
                        onMouseEnter={() => setnotification(true)}
                        onMouseLeave={() => setnotification(false)}
                      >
                        <button className="nav-link">
                          <img
                            src={navbar_notification}
                            className="img-fluid"
                          />
                          <span className="count">2</span>
                        </button>
                        <div
                          className={
                            notification
                              ? "notification-card-wrapper show"
                              : "notification-card-wrapper hide"
                          }
                        >
                          <div className="notification-heading-wrapper">
                            <h6>Notifications</h6>
                          </div>
                          <div className="notifications-wrapper">
                            <div className="single-notification-wrapper">
                              <div className="img-wrapper">
                                <figure>
                                  <img src={no1} alt="" />
                                </figure>
                              </div>
                              <div className="notification-content-wrapper">
                                <div className="head-wrapper">
                                  <h5>Jimmy Nilson followed you</h5>
                                  <span>28 minutes ago</span>
                                </div>
                                <div className="btn-wrapper">
                                  <button className="btn">Follow</button>
                                </div>
                              </div>
                            </div>
                            <div className="single-notification-wrapper">
                              <div className="img-wrapper">
                                <figure>
                                  <img src={no2} alt="" />
                                </figure>
                              </div>
                              <div className="notification-content-wrapper">
                                <div className="head-wrapper">
                                  <h5>Katie Malone liked 3 your photos</h5>
                                  <span>2 hours ago</span>
                                </div>
                                <div className="btn-wrapper">
                                  <figure>
                                    <img src={notification_img} alt="" />
                                  </figure>
                                </div>
                              </div>
                            </div>
                            <div className="single-notification-wrapper">
                              <div className="img-wrapper">
                                <figure>
                                  <img src={no3} alt="" />
                                </figure>
                              </div>
                              <div className="notification-content-wrapper">
                                <div className="head-wrapper">
                                  <h5>
                                    Ola Gonzales react for story "Killin’
                                    chillin" to your timeline
                                  </h5>
                                  <span>2 hours ago</span>
                                </div>
                                <div className="btn-wrapper"></div>
                              </div>
                            </div>
                            <div className="single-notification-wrapper">
                              <div className="img-wrapper">
                                <figure>
                                  <img src={no4} alt="" />
                                </figure>
                              </div>
                              <div className="notification-content-wrapper">
                                <div className="head-wrapper">
                                  <h6>@gorlova commented on photo</h6>
                                  <h5>
                                    The Luxury Of Traveling With Yacht Charter
                                    Companies
                                  </h5>
                                  <span>2 hours ago</span>
                                </div>
                                <div className="btn-wrapper"></div>
                              </div>
                            </div>
                            <div className="single-notification-wrapper">
                              <div className="img-wrapper">
                                <figure>
                                  <img src={no5} alt="" />
                                </figure>
                              </div>
                              <div className="notification-content-wrapper">
                                <div className="head-wrapper">
                                  <h5>Austin Gonzales added 5 photos</h5>
                                  <span>2 hours ago</span>
                                </div>
                                <div className="btn-wrapper"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="language-icon-wrapper">
                  <div className="lang-wrapper">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item dropdown language-list">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img src={usa} className="img-fluid" />
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            <img src={uk} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={blue_flag} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={vietnam} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={germany} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={norway} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={greek} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={cambridge} className="img-fluid" />
                          </a>
                          <a className="dropdown-item" href="#">
                            <img src={european_union} className="img-fluid" />
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown profile-dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <img src={profile_img} className="img-fluid" />{" "}
                          <span>Darrell Bailey</span>
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <div className="profile-dropdown">
                            <div className="profile">
                              <figure>
                                <img
                                  src={profile_img}
                                  alt=""
                                  className="img-fluid"
                                />
                              </figure>
                              <div className="name">
                                <h4>Darrell Bailey</h4>
                                <p>
                                  <Link to="/user-profile">
                                    View My Profile
                                  </Link>
                                </p>
                              </div>
                            </div>
                            <ul className="list">
                              <li>
                                <Link to="/wallet">Money</Link>
                              </li>
                              <li>
                                <Link to="/wallet-dashboard">Earned Nugs</Link>
                              </li>
                              <li>
                                <Link to="/products">My Products</Link>
                              </li>
                              <li>
                                <Link to="/market-place">Market place</Link>
                              </li>
                              <li>
                                <Link to="/faqs">Help & Feedback</Link>
                              </li>
                              <li>
                                <Link to="#">Notification Settings</Link>
                              </li>
                              <li>
                                <Link to="#">Follows</Link>
                              </li>
                              <li>
                                <Link to="/blocklist">Blocked List</Link>
                              </li>
                              <li>
                                <Link to="#">Privacy Settings</Link>
                              </li>
                              <li>
                                <Link to="#">Polices</Link>
                              </li>
                              <li>
                                <Link to="/report-problem">
                                  Report a Problem
                                </Link>
                              </li>
                              <li>
                                <Link to="/CreateAccount">Sign up</Link>
                              </li>
                              <li>
                                <Link to="/Login">Login</Link>
                              </li>
                              <li>
                                <Link to="#">Log Out</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Messages header starts here */}
                {/* {open == true ? (
									
								) : (
									""
								)} */}
                {/* Messages header ends here */}
                {/* Notifications starts here */}

                {/* Notifications ends here */}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Analytics Modal Start Here */}
      <div
        className="modal fade"
        id="analyticsModal"
        tabIndex="-1"
        aria-labelledby="analyticsModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close">
              <button className="close-btn" data-bs-dismiss="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.479"
                  height="34.479"
                  viewBox="0 0 34.479 34.479"
                >
                  <path
                    id="Icon_metro-cross"
                    data-name="Icon metro-cross"
                    d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
                    transform="translate(-2.571 -1.928)"
                    fill="#fff"
                  />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="analytics-box">
                <div className="heading-wrapper">
                  <span className="icon">
                    <img src={WeedIcon} alt="" className="img-fluid" />
                  </span>
                  <h3>Broadcast Analytics</h3>
                  <span className="icon">
                    <img src={WeedIcon} alt="" />
                  </span>
                </div>
                <div className="streamer-detail">
                  <figure className="streamer-img">
                    <img src={StreamerImg} alt="" />
                  </figure>
                  <h4 className="name">Chritine karla</h4>
                  <ul className="total-stream-time">
                    <li>
                      <span className="hour">03</span>
                      <br />
                      <span className="value">Hours</span>
                    </li>
                    <li className="seprator">:</li>
                    <li>
                      <span className="hour">22</span>
                      <br />
                      <span className="value">Minutes</span>
                    </li>
                    <li className="seprator">:</li>
                    <li>
                      <span className="hour">59</span>
                      <br />
                      <span className="value">Seconds</span>
                    </li>
                  </ul>
                  <div className="new-followers">
                    <h4 className="title">New Followers</h4>
                    <ul className="new">
                      <li>
                        <img src={NewFollower1} alt="" className="img-fluid" />
                      </li>
                      <li>
                        <img src={NewFollower2} alt="" className="img-fluid" />
                      </li>
                      <li>
                        <img src={NewFollower3} alt="" className="img-fluid" />
                      </li>
                      <li>
                        <img src={NewFollower4} alt="" className="img-fluid" />
                      </li>
                      <li>
                        <img src={NewFollower5} alt="" className="img-fluid" />
                      </li>
                    </ul>
                    <div className="count">
                      <h4 className="follower-count">+32 New Followers</h4>
                    </div>
                  </div>
                  <div className="nugs-earned">
                    <h4 className="title">Nuggs Earned</h4>
                    <ul className="nuggs">
                      <li>
                        <div className="icon">
                          <img src={Nug1} alt="" className="img-fluid" />
                        </div>
                        <h5>
                          Likes
                          <br />
                          <span>470</span>
                        </h5>
                      </li>
                      <li>
                        <div className="icon">
                          <img src={Nug2} alt="" className="img-fluid" />
                        </div>
                        <h5>
                          Shares
                          <br />
                          <span>71</span>
                        </h5>
                      </li>
                      <li>
                        <div className="icon">
                          <img src={Nug3} alt="" className="img-fluid" />
                        </div>
                        <h5>
                          Nugs
                          <br />
                          <span>600</span>
                        </h5>
                      </li>
                    </ul>
                  </div>
                  <div className="highest-view">
                    <h4>HIGHEST VIEW</h4>
                    <h4 className="total">23.76k</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Analytics Modal End Here */}

      {/* Add Streamer Modal Start Here */}
      <div
        className="modal fade"
        id="addStreamerModal"
        tabIndex="-1"
        aria-labelledby="addStreamerModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="close">
              <button className="close-btn" data-bs-dismiss="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.567"
                  height="21.567"
                  viewBox="0 0 21.567 21.567"
                >
                  <g
                    id="Group_7797"
                    data-name="Group 7797"
                    transform="translate(-46.716 -49.661)"
                  >
                    <rect
                      id="Rectangle_125"
                      data-name="Rectangle 125"
                      width="27"
                      height="3.5"
                      rx="1.75"
                      transform="translate(49.191 49.661) rotate(45)"
                      fill="#fff"
                    />
                    <rect
                      id="Rectangle_126"
                      data-name="Rectangle 126"
                      width="27"
                      height="3.5"
                      rx="1.75"
                      transform="translate(46.717 68.753) rotate(-45)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <div className="add-streamer-box">
                <div className="sarch-bar">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />
                  </div>
                  <button className="btn" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.774"
                      height="14.774"
                      viewBox="0 0 14.774 14.774"
                    >
                      <g
                        id="Icon_feather-search"
                        data-name="Icon feather-search"
                        transform="translate(0.5 0.5)"
                      >
                        <path
                          id="Path_692"
                          data-name="Path 692"
                          d="M16.56,10.53A6.03,6.03,0,1,1,10.53,4.5,6.03,6.03,0,0,1,16.56,10.53Z"
                          transform="translate(-4.5 -4.5)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                        <path
                          id="Path_693"
                          data-name="Path 693"
                          d="M28.254,28.254l-3.279-3.279"
                          transform="translate(-14.686 -14.686)"
                          fill="none"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
                <div className="all-streamer">
                  <label className="streamer-container">
                    <input type="radio" hidden checked name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower1}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Ashley Hamilton</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower2}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Hugo Marsh</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower3}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Manuel Vargas</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower4}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Jenny Hubbard</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower5}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Andre Barnett</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower1}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Ashley Hamilton</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower2}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Hugo Marsh</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower3}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Manuel Vargas</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower4}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Jenny Hubbard</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower5}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Andre Barnett</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower1}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Ashley Hamilton</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower2}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Hugo Marsh</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower3}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Manuel Vargas</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower4}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Jenny Hubbard</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower5}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Andre Barnett</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower1}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Ashley Hamilton</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower2}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Hugo Marsh</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower3}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Manuel Vargas</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower4}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Jenny Hubbard</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                  <label className="streamer-container">
                    <input type="radio" hidden name="StreamerRadio" />
                    <span className="checkmark">
                      <div className="streamer-box">
                        <div className="left">
                          <figure>
                            <img
                              src={NewFollower5}
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                          <h4>Andre Barnett</h4>
                        </div>
                        <div className="right">
                          <span className="dot"></span>
                        </div>
                      </div>
                    </span>
                  </label>
                </div>
                <div className="button-group">
                  <button className="btn" data-bs-dismiss="modal">
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Streamer Modal End Here */}

      {/* Bordcast Modal */}
      <div
        className="modal fade"
        id="BrodcastModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="BrodcastModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button className="cancel-btn" data-bs-dismiss="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
              <div className="stream-setting">
                <div className="heading-wrapper">
                  <span className="icon">
                    <img src={WeedIcon} alt="" className="img-fluid" />
                  </span>
                  <h3 className="txt">Broadcast Settings</h3>
                  <span className="icon">
                    <img src={WeedIcon} alt="" className="img-fluid" />
                  </span>
                </div>
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Type Stream Title"
                      className="form-control"
                    />
                  </div>
                  <div className="add-stream">
                    <button
                      type="button"
                      className="btn"
                      data-bs-dismiss="modal"
                      data-bs-toggle="modal"
                      data-bs-target="#addStreamerModal"
                    >
                      <svg
                        xmlns="http	://www.w3.org/2000/svg"
                        width="10.058"
                        height="10.058"
                        viewBox="0 0 10.058 10.058"
                      >
                        <g
                          id="Icon_feather-plus"
                          data-name="Icon feather-plus"
                          transform="translate(-6.5 -6.5)"
                        >
                          <path
                            id="Path_690"
                            data-name="Path 690"
                            d="M18,7.5v8.058"
                            transform="translate(-6.471)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                          <path
                            id="Path_691"
                            data-name="Path 691"
                            d="M7.5,18h8.058"
                            transform="translate(0 -6.471)"
                            fill="none"
                            stroke="#fff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          />
                        </g>
                      </svg>
                      Add Streamer
                    </button>
                  </div>
                  <ul className="toggle-setting">
                    <li>
                      <span>
                        <ruby>Comments</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li>
                      <span>
                        <ruby>Mute</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li>
                      <span>
                        <ruby>Rotate camera</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li>
                      <span>
                        <ruby>Video</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li>
                      <span>
                        <ruby>Turn on flash</ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                    <li>
                      <span>
                        <ruby>
                          Bug Jar{" "}
                          <Tooltip placement="top" title="Bug jar details here">
                            <IconButton>
                              <i
                                class="fa fa-info-circle text-white"
                                aria-hidden="true"
                              ></i>
                            </IconButton>
                          </Tooltip>{" "}
                        </ruby>
                        <img src={Leaf} alt="" className="img-fluid" />
                      </span>
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                      </label>
                    </li>
                  </ul>
                  <div className="button-group">
                    <button
                      data-bs-dismiss="modal"
                      type="button"
                      onClick={() => navigate("/live-stream")}
                    >
                      START SESSION
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bordcast Modal */}

      {/* Bordcast Modal */}
      <div
        className="modal fade"
        id="AddStory"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="AddStory"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <div className="story-box">
                <div className="heading-wrapper">
                  <h4>Add Story</h4>
                  <button className="close" data-bs-dismiss="modal">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17.138"
                      height="17.138"
                      viewBox="0 0 17.138 17.138"
                    >
                      <path
                        id="Icon_metro-cross"
                        data-name="Icon metro-cross"
                        d="M18.41,14.839h0l-5.2-5.2,5.2-5.2h0a.537.537,0,0,0,0-.757L15.954,1.228a.537.537,0,0,0-.757,0h0L10,6.427l-5.2-5.2h0a.537.537,0,0,0-.757,0L1.585,3.684a.537.537,0,0,0,0,.757h0l5.2,5.2-5.2,5.2h0a.537.537,0,0,0,0,.757l2.456,2.456a.537.537,0,0,0,.757,0h0l5.2-5.2,5.2,5.2h0a.537.537,0,0,0,.757,0L18.41,15.6a.537.537,0,0,0,0-.757Z"
                        transform="translate(-1.428 -1.071)"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                </div>
                <form action="">
                  <div className="form-group">
                    <textarea
                      style={{ backgroundColor: color, color: fontcolor }}
                      className="form-control"
                      placeholder="Start typing"
                    ></textarea>
                  </div>
                </form>
                <div className="bottom-bar">
                  <div className="color-picker">
                    <div className="left-side" onMouseLeave={()=> setBackopen(false)}>
                      <button
                        onClick={() =>
                          backopen ? setBackopen(false) : setBackopen(true)
                        }
                      >
                        Select background color
                      </button>
                      <div
                        className="background-picker"
                        style={{ display: backopen ? "block" : "none" }}
                      >
                        <ChromePicker
                          color={color}
                          onChangeComplete={(color) => {
                            setColor(color.hex);
                          }}
                        />
                      </div>
                    </div>
                    <div className="right-side" onMouseLeave={()=> setFontopen(false)}>
                      <button
                        onClick={() =>setFontopen(true)
                        }
                      >
                        Select font color
                      </button>
                      <div
                        className="font-picker"
                        style={{ display: fontopen ? "block" : "none" }}
                      >
                        <ChromePicker
                          color={fontcolor}
                          onChangeComplete={(color) => {
                            setFontcolor(color.hex);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="backgrounds">
                    {/* <label>Background</label> */}
                    <ul className="backgrounds-color">
                      {/* <li>
                        <label class="background-container">
                          <input
                            class="form-check-input"
                            type="radio"
                            hidden
                            checked
                            name="Storyradio"
                          />
                          <span class="checkmark cursor_pointer">
                            <figure>
                              <img
                                src={StoryBack1}
                                alt=""
                                className="img-fluid"
                              />
                            </figure>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label class="background-container">
                          <input
                            class="form-check-input"
                            type="radio"
                            hidden
                            checked
                            name="Storyradio"
                          />
                          <span class="checkmark cursor_pointer">
                            <figure>
                              <img
                                src={StoryBack2}
                                alt=""
                                className="img-fluid"
                              />
                            </figure>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label class="background-container">
                          <input
                            class="form-check-input"
                            type="radio"
                            hidden
                            checked
                            name="Storyradio"
                          />
                          <span class="checkmark cursor_pointer">
                            <figure>
                              <img
                                src={StoryBack3}
                                alt=""
                                className="img-fluid"
                              />
                            </figure>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label class="background-container">
                          <input
                            class="form-check-input"
                            type="radio"
                            hidden
                            checked
                            name="Storyradio"
                          />
                          <span class="checkmark cursor_pointer">
                            <figure>
                              <img
                                src={StoryBack4}
                                alt=""
                                className="img-fluid"
                              />
                            </figure>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label class="background-container">
                          <input
                            class="form-check-input"
                            type="radio"
                            hidden
                            checked
                            name="Storyradio"
                          />
                          <span class="checkmark cursor_pointer">
                            <figure>
                              <img
                                src={StoryBack5}
                                alt=""
                                className="img-fluid"
                              />
                            </figure>
                          </span>
                        </label>
                      </li> */}
                      {/* <li>
												<label class="background-container">
													<input
														class="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
													<span class="checkmark">
														<figure>
															<img
																src={m2}
																alt=""
																className="img-fluid cursor_pointer"
															/>
														</figure>
													</span>
												</label>
											</li>
											<li>
												<label className="background-container">
													<input
														className="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
													<span className="checkmark"></span>
												</label>
											</li>
											<li>
												<label class="background-container">
													<input
														class="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
													<span class="checkmark">
														<figure>
															<img
																src={m4}
																alt=""
																className="img-fluid cursor_pointer"
															/>
														</figure>
													</span>
												</label>
											</li>
											<li>
												<label class="background-container">
													<input
														class="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
													<span class="checkmark">
														<figure>
															<img
																src={m5}
																alt=""
																className="img-fluid cursor_pointer"
															/>
														</figure>
													</span>
												</label>
											</li>
											<li>
												<input
														class="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
												<span class="checkmark faemojii">
													<figure style={{ marginBottom: "0px" }}>
														<i class="fa fa-smile-o" aria-hidden="true"></i>
													</figure>
												</span>
											</li>
											<li>
												<input
														class="form-check-input"
														type="radio"
														hidden
														name="Storyradio"
													/>
												<img
													className="cursor_pointer"
													alt="m6"
													width={100}
													src={m6}
												/>
											</li> */}
                    </ul>
                  </div>
                  <div className="button-group">
                    <button
                      className="btn"
                      data-bs-dismiss="modal"
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bordcast Modal */}

      {/* Spinner Coins */}
      <div
        className="modal fade"
        id="SpinnerCoins"
        tabIndex="-1"
        aria-labelledby="SpinnerCoins"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button className="close" data-bs-dismiss="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.479"
                  height="34.479"
                  viewBox="0 0 34.479 34.479"
                >
                  <path
                    id="Icon_metro-cross"
                    data-name="Icon metro-cross"
                    d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
                    transform="translate(-2.571 -1.928)"
                    fill="#fff"
                  />
                </svg>
              </button>
              <div className="coins-detail">
                <div className="coins">
                  <figure>
                    <img src={Coin} alt="" className="img-fluid" />
                  </figure>
                  <h3>20</h3>
                </div>
                <p> Per Spin Fees 20 Coins</p>
                <div className="button-group">
                  <button
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#winnerModal"
                    data-bs-dismiss="modal"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Spinner Coins */}

      <div
        className="modal fade"
        id="SendGift"
        tabIndex="-1"
        aria-labelledby="SendGift"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button className="close" data-bs-dismiss="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.479"
                  height="34.479"
                  viewBox="0 0 34.479 34.479"
                >
                  <path
                    id="Icon_metro-cross"
                    data-name="Icon metro-cross"
                    d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
                    transform="translate(-2.571 -1.928)"
                    fill="#fff"
                  />
                </svg>
              </button>
              <div className="coins-detail">
                <div className="coins">
                  <figure>
                    <img src={Coin} alt="" className="img-fluid" />
                  </figure>
                </div>
                <p>Send Gift</p>
                <div className="button-group">
                  <button
                    className="btn"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Winner Modal */}
      <div
        className="modal fade"
        id="winnerModal"
        tabIndex="-1"
        aria-labelledby="winnerModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button className="close" data-bs-dismiss="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.479"
                  height="34.479"
                  viewBox="0 0 34.479 34.479"
                >
                  <path
                    id="Icon_metro-cross"
                    data-name="Icon metro-cross"
                    d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
                    transform="translate(-2.571 -1.928)"
                    fill="#fff"
                  />
                </svg>
              </button>
              <div className="winner-box">
                <div className="heading">
                  <h2>Winner</h2>
                </div>
                <div className="winner-img">
                  <figure>
                    <img src={WinnerImg} alt="" className="img-fluid" />
                  </figure>
                </div>
                <div className="name">
                  <h4>Rose Armstrong</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Winner Modal */}

      {/* Tier Modal */}
      <div
        className="modal fade"
        id="TierModal"
        tabIndex="-1"
        aria-labelledby="TierModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button className="close" data-bs-dismiss="modal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34.479"
                  height="34.479"
                  viewBox="0 0 34.479 34.479"
                >
                  <path
                    id="Icon_metro-cross"
                    data-name="Icon metro-cross"
                    d="M36.735,29.628h0l-10.46-10.46,10.46-10.46h0a1.08,1.08,0,0,0,0-1.523L31.794,2.243a1.08,1.08,0,0,0-1.523,0h0L19.81,12.7,9.35,2.243h0a1.08,1.08,0,0,0-1.523,0L2.886,7.184a1.08,1.08,0,0,0,0,1.523h0l10.46,10.46L2.886,29.628h0a1.08,1.08,0,0,0,0,1.523l4.941,4.941a1.08,1.08,0,0,0,1.523,0h0l10.46-10.46,10.46,10.46h0a1.08,1.08,0,0,0,1.523,0l4.941-4.941a1.08,1.08,0,0,0,0-1.523Z"
                    transform="translate(-2.571 -1.928)"
                    fill="#fff"
                  />
                </svg>
              </button>
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading">
                    <h3>Tiers System</h3>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="tier-box">
                    <h3 className="title mb-5">Referrals</h3>
                    <table className="table">
                      <tr>
                        <td className="tier1_tier">Tier 1</td>
                        <td>
                          <p className="mb-2">Consultant</p>
                          <button className="btn btn-light bt-white-apply-tier">
                            Apply
                          </button>
                          <button className="btn btn-light bt-black-apply-tier">
                            Learn more about
                          </button>
                          <button className="btn btn-light bt-white-apply-tier">
                            Become a
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="tier1_tier">Tier 2</td>
                        <td>
                          <p className="mb-2">Ambassador 1K</p>

                          <button className="btn btn-light bt-white-apply-tier">
                            Apply
                          </button>
                          <button className="btn btn-light bt-black-apply-tier">
                            Learn more about
                          </button>
                          <button className="btn btn-light bt-white-apply-tier">
                            Become a
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="tier1_tier">Tier 3</td>
                        <td>
                          <p className="mb-2 pr-5">
                            Content Creator Broadcasters Entrepreneurs
                          </p>
                          <button className="btn btn-light bt-white-apply-tier">
                            Apply
                          </button>
                          <button className="btn btn-light bt-black-apply-tier">
                            Learn more about
                          </button>
                          <button className="btn btn-light bt-white-apply-tier">
                            Become a
                          </button>
                          {/* <p className="mb-2 pr-5">
														Content Creator Broadcasters Entrepreneurs
													</p> */}
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* <div className="tier-box">
										<h3 className="title">Broadcaster</h3>
										<table className="table">
											<tr>
												<td>Tier 1</td>
												<td>Basic Live</td>
											</tr>
											<tr>
												<td>Tier 2</td>
												<td>Live for 2 hours</td>
											</tr>
											<tr>
												<td>Tier 2</td>
												<td>VIP</td>
											</tr>
										</table>
									</div> */}
                  <div className="tier-box">
                    <h3 className="title mb-5">Broadcaster</h3>
                    <table className="table">
                      <tr>
                        <td className="tier1_tier">Tier 1</td>
                        <td>
                          <p className="mb-2">Basic Live</p>
                          <button className="btn btn-light bt-white-apply-tier">
                            Apply
                          </button>
                          <button className="btn btn-light bt-black-apply-tier">
                            Learn more about
                          </button>
                          <button className="btn btn-light bt-white-apply-tier">
                            Become a
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="tier1_tier">Tier 2</td>
                        <td className="pl-5">
                          <p className="mb-2">Live for 2 hours</p>
                          <button className="btn btn-light bt-white-apply-tier">
                            Apply
                          </button>
                          <button className="btn btn-light bt-black-apply-tier">
                            Learn more about
                          </button>
                          <button className="btn btn-light bt-white-apply-tier">
                            Become a
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td className="tier1_tier">Tier 3</td>
                        <td>
                          <p className="mb-2 pr-5">VIP</p>
                          <button className="btn btn-light bt-white-apply-tier">
                            Apply
                          </button>
                          <button className="btn btn-light bt-black-apply-tier">
                            Learn more about
                          </button>
                          <button className="btn btn-light bt-white-apply-tier">
                            Become a
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="col-lg-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tier Modal */}

      {/* Bio Popup */}
      <div
        class="modal fade"
        id="bioModal"
        tabindex="-1"
        aria-labelledby="bioModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
            <div class="modal-body">
              <div className="bio-body">
                <div className="profile-box">
                  <figure>
                    <img src={userProfile} alt="123" />
                  </figure>
                  <div className="name">
                    <h4>Cathline07</h4>
                    <p>@jorgecutis</p>
                  </div>
                </div>
                <form action="">
                  <div className="form-group">
                    <label>Your Bio Here</label>
                    <textarea
                      className="form-control"
                      maxlength="50"
                    ></textarea>
                  </div>
                  <div class="post-btn-wrapper">
                    <button class="btn  form-control">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bio Popup */}
    </>
  );
};

export default Header;
