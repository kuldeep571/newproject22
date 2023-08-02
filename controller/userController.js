const userService = require("../service/userService");
const userValidation = require("../validation/userValidation");

class userController{
    constructor(){}

    home(req, res){
        let pagedata ={
            title: "home page",
            pagename: "home",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true; 
        }
        res.render('template', pagedata);
    }

    singup(req, res){
        let pagedata ={
            title: "singup page",
            pagename: "singup",
            message: "",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        if(req.session.message){
            pagedata.message = req.session.message;
            delete req.session.message
        }
        res.render('template', pagedata);
    }

    login(req, res){
        let pagedata ={
            title: "login page",
            pagename: "login",
            message: "",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        if(req.session.message){
            pagedata.message = req.session.message;
            delete req.session.message;
        }
        res.render('template', pagedata);
    }

    async insertuser(req, res){
        try {
            let result = await userValidation.insertuser(req, res);
            if(result && !result.validate){
                req.session.status = 'error';
                req.session.message = result.message;
                res.redirect('/singup');
                return false;
            }
            await userService.insertuser(req, res);
            res.redirect('/login');
        } catch (error) {
            console.log(error);
        }
    }

    async loginauth(req, res){
        try {
            let result = await userValidation.loginauth(req, res);
            if(result && !result.validate){
                req.session.message = result.message;
                res.redirect('/login');
                return false;
            }
            await userService.loginauth(req, res)
            res.redirect('/groce');
        } catch (error) {
            console.log(error);
        }
    }

    async create(req, res){
        let pagedata={
            title: "create page",
            pagename: "create",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        let result = await userService.create(req, res);
        pagedata.pro = result;
        res.render('template', pagedata);
    }

    create_product(req, res){
        let pagedata={
            title: "create product",
            pagename: "create_product",
            message: "",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        res.render('template', pagedata);
    }

    async insert_pro(req, res){
        try {
            let result = await userValidation.insert_pro(req, res);
            if(result && !result.validate){
                req.session.message = result.message;
                res.redirect('/create_product')
            }
            await userService.insert_pro(req, res);
            res.redirect('/create');
        } catch (error) {
            console.log(error);
        }
    }

    async delete(req, res){
       try {
        await userService.delete(req, res)
        res.redirect('/create');
       } catch (error) {
            console.log(error);
       }
    }


    logout(req, res){
        if(req.session.isuserloggedin){
            delete req.session.isuserloggedin;
            res.clearCookie("isuserdata");
            res.redirect('/home');
        }
    }

    async userlist(req, res){
        let pagedata={
            title: "User",
            pagename: "userlist",
            message: "",
            userloggedin: false
        }
        if(req.session.isuserloggedin){
            pagedata.userloggedin = true;
        }
        let result = await userService.userlist(req, res)
        pagedata.user = result;
        res.render('template', pagedata);
    }

    async deleteuser(req, res){
        try {
            await userService.deleteuser(req, res);
            res.redirect('/userlist');
        } catch (error) {
            console.log(error);
        }
    }

    async edituser(req, res){
        try {
            const pagedata={
                title: "edituser page",
                pagename: "edituser",
                userloggedin: false
            }
            if(req.session.isuserloggedin){
                pagedata.userloggedin=true;
            }
            let result = await userService.edituser(req, res);
            pagedata.pro = result;
            res.render('template', pagedata);
        } catch (error) {
            console.log(error);
        }
    }

    async groce(req, res){
        try {
            const pagedata={
                title: "groce page",
                pagename: "groce",
                userloggedin: false
            }
            if(req.session.isuserloggedin){
                pagedata.userloggedin=true;
            }
            let result = await userService.groce(req, res);
            pagedata.prodata = result;
            res.render('template', pagedata);
        } catch (error) {
            console.log(error);
        }
    }

   
    async update(req, res){
        try {
            let result = await userValidation.update(req, res);
            if(result && !result.validate){
                req.session.status = 'error';
                req.session.message = result.message;
                res.redirect('/edituser');
                return false;
            }
            await userService.update(req, res);
            res.redirect('/userlist');
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new userController();