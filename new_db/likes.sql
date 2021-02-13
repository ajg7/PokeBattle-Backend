DROP TABLE IF EXISTS likes;

CREATE TABLE public.likes (
    id SERIAL PRIMARY KEY,
    pokemon_Id integer NOT NULL,
    user_Id integer NOT NULL,
    FOREIGN KEY (pokemon_Id)
        REFERENCES pokemon(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (user_Id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
