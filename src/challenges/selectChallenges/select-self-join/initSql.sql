CREATE TABLE IF NOT EXISTS family_members (
    member_id INT PRIMARY KEY,
    member_name VARCHAR(50),
    father_id INT,
    mother_id INT,
    FOREIGN KEY (father_id) REFERENCES family_members(member_id),
    FOREIGN KEY (mother_id) REFERENCES family_members(member_id)
);

INSERT INTO family_members (member_id, member_name, father_id, mother_id) VALUES (1, 'Alexander', NULL, NULL);
INSERT INTO family_members (member_id, member_name, father_id, mother_id) VALUES (2, 'Emma', NULL, NULL);
INSERT INTO family_members (member_id, member_name, father_id, mother_id) VALUES (3, 'Oliver', 1, 2);
INSERT INTO family_members (member_id, member_name, father_id, mother_id) VALUES (4, 'Sophia', 1, 2);
INSERT INTO family_members (member_id, member_name, father_id, mother_id) VALUES (5, 'Lucas', NULL, NULL);
INSERT INTO family_members (member_id, member_name, father_id, mother_id) VALUES (6, 'Mia', 5, 2);