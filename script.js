const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "whatever.com",
  "catcrazy.com",
  "crazycats.com",
  "catspics.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("cat", googleDatabase));

module.exports = googleSearch;
