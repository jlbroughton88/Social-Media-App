const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const cors = require("cors")
const passportSetup = require("./config/passport-setup");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const controllerRoutes = require("./routes/controllerRoutes")
const passport = require("passport");
const session = require("express-session");
const profileRoutes = require("./routes/profile-routes");
require("dotenv").config();
// const instantListen = require("instant-listen");
const MONGODB_URI = process.env.MONGODB_URI;;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const MongoStore = require('connect-mongo')(session);


// Connect to mongoose
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log("Mongodb Connected!");
});



app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(cors());
    server.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
        cookie: { maxAge: 3600000 }
    }));
    server.use(passport.initialize());
    server.use(passport.session());

    server.use("/api/", controllerRoutes)
    server.use("/auth/", authRoutes);
    server.use("/profile", profileRoutes);
   

    server.get('*', (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        // res.header("Accept", 'application/json')
        return handle(req, res);
    });

    const port = process.env.PORT || 5000;

    server.listen(port, (err) => {
        if (err) throw err;
        console.log("Server listening at port " + port)
    });
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
})