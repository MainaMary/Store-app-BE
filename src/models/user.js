const allUsers = []
class User {
  constructor(email = null, password = null , userName = null) {
    this.email = email;
    this.password = password;
    this.userName = userName;

  }

  addUser(){
    let id = allUsers.length ? allUsers[allUsers.length - 1].id + 1 : 1
    allUsers.push({
      id,
      email: this.email,
      password: this.password,
      userName: this.userName
    })
    return {
      id,
      email: this.email,
      password: this.password,
      userName: this.userName

    }
  }
  getAllUsers(){
    return allUsers
  }

  getSingleUser(reqData){
    const {key, value}= reqData;
    const user = allUsers.find(user=>{user[key]=== value})
    return user
  }
  updateSingleUser(reqData,updateData){
    const singleUser= allUsers.find(user => {
      user.id === parseInt(req.params.id)
    })
    const {params} = req.body
    singleUser.email = params
    singleUser.userName= params
    singleUser.password= params

    return singleUser
  //   const {key, value} = reqData
    
  // const singleUser = allUsers.forEach(user => {
  //   if(user.key === value){
  //      user.email=updateData.email
  //      user.password =updateData.password
   //       user.userName = updateData.userName
  //   }
  // } )
  // return singleUser
  }


  deleteUser(id){
    const user =allUsers.filter(user => user.id !== id)
   return user
  }

  

}
export default User;
