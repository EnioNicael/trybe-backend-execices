// Exercício 4: Retorne o total de super-heróis com até 1.80m.

db.superheroes.countDocuments({ "aspects.height": { $lte: 180 } });