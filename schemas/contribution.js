export default {
    name: 'contribution',
    title: 'Contribution',
    type: 'document',
    readOnly: false,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to: [{type: 'user'}]
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text'
        }
    ]
}