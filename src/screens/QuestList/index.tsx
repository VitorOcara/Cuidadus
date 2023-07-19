import React, { useCallback, useEffect, useState } from "react";
import { Background, Container } from "../../global/styles";
import Img from "../../../assets/Sobre.png";
import {
  BttCard,
  Content,
  Icon,
  SeachBox,
  SeachInput,
  SeachView,
} from "./styles";
import Header from "../../components/Header";
import { CardView } from "../../components/Card";
import { FlatList } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

export interface QuestProps {
  title: string;
  subTitle: string;
  item_A: string;
  item_B: string;
  item_C: string;
  gabarito: string;
  correcao: string;
}
export const data = [
  {
    title: "AVD - atividades da vida diária",
    subTitle:
      "João nunca arruma a cama quando acorda por mais que a mãe sempre lembre. O que fazer para ele realizar a atividade?",
    item_A: "Continuar na repetição do pedido por mais que não seja atendido.",
    item_B:
      "Explicar com imagens o passo a passo da arrumação da cama e deixar exposto próximo a cama.",
    item_C: "Pegar os braços/mãos de João e forçar a arrumação.",
    gabarito: "B",
    correcao:
      "As dificuldades nas atividades cotidianas são comuns. O uso de imagens com uma explicação oral é um recurso muito utilizado e que funciona.",
  },
  {
    title: "Agenda diária",
    subTitle:
      "Michele tem crises diárias pois raramente sabe das atividades do dia, por mais que sua mãe lhe fale antes da realização. O que pode ser feito para ajudar Michele?",
    item_A:
      "Uma agenda com várias fotos representando as atividades do dia com uma descrição breve do que será.",
    item_B:
      "Uma agenda com um texto explicando o que será feito durante o dia com ênfase nas palavras que retratam os eventos. (ex.: Ida ao DENTISTA).",
    item_C:
      "Descrever para Michele o que vai acontecer minutos antes de cada atividade.",
    gabarito: "A",
    correcao:
      "As imagens são um ótimo recurso, pois o que é visual tem um melhor registro na memória e junto com uma breve descrição torna a agenda mais efetiva para auxiliar na organização do dia. ",
  },
  {
    title: "Antecipação de eventos",
    subTitle:
      "O Ricardo tem crises sempre que vai ao dentista pois se assusta com as incertezas do que pode acontecer e com o barulho dos instrumentos. O que pode ser feito para controle das crises?",
    item_A:
      "O pai de Ricardo pode explicar com o uso de imagens e vídeos o que pode acontecer no consultório dando ênfase aos sons das máquinas e suas funcionalidades.",
    item_B:
      "É preciso que o dentista fale no momento a Ricardo cada passo que dará durante os procedimentos.",
    item_C:
      "Situações tão pontuais que não são recorrentes não podem ser esquivadas. Com o tempo Ricardo se acostuma.",
    gabarito: "A",
    correcao:
      "A antecipação de eventos é uma ótima técnica para controle das crises, onde a criança pode se preparar emocionalmente para a consulta. Sempre fazer uso de recursos visuais além do discurso. ",
  },
  {
    title: "Comunicação verbal e não verbal",
    subTitle:
      "Os pais de Ana antecipam todas as necessidades dela por mais que ela ainda não fale. Mas Ana tem uma nova babá que não entende com clareza o que ela quer, já que ela não fala e nem aponta. A babá quer saber o que pode fazer.",
    item_A:
      "Ela deve ficar sempre apresentando as coisas como comida e água para Ana esperando que ela aceite, levando-a ao banheiro e etc.",
    item_B:
      "Ela pode deixar tudo sempre à vista e ficar olhando-a para se aproximar dos objetos para que possa assim ofertar.",
    item_C:
      "Ela pode entregar várias imagens para a Ana e ela poder mostrar o que precisa no momento para que possa ser entregue/feito.",
    gabarito: "C",
    correcao:
      "Com a ausência da fala pode ficar difícil entender o que a criança precisa. O uso de imagens pode ser um recurso facilitador na hora da comunicação. Importante ressaltar que a criança ainda assim precisa ser incentivada a falar. Consultar fonoaudióloga.",
  },
  {
    title: "Antecipação de eventos",
    subTitle:
      "Joana é professora e precisa levar seu filho para uma reunião no trabalho. Porém ela já teve experiências como essa que não foram tão boas. O que Joana pode fazer?",
    item_A:
      "Ela pode utilizar recursos digitais que prendam a criança durante a reunião e torcer para que ela fique durante todo o tempo.",
    item_B:
      "Ela pode encenar o evento futuro de diversas formas para que a criança tenha um repertório comportamental vasto diante da situação real.",
    item_C:
      "Ela pode usar de relaxantes naturais que controlam os impulsos da criança.",
    gabarito: "B",
    correcao:
      "Partindo de ‘histórias sociais’ encenadas ou contadas com imagens, é possível que a criança aumente seu repertório comportamental e utilize de formas alternativas de comportamentos diante da ‘história real’.",
  },
  {
    title: "Habilidades sociais",
    subTitle:
      "Riquelme de 9 anos tem muita dificuldade em compartilhar os brinquedos e acaba afastando outras crianças de seu convívio e até com seus familiares. Os pais dele querem uma resolução para isso, o que pode ser feito?",
    item_A:
      "Eles podem iniciar brincando com ele, sentar perto, tocar um brinquedo de maneira breve, pegar algum brinquedo com a mão e logo soltar, e assim fazer até que Riquelme aceite.",
    item_B:
      "Esses comportamentos precisam de um forte impulso do ambiente para a mudança. Os pais devem pegar todos os brinquedos que quiserem e brincar na frente dele até que ele aceite.",
    item_C:
      "Esses comportamentos são obsoletos e comuns ao desenvolvimento da criança na idade dele e deve ser aceito. Com o amadurecimento ele vai melhorando.",
    gabarito: "A",
    correcao:
      "O controle desses comportamentos deve acontecer de maneira sutil para que não haja crises no processo de dessensibilização. Então avance nos contatos de maneira lenta e sempre respeitando o tempo da criança.",
  },
  {
    title: "Habilidades sociais",
    subTitle:
      "George é um menino autista que adora brincar de cavalo com seu tio Eduardo. Entretanto, ele não consegue parar de brincar. Eduardo quando cansa ou precisa sair levanta e vai embora e George começa a gritar. O que pode ser feito para que esse comportamento inadequado diminua?",
    item_A:
      "Eduardo tem uma conduta correta, o que falta é George se acostumar com a situação.",
    item_B:
      "George precisa entender que Eduardo não pode ficar com ele o tempo todo e cabe aos pais falar isso a ele.",
    item_C:
      "Eduardo pode diminuir a empolgação com que se brinca, diminuindo a intensidade e a frequência da brincadeira. George vai percebendo e aceitando o fim.",
    gabarito: "C",
    correcao:
      "A diminuição da empolgação é uma forma de dessensibilização sistemática que funciona muito bem para diversas situações. A criança pode perceber o declínio do evento e assim aceitar a mudança do cenário.",
  },
  {
    title: "Habilidades sociais",
    subTitle:
      "Gael adora brincar com os brinquedos do parque na esquina de sua casa. Sua mãe o leva três dias na semana, mas ela não tem muita dificuldade em fazer o Gael aceitar que precisa voltar para casa. O que ela pode fazer para ajudar?",
    item_A:
      "Ela pode usar um cronômetro visível. Então se Gael sabe contar até 5, ela coloca o cronômetro em um lugar onde ela possa ficar vendo e determinar que após os cinco minutos eles irão para casa.",
    item_B:
      "Ela deve chamar ele para conversar quando o tempo acabar e dizer que ela não pode chorar se não ele vai perder algo que ele gosta.",
    item_C:
      "Gael vai sempre chorar, é impossível fazer uma criança autista largar uma atividade prazerosa sem ter birra.",
    gabarito: "A",
    correcao:
      "Atitudes como essa são úteis no controle de comportamentos socialmente inadequados e a criança vai tendo ainda um determinado domínio da gestão de suas atividades.",
  },
  {
    title: "AVD - atividades da vida diária",
    subTitle:
      "Cecília é dona de casa e tem três filhos de 3, 5 e 10 anos cada. O mais velho é autista e Cecília queria muito que ele arrumasse seu quarto para ajudar ela que já tem muitas atribuições durante o dia. Mas ele nunca arruma. O que Cecília pode fazer?",
    item_A:
      "Ela deve pedir todo dia para ele e deixar que ele faça do jeito dele e sem intervir. Mesmo que ele não faça nada, ela deve deixar o quarto do jeito que ele arrumou.",
    item_B:
      "Com imagens, Cecilia deve ensinar ele a arrumar a cama, depois a guardar os brinquedos e assim com todas as tarefas até que ela consiga arrumar todo o quarto.",
    item_C:
      "A Cecília pode fazer com que o filho autista assista ela fazendo e assim ela aprende e pode executar as tarefas o dia seguinte com maestria.",
    gabarito: "B",
    correcao:
      "A modelação do comportamento é o ensino de comportamentos específicos para se chegar a um objetivo. É importante reconhecer o sucesso das atividades da criança com algo que ela goste. Então, se ela aprendeu a arrumar a cama, reforce, se ela acordou no outro dia e arrumou a cama, reforce...",
  },
  {
    title: "Agenda diária",
    subTitle:
      "Mikael tem 12 anos e sabe tudo sobre passarinhos. Frequentemente ele deixa suas atividades da escola atrasadas e acaba atrasado nos conteúdos por sempre estudar sobre pássaros. O pai dele quer ajudar, mas não sabe como. O que fazer?",
    item_A:
      "O pai dele pode fazer as atividades e mostrar para ele depois como é. Assim ele não atrasa na escola e aprende sobre pássaros.",
    item_B:
      "A escola deve levar em consideração as particularidades da criança autista e usar de métodos que se adequem ao dia da criança. Assim, sendo melhor não passar as atividades de casa para o Mikael.",
    item_C:
      "Usar uma tabela de pontos. Sempre que o Mikael fizer as atividades corretamente e no tempo ele ganha um ponto e quando atingir 10 pontos ele pode visitar o zoológico para ver os pássaros.",
    gabarito: "C",
    correcao:
      "A tabela de pontos é uma tática muito efetiva na manutenção de comportamentos diários. Quando unida a algo que chama atenção, como imagens de pássaros, por exemplo, é premiada com algo da escolha do autista se torna muito efetiva.",
  },
  {
    title: "Agenda diária",
    subTitle:
      "Samuel é autista, tem 16 anos e é filho de Paulo e Alice. Samuel estuda em tempo integral e chega em casa às 17h enquanto seus pais chegam às 19h. Os pais pedem que ele tome banho, se alimente e faça a atividade de casa antes deles chegarem, mas frequentemente Samuel chega e vai jogar no celular. Como mediar isso?",
    item_A:
      "Paulo e Alice podem fazer uma tabela de antes e depois que consiste no desenvolvimento de tarefas como tomar banho, comer e estudar (antes) e após uma recompensa como jogar no celular até a hora do jantar (depois).",
    item_B:
      "Samuel tem 16 anos e deve fazer aquilo que julgar correto na hora que melhor for para ele.",
    item_C:
      "Cabe aos pais se organizarem melhor seus horários ou contratar um profissional de apoio para que não deixem o filho Samuel duas horas dentro de casa sem a companhia de um adulto.",
    gabarito: "A",
    correcao:
      "As tabelas de antes e depois consistem em reforçadores positivos imediatos. De um lado se coloca obrigações que devem ser feitas e do outro um ganho prazeroso para a criança. Assim ela consegue visualizar o que deve fazer e o que ganha quando faz.",
  },
  {
    title: "Comunicação verbal e não verbal",
    subTitle:
      "Rian é um menino autista de 08 anos com muitas questões sociais que são reflexos do TEA como também de comportamentos de birra comum a idade. Seus pais precisam entender a diferença da crise para a birra para poder agir de maneira adequada para a situação. Defina birra e crise.",
    item_A:
      "A birra são choros, gritos e outras atitudes intencionais originadas de alguma insatisfação. A crise no TEA é geralmente consequência de uma exposição a muitos estímulos que extrapolam os limites da criança.",
    item_B:
      "O comportamento de birra e a crise como sintoma do TEA são iguais nos seus comportamentos e o controle deve sempre ser com punições negativas, tirando algo dele.",
    item_C:
      "A birra é o choro, e outras atitudes involuntárias resultantes de uma certa insatisfação. A crise do TEA é geralmente consequência de muitos estímulos que ultrapassam os limites da criança.",
    gabarito: "A",
    correcao:
      "Para identificar de maneira mais simples se é birra ou crise, busque o motivo pelo qual a criança está emitindo aquele comportamento. A crise é uma forma de expressar algo que ela não consegue lidar.",
  },
  {
    title: "Habilidades sociais",
    subTitle:
      "Vitor tem uma família muito grande que sempre se reúne em festas para comemorar. Apesar de saber da sua sensibilidade auditiva, acabam falando alto, muitos de uma única vez e tem outras crianças que fazem barulho brincando. Vitor sempre tem crises nesses eventos. O que pode ser feito para ajudar ele?",
    item_A:
      "Levando em consideração os familiares dele e sua sensibilidade auditiva, é recomendado que seus pais não lhe levem mais.",
    item_B:
      "Os pais de Vitor devem prepará-lo para tal experiência o expondo a situações ainda mais estressoras para ele se acostumar.",
    item_C:
      "Os pais dele podem sempre que possível, buscar reservar um espaço para que ele possa ir quando os seus limites estiverem sendo atingidos.",
    gabarito: "C",
    correcao:
      "Espaços dentro de casa e em eventos com  pouco estímulo (levando em consideração cada sensibilidade) pode ser um recurso que, quando possível, pode ajudar muito no controle da crise sem privar a criança da socialização. Um outro recurso muito usado para a sensibilidade auditiva é o fone abafador.",
  },
  {
    title: "Comunicação verbal e não verbal",
    subTitle:
      "Milena tem 4 anos e sempre que pede água emite o som ‘aa’. Sua mãe quer ajudar a filha a falar a palavra toda, mas não sabe como. O que ela pode fazer?",
    item_A:
      "A mãe deve dar água somente quando a palavra for pronunciada de maneira correta, assim ela vai se esforçar mais.",
    item_B:
      "A mãe deve sempre pronunciar a palavra correta e pedir que a filha repita. Assim ela vai aprendendo mesmo que de início ela não fale corretamente.",
    item_C:
      "A mãe deve contratar uma fonoaudióloga somente. Os pais não devem intervir na comunicação de crianças autistas.",
    gabarito: "B",
    correcao:
      "A modelação do comportamento é o ensino de comportamentos específicos para se chegar a um objetivo. É importante reconhecer o sucesso das atividades da criança com algo que ela goste.",
  },
  {
    title: "Comunicação verbal e não verbal",
    subTitle:
      "Davi tem 14 anos e adora aviões, entretanto, sempre se refere a este como ‘aãozim’. Seu pai sempre o mimava quando ele falava assim por achar fofo. Entretanto, hoje quer que o filho fale correto. O que ele deve fazer?",
    item_A:
      "O pai deve sempre pronunciar a palavra correta e pedir que Davi repita, sempre reconhecendo seu avanço até que ele chegue à pronúncia correta.",
    item_B:
      "Davi tem 14 anos e é autista. Seu processo de aprendizagem foi comprometido pelo pai e hoje é tarde demais para lidar com isso.",
    item_C:
      "Davi tem total capacidade de se desenvolver em meio às situações sociais. Quando for exposto ao bullying vai pronunciar corretamente.",
    gabarito: "A",
    correcao:
      "A modelação do comportamento é o ensino de comportamentos específicos para se chegar a um objetivo. É importante reconhecer o sucesso das atividades da criança com algo que ela goste.",
  },
  {
    title: "AVD - atividades da vida diária",
    subTitle:
      "Levi gosta de usar a cueca sobre a calça mesmo sabendo que não se usa assim. A mãe sempre precisa brigar com ele até ele se vestir corretamente. O que deve ser feito nessas situações?",
    item_A: "A mãe está agindo de maneira completamente correta.",
    item_B:
      "Como ele já sabe se vestir corretamente, ela deve sempre reforçar ele quando o comportamento for correto e corrigir o errado de maneira discreta sem punições.",
    item_C:
      "A mãe deve conversar bastante com ele e sempre dar algo a ele para que ele faça o uso correto da cueca e o punir quando ele errar.",
    gabarito: "B",
    correcao:
      "O reforço por recompensa é muito positivo na manutenção de comportamentos. Aliado a essa descriminalização de reforço sempre ao comportamento correto e não ao inadequado é ainda mais efetivo.",
  },
  {
    title: "Habilidades sociais",
    subTitle:
      "Benta sempre chora quando sua mãe não lhe dá atenção e não brinca com ela ao invés de falar o que deseja. O que sua mãe pode fazer?",
    item_A:
      "O comportamento de birra deve ser ignorado e sempre reforçar o comportamento adequado quando este venha a acontecer para a mudança.",
    item_B:
      "Esses comportamentos são para chamar a atenção e são irrelevantes, sendo assim não preciso intervir.",
    item_C:
      "A mãe de Benta deve utilizar dos mesmos comportamentos da filha para que ela veja o quão desnecessário é.",
    gabarito: "A",
    correcao:
      "O reforço por recompensa é muito positivo na manutenção de comportamentos. Aliado a essa descriminalização de reforço sempre ao comportamento correto e não ao inadequado é ainda mais efetivo. Quando a birra comprometer a integridade da criança, se deve intervir levando segurança e afeto a ela. O abraço costuma ser efetivo. ",
  },
  {
    title: "AVD - atividades da vida diária",
    subTitle:
      "O Filho de Clarisse não consegue manter comportamentos adequados no desenvolvimento de suas atividades de vida diária como usar o banheiro na escola, por mais que sua mãe sempre o ensine em casa e ele consiga dentro do lar. O que Clarisse deve dizer ao professor para ajudar nessa adequação a escola?",
    item_A:
      "Sempre que ele não usar o banheiro de maneira adequada, deve fazer um constrangimento leve para que ele perceba o erro e corrija.",
    item_B:
      "Sempre que ele fizer algo adequado deve elogiá-lo muito e consequenciar seu comportamento com algo que ela goste, como escutar música.",
    item_C:
      "Impeça ele de usar o banheiro. Ele faz em casa quando sai e quando chega. Não precisa se preocupar.",
    gabarito: "B",
    correcao:
      "O reforço verbal e por recompensa é muito positivo na manutenção de comportamentos. É importante reconhecer o sucesso das atividades da criança com algo que ele realmente goste.",
  },
  {
    title: "Habilidades sociais",
    subTitle:
      "Vitória decidiu levar seu filho autista a todo lugar que ela vai, como no banco, mercado, farmácia, padaria…, utiliza muito transporte público e fala na dificuldade que é. Vitória está certa em sua atitude?",
    item_A:
      "Vitória está certa. A integração da criança com o meio traz à tona crises devido aos estímulos, o que ajuda ela a se acostumar com as crises.",
    item_B: "Vitória está errada. Ele só terá crises e não irá aprender nada.",
    item_C:
      "Vitória está certa. A integração da criança com o meio vai fazer com que ela seja capaz de controlar suas reações aos estímulos e generalizar esse comportamento por toda a vida.",
    gabarito: "C",
    correcao:
      "O aprendizado da vida é diferente para autistas, quanto antes inseridos nos meios sociais, mais seguros e preparados estarão no futuro.",
  },
  {
    title: "Antecipação de eventos",
    subTitle:
      "Antônio tem 12 anos e está no sétimo ano do ensino fundamental. Os professores são todos atenciosos e cuidadosos em suas práticas para que Antônio participe ativamente. Mas esta semana o professor de matemática faltou o que mudou a rotina da turma e gerou uma crise em Antônio. O que a escola pode fazer em situações como essa no futuro?",
    item_A:
      "Explicar o fato à criança e o que será feito no lugar da atividade, o auxiliará em sua reorganização e a ficar mais seguro com relação à nova rotina.",
    item_B:
      "A escola não pode permitir que o professor falte em hipótese alguma.",
    item_C:
      "Explicar o fato e mandar Antônio para casa é o mais correto. Sendo que sua casa é o lugar que mais lhe traz segurança.",
    gabarito: "A",
    correcao:
      "Mudanças na rotina acontecem. Neste momento é manter a calma e a criança ciente de tudo o que acontece e o que vai acontecer não lhe privando de nem uma vivência.",
  },
];

const QuestList = () => {
  const navigation = useNavigation();
  const [cards, setCards] = useState<QuestProps[]>([] as QuestProps[]);

  useEffect(() => {
    setCards(data);
  }, [1]);

  const search = useCallback((busca: string) => {
    if (busca.length === 0) setCards(data);
    const result = data.filter(
      (current) =>
        current.title.toLocaleLowerCase().includes(busca.toLocaleLowerCase()) ||
        current.subTitle.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
    );

    return setCards(result);
  }, []);

  return (
    <Container>
      <Header statusbar={false} background="Blue" title="Perguntas Temáticas" icons />
      <Background source={Img}>
        <Content>
          <SeachView>
            <SeachBox>
              <Icon name="md-search-sharp" />
              <SeachInput
                onChangeText={(e) => {
                  search(e);
                }}
                placeholder="Digite uma busca"
              />
            </SeachBox>
          </SeachView>
          <FlatList
            style={{ marginTop: 1 }}
            showsVerticalScrollIndicator={false}
            data={cards}
            renderItem={({ item }) => (
              <BttCard
                onPress={() =>
                  navigation.navigate("QuestScreen", { Quest: item })
                }
              >
                <CardView title={item.title} subtitle={item.subTitle} />
              </BttCard>
            )}
          />
        </Content>
      </Background>
    </Container>
  );
};

export default QuestList;
