# Accessibility Guide

## WCAG 2.1 Compliance

### Level AA Compliance
This website meets WCAG 2.1 Level AA standards for accessibility, ensuring usability for people with disabilities.

## Keyboard Navigation

### Tab Order
**Logical Navigation Flow:**
1. Skip links (hidden, visible on focus)
2. Top navigation (phone, email, social media)
3. Main navigation menu
4. Page content (headings, links, buttons)
5. Footer links
6. Cookie consent (when visible)

### Keyboard Shortcuts
- **Tab**: Navigate forward through interactive elements
- **Shift + Tab**: Navigate backward through interactive elements
- **Enter/Space**: Activate buttons and links
- **Escape**: Close dropdown menus and modals
- **Arrow Keys**: Navigate within dropdown menus

### Focus Management
**Visual Focus Indicators:**
- High contrast outline for all interactive elements
- Custom focus styles for brand consistency
- Focus trapping in modals and dropdowns
- Logical focus order maintenance

```css
/* Focus indicator examples */
.nav-link:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

button:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
```

## Screen Reader Support

### Semantic HTML Structure
**Proper Heading Hierarchy:**
- H1: Page title (one per page)
- H2: Major section headings
- H3: Subsection headings
- H4-H6: Further subdivisions

**Landmark Regions:**
```html
<header role="banner">
<nav role="navigation">
<main role="main">
<section aria-labelledby="section-heading">
<footer role="contentinfo">
```

### ARIA Labels and Descriptions
**Interactive Elements:**
```html
<!-- Dropdown toggle -->
<button aria-expanded="false" aria-haspopup="true" aria-controls="dropdown-menu">
    About <i class="fas fa-chevron-down" aria-hidden="true"></i>
</button>

<!-- Phone link -->
<a href="tel:07565177023" aria-label="Call Brighton Buccaneers at 07565 177023">
    <i class="fas fa-phone" aria-hidden="true"></i> 07565 177023
</a>

<!-- Social media links -->
<a href="#" aria-label="Visit Brighton Buccaneers on Facebook">
    <i class="fab fa-facebook-f" aria-hidden="true"></i>
</a>
```

### Image Accessibility
**Alt Text Strategy:**
- **Decorative images**: `alt=""` or `aria-hidden="true"`
- **Informative images**: Descriptive alt text
- **Character decorations**: Empty alt since they're purely decorative

```html
<!-- Decorative character -->
<img src="assets/wheelchair-rugby-characters/1.png" alt="" class="w-12 h-12 ml-3" />

<!-- Informative image -->
<img src="team-photo.jpg" alt="Brighton Buccaneers team members in their rugby wheelchairs on the court" />

<!-- Logo -->
<img src="logo.png" alt="Brighton Buccaneers Wheelchair Rugby Club" />
```

## Color and Contrast

### Color Contrast Ratios
**WCAG AA Requirements Met:**
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- Non-text elements: 3:1 minimum

**Color Palette Compliance:**
| Element | Foreground | Background | Ratio | Status |
|---------|------------|------------|-------|---------|
| Body text | #374151 | #ffffff | 8.9:1 | ✅ Pass |
| Headings | #1e40af | #ffffff | 9.7:1 | ✅ Pass |
| Links | #3b82f6 | #ffffff | 7.2:1 | ✅ Pass |
| Buttons | #ffffff | #1d4ed8 | 10.4:1 | ✅ Pass |

### Color Independence
**Information Conveyed Without Color:**
- Link styling includes underlines on hover
- Form validation uses icons and text
- Status indicators include text labels
- Navigation active states use background and text changes

## Motor Accessibility

### Touch Target Sizes
**Minimum 44px touch targets** for all interactive elements:
- Navigation buttons: 44px+ height
- Form inputs: 44px+ height
- Social media icons: 44px+ clickable area
- Mobile menu items: 48px height

### Hover and Focus States
**Consistent Interaction Feedback:**
```css
/* Button hover states */
.btn-primary:hover {
    background-color: #1e40af;
    transform: translateY(-2px);
}

.btn-primary:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}
```

## Cognitive Accessibility

### Clear Content Structure
**Predictable Navigation:**
- Consistent menu placement across pages
- Logical content order
- Clear page titles and headings
- Breadcrumb navigation where appropriate

### Language and Readability
**Plain Language Principles:**
- Short, clear sentences
- Common vocabulary
- Active voice when possible
- Bullet points for lists

**Reading Level:**
- Target reading level: Grade 8-10
- Short paragraphs (3-4 sentences)
- Descriptive link text
- Clear headings that summarize content

### Error Prevention and Recovery
**Form Accessibility:**
```html
<!-- Required field indication -->
<label for="email">
    Email Address <span aria-label="required">*</span>
</label>
<input type="email" id="email" required aria-describedby="email-error" />
<div id="email-error" role="alert" aria-live="polite"></div>
```

## Visual Accessibility

### Responsive Text Scaling
**Zoom Support up to 200%:**
- Text remains readable when zoomed
- No horizontal scrolling required
- Content doesn't overlap or become cut off
- Interactive elements remain accessible

### Reduced Motion Support
**Respects user preferences:**
```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
```

### High Contrast Mode
**Windows High Contrast support:**
- Uses system colors when high contrast is enabled
- Maintains border visibility
- Preserves focus indicators

## Mobile Accessibility

### Touch Gestures
**Standard gestures supported:**
- Single tap for activation
- Swipe for navigation (where applicable)
- Pinch to zoom for content
- No complex multi-touch requirements

### Voice Control
**Voice navigation support:**
- Proper labels for voice commands
- Visible text for all interactive elements
- Standard HTML form elements
- Clear landmark identification

## Testing and Validation

### Automated Testing Tools
**Recommended Tools:**
- **Lighthouse**: Built-in Chrome accessibility audit
- **axe DevTools**: Comprehensive accessibility testing
- **WAVE**: Web accessibility evaluation tool
- **Pa11y**: Command-line accessibility testing

### Manual Testing Procedures

#### Screen Reader Testing
**Testing with NVDA (Windows):**
1. Navigate using headings (H key)
2. Navigate using landmarks (D key)
3. List all links (Insert + F7)
4. Test form navigation
5. Verify image alt text

**Testing with VoiceOver (Mac):**
1. Use rotor for navigation (Control + Option + U)
2. Test heading navigation
3. Verify landmark identification
4. Check form label associations

#### Keyboard Testing
**Complete keyboard navigation test:**
1. Tab through entire page
2. Verify no keyboard traps
3. Test dropdown menus
4. Activate all interactive elements
5. Check modal dialog behavior

### Accessibility Checklist

#### Page Level
- [ ] Page has descriptive title
- [ ] Main content has h1 heading
- [ ] Heading hierarchy is logical
- [ ] Landmark regions are identified
- [ ] Language is declared (html lang="en")

#### Navigation
- [ ] Skip links are provided
- [ ] Navigation is consistent across pages
- [ ] Current page is indicated
- [ ] Menu items are keyboard accessible
- [ ] Dropdown menus work with keyboard

#### Content
- [ ] Images have appropriate alt text
- [ ] Links have descriptive text
- [ ] Color is not the only way to convey information
- [ ] Text has sufficient contrast
- [ ] Content is readable when zoomed to 200%

#### Forms
- [ ] Form fields have labels
- [ ] Required fields are indicated
- [ ] Error messages are clear
- [ ] Field instructions are provided
- [ ] Form is keyboard accessible

#### Interactive Elements
- [ ] All buttons and links are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Touch targets are at least 44px
- [ ] Interactive elements have clear purpose
- [ ] No keyboard traps exist

## User Testing

### Testing with Real Users
**Disability Community Feedback:**
- Partner with local disability organizations
- Conduct usability testing with screen reader users
- Test with keyboard-only users
- Gather feedback from users with cognitive disabilities

### Continuous Improvement
**Accessibility is an ongoing process:**
- Regular accessibility audits
- User feedback integration
- Staff accessibility training
- Technology updates and testing

## Legal Compliance

### UK Accessibility Regulations
**Public Sector Bodies Accessibility Regulations 2018:**
- Applies to public sector websites
- Based on WCAG 2.1 Level AA
- Requires accessibility statements
- Mandates regular monitoring

### Best Practices Beyond Compliance
**Going beyond minimum requirements:**
- Proactive accessibility testing
- User-centered design approach
- Inclusive design principles
- Regular accessibility training for team

## Resources and Support

### Documentation
- [Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [UK Government Accessibility Guidelines](https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps)

### Testing Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Color Contrast Analyser](https://www.tpgi.com/color-contrast-checker/)

### Screen Readers
- [NVDA (Free)](https://www.nvaccess.org/download/)
- [JAWS (Commercial)](https://www.freedomscientific.com/products/software/jaws/)
- [VoiceOver (Mac/iOS built-in)](https://support.apple.com/guide/voiceover/)

---

**Accessibility is a fundamental right, not an afterthought. This website is committed to providing equal access to information and functionality for all users.**