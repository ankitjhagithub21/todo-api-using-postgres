import AppSidebar from "@/components/custom/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { Outlet } from "react-router-dom"


const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 p-5">
        <SidebarTrigger />
        <Outlet/>
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout