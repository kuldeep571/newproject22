const Joi = require("joi");

class userValidation{
    constructor(){}
    async insertuser(req, res){
        let responce={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            firstname : Joi.string().trim().required(),
            lastname : Joi.string().trim().required(),
            email : Joi.string().email().required(),
            password : Joi.string().min(8).max(15).required(),
            contact : Joi.string().min(10).required()
        })
        const responcedata = schema.validate(req.body);
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }

    

    async loginauth(req, res){
        let responce ={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(8).max(15).required()
        })
        const responcedata = schema.validate(req.body)
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }

    async insert_pro(req, res){
        let responce={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            pro_name : Joi.string().trim().required(),
            pro_price : Joi.string().trim().required(),
            category : Joi.string().trim().required(),
            discription : Joi.string().trim().required(),
            pro_quantity : Joi.string().trim().required(),
        })
        const responcedata = schema.validate(req.body);
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }

    async update(req, res){
        let responce={
            validate: true,
            message: null
        }
        const schema = Joi.object({
            firstname : Joi.string().trim().required(),
            lastname : Joi.string().trim().required(),
            email : Joi.string().email().required(),
            contact : Joi.string().min(10).required()
        })
        const responcedata = schema.validate(req.body);
        if(responcedata.error && responcedata.error.details){
            responce.validate = false;
            responce.message = responcedata.error.details[0].message;
        }
        return responce;
    }
 }
module.exports = new userValidation();