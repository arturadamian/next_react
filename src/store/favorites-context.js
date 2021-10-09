import { createContext, useState } from 'react'

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
})
function FavoriteContextProvider(props) {
    const [useFavorites, setUseFavorites] = useState();

    function addFavoriteHandler(favoriteMeetup) {
        setUseFavorites((previosUserFavorites) => {
            return previosUserFavorites.concat(favoriteMeetup)
        });
    }
    function removeFavoriteHandler(meetupId) {
        setUseFavorites((previosUserFavorites) => {
            return previosUserFavorites.filter(meetup => meetup.id !== meetupId)
        });
    }
    function itemIsFavoriteHandler(meetupId) {
            return userFavorites.some(meetup => meetup.id === meetupId)
        });
    }
    const context = {
        favorites: useFavorites,
        totalFavorites: useFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: (meetupId) => {},
    };

    return <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>

}