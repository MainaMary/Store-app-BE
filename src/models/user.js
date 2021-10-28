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

  getSingleUser(id){
    console.log(typeof id);
  const user = allUsers.find(user => user.id === parseInt(id))
    return user
  }
  
  updateSingleUser(id,updateData){
 allUsers.forEach(user => {
     if( user.id === parseInt(id)){
      const {email, userName, password} = updateData
    user.email = email
    user.userName= userName
    user.password= password
    console.log(user)
    return user
     }
    
    })
   
  }


  deleteUser(id){
    const user = allUsers.findIndex(user => user.id === parseInt(id));
    const deletedUser = allUsers.splice(user, 1);
  // const user =allUsers.filter(user => user.id !== parseInt(id))
   return deletedUser
  }

  

}
export default User;
