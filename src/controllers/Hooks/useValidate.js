import UserValidation from "../Validation/userValidation.js"

const useValidate = (type, param) => {
    let errors = []
    if(type === 'user-form'){
        UserValidation.validate(param).forEach(v => {
            if(v.message){
                errors.push({ path: v.path, message: v.message });
            }
        })
    }
    if(errors.length === 0){
        return {
            success: true,
            message: "Validation succeeded!",
        }
    }
    return {
        success: false,
        message: "Validation failed!",
        errors
    }
}

export default useValidate