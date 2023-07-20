import Routes from "./src/routes";
import { UserProvider } from "./src/screens/Home/UserContext";

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
