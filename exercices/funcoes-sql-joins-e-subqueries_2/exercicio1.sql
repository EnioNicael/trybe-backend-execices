/* Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales )
e internacionais ( internationa_sales ) de cada filme. */

SELECT 
    m.title, bo.domestic_sales, bo.international_sales
FROM
    Pixar.Movies AS m
        INNER JOIN
    BoxOffice AS bo ON bo.movie_id = m.id;