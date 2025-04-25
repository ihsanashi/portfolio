import { authenticated, authenticatedOrPublished } from '@/access';
import { linkGroup } from '@/fields/linkGroup';
import { slugField } from '@/fields/slug';
import { hero } from '@/heros/config';
import { generatePreviewPath } from '@/utilities/generatePreviewPath';
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig<'projects'> = {
  slug: 'projects',
  admin: {
    defaultColumns: ['title', 'slug'],
    useAsTitle: 'title',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
  },
  access: {
    create: authenticated,
    update: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
  },
  defaultPopulate: {
    title: true,
    slug: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Project title',
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Media',
          fields: [
            {
              name: 'media',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
              minRows: 1,
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'summary',
              type: 'textarea',
              label: 'Short summary',
            },
            {
              name: 'body',
              label: 'Main content',
              type: 'richText',
              editor: lexicalEditor({}),
            },
          ],
        },
        {
          label: 'Links',
          fields: [linkGroup({})],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
    {
      name: 'startDate',
      label: 'Start date',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        date: {
          displayFormat: 'dd MMMM YYYY',
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'isOngoing',
      label: 'Ongoing?',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'endDate',
      label: 'End date',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          displayFormat: 'dd MMMM YYYY',
          pickerAppearance: 'dayOnly',
        },
        condition: (_, siblingData) => {
          return siblingData?.startDate && !siblingData?.isOngoing;
        },
      },
    },
    {
      name: 'tags',
      type: 'text',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'technologies',
      type: 'text',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};
