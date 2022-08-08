const bcrypt = require("bcrypt");

function generatedHash(password){
    const salt = 10;
    const hash = bcrypt.hash(password, salt);
    return hash;
}

function compareHash(password, hash){
    return bcrypt.compareSync(password, hash);
}

console.log(generatedHash('teste'));
//console.log(compareHash('teste', '$2b$10$Yt1Q7J1/wcZ6NH1STjm6j.wnvTYTl1PODV52h0AcS0qRZWwestQ3i'));

//$2b$10$Yt1Q7J1/wcZ6NH1STjm6j.wnvTYTl1PODV52h0AcS0qRZWwestQ3i
//$2b$10$sO4KAgE3iwR/0yVajF0eeujK7MrGmz.hZzVpYf9PjjYDSozid7uXi