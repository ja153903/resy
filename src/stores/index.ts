import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { StateCreator } from 'zustand';

type ZustandMiddleware = [
  ['zustand/devtools', never],
  ['zustand/persist', unknown],
  ['zustand/immer', never]
];

function createStore(cb: StateCreator<any, ZustandMiddleware>) {
  return create(devtools(persist(immer(cb))));
}

// we'll use this for client-side application state
// we might want to use this for light mode and dark mode interactions
export const useGlobalStore = createStore((_set, _get) => ({}));
