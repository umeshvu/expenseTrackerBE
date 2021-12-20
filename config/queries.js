const queries = {
  ADD_FNA:
    "INSERT INTO fna_operations (`user_id`, `amount`, `description`, `type`, `date`) VALUES (?,?,?,?,?)",
  GET_ALL_FNA: "SELECT * FROM fna_operations",
};

module.exports = queries;
