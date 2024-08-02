
import { Navigate, Outlet } from 'react-router-dom'

function Private() {
 
 const user=localStorage.getItem('user')
    return user?<Outlet></Outlet>:<Navigate to="/register"/>
    
  
}

export default Private