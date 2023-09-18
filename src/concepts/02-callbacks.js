import {heroes} from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const callbacksComponent = (element) => {
    
    const id1 = '5d86371fd55e2e2a30fe1ccb13';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';
    // el hero encontrado se puede desesctructurar con {name} para dejar de escribir hero y hero.name
    findHero(id1, (error, hero1) => {
        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero( id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }
            //validamos 
            // element.innerHTML = hero?.name||'NO hay heroe';
            element.innerHTML = `${ hero1.name } / ${hero2.name}`;
        })
    });
}

// el callback es una funcion que se recibe como un argumento
/**
 * 
 * @param {String} id 
 * @param {( error: String|null, hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`Hero with id ${id} not found.`);
        return; //undefined
    }

    callback(null, hero);

}