/**
 * Certificates / achievements.
 *
 * HOW TO ADD MORE CERTIFICATE IMAGES:
 *  1. Copy your image files into:  client/public/certificates/
 *     (use .png / .jpg / .jpeg / .webp)
 *  2. Add an entry below with `image` set to "/certificates/<your-file-name>".
 *  3. Clicking a card opens the image full-size in a lightbox.
 *
 * If `image` is left empty (""), a styled placeholder is shown instead.
 */
export const certificates = [
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Udacity (Part of Accenture)",
    year: "2025",
    description:
      "Verified Nanodegree program completion covering the core foundations of artificial intelligence and machine learning.",
    image: "/certificates/interns.jpg",
  },
  {
    title: "Full-Stack Web Development Internship",
    issuer: "Future Interns — Fellowship Program",
    year: "2026",
    description:
      "Internship in the Full-Stack Web Development fellowship — orientation, skill development and real-world application of concepts.",
    image: "/certificates/intern.jpg",
  },
];
