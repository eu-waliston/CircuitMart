import React from "react";
import "./Footer.scss";

import {
  BsBoxSeamFill,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsCreditCard,
} from "react-icons/bs";
import { MdSecurity } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer--component">
      <div className="footer-itens">
        <div className="footer-iten">
          <BsCreditCard className="footer-icon" />
          <h3>Escolha como parcelar</h3>
          <p>
            Com o Circuit Mart, você paga com cartão, boleto ou Pix. Você também
            pode pagar em até 12x no boleto com o Mercado Crédito.
          </p>
        </div>
        <div className="footer-iten">
          <BsBoxSeamFill className="footer-icon" />
          <h3>Frete grátis a partir de R$70,00</h3>
          <p>
            Ao se cadastrar no Cirtcuit Market, você tem frete grátis em
            milhares de produtos.
          </p>
        </div>
        <div className="footer-iten">
          <MdSecurity className="footer-icon" />
          <h3>Segurança, do início ao fim</h3>
          <p>
            Você não gostou do que comprou? Devolva! No Mercado Livre não há
            nada que você não possa fazer, porque você está sempre protegido.
          </p>
        </div>
      </div>
      <div className="social-media">
        <h4>
          Fique por dentro das últimas noviadas seguindo nossas redes sociais
        </h4>
        <div>
          <BsInstagram className="footer-icons"/>
          <BsFacebook  className="footer-icons"/>
          <BsTwitter   className="footer-icons"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
