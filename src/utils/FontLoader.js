/* eslint-disable no-console */
/* eslint-disable camelcase */
import { useFonts as useItim, Itim_400Regular } from '@expo-google-fonts/itim';
import { useFonts as usePlayfair, PlayfairDisplay_400Regular } from '@expo-google-fonts/playfair-display';

const FontLoader = () => {
  let [loaded] = useItim({ Itim_400Regular });
  if (!loaded) {
    console.log('Itim font didn\'t load');
  }

  [loaded] = usePlayfair({ PlayfairDisplay_400Regular });
  if (!loaded) {
    console.log('Playfair Display font didn\'t load');
  }

  return null;
};

export default FontLoader;
