# Running the Development Server

## PowerShell Execution Policy Issue

If you encounter an error about scripts being disabled, you have a few options:

### Option 1: Run with Bypass (Recommended for Development)
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev
```

### Option 2: Use Command Prompt Instead
Open **Command Prompt** (cmd.exe) and run:
```cmd
npm run dev
```

### Option 3: Change PowerShell Execution Policy (Admin Required)
Run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy RemoteSigned
```

## Alternative: Direct Command
You can also run Vite directly:
```bash
npx vite
```

## Expected Output
When successful, you should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

Open your browser to `http://localhost:5173` to view the website.
