// Exercício 3: Remova a categoria "action" do filme Batman .

db.movies.updateOne({ title: "Batman" }, { $pop: { category: -1 } });

db.movies.find({ title: "Batman" });
