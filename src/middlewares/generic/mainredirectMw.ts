/**
 * This middleware has one purpose, when the user visits the / main page,
 * should be redirected to
 *    - /login when not signed in
 *    - /tasks when signed in
 */
module.exports = function (objectrepository) {

    return function (req, res, next) {
        console.log("redirecting");
        if (typeof req.session === 'undefined'||typeof req.session.userId === 'undefined') {
            console.log(" to login");
            return res.redirect('/Login');
        } else {
            console.log(" to home");
            return res.redirect('/Home');
        }
    };

};