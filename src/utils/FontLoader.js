/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';
import { PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';

const FontLoader = () => {
  let [loaded] = useFonts({ Itim_400Regular });
  if (!loaded) {
    console.log('Itim font didn\'t load');
  }

  [loaded] = useFonts({ PlayfairDisplay_400Regular });
  if (!loaded) {
    console.log('Playfair Display font didn\'t load');
  }

  return null;
};

export default FontLoader;
