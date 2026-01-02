import AuthForm from "@/components/custom/AuthForm"


const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full p-5">
     
        <AuthForm title={"Create Your Account"} type="register"/>
      
    </div>
  )
}

export default RegisterPage