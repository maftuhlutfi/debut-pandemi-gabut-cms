export default {
  name: 'quiz',
  title: 'Quiz',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [
        {
          title: 'Question',
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string'
            },
            {
              name: 'answers',
              title: 'Answers',
              type: 'array',
              of: [
                {
                  title: 'Answer',
                  type: 'string'
                }
              ]
            },
            {
              name: 'correctAnswer',
              title: 'Correct Answer',
              type: 'string'
            },
            {
              name: 'explaination',
              title: 'Explanation',
              type: 'blockContent',
            }
          ]
        }
      ]
    },
    {
      name: 'scoring',
      title: 'Scoring',
      type: 'array',
      of: [
        {
          title: 'Score',
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'min',
              title: 'Minimum Score',
              type: 'number'
            }
          ]
        }
      ]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'mainImage',
    }
  },
}
