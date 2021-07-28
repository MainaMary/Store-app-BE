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
  updateSingleUser(reqData){
    const {key, value} = reqData
  const singleUser = allUsers.find(user => user.key === value )
  return singleUser
  }


  deleteUser(id){
   const user= allUsers.filter(id)
   if(user){
    
     const index= allUsers.indexOf(user)
     allUsers.splice(index, 1)
     return allUsers
   }
   
  }

  

}
export default User;
