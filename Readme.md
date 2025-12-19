# Nodejs test app

Runs on port 3000 or whatever is in the PORT environment variable.

Use this block in nginx:

```
location / {
  proxy_pass http://localhost:3000;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'upgrade';
  proxy_set_header Host $host;
  proxy_cache_bypass $http_upgrade;
}
```

To run application: `node app.js` or `npm start`

## Forge

### Server Daemons

```
Command: node app.js
User: forge
Directory: /home/forge/node.snapmagic.com
```

### Deploy Script

Update the actual daemon number.

```
cd /home/forge/node.snapmagic.com
git pull origin master
npm install
supervisorctl restart daemon-<daemon_id>:*
```

test 5