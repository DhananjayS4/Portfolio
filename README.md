# Dhananjay S. — Portfolio

Dark, recruiter-focused portfolio for software development, cloud, cybersecurity, and AI/ML.

## Run locally

```bash
npm install
npm run dev
```

## Edit the content

All copy, skills, projects, and links live in `src/data/content.js`.

Before you share the site, add:

- `contact.email`, `contact.linkedin`, and `contact.github`
- `experience.organization` and `experience.period`
- Project `github` and `demo` URLs, and real screenshots via each project's `image` field
- A portrait: save it as `public/profile.jpg` and set `profile.photo` to `"/profile.jpg"`
- Certificates in the `certifications` array
- Optional PDF: save `public/Dhananjay_S_Resume.pdf` and set `profile.resumePdf` to that path

Skill tags are `used`, `exposure`, or `learning`. Change a tag if it does not match what you can explain in an interview.

The AI/ML dashboard is written from the project direction we discussed. Update its summary, features, and stack so they match the repository.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Deploy

The production build is a static site in `dist`. Source is in [DhananjayS4/Portfolio](https://github.com/DhananjayS4/Portfolio) and GitHub Pages publishes the `gh-pages` branch.

```bash
npm run build
npx gh-pages -d dist
```

The live site is [https://dhananjays4.github.io/Portfolio/](https://dhananjays4.github.io/Portfolio/).
