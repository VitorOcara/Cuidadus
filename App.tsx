import { useState } from "react";
import Routes from "./src/routes";
import ImageContext from "./src/screens/Home/ImageContext";
import { UserProvider } from "./src/screens/Home/UserContext";
import { AppProvider } from "./src/screens/ConfigScreen/VolumeContext";

export default function App() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      <UserProvider>
        <AppProvider>
          <Routes />
        </AppProvider>
      </UserProvider>
    </ImageContext.Provider>
  );
}
