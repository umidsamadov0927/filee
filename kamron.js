import { headerist } from './main.js';
const container = document.getElementById("texts");
headerist.forEach(item => {
    const p = document.createElement("p");
    p.innerHTML = `
    <p class="transition-all duration-300 hover:text-[#6F2CFF] hover:[text-shadow:2px_2px_6px_rgba(111,44,255,0.5)] cursor-pointer">${item.name}</p>
    `
    container.appendChild(p);
});
import { img } from './main.js';

const gallery = document.getElementById('main_img');
const gallery2 = document.getElementById('main_img2');
const toggleBtn = document.getElementById('main_btn');

function addImages(container) {
    img.forEach(src => {
        const image = document.createElement('img');
        image.src = src;
        image.alt = "customer logo";
        image.className = "number8";
        container.appendChild(image);
    });
}


addImages(gallery);
addImages(gallery2);

let isVisible = localStorage.getItem('gallery2Visible') === 'true';

if (isVisible) {
    gallery2.classList.remove('hidden');
    toggleBtn.innerHTML = 'Hide customers ^';
} else {
    gallery2.classList.add('hidden');
    toggleBtn.innerHTML = 'Meet our customers &gt;';
}

toggleBtn.addEventListener('click', () => {
    isVisible = !isVisible;

    if (isVisible) {
        gallery2.classList.remove('hidden');
        toggleBtn.innerHTML = 'Hide customers ^';
    } else {
        gallery2.classList.add('hidden');
        toggleBtn.innerHTML = 'Meet our customers &gt;';
    }

    localStorage.setItem('gallery2Visible', isVisible);
});
import { section_one } from './main.js';
let abc = document.getElementById('qatorlar');
section_one.forEach(item => {
    let div = document.createElement('div');
    div.innerHTML = `
    <p class="text-[40px] font-bold transition-all duration-300 hover:text-[#6F2CFF] hover:[text-shadow:2px_2px_6px_rgba(111,44,255,0.5)] cursor-pointer">${item.number}</p>
    <p class="text-[15px] text-black-600 transition-all duration-300 hover:text-[#6F2CFF] hover:[text-shadow:2px_2px_6px_rgba(111,44,255,0.5)] cursor-pointer">${item.description}</p>
  `
    abc.appendChild(div);
});

import { cards } from "./main.js";

const containe = document.getElementById("card-container");

cards.forEach(card => {

    const img = card.querySelector("img");
    const title = card.querySelector("h3");
    const text = card.querySelector("p");

    card.className = "bg-white p-6 rounded-xl shadow hover:shadow-xl transition ";
    img.className = "w-14 h-14 mb-4 ";
    title.className = "text-lg font-bold mb-2 text-gray-800";
    text.className = "text-gray-600 text-sm ";

    containe.appendChild(card);
});

import { Push } from './main.js';

document.addEventListener('DOMContentLoaded', () => {
    const pushBtn = document.getElementById('pushBtn');
    if (pushBtn) {
        pushBtn.addEventListener('click', Push);
    }
});

import { footerSections } from './main.js';

const footer = document.getElementById('qubit-footer');

let html = `
  <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
`;

footerSections.forEach(section => {
    html += `
    <div>
      <h4 class="font-semibold mb-4 transition-all duration-300 hover:text-[#6F2CFF] hover:[text-shadow:2px_2px_6px_rgba(111,44,255,0.5)] cursor-pointer">${section.title}</h4>
      <ul class="space-y-2 ">
        ${section.items.map(item => `<li class="transition-all duration-300 hover:text-[#6F2CFF] hover:[text-shadow:2px_2px_6px_rgba(111,44,255,0.5)] cursor-pointer">${item}</li>`).join('')}
      </ul>
    </div>
  `;
});

html += `
  </div>
  <div class="text-center mt-12">
    <p class="text-2xl font-bold transition-all duration-300 hover:text-[#6F2CFF] hover:[text-shadow:2px_2px_6px_rgba(111,44,255,0.5)] cursor-pointer   ">Qubit.</p>
    <p class="text-xs mt-2 transition-all duration-300 hover:text-[#6F2CFF] hover:[text-shadow:2px_2px_6px_rgba(111,44,255,0.5)] cursor-pointer">&copy; ${new Date().getFullYear()} Qubit. All rights reserved.</p>
  </div>
`;

footer.innerHTML = html;