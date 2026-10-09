const sections = [
  {
    "level": 2,
    "title": "שיר ושמות של מתמטיקאים",
    "page": 1,
    "number": "1.1"
  },
  {
    "level": 2,
    "title": "לאן הגעתם, איך מדברים כאן",
    "page": 3,
    "number": "1.2"
  },
  {
    "level": 2,
    "title": "מעט לוגיקה שנדרש לה בקורס",
    "page": 4,
    "number": "1.3"
  },
  {
    "level": 2,
    "title": "סימונים מתורת הקבוצות",
    "page": 5,
    "number": "1.4"
  },
  {
    "level": 2,
    "title": "קבוצות חשובות של מספרים",
    "page": 6,
    "number": "1.5"
  },
  {
    "level": 2,
    "title": "המספרים הממשיים",
    "page": 9,
    "number": "1.6"
  },
  {
    "level": 3,
    "title": "שדה ושדה סדור",
    "page": 10,
    "number": "1.6.1"
  },
  {
    "level": 3,
    "title": "תכונת ארכימדס וערך שלם",
    "page": 12,
    "number": "1.6.2"
  },
  {
    "level": 3,
    "title": "שרש שתיים",
    "page": 12,
    "number": "1.6.3"
  },
  {
    "level": 3,
    "title": "הגדרת חסם מלעיל ומלרע, מינימום ומקסימום של קבוצה",
    "page": 14,
    "number": "1.6.4"
  },
  {
    "level": 3,
    "title": "אקסיומת השלמות",
    "page": 15,
    "number": "1.6.5"
  },
  {
    "level": 3,
    "title": "סופרמום ואינפימום",
    "page": 15,
    "number": "1.6.6"
  },
  {
    "level": 3,
    "title": "שימוש: לכל מספר ממשי חיובי יש שורש",
    "page": 18,
    "number": "1.6.7"
  },
  {
    "level": 3,
    "title": "תכונות נוספת של הממשיים",
    "page": 19,
    "number": "1.6.8"
  },
  {
    "level": 3,
    "title": "אי שוויונים חשובים - תיעוד של חומר התרגולים",
    "page": 21,
    "number": "1.6.9"
  }
];
const chapters = [
  'מה אנחנו עושים כאן, והישר הממשי',
  'סדרות ומושג הגבול',
  'טורים',
  'פונקציות',
  'הנגזרת',
  'טיילור',
  'פרק בונוס: פונקציות קמורות'
];
let chapter = Number(new URLSearchParams(location.search).get('chapter') || 1);
if (!Number.isInteger(chapter) || chapter < 1 || chapter > chapters.length) chapter = 1;
const el = (tag, cls, text) => { const node = document.createElement(tag); if(cls) node.className = cls; if(text) node.textContent = text; return node; };
const nav = document.querySelector('#chapters');
chapters.forEach((title, index) => {
  const number = index + 1;
  const link = el('a', `chapter-link${number === chapter ? ' active' : ''}`);
  link.href = `?chapter=${number}`;
  if(number === chapter) link.setAttribute('aria-current', 'page');
  link.append(el('span', 'chapter-number', String(number)));
  const label = el('span', 'chapter-name', title);
  label.append(el('span', 'status', number === 1 ? 'זמין לקריאה' : 'המשך יבוא'));
  link.append(label);nav.append(link);
});
document.title = `${chapters[chapter - 1]} | סיכומים בחדו״א 1א`;
const section = document.querySelector('#chapter');
const heading = el('div', 'chapter-heading');
const titles = el('div');titles.append(el('p', 'chapter-kicker', `פרק ${chapter}`));
const title = el('h2', '', chapters[chapter - 1]);title.id = 'chapter-title';titles.append(title);heading.append(titles);section.append(heading);
if(chapter === 1) {
  const actions = el('div', 'actions');
  const open = el('a', 'action', 'פתיחת PDF');open.href = 'assets/chapter-1.pdf';open.target = '_blank';open.rel = 'noopener';
  const download = el('a', 'action primary', 'הורדת הפרק');download.href = 'assets/chapter-1.pdf';download.download = 'Chedva1_Chapter1.pdf';
  actions.append(open, download);heading.append(actions);
  const contents = el('details', 'contents');contents.open = true;contents.append(el('summary', '', 'תוכן הפרק'));
  const links = el('nav', 'section-list');links.setAttribute('aria-label', 'סעיפי פרק 1');contents.append(links);section.append(contents);
  sections.forEach(item => {
    const a = el('a', item.level === 3 ? 'subsection' : '');a.href = `#page-${item.page}`;
    a.append(el('span', 'section-number', item.number), el('span', '', item.title));links.append(a);
  });
  section.append(el('p', 'reading-note', 'פרק 1 · 24 עמודים. להגדלה, לחיפוש בטקסט או להדפסה אפשר לפתוח את קובץ ה־PDF.'));
  const pages = el('div', 'pages');
  for(let i = 1; i <= 24; i++) {
    const figure = el('figure', 'page');figure.id = `page-${i}`;
    const caption = el('figcaption');caption.append(el('span', '', `עמוד ${i}`));
    const link = el('a', '', 'פתיחה ב־PDF');link.href = `assets/chapter-1.pdf#page=${i}`;link.target = '_blank';link.rel = 'noopener';caption.append(link);
    const img = el('img');img.src = `assets/pages/page-${String(i).padStart(2, '0')}.webp`;img.width = 1163;img.height = 1505;img.alt = `פרק 1 — עמוד ${i}. הטקסט המלא זמין בקובץ PDF.`;img.loading = i < 3 ? 'eager' : 'lazy';img.decoding = 'async';
    figure.append(caption,img);pages.append(figure);
  }
  section.append(pages);
} else {
  const pending = el('div', 'pending');pending.append(el('span', 'pending-symbol', '…'),el('h3', '', 'המשך יבוא'),el('p', '', 'הפרק יתווסף לרשימות בהמשך.'));
  const back = el('a', 'action primary', 'לקריאת פרק 1');back.href = '?chapter=1';pending.append(back);section.append(pending);
}
