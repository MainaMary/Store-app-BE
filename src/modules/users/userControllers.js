import { request } from "express"

export const getUsers = (req, res)=>{
    return res.status(200).json({data: "JohnDoe"})
}

const users = [
    {id: 1, name: "doe"},
    {id: 2, name:"Bezzos"}
]
export const postUsers = (req, res)=>{
    const user ={
        id: users.length + 1,
        name: req.body.name
    }
    users.push(user)

   return res.send(user)
}