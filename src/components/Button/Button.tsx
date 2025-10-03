//PRIMEIRO COMPONENTE
interface ButtonProps { //INTERROGAÇÃO DO LADO DA PROPIEDADE É QUE ELA NAO É OBRIGATORIA
    onClick: () => void
}

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick}>Clique aqui</button>
}