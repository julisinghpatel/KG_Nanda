export const DEMO_ADMIN={email:"admin@kgnandahospital.com",password:"Admin@123"};
export const isAdminLoggedIn=()=>localStorage.getItem("kg_nanda_admin_auth")==="true";
export const loginAdmin=(email,password)=>{if(email===DEMO_ADMIN.email&&password===DEMO_ADMIN.password){localStorage.setItem("kg_nanda_admin_auth","true");return true}return false};
export const logoutAdmin=()=>localStorage.removeItem("kg_nanda_admin_auth");