const main = {
    index: (req,res) => {
        res.render('index');
    },
    about: (req,res) => {
        res.render('about');
    },
    blog: (req,res) => {
        res.render('blog');
    },
    booking: (req,res) => {
        res.render('booking');
    },
    contact: (req,res) => {
        res.render('contact');
    },
    feature: (req,res) => {
        res.render('feature');
    },
    menu: (req,res) => {
        res.render('menu');
    },
    single: (req,res) => {
        res.render('single');
    },
    team: (req,res) => {
        res.render('team');
    },
}
module.exports = main;