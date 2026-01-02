import AuthForm from "@/components/custom/AuthForm"

const LoginPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center p-5">
      <AuthForm title={"Welcome back"} type="login"/>
    </div>
  )
}

export default LoginPage