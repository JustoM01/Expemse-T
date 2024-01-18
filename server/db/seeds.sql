-- Seed data for the User table
INSERT INTO users (username, password, email) VALUES
  ('user123', 'hashed_password_here', 'user123@example.com'),
  ('anotherUser', 'hashed_password_here', 'anotheruser@example.com'),
    ('Topo', 'hashed_password_here', 'anotheruser@example.com'),
  


-- Seed data for the Expenses table
INSERT INTO expenses (user_id, amount) VALUES
  (1, 50.00),
  (1, 30.00),
  (2, 25.00);
