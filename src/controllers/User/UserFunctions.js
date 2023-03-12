import db from '../../../db.js'
export const getAll = async () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * from users', function (error, results, fields) {
            if (error){
                reject()
            }else{
                resolve(results)
            }
        });
    })
}
export const saveUser = async (user) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO users SET ?`, user,
            async function (error, results, fields) {
                if (error){
                    reject()
                    throw new Error(error)
                }else{
                    resolve(user)
                }
            }
        );
    })
}