# Development Guide

## Project Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor or IDE (VS Code recommended)
- Local web server (optional but recommended)

### Quick Start
```bash
# 1. Download/clone project files
# 2. Navigate to project directory
cd BrightonBuccaneers

# 3. Start local development server (optional)
python -m http.server 8000
# OR
npx serve .
# OR
php -S localhost:8000

# 4. Open browser to http://localhost:8000
```

### File Structure Overview
```
BrightonBuccaneers/
├── *.html              # Page templates
├── css/style.css        # Custom styles
├── js/main.js          # Interactive functionality  
├── assets/             # Images and media
└── docs/               # Documentation
```

## Development Workflow

### 1. Local Development
**Recommended Setup:**
- Use local server to avoid CORS issues
- Enable browser dev tools
- Test across multiple browsers
- Use responsive design mode

**File Watching:**
```bash
# Live reload with Python
python -m http.server 8000

# With Node.js serve
npx serve . --live

# With PHP built-in server
php -S localhost:8000
```

### 2. Code Standards

#### HTML Standards
- **Semantic markup** - Use appropriate HTML5 elements
- **Accessibility first** - Include ARIA labels and alt text
- **Valid HTML** - Validate with W3C validator
- **Consistent indentation** - 4 spaces

```html
<!-- Good -->
<section class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-2xl font-bold text-blue-800 mb-4">Section Title</h2>
    <p class="text-gray-700">Content description</p>
</section>

<!-- Bad -->
<div class="bg-white rounded-lg shadow-md p-6">
    <div class="text-2xl font-bold text-blue-800 mb-4">Section Title</div>
    <div class="text-gray-700">Content description</div>
</div>
```

#### CSS Standards
- **Mobile-first approach** - Start with mobile styles
- **Component-based** - Group related styles
- **BEM methodology** - Use Block-Element-Modifier naming
- **Performance conscious** - Avoid complex selectors

```css
/* Good - Mobile first */
.card {
    padding: 1rem;
    margin-bottom: 1rem;
}

@media (min-width: 768px) {
    .card {
        padding: 1.5rem;
        display: flex;
    }
}

/* Bad - Desktop first */
.card {
    padding: 1.5rem;
    display: flex;
}

@media (max-width: 767px) {
    .card {
        padding: 1rem;
        display: block;
    }
}
```

#### JavaScript Standards
- **ES6+ syntax** - Use modern JavaScript features
- **Progressive enhancement** - Ensure functionality without JS
- **Event delegation** - Efficient event handling
- **Error handling** - Graceful failure handling

```javascript
// Good - Modern, robust
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.dropdown-menu');
        
        if (button && menu) {
            button.addEventListener('click', handleDropdownClick);
        }
    });
});

// Bad - Old syntax, fragile
$(document).ready(function() {
    $('.dropdown button').click(function() {
        $(this).siblings('.dropdown-menu').toggle();
    });
});
```

### 3. Testing Guidelines

#### Cross-Browser Testing
**Required Browsers:**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

**Testing Checklist:**
- [ ] Navigation menus function correctly
- [ ] Mobile responsive design works
- [ ] Form submissions (if applicable)
- [ ] JavaScript interactions
- [ ] CSS animations perform smoothly

#### Responsive Testing
**Breakpoints to Test:**
- Mobile: 375px, 414px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1920px

**Tools:**
- Browser DevTools responsive mode
- Physical devices when possible
- BrowserStack for comprehensive testing

#### Accessibility Testing
**Manual Testing:**
- [ ] Tab through all interactive elements
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Verify color contrast ratios
- [ ] Check keyboard-only navigation

**Automated Testing:**
- Lighthouse accessibility audit
- axe browser extension
- WAVE web accessibility evaluator

## Deployment

### Static Hosting Options

#### GitHub Pages
```bash
# 1. Push to GitHub repository
# 2. Enable GitHub Pages in repository settings
# 3. Select source branch (main/master)
# 4. Site available at username.github.io/repository-name
```

#### Netlify
```bash
# 1. Drag and drop folder to Netlify dashboard
# OR
# 2. Connect GitHub repository
# 3. Configure build settings (none needed)
# 4. Deploy automatically on push
```

#### Traditional Web Hosting
```bash
# 1. Upload files via FTP/SFTP
# 2. Ensure index.html or home.html is set as default
# 3. Configure SSL certificate if needed
# 4. Test all functionality on live server
```

### Pre-Deployment Checklist
- [ ] All images optimized and loading correctly
- [ ] External links open in new tabs
- [ ] Contact information is accurate
- [ ] Cookie consent functions properly
- [ ] Mobile layout tested thoroughly
- [ ] All forms validated (if applicable)
- [ ] Performance tested with Lighthouse
- [ ] SEO meta tags reviewed

## Maintenance

### Regular Updates
**Monthly Tasks:**
- Review and update content
- Check for broken external links
- Monitor site performance
- Update any outdated information

**Quarterly Tasks:**
- Update external dependencies (Tailwind, FontAwesome)
- Review analytics and user feedback
- Optimize images and assets
- Accessibility audit

**Annually:**
- Comprehensive browser compatibility check
- Performance optimization review
- Security best practices update
- Content strategy evaluation

### Performance Monitoring
**Tools:**
- Google PageSpeed Insights
- Lighthouse audit
- GTmetrix performance testing
- WebPageTest.org

**Key Metrics:**
- First Contentful Paint (< 2s)
- Largest Contentful Paint (< 2.5s)
- Cumulative Layout Shift (< 0.1)
- First Input Delay (< 100ms)

### Content Updates

#### Adding New Pages
1. **Create HTML file** following existing structure
2. **Update navigation** in all existing pages
3. **Add to sitemap** if using one
4. **Test mobile responsiveness**
5. **Validate accessibility**

#### Updating Images
1. **Optimize images** before upload
2. **Update alt text** for accessibility
3. **Test loading performance**
4. **Verify responsive behavior**

#### Modifying Styles
1. **Follow existing patterns** in style.css
2. **Test across all pages** that use modified classes
3. **Verify mobile responsiveness**
4. **Check contrast ratios** for accessibility

## Troubleshooting

### Common Issues

#### Dropdown Menus Not Working
**Symptoms:** Dropdowns don't open or close immediately
**Solution:** Check JavaScript is loaded and no console errors

#### Mobile Layout Broken
**Symptoms:** Content overflows or doesn't stack properly
**Solution:** Verify Tailwind responsive classes and viewport meta tag

#### Images Not Loading
**Symptoms:** Broken image icons or slow loading
**Solution:** Check file paths, optimize image sizes, verify hosting

#### Cookie Banner Not Appearing
**Symptoms:** No cookie consent shown to new users
**Solution:** Clear localStorage and refresh page

### Debug Mode
Enable debug information by adding to URL:
```
?debug=true
```

This can be implemented to show:
- Breakpoint information
- JavaScript state
- Performance metrics
- Accessibility warnings

## Version Control

### Git Workflow
```bash
# Standard development workflow
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature: description"
git push origin feature/new-feature
# Create pull request
```

### Commit Message Format
```
type(scope): description

feat(nav): add click-based dropdown functionality
fix(mobile): resolve layout issues on small screens  
docs(readme): update installation instructions
style(css): improve character icon positioning
```

### Branching Strategy
- **main/master**: Production-ready code
- **develop**: Integration branch for features
- **feature/***: Individual feature development
- **hotfix/***: Emergency fixes for production

## Tools and Resources

### Development Tools
- **VS Code Extensions**: HTML CSS Support, Live Server, Prettier
- **Browser Tools**: DevTools, Lighthouse, axe DevTools
- **Validation**: W3C Markup Validator, CSS Validator
- **Performance**: PageSpeed Insights, WebPageTest

### Design Resources
- **Color Palette**: Blue theme (#1e40af, #3b82f6, #dbeafe)
- **Typography**: System font stack with fallbacks
- **Spacing**: Tailwind spacing scale (0.25rem increments)
- **Icons**: Font Awesome 6.4.0

### Documentation References
- [MDN Web Docs](https://developer.mozilla.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [HTML5 Specification](https://html.spec.whatwg.org/)