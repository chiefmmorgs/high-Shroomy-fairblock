import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
plugins: [react()],
base: './'
});


--- index.html ---
<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Shroomy Sticker Editor (Vite)</title>
</head>
<body>
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
</body>
</html>
