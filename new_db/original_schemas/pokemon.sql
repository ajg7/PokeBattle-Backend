DROP TABLE IF EXISTS pokemon;

CREATE TABLE pokemon(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type1 VARCHAR(255) NOT NULL,
    type2 VARCHAR(255),
    imgURL VARCHAR(255) NOT NULL,
    number INTEGER NOT NULL,
    height INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    entry VARCHAR(255) NOT NULL,
    habitat VARCHAR(255) NOT NULL,
    legendary BOOLEAN,
    mythical BOOLEAN,
    ancient BOOLEAN,
    region VARCHAR(255) NOT NULL,
    modern_imgURL VARCHAR(255) NOT NULL,
    shiny_imgURL VARCHAR(255) NOT NULL
);