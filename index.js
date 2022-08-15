const express = require("express");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const config = require("config");
const fileUpload = require("express-fileupload")
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const listRouter = require("./routes/list.routes")
const chartRouter = require("./routes/chart.routes")
const commentRouter = require("./routes/comment.routes")
const workerHoursRouter = require("./routes/workersHours.routes")
const chartUSORouterRouter = require("./routes/chartUSO.routes")
const chartAllRouterRouter = require("./routes/chartAll.routes")
const newsRouter = require("./routes/news.routes")
const app = express();
const PORT = process.env.PORT || config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')
const filePathMiddleware = require('./middleware/filepath.middleware')
const path = require('path')

app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(filePathMiddleware(path.resolve(__dirname, 'files')))
app.use(express.json())
app.use(express.static('static'))
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)
app.use("/api/lists", listRouter)
app.use("/api/performance/comment", commentRouter)
app.use("/api/performance/worker", workerHoursRouter)
//app.use("/api/performance/all", chartAllRouterRouter)
//app.use("/api/performance/uso", chartUSORouterRouter)
app.use("/api/performance", chartRouter)
app.use("/api/news", newsRouter)
app.use(bodyParser.urlencoded({extended: true}))

const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"))
            //await mongoose.connect(config.get("dbPath"))
            .then(() => console.log('MongoDB connected'))
            .catch(error => console.log(error))
		
		//app.get('/data', (req, res) => {
			//res.send(JSON.stringify(data))
		//});

        app.listen(PORT, '0.0.0.0', () => {
            console.log('Server started on port', PORT)
        });
    } catch (e) {
        console.log('Server Error', e.message)
        //process.exit(1)
    }
}

start()