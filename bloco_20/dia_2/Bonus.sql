// Escreva uma query para exibir a peça e o preço de tudo que é provido pela empresa RBT .
SELECT p.Name Peça,
 pr.Price Preço
 FROM Pieces p
 INNER JOIN Provides pr ON pr.Piece = p.Code
 WHERE pr.Provider = 'RBT';

// Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
SELECT * FROM Provides
ORDER BY Price DESC
LIMIT 5;

// Escreva uma query para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
SELECT Provider Company,
Price
FROM Provides
ORDER BY Price DESC
LIMIT 4;

// Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços das peças de forma decrescente.
SELECT * FROM Pieces p
WHERE p.Code in (
	SELECT pr.Piece FROM Provides pr
    WHERE pr.Provider = 'HAL'
)
ORDER BY p.Name DESC;

// Escreva uma query para exibir por quantas empresas a peça 1 é provida.
SELECT * FROM Provides p
WHERE p.Piece = 1;