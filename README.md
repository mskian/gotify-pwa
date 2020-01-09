# Gotify PWA

[![Netlify Status](https://api.netlify.com/api/v1/badges/1027cfc0-30bd-4234-83bb-c27a7c26071f/deploy-status)](https://app.netlify.com/sites/mskpush/deploys)

Simple Web App with PWA Feature for Send Push Notifications to the Gotify Server.

> Send Push - <https://push.santhoshveer.com>

## Features ✨

- LocalStorage for Store the API on Browser
- Axios for Accessing the API
- Progressive Web App
- Proper Form and API validation

> **Note:** you need to Enable a Cors headers (Cross-Origin Resource Sharing) to Access your API on Third-pary websites.

- Open Gotify Setup file - `config.yml` File
- Find the Line `responseheaders: # response headers are added to every response (default: none)`
- uncomment `#` the Core Headers also add extra Header codes

```yaml
responseheaders: # response headers are added to every response (default: none)
    Access-Control-Allow-Origin: "*"
    Access-Control-Allow-Headers: "origin, x-requested-with, content-type"
    Access-Control-Allow-Methods: "GET,POST"
    Strict-Transport-Security: max-age=31536000
    X-Xss-Protection: 1; mode=block
```

## Development 🛠

- Clone this Respo or Download

```bash
git clone https://github.com/mskian/gotify-pwa.git
```

```bash
cd gotify-pwa
```

- Install Modules via `yarn`

```bash
yarn
```

- Workflow ⚙

```bash
## Development (Run build & watch for changes)
yarn dev
```

```bash
## Build
yarn buld
```

- Upload `public` Folder on your server

### Chrome Extension

Check out our Google Chrome Extension for Gotify - <https://github.com/mskian/gotify-push>

### LICENSE 📜

MIT
