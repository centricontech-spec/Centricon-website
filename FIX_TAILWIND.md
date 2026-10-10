# Tailwind CSS Fix Instructions

## The Problem
Tailwind CSS v4 was installed, but it requires a completely different setup. I've updated the configuration to use Tailwind v3 (stable version).

## What I Changed

1. **package.json** - Downgraded Tailwind from v4.1.14 to v3.4.17
2. **postcss.config.js** - Created PostCSS configuration file (required for Tailwind v3)
3. Added **autoprefixer** and **postcss** as dev dependencies

## How to Fix (Choose One Method)

### Method 1: Run the Batch File (Easiest)
Double-click the file: `INSTALL_AND_RUN.bat`

This will:
1. Install the correct dependencies
2. Start the development server automatically

### Method 2: Use Command Prompt
1. Open **Command Prompt** (cmd.exe)
2. Navigate to the project folder:
   ```cmd
   cd e:\centricon
   ```
3. Run:
   ```cmd
   npm install
   npm run dev
   ```

### Method 3: PowerShell with Execution Policy Bypass
1. Open PowerShell
2. Run:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   npm install
   npm run dev
   ```

## What to Expect

After running `npm install`, you should see:
- Tailwind CSS v3.4.17 installed
- PostCSS installed
- Autoprefixer installed

After running `npm run dev`, the website should load with:
- ✅ Dark background
- ✅ Blue buttons and accents
- ✅ Proper spacing and layout
- ✅ Smooth animations

## Files Created/Modified

- ✅ `package.json` - Updated Tailwind version
- ✅ `postcss.config.js` - NEW file (required for Tailwind)
- ✅ `tailwind.config.js` - Already configured correctly
- ✅ `src/index.css` - Already configured correctly

## After Installation

Once the dependencies are installed, the website should display correctly with all Tailwind CSS styles applied!

Visit: http://localhost:5173
