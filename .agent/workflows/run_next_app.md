---
description: Run the Zenexa Next.js website locally and perform checks
---
1. Ensure Node.js (v18 or later) and npm are installed.
   - Verify with `node -v` and `npm -v`.
2. Open a terminal in the project root:
   ```
   cd "C:/Users/prajwal.bedavatti/Desktop/FINAL WEBSITE/zenexa-website/zenexa-website"
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open the browser at `http://localhost:3000` and manually verify each page and component.
6. Run linting and type checking:
   ```
   npm run lint
   npx tsc --noEmit
   ```
7. If any errors appear, fix them in the codebase.
8. After fixes, repeat steps 4‑6 to confirm all issues are resolved.
// turbo-all
