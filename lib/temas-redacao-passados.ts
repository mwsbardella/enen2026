/**
 * Temas de redação do ENEM em anos anteriores + redações-modelo nota 1000.
 *
 * Conteúdo estático, versionado no git (fora do banco) — a página
 * app/redacao renderiza a aba "Temas anteriores" a partir daqui.
 *
 * As redações-modelo são textos AUTORAIS escritos como exemplo didático
 * no padrão de uma nota 1000 (dissertativo-argumentativo, 5 competências).
 * Não são cópias das redações oficiais dos participantes, que o INEP não
 * divulga na íntegra; servem para estudar estrutura, repertório e proposta
 * de intervenção.
 */

export type TemaPassado = {
  ano: number;
  tema: string;
  /** Eixo/campo temático dominante (para agrupar mentalmente). */
  eixo: string;
  /** Explicação do tema em markdown: o que a banca cobrava, recorte, riscos. */
  explicacao: string;
};

export type RedacaoModelo = {
  ano: number;
  tema: string;
  titulo: string;
  /** Redação completa em markdown (introdução, D1, D2, conclusão). */
  texto: string;
  /** Por que tiraria nota máxima, competência por competência (markdown). */
  comentario: string;
};

export const temasPassados: TemaPassado[] = [
  {
    ano: 2025,
    tema: "Perspectivas acerca do envelhecimento na sociedade brasileira",
    eixo: "População e direitos",
    explicacao: `Tema atualíssimo: o Brasil está **envelhecendo rápido**. O Censo 2022 mostrou que, pela primeira vez, há mais idosos (60+) do que crianças de até 14 anos. A banca pedia discutir como a sociedade encara e se prepara (ou não) para essa mudança.

**O que a banca cobrava:** olhar o envelhecimento por vários ângulos — pode ser perspectiva **negativa** (etarismo/preconceito etário, abandono, falta de acessibilidade, previdência) ou **positiva** (envelhecimento ativo, valorização da experiência). O bom texto reconhece a mudança demográfica e propõe garantir direitos e dignidade.

**Riscos de fuga:** falar só de "respeitar os mais velhos" de forma vaga, ou reduzir tudo à Previdência, sem discutir a **sociedade** e o preconceito.

**Repertórios:** o **etarismo** (preconceito por idade), o Estatuto do Idoso (Lei 10.741/2003), dados do Censo 2022 (IBGE) sobre a inversão da pirâmide etária, a Política Nacional do Idoso, o conceito de "envelhecimento ativo" da OMS.`,
  },
  {
    ano: 2024,
    tema: "Desafios para a valorização da herança africana no Brasil",
    eixo: "Cultura e direitos",
    explicacao: `Tema sobre a **herança africana** — a enorme contribuição dos povos africanos e afro-brasileiros à cultura, à língua, à religião, à culinária e à identidade do país — e por que ela ainda é desvalorizada.

**O que a banca cobrava:** reconhecer o legado africano como parte central da formação do Brasil e discutir o **racismo estrutural** e o apagamento histórico que desvalorizam essa herança, propondo caminhos para valorizá-la.

**Riscos de fuga:** falar só de escravidão/história do passado sem tocar na **valorização cultural** hoje, ou tratar como "racismo em geral" sem ligar à herança/cultura africana.

**Repertórios:** a Lei 10.639/2003 (obriga o ensino de história e cultura afro-brasileira nas escolas), o conceito de racismo estrutural (Silvio Almeida), a Lei Caó e a Lei do Racismo, o sincretismo religioso, a influência africana na língua e na música (samba, capoeira).`,
  },
  {
    ano: 2023,
    tema: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil",
    eixo: "Gênero e trabalho",
    explicacao: `O tema pedia discutir o **trabalho de cuidado** (cuidar de crianças, idosos, doentes e da casa) que recai historicamente sobre as mulheres e quase nunca é reconhecido como trabalho: não é remunerado, não entra no PIB e não é dividido igualmente dentro de casa.

**O que a banca cobrava:** identificar por que esse trabalho é *invisível* (cultura patriarcal, divisão sexual do trabalho) e propor como enfrentá-lo.

**Riscos de fuga:** falar de violência contra a mulher em geral ou só de mercado de trabalho formal, sem tocar no ponto central — o cuidado **não remunerado**.

**Repertórios que encaixam:** divisão sexual do trabalho (sociologia), dados do IBGE sobre horas semanais em afazeres domésticos, conceito de "dupla jornada", a filósofa Silvia Federici.`,
  },
  {
    ano: 2022,
    tema: "Desafios para a valorização de comunidades e povos tradicionais no Brasil",
    eixo: "Cultura e cidadania",
    explicacao: `Tema sobre **povos e comunidades tradicionais**: indígenas, quilombolas, ribeirinhos, ciganos, pescadores artesanais, entre outros. Pedia discutir por que sua cultura e seus territórios são desvalorizados e como valorizá-los.

**O que a banca cobrava:** reconhecer a diversidade desses grupos, os direitos previstos na Constituição de 1988 e a ameaça de apagamento cultural e territorial.

**Riscos de fuga:** falar só de indígenas (o tema é mais amplo) ou de "cultura brasileira" genérica.

**Repertórios:** artigo 231 da Constituição (terras indígenas), Convenção 169 da OIT, o conceito de "lugar de fala", a Política Nacional dos Povos e Comunidades Tradicionais (Decreto 6.040/2007).`,
  },
  {
    ano: 2021,
    tema: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil",
    eixo: "Cidadania e direitos",
    explicacao: `Tema técnico e específico: a falta de **registro civil** (certidão de nascimento) deixa milhões de brasileiros "invisíveis" para o Estado — sem CPF, sem acesso a benefícios, escola, saúde e voto.

**O que a banca cobrava:** relacionar documento a cidadania. Sem registro, a pessoa não existe juridicamente.

**Riscos de fuga:** confundir com "invisibilidade social" genérica (moradores de rua, preconceito) sem falar do **documento**.

**Repertórios:** conceito de cidadania (T. H. Marshall — direitos civis, políticos e sociais), Estatuto da Criança e do Adolescente, dados do IBGE sobre sub-registro, o filme *Central do Brasil*.`,
  },
  {
    ano: 2020,
    tema: "O estigma associado às doenças mentais na sociedade brasileira",
    eixo: "Saúde e sociedade",
    explicacao: `Tema sobre **saúde mental** e o preconceito (estigma) que impede pessoas de buscar tratamento e as isola socialmente.

**O que a banca cobrava:** discutir o estigma — o rótulo negativo, o "louco", a vergonha — e como ele agrava o sofrimento e afasta do cuidado.

**Riscos de fuga:** listar doenças ou falar só de "saúde" de forma genérica, sem tocar no **preconceito**.

**Repertórios:** o sociólogo Erving Goffman (obra *Estigma*), a luta antimanicomial e a Reforma Psiquiátrica (Lei 10.216/2001), os CAPS (Centros de Atenção Psicossocial), dados da OMS sobre depressão.`,
  },
  {
    ano: 2019,
    tema: "Democratização do acesso ao cinema no Brasil",
    eixo: "Cultura e acesso",
    explicacao: `Tema surpreendeu por ser cultural e "leve": o acesso desigual ao **cinema** no Brasil — salas concentradas em grandes cidades e shoppings, ingressos caros, pouca acessibilidade para pessoas com deficiência.

**O que a banca cobrava:** ver cinema como direito cultural e discutir barreiras geográficas, econômicas e de acessibilidade.

**Riscos de fuga:** falar de cinema como arte/história do cinema, sem discutir **acesso**.

**Repertórios:** cultura como direito (art. 215 da Constituição), o conceito de indústria cultural (Adorno), a Ancine, dados sobre municípios sem salas de cinema.`,
  },
  {
    ano: 2018,
    tema: "Manipulação do comportamento do usuário pelo controle de dados na internet",
    eixo: "Tecnologia e dados",
    explicacao: `Tema atualíssimo: como empresas coletam **dados** dos usuários e usam algoritmos para manipular comportamento (consumo, opinião, voto).

**O que a banca cobrava:** relacionar coleta de dados, algoritmos e perda de autonomia/privacidade do usuário.

**Riscos de fuga:** falar de "perigos da internet" em geral (fake news, cyberbullying) sem focar no **controle de dados**.

**Repertórios:** o escândalo Cambridge Analytica, a LGPD (Lei 13.709/2018, ainda recém-criada à época), o conceito de "bolha" (filtro-bolha), o documentário *O Dilema das Redes*, Zygmunt Bauman e a modernidade líquida.`,
  },
  {
    ano: 2017,
    tema: "Desafios para a formação educacional de surdos no Brasil",
    eixo: "Educação e inclusão",
    explicacao: `Tema específico de inclusão: as barreiras na **educação de pessoas surdas** — falta de intérpretes de Libras, escolas não bilíngues, formação de professores.

**O que a banca cobrava:** discutir inclusão real (não só matricular, mas ensinar em Libras) e o reconhecimento da Libras como língua.

**Riscos de fuga:** falar de "inclusão" genérica (todas as deficiências) sem focar em **surdos/Libras**.

**Repertórios:** Lei de Libras (Lei 10.436/2002), a Lei Brasileira de Inclusão (13.146/2015), o conceito de escola bilíngue, o direito à educação (art. 205 da Constituição).`,
  },
  {
    ano: 2016,
    tema: "Caminhos para combater a intolerância religiosa no Brasil",
    eixo: "Cultura e direitos",
    explicacao: `Tema sobre **intolerância religiosa**, com foco frequente no preconceito contra religiões de matriz africana (candomblé, umbanda).

**O que a banca cobrava:** discutir a laicidade do Estado, a liberdade de crença e as raízes do preconceito religioso.

**Riscos de fuga:** defender uma religião ou tratar o tema como "falta de fé".

**Repertórios:** Estado laico e liberdade religiosa (art. 5º da Constituição), a Declaração Universal dos Direitos Humanos, o sincretismo religioso brasileiro, casos de destruição de terreiros.`,
  },
  {
    ano: 2015,
    tema: "A persistência da violência contra a mulher na sociedade brasileira",
    eixo: "Gênero e direitos",
    explicacao: `Tema clássico e recorrente: por que a **violência contra a mulher** persiste mesmo com leis para combatê-la.

**O que a banca cobrava:** discutir causas culturais (machismo, cultura do estupro) e a distância entre a lei e a prática.

**Riscos de fuga:** só narrar casos de violência sem discutir a **persistência** (por que continua acontecendo).

**Repertórios:** Lei Maria da Penha (11.340/2006), Lei do Feminicídio (13.104/2015), Simone de Beauvoir ("não se nasce mulher, torna-se"), dados do Mapa da Violência.`,
  },
  {
    ano: 2014,
    tema: "Publicidade infantil em questão no Brasil",
    eixo: "Consumo e infância",
    explicacao: `Tema sobre a **propaganda dirigida a crianças** e seus efeitos (consumismo, obesidade, erotização precoce), já que a criança não tem maturidade para se defender do apelo publicitário.

**O que a banca cobrava:** discutir a vulnerabilidade infantil e a regulação da publicidade.

**Riscos de fuga:** falar de "consumismo" em geral sem focar na **criança**.

**Repertórios:** Código de Defesa do Consumidor, ECA, a Resolução 163/2014 do Conanda (que considerou abusiva a publicidade infantil), Zygmunt Bauman e a sociedade de consumo.`,
  },
  {
    ano: 2013,
    tema: "Efeitos da implantação da Lei Seca no Brasil",
    eixo: "Segurança e saúde",
    explicacao: `Tema sobre os **efeitos da Lei Seca** (tolerância zero para álcool ao dirigir) na redução de acidentes de trânsito.

**O que a banca cobrava:** avaliar efeitos positivos (menos mortes) e desafios (fiscalização, mudança de cultura).

**Repertórios:** Lei 11.705/2008 (Lei Seca) e Lei 12.760/2012, dados do DENATRAN/hospitais sobre acidentes, a noção de contrato social (respeito a regras coletivas).`,
  },
  {
    ano: 2012,
    tema: "O movimento imigratório para o Brasil no século XXI",
    eixo: "Migração e cidadania",
    explicacao: `Tema sobre a **imigração recente** para o Brasil (haitianos, venezuelanos, bolivianos, sírios) e como o país acolhe (ou não) esses migrantes.

**O que a banca cobrava:** discutir xenofobia, direitos dos migrantes e políticas de acolhimento.

**Repertórios:** a Lei de Migração (13.445/2017, posterior ao tema), a Declaração Universal dos Direitos Humanos, a Operação Acolhida, o conceito de refúgio.`,
  },
  {
    ano: 2011,
    tema: "Viver em rede no século XXI: os limites entre o público e o privado",
    eixo: "Tecnologia e sociedade",
    explicacao: `Tema pioneiro sobre **redes sociais** e a dissolução da fronteira entre o que é público e o que é privado na vida digital.

**O que a banca cobrava:** discutir exposição, privacidade e as consequências de viver "conectado".

**Repertórios:** Zygmunt Bauman (modernidade líquida), o conceito de panóptico (Foucault) aplicado à vigilância digital, a noção de privacidade como direito fundamental.`,
  },
];

export const redacoesModelo: RedacaoModelo[] = [
  {
    ano: 2025,
    tema: "Perspectivas acerca do envelhecimento na sociedade brasileira",
    titulo: "O país que envelhece de olhos fechados",
    texto: `O Censo Demográfico de 2022 revelou um marco na história do Brasil: pela primeira vez, o número de idosos superou o de crianças de até 14 anos. Esse dado, longe de ser apenas estatística, anuncia uma transformação profunda na estrutura do país. No entanto, a sociedade brasileira ainda encara o envelhecimento com preconceito e despreparo, tratando o idoso como um peso, e não como cidadão de plenos direitos. Tal postura decorre tanto da cultura do etarismo quanto da ausência de políticas públicas voltadas à população que envelhece.

Em primeiro lugar, é preciso reconhecer que o preconceito etário — o etarismo — molda a forma como o idoso é visto. Numa sociedade que cultua a juventude e a produtividade, envelhecer é associado a perda de valor, o que leva à exclusão do mercado de trabalho, ao isolamento e à infantilização do idoso. Como afirma o Estatuto do Idoso, é dever da família, da comunidade e do Estado assegurar dignidade a essa parcela da população; contudo, a prática cotidiana ainda contraria a lei. Assim, o etarismo transforma a experiência acumulada ao longo de uma vida em motivo de invisibilidade.

Além disso, a estrutura urbana e os serviços públicos não acompanham a mudança demográfica. Calçadas irregulares, transporte inadequado, filas e sistemas digitais sem acessibilidade dificultam a autonomia dos mais velhos, enquanto o sistema de saúde e a rede de cuidados permanecem insuficientes para uma população que vive cada vez mais tempo. Dessa forma, o Brasil envelhece "de olhos fechados": ignora que preparar-se para o envelhecimento é garantir direitos a todos os cidadãos, já que envelhecer é o destino comum de quem tem a sorte de viver.

Portanto, medidas são urgentes. O Ministério dos Direitos Humanos, em parceria com as prefeituras, deve promover campanhas educativas nas escolas e nas mídias que combatam o etarismo e valorizem a experiência dos idosos, a fim de desconstruir a ideia de que envelhecer é perder utilidade. Paralelamente, os governos municipais devem adaptar a infraestrutura urbana e os serviços de saúde às necessidades dessa população, por meio de investimento em acessibilidade e em centros de convivência, garantindo um envelhecimento ativo e digno. Só assim o país deixará de temer o próprio futuro.`,
    comentario: `**Por que tiraria 1000:**

- **Competência 1 (norma culta):** períodos bem articulados, vocabulário formal e pontuação correta.
- **Competência 2 (tema + repertório):** abre com o dado do **Censo 2022** (exatamente o texto motivador da prova) e usa o conceito de **etarismo** e o **Estatuto do Idoso** — repertório legitimado e ligado ao recorte.
- **Competência 3 (projeto de texto):** tese clara (preconceito + ausência de políticas) e dois parágrafos que desenvolvem cada causa sem contradição.
- **Competência 4 (coesão):** conectivos variados ("Em primeiro lugar", "Além disso", "Dessa forma", "Portanto", "Paralelamente").
- **Competência 5 (intervenção):** proposta completa — agente, ação, meio, finalidade e detalhamento — respeitando os direitos humanos.`,
  },
  {
    ano: 2024,
    tema: "Desafios para a valorização da herança africana no Brasil",
    titulo: "As raízes que o Brasil insiste em ignorar",
    texto: `Na obra *Racismo Estrutural*, o filósofo Silvio Almeida defende que o racismo não é um desvio individual, mas parte da própria organização da sociedade brasileira. Essa constatação ajuda a compreender por que a herança africana — presente na língua, na religião, na culinária e na música do país — ainda é tratada como cultura de segunda categoria. Valorizá-la é um desafio que esbarra no apagamento histórico e na falta de efetivação das leis de ensino, obstáculos que precisam ser enfrentados.

Em primeiro lugar, o apagamento histórico dificulta o reconhecimento desse legado. Durante séculos, a narrativa oficial reduziu a presença africana à escravidão, ignorando que povos africanos e afro-brasileiros construíram boa parte da identidade nacional — do samba à capoeira, do vocabulário às religiões de matriz africana. Esse silenciamento, herdeiro do racismo estrutural, faz com que manifestações afro-brasileiras sejam frequentemente marginalizadas ou alvo de intolerância, como ocorre com os terreiros de candomblé e umbanda. Nega-se, assim, a contribuição de quem ajudou a fundar o Brasil.

Além disso, as leis que poderiam reverter esse quadro não são plenamente aplicadas. A Lei 10.639/2003 tornou obrigatório o ensino de história e cultura afro-brasileira nas escolas, mas, na prática, muitas instituições ignoram a norma por falta de formação de professores e de material didático adequado. Como consequência, novas gerações crescem sem conhecer a profundidade da herança africana, o que perpetua o preconceito e a desvalorização. A lei, sozinha, não basta: sem efetivação, torna-se letra morta.

Portanto, medidas são necessárias. O Ministério da Educação, em parceria com as secretarias estaduais, deve garantir a aplicação da Lei 10.639/2003, por meio da formação continuada de professores e da produção de materiais didáticos sobre a cultura afro-brasileira, a fim de combater o apagamento histórico desde a escola. Além disso, o Ministério da Cultura deve financiar e divulgar manifestações de matriz africana — como festivais, terreiros e mestres da tradição oral —, valorizando essas raízes como patrimônio nacional. Assim, o Brasil poderá finalmente reconhecer as raízes que insiste em ignorar.`,
    comentario: `**Por que tiraria 1000:**

- **Competência 1:** domínio da norma culta, com períodos complexos bem construídos.
- **Competência 2:** repertório produtivo e no recorte (Silvio Almeida / racismo estrutural, **Lei 10.639/2003**, religiões de matriz africana) — foca a **valorização cultural**, não só a escravidão.
- **Competência 3:** tese anuncia os dois eixos (apagamento histórico + leis não aplicadas) e cada parágrafo desenvolve um deles com aprofundamento.
- **Competência 4:** encadeamento coeso ("Em primeiro lugar", "Além disso", "Como consequência", "Portanto", "Assim").
- **Competência 5:** intervenção completa e detalhada, com agentes, ações, meios e finalidade, sem ferir direitos humanos.`,
  },
  {
    ano: 2021,
    tema: "Invisibilidade e registro civil: garantia de acesso à cidadania no Brasil",
    titulo: "Existir no papel para existir de fato",
    texto: `No filme *Central do Brasil*, uma mulher escreve cartas para pessoas que mal sabem assinar o próprio nome, retrato de um país em que muitos vivem à margem dos registros oficiais. Essa imagem ilustra um problema concreto: milhões de brasileiros não possuem certidão de nascimento e, por isso, tornam-se invisíveis para o Estado. Sem o registro civil, o indivíduo é privado de direitos básicos, o que revela como um simples documento é a porta de entrada da cidadania.

Em primeiro lugar, é fundamental entender que a cidadania se concretiza por meio de documentos. Segundo o sociólogo T. H. Marshall, ser cidadão é possuir direitos civis, políticos e sociais; no entanto, nenhum desses direitos é acessível a quem não existe juridicamente. Sem certidão de nascimento, a pessoa não obtém CPF, não se matricula na escola, não acessa o sistema de saúde nem recebe benefícios sociais. Assim, a ausência do registro não é um detalhe burocrático, mas um muro que separa o indivíduo da própria condição de cidadão.

Além disso, o sub-registro atinge sobretudo as populações mais vulneráveis. Em regiões remotas, ribeirinhas ou de extrema pobreza, a distância dos cartórios, a desinformação e os custos indiretos afastam as famílias do registro, perpetuando um ciclo de exclusão que passa de geração em geração. Dessa forma, aqueles que mais precisam da proteção do Estado são justamente os que permanecem invisíveis a ele, o que aprofunda a desigualdade social brasileira.

Portanto, medidas são urgentes. O Estado, por meio do Poder Judiciário e das secretarias de assistência social, deve levar o registro civil às comunidades isoladas, com mutirões itinerantes e cartórios móveis em parceria com hospitais e escolas, a fim de garantir a certidão de nascimento a toda a população. Além disso, o Ministério da Educação deve promover campanhas informativas sobre a importância e a gratuidade do registro, para que nenhuma família deixe de reconhecer seus filhos perante a lei. Só assim todo brasileiro poderá existir no papel para, enfim, existir de fato.`,
    comentario: `**Por que tiraria 1000:**

- **Competência 1:** norma culta impecável e boa fluência.
- **Competência 2:** repertório certeiro no recorte — *Central do Brasil* e o conceito de cidadania de **T. H. Marshall** — ligados ao **documento/registro**, sem cair em "invisibilidade social" genérica.
- **Competência 3:** tese clara (documento = porta da cidadania) e dois argumentos encadeados (o que o registro destrava; quem sofre o sub-registro).
- **Competência 4:** coesão sólida entre e dentro dos parágrafos.
- **Competência 5:** intervenção completa (agentes, ações — mutirões e cartórios móveis —, meio, finalidade), respeitando os direitos humanos.`,
  },
  {
    ano: 2015,
    tema: "A persistência da violência contra a mulher na sociedade brasileira",
    titulo: "A herança que a lei ainda não venceu",
    texto: `"Ninguém nasce mulher: torna-se mulher", afirmou a filósofa Simone de Beauvoir para explicar que os papéis de gênero são construídos pela sociedade, e não pela natureza. Essa construção, no Brasil, historicamente colocou a mulher em posição de submissão, o que ajuda a entender por que a violência contra ela persiste mesmo diante de leis rigorosas. A permanência desse problema decorre da cultura machista enraizada e da falha na aplicação das medidas de proteção.

Em primeiro lugar, a violência de gênero tem raízes culturais profundas. Educados numa lógica machista, muitos homens ainda enxergam a mulher como propriedade, o que naturaliza o controle, a agressão e, no limite, o feminicídio. Essa mentalidade, transmitida de geração em geração, faz com que a violência seja muitas vezes tolerada ou silenciada, inclusive pela própria vítima, presa ao medo e à dependência. Assim, enquanto a cultura não mudar, nenhuma lei será plenamente eficaz.

Além disso, existe uma distância entre a lei e a prática. Embora o Brasil disponha da Lei Maria da Penha e da Lei do Feminicídio, a proteção falha na ponta: faltam delegacias especializadas, casas de acolhimento e agilidade no cumprimento de medidas protetivas. Como consequência, muitas mulheres que denunciam continuam desamparadas, e a sensação de impunidade encoraja novos agressores. Dessa forma, a lei existe no papel, mas não alcança plenamente a realidade de quem precisa dela.

Portanto, medidas são necessárias. O Poder Público, por meio das secretarias de segurança, deve ampliar a rede de delegacias da mulher e de casas de acolhimento, com equipes capacitadas e atendimento integral, a fim de proteger de fato as vítimas. Paralelamente, o Ministério da Educação deve inserir a educação de gênero nas escolas, por meio de projetos que ensinem o respeito e a igualdade desde a infância, para desconstruir a cultura machista na raiz. Só assim o Brasil vencerá a herança que a lei, sozinha, ainda não superou.`,
    comentario: `**Por que tiraria 1000:**

- **Competência 1:** domínio pleno da norma culta.
- **Competência 2:** repertório forte e pertinente — **Simone de Beauvoir**, Lei Maria da Penha, Lei do Feminicídio — sempre a serviço da tese da **persistência**.
- **Competência 3:** tese bem definida (cultura machista + falha na aplicação) com dois parágrafos coerentes e aprofundados.
- **Competência 4:** conectivos variados e boa progressão entre os parágrafos.
- **Competência 5:** intervenção completa e detalhada (agentes, ações, meios, finalidade), em respeito aos direitos humanos.`,
  },
  {
    ano: 2023,
    tema: "Desafios para o enfrentamento da invisibilidade do trabalho de cuidado realizado pela mulher no Brasil",
    titulo: "O peso invisível de quem sustenta o mundo",
    texto: `Na obra *O Calibã e a Bruxa*, a filósofa Silvia Federici demonstra que o trabalho doméstico e de cuidado, embora essencial para a manutenção da vida, foi historicamente naturalizado como "obrigação feminina" e, por isso, apagado como trabalho. No Brasil do século XXI, essa lógica permanece: milhões de mulheres cuidam de crianças, idosos e doentes sem remuneração, sem reconhecimento e sem divisão justa dessas tarefas. Trata-se de um problema estrutural, cujas raízes estão na divisão sexual do trabalho e na omissão de políticas públicas capazes de valorizar esse cuidado.

Em primeiro lugar, é preciso compreender que a invisibilidade desse trabalho decorre de uma construção cultural machista. Desde a infância, meninas são educadas para cuidar e meninos para prover, o que a socióloga acima citada chama de divisão sexual do trabalho. Como consequência, atividades como limpar, alimentar e cuidar deixam de ser vistas como trabalho e passam a ser tratadas como "amor" ou "instinto natural". Dados do IBGE reforçam o problema: as mulheres brasileiras dedicam, em média, o dobro de horas semanais que os homens aos afazeres domésticos, acumulando uma dupla jornada que compromete sua saúde, sua renda e sua autonomia.

Além disso, a ausência do Estado agrava essa realidade. Sem creches suficientes, sem políticas de cuidado a idosos e sem licenças igualitárias entre pais e mães, o peso do cuidado recai integralmente sobre a mulher, que muitas vezes precisa abandonar os estudos ou o emprego formal. Assim, a invisibilidade do trabalho de cuidado não é apenas um problema doméstico, mas um obstáculo à cidadania feminina, pois impede que essas mulheres exerçam plenamente seus direitos sociais e econômicos, perpetuando um ciclo de desigualdade de gênero.

Portanto, medidas são urgentes. O Ministério da Educação, em parceria com os municípios, deve ampliar a rede pública de creches e de atendimento a idosos, por meio de investimento federal, a fim de dividir socialmente a responsabilidade do cuidado. Paralelamente, o Ministério da Mulher deve promover campanhas educativas nas escolas e nas mídias, que desconstruam a ideia de que cuidar é tarefa exclusivamente feminina, incentivando a corresponsabilidade dentro dos lares. Só assim o Brasil deixará de ignorar o trabalho de quem, silenciosamente, sustenta o mundo.`,
    comentario: `**Por que tiraria 1000:**

- **Competência 1 (norma culta):** vocabulário preciso, sem coloquialismos, períodos bem pontuados e concordância impecável.
- **Competência 2 (tema + repertório):** repertório **produtivo e legitimado** já na introdução (Silvia Federici, *O Calibã e a Bruxa*) e retomado no desenvolvimento (divisão sexual do trabalho, dados do IBGE). Não foge do recorte: fala do cuidado **não remunerado**, exatamente o que a banca pedia.
- **Competência 3 (projeto de texto):** tese clara na introdução (problema estrutural + duas causas), cada parágrafo defende um argumento (D1: cultura machista; D2: ausência do Estado), sem contradição e com progressão.
- **Competência 4 (coesão):** conectivos variados abrindo os parágrafos ("Em primeiro lugar", "Além disso", "Portanto") e dentro deles ("Como consequência", "Assim", "Paralelamente").
- **Competência 5 (intervenção):** proposta **completa** — agente (MEC + municípios; Ministério da Mulher), ação (ampliar creches; campanhas), meio (investimento federal; escolas e mídias), finalidade (dividir a responsabilidade) e detalhamento — respeitando os direitos humanos.`,
  },
  {
    ano: 2018,
    tema: "Manipulação do comportamento do usuário pelo controle de dados na internet",
    titulo: "A liberdade em xeque na era dos algoritmos",
    texto: `O documentário *O Dilema das Redes* revela como as grandes plataformas digitais transformaram a atenção humana em mercadoria: cada clique, curtida e pausa na tela é registrado para alimentar algoritmos que, então, decidem o que cada usuário verá. No Brasil e no mundo, esse controle de dados deixou de ser mera coleta de informações e passou a ser uma ferramenta de manipulação do comportamento — do consumo à opinião política. Diante disso, é imprescindível discutir a fragilidade da autonomia individual e a insuficiência da educação digital para enfrentar o problema.

Em primeiro lugar, o modelo de negócio das plataformas incentiva a manipulação. Como explica o sociólogo Zygmunt Bauman em seu conceito de modernidade líquida, as relações contemporâneas são marcadas pela instabilidade e pelo estímulo constante ao consumo. Nesse cenário, os algoritmos exploram dados pessoais para prever desejos e induzir escolhas, criando os chamados "filtros-bolha", em que o usuário só recebe conteúdos que confirmam suas crenças. O escândalo da Cambridge Analytica, que usou dados de milhões de perfis para influenciar eleições, é a prova concreta de que essa manipulação ameaça inclusive a democracia.

Além disso, a maioria dos usuários desconhece como seus dados são coletados e usados. Ao aceitar termos de uso extensos sem lê-los, o cidadão entrega voluntariamente informações que serão exploradas comercialmente. Essa falta de educação digital, somada à recém-criada Lei Geral de Proteção de Dados, ainda pouco conhecida da população, mantém o usuário em posição vulnerável. Assim, sem informação e sem consciência crítica, o indivíduo perde a capacidade de decidir livremente, o que fere sua autonomia — um dos pilares da cidadania.

Portanto, medidas são necessárias. O Ministério da Educação deve inserir a educação midiática no currículo escolar, por meio de disciplinas que ensinem os jovens a proteger seus dados e a reconhecer conteúdos manipulados, a fim de formar usuários críticos. Além disso, a Autoridade Nacional de Proteção de Dados deve fiscalizar rigorosamente as plataformas, exigindo transparência sobre o uso das informações, para que a coleta de dados respeite a privacidade e a liberdade dos cidadãos. Dessa forma, será possível reequilibrar a relação entre usuário e tecnologia.`,
    comentario: `**Por que tiraria 1000:**

- **Competência 1:** norma culta dominada, com períodos complexos bem construídos e pontuação correta.
- **Competência 2:** repertórios variados e pertinentes (*O Dilema das Redes*, Bauman, Cambridge Analytica, LGPD), todos ligados ao **controle de dados** — sem escorregar para "perigos da internet" genéricos.
- **Competência 3:** tese anuncia os dois eixos (modelo de negócio + falta de educação digital) e cada parágrafo desenvolve um deles com aprofundamento e exemplo concreto.
- **Competência 4:** encadeamento coeso entre e dentro dos parágrafos ("Em primeiro lugar", "Além disso", "Assim", "Portanto", "Dessa forma").
- **Competência 5:** intervenção completa e detalhada — agente (MEC; ANPD), ação, meio, finalidade e detalhamento, sem ferir direitos humanos.`,
  },
];
