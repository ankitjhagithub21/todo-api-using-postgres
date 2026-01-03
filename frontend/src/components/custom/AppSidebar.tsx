import { Home, Inbox, Users, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Link} from "react-router-dom";
import { useAuth } from "@/context/UserContext";


const items = [
  { title: "Home", url: "/dashboard", icon: Home },
  { title: "All Todos", url: "/dashboard/todos", icon: Inbox },
  { title: "All Users", url: "/dashboard/users", icon: Users },
];

const AppSidebar = () => {
  const { user, onLogout } = useAuth();
 

  const handleLogout = async () => {
    onLogout()
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Todo Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* ✅ Sidebar Footer */}
      <SidebarFooter className="border-t p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>
                {user?.name?.charAt(0).toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>

            <div className="text-sm">
              <p className="font-medium">{user?.name || "User"}</p>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="text-red-500 hover:text-red-600"
          >
            <LogOut size={18} />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
