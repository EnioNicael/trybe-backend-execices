// Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .

db.movies.find({ ratings: { $elemMatch: { $gt: 103} } });
