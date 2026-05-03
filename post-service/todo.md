Right now:

const userId = req.headers["x-user-id"];

Later:

Auth service → gives JWT
Gateway → verifies JWT
Extracts userId
Passes to Post Service