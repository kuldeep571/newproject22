class Comman{
    constructor(){}
    async uploadImage(pro_img, imagenewname) {
        return new Promise(function (resolve, reject) {
            let uploadPath = `${__dirname}/../public/image/${imagenewname}`;
            pro_img.mv(uploadPath, async function (error, result) {
                if (error) {
                    reject('error', error);
                } else {
                    resolve(result);
                }
            })
        })
    }
}
module.exports = new Comman()