import React from "react";
import { logo } from "../constant";

const Newslettter = () => {
  return (
    <>
      <section className="newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="news-letter-wrappper">
                <div className="news-letter-logo-wrapper">
                  <img src={logo} className="img-fluid" />
                  <div className="tag-line-wrapper">
                    <p>Keep always updated with our fresh blog posts</p>
                  </div>
                </div>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-theme" type="submit">
                      <i className="fa fa-arrow-right"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newslettter;
