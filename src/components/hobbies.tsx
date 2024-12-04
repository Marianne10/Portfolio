import { useState } from "react";
import { FaHeadphones } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { ImCamera } from "react-icons/im";
import FotografiasModal from "./fotografiasModal";

export default function Hobbies({tema}: any) {
    const [state, setState] = useState({
        show: false,
      });

      const handleClose = () => {
        setState((prevState) => ({
          ...prevState,
          show: false,
        }));
      };
    
      const handleShow = () => {
        setState((prevState) => ({
          ...prevState,
          show: true,
        }));
      };
    
      
    return (
    <>

        {state.show && (
                <FotografiasModal show={state.show} handleClose={handleClose} />
            )}
        <div className="sub">
            <p> Dentre os hobbies favoritos estão: </p>
            <h4> Pintura </h4>
        </div>
        <div className="hob-container">
            <div>
                <img srcSet="/imagens/capas/musica1.jpg" alt=""/>
        
            </div>
            <div>
                <img srcSet="/imagens/capas/musica2.jpg" alt=""/>
            
            </div>
            <div>
                
                <FaHeadphones size={'5em'}/>
            
            </div>
        </div>
            <h4 className="sub"> Viagem </h4>
        <div className="hob-container">
            <div>
                <img srcSet="/imagens/capas/livro1.jpg 180w, /imagens/capas/livro1.jpg 100w" sizes="(max-width: 700px) 20px, 90px" alt=""/>
        
            </div>
            <div>
                <img srcSet="/imagens/capas/livro2.jpg 180w, /imagens/capas/livro2.jpg 200w" sizes="(max-width: 700px) 20px, 90px" alt=""/>
                
            </div>
            <div>
                
                <p>
                    <TbBooks size={'5em'}/>
                </p>
            </div>
        </div>
            <h4 className="sub"> Música </h4>
        <div className="hob-container">
            <div>
                <img srcSet="/imagens/fotos/foto1.jpg 75w, /imagens/fotos/foto1.jpg 300w" sizes="(max-width: 700px) 20px, 90px" alt=""/>
                <p> Teclado e Violão </p>
            </div>
            <div>
                <img srcSet="/imagens/fotos/foto8.jpg 75w, /imagens/fotos/foto8.jpg 300w" sizes="(max-width: 700px) 20px, 90px" alt=""/>
                <p> Sax alto </p>
            </div>
            <div>
            <a href="#"
              className="list-group-item-action custom-link"
              onClick={() => handleShow()}>
                <p>
                    <ImCamera size={'5em'}/>
                </p>
                        Veja mais
                </a>
            </div>
        </div>
    </>
    )
}