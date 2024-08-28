import { Img404 } from "../../style/styled";

export default function Error(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "Erro 404";

            //Criando uma numeração aleatório de 1 até 3 e modificando a url local das imagens cada vez que o componente é carregado.
            // let numAleatorio = Math.floor(Math.random() * 3) + 1;

    return(
      <div>
       
          <h1>Erro 404!</h1>
          <h2>Página não encontrada...</h2>
          {/* <Img404 src={`/404/img-404-${numAleatorio}.jpg`} alt="Erro 404"/> */}
          <Img404 src={`/404/img-404-1.jpg`} alt="Erro 404"/>
          <Img404 src={`/404/img-404-2.jpg`} alt="Erro 404"/>
          <Img404 src={`/404/img-404-3.jpg`} alt="Erro 404"/>
        
      </div>
    );
  }