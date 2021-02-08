import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let posts = [
  { id: 1, maseege: "hi, how are you?", likesCount: 15 },
  { id: 2, maseege: "it's my first post!!", likesCount: 101 },
  { id: 3, maseege: "Have a goog day!!", likesCount: 17 },
  { id: 4, maseege: "Yo", likesCount: 13 },
  { id: 5, maseege: "Yo", likesCount: 104 },
];

let dialog = [
  { id: 1, name: "Dimych" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Alina" },
  { id: 4, name: "Zora" },
  { id: 5, name: "Kon'" },
];
let maseeges = [
  { id: 1, maseege: "Hi?" },
  { id: 2, maseege: "How are you?" },
  { id: 3, maseege: "Have a goog day!!" },
  { id: 4, maseege: "Yo" },
  { id: 5, maseege: "Yo" },
];

let date = {
  name: "Alexander Danilin",
  dob: "02.12.1983",
  city: "Mogilev",
  education: "speciaal",
  webSite: "https://www.instagram.com/sasha_al4i/.com/sasha_al4i",
};

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialog = {dialog} maseeges ={maseeges} date={date}/>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
