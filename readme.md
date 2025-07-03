# Ebook Website

A modern Bootstrap-based website for promoting and downloading a free E-book, featuring a clean business-oriented design and responsive layout.

![Website Screenshot](./images/screen.png)

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

## Features

- Modern, responsive design built with Bootstrap 5
- Sticky navbar with scroll-triggered style changes
- Custom color scheme and typography
- Interactive Bootstrap modals
- Responsive testimonial section
- Contact page with embedded Google Map
- Sass integration for easy styling
- Font Awesome icons for enhanced UI

## Project Structure

```
ebook-website/
├── images/            # Image assets
├── js/                # JavaScript files
│   ├── bootstrap.bundle.min.js
│   └── script.js      # Custom JavaScript
├── scss/              # Sass source files
│   ├── bootstrap.scss # Bootstrap variables
│   ├── font-awesome.scss
│   └── styles.scss    # Custom styles
├── css/               # Compiled CSS (auto-generated)
├── index.html         # Main landing page
├── contact.html       # Contact page
├── package.json       # Project dependencies
└── README.md          # Project documentation
```

## Installation

1. Ensure you have [Node.js](https://nodejs.org/en/) installed
2. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/ebook-website.git
   cd ebook-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
- Compile Sass to CSS once:
  ```bash
  npm run sass:build
  ```
- Watch for Sass changes and auto-compile:
  ```bash
  npm run sass:watch
  ```

### Running Locally
Open `index.html` in your browser or use a local development server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for auto-reloading.

## Customization

- **Bootstrap Variables**: Modify `scss/bootstrap.scss` to override Bootstrap default variables
- **Custom Styles**: Add your CSS rules to `scss/styles.scss`
- **JavaScript**: Add custom functionality to `js/script.js`
- **Images**: Replace assets in the `images/` directory

> Note: Do not edit `node_modules/bootstrap` directly as changes will be overwritten on update.

## Deployment

To deploy to GitHub Pages:
1. Create a `gh-pages` branch
2. Push your compiled code (including the `css/` directory)
3. Configure GitHub Pages in your repository settings to use the `gh-pages` branch

## License

This project is open source and available under the [MIT License](LICENSE).
