const libro1 = {
    nombre: "Suspiria",
    autor: "Juan",
    año: 2020
    };
    
    Biblioteca(libro1);
    
    function Biblioteca ({nombre, autor, año}: {nombre: string, autor: string, año: number}) {
        console.log(`El libro ${nombre} fue publicado por ${autor} en el año ${año}`);
       
      
        
    
        }