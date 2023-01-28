const http = require('http')
const fs = require('fs')
const dotenv = require('dotenv')
const path = require('path')
const PUBLIC_DIRECTORY = path.join(__dirname, 'public');
const Asset_DIRECTORY = path.join(__dirname, 'asset'); 
const Json = fs.readFileSync(path.join(Asset_DIRECTORY, 'data.json'));
const fileJson = JSON.parse(Json)
const { PORT = 8000 } = process.env;
const app = http.createServer(onRequest)
const datas = require('./filtersData')




dotenv.config()

function getHTML(htmlFileName) {
  const htmlFilePath = path.join(PUBLIC_DIRECTORY, htmlFileName);
  return fs.readFileSync(htmlFilePath, 'utf-8')
}

function onRequest(req, res) {
    switch(req.url) {
      case "/":
        res.writeHead(200)
        res.end(getHTML("homepage.html"))
        return;
      case "/about":
        res.writeHead(200)
        res.end(getHTML("about.html"))
        return;
      case "/data1":
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200)
        res.end(datas(fileJson, 1))
        return;
      case "/data2":
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200)
        res.end(datas(fileJson, 2))
        return;
      case "/data3":
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200)
        res.end(datas(fileJson, 3))
        return;
      case "/data4":
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200)
        res.end(datas(fileJson, 4))
        return;
      case "/data5":
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200)
        res.end(datas(fileJson, 5))
        return;
      case "/style.css":
        res.setHeader('Content-Type', 'text/css');
        res.writeHead(200)
        const cssFilePath = path.join(Asset_DIRECTORY, 'css/style.css');
        const fileCss = fs.readFileSync(cssFilePath, 'utf-8')
        res.end(fileCss)
        return;
        return;
      case "/img":
        res.setHeader('Content-Type', 'text/css');
        res.writeHead(200)
        const imgFilePath = path.join(Asset_DIRECTORY, 'img/robot.PNG');
        const fileimg = fs.readFileSync(imgFilePath)
        res.end(fileimg)
        return;
      default:
        res.writeHead(404)
        res.end(getHTML("404.html"))
        return;
  }
}
  
app.listen(PORT, '0.0.0.0', () => {
    console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
})