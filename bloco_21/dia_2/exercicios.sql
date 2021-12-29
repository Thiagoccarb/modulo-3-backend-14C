-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT m.title,
b.domestic_sales,
b.international_sales
FROM BoxOffice b
INNER JOIN Movies m ON m.id = b.movie_id;

SELECT (
	SELECT m.title 
    FROM Movies m
    WHERE m.id = b.movie_id
) AS title,
b.domestic_sales,
b.international_sales
FROM BoxOffice b;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT (
	SELECT m.title
    FROM Movies m 
    WHERE m.id = b.movie_id
) AS title,
b.domestic_sales,
b.international_sales
FROM BoxOffice b 
WHERE b.international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT m.title,
b.rating
FROM Movies m 
INNER JOIN BoxOffice b
ON m.id = b.movie_id
ORDER BY rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.id,
	t.name,
    t.location,
    m.id,
    m.title
    FROM Theater t
    LEFT JOIN Movies m 
    ON t.id = m.theater_id
    ORDER BY t.name ASC;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.id,
	t.name,
    t.location,
    m.id,
    m.title
    FROM Theater t
    RIGHT JOIN Movies m 
    ON t.id = m.theater_id
    ORDER BY t.name ASC;