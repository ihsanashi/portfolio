import * as migration_20250524_022022 from './20250524_022022';

export const migrations = [
  {
    up: migration_20250524_022022.up,
    down: migration_20250524_022022.down,
    name: '20250524_022022'
  },
];
