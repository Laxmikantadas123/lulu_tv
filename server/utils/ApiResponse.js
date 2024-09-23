const ApiResponse=(statusCode,data,message,token)=>{
       return{
        statusCode:statusCode,
        data:data,
        message:message,
        token:token
       }
}
export default ApiResponse