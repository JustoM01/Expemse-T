-- Seed data for the User table
INSERT INTO users (username, password, email) VALUES
  ('user123', 'hashed_password_here', 'user123@example.com'),
  ('anotherUser', 'hashed_password_here', 'anotheruser@example.com'),
  ('Topo', 'hashed_password_here', 'topo@gmail.com');

-- Seed data for the Expenses table
INSERT INTO expenses (user_id, amount, category, date) VALUES
  (1, 50.00, 'home', '2024-01-25'),
  (1, 50.00, 'car', '2024-01-25');
