import {heroes} from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    const id = '5d86371fd55e2e2a30fe1ccb1';
    // el hero encontrado se puede desesctructurar con {name} para dejar de escribir hero y hero.name
    findHero(id, (hero) => {
        element.innerHTML = hero.name;
    });
}

// el callback es una funcion que se recibe como un argumento
/**
 * 
 * @param {String} id 
 * @param {(hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    callback(hero);

}