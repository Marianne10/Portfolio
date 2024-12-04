import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Projeto } from "./projetos";
import './static/style.css'
import { ModalTitle } from "react-bootstrap";

interface FotografiasProps  {
    show: boolean
    handleClose: () => void; 
  }

export default function FotografiasModal({ handleClose, show }:FotografiasProps) {
  return (
    <Modal show={(show)} onHide={handleClose}>
      <Modal.Header closeButton>
        <ModalTitle> Música </ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <>
        <div className="desc">
            <h5> Uma das minhas atividades preferidas, é tocar instrumentos. </h5>
        </div>
        <div className="foto-container">
            <img srcSet="/imagens/fotos/foto1.jpg 70w, /imagens/fotos/foto1.jpg 140w" sizes="(max-width: 700px) 25px, 50px" alt=""/>
            <img srcSet="/imagens/fotos/foto2.jpg 70w, /imagens/fotos/foto2.jpg 140w" sizes="(max-width: 700px) 25px, 50px" alt=""/>
            <img srcSet="/imagens/fotos/foto3.jpg 70w, /imagens/fotos/foto3.jpg 140w" sizes="(max-width: 700px) 25px, 50px" alt=""/>
            <img srcSet="/imagens/fotos/foto4.jpg 70w, /imagens/fotos/foto4.jpg 140w" sizes="(max-width: 700px) 25px, 50px" alt=""/>
            <img srcSet="/imagens/fotos/foto5.jpg 70w, /imagens/fotos/foto5.jpg 140w" sizes="(max-width: 700px) 25px, 50px" alt=""/>
            <img srcSet="/imagens/fotos/foto6.jpg 70w, /imagens/fotos/foto6.jpg 140w" sizes="(max-width: 700px) 25px, 50px" alt=""/>
            <img srcSet="/imagens/fotos/foto7.jpg 70w, /imagens/fotos/foto7.jpg 140w" sizes="(max-width: 700px) 25px, 50px" alt=""/>
            <img srcSet="/imagens/fotos/foto8.jpg 70w, /imagens/fotos/foto8.jpg 140w" sizes="(max-width: 700px) 25px, 50px" alt=""/>
        </div>
        </>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}