# Brighton Buccaneers Wheelchair Rugby Club Website

![Project Status](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://bbwr-club-website.vercel.app/)

![image](https://github.com/user-attachments/assets/79b90bed-a502-4605-ac7e-95c8005accec)


A modern, responsive website for Brighton Buccaneers Wheelchair Rugby Club, featuring interactive navigation, mobile-optimized content, and engaging character decorations.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Project Structure](#project-structure)
- [Key Improvements](#key-improvements)
- [Installation](#installation)
- [Browser Support](#browser-support)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Project Overview

The Brighton Buccaneers website serves as the digital hub for a wheelchair rugby club based in Brighton, UK. The site provides information about the sport, training sessions, competitions, and how to join the team.

### Target Audience
- Potential new players with physical disabilities
- Current team members and families
- Coaches and officials
- Supporters and donors
- General public interested in adaptive sports

### Core Objectives
- Increase club membership and participation
- Provide easy access to training and contact information
- Showcase the sport and team achievements
- Maintain an accessible, mobile-friendly experience

## ✨ Features

### Navigation & User Experience
- **Smart Dropdown Menus**: Click-based navigation that stays open for easy selection
- **Mobile-Responsive Design**: Optimized layouts for all screen sizes
- **Collapsible Content**: Mobile-first approach with expandable sections
- **Character Decorations**: Subtle wheelchair rugby character icons enhance visual appeal

### Content Sections
- **Home Page**: Sport introduction, training information, and quick links
- **About/Join Us**: Detailed joining process and team information  
- **Competitions**: Tournament schedules and results
- **Contact**: Multiple contact methods and location details
- **Gallery**: Team photos and action shots
- **Donations**: Support the club financially

### Technical Features
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Cookie Consent**: GDPR-compliant cookie management
- **Performance Optimized**: Fast loading with efficient animations
- **SEO Friendly**: Semantic HTML and proper meta tags

## 🛠 Technical Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **HTML5** | Structure and semantics | Latest |
| **CSS3** | Styling and animations | Latest |
| **JavaScript (ES6+)** | Interactive functionality | Latest |
| **Tailwind CSS** | Utility-first styling | CDN |
| **Font Awesome** | Icon library | 6.4.0 |

### Architecture Decisions
- **No Build Process**: Simple development with CDN dependencies
- **Vanilla JavaScript**: Lightweight, no framework dependencies
- **Mobile-First**: Progressive enhancement from mobile to desktop
- **Component-Based CSS**: Modular, reusable styling approach

## 📁 Project Structure

```
BrightonBuccaneers/
├── README.md                          # Main project documentation
├── home.html                          # Landing page
├── aboutus.html                       # Join us information
├── compititions.html                  # Events and tournaments
├── contact.html                       # Contact information
├── donate.html                        # Donation page
├── gallery.html                       # Photo gallery
├── assets/                            # Static assets
│   ├── BBWR-hero-card.png            # Hero background image
│   ├── wheelchair-rugby-characters/   # Character decoration images
│   │   ├── 1.png                     # Character assets 1-6
│   │   └── ...
│   ├── gallery-images/               # Photo gallery assets
│   └── BBWR-fullscreen/              # Additional images
├── css/
│   └── style.css                     # Custom styles and animations
├── js/
│   └── main.js                       # Interactive functionality
└── docs/                             # Documentation
    ├── FEATURES.md                   # Detailed feature documentation
    ├── DEVELOPMENT.md                # Development and deployment guide
    ├── ACCESSIBILITY.md              # Accessibility compliance info
    └── CHANGELOG.md                  # Version history and updates
```

## 🚀 Key Improvements

### Navigation Enhancement
**Problem**: Dropdown menus closed immediately when trying to click menu items
**Solution**: Implemented click-based dropdown system with proper state management

### Mobile User Experience  
**Problem**: Text-heavy content overwhelming on mobile devices
**Solution**: Added collapsible content sections with "Read More" functionality

### Visual Enhancement
**Problem**: Static appearance lacking personality
**Solution**: Integrated subtle character decorations that complement content without distraction

### Technical Fixes
**Problem**: Duplicate navigation elements and layout issues
**Solution**: Cleaned up HTML structure and unified navigation across all pages

## 🔧 Installation

### Quick Start
1. **Clone or Download** the project files
2. **Open** `index.html` in a web browser
3. **No build process required** - ready to use immediately

### Local Development
```bash
# Navigate to project directory
cd BrightonBuccaneers

# Serve locally (optional, for development)
python -m http.server 8000
# OR
npx serve .

# Open browser to localhost:8000
```

### 🚀 Deploy to Vercel
The easiest way to deploy this website:

1. **Push to GitHub** repository
2. **Connect to Vercel** at [vercel.com](https://vercel.com)
3. **Import repository** and deploy
4. **Live site** available instantly with SSL

See [Deployment Guide](docs/DEPLOYMENT.md) for detailed instructions.

### Dependencies
All dependencies are loaded via CDN:
- Tailwind CSS
- Font Awesome 6.4.0
- No npm installation required

## 🌐 Browser Support

| Browser | Minimum Version | Status |
|---------|----------------|---------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| iOS Safari | 14+ | ✅ Mobile Optimized |
| Chrome Mobile | 90+ | ✅ Mobile Optimized |

### Progressive Enhancement
- **Core functionality** works in all modern browsers
- **Enhanced features** gracefully degrade in older browsers
- **Mobile-first** approach ensures compatibility across devices

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Features Documentation](docs/FEATURES.md) | Detailed feature specifications and user flows |
| [Development Guide](docs/DEVELOPMENT.md) | Setup, deployment, and maintenance instructions |
| [Deployment Guide](docs/DEPLOYMENT.md) | Vercel deployment and domain setup instructions |
| [Accessibility Guide](docs/ACCESSIBILITY.md) | WCAG compliance and accessibility features |
| [Changelog](docs/CHANGELOG.md) | Version history and update notes |

## 🤝 Contributing

### Development Workflow
1. Test changes across different screen sizes
2. Verify accessibility with screen readers
3. Check performance on mobile devices
4. Validate HTML and CSS
5. Test JavaScript functionality

### Code Standards
- **HTML**: Semantic, accessible markup
- **CSS**: Mobile-first, component-based approach
- **JavaScript**: Vanilla ES6+, progressive enhancement
- **Images**: Optimized for web, appropriate alt text

## 📄 License

This project is created for Brighton Buccaneers Wheelchair Rugby Club. All rights reserved.

### Third-Party Licenses
- **Tailwind CSS**: MIT License
- **Font Awesome**: Font Awesome Free License
- **Character Images**: Club-specific assets

---

**Built with ❤️ for Brighton Buccaneers Wheelchair Rugby Club**

For questions or support, contact: [info@bbwrc.co.uk](mailto:info@bbwrc.co.uk)
