import Routes from "./src/routes";
import { UserProvider } from "./src/screens/Home/UserContext";
import { ImgProvider } from "./src/screens/Home/userImgContext";

export default function App() {
  return (
    <ImgProvider>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ImgProvider>
  );
}
