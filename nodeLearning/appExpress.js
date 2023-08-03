
const express = require("express")
const bodyParser = require("body-parser")
const path = require('path');


const adminRoute = require('./routesAppExpress/admin')
const shopRoute = require('./routesAppExpress/shop')
const contactRoute = require('./routesAppExpress/contact')
const sucessRoute = require('./routesAppExpress/succes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))//for importing css file from public folder

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);
app.use(contactRoute);
app.use(sucessRoute);

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'viewsAppExpress', 'invalidPage.html'))
})

app.listen(4000);
// const server = http.createServer(app)
// server.listen(3000);

// app.use((req, res, next)=>{
//     console.log("In first")
//     next();
// })