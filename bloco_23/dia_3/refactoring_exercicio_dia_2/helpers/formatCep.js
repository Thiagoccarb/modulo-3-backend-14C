const formatCEP = (cep) => {
  if (cep.includes('-')) return cep;
  const array = Array.from(cep);
  array.splice(5, 0, '-');
  return array
    .join('');
};

module.exports = formatCEP;