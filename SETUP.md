# Quick Setup Guide for Centricon Website

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Add Your Logo**
   - Save your logo file as `logo.png` in the `public/` folder
   - The logo should be in PNG format with a transparent background
   - Recommended size: 200x200px or similar

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## ✅ Checklist Before Going Live

- [ ] Replace logo in `public/logo.png`
- [ ] Update company contact information in:
  - `src/components/Footer.jsx`
  - `src/pages/Contact.jsx`
- [ ] Update social media links in:
  - `src/components/Footer.jsx`
  - `src/pages/Contact.jsx`
- [ ] Customize services and case studies in `src/pages/Services.jsx`
- [ ] Update team members in `src/pages/About.jsx`
- [ ] Review and customize privacy policy in `src/pages/Privacy.jsx`
- [ ] Test contact form functionality (currently a mock implementation)
- [ ] Update meta tags in `index.html` for your specific needs
- [ ] Test on mobile devices for responsiveness

## 🎨 Customization Tips

### Change Primary Color
Edit `tailwind.config.js`:
```js
primary: {
  DEFAULT: '#YourColorHere',
  dark: '#DarkerShade',
  light: '#LighterShade',
}
```

### Add New Pages
1. Create a new file in `src/pages/YourPage.jsx`
2. Add route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

### Modify Animations
All animation variants are defined in each component. Look for:
- `containerVariants`
- `itemVariants`
- `whileHover` props

## 📝 Content to Update

### Footer (src/components/Footer.jsx)
- Email address
- Phone number
- Social media URLs

### Contact Page (src/pages/Contact.jsx)
- Contact form submission logic (line 29-39)
- Contact information
- Social media links
- Add Google Maps integration (replace placeholder at line 211)

### About Page (src/pages/About.jsx)
- Team member details (line 22-47)
- Company story (line 91-109)
- Statistics (line 228-235)

### Services Page (src/pages/Services.jsx)
- Service descriptions (line 26-91)
- Technologies (line 93-102)
- Case studies (line 104-121)

## 🔧 Build for Production

```bash
npm run build
```

The build output will be in the `dist/` folder, ready for deployment.

## 🌐 Deployment Options

- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `dist/` folder
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload `dist/` folder contents

## 💡 Tips

- All pages are fully responsive by default
- Animations are optimized for performance
- Images and assets should be placed in `public/` folder
- Use `.env` file for API keys (not included in this setup)

## 🐛 Troubleshooting

**Issue**: Tailwind styles not working
- **Solution**: Make sure `tailwind.config.js` is in the root directory
- Run `npm install -D tailwindcss`

**Issue**: Routing not working in production
- **Solution**: Configure your hosting provider for SPA (Single Page Application)
- Add redirect rules to serve `index.html` for all routes

**Issue**: Animations are laggy
- **Solution**: Reduce animation complexity or disable on mobile
- Check browser DevTools for performance issues

## 📞 Need Help?

- Check the main README.md for detailed documentation
- Review component files for inline comments
- All dependencies are listed in package.json
