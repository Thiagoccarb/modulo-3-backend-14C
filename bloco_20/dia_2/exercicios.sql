// Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
SELECT 'This is SQL Exercise, Practice and Solution';

// Escreva uma query para exibir três números em três colunas.
SELECT '1' AS columnA, '2' AS columnB, '3' AS columnC;

// Escreva uma query para exibir a soma dos números 10 e 15.
SELECT SUM(10 + 15) AS soma;

// Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
SELECT SUM(10 * 15) AS multiplicação;

// Escreva uma query para exibir todas as informações de todos os cientistas.
USE Scientists;
SELECT * FROM Scientists;

// Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
SELECT p.Name AS 'Nome do Projeto', p.Hours AS 'Tempo de Trabalho' FROM Projects p;

// Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
SELECT s.Name FROM Scientists s
ORDER BY Name ASC;

// Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
SELECT p.Name FROM Projects p
ORDER BY Name DESC;

// Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' para ser concluído.') AS Result FROM Projects;


// Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
SELECT p.Name, p.Hours FROM Projects
ORDER BY p.Hours DESC
LIMIT 3;

// Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
SELECT DISTINCT a.Project FROM AssignedTo a;

// Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
SELECT p.Name FROM Projects p
ORDER BY p.Hours DESC
LIMIT 1;

// Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
SELECT p.Name FROM Projects p
ORDER BY p.Hours ASC
LIMIT 1
OFFSET 1;

// Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
SELECT * FROM Projects p
ORDER BY p.Hours ASC
LIMIT 5;

// Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.
SELECT CONCAT('Existem ', (SELECT COUNT(*) FROM Scientists s), ' cientistas na tabela Scientists.');