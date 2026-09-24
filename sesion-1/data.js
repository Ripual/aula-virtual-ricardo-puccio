window.DATA = {
  concepts: [
    {
      id:'agentes', number:'01', title:'Agentes y mercado financiero', slide:4, audio:'assets/pista_agentes.m4a',
      short:'Quién dispone de recursos, quién los necesita y cómo el sistema puede conectarlos.',
      meaning:'El mercado financiero relaciona a agentes con excedentes de recursos con agentes que necesitan financiamiento. Familias, empresas, intermediarios y Estado participan con funciones distintas.',
      example:'Ana ahorra S/ 1,000 que no necesita utilizar hoy. Talleres Horizonte requiere financiar un equipo. El sistema crea mecanismos para que ese excedente pueda canalizarse hacia una necesidad de recursos.',
      error:'No confundir “superavitario” con “más importante” ni “deficitario” con “malo”. Los términos describen una posición temporal de recursos.',
      question:'Ana dispone de dinero que no usará hoy y Talleres Horizonte necesita financiar un equipo. ¿Cuál lectura describe mejor la relación?',
      options:[
        ['Ana es agente superavitario y Talleres Horizonte deficitario; el sistema puede canalizar recursos entre ambos.',1],
        ['Ana es agente deficitario y Talleres Horizonte superavitario; el banco solo registra los movimientos entre ambos.',0],
        ['Ana y Talleres Horizonte son superavitarios porque ambos participan en decisiones de ahorro e inversión financiera.',0],
        ['Ana y Talleres Horizonte son deficitarios porque cualquier participación financiera supone una necesidad de recursos.',0]
      ],
      correct:'La lectura correcta parte de la posición de recursos: Ana tiene un excedente temporal y Talleres Horizonte presenta una necesidad de financiamiento. El sistema financiero facilita el encuentro entre ambas posiciones.',
      application:'Antes de clasificar productos o instituciones, identifica primero quién tiene recursos disponibles y quién los necesita. Esa lectura ordena el resto del mapa financiero.',
      contrast:'Las otras opciones invierten o igualan posiciones que son distintas. Ahorrar no convierte a Ana en agente deficitario, y necesitar financiamiento no convierte a la empresa en superavitaria.',
      rule:'Superávit y déficit describen disponibilidad o necesidad de recursos en un momento determinado; no califican a los agentes como mejores o peores.',
      wrong1:'La clasificación depende de quién dispone de recursos hoy y quién requiere financiamiento. Revisa esa dirección antes de elegir de nuevo.',
      route:['Ubica primero a quien tiene el excedente: Ana.','Ubica después a quien necesita recursos: Talleres Horizonte.','Relaciona ambas posiciones mediante el sistema financiero.'],
      routeSummary:'La Ruta correcta identifica a Ana como agente superavitario y a Talleres Horizonte como agente deficitario.'
    },
    {
      id:'rutas', number:'02', title:'Rutas del dinero', slide:5, audio:'assets/pista_rutas.m4a',
      short:'Intermediación indirecta mediante una entidad financiera e intermediación directa mediante valores.',
      meaning:'En la intermediación indirecta una entidad financiera se ubica entre quien aporta recursos y quien recibe financiamiento. En la directa, inversionistas y emisores se conectan mediante el mercado de valores.',
      example:'Si Talleres Horizonte solicita un préstamo bancario usa intermediación indirecta. Si una empresa emite valores adquiridos por inversionistas, usa intermediación directa.',
      error:'No decidir por la palabra “inversión”. La clave es reconocer qué mecanismo conecta al proveedor de recursos con quien necesita financiamiento.',
      question:'Una empresa recibe un crédito de un banco que captó depósitos y otra obtiene recursos colocando valores a inversionistas. ¿Cómo se clasifican las dos rutas?',
      options:[
        ['La primera es intermediación indirecta y la segunda es intermediación directa mediante el mercado de valores.',1],
        ['La primera es intermediación directa y la segunda es intermediación indirecta mediante captación bancaria.',0],
        ['Ambas son intermediación indirecta porque en los dos casos existe una institución que organiza la operación financiera.',0],
        ['Ambas son intermediación directa porque finalmente los recursos provienen de personas o empresas con excedentes.',0]
      ],
      correct:'El préstamo bancario corresponde a intermediación indirecta porque el banco capta y coloca recursos. La emisión de valores corresponde a intermediación directa porque el inversionista participa mediante el mercado de valores.',
      application:'Cuando tengas dudas, busca al actor que conecta las dos puntas: si el banco transforma depósitos en crédito, la ruta es indirecta; si el inversionista adquiere valores del emisor, es directa.',
      contrast:'Que exista una institución organizadora no convierte automáticamente una operación en indirecta. Lo determinante es si una entidad financiera intermedia recursos o si el inversionista asume directamente el riesgo del valor.',
      rule:'La ruta se identifica por el mecanismo de conexión, no por la finalidad del financiamiento.',
      wrong1:'Observa quién entrega el financiamiento y qué instrumento lo conecta con la empresa. No te concentres solamente en que “hay dinero”.',
      route:['En el primer caso el banco capta y luego coloca recursos.','En el segundo caso el inversionista adquiere valores del emisor.','Compara quién asume la relación financiera principal en cada ruta.'],
      routeSummary:'La Ruta correcta es: préstamo bancario = intermediación indirecta; valores adquiridos por inversionistas = intermediación directa.'
    },
    {
      id:'guardianes', number:'03', title:'Guardianes del sistema', slide:8, audio:'assets/pista_guardianes.m4a',
      short:'MEF, BCRP, SBS y SMV cumplen funciones diferentes dentro del entorno financiero peruano.',
      meaning:'La sesión asocia al MEF con política fiscal y presupuesto, al BCRP con autoridad monetaria y estabilidad, a la SBS con supervisión de bancos, financieras y seguros, y a la SMV con el mercado de valores.',
      example:'Si la pregunta se refiere a supervisión de entidades financieras, la referencia es la SBS. Si se refiere al mercado de valores, la referencia es la SMV.',
      error:'No tratar a los cuatro organismos como si realizaran la misma función. Compartir el entorno financiero no significa tener la misma competencia.',
      question:'Si se debe identificar quién supervisa bancos, financieras y seguros y quién se vincula con el mercado de valores, ¿qué pareja corresponde?',
      options:[
        ['SBS para bancos, financieras y seguros; SMV para el mercado de valores y sus participantes.',1],
        ['BCRP para bancos, financieras y seguros; MEF para el mercado de valores y sus participantes.',0],
        ['SMV para bancos, financieras y seguros; SBS para el mercado de valores y sus participantes.',0],
        ['MEF para bancos, financieras y seguros; BCRP para el mercado de valores y sus participantes.',0]
      ],
      correct:'La SBS aparece en la sesión como supervisora de bancos, financieras y seguros. La SMV se vincula con la regulación del mercado de valores. Son ámbitos distintos y complementarios.',
      application:'Asociar cada organismo con su ámbito principal evita memorizar siglas sin entenderlas. Primero identifica la función; luego reconoce la institución.',
      contrast:'El BCRP se relaciona con autoridad monetaria y estabilidad, mientras que el MEF se vincula con política fiscal y presupuesto. Por eso no sustituyen a SBS o SMV en esta pregunta.',
      rule:'Una misma situación financiera puede involucrar varios organismos, pero cada uno interviene desde una función diferente.',
      wrong1:'Separa supervisión de entidades financieras, autoridad monetaria, política fiscal y mercado de valores. La respuesta correcta combina dos ámbitos diferentes.',
      route:['Supervisión de bancos, financieras y seguros: SBS.','Mercado de valores: SMV.','No confundas esas funciones con autoridad monetaria del BCRP ni política fiscal del MEF.'],
      routeSummary:'La Ruta correcta es SBS para supervisión financiera y SMV para el mercado de valores.'
    },
    {
      id:'motor', number:'04', title:'Motor bancario', slide:9, audio:'assets/pista_motor.m4a',
      short:'Captación, encaje y colocación; operaciones pasivas, activas y lógica del spread.',
      meaning:'El material resume el circuito bancario como captación de recursos, mantenimiento de una reserva o encaje y colocación mediante créditos. Desde la perspectiva del banco, el depósito es una obligación y el préstamo un derecho de cobro.',
      example:'Ana deposita S/ 1,000: el banco capta recursos y asume una obligación. Talleres Horizonte recibe un préstamo: el banco coloca recursos y adquiere un derecho de cobro.',
      error:'No clasificar por “entra dinero” o “sale dinero” solamente. La clasificación activa/pasiva se hace desde la naturaleza del derecho u obligación para el banco.',
      question:'Desde la perspectiva del banco, ¿qué opción combina correctamente la secuencia del motor y la clasificación de depósito y préstamo?',
      options:[
        ['Captación → encaje → colocación; el depósito es pasivo y el préstamo otorgado es activo para el banco.',1],
        ['Captación → colocación → encaje; el depósito es activo y el préstamo otorgado es pasivo para el banco.',0],
        ['Encaje → captación → colocación; el depósito y el préstamo otorgado son ambos activos para el banco.',0],
        ['Colocación → encaje → captación; el depósito y el préstamo otorgado son ambos pasivos para el banco.',0]
      ],
      correct:'La secuencia didáctica es captación, encaje y colocación. El depósito es una operación pasiva porque representa recursos recibidos y una obligación; el préstamo es activo porque representa un derecho de cobro.',
      application:'Esta relación permite comprender por qué captar más recursos no equivale automáticamente a prestar exactamente la misma cantidad y por qué las tasas de captación y colocación no son idénticas.',
      contrast:'Las otras opciones alteran la secuencia o invierten la naturaleza de las operaciones. El banco no tiene un derecho de cobro frente al depositante por el dinero que este le confía.',
      rule:'Primero sigue el recorrido del dinero; después clasifica cada relación desde la perspectiva de la entidad financiera.',
      wrong1:'No memorices por el sentido físico del dinero. Pregunta qué ocurre entre recibir depósitos y otorgar créditos y qué representa una obligación o un derecho para el banco.',
      route:['Los recursos ingresan mediante captación.','Antes de la colocación se mantiene la reserva o encaje correspondiente.','El depósito representa una obligación y el préstamo un derecho de cobro para el banco.'],
      routeSummary:'La Ruta correcta es captación → encaje → colocación; depósito pasivo y préstamo activo.'
    }
  ],
  simSteps:[
    {
      id:'captacion', title:'El dinero entra al sistema', slide:4, audio:'assets/pista_agentes.m4a',
      q:{
        text:'Ana deposita S/ 1,000 que no necesita utilizar de inmediato. ¿Qué concepto describe mejor este movimiento?',
        options:[
          ['Captación: la entidad recibe recursos del ahorrista y asume una obligación frente a ese cliente.',1],
          ['Colocación: la entidad entrega recursos a la ahorrista y genera un derecho de cobro frente a ella.',0],
          ['Intermediación directa: la ahorrista compra valores emitidos por una empresa mediante el mercado.',0],
          ['Operación activa: la entidad registra un préstamo otorgado a la ahorrista con recuperación futura.',0]
        ],
        correct:'El movimiento es captación porque los recursos ingresan desde una ahorrista hacia la entidad. El banco recibe dinero del público y asume una obligación frente al depositante.',
        application:'En el recorrido de Ana, este es el punto de entrada de recursos al circuito bancario.',
        contrast:'Colocación implica que el banco entrega financiamiento; intermediación directa supone valores; y una operación activa representa un derecho de cobro para la entidad.',
        rule:'Cuando el dinero entra desde el ahorrista hacia la entidad mediante un depósito, estamos ante captación.',
        wrong1:'Observa la dirección del flujo: el dinero sale de Ana e ingresa a la entidad. Todavía no existe un crédito otorgado.',
        route:['Identifica el origen del dinero: Ana.','Identifica el destino inmediato: la entidad financiera.','Relaciona ese ingreso de depósitos con la captación.'],
        routeSummary:'La Ruta correcta es captación.'
      }
    },
    {
      id:'encaje', title:'La reserva se ubica entre captar y prestar', slide:9, audio:'assets/pista_motor.m4a',
      q:{
        text:'Antes de canalizar recursos mediante créditos, el material muestra una reserva de liquidez obligatoria. ¿Qué concepto corresponde?',
        options:[
          ['Encaje o reserva: una parte de los recursos se mantiene como liquidez antes de considerar nuevas colocaciones.',1],
          ['Spread bancario: una parte de los depósitos se separa porque representa la ganancia automática de la entidad.',0],
          ['Intermediación directa: una parte de los depósitos se transforma en valores comprados por los ahorristas.',0],
          ['Operación activa: una parte de los depósitos se registra como préstamo aun cuando todavía no se ha colocado.',0]
        ],
        correct:'El concepto es encaje o reserva de liquidez. En la lógica de esta sesión se ubica entre captación y colocación y ayuda a comprender que no todo lo captado se interpreta como recursos inmediatamente prestables.',
        application:'La reserva rompe la idea simplista de que S/ 1 captado equivale automáticamente a S/ 1 colocado en ese mismo momento.',
        contrast:'El spread se relaciona con diferencias de condiciones o tasas; la intermediación directa pertenece al mercado de valores; y una operación activa exige un derecho de cobro ya originado.',
        rule:'Captar recursos y disponer de recursos para colocar no son exactamente lo mismo.',
        wrong1:'Busca el componente situado entre la entrada de depósitos y la salida mediante créditos. No es una tasa ni una ruta de mercado de valores.',
        route:['Ubica la secuencia captación → reserva → colocación.','Distingue liquidez retenida de ganancia bancaria.','Reconoce el concepto de encaje o reserva.'],
        routeSummary:'La Ruta correcta es encaje o reserva de liquidez.'
      }
    },
    {
      id:'colocacion', title:'El banco canaliza recursos hacia crédito', slide:9, audio:'assets/pista_motor.m4a',
      q:{
        text:'Talleres Horizonte recibe un préstamo bancario para adquirir un equipo. ¿Qué concepto describe la salida de recursos del banco?',
        options:[
          ['Colocación: el banco entrega financiamiento y genera un derecho de cobro frente a la empresa prestataria.',1],
          ['Captación: el banco recibe recursos de la empresa y asume una obligación de devolución frente a ella.',0],
          ['Encaje: el banco separa liquidez de la empresa antes de autorizar cualquier operación de financiamiento.',0],
          ['Emisión de valores: el banco coloca títulos de Talleres Horizonte entre inversionistas del mercado bursátil.',0]
        ],
        correct:'La entrega del préstamo corresponde a una colocación. El banco canaliza recursos hacia un tercero y, a cambio, adquiere un derecho de cobro bajo las condiciones pactadas.',
        application:'Aquí se completa la secuencia captación → encaje → colocación del escenario bancario base.',
        contrast:'Captación es entrada de depósitos; encaje es reserva; y emisión de valores pertenece a una ruta diferente de financiamiento.',
        rule:'Cuando la entidad entrega un préstamo a un tercero, está realizando una colocación.',
        wrong1:'Ahora el dinero sale de la entidad hacia quien necesita financiamiento. Pregunta qué concepto describe esa canalización de recursos.',
        route:['Identifica quién entrega el dinero: el banco.','Identifica quién lo recibe: Talleres Horizonte.','Relaciona el préstamo con la colocación.'],
        routeSummary:'La Ruta correcta es colocación.'
      }
    },
    {
      id:'clasificacion', title:'La perspectiva del banco cambia la clasificación', slide:10, audio:'assets/pista_motor.m4a',
      q:{
        text:'Desde la perspectiva del banco, ¿cómo se clasifican el depósito de Ana y el préstamo otorgado a Talleres Horizonte?',
        options:[
          ['El depósito es operación pasiva y el préstamo es operación activa porque representan obligación y derecho de cobro.',1],
          ['El depósito es operación activa y el préstamo es operación pasiva porque uno ingresa y el otro sale de la caja.',0],
          ['El depósito y el préstamo son operaciones activas porque ambos generan movimientos vinculados con recursos del banco.',0],
          ['El depósito y el préstamo son operaciones pasivas porque ambos crean compromisos financieros relacionados con clientes.',0]
        ],
        correct:'El depósito es pasivo para el banco porque representa recursos recibidos y una obligación frente al cliente. El préstamo es activo porque genera un derecho de cobro frente al prestatario.',
        application:'La clasificación se entiende mejor si preguntas qué derecho u obligación nace para la entidad, no si el dinero simplemente entra o sale.',
        contrast:'El sentido del flujo de caja no determina por sí solo si una operación es activa o pasiva. Esa es precisamente la trampa de los distractores.',
        rule:'Desde la perspectiva bancaria: depósito = obligación; préstamo = derecho de cobro.',
        wrong1:'No clasifiques solo por “entra” y “sale”. Cambia la pregunta: ¿el banco queda debiendo al cliente o queda con un derecho de cobro?',
        route:['Depósito recibido: el banco asume una obligación.','Préstamo otorgado: el banco adquiere un derecho de cobro.','Traduce obligación a pasiva y derecho de cobro a activa.'],
        routeSummary:'La Ruta correcta es depósito pasivo y préstamo activo.'
      }
    },
    {
      id:'directa', title:'La empresa cambia de ruta', slide:5, audio:'assets/pista_rutas.m4a',
      q:{
        text:'Talleres Horizonte decide no solicitar el préstamo y obtiene recursos mediante valores adquiridos por inversionistas. ¿Qué cambia?',
        options:[
          ['La empresa pasa a intermediación directa porque los inversionistas adquieren valores emitidos para financiarla.',1],
          ['La empresa mantiene intermediación indirecta porque cualquier financiamiento necesita una institución que lo organice.',0],
          ['La empresa pasa a captación bancaria porque los inversionistas depositan recursos antes de comprar los valores emitidos.',0],
          ['La empresa realiza una operación pasiva bancaria porque recibir recursos siempre crea una obligación frente a un banco.',0]
        ],
        correct:'La ruta cambia a intermediación directa: el financiamiento se obtiene mediante valores adquiridos por inversionistas y el banco deja de ser el intermediario que transforma depósitos en crédito.',
        application:'Este giro permite comparar dos formas de conectar a quienes tienen recursos con quienes necesitan financiamiento.',
        contrast:'Que existan SAB, bolsa u otros participantes no convierte la ruta en bancaria. El criterio sigue siendo quién asume la relación de inversión y mediante qué instrumento.',
        rule:'Valores adquiridos por inversionistas → intermediación directa.',
        wrong1:'Fíjate en el instrumento utilizado y en quién asume el riesgo de invertir. Ya no hay un préstamo bancario en el centro de la operación.',
        route:['El banco deja de otorgar el préstamo.','Aparecen valores emitidos por la empresa.','Los inversionistas adquieren esos valores y asumen el riesgo correspondiente.'],
        routeSummary:'La Ruta correcta es intermediación directa mediante el mercado de valores.'
      }
    }
  ],
  scenarios:{
    A:{
      title:'A · Aumentan los depósitos de los ahorristas', slide:4, audio:'assets/pista_agentes.m4a',
      changes:'Crece la captación y el banco administra un volumen mayor de recursos provenientes de ahorristas.',
      stays:'La ruta de Talleres Horizonte sigue siendo bancaria y la secuencia captación–reserva–colocación no desaparece.',
      implication:'Una mayor captación amplía recursos administrados, pero no demuestra por sí sola que el mismo incremento pueda convertirse en nuevos préstamos.',
      avoid:'No concluyas que cada sol adicional depositado se transforma automática e inmediatamente en colocación.',
      decision:'Antes de afirmar que la capacidad de colocar aumentó en la misma proporción, revisa reservas, demanda de crédito, evaluación de riesgo y otras restricciones relevantes.'
    },
    B:{
      title:'B · El banco mantiene una reserva de liquidez mayor', slide:9, audio:'assets/pista_motor.m4a',
      changes:'Aumenta la proporción de recursos que permanece como reserva dentro del escenario.',
      stays:'La empresa continúa usando intermediación indirecta y el banco sigue siendo el intermediario del financiamiento.',
      implication:'Con mayor reserva, una parte más grande de los recursos no se destina de inmediato a nuevas colocaciones. Captación y disponibilidad para prestar se separan aún más.',
      avoid:'No interpretes una reserva mayor como una “pérdida” automática: su función está vinculada con liquidez y funcionamiento prudente.',
      decision:'La lectura responsable compara captación, reserva y demanda de crédito antes de estimar cuánto puede canalizarse.'
    },
    C:{
      title:'C · Talleres Horizonte busca financiamiento mediante valores', slide:5, audio:'assets/pista_rutas.m4a',
      changes:'La empresa abandona el préstamo bancario y pasa a una ruta de intermediación directa mediante valores.',
      stays:'La existencia de ahorristas, bancos y otros agentes del sistema no desaparece; cambia la ruta específica elegida por la empresa.',
      implication:'El banco deja de ser el intermediario de ese financiamiento y los inversionistas asumen directamente el riesgo asociado a los valores adquiridos.',
      avoid:'No confundas “hay instituciones en el mercado” con “hay intermediación bancaria”. La presencia de bolsa o SAB no transforma la operación en préstamo.',
      decision:'Ahora debes observar emisor, inversionistas, valores y participantes del mercado, además del ámbito de la SMV.'
    },
    AB:{
      title:'A + B · Más depósitos y mayor reserva', slide:9, audio:'assets/pista_motor.m4a',
      changes:'Aumenta la captación, pero también aumenta la proporción retenida como reserva.',
      stays:'La empresa sigue financiándose mediante el banco; no cambia la naturaleza de la intermediación indirecta.',
      implication:'Los dos cambios pueden compensarse parcialmente. Mirar solo el volumen de depósitos puede ocultar cuánto queda realmente disponible para nuevas colocaciones.',
      avoid:'No supongas que más captación implica necesariamente un crecimiento igual de la capacidad de prestar.',
      decision:'Compara el aumento de recursos captados con la variación de la reserva y con la demanda efectiva de crédito.'
    },
    AC:{
      title:'A + C · Más captación, pero la empresa cambia al mercado de valores', slide:5, audio:null,
      changes:'El banco recibe más depósitos mientras Talleres Horizonte deja de demandar ese crédito bancario y busca inversionistas.',
      stays:'El banco sigue administrando depósitos de otros clientes; lo que cambia es la decisión de financiamiento de esta empresa.',
      implication:'Oferta de recursos bancarios y demanda de crédito de una empresa específica son variables relacionadas, pero no idénticas.',
      avoid:'No concluyas que una mayor captación obliga a Talleres Horizonte a financiarse mediante un préstamo.',
      decision:'Separa la posición de liquidez del banco de la elección financiera de la empresa antes de integrar ambos efectos.'
    },
    BC:{
      title:'B + C · Mayor reserva y cambio a intermediación directa', slide:8, audio:null,
      changes:'El banco eleva su reserva y, simultáneamente, Talleres Horizonte cambia del crédito bancario al mercado de valores.',
      stays:'Ambos fenómenos pertenecen al mismo sistema financiero, pero afectan mecanismos diferentes.',
      implication:'La política de liquidez del banco deja de ser el factor central para el financiamiento específico de Talleres Horizonte porque la empresa ya no solicita ese préstamo.',
      avoid:'No mezcles la función del BCRP o la reserva bancaria con la supervisión del mercado de valores como si fueran una sola cosa.',
      decision:'Distingue primero qué cambió en el banco y qué cambió en la ruta de la empresa; luego identifica qué organismos cobran relevancia en cada ámbito.'
    },
    ABC:{
      title:'A + B + C · Tres cambios simultáneos', slide:13, audio:null,
      changes:'Aumentan los depósitos, aumenta la reserva y Talleres Horizonte cambia hacia financiamiento directo mediante valores.',
      stays:'El sistema continúa conectando excedentes con necesidades de financiamiento, aunque cambien magnitudes y mecanismos.',
      implication:'Captación, liquidez y elección de ruta pueden moverse al mismo tiempo sin significar lo mismo. La interpretación debe separar cada efecto antes de integrarlos.',
      avoid:'No afirmes que el aumento de depósitos “financia” directamente a Talleres Horizonte cuando la empresa ya cambió al mercado de valores.',
      decision:'Reconstruye por separado el flujo bancario y la ruta de mercado de valores; solo después formula una lectura conjunta.'
    }
  },
  quiz:[
    {
      text:'Una empresa obtiene recursos mediante valores adquiridos por inversionistas. ¿Qué lectura describe mejor esa operación?',
      options:[
        ['Corresponde a intermediación directa porque el inversionista adquiere valores del emisor a través del mercado.',1],
        ['Corresponde a intermediación indirecta porque toda operación financiera necesita una entidad que ordene la transacción.',0],
        ['Corresponde a captación bancaria porque los recursos terminan ingresando a una organización que necesita financiamiento.',0],
        ['Corresponde a colocación bancaria porque la empresa recibe dinero y posteriormente deberá cumplir obligaciones financieras.',0]
      ],
      correct:'La operación es intermediación directa porque los inversionistas adquieren valores emitidos por la empresa. El banco no está transformando depósitos en crédito para ese financiamiento.',
      application:'Busca siempre el mecanismo que conecta al proveedor de recursos con quien necesita financiamiento.',
      contrast:'Los distractores confunden la existencia de participantes con intermediación bancaria o clasifican cualquier entrada de dinero como captación o colocación.',
      rule:'Valores del emisor adquiridos por inversionistas → intermediación directa.',
      wrong1:'En el caso no aparece un banco otorgando el crédito. Observa el instrumento utilizado por la empresa para obtener recursos.',
      route:['Identifica que existen valores emitidos.','Identifica que los inversionistas los adquieren.','Reconoce que el banco no intermedia ese financiamiento.'],
      routeSummary:'La Ruta correcta es intermediación directa mediante el mercado de valores.'
    },
    {
      text:'¿Cuál secuencia representa correctamente el motor bancario presentado en la sesión?',
      options:[
        ['Captación → encaje o reserva → colocación mediante créditos a terceros que necesitan financiamiento.',1],
        ['Colocación → captación de depósitos → encaje como resultado posterior de los créditos ya desembolsados.',0],
        ['Encaje → intermediación directa → captación de valores emitidos por empresas que buscan financiamiento.',0],
        ['Captación → emisión de valores → supervisión del mercado antes de conceder préstamos a los clientes.',0]
      ],
      correct:'La secuencia didáctica es captación, encaje o reserva y colocación. Primero ingresan recursos, luego se mantiene la reserva correspondiente y finalmente se canalizan recursos mediante créditos.',
      application:'Esta secuencia explica por qué recibir depósitos no equivale a prestar íntegramente todo lo captado.',
      contrast:'Las otras alternativas cambian el orden o introducen elementos del mercado de valores que no forman parte del motor bancario presentado.',
      rule:'Entrada de depósitos → reserva → salida mediante crédito.',
      wrong1:'Empieza por identificar de dónde ingresan los recursos y qué ocurre antes de que la entidad otorgue préstamos.',
      route:['Primero: captación.','Segundo: encaje o reserva.','Tercero: colocación.'],
      routeSummary:'La Ruta correcta es captación → encaje o reserva → colocación.'
    },
    {
      text:'¿Qué combinación asocia correctamente a dos organismos con las funciones presentadas en la sesión?',
      options:[
        ['BCRP con autoridad monetaria y estabilidad; SBS con supervisión de bancos, financieras y seguros.',1],
        ['SBS con autoridad monetaria y estabilidad; BCRP con supervisión de bancos, financieras y seguros.',0],
        ['SMV con autoridad monetaria y estabilidad; MEF con supervisión de bancos, financieras y seguros.',0],
        ['MEF con autoridad monetaria y estabilidad; SMV con supervisión de bancos, financieras y seguros.',0]
      ],
      correct:'El material vincula al BCRP con autoridad monetaria, emisión y estabilidad, y a la SBS con supervisión de entidades financieras y seguros.',
      application:'Relacionar función y organismo es más sólido que memorizar siglas aisladas.',
      contrast:'SMV se asocia al mercado de valores y MEF a política fiscal y presupuesto; por eso no reemplazan a BCRP o SBS en estas funciones.',
      rule:'BCRP = ámbito monetario; SBS = supervisión financiera.',
      wrong1:'Separa autoridad monetaria de supervisión de bancos y seguros. Son dos ámbitos distintos.',
      route:['Autoridad monetaria y estabilidad: BCRP.','Supervisión de bancos, financieras y seguros: SBS.'],
      routeSummary:'La Ruta correcta es BCRP para el ámbito monetario y SBS para la supervisión financiera.'
    },
    {
      text:'Un cliente deposita dinero en una cuenta de ahorros. Desde la perspectiva de la entidad financiera, ¿qué representa?',
      options:[
        ['Una operación pasiva porque la entidad recibe recursos y asume una obligación frente al cliente depositante.',1],
        ['Una operación activa porque el efectivo ingresa a la entidad y aumenta temporalmente sus recursos disponibles.',0],
        ['Una colocación porque el dinero depositado será convertido automáticamente en crédito para otro cliente.',0],
        ['Una intermediación directa porque el cliente entrega recursos sin comprar un producto crediticio de la entidad.',0]
      ],
      correct:'El depósito es una operación pasiva para la entidad porque representa recursos recibidos y una obligación frente al cliente.',
      application:'La clasificación depende de la naturaleza del derecho u obligación, no solo de si el dinero entra o sale de caja.',
      contrast:'Entrada de efectivo no significa automáticamente operación activa, y un depósito tampoco equivale por sí solo a una colocación.',
      rule:'Depósito recibido por el banco = obligación = operación pasiva.',
      wrong1:'Cambia la pregunta: ¿el banco queda con un derecho de cobro frente al cliente o con una obligación de responder por los recursos recibidos?',
      route:['El banco recibe recursos del cliente.','Surge una obligación frente al depositante.','Una obligación para el banco se clasifica como operación pasiva.'],
      routeSummary:'La Ruta correcta es operación pasiva.'
    },
    {
      text:'Un usuario realiza una transferencia desde su teléfono en lugar de acudir a una ventanilla. ¿Qué cambia principalmente?',
      options:[
        ['Cambia el canal de acceso al servicio, mientras la naturaleza financiera de la operación puede mantenerse igual.',1],
        ['Cambia la operación a intermediación directa porque el teléfono elimina a la institución financiera del proceso.',0],
        ['Cambia la operación a mercado de valores porque toda transacción digital se procesa mediante inversionistas externos.',0],
        ['Cambia la supervisión aplicable porque una operación móvil deja de formar parte de los servicios de la entidad.',0]
      ],
      correct:'La banca móvil modifica el canal de acceso y puede ampliar disponibilidad y alcance, pero no cambia automáticamente la naturaleza financiera de la operación realizada.',
      application:'Distingue “qué operación se realiza” de “por qué canal se accede”.',
      contrast:'Los distractores atribuyen al canal digital cambios de intermediación o supervisión que no se producen por el simple uso del teléfono.',
      rule:'Tecnología y canal pueden cambiar sin que cambie la lógica económica de la operación.',
      wrong1:'Piensa si una transferencia deja de ser transferencia solo porque se inicia desde el teléfono. Separa operación y canal.',
      route:['Identifica primero la operación financiera.','Identifica después el canal utilizado.','Comprueba si el canal altera realmente la naturaleza de la operación.'],
      routeSummary:'La Ruta correcta es que cambia el canal de atención, no necesariamente la lógica esencial del servicio.'
    },
    {
      text:'¿Qué regla inicial ayuda mejor a interpretar una situación del sistema financiero antes de memorizar instituciones y productos?',
      options:[
        ['Identificar quién tiene recursos, quién los necesita y qué mecanismo o ruta conecta a ambos participantes.',1],
        ['Memorizar todas las instituciones, productos y siglas antes de analizar quién aporta y quién necesita recursos.',0],
        ['Suponer que todo movimiento de dinero pertenece a intermediación indirecta hasta encontrar evidencia en contrario.',0],
        ['Concentrarse primero en la tasa de interés porque resume por sí sola el funcionamiento completo del sistema financiero.',0]
      ],
      correct:'La regla inicial es seguir la ruta del dinero: quién dispone de recursos, quién los necesita y qué mecanismo los conecta. Después resulta más fácil ubicar productos, instituciones y organismos.',
      application:'Esta forma de análisis reduce la memorización mecánica y obliga a comprender relaciones.',
      contrast:'Memorizar listas o asumir una ruta por defecto puede ocultar la lógica económica real del caso.',
      rule:'Actores primero, ruta después, instituciones y productos a continuación.',
      wrong1:'La sesión parte del circuito y no de una lista. Vuelve a las tres preguntas de la síntesis visual.',
      route:['¿Quién tiene recursos?','¿Quién necesita recursos?','¿Qué ruta conecta a ambos?'],
      routeSummary:'La Ruta correcta es identificar actores y ruta antes de memorizar productos o instituciones.'
    }
  ],
  resources:[
    {id:'ppt',type:'ppt',title:'PPT de la sesión',desc:'Presentación institucional original de Administración Bancaria.',thumb:'assets/thumbs/ppt.png'},
    {id:'pdf',type:'pdf',title:'Artículo de lectura',desc:'Artículo didáctico de la Sesión 1 con ejemplos y comprobación.',thumb:'assets/thumbs/pdf.png'},
    {id:'infographic',type:'image',title:'Infografía del sistema financiero',desc:'Síntesis visual de arquitectura, regulación y motor bancario.',thumb:'assets/thumbs/infografia.png'},
    {id:'video-main',type:'video',title:'Video explicativo',desc:'Introducción audiovisual completa sobre el sistema financiero peruano.',thumb:'assets/thumbs/video.png'},
    {id:'video-short',type:'video',title:'Microvideo · El viaje del dinero',desc:'Refuerzo audiovisual breve sobre captación, reserva y colocación.',thumb:'assets/thumbs/microvideo.png'},
    {id:'audio',type:'audio',title:'Resumen de audio',desc:'Conversación sobre rutas, organismos y funcionamiento del sistema.',thumb:'assets/thumbs/audio.png'}
  ]
};