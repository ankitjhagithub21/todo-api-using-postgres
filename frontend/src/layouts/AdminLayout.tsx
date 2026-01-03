import AppSidebar from "@/components/custom/AppSidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"


const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default AdminLayout