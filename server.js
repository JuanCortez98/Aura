const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon'};
const server = http.createServer((req,res) => {
  let urlPath;
  try {urlPath = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);} catch {res.writeHead(400); return res.end('Bad request');}
  if (urlPath === '/') urlPath = '/index.html';
  const file = path.resolve(root, '.' + urlPath);
  if (!file.startsWith(root + path.sep) && file !== root) {res.writeHead(403); return res.end('Forbidden');}
  fs.stat(file,(err,stat)=>{
    if(err || !stat.isFile()){res.writeHead(404); return res.end('Not found');}
    res.writeHead(200, {'Content-Type':types[path.extname(file).toLowerCase()] || 'application/octet-stream', 'Cache-Control':file.endsWith('index.html')?'no-cache':'public, max-age=86400'});
    fs.createReadStream(file).pipe(res);
  });
});
server.listen(Number(process.env.PORT) || 3000,'0.0.0.0',()=>console.log('Aura Beauty Studio listening'));
