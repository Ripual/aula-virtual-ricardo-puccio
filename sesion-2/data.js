window.DATA = {
  concepts: [
    {
      id:'credito', number:'01', title:'Crédito: confianza con evidencia', slide:3, audio:'assets/pista_credito.m4a',
      short:'Entregar valor hoy implica confiar en una promesa futura, pero también medir el riesgo antes de decidir.',
      meaning:'El crédito parte de la confianza, pero no puede descansar solo en una promesa. La entidad necesita evidencia sobre voluntad de pago, capacidad real, respaldo y condiciones que podrían alterar el resultado.',
      example:'María solicita S/ 20,000 para un horno. Su buen historial suma confianza, pero la entidad todavía debe revisar flujo, otras deudas y estabilidad del negocio antes de definir monto y condiciones.',
      error:'Confundir confianza con aprobación automática. Un cliente puede ser honesto y, aun así, no tener suficiente capacidad para asumir una cuota nueva.',
      question:'María ofrece una garantía aceptable, pero sus ventas cambian mucho de un mes a otro. ¿Qué lectura representa mejor una evaluación responsable del crédito?',
      options:[
        ['La entidad debe combinar confianza con evidencia sobre voluntad, capacidad, entorno y respaldo antes de asumir el riesgo.',1],
        ['La garantía permite prescindir del análisis de flujo y comportamiento porque cubre suficientemente cualquier escenario adverso.',0],
        ['La promesa formal de pago basta para aprobar el crédito, aunque el negocio muestre ingresos variables y obligaciones vigentes.',0],
        ['El monto solicitado determina por sí solo el riesgo de la operación, sin que sea necesario revisar el perfil completo del cliente.',0]
      ],
      correct:'La evaluación responsable integra varias fuentes de evidencia. La garantía ayuda a mitigar una pérdida eventual, pero la decisión debe considerar si María quiere pagar, puede pagar y cómo podrían afectar las condiciones externas.',
      application:'Cuando analices una solicitud, evita buscar una sola señal que “autorice” el crédito. Conviene reunir evidencias que expliquen tanto la posibilidad de pago como los riesgos que podrían deteriorarla.',
      contrast:'Los distractores convierten una garantía, una promesa o el monto solicitado en criterio único. Eso rompe la lógica integral que desarrolla la sesión.',
      rule:'Crédito sano = confianza + información + capacidad + respaldo + seguimiento.',
      wrong1:'Vuelve a la idea central: una garantía protege si algo falla, pero no genera por sí sola el dinero con el que se pagará cada cuota.',
      route:['Primero identifica la voluntad de cumplir.','Después verifica de dónde saldrá la cuota.','Luego revisa respaldo y condiciones externas antes de definir el riesgo.'],
      routeSummary:'La Ruta correcta integra confianza y evidencia; no aprueba el crédito por una sola señal.'
    },
    {
      id:'evaluacion', number:'02', title:'Evaluación: las 5C del crédito', slide:4, audio:'assets/pista_5c.m4a',
      short:'Carácter, capital, capacidad, condiciones y colateral funcionan como un ecosistema, no como una lista aislada.',
      meaning:'Las 5C ayudan a ordenar el análisis: Carácter pregunta si el cliente quiere cumplir; Capacidad, si puede hacerlo; Capital observa respaldo propio; Condiciones mira el entorno; y Colateral actúa como red de seguridad si lo demás falla.',
      example:'Panadería Horizonte puede tener buen carácter y activos propios, pero si después de costos, gastos y otras deudas casi no queda flujo, la capacidad limita el crédito que puede sostener.',
      error:'Tomar el colateral como sustituto de la capacidad. La garantía reduce una pérdida potencial; el pago normal debería provenir del flujo.',
      question:'Un cliente tiene una garantía valiosa, pero después de gastos y deudas casi no le queda flujo disponible para una nueva cuota. ¿Qué interpretación es más sólida?',
      options:[
        ['La capacidad de pago es débil y la garantía no reemplaza el flujo necesario para atender normalmente la obligación.',1],
        ['El colateral compensa la falta de flujo porque una garantía suficiente convierte cualquier solicitud en una operación viable.',0],
        ['El capital patrimonial vuelve innecesario revisar obligaciones mensuales, siempre que los activos superen el monto solicitado.',0],
        ['El carácter deja de ser relevante cuando existe una garantía porque el pago depende principalmente del valor de los bienes.',0]
      ],
      correct:'La capacidad de pago sigue siendo central. Una garantía puede reducir la pérdida si ocurre incumplimiento, pero no debe convertirse en la fuente normal de pago de las cuotas.',
      application:'En una evaluación real, separa claramente “puede pagar” de “hay algo que ejecutar si no paga”. Son preguntas diferentes y ambas importan.',
      contrast:'Los distractores usan capital o colateral para borrar el análisis de capacidad y carácter. La sesión insiste en que las 5C se complementan.',
      rule:'Capacidad = fuente normal de pago; colateral = red de seguridad de última instancia.',
      wrong1:'Pregunta de dónde saldrá cada cuota. Si la respuesta depende de vender o ejecutar la garantía, estás confundiendo capacidad con colateral.',
      route:['Revisa el flujo disponible después de gastos y deudas.','Identifica que la garantía no produce la cuota mensual.','Concluye que la capacidad debe sostener el pago normal.'],
      routeSummary:'La Ruta correcta prioriza la capacidad de pago y trata el colateral como respaldo, no como sustituto.'
    },
    {
      id:'cobranza', number:'03', title:'Cobranza: recuperar antes de reaccionar tarde', slide:8, audio:'assets/pista_cobranza.m4a',
      short:'Otorgamiento, seguimiento, cobranza y reinversión forman un mismo circuito de recuperación del valor.',
      meaning:'La cobranza no empieza cuando el atraso ya es grave. El seguimiento temprano permite detectar señales, comprender la causa y escoger una respuesta proporcional antes de que la mora se deteriore.',
      example:'María pagó varias cuotas y luego sus ventas cayeron. Si la entidad detecta el problema pronto, todavía puede evaluar una solución; si espera meses, las alternativas se reducen y el costo de recuperar aumenta.',
      error:'Pensar que cobrar mejor corrige automáticamente un crédito mal evaluado. La calidad de la cartera comienza desde la originación y continúa con seguimiento.',
      question:'Panadería Horizonte acumula 20 días de atraso y María responde al contacto explicando una caída temporal de ventas. ¿Qué enfoque es más coherente con la sesión?',
      options:[
        ['Formalizar el contacto, verificar la causa y buscar regularización dentro de la etapa y políticas aplicables antes de escalar más.',1],
        ['Pasar directamente a acciones judiciales porque cualquier atraso demuestra que el cliente ya no tiene voluntad de cumplir.',0],
        ['Suspender el seguimiento por su buen historial anterior y esperar a que el cliente regularice espontáneamente la obligación.',0],
        ['Divulgar el incumplimiento a terceros cercanos para aumentar presión, siempre que la deuda continúe pendiente de pago.',0]
      ],
      correct:'La respuesta debe ser proporcional al deterioro y respetar políticas y límites. En una etapa temprana o intermedia conviene entender la causa, documentar el contacto y buscar regularización antes de escalar innecesariamente.',
      application:'La oportunidad del contacto cambia las opciones disponibles. Actuar pronto puede evitar que un problema transitorio se convierta en una recuperación costosa.',
      contrast:'Los distractores proponen sobrerreacción, pasividad o prácticas incompatibles con una cobranza profesional y respetuosa de derechos.',
      rule:'A mayor deterioro, mayor intensidad; pero la escalada debe ser proporcional, documentada y dentro de los límites aplicables.',
      wrong1:'No confundas firmeza con escalamiento inmediato. Ubica primero la etapa del atraso, la causa y la respuesta permitida.',
      route:['Identifica que existe atraso, pero todavía hay contacto con el cliente.','Verifica causa y posibilidad de regularización.','Escala solo si el deterioro y las políticas justifican una gestión más intensa.'],
      routeSummary:'La Ruta correcta prioriza gestión oportuna, proporcional y documentada antes de escalar.'
    },
    {
      id:'riesgo', number:'04', title:'Riesgo: mora, provisiones y priorización', slide:12, audio:'assets/pista_riesgo.m4a',
      short:'Cuando el crédito se deteriora, la entidad debe medir el impacto, protegerse y priorizar dónde actuar primero.',
      meaning:'La morosidad muestra parte del problema, pero no explica por sí sola su gravedad. Clasificación, provisiones, monto, edad de mora y comportamiento ayudan a estimar impacto y a priorizar la gestión.',
      example:'Dos créditos pueden tener el mismo número de días de atraso y generar impactos distintos si uno es pequeño y otro concentra un monto elevado que puede aumentar provisiones y afectar el balance.',
      error:'Gestionar la cartera como una lista cronológica única. La priorización debe considerar riesgo e impacto, no solo quién se atrasó primero.',
      question:'Dos clientes tienen el mismo atraso, pero uno concentra un monto mucho mayor y un deterioro que puede elevar provisiones. ¿Qué decisión refleja mejor una gestión de cartera inteligente?',
      options:[
        ['Priorizar según riesgo e impacto, combinando mora, monto, comportamiento y efecto potencial sobre provisiones y recuperación.',1],
        ['Atender únicamente por orden de fecha porque todos los atrasos con los mismos días generan idéntico efecto financiero.',0],
        ['Priorizar solo las deudas pequeñas porque se recuperan con mayor facilidad, aunque su impacto sobre la cartera sea reducido.',0],
        ['Esperar a que ambos casos lleguen a etapas severas para compararlos, evitando intervenir mientras sigan en fases distintas.',0]
      ],
      correct:'La cartera debe segmentarse y priorizarse. La edad de mora importa, pero también el monto, el comportamiento y el posible efecto sobre provisiones y recuperación.',
      application:'Un buen tablero de cobranza no muestra solo “quién debe”; ayuda a decidir dónde una intervención oportuna puede proteger más valor.',
      contrast:'Los distractores simplifican la gestión a una sola variable y pierden de vista que el riesgo y el impacto pueden ser muy diferentes.',
      rule:'Priorizar = combinar deterioro, monto, probabilidad de recuperación e impacto financiero.',
      wrong1:'Si dos atrasos tienen la misma edad, busca la variable que los hace diferentes: monto, comportamiento, clasificación o efecto sobre provisiones.',
      route:['Compara nivel de deterioro.','Compara impacto económico y provisiones potenciales.','Asigna prioridad a los casos donde actuar temprano protege más valor.'],
      routeSummary:'La Ruta correcta combina riesgo e impacto para ordenar la cartera.'
    }
  ],
  simSteps:[
    {
      id:'caracter', title:'Paso 1 · Carácter: ¿quiere pagar?', slide:5, audio:'assets/pista_5c.m4a',
      q:{
        text:'María presenta comprobantes, declara una deuda pequeña que todavía mantiene y no registra atrasos relevantes. ¿Qué dimensión de las 5C está siendo observada principalmente?',
        options:[
          ['Carácter, porque la transparencia y el historial ayudan a evaluar voluntad e integridad frente a las obligaciones.',1],
          ['Capacidad, porque entregar documentos demuestra por sí mismo que existe flujo suficiente para cubrir una nueva cuota.',0],
          ['Colateral, porque declarar una deuda previa equivale a ofrecer un respaldo ejecutable frente a un futuro incumplimiento.',0],
          ['Condiciones, porque el comportamiento pasado del cliente representa principalmente una variable externa del mercado.',0]
        ],
        correct:'La evidencia descrita corresponde principalmente a Carácter: historial de cumplimiento, transparencia y disposición frente a obligaciones anteriores.',
        application:'El carácter no se evalúa por simpatía. Se observa conducta financiera disponible, coherencia y transparencia de la información.',
        contrast:'Capacidad requiere mirar flujo; colateral, garantías; y condiciones, factores externos. Ninguno coincide con la evidencia central del caso.',
        rule:'Carácter responde, de manera sencilla, a la pregunta: ¿el cliente quiere cumplir?',
        wrong1:'Fíjate en lo que está siendo observado: comportamiento, historial y transparencia, no flujo, garantía ni entorno.',
        route:['Identifica la evidencia: historial y transparencia.','Relaciona esa evidencia con voluntad de cumplir.','Asocia voluntad e integridad con Carácter.'],
        routeSummary:'La Ruta correcta identifica el Carácter como la dimensión evaluada.'
      }
    },
    {
      id:'capacidad', title:'Paso 2 · Capacidad: ¿de dónde saldrá la cuota?', slide:5, audio:null,
      q:{
        text:'Panadería Horizonte vende S/ 18,000 al mes. Costos, gastos y deudas actuales suman S/ 16,000; la nueva cuota estimada sería S/ 1,600. ¿Qué lectura es más prudente?',
        options:[
          ['La capacidad queda muy ajustada porque, después de la nueva cuota, el margen mensual disponible sería aproximadamente S/ 400.',1],
          ['La capacidad es holgada porque las ventas brutas superan ampliamente la cuota, sin necesidad de considerar otros egresos mensuales.',0],
          ['La capacidad depende únicamente de la garantía ofrecida, pues el flujo restante deja de ser relevante cuando existen activos de respaldo.',0],
          ['La capacidad es suficiente siempre que el negocio mantenga ventas positivas, aunque costos y otras obligaciones absorban casi todo el ingreso.',0]
        ],
        correct:'El flujo disponible antes de la nueva cuota es S/ 2,000. Si la cuota fuera S/ 1,600, quedaría un margen de apenas S/ 400; por eso la capacidad es estrecha y merece ajuste o análisis adicional.',
        application:'Mirar ventas brutas sin restar costos, gastos y deudas puede producir una sensación falsa de solvencia.',
        contrast:'Los distractores ignoran egresos reales o sustituyen flujo por garantía. Ninguno responde correctamente de dónde saldrá cada cuota.',
        rule:'Capacidad se analiza sobre flujo disponible, no sobre ventas brutas aisladas.',
        wrong1:'Haz una resta simple: 18,000 menos 16,000 deja 2,000. Compara ese monto con la nueva cuota de 1,600 y observa el margen restante.',
        route:['Calcula flujo previo a la nueva cuota: S/ 2,000.','Resta la cuota estimada: S/ 1,600.','Quedan S/ 400, por lo que la capacidad es muy ajustada.'],
        routeSummary:'La Ruta correcta reconoce una capacidad estrecha y la necesidad de no aprobar mecánicamente el monto solicitado.'
      }
    },
    {
      id:'respaldo', title:'Paso 3 · Capital y colateral: respaldo, no fuente normal de pago', slide:6, audio:null,
      q:{
        text:'María ofrece un activo valorizado en S/ 10,000 como respaldo, pero el flujo para la nueva cuota sigue siendo estrecho. ¿Qué conclusión corresponde?',
        options:[
          ['El respaldo reduce pérdida potencial, pero no elimina la necesidad de ajustar o verificar la capacidad antes de decidir el crédito.',1],
          ['El respaldo vuelve suficiente la operación porque cualquier garantía parcial reemplaza automáticamente el análisis del flujo mensual.',0],
          ['El respaldo demuestra capacidad porque el valor del activo puede considerarse ingreso disponible para pagar las cuotas ordinarias.',0],
          ['El respaldo corrige cualquier señal de riesgo de carácter o condiciones, siempre que el bien pueda ser identificado y valorizado.',0]
        ],
        correct:'Capital y colateral aportan protección y compromiso, pero no sustituyen la fuente normal de pago. La capacidad debe seguir sosteniendo la obligación.',
        application:'La garantía funciona mejor como red de seguridad que como argumento para ignorar un flujo insuficiente.',
        contrast:'Los distractores convierten el respaldo en ingreso o en una solución universal. Esa lectura contradice la lógica integral de las 5C.',
        rule:'Respaldo ayuda a mitigar pérdida; capacidad ayuda a pagar la cuota.',
        wrong1:'Pregunta si el activo genera el efectivo mensual con el que se pagará la cuota. Si no, entonces no reemplaza la capacidad.',
        route:['Distingue fuente de pago de red de seguridad.','Ubica el activo dentro de capital o colateral.','Mantén la capacidad como criterio para sostener las cuotas.'],
        routeSummary:'La Ruta correcta usa el respaldo como mitigante, no como sustituto del flujo.'
      }
    },
    {
      id:'decision', title:'Paso 4 · Decisión: diseñar el crédito que sí puede sostenerse', slide:7, audio:'assets/pista_credito.m4a',
      q:{
        text:'Con buen carácter y respaldo, pero una capacidad muy ajustada para S/ 20,000, ¿qué decisión inicial es más defendible?',
        options:[
          ['No aprobar las condiciones solicitadas tal como están y revisar monto, plazo o información para que la cuota sea compatible con el flujo.',1],
          ['Aprobar el monto completo sin cambios porque el buen carácter compensa cualquier estrechez temporal de capacidad de pago.',0],
          ['Rechazar definitivamente toda posibilidad de crédito porque una capacidad ajustada impide rediseñar monto, plazo o estructura de pago.',0],
          ['Aprobar con una cuota mayor para recuperar más rápido, aunque el margen mensual disponible del negocio sea reducido.',0]
        ],
        correct:'La decisión responsable no tiene que ser un “sí” o “no” absoluto. Puede consistir en ajustar monto, plazo o condiciones y volver a verificar que la cuota sea sostenible.',
        application:'Una política de crédito útil traduce el análisis en una estructura compatible con el riesgo que la entidad está dispuesta a asumir.',
        contrast:'Los distractores aprueban ignorando capacidad, rechazan sin explorar alternativas o aumentan la presión sobre un flujo ya estrecho.',
        rule:'Evaluar también significa diseñar condiciones compatibles con la capacidad real.',
        wrong1:'Evita los extremos. La pregunta no exige aprobar ni rechazar para siempre: busca la alternativa que conecte riesgo con una cuota sostenible.',
        route:['Reconoce el buen carácter y el respaldo.','Reconoce que la capacidad actual es estrecha.','Ajusta estructura antes de asumir el riesgo.'],
        routeSummary:'La Ruta correcta es rediseñar y reevaluar el crédito antes de aprobarlo en las condiciones originales.'
      }
    },
    {
      id:'mora', title:'Paso 5 · Seguimiento: cuando aparece atraso', slide:14, audio:'assets/pista_cobranza.m4a',
      q:{
        text:'Meses después, María acumula 20 días de atraso, mantiene contacto y explica una caída temporal de ventas. ¿Qué debería ocurrir primero?',
        options:[
          ['Documentar la situación, verificar la causa y gestionar una regularización proporcional al tramo y a las políticas antes de escalar.',1],
          ['Iniciar de inmediato la vía judicial porque el atraso convierte automáticamente el crédito en una pérdida definitiva para la institución.',0],
          ['Eliminar el caso de seguimiento por el buen historial previo y esperar a que el cliente retome voluntariamente su calendario de pagos.',0],
          ['Contactar a terceros del entorno personal para generar presión adicional, aunque ello pueda afectar privacidad o reputación del deudor.',0]
        ],
        correct:'Con atraso y contacto activo, la gestión debe documentar, entender la causa y buscar regularización dentro del tramo y las políticas aplicables antes de pasar a una instancia más severa.',
        application:'La cobranza temprana busca recuperar opciones. Mientras antes se entienda la causa, mayor margen existe para una salida ordenada.',
        contrast:'Los distractores saltan etapas, abandonan seguimiento o proponen prácticas incompatibles con una cobranza profesional.',
        rule:'Seguimiento temprano + respuesta proporcional = mayor posibilidad de recuperación responsable.',
        wrong1:'Ubica la mora en una etapa todavía gestionable y recuerda que la intensidad debe crecer con el deterioro, no adelantarse sin criterio.',
        route:['Confirma el atraso y la causa.','Documenta el contacto y analiza posibilidad de regularización.','Escala solo cuando el deterioro o la política lo justifiquen.'],
        routeSummary:'La Ruta correcta comienza con gestión proporcional y documentada, no con una reacción extrema.'
      }
    }
  ],
  scenarios:{
    A:{
      title:'A · Las ventas caen 25 %', slide:5, audio:'assets/pista_5c.m4a',
      changes:'La capacidad se deteriora de forma fuerte porque el flujo disponible se reduce mientras las obligaciones continúan.',
      stays:'El buen carácter y los respaldos existentes no desaparecen, pero ya no compensan una fuente de pago debilitada.',
      implication:'El crédito solicitado se vuelve mucho más difícil de sostener y aumenta la probabilidad de atraso si no se rediseña la estructura.',
      avoid:'No concluyas que un cliente responsable seguirá pudiendo pagar solo porque mantiene voluntad. Querer pagar y poder pagar son dimensiones distintas.',
      decision:'Recalcular flujo, revisar monto/plazo y evitar aprobar la estructura original mientras la capacidad permanezca insuficiente.'
    },
    B:{
      title:'B · Aparecen atrasos anteriores no informados', slide:5, audio:'assets/pista_credito.m4a',
      changes:'Se debilita la lectura de Carácter porque el historial real es menos consistente de lo que parecía y surge una alerta de transparencia.',
      stays:'La capacidad actual podría seguir siendo similar, pero la calidad de la información y la voluntad observada cambian el perfil de riesgo.',
      implication:'La entidad necesita validar causas, frecuencia y comportamiento previo antes de confiar en la primera lectura del cliente.',
      avoid:'No confundas buen flujo actual con buen carácter. Una persona puede poder pagar y, aun así, mostrar señales de incumplimiento o poca transparencia.',
      decision:'Profundizar verificación y condicionar cualquier aprobación a evidencia suficiente sobre comportamiento e historial.'
    },
    C:{
      title:'C · La garantía sube a S/ 25,000', slide:6, audio:null,
      changes:'Mejora el colateral y disminuye parte de la pérdida potencial si el crédito llega a incumplirse.',
      stays:'La fuente normal de pago sigue dependiendo del flujo del negocio; la capacidad no mejora solo porque la garantía valga más.',
      implication:'El respaldo puede mitigar riesgo de pérdida, pero no convierte automáticamente una cuota difícil en una cuota sostenible.',
      avoid:'No uses una garantía mayor como permiso para ignorar capacidad, carácter o condiciones externas.',
      decision:'Mantener el análisis integral de las 5C y ajustar la estructura si el flujo sigue siendo estrecho.'
    },
    AB:{
      title:'A + B · Menos ventas y peor historial', slide:5, audio:null,
      changes:'Se deterioran simultáneamente Capacidad y Carácter: hay menos flujo y además aparece una señal de comportamiento previo menos confiable.',
      stays:'Capital y colateral pueden seguir presentes, pero pasan a ser mitigantes insuficientes frente a dos alertas centrales.',
      implication:'El perfil se vuelve significativamente más riesgoso y la solicitud original pierde sustento.',
      avoid:'No compenses dos debilidades principales con una sola garantía o con la esperanza de que las ventas se recuperen.',
      decision:'No aprobar la estructura original; requerir evidencia nueva y replantear completamente la operación antes de asumir riesgo.'
    },
    AC:{
      title:'A + C · Menos ventas, pero mayor garantía', slide:6, audio:null,
      changes:'La capacidad empeora mientras el colateral mejora. Una dimensión reduce riesgo de pérdida y la otra aumenta riesgo de incumplimiento.',
      stays:'El pago mensual todavía depende del flujo; la garantía continúa siendo una red de última instancia.',
      implication:'Un mejor respaldo no corrige la caída del flujo y no debería llevar a aprobar el crédito original sin ajustes.',
      avoid:'No sumes puntos de manera mecánica. Las 5C no se compensan siempre una a una cuando la fuente de pago se vuelve insuficiente.',
      decision:'Rediseñar monto/plazo o postergar la operación hasta recuperar capacidad, aunque el colateral sea más fuerte.'
    },
    BC:{
      title:'B + C · Mejor garantía, pero aparecen atrasos previos', slide:6, audio:null,
      changes:'Mejora el colateral, pero empeora la lectura del Carácter por el nuevo historial descubierto.',
      stays:'La capacidad actual puede mantenerse, aunque la confianza en el comportamiento requiere una revisión más profunda.',
      implication:'El aumento de garantía puede reducir pérdida potencial, pero no elimina una alerta de voluntad o transparencia.',
      avoid:'No utilices patrimonio o garantías para borrar información negativa de comportamiento.',
      decision:'Validar historial y causas antes de decidir; una garantía mayor no sustituye el análisis del carácter.'
    },
    ABC:{
      title:'A + B + C · Capacidad débil, carácter en duda y mejor garantía', slide:17, audio:null,
      changes:'La solicitud combina una caída de flujo y una alerta de comportamiento, mientras el colateral mejora.',
      stays:'La garantía sigue siendo un respaldo, no la fuente de pago ni una prueba de voluntad de cumplimiento.',
      implication:'El riesgo de incumplimiento aumenta y el mejor colateral solo reduce parte de la pérdida potencial si el escenario termina mal.',
      avoid:'No apruebes por “compensación” automática. Una garantía alta no neutraliza simultáneamente capacidad insuficiente y carácter debilitado.',
      decision:'No aprobar la estructura original; reconstruir la evaluación con nueva evidencia antes de considerar otra alternativa.'
    }
  },
  quiz:[
    {
      text:'¿Qué afirmación diferencia correctamente capacidad y colateral dentro de las 5C?',
      options:[
        ['La capacidad observa el flujo con el que se pagará la cuota; el colateral reduce pérdida potencial si el pago normal falla.',1],
        ['La capacidad mide el valor de los bienes ofrecidos; el colateral estima si los ingresos mensuales cubren la nueva obligación.',0],
        ['La capacidad y el colateral son equivalentes porque ambos indican cuánto patrimonio podría ejecutar la entidad ante un atraso.',0],
        ['La capacidad solo importa sin garantías; cuando existe colateral suficiente, el flujo deja de ser una variable decisiva.',0]
      ],
      correct:'Capacidad y colateral responden preguntas distintas: de dónde saldrá cada cuota y qué respaldo existe si el pago normal falla.',
      application:'Separar fuente de pago y red de seguridad evita aprobar operaciones que solo parecen sólidas por el valor de una garantía.',
      contrast:'Los distractores invierten conceptos o eliminan la importancia del flujo cuando existe garantía.',
      rule:'Capacidad = pago normal; colateral = mitigación de pérdida.',
      wrong1:'Piensa en qué variable debería producir el efectivo mensual y cuál serviría solo si ese pago no ocurre.',
      route:['Identifica la fuente normal de pago.','Identifica el respaldo de última instancia.','Asocia flujo con capacidad y garantía con colateral.'],
      routeSummary:'La Ruta correcta separa claramente capacidad de colateral.'
    },
    {
      text:'Una empresa vende mucho, pero casi todo el ingreso se consume en costos, gastos y deudas existentes. ¿Qué C requiere mayor atención?',
      options:[
        ['Capacidad, porque lo relevante es el flujo realmente disponible después de atender egresos y obligaciones ya asumidas.',1],
        ['Capital, porque un volumen alto de ventas demuestra automáticamente que existe patrimonio suficiente para respaldar el crédito.',0],
        ['Carácter, porque un margen reducido prueba por sí mismo que el cliente no tiene intención de cumplir con nuevas obligaciones.',0],
        ['Colateral, porque cualquier diferencia entre ventas y gastos se resuelve principalmente aumentando el valor de la garantía ofrecida.',0]
      ],
      correct:'El problema es de capacidad: las ventas brutas pueden ser altas y, aun así, dejar poco flujo para una cuota adicional.',
      application:'La evaluación debe pasar de “cuánto vende” a “cuánto queda disponible después de todo lo que debe pagar”.',
      contrast:'Ventas no equivalen a capital, margen bajo no prueba mala voluntad y una garantía no crea flujo mensual.',
      rule:'Ingresos altos no garantizan capacidad si los egresos absorben casi todo el flujo.',
      wrong1:'No mires solo la cifra de ventas. Pregunta cuánto dinero queda libre después de costos, gastos y deudas.',
      route:['Parte del ingreso.','Resta egresos y obligaciones.','Evalúa el saldo disponible para una nueva cuota.'],
      routeSummary:'La Ruta correcta identifica un problema de capacidad.'
    },
    {
      text:'¿Qué idea resume mejor el circuito otorgamiento → seguimiento → cobranza → reinversión?',
      options:[
        ['La recuperación forma parte del crédito desde el inicio y permite que el valor retorne para sostener nuevas operaciones.',1],
        ['La cobranza es una etapa separada que comienza solo cuando el crédito ya está deteriorado y deja de depender del otorgamiento.',0],
        ['La reinversión ocurre antes del seguimiento porque los recursos pueden volver a colocarse mientras la deuda permanece pendiente.',0],
        ['El seguimiento reemplaza a la evaluación inicial, por lo que una buena cobranza puede compensar cualquier debilidad de originación.',0]
      ],
      correct:'El crédito debe verse como un circuito. Una buena originación, el seguimiento y la recuperación están conectados porque el valor debe retornar para reiniciar el ciclo.',
      application:'Esta mirada evita responsabilizar únicamente al cobrador por problemas que pueden haberse originado en evaluación o seguimiento.',
      contrast:'Los distractores separan etapas que en realidad se condicionan mutuamente o alteran el orden del circuito.',
      rule:'La recuperación responsable empieza desde el diseño y seguimiento del crédito.',
      wrong1:'Observa que la diapositiva muestra un ciclo, no actividades independientes. Pregunta qué permite que el valor vuelva al sistema.',
      route:['Otorgar con criterio.','Hacer seguimiento.','Cobrar y recuperar.','Reinvertir el valor recuperado.'],
      routeSummary:'La Ruta correcta entiende el crédito como un circuito completo.'
    },
    {
      text:'Una cartera total es S/ 1,000,000 y S/ 50,000 están en mora. ¿Qué ratio didáctico de morosidad resulta?',
      options:[
        ['5 %, porque se divide el monto en mora entre la cartera total y se expresa el resultado como porcentaje.',1],
        ['20 %, porque se divide la cartera total entre el monto vencido para estimar cuántas veces se cubre la mora.',0],
        ['50 %, porque el monto en mora representa la mitad de cien mil y la cartera se interpreta en bloques equivalentes.',0],
        ['0.5 %, porque el porcentaje se obtiene multiplicando los créditos en mora por la cartera antes de convertirlo a razón.',0]
      ],
      correct:'S/ 50,000 ÷ S/ 1,000,000 = 0.05; expresado en porcentaje, equivale a 5 %.',
      application:'El ratio ayuda a dimensionar el atraso, pero no explica por sí solo dónde se concentra ni cuál es la causa.',
      contrast:'Las otras opciones invierten la fórmula o interpretan incorrectamente la conversión a porcentaje.',
      rule:'Ratio de morosidad = créditos en mora / cartera total.',
      wrong1:'Divide 50,000 entre 1,000,000 y luego convierte el decimal obtenido a porcentaje.',
      route:['50,000 ÷ 1,000,000 = 0.05.','0.05 × 100 = 5 %.'],
      routeSummary:'La Ruta correcta obtiene un ratio de morosidad de 5 %.'
    },
    {
      text:'¿Por qué las provisiones son relevantes cuando una cartera comienza a deteriorarse?',
      options:[
        ['Porque reconocen posibles pérdidas y reservan protección financiera, afectando recursos y resultados de la institución.',1],
        ['Porque sustituyen la cobranza y permiten dejar de gestionar créditos atrasados una vez que se registra la reserva correspondiente.',0],
        ['Porque convierten automáticamente una deuda vencida en ingreso, compensando contablemente la falta de pago del cliente.',0],
        ['Porque eliminan el riesgo de crédito al garantizar que todo monto provisionado regresará posteriormente a la institución.',0]
      ],
      correct:'Provisionar significa reconocer que parte del dinero colocado podría no recuperarse completamente y separar protección financiera frente a esa posibilidad.',
      application:'Un aumento de provisiones puede afectar rentabilidad y recursos disponibles; por eso una mala colocación tiene consecuencias más allá de la cobranza.',
      contrast:'Las provisiones no sustituyen recuperación, no convierten deuda en ingreso y tampoco eliminan el riesgo.',
      rule:'Provisión = reconocimiento y cobertura prudencial de pérdida potencial.',
      wrong1:'Piensa en la provisión como un escudo financiero, no como un mecanismo de cobro ni como una fuente de ingresos.',
      route:['Existe riesgo de no recuperar todo.','La entidad reconoce esa posibilidad.','Se constituye una reserva o provisión para absorber el impacto.'],
      routeSummary:'La Ruta correcta entiende la provisión como protección frente a pérdida potencial.'
    },
    {
      text:'Dos créditos tienen la misma edad de mora, pero uno es mucho mayor y puede generar un fuerte impacto en provisiones. ¿Qué enfoque de cobranza es más útil?',
      options:[
        ['Segmentar y priorizar considerando riesgo, monto, comportamiento y efecto potencial sobre provisiones, no solo días de atraso.',1],
        ['Atender ambos con idéntica prioridad porque la misma edad de mora obliga a aplicar exactamente la misma estrategia operativa.',0],
        ['Cobrar primero el crédito pequeño porque siempre resulta más eficiente recuperar operaciones de menor monto antes que las grandes.',0],
        ['Esperar a que ambos pasen a una categoría más severa para recién comparar su impacto y decidir dónde asignar recursos de cobranza.',0]
      ],
      correct:'La segmentación permite dedicar recursos distintos a problemas distintos. Días de mora, monto, comportamiento y efecto financiero ayudan a determinar prioridad.',
      application:'La cobranza inteligente busca proteger valor y reducir costos operativos, no simplemente ordenar casos por fecha.',
      contrast:'Los distractores convierten una sola variable en criterio absoluto y desaprovechan la lógica de triage financiero.',
      rule:'Misma mora no significa mismo riesgo ni mismo impacto.',
      wrong1:'Si los días son iguales, busca qué otras variables cambian la urgencia: monto, comportamiento, clasificación o provisiones.',
      route:['Compara edad de mora.','Compara monto e impacto.','Compara probabilidad de recuperación.','Asigna prioridad con el conjunto de variables.'],
      routeSummary:'La Ruta correcta segmenta y prioriza por riesgo e impacto.'
    }
  ],
  resources:[
    {id:'ppt',type:'ppt',title:'PPT de la sesión',desc:'Presentación institucional de la Sesión 2: crédito, evaluación, cobranza y recuperación.',thumb:'assets/thumbs/ppt.png'},
    {id:'pdf',type:'pdf',title:'Artículo de lectura',desc:'Artículo didáctico de la Sesión 2 con caso conductor, ejemplos y comprobación.',thumb:'assets/thumbs/pdf.png'},
    {id:'infographic',type:'image',title:'Infografía de riesgo crediticio',desc:'Síntesis visual de 5C, provisiones, mora y recuperación.',thumb:'assets/thumbs/infografia.png'},
    {id:'video-main',type:'video',title:'Video explicativo',desc:'Video de apertura sobre créditos, evaluación, cobranza y riesgo.',thumb:'assets/thumbs/video.png'},
    {id:'video-short',type:'video',title:'Microvideo · El escudo del banco',desc:'Refuerzo breve sobre pilares de evaluación y protección frente al riesgo.',thumb:'assets/thumbs/microvideo.png'},
    {id:'audio',type:'audio',title:'Resumen de audio',desc:'Conversación sobre cómo funciona por dentro el crédito bancario.',thumb:'assets/thumbs/audio.png'}
  ]
};
