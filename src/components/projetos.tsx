import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ProjetosModal from "./projetosModal";
import { TbCodeDots } from "react-icons/tb";


export interface Projeto {
  titulo: string;
  subtitulo: string;
  desc: string;
  img: string;
  link: string;
  tec: string[]
}

export default function Projetos({ tema }: any) {

  const [state, setState] = useState({
    show: false,
    projetoSelecionado: null as Projeto | null,
  });

  const projetosAcademicos: Projeto[] = [
    {
      titulo: "Pet Lovers",
      subtitulo: "Sistema de gerenciamento para um Pet Shop",
      desc: "Projeto desenvolvido em dupla ao decorrer de 5 atividades práticas para a disciplina Tecnicas de Programação I, utilizando conceitos de Programação orientada a objetos e arquitetura em camadas com React. Desenvolvido entre Out-Dez/23.",
      link: "https://github.com/velipefieira/Ativ-PetLovers",
      img: "/imagens/capas/petlovers.gif",
      tec: ["https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg", "https://cdn-icons-png.flaticon.com/128/5968/5968242.png", "https://www.svgrepo.com/show/376337/node-js.svg",  "https://cdn-icons-png.flaticon.com/512/5968/5968381.png", "https://cdn-icons-png.flaticon.com/512/5968/5968282.png"]
    },
    
    {
      titulo: "Desafio Unes",
      subtitulo: "Site de uma universidade fictícia.",
      desc: "Site de uma universidade fictícia desenvolvido utilizando conceitos básicos de HTML, CSS, Flask e MYSQL, para desafio da disciplina Desenvolvimento WEB I. Desenvolvido entre Mar-Jun/23",
      link: "https://github.com/velipefieira/DesafioUnes",
      img: "/imagens/capas/unes.gif",
      tec: ["https://cdn-icons-png.flaticon.com/128/5968/5968267.png", "https://cdn-icons-png.flaticon.com/128/5968/5968242.png","https://cdn-icons-png.flaticon.com/128/5968/5968350.png","https://static-00.iconduck.com/assets.00/programming-language-flask-icon-2048x1826-wf5k5ugs.png", "https://cdn4.iconfinder.com/data/icons/logos-3/181/MySQL-512.png"]
    }
  ];

  const projetosPessoais: Projeto[] = [
    
  ];

  const handleClose = () => {
    setState((prevState) => ({
      ...prevState,
      show: false,
    }));
  };

  const handleShow = (projeto: Projeto) => {
    setState((prevState) => ({
      ...prevState,
      show: true,
      projetoSelecionado: projeto,
    }));
  };

  return (
    <div>
    {state.show && (
          <ProjetosModal projeto={state.projetoSelecionado} handleClose={handleClose} />
    )}
      <h3 className="sub"> Projetos Acadêmicos: </h3>
      <div className="proj-container">
        {projetosAcademicos.map((projeto) => (
          <div>
            <a
              href="#"
              className="list-group-item-action custom-link"
              onClick={() => handleShow(projeto)}
            >
                <img src={projeto.img} alt="Gif do site" />
              <h4> {projeto.titulo} </h4>
              <h6> {projeto.subtitulo} </h6>
            </a>
          </div>
        ))}
      </div>
      <h3 className="sub"> Projetos Profissionais: </h3>
        <div className="center">
        <TbCodeDots size={75}/>
        <h4> Ainda não há projetos para serem mostrados  aqui. </h4>
        </div>
    </div>
  );
}
