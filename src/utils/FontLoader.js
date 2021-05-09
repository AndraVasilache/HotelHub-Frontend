/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';

const FontLoader = () => {
  const [itimLoaded] = useFonts({ Itim_400Regular });
  if (!itimLoaded) {
    console.log('Itim font didn\'t load');
  }

  return null;
};

export default FontLoader;
