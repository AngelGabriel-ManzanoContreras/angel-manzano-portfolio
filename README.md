# Angel Manzano - Portfolio

## Feedback
I would be pleased if you give me feedback about my code, so I will be able to gain insights from other and keep improving. You could do so via:
- Github Issues
- [Linkedin](https://www.linkedin.com/in/angel-gabriel-manzano-contreras/)
- [Mail](mailto:amanzanocontreras@gmail.com)

## Documentation

### Technologies

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)

### Integration

This project is deployed to netlify manually.

To build this project run:
```bash
npm run build
```

To run this project on dev run:
```bash
npm run dev
```

### Backend API

There is no backend so far, but I am aiming to develop one, so my personal information is not wrote down here.

### Folder Structure
I am following the basic project folder structure, but I show it below either way.

For the pieces of code, I am aiming to implement the [Atomic Design](https://dev.to/sanfra1407/how-to-organize-your-components-using-the-atomic-design-dj3) principle. I am still on my way though
```bash
- Root
| - package.json
| - package-lock.json
| - README.md
| - .gitignore # Please place here anything that is not necessary
| - index.html
| - node_modules # If your computer runs out of space, this is why
| - public
| | - manifest.json
| | - favicon-am.png # My favicon
| - src
| | - App.jsx
| | - Index.css
| | - main.jsx
| | - assets
| | | - icons # Any icon used in the project (either for functionality or complement information)
| | | - imgs # Images used in the project
| | | | - projects # Project evidence
| | - components # All components, pieces of code that complement a section page
| | | - NavLink # Component's folder
| | | | - NavLink.jsx # Component's jsx
| | | | - NavLink.module.css # Component's styles
| | | ...
| | - pages
| | | - Home # Page's folder
| | | | - Home.jsx # Page's jsx
| | | | - Home.module.css # Component's styles
| | | ...
| | - sections # Page's sections
| | | - Introduction # Section's folder
| | | | - Introduction.jsx # Section's jsx
| | | | - Introduction.module.css # Section's styles
| | | ...
| | - utils
| | | - data.js # Data displayed on the webapp
| | | - routes.js # Webapp's routes/urls
```