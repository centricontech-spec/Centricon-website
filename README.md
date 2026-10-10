# Centricon - AI & Software Solutions Website

A modern, sleek, and professional website for Centricon, an AI and software solutions company. Built with React, Tailwind CSS, and Framer Motion for smooth animations and responsive design.

## 🌟 Features

- **Modern Dark Theme**: Dark background with blue accent colors matching the Centricon brand
- **Fully Responsive**: Mobile-first design that works seamlessly on all devices
- **Smooth Animations**: Powered by Framer Motion for elegant page transitions and hover effects
- **SEO Optimized**: Proper HTML structure with meta tags for search engine optimization
- **Fast Performance**: Built with Vite for lightning-fast development and optimized production builds

## 📄 Pages

1. **Home Page**
   - Hero section with gradient background
   - Features section with animated cards
   - About section with company introduction
   - Services overview
   - Call-to-action section

2. **About Page**
   - Company story and history
   - Mission and vision statements
   - Core values
   - Team member profiles
   - Company statistics

3. **Services Page**
   - Detailed service listings with modal view
   - Technologies showcase
   - Case studies/success stories
   - Interactive service cards

4. **Privacy Policy Page**
   - Comprehensive privacy policy
   - Smooth scroll animations
   - Well-structured sections

5. **Contact Page**
   - Contact form with validation
   - Contact information
   - Social media links
   - Map placeholder

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Colors

- **Primary**: Blue (#3B82F6)
- **Dark Background**: #0F172A
- **Dark Lighter**: #1E293B
- **Accent**: Blue shades for gradients

### Typography

- **Font Family**: Roboto (Google Fonts)
- **Font Weights**: 300, 400, 500, 700, 900

### Components

- **Header**: Sticky navigation with smooth animations
- **Footer**: Dark footer with social links and contact info
- **Buttons**: Primary and outline styles with hover effects
- **Cards**: Hover effects with border color transitions

## 📦 Tech Stack

- **React 19**: Latest React features
- **React Router DOM**: Client-side routing
- **Framer Motion**: Animation library
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling

## 📁 Project Structure

```
centricon/
├── public/
│   └── logo.png          # Company logo (place your logo here)
├── src/
│   ├── components/       # Reusable components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Privacy.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles and Tailwind imports
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies

```

## ⚙️ Configuration

### Tailwind CSS

The `tailwind.config.js` file includes custom colors and font families:
- Custom primary blue colors
- Dark theme colors
- Roboto font family

### Custom Styles

Global styles in `index.css` include:
- Roboto font import from Google Fonts
- Tailwind directives
- Smooth scrolling
- Custom gradient text utility class

## 🎯 Key Features Implementation

### Smooth Animations

All animations use Framer Motion with:
- Fade-in effects on scroll
- Hover animations on cards and buttons
- Page transition animations
- Staggered children animations

### Responsive Design

Mobile-first approach using Tailwind's responsive utilities:
- Mobile menu for small screens
- Responsive grid layouts
- Adaptive typography sizes

### SEO Optimization

- Semantic HTML structure
- Meta tags for description and keywords
- Proper heading hierarchy
- Alt text for images

## 📝 Customization

### Update Logo

Place your logo file as `logo.png` in the `public/` folder.

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    DEFAULT: '#YourColor',
    // ...
  }
}
```

### Update Content

Edit the respective page files in `src/pages/` to update content, team members, services, etc.

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

MIT License - Feel free to use this project for your own purposes.
