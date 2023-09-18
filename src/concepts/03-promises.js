import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const promiseComponent = (element) => {
    
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${ hero1.name }</h3>
        <h3>${ hero2.name }</h3>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${error}</h3>
        `;
    }

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f97c29d020f1e1f6d';

    // Promise.all no se aplica para resultados que tengan dependencia, solo para resultados independientes
    // then( ([hero1, hero2]) significa que el arreglo de desestructuramos en hero1 y hero2
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    .then( ([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    .catch( renderError );
    
    // //! Forma 2
    // let hero1;
    // findHero(id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
    //         renderTwoHeroes(hero1, hero2);
    //     })
    //     .catch( renderError);
    
    //! Forma 1
    // // el then cuando sale todo bien, catch atrapamos cuando algo no sale bien, y finally siempre se ejecuta
    // findHero(id1)
    //     .then( (hero1) => {

    //         findHero(id2)
    //             .then( hero2 => {
    //                 renderTwoHeroes(hero1, hero2);
    //             })
    //             .catch(renderError);
    //     } )
    //     .catch( renderError); //.then( (superHero) => renderHero( superHero )); superhero es un argumento
    
}

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    return new Promise(( resolve, reject ) => {
        const hero = heroes.find( hero => hero.id === id);

        if (hero) {
            resolve(hero);
            return;
        }

        reject(`Hero with id ${ id } not found`);
    });

}