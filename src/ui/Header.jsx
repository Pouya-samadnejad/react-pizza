import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header() {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </div>
  );
}
