// create a false sample of data to be used in the app
// it will be an array of 5 objects containing the following properties
// id, title, list
// id will be a number
// title will be a string
// list will be an array of objects containing the following properties
// id, title, cards
// id will be a number
// title will be a string
// cards will be an array of objects containing the following properties
// id, title, description
// id will be a number
// title will be a string
// description will be a string

const tab = [
    {
        id: 1,
        title: 'List 1',
        list: [
            {
                id: 1,
                title: 'Card 1',
                description: 'Description 1'
            },
            {
                id: 2,
                title: 'Card 2',
                description: 'Description 2'
            },
            {
                id: 3,
                title: 'Card 3',
                description: 'Description 3'
            }
        ]
    },
    {

        id: 2,
        title: 'List 2',
        list: [
            {
                id: 4,
                title: 'Card 1',
                description: 'Description 1'
            },
            {
                id: 5,
                title: 'Card 2',
                description: 'Description 2'
            },
            {
                id: 6,
                title: 'Card 3',
                description: 'Description 3'
            }
        ]
    },
    {
        id: 3,
        title: 'List 3',
        list: [
            {
                id: 7,
                title: 'Card 1',
                description: 'Description 1'
            },
            {
                id: 8,
                title: 'Card 2',

                description: 'Description 2'
            },
            {
                id: 9,
                title: 'Card 3',
                description: 'Description 3'
            }
        ]
    },
    {
        id: 4,
        title: 'List 4',
        list: [
            {
                id: 10,
                title: 'Card 1',
                description: 'Description 1'
            },
            {
                id: 11,
                title: 'Card 2',
                description: 'Description 2'
            },
            {

                id: 12,
                title: 'Card 3',
                description: 'Description 3'
            }
        ]
    },
    {
        id: 5,
        title: 'List 5',
        list: [
            {
                id: 13,
                title: 'Card 1',
                description: 'Description 1'
            },
            {
                id: 14,
                title: 'Card 2',
                description: 'Description 2'
            },
            {
                id: 15,
                title: 'Card 3',
                description: 'Description 3'
            }
        ]
    }
];

const animalTab = [
    {
        id: 6,
        title: 'les mammifères',
        list: [
            {
                id: 16,
                title: 'Chien',
                description: 'Description du chien'
            },
            {
                id: 17,
                title: 'Chat',
                description: 'Description du chat'
            },
            {
                id: 18,
                title: 'Lion',
                description: 'Description du lion'
            }
        ]
    },
    {

        id: 7,
        title: 'les oiseaux',
        list: [
            {
                id: 19,
                title: 'Pigeon',
                description: 'Description du pigeon'
            },
            {
                id: 20,
                title: 'Aigle',
                description: 'Description de l\'aigle'
            },
            {
                id: 21,
                title: 'Poule',
                description: 'Description de la poule'
            },
            {
                id: 22,
                title: 'Poulet',
                description: 'Description du poulet'
            }
        ]
    },
    {
        id: 8,
        title: 'les reptiles',
        list: [
            {
                id: 23,
                title: 'Serpent',
                description: 'Description du serpent'
            },
            {
                id: 24,
                title: 'Crocodile',

                description: 'Description du crocodile'
            },
            {
                id: 25,

                title: 'Tortue',
                description: 'Description de la tortue'
            }
        ]
    },
    {
        id: 9,
        title: 'les poissons',
        list: [
            {
                id: 26,
                title: 'Requin',
                description: 'Description du requin'
            },
            {
                id: 27,
                title: 'Poisson rouge',
                description: 'Description du poisson rouge'
            },
            {

                id: 28,
                title: 'Poisson clown',
                description: 'Description du poisson clown'
            }
        ]
    },
    {
        id: 10,
        title: 'les insectes',
        list: [
            {
                id: 29,
                title: 'Coccinelle',
                description: 'Description de la coccinelle'
            },
            {
                id: 30,
                title: 'Araignée',
                description: 'Description  de l\'araignée'
            },
            {
                id: 31,
                title: 'Cigale',
                description: 'Description de la cigale'
            },
            {
                id: 32,
                title: 'Cafard',
                description: 'Description du cafard'
            },
            {
                id: 33,
                title: 'Mouche',
                description: 'Description de la mouche'
            }
        ]
    }
];


const carTab = [
    {
        id: 11,
        title: 'les berlines',
        list: [
            {
                id: 34,
                title: 'Audi A4',
                description: 'Description du Audi A4'
            },
            {
                id: 35,
                title: 'BMW 3',
                description: 'Description du BMW 3'
            },
            {
                id: 36,
                title: 'Mercedes Classe C',
                description: 'Description du Mercedes Classe C'
            },
            {
                id: 37,
                title: 'Peugeot 508',
                description: 'Description du Peugeot 508'
            },
            {
                id: 38,
                title: 'Renault Talisman',
                description: 'Description du Renault Talisman'
            },
        ]
    },
    {

        id: 12,
        title: 'les SUV',
        list: [
            {
                id: 39,
                title: 'Audi Q5',
                description: 'Description du Audi Q5'
            },
            {
                id: 40,
                title: 'BMW X3',
                description: 'Description du BMW X3'
            },
            {
                id: 41,
                title: 'Mercedes GLC',
                description: 'Description de la Mercedes GLC'
            }
        ]
    },
    {
        id: 13,
        title: 'les coupés',
        list: [
            {
                id: 42,
                title: 'Audi TT',
                description: 'Description du Audi TT'
            },
            {
                id: 43,
                title: 'BMW Z4',

                description: 'Description du BMW Z4'
            },
            {
                id: 44,

                title: 'Mercedes SLK',
                description: 'Description de la Mercedes SLK'
            }
        ]
    },
    {
        id: 14,
        title: 'les cabriolets',
        list: [
            {
                id: 45,
                title: 'Audi A5',
                description: 'Description du Audi A5'
            },
            {
                id: 46,
                title: 'BMW 4',
                description: 'Description du BMW 4'
            },
            
        ]
    },
];


export const falseData = [{
    id: 1,
    title: 'les animaux',
    tab: animalTab
},{
    id: 2,
    title: 'les voitures',
    tab: carTab
},{
    id: 3,
    title: 'tab 1',
    tab: tab
}];