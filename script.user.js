// ==UserScript==
// @name         Mascot Changer
// @namespace    https://userscripts.fandrest.my.id
// @version      1.0
// @description  Changes the web Discord nitro mascot to a saucy protogen
// @author       Fandrest
// @match        https://discord.com/nitro
// @grant        none
// ==/UserScript==

const RemoveVideo = document.querySelector('.video-link-new.w-embed');
RemoveVideo.innerHTML = '';
document.getElementsByClassName("hero-bg-wrapper video-new2")[0] .style.backgroundImage="url('https://i.ytimg.com/vi/EQ-xGx6MwVs/maxresdefault.jpg')";
