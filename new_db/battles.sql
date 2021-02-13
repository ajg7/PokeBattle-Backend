DROP TABLE IF EXISTS battles;

CREATE TABLE battles (
    id SERIAL PRIMARY KEY,
    user_Id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    team_Id INTEGER REFERENCES teams(id) ON DELETE CASCADE ON UPDATE CASCADE,
    player_score INTEGER DEFAULT 0,
    challenger_score INTEGER DEFAULT 0
);
