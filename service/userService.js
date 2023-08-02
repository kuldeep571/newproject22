const userModel = require("../model/userModel");
const Commanmodel = require('../helper/Comman');

class userService {
    constructor() { }

    async insertuser(req, res) {
        let data = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            contact: req.body.contact
        }
        let result = await userModel.insertuser(data);
        return result;
    }

    async loginauth(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        let userdata = await userModel.loginauth(email);
        if (userdata && userdata.length > 0) {
            let user = userdata[0];
            if (user.password == password) {
                req.session.isuserloggedin = user.id;
                res.cookie('isuserdata', user.id);
                return
            } else {
                req.session.message = "password is incurrect";
                res.redirect('/login');
            }
        } else {
            req.session.message = "please select a validate email";
            res.redirect('/login');
        }
    }

    async insert_pro(req, res) {
        let creatpro = {
            userid  : req.cookies.isuserdata,
            pro_name: req.body.pro_name,
            pro_price: req.body.pro_price,
            discription: req.body.discription,
            category: req.body.category,
            pro_quantity: req.body.pro_quantity
        };
        console.log("creatpro", creatpro);
        const pro_img = req.files.pro_img;
        const proimg1 = pro_img.name;
        const proimg2 = proimg1.split('.');
        const proimg3 = proimg2.splice(-1);
        const currenttime = new Date().getTime();
        const random = Math.round(Math.random(1000, 10000) * 500);
        const imagenewname = `${currenttime}_${random}.${proimg3}`;
        creatpro.imagenewname = imagenewname;
        await Commanmodel.uploadImage(pro_img, imagenewname);
        let result = await userModel.insert_pro(creatpro);
        return result;
    }

    async create(){
        let result = await userModel.create();
        return result;
    }   
    
    async delete(req, res){
        let deleteid = req.query.deleteid;
        console.log("deleteid", deleteid)
        let result = await userModel.delete(deleteid);
        return result;
    }

    async userlist(){
        let result = await userModel.userlist()
        return result;
    }

    async deleteuser(req, res){
        const deleteid = req.query.deleteid;
        let result = await userModel.deleteuser(deleteid)
        return result;
    }

    async edituser(req, res){
        const editid = req.query.editid;
        let result = await userModel.edituser(editid)
        return result;
    }

    async groce(req, res){
        const data = req.cookies.isuserdata;
        console.log("data*******", data)
        let result = await userModel.groce(data)
        return result;
    }

    async update(req, res) {
        let data = {
            updateid: req.query.updateid,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            contact: req.body.contact
        }
        let result = await userModel.update(data);
        return result;
    }



}

module.exports = new userService();