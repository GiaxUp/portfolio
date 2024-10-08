import React from "react";
import styled from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import { Bio } from "../../data/Constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [isEmailSent, setIsEmailSent] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formElements = e.target.elements;

    // Verifica se tutti i campi obbligatori sono stati compilati
    const isFormValid = Array.from(formElements).every((element) => {
      return (
        element.tagName !== "INPUT" || !element.hasAttribute("required") || !!element.value.trim()
      );
    });

    if (!isFormValid) {
      // Se non tutti i campi obbligatori sono stati compilati, mostra un messaggio di errore
      console.log("Tutti i campi obbligatori devono essere compilati.");
      return;
    }

    emailjs.sendForm("service_02r8e89", "template_dpk97ar", form.current, "UbY-e4Db0EozWH36x").then(
      (result) => {
        console.log(result);
        setIsEmailSent(true); // Imposta lo stato per indicare l'invio dell'email riuscito
        setOpenSnackbar(true); // Apre lo Snackbar
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Container id="contacts">
      <Wrapper>
        <Title>Contattami</Title>
        <Desc>
          Sentiti libero di contattarmi per qualsiasi domanda o opportunità lavorativa. Ecco i miei
          social.
        </Desc>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.telegram} target="display">
            <TelegramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>... oppure mandami pure una mail!</ContactTitle>
          <ContactInput placeholder="Email *" name="from_email" required />
          <ContactInput placeholder="Nome e Cognome*" name="from_name" required />
          <ContactInput placeholder="Oggetto *" name="subject" required />
          <ContactInputMessage placeholder="Messaggio *" rows="4" name="message" required />
          <ContactButton type="submit" value="Invia" />
        </ContactForm>
        {isEmailSent && (
          <div style={{ color: "green", marginTop: "10px" }}>
            Email inviata correttamente! Ti risponderò prima possibile.
          </div>
        )}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => {
            console.log("Snackbar closed");
            setOpenSnackbar(false);
          }}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
