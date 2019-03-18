// reuse code
//render hijacking
// abstract state
//prop manipulation



import React from "react"
import ReactDOM from 'react-dom'


const Info = (props) => (
    <div>
        <h1>Information</h1>
        <p>The info : {props.Info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
return (props) => (
<div>
   {props.isAdmin &&  <p>This is private information. Please dont share!</p>}
    <WrappedComponent {...props}/>

</div>
)
}

const requreAthentication= (WrappedComponent) => {
    return (props) => (
    <div>
       {props.isAuthenticated ? (
        <WrappedComponent {...props}/>
       ) : (
        <p>Please login to view the information</p>

       )}
    
    </div>
    )
    }


//requireAthentication

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requreAthentication(Info)


ReactDOM.render(<AuthInfo isAuthenticated = {true} Info="this is the details" />, document.getElementById("app"))
//ReactDOM.render(<AdminInfo isAdmin = {false} Info="this is the details" />, document.getElementById("app"))