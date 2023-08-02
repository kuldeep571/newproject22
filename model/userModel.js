const db = require('../config/db');
class userModel{
    constructor(){}

    async insertuser(data){
        return new Promise(function(resolve, reject){
            let datainsert = `INSERT INTO user(firstname, lastname, email, password, contact)VALUES('${data.firstname}', '${data.lastname}', '${data.email}', '${data.password}', '${data.contact}')`;
            db.connection.query(datainsert, function(error, result){
                if(error){
                    reject(error)
                }else{
                    resolve(result);
                }
            })
        })
    }

    async loginauth(email){
        return new Promise(function(resolve, reject){
            let emaildata = `SELECT * FROM user WHERE email = '${email}'`;
            db.connection.query(emaildata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }

    async insert_pro(creatpro){
        return new Promise(function(resolve, reject){
            let pro__insert = `INSERT INTO product(pro_img, pro_name, pro_price, discription, category, pro_quantity, userid)VALUES('${creatpro.imagenewname}', '${creatpro.pro_name}', '${creatpro.pro_price}', '${creatpro.discription}', '${creatpro.category}', '${creatpro.pro_quantity}', '${creatpro.userid}')`;
            db.connection.query(pro__insert, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result) 
                }
            })
        })
    }

    async create(){
        return new Promise(function(resolve, reject){
            let getdata = `SELECT * FROM product`
            db.connection.query(getdata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result)
                }
            })
        })
    }

    async delete(deleteid){
        return new Promise(function(resolve, reject){
            let deletedata = `DELETE FROM product WHERE id = '${deleteid}'`;
            db.connection.query(deletedata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result)
                }
            })
        })
    }

    async userlist(){
        return new Promise(function(resolve, reject){
            let getalldata = `SELECT * FROM user `;
            db.connection.query(getalldata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result)
                }
            })
        })
    }

    async deleteuser(deleteid){
        return new Promise(function(resolve, reject){
            let deletedata = `DELETE FROM user WHERE id ='${deleteid}'`;
            db.connection.query(deletedata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result)
                }
            })
        })
    }

    async edituser(editid){
        return new Promise(function(resolve, reject){
            let edituserdata = `SELECT * FROM user WHERE id ='${editid}'`;
            db.connection.query(edituserdata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result[0])
                }
            })
        })
    }

    async update(data){
        return new Promise(function(resolve, reject){
            let updatedata = `UPDATE user SET firstname='${data.firstname}', lastname='${data.lastname}', email='${data.email}', contact='${data.contact}' WHERE id ='${data.updateid}'`;
            db.connection.query(updatedata, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result)
                }
            })
        })
    }

    async groce(data){
        return new Promise(function(resolve, reject){
            let userdataadd = `SELECT * FROM product where userid='${data}'`;
            db.connection.query(userdataadd, function(error, result){
                if(error){
                    reject(error);
                }else{
                    resolve(result)
                }
            })
        })
    }
}
module.exports = new userModel();