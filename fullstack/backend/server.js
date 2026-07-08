import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('App is ready!')
})

app.get('/api/facts', (req, res) => {
    const facts = [
        {
            "id": 1,
            "title": "Shrimp Anatomy",
            "content": "A shrimp's heart is located in its head."
        },
        {
            "id": 2,
            "title": "Otter Habits",
            "content": "Sea otters hold hands while sleeping to keep from drifting apart."
        },
        {
            "id": 3,
            "title": "Shark History",
            "content": "Sharks have existed on Earth longer than trees."
        },
        {
            "id": 4,
            "title": "Cloud Weight",
            "content": "A typical cumulus cloud weighs about 1.1 million pounds."
        },
        {
            "id": 5,
            "title": "Space Welding",
            "content": "Clean pieces of similar metal will permanently bond if they touch in the vacuum of space."
        },
        {
            "id": 6,
            "title": "Human Skeleton",
            "content": "Babies are born with around 300 bones, which fuse into 206 by adulthood."
        },
        {
            "id": 7,
            "title": "Dental Trivia",
            "content": "Teeth are the only part of the human body that cannot repair themselves."
        },
        {
            "id": 8,
            "title": "Cosmic Color",
            "content": "The average color of the universe is a beige shade scientifically named Cosmic Latte."
        },
        {
            "id": 9,
            "title": "Eternal Food",
            "content": "Honey is the only food that never spoils and can last for thousands of years."
        },
        {
            "id": 10,
            "title": "Unique Prints",
            "content": "Every single human being has a completely unique tongue print, much like fingerprints."
        }
    ]

    res.send(facts)
})

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})