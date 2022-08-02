import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import type { StateCreator } from 'zustand';

type ZustandMiddleware = [
  ['zustand/devtools', never],
  ['zustand/persist', unknown],
  ['zustand/immer', never]
];

export function createStore(cb: StateCreator<any, ZustandMiddleware>) {
  return create(devtools(persist(immer(cb))));
}
