User.create({
    name: name,
    email: email,
    password: password
});
// Find user by email
User.findOne({
    email: email
});
// Find user by email with the password field included
User.findOne({
    email: email
}).select("+password"); 