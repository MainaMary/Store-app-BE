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
        const users = user.getAllUsers()
        return res.status(200).send({
            data: users
        })
    }

    getUser(req, res){
        const {id}= req.params;
        console.log(typeof id);
        const user= new UserModel();
        const userExists= user.getSingleUser(id)
        return res.status(200).send({
            data: userExists
        })
    }
    updateUser(req, res){
      const user= new UserModel
      const userExists= user.updateSingleUser(parseInt(req.params.id),req.body)
      return res.status(200).send({
          data: userExists
      })
    }

    deleteUser(req, res){
        const user = new UserModel
        const {id} = req.params
        const userDelete = user.deleteUser(id)
        return res.status(200).send({
            data: userDelete
        })
    }
}

export default UserController;


