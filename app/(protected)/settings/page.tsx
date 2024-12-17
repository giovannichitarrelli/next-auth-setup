"use client";
import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
// import { useCurrentUser } from "@/hooks/user-current-user";

const SettingsPage = () => {
  // const user = useCurrentUser();

  const onClick = () => {
    logout();
  };
  return (
    <div > 
      <Button type="submit" onClick={onClick}>
        Sign Out
      </Button>
    </div>
  );
};

export default SettingsPage;
