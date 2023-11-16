/** All Seasons for each league */
const usaSeasons = collection => {
  return collection.getFilteredByTags("season", "usa");
};

const salSeasons = collection => {
  return collection.getFilteredByTags("season", "sal");
};

const tcsSeasons = collection => {
  return collection.getFilteredByTags("season", "tcs");
};

module.exports = {
  usaSeasons,
  salSeasons,
  tcsSeasons
};