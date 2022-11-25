'use strict';

// --- music btn ---
const musicBtn = document.querySelector('.musicBtn');
const headphoneIcon = musicBtn.querySelector('i');
const audio = musicBtn.querySelector('audio');

musicBtn.addEventListener('click', () => {
  // toggle btn styles
  musicBtn.classList.toggle('on');

  // toggle music on/off
  audio.paused ? audio.play() : audio.pause();
});

// --- hamburger button & navigation ---
const hamburgerBtn = document.querySelector('.hamburgerBtn');
const stripes = hamburgerBtn.querySelectorAll('div');
const navigation = document.querySelector('.navigation');

// function: toggle navigation on/off
const toggleNav = () => {
  // toggle btn styles
  hamburgerBtn.classList.toggle('on');

  // toggle navigation on/off
  navigation.classList.toggle('hide');
};

// hamburgerBtn click event
hamburgerBtn.addEventListener('click', toggleNav);

// on large screen
if (window.innerWidth >= 1200) {
  // turn nav into sidebar
  navigation.classList.add('sidebar');
}

// when resize
window.addEventListener('resize', () => {
  // if resize to small screen
  if (window.innerWidth < 1200) {
    // if sidebar was on
    if (navigation.classList.contains('sidebar')) {
      // turn off hamburgerBtn
      hamburgerBtn.classList.remove('on');

      // close navigation page
      navigation.classList.add('hide');
    }
  } else {
    // if resize to large screen, turn nav into sidebar
    navigation.classList.add('sidebar');
  }
});

// clicking on navigation links closes navigation page
const aboutLink = navigation.querySelector('[href="#about"]');
const workLink = navigation.querySelector('[href="#work"]');
const contactLink = navigation.querySelector('[href="#contact"]');

const closeNavigation = () => {
  // if navigation page is on
  if (!navigation.classList.contains('hide'))
    // close navigation page
    navigation.classList.add('hide');

  // turn off hamburgerBtn
  hamburgerBtn.classList.remove('on');
};

aboutLink.addEventListener('click', closeNavigation);
workLink.addEventListener('click', closeNavigation);
contactLink.addEventListener('click', closeNavigation);

// --- text sphere ---
const myTags = [
  'Javascript',
  'CSS',
  'HTML',
  'React',
  'SPA',
  'Redux',
  'Typescript',
  'NodeJS',
  'ExpressJS',
  'Mongoose',
  'Git',
  'npm',
  'Bootstrap',
  'Sass',
  'MUI',
  'BEM',
  'Gsap',
];

// the sphere
var tagCloud = TagCloud('.cloudTag', myTags, {
  // radius in px
  radius: 245,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,
});

// --- section title animation ---
const sectionTitles = document.querySelectorAll('.section h1 span');
const heroTitle = document.querySelectorAll('.hero span');

// add hero title onPageLoad animation
heroTitle.forEach((span) => {
  // last line of title
  if (span.style.getPropertyValue('--i') >= 13) {
    span.style.animation =
      'onPageLoadAnimation--heroTitile--lastLine 1500ms ease-out forwards';
    span.style.animationDelay = '2000ms';
    return;
  }

  // first two lines of title
  span.style.animation =
    'onPageLoadAnimation--heroTitile--firstTwoLines 600ms ease-out forwards';
  span.style.animationDelay = 'calc(var(--i) * 130ms)';
});

// add on mouse enter animation
setTimeout(() => {
  sectionTitles.forEach((span) => {
    // remove existing hero animation
    span.style.animation = '';
    span.style.opacity = 1;

    // add new animation
    span.addEventListener('mouseenter', () => {
      if (span.style.animation) return;

      // capital 'A'
      if (span.classList.contains('capitalA')) {
        span.style.animation = 'capitalA--Animation 800ms ease-out forwards';

        setTimeout(() => {
          span.style.animation = '';
        }, 800);
        return;
      }

      span.style.animation = 'sectionTitleAnimation 800ms ease-out forwards';

      setTimeout(() => {
        span.style.animation = '';
      }, 800);
    });
  });
}, 3000);

// --- copy text to clipboard ---
const contactInfo = document.querySelectorAll('[data-contactInfo]');
contactInfo.forEach((contact) => {
  contact.addEventListener('click', (e) => {
    navigator.clipboard.writeText(e.target.textContent);
  });
});

// --- intersection observer api ---
const sections = [...document.querySelectorAll('.section')];
const sectionsMinusHero = sections.slice(1);

const options = {
  root: null,
  threshold: 0.3,
  rootMargin: '0px',
};

// INTERSECTING FUNCTION
const showSectionContent = (entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('showSectionContent');
  });
};

// CREATE INTERSECTION OBSERVER
const observer = new IntersectionObserver(showSectionContent, options);

// observe all sections
sectionsMinusHero.forEach((section) => observer.observe(section));

// --- change background-color on click ---
// color options
const colorThemesArr = [
  // main: steel-blue
  {
    main: '#4F7CAC',
    secondary: '#b8cadd',
    highlight: '#9EEFE5',
    tag: '#7296bc',
  },
  // main:: dark orange
  {
    main: '#af5b5b',
    secondary: '#dfbdbd',
    highlight: '#FCD0A1',
    tag: '#bf7b7b',
  },
  // main: rifle-green
  {
    main: '#4a5043',
    secondary: '#b6b9b3',
    highlight: '#A4C2A8',
    tag: '#6e7368',
  },
  // main: violet
  {
    main: '#856084',
    secondary: '#cebfcd',
    highlight: '#A5C4D4',
    tag: '#9d7f9c',
  },
  // main: dark purple
  {
    main: '#353148',
    secondary: '#c2c1c8',
    highlight: '#B5E6F4',
    tag: '#5D5A6C',
  },
  // main: light brown
  {
    main: '#77685D',
    secondary: '#c8c2be',
    highlight: '#E4E6C3',
    tag: '#92867d',
  },
  // main: black
  {
    main: '#1d1d1d',
    secondary: '#909096',
    highlight: '#79f7d9',
    tag: '#515152',
  },
];

// change color on click
const body = document.body;
let colorTheme;
let i = 1;

// function: select the next color theme
const selectColorTheme = () => {
  colorTheme = colorThemesArr[i];

  // i++ or reset i
  if (i >= colorThemesArr.length - 1) {
    i = 0;
  } else {
    i++;
  }
};

sections.forEach((section) =>
  section.addEventListener('click', () => {
    // execute selectColorTheme
    selectColorTheme();

    // apply color theme to DOM
    body.style.setProperty('--color--main', colorTheme.main);
    body.style.setProperty('--color--secondary', colorTheme.secondary);
    body.style.setProperty('--color--highlight', colorTheme.highlight);
    body.style.setProperty('--color--tag', colorTheme.tag);
  })
);

// --- stop event propagation ---
const form = document.querySelector('form');
const hyperLinks = document.querySelectorAll('a');

// on form clcik, no bg color change
form.addEventListener('click', (e) => {
  e.stopPropagation();
});

// on links click, no bg color change
hyperLinks.forEach((a) => {
  // skip contact me btn in heroc section
  if (a.classList.contains('contactBtn')) return;

  a.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// contact form
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const senderName = document.querySelector('[name="name"]').value;
  const senderEmail = document.querySelector('[name="email"]').value;
  const emailSubject = document.querySelector('[name="subject"]').value;
  const emailMessage = document.querySelector('[name="message"]').value;
  const submitBtn = document.querySelector('[type="submit"]');

  Email.send({
    SecureToken: '2a7d4176-cca2-4e02-b88f-b51d016afa84',
    To: 'zpf9193@gmail.com',
    From: 'zpf9193@gmail.com',
    Subject: emailSubject,
    Body: `${senderName} send you a message from ${senderEmail}. Here is the message: ${emailMessage}`,
  }).then((message) => {
    if (message === 'OK') {
      submitBtn.textContent = 'Thank you!';
      submitBtn.classList.add('sent');
      setTimeout(() => {
        submitBtn.textContent = 'Submit';
        submitBtn.classList.remove('sent');
      }, 1500);
    } else {
      alert(message);
    }
  });
});

// page info
const aside = document.querySelector('aside');
const pageInfoBtn = document.querySelector('.fa-info-circle');
const closeAside = document.querySelector('.closeAside');

pageInfoBtn.addEventListener('click', () => {
  aside.style.display = 'initial';
});

closeAside.addEventListener('click', () => {
  aside.style.display = 'none';
});
