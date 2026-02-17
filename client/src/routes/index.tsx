import { createFileRoute, redirect } from "@tanstack/react-router";
import type { TokenKey } from "../types/storage";

const TOKEN_KEY: TokenKey = "auth_token";

function isAuthenticated(): boolean {
  return !!localStorage.getItem(TOKEN_KEY);
}

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/dashboard" });
    } else {
      throw redirect({ to: "/login" });
    }
  },
});

// function Index() {
//   return (
//     <div className="index">
//       <div className="index-brand">
//         <h1>Productivity apps</h1>
//         <p>The most useful apps that boost your productivity</p>
//       </div>
//       <ul>
//         <li>
//           <Link to="/counters">Counters</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }
