-- Escreva uma query para exibir todas as peças que começam com GR .
USE PecasFornecedores;
SELECT p.name FROM Pecas p
WHERE p.name LIKE 'Gr%';

-- Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por ordem alfabética de fornecedor.
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE code = 2;

-- Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Fornecedor LIKE '%N%';

-- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.--Escreva uma query para exibir todas as informaÃ§Ãµes dos fornecedores que sÃ£o empresas limitadas (LTDA). Ordene os resultados em ordem alfabÃ©tica decrescente.
SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA'
ORDER BY name DESC;

-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
SELECT COUNT(name)Quantidade FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';

-- Escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.
SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco > 15.00 AND Preco < 40.00
ORDER BY Preco ASC;

-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .
SELECT * FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
