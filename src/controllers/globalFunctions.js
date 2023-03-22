import { useValidate } from "./Hooks/index.js"

export const handleResponse = ({response, statusCode=200, success=true, message="Successfull"}) => {
    return {
        statusCode,
        response: {
            success,
            message,
            data: response
        }
    }
}

export const dataValidation = (data) => {
    const isValid = useValidate('user-form', data)
    return isValid
}