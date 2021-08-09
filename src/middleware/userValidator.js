import UserModel from "../models/user"

const userModel = new UserModel();
class userValidator {
    validateUserData(req, res, next){
        const {email, password, userName} = req.body;
        if(!email.trim()){
            return res.status(400).send({
                errorMessage: 'Email is required'
            })
        }
        if(!password.trim()){
            return res.status(400).send({
                errorMessage : 'Password is required'
            })
        }
        if(!userName.trim()){
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
    validateUserExists(req, res,next){
        const {Id} = req.params;
        const user = getSingeleUser({key:"Id",value:Id})
    
        if (!user){
            return res.status(400).send({
                errorMessage: 'user does not exist'
            })
        }
        next()
        }




}
export default userValidator;