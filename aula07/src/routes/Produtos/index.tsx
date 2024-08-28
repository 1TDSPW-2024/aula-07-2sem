import styles from "../../App.module.css";

export default function Produtos(){

      //MUDANDO O TÍTULO DA PÁGINA!!!
      document.title = "PRODUTOS";

    return(
      <div>
        <h1 className={styles.h1}>Olá, mundo sou o Produtos!</h1>
      </div>
    );
  }