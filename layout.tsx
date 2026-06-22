@tailwind base;
@tailwind components;
@tailwind utilities;

:root { --bg:#f7f7f4; --ink:#1f2933; --sub:#6b7280; --line:#e5e7eb; --accent:#1f4e5f; }
body { background: var(--bg); color: var(--ink); }
button, input { font: inherit; }
@media print {
  .no-print { display:none !important; }
  body { background:white; }
  .print-card { box-shadow:none !important; border: none !important; }
}
