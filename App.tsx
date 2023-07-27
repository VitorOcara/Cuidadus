import { useState } from "react";
import Routes from "./src/routes";
import ImageContext from "./src/screens/Home/ImageContext";
import { UserProvider } from "./src/screens/Home/UserContext";

export default function App() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{image, setImage}}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </ImageContext.Provider>
  );
}
