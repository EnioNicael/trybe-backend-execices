// Exercício 8: Retorne o total de super-heróis com olhos azuis.

db.superheroes.countDocuments({ "aspects.eyeColor": { $eq: "blue" } });
