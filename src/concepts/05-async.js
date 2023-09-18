import { heroes } from "../data/heroes"


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const asyncComponent = (element) => {
    
    // const renderHero = (hero) => {
    //     element.innerHTML = hero.name;
    // }

    console.log('Inicio de componente');
    const id1 = '5d86371fd55e2e2a30fe1ccb21';

    findHero(id1)
        .then( name => element.innerHTML = name )
        .catch( error => element.innerHTML = error)
    
    console.log('Fin del componente');
}

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
const findHero = async(id) => {

    const hero = heroes.find( hero => hero.id === id);
    if(!hero)
        throw `Hero with id ${id} not found`;

    return hero.name;
}