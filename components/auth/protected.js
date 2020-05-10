import { useContext } from "react";
import { AuthContext } from "./auth";
import Login from "../../pages/login";


const WithAuth=({children})=>{
const {currentUser}= useContext(AuthContext);
if(currentUser){
return(

<div >
{children}
</div>
)

}
else{
    return <Login/>
}
}

export default WithAuth;