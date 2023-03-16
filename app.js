const menuBtn = document.querySelector('.menu-btn');
// const navbar = document.getElementById('navbar');
const navbarMenu = document.querySelector('.navbar-right');
const guestList = document.querySelector('.guest-list');
const showMore = document.querySelector('.more-btn');

// Feature data Object
const speakers = [
  {
    speaker: 'Mahatma Gandhi',
    role: 'A Kickoff Champion',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
    quotation: 'better tomorrow, save energy today.',
    image: './images/person2.jpg',
  },
  {
    speaker: 'Martin Luther King',
    role: ' A Community Crusader ',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
    quotation: 'Save Energy, Save the planet.',
    image: './images/person3.jpg',
  },
  {
    speaker: 'Malcolm X.',
    role: 'A Motivation Master',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
    quotation: 'Energy saved is Energy generated.',
    image: './images/person4.jpg',
  },
  {
    speaker: 'Nelson Mandela.',
    role: 'An Industry Expert',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
    quotation: 'Reduce, Reuse and Recycle',
    image: './images/person5.jpg',
  },
  {
    speaker: ' E.P. Thompson',
    role: 'A Killer Keynote',
    description:
      'Every good event deserves a good kickoff - and what better way to start things off on the right foot than with an amazing kickoff speaker.',
    quotation: 'Rock your world by saving energy.',
    image: './images/person6.jpg',
  },
  {
    speaker: 'Ai Weiwei',
    role: 'make an amazing impression',
    description:
      'Golda Onyia is a Business Development Associate from Amokwe Udi near Enugu.  She has been with Solar Sister since 2021.',
    quotation: 'Think. Act. Save.',
    image: './images/person7.jpg',
  },
];

// burger menu action
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

// glue navigation menu
// window.onscroll = function () {
//   if (window.pageYOffset > 100) {
//     navbar.classList.add('glue');
//   } else {
//     navbar.classList.remove('glue');
//   }
// };

// open menu on click
menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  navbarMenu.classList.toggle('show-menu');
});

// generate Dynamic guest list
for (let i = 0; i < speakers.length; i += 1) {
  const specialGuest = speakers[i];

  const guest = document.createElement('guest');
  guest.classList.add('guest');
  guest.innerHTML = `
    <div class="guest-item">
        <div class="guest-item-img">
            <img src="${specialGuest.image}" alt="">
        </div>
        <div class="guest-item-text">
            <h3>${specialGuest.speaker}</h3>
            <hr class = "guest-line">
            <span class="role">${specialGuest.role} </span>
            <p>
                ${specialGuest.description}
            </p>
            <q>${specialGuest.quotation}</q>
        </div>
    </div>
  `;
  guestList.appendChild(guest);
}

// unhide guest List on click
showMore.addEventListener('click', (e) => {
  e.preventDefault();
  guestList.classList.toggle('hide');
  showMore.textContent = showMore.textContent.includes('See More')
    ? 'See Less'
    : 'See More';
});