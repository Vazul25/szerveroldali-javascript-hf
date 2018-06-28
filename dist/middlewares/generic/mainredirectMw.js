module.exports = function (objectrepository) {
    return function (req, res, next) {
        console.log("redirecting");
        if (typeof req.session === 'undefined' || typeof req.session.userId === 'undefined') {
            console.log(" to login");
            return res.redirect('/Login');
        }
        else {
            console.log(" to home");
            return res.redirect('/Home');
        }
    };
};
