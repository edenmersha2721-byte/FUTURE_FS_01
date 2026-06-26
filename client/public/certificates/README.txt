CERTIFICATE IMAGES
==================

Put your certificate image files in THIS folder.

The site is already wired to look for these filenames:

    insa.png          → INSA Weekend Development Program
    internship.png    → Internship Participation
    fullstack.png     → Full-Stack Web Development

So you have two options:

  A) Rename your images to the names above and drop them here. Done.

  B) Use your own filenames, then open
     client/src/data/certificates.js
     and change each `image:` line to match, e.g.
        image: "/certificates/my-insa-certificate.jpg"

Supported formats: .png .jpg .jpeg .webp
Tip: keep each image under ~1 MB for fast loading.

Want more than 3 certificates? Add another object to the array in
certificates.js (copy an existing one and change the fields).
