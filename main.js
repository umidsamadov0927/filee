export let headerist = [
    { name: "Why Qubit?" },
    { name: "Products" },
    { name: "Solutions" },
    { name: "Customers" },
    { name: "Case studies" },
    { name: "More" },
];
    document.getElementById("submitBtn").addEventListener("click", function () {
        const input = document.getElementById("textInput");
        const value = input.value;

        console.log("Kiritilgan:", value);

        input.value = "";
    });

    export let img = [
        "img./logo1111.svg",
        "img./Rectangle (1).svg",
        "img./Rectangle (2).svg",
        "img./Rectangle (3).svg",
        "img./Rectangle (4).svg",
        "img./Rectangle (5).svg",
        "img./Rectangle (6).svg",
        "img./Rectangle (7).svg"
    ];

export let section_one = [
    {
        number: "140%",
        description: "Qubit’s top customers <br> annual growth rate."
    },
    {
        number: "9.5m",
        description:  "Personalized experiences <br> delivered every hour."
    },
    {
        number: "$20bn",
        description:  "Online sales generated <br> by our customers in 2020."
    },
    {
        number: "4.4m",
        description:  "Shoppers influenced <br> by Qubit every day."
    },
    {
        number: "364",
        description: "Ecommerce stores are <br> growing faster with Qubit."
    },
    {
        number: "$1.6bn",
        description: "Incremental revenue generated <br> by our customers in 2020.*"
    }
];

const data = [
    {
        title: "1:1 Product recommendations",
        text: "Use deep learning recommendations to engage customers in seconds.",
        img: "img./rasm172.svg",
    },
    {
        title: "1:1 Product badging",
        text: "Guide discovery with personalized product badging. Push sales with social proofing.",
        img: "img./rasm2.svg",
    },
    {
        title: "Personalized content",
        text: "Your customers are unique. Present them with content that shows you know them.",
        img: "img./rasm3.svg",
    },
    {
        title: "Product insights",
        text: "A platform packed with insights helping you discover the hard hitting things you can do next.",
        img: "img./rasm4.svg",
    },
    {
        title: "CommerceAI",
        text: "Your customer’s behavioral data is telling you a story. Use predictive and affinity based algorithms to serve them better.",
        img: "img./rasm5.svg",
    },
    {
        title: "Platform integrations",
        text: "Connect Qubit to any tool via API. Import data or trigger an experience on any platform.",
        img: "img./rasm6.svg"
    }
];


const bulimlar = 6;
let count = 0;

function createCard(name, surname, age, index) {
    let card = document.createElement('div');

    card.className = 'p-6 rounded-xl shadow-lg relative cursor-pointer border border-purple-600 mb-4 bg-gradient-to-r from-purple-700 via-indigo-800 to-blue-900';

 ;

    if (!document.getElementById('fadeInUpStyle')) {
        const style = document.createElement('style');
        document.head.appendChild(style);
    }

    card.innerHTML = `
    <button class="absolute top-2 right-2 text-white font-bold text-lg hover:text-red-500 delete-btn">&times;</button>
    <h2 class="text-2xl font-semibold text-white mb-2">${name} ${surname}</h2>
    <p class="text-indigo-200 text-sm border-b border-indigo-400 pb-2">
      Age: <span class="font-medium">${age}</span>
    </p>
    <span class="block mt-1 text-xs text-indigo-300 font-semibold">Qo‘shimcha ma’lumot yo‘q</span>
  `;

    card.querySelector('.delete-btn').addEventListener('click', () => {
        removeCard(index, card);
    });

    document.getElementById('document').appendChild(card);
}

function removeCard(index, cardElement) {
    cardElement.remove();

    let savedCards = localStorage.getItem('cards');
    if (!savedCards) return;
    let cards = JSON.parse(savedCards);
    cards.splice(index, 1);
    localStorage.setItem('cards', JSON.stringify(cards));

    count = cards.length;

    const container = document.getElementById('document');
    container.innerHTML = '';
    cards.forEach(({name, surname, age}, i) => {
        createCard(name, surname, age, i);
    });
}

function loadCards() {
    const savedCards = localStorage.getItem('cards');
    if (!savedCards) return;

    const cards = JSON.parse(savedCards).slice(0, bulimlar);
    count = cards.length;

    cards.forEach(({name, surname, age}, index) => {
        createCard(name, surname, age, index);
    });
}

export function Push() {
    let savedCards = localStorage.getItem('cards');
    let cards = savedCards ? JSON.parse(savedCards) : [];

    if (cards.length >= bulimlar) {
        alert("Faqatgina 6 ta malumot qo‘shish mumkin!");
        return;
    }

    let name = document.getElementById('nameInput').value.trim();
    let surname = document.getElementById('surnameInput').value.trim();
    let age = document.getElementById('ageInput').value.trim();
w
    cards.push({name, surname, age});
    localStorage.setItem('cards', JSON.stringify(cards));

    createCard(name, surname, age, cards.length - 1);

    count = cards.length;

    document.getElementById('nameInput').value = '';
    document.getElementById('surnameInput').value = '';
    document.getElementById('ageInput').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
    loadCards();
    const pushBtn = document.getElementById('pushBtn');
    if (pushBtn) {
        pushBtn.addEventListener('click', Push);
    }
});

export let cards = data.map(item => {
    const card = document.createElement("div");

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.title;

    const title = document.createElement("h3");
    title.textContent = item.title;

    const text = document.createElement("p");
    text.textContent = item.text;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(text);

    return card;
});


    export const footerSections = [
        {
            title: "Featured Capabilities",
            items: [
                "A/B testing",
                "Abandonment recovery",
                "Customer insights",
                "Customer polling and feedback",
                "Customer segmentation",
                "Data collection",
                "Ecommerce merchandising",
                "Custom machine learning",
                "Journey Personalization",
                "Mobile app personalization",
                "Cross-channel personalization",
                "Social proofing",
                "Website personalization",
            ],
        },
        {
            title: "Products",
            items: [
                "1:1 Product recommendations",
                "1:1 Product badging",
                "1:1 Journey personalization",
                "Personalized content",
                "Product insights",
            ],
        },
        {
            title: "Resources",
            items: [
                "Resources",
                "Customers",
                "Qubit Blog",
                "Glossary",
            ],
        },
        {
            title: "Company",
            items: [
                "Why Qubit?",
                "About us",
                "Careers",
                "Press",
                "Contact",
            ],
        },
        {
            title: "Working with us",
            items: [
                "Legal",
            ],
        },
    ];


