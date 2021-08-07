export default {
    name: 'result',
    title: 'Result',
    type: 'document',
    readOnly: false,
    fields: [
        {
            name: 'user',
            title: 'User',
            type: 'reference',
            to: [{type: 'user'}]
        },
        {
            name: 'quiz',
            title: 'Quiz',
            type: 'reference',
            to: [{type: 'quiz'}]
        },
        {
            name: 'score',
            title: 'Score',
            type: 'number'
        }
    ]
}