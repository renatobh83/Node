const app = require("./app");


app.get("/", (req, res) => {
 // res.redirect("/api");
 res.render("index")
});




app.listen(process.env.PORT || 3001);