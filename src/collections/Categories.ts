import { anyone, authenticated } from '@/access';
import { slugField } from '@/fields/slug';

import type { CollectionConfig } from 'payload';

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: authenticated,
    update: authenticated,
    delete: authenticated,
    read: anyone,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
};
