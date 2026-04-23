/*
All possible random events that may show up in your logs. Probability weight (1-5) indicates the relative rarity of the event, with 1 = rare and 5 = common.

TODO: Add min level to random events so we can have more context-specific events (for example, once you unlock the servant boy you can get events involving the servant boy)
*/

let randomEvents = [
    {
        description: "One of your creations has started calling himself the Gingerbread Man. You don't have the heart to tell him he's made out of sugar cookie dough.",
        probabilityWeight: 3
    },
    {
        description: "Ouch! You burned your fingie.",
        probabilityWeight: 5
    },
    {
        description: "Oops, sólo hablas en español ahora. Eh, no se importa. Probablemente recordarás el inglés pronto.",
        probabilityWeight: 3
    },
    {
        description: "Somewhere in the distance, you hear singing. Is that... the duck song? Is someone IN YOUR HOUSE?????",
        probabilityWeight: 1
    },
    {
        description: "You awaken as if from a pleasant dream. In front of you, written in icing, are strange symbols. 我们在中国. Huh.",
        probabilityWeight: 2
    },
    {
        description: "Sometimes, you feel a burning coal of despair lodged deep inside your soul. Luckily, this is not one of those times.",
        probabilityWeight: 3
    },
    {
        description: "Out of the corner of your eye, you see a giant... cursor? Clicking your oven? Does no one else see that? Hello? Anyone?",
        probabilityWeight: 2
    },
    {
        description: "You are baking. Baking is you.",
        probabilityWeight: 5
    },
    {
        description: "A local fisherman brings you some whales that he caught from a nearby island. He claims to have caught them with chicken nuggets. You wonder if he knows how fish work.",
        probabilityWeight: 4
    },
    {
        description: "Your aunt has written you a letter. She has misspelled 'color'. You cry.",
        probabilityWeight: 4
    }
]