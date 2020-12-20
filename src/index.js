import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogPage from "./components/Posts/BlogPage";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import BlogOne from "./components/Posts/BlogOne";
function clickEffect(e) {
  var clickDiv = document.createElement("div");

  clickDiv.className = "clickEffect";
  clickDiv.style.top = e.clientY + "px";
  clickDiv.style.left = e.clientX + "px";

  document.body.appendChild(clickDiv);

  clickDiv.onanimationend = function () {
    clickDiv.parentElement.removeChild(clickDiv);
  };
}
document.addEventListener("click", clickEffect);

ReactDOM.render(
  <Router>
    <AppNavbar />
    <Route exact path="/" component={App}></Route>
    <Route exact path="/blogs" component={BlogPage}></Route>
    <Route exact path="/blogs_new" component={BlogOne}></Route>

    <Footer />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
