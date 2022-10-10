const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require ('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')
const cors = require("cors");
const routesbox = require('./routes/box.routes'); 
const siteRoutes = require('./routes/site.routes');
const mesureRoutes = require('./routes/mesure.routes');

var app = express()

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors(corsOptions));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const db = require("./models/index.js");
const Role = db.role;

db.mongoose
  .connect(`mongodb://localhost:27017/reduxfire`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });
 
app.get('/', (req, res)=> {
    res.send('<h2>welcome to students database</h2>'
    )
});

// app.set('views', path.join(__dirname, '/views/'));

// app.engine(
//     'hbs',
//     exphbs.engine({
//     handlebars: allowInsecurePrototypeAccess(handlebars),
//     extname: 'hbs',
//     defaultLayout: 'MainLayout',
//     layoutsDir: __dirname + "/views/layouts",
// }) );

// app.set("view engine","hbs");

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
app.use('/box', routesbox);
app.use('/site', siteRoutes);
app.use('/mesure', mesureRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log('server started at port ${PORT} .')
})

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
  
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'moderator' to roles collection");
        });
  
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }