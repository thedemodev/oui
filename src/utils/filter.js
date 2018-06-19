export const isFilterTermInItem = function isFilterTermInItem(stringToFind, contentToSearch) {
  if (!contentToSearch) {
    return false;
  }

  const filters = stringToFind.match(/\S+/g) || [];

  for (let i = 0; i < filters.length; i++) {
    if (contentToSearch.toLocaleLowerCase().indexOf(filters[i].toLocaleLowerCase()) === -1) {
      return false;
    }
  }
  return true;
};
