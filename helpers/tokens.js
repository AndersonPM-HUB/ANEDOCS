const generarId = () =>  Math.random().toString(36).substr(2) + Date.now().toString(36); // Genera un ID único



export { 
    generarId 
}