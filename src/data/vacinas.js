import { reactive } from 'vue'
const vacinas = reactive([
  {
    id: 1,
    nome: 'Hepatite B',
    doencas: 'Doenças evitadas: Hepatite B e Hepatite D',
    doses: 'Número de doses: 3',
    categoria: 'gestantes',
    descricao: 'A vacina contra a Hepatite B protege a gestante contra a infecção pelo vírus da hepatite B. Como o vírus da hepatite D depende da presença do vírus da hepatite B para causar infecção, a vacina também previne indiretamente a hepatite D. Além disso, reduz o risco de transmissão da doença da mãe para o bebê durante a gestação e o parto.',
  indicacao: 'Indicada para todas as gestantes que não tenham completado o esquema vacinal contra a hepatite B. O esquema é composto por três doses (0, 1 e 6 meses), podendo ser iniciado em qualquer fase da gestação.',
  efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação. Algumas gestantes podem apresentar febre baixa, dor de cabeça ou cansaço, que geralmente desaparecem em poucos dias.',
  contraindicacoes: 'Contraindicada para gestantes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a qualquer componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
      dataVacinacao: null
},
  {
    id: 2,
    nome: 'dTpa',
    doencas: 'Doenças evitadas: Difteria, tétano e coqueluche',
    doses: 'Número de doses: 1/gestação',
    categoria: 'gestantes',
     descricao: 'A vacina dTpa protege a gestante contra difteria, tétano e coqueluche. Além disso, os anticorpos produzidos pela mãe são transferidos para o bebê durante a gestação, oferecendo proteção contra a coqueluche nos primeiros meses de vida, período em que o recém-nascido ainda não completou seu esquema de vacinação.',
  indicacao: 'Indicada para todas as gestantes, preferencialmente entre a 20ª e a 36ª semana de cada gestação. Deve ser aplicada em todas as gestações, mesmo que a mulher já tenha recebido a vacina anteriormente.',
  efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, dor de cabeça, cansaço e dores musculares, geralmente leves e passageiros.',
  contraindicacoes: 'Contraindicada para gestantes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior da vacina ou a algum de seus componentes. A vacinação deve ser adiada em caso de doença febril aguda até a recuperação.',
    dataVacinacao: null
}
  ,
  {
    id: 3,
    nome: 'Influenza',
    doencas: 'Doenças evitadas: Gripe causada pelos vírus influenza',
    doses: 'Número de doses: 1/ano',
    categoria: 'gestantes',
     descricao: 'A vacina contra a influenza protege a gestante contra os principais vírus da gripe em circulação. A vacinação reduz o risco de complicações graves, internações e também oferece proteção ao bebê nos primeiros meses de vida por meio da transferência de anticorpos durante a gestação.',
  indicacao: 'Indicada para todas as gestantes, em qualquer fase da gestação, durante a campanha anual de vacinação contra a influenza.',
  efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação. Algumas pessoas podem apresentar febre baixa, dor de cabeça, cansaço ou dores musculares, que costumam desaparecer em poucos dias.',
  contraindicacoes: 'Contraindicada para gestantes que apresentaram reação alérgica grave (anafilaxia) após dose anterior da vacina ou a algum de seus componentes. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
     dataVacinacao: null
 },
  {
    id: 4,
    nome: 'COVID-19',
    doencas: 'Doenças evitadas: COVID-19',
    doses: 'Número de doses: 1/gestação',
    categoria: 'gestantes',
    descricao: 'A vacina contra a COVID-19 protege a gestante contra formas graves da doença, reduzindo o risco de internação, complicações e morte. Também contribui para a proteção do bebê por meio da transferência de anticorpos durante a gestação.',
  indicacao: 'Indicada para todas as gestantes, em qualquer fase da gestação, seguindo o calendário de vacinação vigente do Ministério da Saúde. A vacinação deve ser realizada mesmo por gestantes que já tiveram COVID-19.',
  efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, além de febre baixa, dor de cabeça, cansaço, calafrios e dores musculares, que geralmente desaparecem em poucos dias.',
  contraindicacoes: 'Contraindicada para gestantes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior da vacina ou a algum de seus componentes. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},

  {
    id: 5,
    nome: 'BCG',
    doencas: 'Doenças evitadas: Formas graves de tuberculose',
    doses: 'Número de doses: 1',
    categoria: 'infantil',
     descricao: 'A vacina BCG protege o bebê contra as formas mais graves da tuberculose, como a tuberculose miliar e a meningite tuberculosa. É uma das primeiras vacinas aplicadas após o nascimento.',
  indicacao: 'Indicada para recém-nascidos, preferencialmente nas primeiras 12 horas de vida ou, no máximo, até os 5 anos de idade, conforme orientação do calendário nacional de vacinação.',
  efeitos: 'É comum surgir uma pequena ferida no local da aplicação, que evolui para uma cicatriz. Também podem ocorrer vermelhidão, inchaço e formação de uma pequena crosta, que fazem parte da resposta normal à vacina.',
  contraindicacoes: 'Contraindicada para crianças com imunodeficiência grave, em tratamento com medicamentos imunossupressores ou que apresentem reação alérgica grave a componentes da vacina. A vacinação deve ser adiada em casos de doença febril aguda.',
     dataVacinacao: null
 },
  {
    id: 6,
    nome: 'Hepatite B',
    doencas: 'Doenças evitadas: Hepatite B',
    doses: 'Número de doses: 4',
    categoria: 'infantil',
     descricao: 'A vacina contra a Hepatite B protege a criança contra a infecção pelo vírus da hepatite B, prevenindo complicações como cirrose e câncer de fígado. Também reduz o risco de transmissão da doença da mãe para o bebê.',
  indicacao: 'Indicada para todos os recém-nascidos, com a primeira dose aplicada nas primeiras 24 horas de vida. As demais doses são administradas conforme o calendário infantil, por meio da vacina pentavalente.',
  efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Algumas crianças podem apresentar febre baixa, irritabilidade ou sonolência, que costumam desaparecer em poucos dias.',
  contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 7,
    nome: 'Pentavalente',
    doencas:
      'Doenças evitadas: Difteria, tétano, coqueluche, hepatite B e infecções por Haemophilus influenzae tipo b',
    doses: 'Número de doses: 3',
    categoria: 'infantil',
     descricao: 'A vacina pentavalente protege contra cinco doenças graves: difteria, tétano, coqueluche, hepatite B e infecções causadas pela bactéria Haemophilus influenzae tipo b (Hib), responsável por meningite, pneumonia e outras infecções graves.',
  indicacao: 'Indicada para crianças aos 2, 4 e 6 meses de idade, conforme o Calendário Nacional de Vacinação. Após esse esquema, são recomendados reforços com a vacina DTP.',
  efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação, além de febre baixa, irritabilidade, sonolência e diminuição do apetite. Esses sintomas costumam desaparecer em poucos dias.',
  contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a qualquer componente da vacina, ou que tiveram encefalopatia até sete dias após uma dose anterior contendo o componente contra coqueluche. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 8,
    nome: 'VIP (Poliomielite)',
    doencas: 'Doenças evitadas: Poliomielite',
    doses: 'Número de doses: 3',
    categoria: 'infantil',
    descricao: 'A vacina poliomielite (VIP) protege contra a poliomielite, uma doença viral que pode causar paralisia permanente, principalmente nos membros inferiores, além de complicações graves que podem levar à morte.',
indicacao: 'Indicada para crianças aos 2, 4 e 6 meses de idade, com reforços conforme o Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação. Algumas crianças podem apresentar febre baixa, irritabilidade ou sonolência, que costumam desaparecer em poucos dias.',
contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a qualquer componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 9,
    nome: 'Rotavírus Humano',
    doencas: 'Doenças evitadas: Diarreia grave causada por rotavírus',
    doses: 'Número de doses: 2',
    categoria: 'infantil',
    descricao: 'A vacina contra o rotavírus humano protege contra infecções causadas pelo rotavírus, principal responsável por diarreia grave, vômitos e desidratação em bebês e crianças pequenas.',
indicacao: 'Indicada para bebês aos 2 e 4 meses de idade, respeitando a idade máxima estabelecida pelo Calendário Nacional de Vacinação para a aplicação de cada dose.',
efeitos: 'Os efeitos colaterais mais comuns são irritabilidade, febre baixa, diarreia leve ou vômitos. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para bebês que tiveram reação alérgica grave (anafilaxia) após uma dose anterior ou a qualquer componente da vacina, histórico de invaginação intestinal ou imunodeficiência grave. Em caso de doença febril aguda ou diarreia intensa, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 10,
    nome: 'Pneumocócica 10-valente',
    doencas:
      'Doenças evitadas: Pneumonia, meningite, otite e outras doenças causadas pelo pneumococo',
    doses: 'Número de doses: 3',
    categoria: 'infantil',
    descricao: 'A vacina pneumocócica 10-valente protege contra infecções causadas pela bactéria Streptococcus pneumoniae (pneumococo), que pode causar doenças graves como pneumonia, meningite, otite e outras infecções.',
indicacao: 'Indicada para crianças aos 2 e 4 meses de idade, com uma dose de reforço aos 12 meses, conforme o Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação, além de febre baixa, irritabilidade, sonolência ou diminuição do apetite. Esses sintomas costumam desaparecer em poucos dias.',
contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 11,
    nome: 'Meningocócica C',
    doencas: 'Doenças evitadas: Meningite e outras doenças causadas pelo meningococo C',
    doses: 'Número de doses: 3',
    categoria: 'infantil',
    descricao: 'A vacina meningocócica C protege contra infecções causadas pela bactéria Neisseria meningitidis do sorogrupo C, que pode causar meningite e outras doenças graves, como a meningococcemia.',
indicacao: 'Indicada para crianças aos 3 e 5 meses de idade, com uma dose de reforço aos 12 meses, conforme o Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação, além de febre baixa, irritabilidade, sonolência e perda de apetite. Esses sintomas geralmente desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a qualquer componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 12,
    nome: 'Febre Amarela',
    doencas: 'Doenças evitadas: Febre amarela',
    doses: 'Número de doses: 2',
    categoria: 'infantil',
    descricao: 'A vacina contra a febre amarela protege a criança contra a infecção causada pelo vírus da febre amarela, uma doença que pode causar febre alta, hemorragias, comprometimento do fígado e dos rins, podendo levar à morte em casos graves.',
indicacao: 'Indicada para crianças aos 9 meses de idade, com uma dose de reforço aos 4 anos, conforme o Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, dor de cabeça, cansaço e dores musculares. Esses sintomas costumam surgir nos primeiros dias após a vacinação e desaparecem em pouco tempo.',
contraindicacoes: 'Contraindicada para crianças com alergia grave (anafilaxia) a componentes da vacina, imunodeficiência grave ou condições específicas de saúde que impeçam o uso da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 13,
    nome: 'Tríplice Viral (SCR)',
    doencas: 'Doenças evitadas: Sarampo, caxumba e rubéola',
    doses: 'Número de doses: 2',
    categoria: 'infantil',
    descricao: 'A vacina tríplice viral (SCR) protege contra três doenças virais: sarampo, caxumba e rubéola. Essas doenças podem causar complicações graves, como pneumonia, meningite, surdez, infertilidade e problemas durante a gestação.',
indicacao: 'Indicada para crianças aos 12 meses de idade, com uma segunda dose aos 15 meses, conforme o Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são febre baixa, manchas avermelhadas na pele, mal-estar, dor ou vermelhidão no local da aplicação. Esses sintomas podem aparecer alguns dias após a vacinação e geralmente desaparecem espontaneamente.',
contraindicacoes: 'Contraindicada para crianças com imunodeficiência grave, gestantes e pessoas que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 14,
    nome: 'Tetraviral (SCRV)',
    doencas: 'Doenças evitadas: Sarampo, caxumba, rubéola e varicela',
    doses: 'Número de doses: 1',
    categoria: 'infantil',
    descricao: 'A vacina tetraviral protege contra quatro doenças virais: sarampo, caxumba, rubéola e varicela (catapora). Ela ajuda a prevenir complicações dessas doenças, como pneumonia, meningite, infecções graves e problemas decorrentes da varicela.',
indicacao: 'Indicada para crianças aos 15 meses de idade, como dose de reforço após a primeira dose da tríplice viral, conforme o Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são febre baixa, manchas ou vermelhidão na pele, dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer mal-estar e irritabilidade, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para crianças com imunodeficiência grave, gestantes e pessoas que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 15,
    nome: 'Varicela',
    doencas: 'Doenças evitadas: Catapora',
    doses: 'Número de doses: 2',
    categoria: 'infantil',
    descricao: 'A vacina contra a varicela protege contra a catapora, uma doença causada pelo vírus varicela-zóster, que pode causar febre, manchas e bolhas na pele. A vacinação reduz o risco de formas graves da doença e suas complicações, como infecções bacterianas, pneumonia e problemas neurológicos.',
indicacao: 'Indicada para crianças aos 15 meses de idade, como segunda dose da vacina contra varicela, conforme o Calendário Nacional de Vacinação. Também pode ser indicada para crianças que não tenham sido vacinadas anteriormente, conforme orientação de saúde.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação, além de febre baixa e surgimento de pequenas lesões semelhantes à catapora em alguns casos. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para crianças com imunodeficiência grave, gestantes e pessoas que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 16,
    nome: 'Hepatite A',
    doencas: 'Doenças evitadas: Hepatite A',
    doses: 'Número de doses: 1',
    categoria: 'infantil',
    descricao: 'A vacina contra a hepatite A protege contra a infecção causada pelo vírus da hepatite A, que pode provocar inflamação no fígado, febre, cansaço, náuseas, vômitos e icterícia (pele e olhos amarelados).',
indicacao: 'Indicada para crianças aos 15 meses de idade, conforme o Calendário Nacional de Vacinação. Também pode ser indicada para pessoas de grupos específicos conforme orientação dos serviços de saúde.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça e mal-estar. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 17,
    nome: 'DTP',
    doencas: 'Doenças evitadas: Difteria, tétano e coqueluche',
    doses: 'Número de doses: 2 reforços',
    categoria: 'infantil',
    descricao: 'A vacina DTP protege contra três doenças graves: difteria, tétano e coqueluche. Essas doenças podem causar complicações respiratórias, neurológicas e até levar à morte, principalmente em crianças pequenas.',
indicacao: 'Indicada para crianças a partir dos 15 meses de idade como dose de reforço após o esquema inicial da vacina pentavalente, com reforço também aos 4 anos de idade, conforme o Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação, febre baixa, irritabilidade, sonolência e mal-estar. Esses sintomas geralmente desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina, ou que tiveram encefalopatia nos primeiros sete dias após uma dose anterior contendo o componente contra coqueluche. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 18,
    nome: 'Influenza',
    doencas: 'Doenças evitadas: Gripe causada pelos vírus influenza',
    doses: 'Número de doses: 1/ano',
    categoria: 'infantil',
    descricao: 'A vacina contra a influenza protege a criança contra os principais vírus da gripe em circulação, reduzindo o risco de complicações como pneumonia, internações e agravamento da doença.',
indicacao: 'Indicada para crianças a partir dos 6 meses de idade, conforme o Calendário Nacional de Vacinação e as campanhas anuais de vacinação contra a influenza. Crianças que recebem a vacina pela primeira vez podem necessitar de duas doses com intervalo definido pelo serviço de saúde.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça, irritabilidade e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 19,
    nome: 'COVID-19',
    doencas: 'Doenças evitadas: COVID-19',
    doses: 'Número de doses: Conforme calendário vigente',
    categoria: 'infantil',
    descricao: 'A vacina contra a COVID-19 protege crianças contra formas graves da doença, reduzindo o risco de complicações, hospitalizações e óbitos causados pelo vírus SARS-CoV-2.',
indicacao: 'Indicada para crianças conforme a faixa etária e o calendário de vacinação vigente do Ministério da Saúde. O número de doses pode variar de acordo com a idade, histórico de vacinação e condições de saúde da criança.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça, irritabilidade e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para crianças que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},

  {
    id: 20,
    nome: 'Hepatite B',
    doencas: 'Doenças evitadas: Hepatite B',
    doses: 'Número de doses: 3',
    categoria: 'adolescentes',
    descricao: 'A vacina contra a Hepatite B protege adolescentes contra a infecção causada pelo vírus da hepatite B, prevenindo complicações como cirrose, insuficiência hepática e câncer de fígado.',
indicacao: 'Indicada para adolescentes que não foram vacinados anteriormente ou que não completaram o esquema vacinal. O esquema recomendado é de 3 doses, aplicadas conforme o calendário de vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço, dor de cabeça ou mal-estar, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para adolescentes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 21,
    nome: 'dT (Dupla Adulto)',
    doencas: 'Doenças evitadas: Difteria e tétano',
    doses: 'Número de doses: Reforço a cada 10 anos',
    categoria: 'adolescentes',
    descricao: 'A vacina dT (Dupla Adulto) protege adolescentes contra duas doenças graves: difteria e tétano. O tétano pode causar fortes contrações musculares e complicações respiratórias, enquanto a difteria pode causar problemas respiratórios e cardíacos.',
indicacao: 'Indicada para adolescentes que completaram o esquema básico da infância ou que precisam completar a vacinação. É recomendada uma dose de reforço a cada 10 anos após o esquema completo.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço e mal-estar, que geralmente desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para adolescentes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 22,
    nome: 'dTpa',
    doencas: 'Doenças evitadas: Difteria, tétano e coqueluche',
    doses: 'Número de doses: 1 (para gestantes ou situações especiais)',
    categoria: 'adolescentes',
    descricao: 'A vacina dTpa protege adolescentes contra três doenças graves: difteria, tétano e coqueluche. Além de proteger o adolescente, ajuda a reduzir a transmissão da coqueluche para bebês e pessoas mais vulneráveis.',
indicacao: 'Indicada para adolescentes conforme orientação do calendário vacinal e em situações específicas, como atualização do esquema de vacinação ou necessidade de reforço. A quantidade de doses depende do histórico vacinal de cada pessoa.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço, dor de cabeça e dores musculares, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para adolescentes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina, ou que tiveram encefalopatia após uma dose anterior contendo o componente contra coqueluche. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 23,
    nome: 'Meningocócica ACWY',
    doencas: 'Doenças evitadas: Meningites e infecções causadas pelos sorogrupos A, C, W e Y',
    doses: 'Número de doses: 1',
    categoria: 'adolescentes',
    descricao: 'A vacina meningocócica ACWY protege adolescentes contra infecções causadas pela bactéria Neisseria meningitidis dos sorogrupos A, C, W e Y, que podem causar meningite e meningococcemia, doenças graves que podem evoluir rapidamente.',
indicacao: 'Indicada para adolescentes de 11 a 14 anos de idade, conforme o Calendário Nacional de Vacinação. A vacina é aplicada como uma dose de reforço ou dose única, de acordo com o histórico vacinal.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, dor de cabeça, cansaço e mal-estar, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para adolescentes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 24,
    nome: 'HPV Quadrivalente',
    doencas:
      'Doenças evitadas: HPV, câncer do colo do útero, câncer de pênis, ânus, orofaringe e verrugas genitais',
    doses: 'Número de doses: 2',
    categoria: 'adolescentes',
    descricao: 'A vacina HPV Quadrivalente protege contra infecções causadas pelos tipos 6, 11, 16 e 18 do papilomavírus humano (HPV). Ela ajuda a prevenir verrugas genitais e vários tipos de câncer relacionados ao HPV, como câncer do colo do útero, pênis, ânus e orofaringe.',
indicacao: 'Indicada para adolescentes conforme o Calendário Nacional de Vacinação, principalmente entre 9 e 14 anos de idade. O esquema recomendado é de 2 doses com intervalo de 6 meses entre elas.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, dor de cabeça, cansaço, náuseas e mal-estar, geralmente leves e temporários.',
contraindicacoes: 'Contraindicada para adolescentes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. A vacinação deve ser adiada em caso de doença febril aguda.',
    dataVacinacao: null

},
  {
    id: 25,
    nome: 'Tríplice Viral (SCR)',
    doencas: 'Doenças evitadas: Sarampo, caxumba e rubéola',
    doses: 'Número de doses: 2',
    categoria: 'adolescentes',
    descricao: 'A vacina tríplice viral (SCR) protege contra três doenças virais: sarampo, caxumba e rubéola. Essas doenças podem causar complicações graves, como pneumonia, meningite, surdez, infertilidade e problemas durante a gestação.',
indicacao: 'Indicada para adolescentes que não possuem o esquema vacinal completo. São recomendadas 2 doses para garantir proteção adequada, conforme o Calendário Nacional de Vacinação e o histórico vacinal.',
efeitos: 'Os efeitos colaterais mais comuns são febre baixa, manchas avermelhadas na pele, dor, vermelhidão ou inchaço no local da aplicação. Também podem ocorrer mal-estar e aumento temporário dos gânglios, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para adolescentes com imunodeficiência grave, gestantes e pessoas que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 26,
    nome: 'Febre Amarela',
    doencas: 'Doenças evitadas: Febre amarela',
    doses: 'Número de doses: 1 (ou conforme histórico vacinal)',
    categoria: 'adolescentes',
    descricao: 'A vacina contra a febre amarela protege adolescentes contra a infecção causada pelo vírus da febre amarela, uma doença que pode causar febre alta, hemorragias, comprometimento do fígado e dos rins, podendo evoluir para formas graves e até levar à morte.',
indicacao: 'Indicada para adolescentes que ainda não foram vacinados ou que não possuem comprovação de vacinação. Geralmente é recomendada uma dose única, conforme o Calendário Nacional de Vacinação e a situação vacinal do adolescente.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, dor de cabeça, cansaço e dores musculares. Esses sintomas costumam aparecer nos primeiros dias após a vacinação e desaparecem em pouco tempo.',
contraindicacoes: 'Contraindicada para adolescentes com alergia grave (anafilaxia) a componentes da vacina, imunodeficiência grave, ou condições específicas de saúde que impeçam o uso da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 27,
    nome: 'Influenza',
    doencas: 'Doenças evitadas: Gripe causada pelos vírus influenza',
    doses: 'Número de doses: 1/ano',
    categoria: 'adolescentes',
    descricao: 'A vacina contra a influenza protege adolescentes contra os principais vírus da gripe em circulação, reduzindo o risco de complicações, agravamento da doença e transmissão para pessoas mais vulneráveis.',
indicacao: 'Indicada para adolescentes conforme os grupos prioritários e campanhas anuais de vacinação contra a influenza, seguindo as recomendações do Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para adolescentes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 28,
    nome: 'COVID-19',
    doencas: 'Doenças evitadas: COVID-19',
    doses: 'Número de doses: Conforme calendário vigente',
    categoria: 'adolescentes',
    descricao: 'A vacina contra a COVID-19 protege adolescentes contra formas graves da doença, reduzindo o risco de complicações, hospitalizações e óbitos causados pelo vírus SARS-CoV-2. Também contribui para a redução da transmissão do vírus na comunidade.',
indicacao: 'Indicada para adolescentes conforme a faixa etária, condições de saúde e calendário de vacinação vigente do Ministério da Saúde. O número de doses pode variar de acordo com a idade, histórico vacinal e orientações atuais.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça, calafrios e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para adolescentes que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},

  {
    id: 29,
    nome: 'Hepatite B',
    doencas: 'Doenças evitadas: Hepatite B',
    doses: 'Número de doses: 3',
    categoria: 'adultos',
    descricao: 'A vacina contra a Hepatite B protege adultos contra a infecção causada pelo vírus da hepatite B, prevenindo complicações como cirrose, insuficiência hepática e câncer de fígado.',
indicacao: 'Indicada para adultos que não foram vacinados anteriormente ou que não possuem comprovação do esquema vacinal completo. O esquema recomendado é de 3 doses, aplicadas conforme o calendário de vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço, dor de cabeça e mal-estar, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para adultos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 30,
    nome: 'dT (Dupla Adulto)',
    doencas: 'Doenças evitadas: Difteria e tétano',
    doses: 'Número de doses: Reforço a cada 10 anos',
    categoria: 'adultos',
    descricao: 'A vacina dT (Dupla Adulto) protege adultos contra duas doenças graves: difteria e tétano. O tétano pode causar fortes contrações musculares e complicações respiratórias, enquanto a difteria pode provocar problemas respiratórios e cardíacos.',
indicacao: 'Indicada para adultos que completaram o esquema básico de vacinação ou que precisam iniciar/completar a vacinação. É recomendada uma dose de reforço a cada 10 anos após o esquema completo.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço e mal-estar, que geralmente desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para adultos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 31,
    nome: 'dTpa',
    doencas: 'Doenças evitadas: Difteria, tétano e coqueluche',
    doses: 'Número de doses: 1 (para gestantes ou situações especiais)',
    categoria: 'adultos',
    descricao: 'A vacina dTpa protege adultos contra três doenças graves: difteria, tétano e coqueluche. Além de proteger a própria pessoa, ajuda a reduzir a transmissão da coqueluche para bebês e pessoas mais vulneráveis.',
indicacao: 'Indicada para adultos que precisam atualizar o esquema vacinal ou conforme recomendações específicas de saúde. Pode ser recomendada para pessoas que convivem com bebês, profissionais de saúde e em situações definidas pelo calendário vacinal.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço, dor de cabeça e dores musculares, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para adultos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina, ou que tiveram encefalopatia após uma dose anterior contendo o componente contra coqueluche. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 32,
    nome: 'Febre Amarela',
    doencas: 'Doenças evitadas: Febre amarela',
    doses: 'Número de doses: 1 (ou conforme histórico vacinal)',
    categoria: 'adultos',
    descricao: 'A vacina contra a febre amarela protege adultos contra a infecção causada pelo vírus da febre amarela, uma doença que pode causar febre alta, hemorragias, comprometimento do fígado e dos rins, podendo evoluir para formas graves e até levar à morte.',
indicacao: 'Indicada para adultos que vivem ou viajam para áreas com recomendação de vacinação e que não possuem comprovação de vacinação anterior. Geralmente é recomendada uma dose única, conforme orientação do Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, dor de cabeça, cansaço e dores musculares. Esses sintomas costumam surgir nos primeiros dias após a vacinação e desaparecem em pouco tempo.',
contraindicacoes: 'Contraindicada para adultos com alergia grave (anafilaxia) a componentes da vacina, imunodeficiência grave, gestantes ou pessoas com condições específicas de saúde que impeçam o uso da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 33,
    nome: 'Tríplice Viral (SCR)',
    doencas: 'Doenças evitadas: Sarampo, caxumba e rubéola',
    doses: 'Número de doses: 2',
    categoria: 'adultos',
    descricao: 'A vacina tríplice viral (SCR) protege adultos contra três doenças virais: sarampo, caxumba e rubéola. Essas doenças podem causar complicações graves, como pneumonia, meningite, surdez, infertilidade e problemas durante a gestação.',
indicacao: 'Indicada para adultos que não possuem comprovação de vacinação ou que não completaram o esquema vacinal. O número de doses depende da idade e do histórico vacinal, podendo ser recomendadas até 2 doses para garantir a proteção adequada.',
efeitos: 'Os efeitos colaterais mais comuns são febre baixa, manchas avermelhadas na pele, dor, vermelhidão ou inchaço no local da aplicação. Também podem ocorrer mal-estar e aumento temporário dos gânglios, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para adultos com imunodeficiência grave, gestantes e pessoas que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 34,
    nome: 'Influenza',
    doencas: 'Doenças evitadas: Gripe causada pelos vírus influenza',
    doses: 'Número de doses: 1/ano',
    categoria: 'adultos',
    descricao: 'A vacina contra a influenza protege adultos contra os principais vírus da gripe em circulação, reduzindo o risco de complicações, agravamento da doença, internações e transmissão para pessoas mais vulneráveis.',
indicacao: 'Indicada para adultos conforme os grupos prioritários e campanhas anuais de vacinação contra a influenza, seguindo as recomendações do Calendário Nacional de Vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para adultos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 35,
    nome: 'COVID-19',
    doencas: 'Doenças evitadas: COVID-19',
    doses: 'Número de doses: Conforme calendário vigente',
    categoria: 'adultos',
    descricao: 'A vacina contra a COVID-19 protege adultos contra formas graves da doença, reduzindo o risco de complicações, hospitalizações e óbitos causados pelo vírus SARS-CoV-2. Também contribui para a redução da transmissão do vírus na comunidade.',
indicacao: 'Indicada para adultos conforme a faixa etária, condições de saúde e calendário de vacinação vigente do Ministério da Saúde. O número de doses pode variar de acordo com o histórico vacinal e as orientações atuais.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça, calafrios e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para adultos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 36,
    nome: 'Pneumocócica 23-valente',
    doencas: 'Doenças evitadas: Pneumonia, meningite e outras doenças causadas pelo pneumococo',
    doses: 'Número de doses: Conforme indicação médica',
    categoria: 'adultos',
    descricao: 'A vacina pneumocócica 23-valente protege adultos contra infecções causadas pela bactéria Streptococcus pneumoniae (pneumococo), que pode causar doenças graves como pneumonia, meningite, sepse e outras infecções.',
indicacao: 'Indicada principalmente para adultos pertencentes a grupos de risco, como pessoas com doenças crônicas, imunossuprimidas ou conforme recomendação dos serviços de saúde. O número de doses depende da condição de saúde e da avaliação médica.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço, dor de cabeça e mal-estar, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para adultos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},

  {
    id: 37,
    nome: 'Influenza',
    doencas: 'Doenças evitadas: Gripe causada pelos vírus influenza',
    doses: 'Número de doses: 1/ano',
    categoria: 'idosos',
    descricao: 'A vacina contra a influenza protege idosos contra os principais vírus da gripe em circulação, reduzindo o risco de complicações graves como pneumonia, internações e agravamento de doenças já existentes.',
indicacao: 'Indicada para todas as pessoas com 60 anos ou mais, sendo recomendada uma dose anual durante as campanhas de vacinação contra a influenza.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para idosos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 38,
    nome: 'COVID-19',
    doencas: 'Doenças evitadas: COVID-19',
    doses: 'Número de doses: Conforme calendário vigente',
    categoria: 'idosos',
    descricao: 'A vacina contra a COVID-19 protege idosos contra formas graves da doença, reduzindo o risco de complicações, hospitalizações e óbitos causados pelo vírus SARS-CoV-2. A vacinação é especialmente importante nessa faixa etária devido ao maior risco de evolução grave da infecção.',
indicacao: 'Indicada para pessoas com 60 anos ou mais, conforme o calendário de vacinação vigente do Ministério da Saúde. O número de doses e os intervalos podem variar de acordo com a idade, histórico vacinal e orientações atuais.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, cansaço, dor de cabeça, calafrios e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para idosos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 39,
    nome: 'dT (Dupla Adulto)',
    doencas: 'Doenças evitadas: Difteria e tétano',
    doses: 'Número de doses: Reforço a cada 10 anos',
    categoria: 'idosos',
    descricao: 'A vacina dT (Dupla Adulto) protege idosos contra duas doenças graves: difteria e tétano. O tétano pode causar fortes contrações musculares e complicações respiratórias, enquanto a difteria pode causar problemas respiratórios e cardíacos.',
indicacao: 'Indicada para idosos que não possuem o esquema vacinal completo ou que precisam atualizar a vacinação. Após o esquema completo, é recomendado reforço a cada 10 anos para manter a proteção.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço e mal-estar, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para idosos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 40,
    nome: 'Hepatite B',
    doencas: 'Doenças evitadas: Hepatite B',
    doses: 'Número de doses: 3',
    categoria: 'idosos',
    descricao: 'A vacina contra a Hepatite B protege idosos contra a infecção causada pelo vírus da hepatite B, prevenindo complicações como cirrose, insuficiência hepática e câncer de fígado. A vacinação é importante mesmo nessa fase da vida, pois a infecção pode evoluir de forma mais grave.',
indicacao: 'Indicada para idosos que não foram vacinados anteriormente ou que não possuem comprovação do esquema vacinal completo. O esquema recomendado é de 3 doses, aplicadas conforme o calendário de vacinação.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço, dor de cabeça e mal-estar, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para idosos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 41,
    nome: 'Febre Amarela',
    doencas: 'Doenças evitadas: Febre amarela',
    doses: 'Número de doses: 1 (quando indicada)',
    categoria: 'idosos',
    descricao: 'A vacina contra a febre amarela protege idosos contra a infecção causada pelo vírus da febre amarela, uma doença que pode causar febre alta, hemorragias, comprometimento do fígado e dos rins, podendo evoluir para formas graves e até levar à morte.',
indicacao: 'Indicada para idosos que vivem ou viajam para áreas com recomendação de vacinação e que não possuem comprovação de vacinação anterior. A indicação deve ser avaliada individualmente por um profissional de saúde, considerando idade, condições de saúde e riscos de exposição.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão ou inchaço no local da aplicação, febre baixa, dor de cabeça, cansaço e dores musculares. Esses sintomas geralmente são leves e desaparecem em poucos dias.',
contraindicacoes: 'Contraindicada para idosos com alergia grave (anafilaxia) a componentes da vacina, imunodeficiência grave ou condições específicas de saúde que aumentem o risco de efeitos adversos. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 42,
    nome: 'Pneumocócica 23-valente',
    doencas: 'Doenças evitadas: Pneumonia, meningite e outras doenças causadas pelo pneumococo',
    doses: 'Número de doses: 1 ou conforme indicação',
    categoria: 'idosos',
    descricao: 'A vacina pneumocócica 23-valente protege idosos contra infecções causadas pela bactéria Streptococcus pneumoniae (pneumococo), que pode causar doenças graves como pneumonia, meningite, sepse e outras infecções. A vacinação ajuda a reduzir o risco de complicações, especialmente em pessoas com maior vulnerabilidade.',
indicacao: 'Indicada para idosos, principalmente aqueles com maior risco de doenças pneumocócicas, conforme recomendação dos serviços de saúde. O esquema de doses pode variar de acordo com o histórico vacinal e as condições de saúde da pessoa.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer febre baixa, cansaço, dor de cabeça e mal-estar, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para idosos que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null

},
  {
    id: 43,
    nome: 'Herpes Zóster',
    doencas: 'Doenças evitadas: Herpes-zóster (cobreiro) e suas complicações',
    doses: 'Número de doses: 2',
    categoria: 'idosos',
    descricao: 'A vacina contra o Herpes Zóster protege idosos contra a reativação do vírus varicela-zóster, o mesmo vírus responsável pela catapora. A doença pode causar dor intensa, lesões na pele e uma complicação chamada neuralgia pós-herpética, que provoca dor prolongada mesmo após a cura das lesões.',
indicacao: 'Indicada principalmente para pessoas com 50 anos ou mais, conforme recomendações de saúde e disponibilidade da vacina. O esquema recomendado é de 2 doses, com intervalo definido pelo serviço de saúde.',
efeitos: 'Os efeitos colaterais mais comuns são dor, vermelhidão e inchaço no local da aplicação. Também podem ocorrer cansaço, dor de cabeça, febre, calafrios e dores musculares, geralmente leves e passageiros.',
contraindicacoes: 'Contraindicada para pessoas que apresentaram reação alérgica grave (anafilaxia) após uma dose anterior ou a algum componente da vacina. Em caso de doença febril aguda, recomenda-se adiar a vacinação até a recuperação.',
    dataVacinacao: null
},
])
export { vacinas }
