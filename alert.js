// alert.js

var warningbox = document.createElement('div');
warningbox.style.cssText = "background: #000000; height: 100%;width: 100%;position: fixed; z-index: 1;";

var inner_text = document.createElement('span');
inner_text.textContent = "網站已被封鎖：此網站含失實資訊，內容有機會是抄襲或杜撰。點擊網站變相鼓勵不良網站。";
inner_text.style.cssText = "color: white; margin: 100px 150px 100px 80px; background: black; display: block; height: 50% width: 50%; text-align: center; font-size: 80px; vertical-align: middle;";

warningbox.appendChild(inner_text);

document.body.insertBefore(warningbox, document.body.firstChild);
