// Altere o imdbRating para 7.7 no filme Batman.

db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 } });

db.movies.find({ title: "Batman" });
