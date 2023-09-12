

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const environmentsComponent = (element) => {
    
    // en vite las variables de entorno se almacenan en import.meta.env
    console.log(import.meta.env);
    
    const html = `
        Dev: ${import.meta.env.DEV } <br>
        Prod: ${import.meta.env.PROD } <br>
        KEY: ${import.meta.env.VITE_API_KEY } <br>
        URL: ${import.meta.env.VITE_BASE_URL } <br>
    `;

    element.innerHTML=html;
}