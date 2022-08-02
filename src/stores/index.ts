import { createStore } from './utils';

// we'll use this for client-side application state
// we might want to use this for light mode and dark mode interactions
// we'll also want to add Diner login and stuff like that in here
// in case they want to update or cancel their reservations
export const useGlobalStore = createStore((_set, _get) => ({}));
