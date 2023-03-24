function filterItems(items, searchValue) {
    return items.filter((item) => {
      return item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
    });
  }

  export default filterItems;