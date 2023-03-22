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
export const getUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email=?', [email], function (error, results, fields) {
            if (error){
                reject()
                throw new Error(error)
            }else{
                resolve(results)
            }
        });
    })
}
export const loginUser = async ({email, password}) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE email=? AND password=?', [email, password], function (error, results, fields) {
            if (error){
                reject()
                throw new Error(error)
            }else{
                resolve(results)
            }
        });
    })
}