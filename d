[1mdiff --git a/package.json b/package.json[m
[1mindex cdaf94a..96555a4 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -4,7 +4,10 @@[m
   "description": "um clone de um projeto real",[m
   "main": "index.js",[m
   "scripts": {[m
[31m-    "dev": "next dev",[m
[32m+[m[32m    "dev": "npm run services:up && next dev",[m
[32m+[m[32m    "services:up": "docker compose -f infra/compose.yaml up -d",[m
[32m+[m[32m    "services:stop": "docker compose -f infra/compose.yaml stop",[m
[32m+[m[32m    "services:down": "docker compose -f infra/compose.yaml down",[m
     "lint:check": "prettier --check .",[m
     "lint:fix": "prettier --write .",[m
     "test": "jest",[m
