/**
 * Global site configuration: identity, links and navigation.
 * Update social URLs / CV path here in one place.
 */
export const site = {
  name: "Eden Mersha",
  initials: "EM",
  role: "Full-Stack Developer",
  tagline: "Full-Stack Developer | Grade 12 Student",
  email: "edenmersha2721@gmail.com",
  school: "Etege Menen Girls Boarding Secondary School",
  location: "Addis Ababa, Ethiopia",
  photo: "/pp.jpg", // profile photo in client/public/
  cvUrl: "/Eden-Mersha-CV.pdf", // place the file in client/public/
  socials: {
    github: "https://github.com/edenmersha2721-byte",
    linkedin: "https://www.linkedin.com/in/eden-mersha-5a01213a4/",
    instagram: "https://www.instagram.com/he_aven217/?hl=en",
    telegram: "https://t.me/absalat127",
    email: "mailto:edenmersha2721@gmail.com",
  },
};

export const navLinks = [
  { label: "Home", to: "/#home" },
  { label: "About", to: "/#about" },
  { label: "Skills", to: "/#skills" },
  { label: "Projects", to: "/#projects" },
  { label: "Certificates", to: "/#certificates" },
  { label: "Contact", to: "/#contact" },
];
