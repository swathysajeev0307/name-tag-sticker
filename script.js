/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

let wrapper = document.getElementsByClassName("wrapper")[0];
let template = document.getElementsByTagName("template")[0];

let names = ["Dudu", "Bubu", "Dubu"];

let colors = [

    "#FF0000", "#00FF00", "#0000FF", "FFFF00", "#00FFFF", "FF00FF", "#800000", "#880000", "#FFA500", "#FFD700", "#688E23", "#7CFC00", "#000080", "#880088", "#FF00FF", "#F4A460", "#FF3855", "#FD3A4A", "#F84D46", "#FA583D", "#FFAA1D", "#FFF700", "#299617", "#A7F432", "#2243B6", "#5946B2", "#9C51B6"
];

let sticker = function (name){

    let div = template.content.querySelector("div");
    let nameOfStick = div.querySelector(".name");

    nameOfStick.innerHTML = name;

    div.style.background = colors[Math.floor(Math.random() * colors.length)];

    div.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";

    let node = document.importNode(div,true);
    wrapper.appendChild(node);
}

setTimeout(refreshPage, 1000);
function refreshPage(){
    location.reload();
}

names.forEach(sticker);