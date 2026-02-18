const translations = {
  en: {
    greeting: "Hello, I'm Kacper 👋",
    intro: "Just a curious \"developer\" who likes <strong>programming</strong> to much.",
    skills_title: "Skills",
    about_title: "About Me",
    about_text: "I'm still early in my journey, but I'm passionate about creating projects and exploring the world of indie game development. I enjoy learning new things every day. Whether it's a new tool, technique, or idea. And I’m always looking for ways to improve and bring fun, creative ideas to life.",
    hobby_text: "I'm also a big fan of Metal & Rock music. Besides that I'm enjoying creating & modeling 3D assets in blender. Also playing lot of Old School Runescape.",
    extra_hobby: "Hobbies",
    projects_title: "📁 Projects",
    project1_locked: "This game is still in production",
    project1_title: "Thornblade Game | Solo Dev",
    project1_desc: "Built with C++, C#, and Pixel Art. A brutal RPG & MMO where death means total reset.",
    project2_title: "Discord Bot | Monarch Baran",
    project2_desc: "A powerful Discord bot built with Python, PostgreSQL, and hosted on Railway. Includes 20+ commands with full database integration for persistent user and server data.",
    extras_title: "🔧 Extras",
    language_switch: "Switch Language!",
    info_tab: "Information",
    projects_tab: "Projects",
    extras_tab: "Extras"
  },
  fr: {
    greeting: "Bonjour, je suis Kacper 👋",
    intro: "Juste un \"développeur\" curieux qui aime beaucoup la <strong>programmation</strong>.",
    skills_title: "Compétences",
    about_title: "À propos de moi",
    about_text: "Je suis encore au début de mon parcours, mais je suis passionné par la création de projets et l'exploration du développement de jeux indépendants. J'aime apprendre de nouvelles choses chaque jour. Que ce soit un nouvel outil, une technique ou une idée.",
    hobby_text: "J'aime aussi beaucoup la musique Metal & Rock. En plus de ça, je passe du temps à créer et modéliser des assets 3D dans Blender. Et j'aime aussi jouer à Old School Runescape.",
    extra_hobby: "Loisirs",
    projects_title: "📁 Projets",
    project1_locked: "Ce jeu est encore en production",
    project1_title: "Jeu Thornblade | Développement Solo",
    project1_desc: "Développé avec C++, C# et Pixel Art. Un RPG brutal où la mort signifie une réinitialisation totale.",
    project2_title: "Bot Discord | Monarch Baran",
    project2_desc: "Un bot Discord puissant développé avec Python, PostgreSQL, et hébergé sur Railway. Comprend plus de 20 commandes avec une base de données persistante.",
    extras_title: "🔧 Extras",
    language_switch: "Changer de langue !",
    info_tab: "Information",
    projects_tab: "Projets",
    extras_tab: "Extras"
  },
  nl: {
    greeting: "Hallo, ik ben Kacper 👋",
    intro: "Gewoon een nieuwsgierige \"ontwikkelaar\" die veel van <strong>programmeren</strong> houdt.",
    skills_title: "Vaardigheden",
    about_title: "Over mij",
    about_text: "Ik sta nog aan het begin van mijn reis, maar ik ben gepassioneerd over het maken van projecten en het verkennen van de wereld van indie game development. Ik leer elke dag graag nieuwe dingen. Of het nu een nieuw hulpmiddel, techniek of idee is.",
    hobby_text: "Ik ben ook een grote fan van Metal & Rock muziek. Daarnaast geniet ik van het maken en modelleren van 3D assets in Blender. Ook speel ik veel Old School Runescape.",
    extra_hobby: "Hobbies",
    projects_title: "📁 Projecten",
    project1_locked: "Deze game is nog in ontwikkeling",
    project1_title: "Thornblade Game | Solo Ontwikkelaar",
    project1_desc: "Gemaakt met C++, C# en Pixel Art. Een brute RPG waar dood betekent dat je helemaal opnieuw moet beginnen.",
    project2_title: "Discord Bot | Monarch Baran",
    project2_desc: "Een krachtige Discord-bot gebouwd met Python, PostgreSQL en gehost op Railway. Bevat meer dan 20 commando's met volledige database-integratie.",
    extras_title: "🔧 Extra's",
    language_switch: "Taal wijzigen!",
    info_tab: "Informatie",
    projects_tab: "Projecten",
    extras_tab: "Extra's"
  },
 pl: {
  "greeting": "Cześć, jestem Kacper 👋",
  "intro": "Po prostu ciekawski \"deweloper\", który bardzo lubi <strong>programowanie</strong>.",
  "skills_title": "Umiejętności",
  "about_title": "O mnie",
  "about_text": "Jestem dopiero na początku mojej podróży, ale pasjonuję się tworzeniem projektów i odkrywaniem świata niezależnego game developmentu. Uwielbiam codziennie uczyć się czegoś nowego. Czy to nowe narzędzie, technika czy pomysł.",
  "hobby_text": "Jestem też wielkim fanem muzyki Metal & Rock. Poza tym lubię tworzyć i modelować zasoby 3D w Blenderze. Również grając w Old School Runescape.",
  "extra_hobby": "Hobby",
  "projects_title": "📁 Projekty",
  "project1_locked": "Ta gra jest nadal w fazie rozwoju",
  "project1_title": "Thornblade Game | Solo Deweloper",
  "project1_desc": "Stworzona w C++, C# i Pixel Art. Brutalne RPG, w którym śmierć oznacza rozpoczęcie gry od nowa.",
  "project2_title": "Discord Bot | Monarch Baran",
  "project2_desc": "Potężny bot na Discorda stworzony w Pythonie, z PostgreSQL i hostowany na Railway. Zawiera ponad 20 komend i pełną integrację z bazą danych.",
  "extras_title": "🔧 Dodatki",
  "language_switch": "Zmień język!",
  "info_tab": "Informacje",
  "projects_tab": "Projekty",
  "extras_tab": "Dodatki"
  }
};

function switchLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}
