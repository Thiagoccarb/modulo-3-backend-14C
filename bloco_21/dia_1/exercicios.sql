-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MIN(SALARY) AS mínimo, MAX(SALARY) as máximo FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT  MAX(SALARY) - MIN(SALARY) AS diferença FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.
SELECT ROUND(AVG(SALARY),2) as média_salarial from hr.employees
GROUP BY JOB_ID
ORDER BY média_salarial ASC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT  SUM(SALARY) AS 'folha de pagamento' FROM hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT MAX(SALARY) AS maior_salário,
  MIN(SALARY) AS menor_salário,
  SUM(SALARY) AS folha_de_pagamento,
  ROUND(AVG(SALARY),2) AS média_salarial
  FROM hr.employees;


-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).
SELECT COUNT(*) AS headcount FROM hr.employees
WHERE JOB_ID = 'IT_PROG';

-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).
SELECT SUM(SALARY) AS folha_salarial FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).
SELECT SUM(SALARY) AS folha_salarial FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).
SELECT SUM(SALARY) AS folha_salarial FROM hr.employees
GROUP BY JOB_ID
HAVING JOB_ID <> 'IT_PROG'
ORDER BY folha_salarial;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id .
SELECT ROUND(AVG(SALARY),2) AS média_salarial,
COUNT(EMPLOYEE_ID) AS total_funcionarios
FROM hr.employees
GROUP BY DEPARTMENT_ID
HAVING DEPARTMENT_ID > 10;

-- 11. Escreva uma query que atualize a coluna PHONE_NUMBER , de modo que todos os telefones iniciados por 515 agora devem iniciar com 777 .
SELECT REPLACE(PHONE_NUMBER, '515', '777') FROM hr.employees
WHERE PHONE_NUMBER LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(FIRST_NAME) >= 8;

-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT EMPLOYEE_ID,
	FIRST_NAME,
    YEAR(HIRE_DATE)
FROM hr.employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT EMPLOYEE_ID,
	FIRST_NAME,
    DAY(HIRE_DATE)
FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id , primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT EMPLOYEE_ID,
	FIRST_NAME,
    YEAR(HIRE_DATE)
FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT UCASE(FIRST_NAME) FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT h.LAST_NAME,
h.HIRE_DATE
FROM hr.employees h
WHERE MONTH(HIRE_DATE) = 7 AND YEAR(HIRE_DATE) = 1987;

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome , sobrenome , tempo que trabalha na empresa (em dias) .
SELECT h.FIRST_NAME,
h.LAST_NAME,
DATEDIFF(DATE(now()), HIRE_DATE)
FROM hr.employees h;

SELECT (HIRE_DATE) FROM hr.employees;