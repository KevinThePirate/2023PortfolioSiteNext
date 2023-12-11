-- @block
CREATE TABLE FirstSection(
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    bio TEXT,
    country VARCHAR(2)
);

-- @block
INSERT INTO firstsection (email, bio, country)
VALUES  ('hello4@example.com','hello world','BE'),
        ('hello5@example.com','goodbye world','US'),
        ('hello6@example.com','hello world','FR'),
        ('hello7@example.com','goodbye world','IT'),
        ('hello8@example.com','hello world','GE');

-- @block
SELECT * FROM firstsection
WHERE id > 1
    AND country != "IE"
ORDER BY id DESC
LIMIT 3;

-- @block
CREATE INDEX email_index ON firstsection(email);

-- @block
CREATE TABLE Rooms(
    id INT AUTO_INCREMENT,
    street VARCHAR(255),
    owner_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (owner_id) REFERENCES firstsection(id)
)

-- @block
INSERT INTO Rooms (owner_id, street)
VALUES 
    (9, 'san diego'),
    (9, 'san fernando'),
    (9, 'san francisco'),
    (9, 'san domingo'),
    (9, 'santa barbara'),
    (9, 'Cork');

-- @block
SELECT * FROM firstsection
LEFT JOIN rooms
ON Rooms.owner_id = firstsection.id;

SELECT * FROM firstsection
RIGHT JOIN rooms
ON Rooms.owner_id = firstsection.id;

-- @block
CREATE TABLE Bookings(
    id INT AUTO_INCREMENT,
    guest_id INT NOT NULL,
    room_id INT NOT NULL,
    check_in DATETIME,
    PRIMARY KEY (id),
    FOREIGN KEY (guest_id) REFERENCES firstsection(id),
    FOREIGN KEY (room_id) REFERENCES Rooms(id)
)

-- @block
INSERT INTO Bookings(guest_id, room_id, check_in)
VALUES
    (9, 1, "2022-04-22 10:34:23.55")

-- @block Rooms a user has booked
SELECT
    guest_id,
    street,
    check_in
FROM Bookings
INNER JOIN Rooms on Rooms.owner_id = guest_id

-- @block Guests who stayed in a room
SELECT 
    room_id AS RoomNumber,
    guest_id AS GuestID,
    email,
    bio
FROM bookings
INNER JOIN firstsection on firstsection.id = guest_id;