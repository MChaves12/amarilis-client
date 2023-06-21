import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import './style.css';

export default function Footer() {
  return (
    <MDBFooter bgColor="light">
      <MDBContainer className="p-4">
      
        <MDBRow>
          <MDBCol md="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 text-center text-md-start">
              + Info
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="perguntas-frequentes" className="text-black">
                  Perguntas Frequentes
                </a>
              </li>
              <li>
                <a href="guia-de-tamanhos" className="text-black">
                  Guia de Tamanhos
                </a>
              </li>
              <li>
                <a href="cuidados-com-as-joias" className="text-black">
                  Cuidados com as Jóias
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol md="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 text-center text-md-start">
              Termos e Condiçoes
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="informacoes-de-envio" className="text-black">
                  Informaçoes sobre Envios
                </a>
              </li>
              <li>
                <a href="politicas-de-troca-devolucao" className="text-black">
                  Política de Trocas e Devoluçoes
                </a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4" className="mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0 text-center text-md-start">
            Siga-nos Aqui:
            </h5>

            <ul className="list-unstyled">
              <MDBBtn
                floating
                className="m-1"
                style={{ backgroundColor: "#ac2bac" }}
                href="https://www.instagram.com/amarilisjoias/?igshid=MzRlODBiNWFlZA%3D%3D"
                role="button"
              >
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}
