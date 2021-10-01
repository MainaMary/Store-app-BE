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
  
  updateSingleUser(id,updateData){
 allUsers.forEach(user => {
     if( user.id === id){
      const {email, userName, password} = updateData
    user.email = email
    user.userName= userName
    user.password= password
      return user
     }
    })
    

   
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
   return {id}
  }

  

}
export default User;
