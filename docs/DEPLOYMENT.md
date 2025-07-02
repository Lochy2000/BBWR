# Deployment Guide - Brighton Buccaneers Website

## 🚀 Quick Deploy to Vercel

### Method 1: Drag & Drop (Fastest)
1. **Zip the project folder** (exclude node_modules if present)
2. **Visit** [vercel.com](https://vercel.com)
3. **Sign up/Login** with GitHub, GitLab, or Bitbucket
4. **Drag and drop** the zip file to Vercel dashboard
5. **Your site is live!** - Vercel will provide a URL like `https://brighton-buccaneers-xyz.vercel.app`

### Method 2: GitHub Integration (Recommended)
1. **Push to GitHub repository**
2. **Connect GitHub to Vercel**
3. **Import repository** in Vercel dashboard
4. **Deploy automatically** on every push

## 📁 Pre-Deployment Checklist

### ✅ Files Ready for Deployment
- [x] `index.html` - Main landing page (renamed from home.html)
- [x] `vercel.json` - Vercel configuration with routes
- [x] `package.json` - Project metadata
- [x] `.gitignore` - Git ignore file
- [x] All navigation links updated to use `index.html`
- [x] Relative paths for all assets
- [x] Character images in `/assets/wheelchair-rugby-characters/`

### ✅ Path Configuration
- [x] **Root route** (`/`) → `index.html`
- [x] **Clean URLs** configured in `vercel.json`
- [x] **Asset paths** are relative and work locally and deployed
- [x] **Navigation links** updated across all pages

## 🔗 URL Structure (After Deployment)

### Primary Routes
- `https://your-site.vercel.app/` → Home page
- `https://your-site.vercel.app/about` → About/Join page  
- `https://your-site.vercel.app/competitions` → Competitions page
- `https://your-site.vercel.app/contact` → Contact page
- `https://your-site.vercel.app/donate` → Donation page
- `https://your-site.vercel.app/gallery` → Gallery page

## ⚙️ Vercel Configuration Explained

### Security Headers Included
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking
- **X-XSS-Protection**: XSS protection
- **Cache-Control**: Optimized caching for assets

## 🌐 Local Development vs Production

### Local Development
```bash
# Option 1: Python (if Python installed)
cd BrightonBuccaneers
python -m http.server 8000
# Open: http://localhost:8000

# Option 2: Node.js serve
npx serve .
# Open: http://localhost:3000
```

## 🔄 Step-by-Step Deployment

### Step 1: Prepare Repository
```bash
# Initialize git repository (if not already)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial deployment setup"

# Add remote repository (replace with your GitHub repo)
git remote add origin https://github.com/yourusername/brighton-buccaneers.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel
1. **Visit** [vercel.com/dashboard](https://vercel.com/dashboard)
2. **Click** "New Project"
3. **Import** your GitHub repository
4. **Configure** project settings:
   - Framework Preset: **Other**
   - Root Directory: **/** (default)
   - Build Command: **Leave empty**
   - Output Directory: **/** (default)
   - Install Command: **Leave empty**
5. **Click** "Deploy"

### Step 3: Verify Deployment
- [ ] Home page loads correctly
- [ ] Navigation menus work
- [ ] Character images display
- [ ] Mobile responsive design
- [ ] All internal links function
- [ ] External links work (social media, maps)

## 🎯 Custom Domain Setup (Future)

### When bbwrc.co.uk Access is Available
1. **In Vercel Dashboard** → Project Settings → Domains
2. **Add** `bbwrc.co.uk` and `www.bbwrc.co.uk`
3. **Configure DNS** at domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.19.19

   Type: CNAME  
   Name: www
   Value: cname.vercel-dns.com
   ```

## 🔧 Troubleshooting

### Common Issues

#### Images Not Loading
**Cause**: Incorrect asset paths
**Solution**: Verify relative paths in `/assets/` folder

#### Navigation Not Working
**Cause**: JavaScript not loading
**Solution**: Check browser console for errors

## 📊 Performance Monitoring

### Expected Performance Scores
- **Performance**: 95+ (Lighthouse)
- **Accessibility**: 95+ (WCAG AA compliance)
- **Best Practices**: 95+
- **SEO**: 90+

## 📚 Post-Deployment Tasks

### Immediate
- [ ] Test all pages and functionality
- [ ] Verify mobile responsiveness  
- [ ] Check contact information accuracy

### Within 1 Week
- [ ] Monitor performance metrics
- [ ] Check for any accessibility issues
- [ ] Review user feedback

---

## 🎉 You're Ready to Deploy!

The Brighton Buccaneers website is now configured for seamless deployment to Vercel with:
- ✅ Optimized file structure
- ✅ Clean URLs and routing
- ✅ Security headers
- ✅ Performance optimizations  
- ✅ Mobile-first responsive design
- ✅ Accessibility compliance

**Next Steps**: Push to GitHub and deploy to Vercel following the steps above!