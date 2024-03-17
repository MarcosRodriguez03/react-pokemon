export const savelocalStorage = (pkmn: string) => {
    let favorites = getlocalStorage();

    if (!favorites.includes(pkmn)) {
        favorites.push(pkmn);
    }
    localStorage.setItem("Favorites", JSON.stringify(favorites))
}
export const getlocalStorage = () => {

    let localStorageData = localStorage.getItem("Favorites")
    if (localStorageData == null) {
        return [];
    }
    return JSON.parse(localStorageData);

}
export const removeFromLocalStorage = (pkmn: string) => {
    let favories = getlocalStorage();

    let namedIndex = favories.indexOf(pkmn);

    favories.splice(namedIndex, 1);

    localStorage.setItem("Favorites", JSON.stringify(favories));
}

