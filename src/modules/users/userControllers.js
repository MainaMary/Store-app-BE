import UserModel from "../../models/user"

class UserController{
    addNewUser(req, res){
        const {email, password, userName} = req.body;
        const user = new UserModel(email, password, userName)
        const addedUser= user.addUser()

        return res.status(200).send({
        data: addedUser
        })
    }

    getAllusers(req, res){
        const user= new UserModel();
        const users = user.getAllusers()
        return res.status(200).send({
            data: users
        })
    }

    getUser(req, res){
        const {id}= req.params;
        const user= new UserModel;
        const userExists= user.getSingleUser({key: "id", value: parseInt(id)})
        return res.status(200).send({
            data: userExists
        })
    }
    updateUser(req, res){
      const user= new UserModel
      const userExists= user.updateSingleUser({key: "id", value: parseInt(req.params.id)})
      return res.status(200).send({
          data: userExists
      })
    }

    deleteUser(req, res){
        const user = new UserModel
        const userDelete =deleteUser(id)
        return res.send(200).send({
            data: userDelete
        })
    }
}

export default UserController;

// import { request } from "express"

// export const getUsers = (req, res)=>{
//     return res.status(200).json({data: "JohnDoe"})
// }

// const users = [
//     {id: 1, name: "doe"},
//     {id: 2, name:"Bezzos"}
// ]
// export const postUsers = (req, res)=>{
//     const user ={
//         id: users.length + 1,
//         name: req.body.name
//     }
//     users.push(user)

//    return res.send(user)
// }