DROP TABLE IF EXISTS likes;

CREATE TABLE public.likes (
    id integer NOT NULL,
    team_name character varying(255) NOT NULL,
    user_Id integer NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_Id)
        REFERENCES users(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
