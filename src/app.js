/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The neighbor ", "My little brother ", "My boss ", "The dog "];
  let action = ["ate ", "was hit by ", "attacked ", "wanted "];
  let what = ["my homework ", "a butterfly ", "the hose ", "my mom "];
  let when = ["today", "yesterday", "23 seconds ago", "on Friday"];

  let randomWho = who[Math.floor(Math.random() * 4)];
  let randomAction = action[Math.floor(Math.random() * 4)];
  let randomWhat = what[Math.floor(Math.random() * 4)];
  let randomWhen = when[Math.floor(Math.random() * 4)];

  let excuse = document.getElementById("excuse");

  excuse.innerHTML = randomWho + randomAction + randomWhat + randomWhen;
};
