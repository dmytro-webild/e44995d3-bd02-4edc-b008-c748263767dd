"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardTestimonial from '@/components/sections/hero/HeroBillboardTestimonial';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Activity, Award, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="blurBottom"
        cardStyle="soft-shadow"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Sobre Nós",
          id: "about",
        },
        {
          name: "Serviços",
          id: "features",
        },
        {
          name: "Depoimentos",
          id: "testimonials",
        },
        {
          name: "FAQ",
          id: "faq",
        },
      ]}
      brandName="Sobreira Odontologia"
      button={{
        text: "Agendar Consulta",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardTestimonial
      useInvertedBackground={false}
      background={{
        variant: "downward-rays-animated-grid",
      }}
      title="Odontologia que cuida de você, de verdade"
      description="Deixe o medo para trás. Na Sobreira Odontologia, você encontra um espaço seguro, acolhedor e humanizado onde sua saúde bucal é tratada com a empatia e profissionalismo que você merece."
      testimonials={[
        {
          name: "Mariana Silva",
          handle: "@mariana_s",
          testimonial: "Pela primeira vez na vida, senti segurança e zero dor no dentista. A Dra. Daniella é incrível!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-smiling-with-thumb-up-business-card_1187-3166.jpg?_wi=1",
          imageAlt: "Mariana Silva",
        },
        {
          name: "Carlos Henrique",
          handle: "@carlos_h",
          testimonial: "Um tratamento humanizado que transformou minha experiência. O resultado estético superou todas as expectativas!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport-terminal_107420-85070.jpg?_wi=1",
          imageAlt: "Carlos Henrique",
        },
        {
          name: "Ana Paula",
          handle: "@anapaula.c",
          testimonial: "Recomendo a todos que buscam excelência e um ambiente que realmente se importa com o paciente. Nota 10!",
          rating: 5,
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774381764354-mfrt3idh.png",
          imageAlt: "Ana Paula",
        },
        {
          name: "João Pereira",
          handle: "@joao.p",
          testimonial: "Encontrei a confiança que precisava para cuidar do meu sorriso. Dra. Daniella e sua equipe são excepcionais.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-with-copy-space_23-2149411419.jpg?_wi=1",
          imageAlt: "João Pereira",
        },
      ]}
      buttons={[
        {
          text: "Agendar Consulta",
          href: "#contact",
        },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774284169921-23cdv0y9.jpg"
      imageAlt="Dentista Dra. Daniella Montenegro confortando paciente em uma clínica de luxo."
      mediaAnimation="opacity"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Cuidado Humanizado e Inovação para o seu Sorriso"
      metrics={[
        {
          icon: Heart,
          label: "Avaliações 5 estrelas ",
          value: "50+ ",
        },
        {
          icon: Activity,
          label: "Anos de Experiência",
          value: "25+",
        },
        {
          icon: Award,
          label: "Excelência Reconhecida",
          value: "Premiada",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: 1,
          title: "Humanização do Tratamento",
          description: "Protocolos personalizados para pacientes com ansiedade e trauma, garantindo um ambiente seguro e acolhedor em cada visita.",
          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774283882830-z9sg0w28.jpg",
            imageAlt: "Tela de celular mostrando um plano de tratamento dental",
          },
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774283789493-gdll696u.jpg",
            imageAlt: "Tela de celular mostrando um aplicativo de relaxamento para pacientes",
          },
        },
        {
          id: 2,
          title: "Odontologia Estética Avançada",
          description: "Transforme seu sorriso com as técnicas mais modernas em clareamento, lentes de contato dental e alinhadores invisíveis, para resultados naturais e deslumbrantes.",
          phoneOne: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774283976008-27feomx6.jpg",
            imageAlt: "Close-up de um sorriso perfeito após tratamento estético",
          },
          phoneTwo: {
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774284152606-r3tl47n9.jpg",
            imageAlt: "Dentista explicando o procedimento de clareamento dental ao paciente",
          },
        },
      ]}
      showStepNumbers={true}
      title="Nossa Abordagem: Empatia em Cada Detalhe"
      description="Na Sobreira Odontologia, entendemos que cada sorriso conta uma história. Nossa equipe é treinada para oferecer um tratamento que vai além do clínico, focando no seu bem-estar emocional."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          title: "Medo superado, sorriso renovado!",
          quote: "Eu tinha pavor de dentista, mas a Dra. Daniella e sua equipe me acolheram de uma forma que nunca imaginei. Hoje, amo ir ao dentista e meu sorriso é outro!",
          name: "Sofia Almeida",
          role: "",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774378277602-n6tx7ysx.png",
          imageAlt: "Sofia Almeida",
        },
        {
          id: "2",
          title: "Profissionalismo e carinho",
          quote: "A atenção aos detalhes e o carinho com que sou tratado em cada consulta são incomparáveis. É uma clínica de luxo com alma humana.",
          name: "Ricardo Fernandes",
          role: "",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774378874598-7iu22986.png",
          imageAlt: "Ricardo Fernandes",
        },
        {
          id: "3",
          title: "Resultados estéticos impecáveis",
          quote: "Fiz minhas lentes de contato dental e o resultado ficou perfeito, super natural! A Dra. Daniella é uma artista, e o atendimento, impecável.",
          name: "Isabela Costa",
          role: "",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774379277619-h6njro44.png",
          imageAlt: "Isabela Costa",
        },
        {
          id: "4",
          title: "Cuidado preventivo de excelência",
          quote: "Minha família e eu somos pacientes há anos e sempre recebemos o melhor em cuidado preventivo. A equipe é super atenciosa e competente.",
          name: "Gustavo Mendes",
          role: "",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774379590290-d9x6gquc.png",
          imageAlt: "Gustavo Mendes",
        },
        {
          id: "5",
          title: "Fim da ansiedade no dentista",
          quote: "Desde a primeira consulta, senti que estava no lugar certo. A Dra. Daniella realmente entende e sabe como transformar a experiência do dentista.",
          name: "Carolina Santos",
          role: "",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774380003483-qk6ycnul.png",
          imageAlt: "Carolina Santos",
        },
      ]}
      title="O que nossos pacientes dizem"
      description="Histórias reais de transformação e confiança. Descubra como a Sobreira Odontologia tem mudado a vida e o sorriso de quem nos procura."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "Como a Sobreira Odontologia lida com pacientes ansiosos?",
          content: "Nossa equipe é especializada em acolhimento e utiliza protocolos específicos para garantir um ambiente tranquilo e sem dor, com comunicação clara e atenção redobrada ao seu conforto. Oferecemos técnicas de relaxamento e sedação consciente, se necessário.",
        },
        {
          id: "2",
          title: "Quais são os tratamentos estéticos disponíveis?",
          content: "Oferecemos clareamento dental, lentes de contato dental (facetas), alinhadores invisíveis, restaurações estéticas e harmonização orofacial. Todos os tratamentos são personalizados para realçar a beleza natural do seu sorriso.",
        },
        {
          id: "3",
          title: "Aceitam planos de saúde ou convênios odontológicos?",
          content: "Trabalhamos com alguns planos e convênios. Entre em contato com nossa recepção para verificar a compatibilidade e as opções de pagamento disponíveis. Oferecemos também parcelamento direto na clínica.",
        },
        {
          id: "4",
          title: "Como posso agendar uma consulta?",
          content: "Você pode agendar sua consulta diretamente pelo nosso botão de WhatsApp no site, ligando para nossa clínica ou preenchendo o formulário de contato. Nossa equipe entrará em contato para confirmar.",
        },
        {
          id: "5",
          title: "A clínica oferece atendimento de emergência?",
          content: "Sim, temos horários dedicados para emergências. Por favor, entre em contato imediatamente para que possamos avaliar sua situação e agendar o atendimento mais rápido possível.",
        },
      ]}
      sideTitle="Perguntas Frequentes"
      sideDescription="Respostas claras para suas principais dúvidas sobre tratamentos, consultas e nossa abordagem humanizada."
      faqsAnimation="opacity"
      textPosition="left"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Entre em Contato"
      title="Agende Sua Consulta com a Dra. Daniella Montenegro"
      description="Pronto para transformar seu sorriso em um ambiente seguro e acolhedor? Fale conosco para agendar sua consulta ou tirar suas dúvidas. Estamos esperando por você!"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774282738392-ekttu917.jpg"
      imageAlt="Exterior moderno da clínica Sobreira Odontologia à noite"
      mediaAnimation="opacity"
      mediaPosition="left"
      inputPlaceholder="Seu nome e telefone"
      buttonText="Chamar no WhatsApp"
      termsText="Ao clicar, você concorda em iniciar uma conversa por WhatsApp com nossa equipe."
      onSubmit={(email) => console.log(email)}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BLvCwtmDhv2tJbb5Oor7FmvnW5/uploaded-1774284965975-147zx2fc.jpg"
      imageAlt="Interior luxuoso da clínica Sobreira Odontologia"
      columns={[
        {
          title: "Serviços",
          items: [
            {
              label: "Odontologia Estética",
              href: "#features",
            },
            {
              label: "Clareamento",
              href: "#features",
            },
            {
              label: "Lentes de Contato",
              href: "#features",
            },
            {
              label: "Tratamento Humanizado",
              href: "#features",
            },
          ],
        },
        {
          title: "A Clínica",
          items: [
            {
              label: "Sobre Nós",
              href: "#about",
            },
            {
              label: "Depoimentos",
              href: "#testimonials",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contato",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Política de Privacidade",
              href: "#",
            },
            {
              label: "Termos de Uso",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Sobreira Odontologia"
      copyrightText="© 2024 | Sobreira Odontologia. Todos os direitos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
