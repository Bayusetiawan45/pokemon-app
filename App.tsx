import { AppNavigator } from './app/navigations/appNavigation';
import PokemonServiceProvider from './app/services/pokemon';

export default function App() {
  return (
   <PokemonServiceProvider>
     <AppNavigator />
   </PokemonServiceProvider>
  );
}