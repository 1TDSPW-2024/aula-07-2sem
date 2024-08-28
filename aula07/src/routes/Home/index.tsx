import { Link } from "react-router-dom";
import { MainContent } from "../../style/styled";
import { useEffect, useState } from "react";


export default function Home(){

    //MUDANDO O TÍTULO DA PÁGINA!!!
    document.title = "Home";

    //Declarando um useState com hora em LocaleString
    const [hora, setHora] = useState<string>(new Date().toLocaleTimeString("pt-BR",{hour12: false,}))
       
    // //utilizando um setInterval para alterar os dados no useState hora.
    // setInterval(() => {
    //   setHora(new Date().toLocaleTimeString("pt-BR",{hour12: false,}))
    //   }, 1000);

      useEffect(()=>{
         
        const timerId = setInterval(() => {
          setHora(new Date().toLocaleTimeString("pt-BR",{hour12: false,}))
          }, 1000);
          return ()=> clearInterval(timerId);

      },[]);


    return(
      <div>
        <MainContent>
        <h1>Olá, mundo sou o Home!</h1>
        <p>Este o componente da página principal...</p>
        <p><Link to="/editar/produtos/1500">Editar Produto - 1500</Link></p>
        <div>
          <p>{hora}</p>
        </div>
        </MainContent>
      </div>
    );
  }