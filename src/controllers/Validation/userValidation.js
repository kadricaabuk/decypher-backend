import Schema from "validate";

const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const password_regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/

const UserValidation = new Schema({
    email: {
        type: "string",
        match: email_regex,
        required: true,
        message: {
            type: "E-mail must be a string.",
            match: "Please enter a valid email address.",
            required: "E-mail requires a valid email address."
        }
    },
    password: {
        type: "string",
        match: password_regex,
        required: true,
        message: {
            match: "Password must be at least 8 characters and contain at least one letter, one number, and one special character.",
            required: "Password requires a valid email address."
        }
    },
    name: {
        type: "string",
        required: true,
    }    
})

export default UserValidation