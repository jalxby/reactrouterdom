export const dataState: DataStateType = {
    pages:
        [
            {
                heading: 'While Loop',
                about: 'The following syntax has while loop'
            },
            {
                heading: 'For loop',
                about: 'The following syntax has for loop'
            },
            {
                heading: 'Switch',
                about: 'Switch statement replaces several for loops'
            }
        ]
}

export type DataStateType = {
    pages: Array<PagesType>
}
export type PagesType = {
    heading: string
    about: string
}