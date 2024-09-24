const ApiResponse=(statusCode,data,message)=>{
       return{
        statusCode:statusCode,
        data:data,
        message:message
        
       }
}
export default ApiResponse