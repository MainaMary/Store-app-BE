import UserModel from "../models/user"

const userModel = new UserModel();
class userValidator {
    validateUserData(req, res, next){
        const {email, password, userName} = req.body;
        if(!email){
            return res.status(400).send({
                errorMessage: 'Email is required'
            })
        }
        if(!password){
            return res.status(400).send({
                errorMessage : 'Password is required'
            })
        }
        if(!userName){
            return res.status(400).send({
                errorMessage : 'Username is required'
            })
        }
        const emailExists = userModel.getSingleUser({
            key: "email",
            value: email

        })

        if(emailExists){
            return res.status(400).send({
                errorMessage: 'Email is already registered'
            })
        }
        const userNameexists = userModel.getSingleUser({
            key: "userName",
            value: userName
        })
        if(userNameexists){
            return res.status(400).send({
                errorMessage: 'UserName already exists'
            })
        }

        return next()
    }
}
export default userValidator;