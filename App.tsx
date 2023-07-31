import { useEffect, useState } from "react";
import Routes from "./src/routes";
import ImageContext from "./src/screens/Home/ImageContext";
import { UserProvider } from "./src/screens/Home/UserContext";
import { AppProvider, useAppContext } from "./src/screens/ConfigScreen/VolumeContext";
import { Audio } from "expo-av";


export default function App() {
  const [image, setImage] = useState<string | null>(null);
  const soundObject = new Audio.Sound();
  const [volume] = useAppContext();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const setInitialVolume = async () => {
      await soundObject.setVolumeAsync(volume);
    };
    setInitialVolume();
    playMusic();
  }, []);

  const playMusic = async () => {
    try {
      if (!isPlaying) {
        await soundObject.loadAsync(require("./assets/music.mp3"));
        await soundObject.setIsLoopingAsync(true);
        await soundObject.playAsync();
        setIsPlaying(true);
        console.log("acertou");
      }
    } catch (error) {
      console.log("Erro ao reproduzir o áudio:", error);
    }
  };

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
