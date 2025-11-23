# How to Run Apex College Website Locally in VS Code

## Prerequisites

Before starting, make sure you have installed:

- **Node.js** (v18 or higher) - Download from https://nodejs.org/
- **pnpm** (Package Manager) - Install via: `npm install -g pnpm`
- **Git** - Download from https://git-scm.com/
- **VS Code** - Download from https://code.visualstudio.com/

Verify installations by running in terminal:

```bash
node --version
pnpm --version
git --version
```

---

## Step 1: Clone or Download the Project

### Option A: Using Git (Recommended)

```bash
git clone <your-repository-url>
cd fusion-starter
```

### Option B: Download ZIP

1. Go to your GitHub/GitLab repository
2. Click "Code" → "Download ZIP"
3. Extract the folder
4. Open terminal and navigate to the folder:

```bash
cd path/to/fusion-starter
```

---

## Step 2: Open in VS Code

```bash
code .
```

Or manually open VS Code, go to File → Open Folder, and select the `fusion-starter` folder.

---

## Step 3: Install Dependencies

Open the integrated terminal in VS Code (View → Terminal or Ctrl+`), then run:

```bash
pnpm install
```

This will install all required packages listed in `package.json`. This may take 2-5 minutes.

---

## Step 4: Start the Development Server

```bash
pnpm dev
```

You should see output like:

```
Local:    http://localhost:5173/
```

---

## Step 5: Open in Browser

Click the link or manually open:

- **http://localhost:5173/**

Your Apex College website will now load locally! You'll see live hot reload (automatic refresh when you save files).

---

## Common Commands

| Command           | Purpose                                |
| ----------------- | -------------------------------------- |
| `pnpm dev`        | Start development server (live reload) |
| `pnpm build`      | Build for production                   |
| `pnpm start`      | Start production server                |
| `pnpm test`       | Run tests                              |
| `pnpm typecheck`  | Check TypeScript types                 |
| `pnpm format.fix` | Auto-format all code                   |

---

## Project Structure

```
fusion-starter/
├── client/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero section
│   │   ├── AcademicPrograms.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ScholarshipSection.tsx
│   │   ├── AdventureSection.tsx
│   │   ├── UniversityPartner.tsx
│   │   ├── NewsEventsSection.tsx
│   │   ├── LearningPartners.tsx
│   │   ├── ApexOverview.tsx
│   │   ├── Footer.tsx
│   │   └── ui/             # UI component library (Radix UI)
│   ├── pages/
│   │   ├── Index.tsx       # Homepage (main landing page)
│   │   ���── NotFound.tsx    # 404 page
│   ├── App.tsx             # Main app entry point with routing
│   ├── global.css          # Global styles & CSS variables
│   └── vite-env.d.ts       # Vite type definitions
├── server/
│   ├── index.ts            # Express server configuration
│   └── routes/             # API endpoints
├── shared/
│   └── api.ts              # Shared types between client & server
├── package.json            # Dependencies & scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── index.html              # HTML entry point
```

---

## Making Changes

### Editing Pages & Components

1. All components are in `client/components/`
2. The main page is `client/pages/Index.tsx`
3. Edit any `.tsx` file and save (Ctrl+S)
4. Browser will auto-refresh with changes

### Updating Styles

- Use Tailwind CSS classes in JSX: `className="bg-apex-maroon text-white"`
- View available colors in `tailwind.config.ts`
- Global colors defined in `client/global.css`

### Updating Content

- Homepage content is in each component file
- Images/logos can be updated in the component files

---

## Troubleshooting

### Issue: "pnpm: command not found"

**Solution:** Install pnpm globally:

```bash
npm install -g pnpm
```

### Issue: "Port 5173 already in use"

**Solution:** Either close the other app using port 5173, or specify a different port:

```bash
pnpm dev -- --port 3000
```

### Issue: "Module not found" errors

**Solution:** Reinstall dependencies:

```bash
pnpm install
```

### Issue: Changes not showing in browser

**Solution:**

1. Hard refresh browser: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
2. Check browser console for errors (F12)
3. Restart dev server: Press Ctrl+C, then run `pnpm dev` again

### Issue: TypeScript errors in VS Code

**Solution:** Install recommended VS Code extensions:

- "ES7+ React/Redux/React-Native snippets"
- "Tailwind CSS IntelliSense"
- "TypeScript Vue Plugin"

---

## Building for Production

When ready to deploy:

```bash
pnpm build
```

This creates optimized files in the `dist/` folder. You can then:

- Deploy to Netlify, Vercel, or any static host
- Run locally with: `pnpm start`

---

## Git Workflow

```bash
# Check what files changed
git status

# Stage all changes
git add .

# Commit with message
git commit -m "Update hero section styling"

# Push to remote repository
git push origin main
```

---

## Deployment Options

### Deploy to Netlify

```bash
pnpm build
# Upload 'dist' folder to Netlify
# Or connect GitHub repo for automatic deployments
```

### Deploy to Vercel

```bash
# Connect via Vercel dashboard
# Push to GitHub, Vercel auto-deploys
```

### Deploy to Fly.io (Current)

```bash
pnpm build
# Deploy using fly CLI
```

---

## Need Help?

1. Check the browser console for errors (F12)
2. Review VS Code terminal for build errors
3. Ensure all files are saved
4. Restart the dev server
5. Check internet connection (for image loading)

---

## Next Steps

1. ✅ Run the dev server
2. ✅ Edit components in `client/components/`
3. ✅ Update content and styling
4. ✅ Test on different screen sizes (F12 → Toggle device toolbar)
5. ✅ Build for production when ready
6. ✅ Deploy to your hosting platform

Happy coding! 🚀
