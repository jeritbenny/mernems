const db = require('./db')



const allEmployee=()=>{
    return db.Ems.find().then(
        (result)=>{
            console.log(result);
            if(result){
                return {
                    statusCode:200,
                    employees:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"no data found"
                }
            }
        }
    )
}


const addEmployee=(id,empName,age,desg,salary)=>{
   return  db.Ems.findOne({id}).then(
    (result)=>{
        if(result){
            return{
                statusCode:401,
                message:"employee already exist"
            }
        }
        else{
            const newEmp= new db.Ems({
                id,
                name:empName,
                age,
                desg,
                salary
            })
            newEmp.save()

            return{
                statusCode:200,
                message:"new data successfully added"
            }
        }
    }
   )

}

const removeEmp=(id)=>{
    return   db.Ems.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:"Data removed successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"No data is available"
                }
            }
        }
    )
}

const getEmp=(id)=>{
    return db.Ems.findOne({id}).then((result)=>{
        if (result){
            return{
                statusCode:200,
                employee:result
            }
        }else{
                return{
                    statusCode:404,
                    message:"Data not found"
                }
            }
        
    })
}

const update=(id,empName,age,desg,salary)=>{
    return db.Ems.findOne({id}).then((result)=>{
        if(result){
            result.id=id,
            result.name=empName,
            result.age=age,
            result.desg=desg,
            result.salary=salary  
            result.save()   
                   return{
                statusCode:200,
                message:"Data updated successfully"
            }
        }
           else{
            return{
                statusCode:404,
                message:"No data is available"
            }
           }
        
    })
}


module.exports={allEmployee,
addEmployee,
removeEmp,
getEmp,
update}