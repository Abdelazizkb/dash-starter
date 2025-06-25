import { Button } from "@/components";
import iconUser from "@/assets/user.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-14 w-screen py-2 px-4 bg-white border-b-1">
      <p>Dash-Starter</p>
      <div className="flex gap-2">
        <Button variant="ghost">Search</Button>
        <Button variant="ghost">Help</Button>
        <Button variant="ghost">Explore apps</Button>
        <Button variant="ghost">Contact Support</Button>
        <Button>Upgrade</Button>
        <img className="h-9 w-9" src={iconUser} alt="iconUser.png" />
      </div>
    </div>
  );
};

export default Header;
