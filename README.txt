Wraeclast Architect app (installable web app)

Host this folder on any https address (GitHub Pages, Netlify Drop, Cloudflare Pages), open the address in Chrome on Android,
then use the menu > Install app (or the Install app button on the page). After the first load it works offline.
Service workers also run on http://localhost, so a quick local test is: python3 -m http.server in this folder.
To add or update a build, run the toolkit command build_app.py on this folder, or replace the guide and filter files by hand.
