const DATA={
  concepts:[
    {
      id:'auditoria',number:1,title:'Auditoría bancaria: verificar con evidencia',slide:3,audio:'assets/pista_01.m4a',
      summary:'Objetividad, método, competencia profesional e informe final.',
      meaning:'La auditoría bancaria examina operaciones y controles con un enfoque objetivo, sistemático y profesional. Su conclusión debe sostenerse en evidencia, no en impresiones. La auditoría interna acompaña de forma continua y preventiva; la externa aporta una validación independiente y periódica.',
      example:'Una conciliación bancaria puede mostrar el saldo correcto; aun así, el auditor debe comprobar quién la preparó, quién la revisó, cuándo se hizo y qué evidencia dejó.',
      error:'Confundir “el número cuadra” con “el control funcionó” o tratar auditoría interna y externa como funciones intercambiables.',
      question:'¿Qué afirmación describe mejor el propósito de una auditoría bancaria?',
      options:[
        ['Obtener evidencia suficiente para determinar si operaciones y controles funcionaron como debían y comunicar hallazgos, conclusiones y recomendaciones.',1],
        ['Reemplazar los controles de la agencia y asumir directamente la autorización diaria de todas las transacciones financieras.',0],
        ['Buscar responsables individuales ante cualquier diferencia, aunque la evidencia disponible todavía no permita determinar qué ocurrió.',0],
        ['Confirmar únicamente que los saldos matemáticos coincidan, sin revisar procedimientos, autorizaciones ni funcionamiento de controles.',0]
      ],
      correct:'Auditar implica obtener evidencia, evaluar hechos y comunicar lo encontrado. La revisión no se limita al resultado numérico ni a buscar culpables.',
      application:'En el laboratorio tendrás que escoger evidencia y técnica antes de emitir una conclusión.',
      contrast:'Las otras opciones reducen la auditoría a autorización operativa, culpabilización o simple recalculo.',
      rule:'Hecho → evidencia → evaluación → conclusión.',
      wrong1:'Vuelve a la idea central: una auditoría debe poder demostrar qué ocurrió y si el proceso o control funcionó como estaba diseñado.',
      route:['Define el hecho u operación revisada.','Obtén evidencia suficiente y pertinente.','Evalúa contra el criterio o control previsto.','Comunica observaciones, conclusiones y recomendaciones.'],
      routeSummary:'La auditoría se sostiene en evidencia y criterio profesional, no en suposiciones.'
    },
    {
      id:'tecnicas',number:2,title:'Técnicas y pruebas: elegir cómo comprobar',slide:5,audio:'assets/pista_02.m4a',
      summary:'Inspección, observación, confirmación, investigación, cálculo y estudio general.',
      meaning:'Las técnicas de auditoría buscan tipos distintos de evidencia. Además, las pruebas sustantivas se concentran en cifras y transacciones; las pruebas de cumplimiento verifican si políticas y controles realmente se ejecutaron.',
      example:'Si una conciliación está bien sumada, una prueba sustantiva puede confirmar la cifra; una prueba de cumplimiento puede revelar que fue preparada fuera de plazo o sin revisión independiente.',
      error:'Elegir una sola técnica para todo o asumir que una prueba numérica demuestra automáticamente cumplimiento del procedimiento.',
      question:'Una conciliación bancaria tiene cifras correctas, pero no existe evidencia de revisión independiente. ¿Qué lectura es más adecuada?',
      options:[
        ['La cifra puede estar bien y el control estar mal; corresponde complementar la prueba sustantiva con una prueba de cumplimiento sobre revisión y segregación.',1],
        ['La conciliación debe darse por correcta en todos sus aspectos porque la exactitud matemática reemplaza cualquier evidencia de control.',0],
        ['La falta de revisión independiente solo importa en auditoría externa y no tiene relación con el control interno de una agencia bancaria.',0],
        ['El auditor debería ignorar la cifra y limitarse a entrevistar al personal, porque el cálculo no constituye una técnica válida de auditoría.',0]
      ],
      correct:'Una cifra correcta no demuestra que el procedimiento se haya ejecutado como estaba diseñado. Las pruebas sustantivas y de cumplimiento responden preguntas diferentes.',
      application:'La Misión 2 te pedirá seleccionar técnica y tipo de prueba según el hallazgo.',
      contrast:'Los distractores sustituyen una dimensión por otra o eliminan técnicas válidas.',
      rule:'Cifra correcta ≠ control correcto.',
      wrong1:'Separa dos preguntas: “¿el saldo está bien?” y “¿el control se ejecutó como debía?”.',
      route:['Comprueba la cifra.','Revisa el procedimiento previsto.','Busca evidencia de ejecución y revisión.','Integra ambos resultados.'],
      routeSummary:'Las pruebas sustantivas y de cumplimiento se complementan.'
    },
    {
      id:'control',number:3,title:'Control interno en la agencia',slide:10,audio:'assets/pista_03.m4a',
      summary:'Autorización, segregación, procesamiento, seguridad y controles físicos.',
      meaning:'El control interno protege activos, mejora la confiabilidad de la información, promueve eficiencia y asegura cumplimiento. En una agencia, autorización y segregación de funciones reducen concentración de poder; los controles físicos y de sistemas sostienen la trazabilidad.',
      example:'Una transferencia relevante puede tener control previo de autorización, control concurrente del sistema y revisión posterior. Las tres capas cumplen propósitos diferentes.',
      error:'Creer que más controles siempre significa mejor control, aunque sean duplicados, no tengan responsable o no dejen evidencia.',
      question:'¿Qué situación representa mejor una segregación de funciones adecuada?',
      options:[
        ['La persona que registra la operación no es la misma que la autoriza y la custodia, y cada intervención deja evidencia verificable.',1],
        ['Una sola persona registra, autoriza, custodia y revisa porque así la operación se procesa más rápido y existe menos coordinación.',0],
        ['El sistema permite que cualquier colaborador apruebe operaciones si conoce al cliente, aunque no tenga facultades formalmente asignadas.',0],
        ['La autorización se realiza después de ejecutar la operación para evitar demoras, siempre que el saldo final coincida con el sistema.',0]
      ],
      correct:'Segregar significa separar responsabilidades incompatibles y dejar trazabilidad de quién hizo qué.',
      application:'El primer tramo del laboratorio examina exactamente autorización, segregación y evidencia.',
      contrast:'Las otras opciones concentran funciones o convierten la autorización en un trámite posterior.',
      rule:'Autorizar, registrar, custodiar y revisar no deberían concentrarse sin controles compensatorios.',
      wrong1:'Pregunta qué riesgo aparece cuando una misma persona puede iniciar, registrar y aprobar una operación sin revisión independiente.',
      route:['Identifica funciones incompatibles.','Sepáralas entre actores.','Define facultades.','Conserva evidencia de cada intervención.'],
      routeSummary:'La segregación reduce concentración de poder y facilita detección.'
    },
    {
      id:'laft',number:4,title:'Prevención LA/FT: conocer, monitorear y escalar',slide:16,audio:null,
      summary:'Perfil del cliente, trazabilidad, señales de alerta y función especializada.',
      meaning:'La prevención LA/FT busca comprender el perfil del cliente, registrar operaciones y detectar desviaciones que requieren revisión. En lavado de activos interesa el intento de dar apariencia legal a recursos ilícitos; en financiamiento del terrorismo también es crítico vigilar el destino de los fondos, incluso cuando su origen pueda ser lícito.',
      example:'Una secuencia transaccional inusual respecto del perfil no prueba por sí sola un delito. Sí puede justificar solicitar información, preservar trazabilidad y escalar la alerta al oficial de cumplimiento según la política de la entidad.',
      error:'Confundir una señal de alerta con una declaración automática de culpabilidad o, en el extremo contrario, ignorarla porque la operación está formalmente documentada.',
      question:'¿Cuál es la respuesta preventiva más adecuada ante una operación inusual respecto del perfil del cliente?',
      options:[
        ['Reunir información, verificar coherencia con el perfil, conservar trazabilidad y escalar a la función especializada cuando la alerta lo amerite.',1],
        ['Acusar inmediatamente al cliente de un delito y cancelar toda relación sin revisar contexto, documentación ni procedimiento institucional.',0],
        ['Ignorar la alerta si la transacción fue registrada correctamente, porque el registro del sistema demuestra que la operación es legítima.',0],
        ['Explicar al cliente los criterios internos exactos de detección para que pueda adaptar sus futuras operaciones y evitar nuevas alertas.',0]
      ],
      correct:'El objetivo es detectar desviaciones, reunir información y aplicar el proceso de revisión y escalamiento correspondiente, no presumir culpabilidad por una sola señal.',
      application:'La Misión 4 integra perfil, comportamiento y decisión de escalamiento.',
      contrast:'Los distractores convierten la alerta en acusación, la ignoran o revelan criterios internos de detección.',
      rule:'Alerta → análisis → documentación → escalamiento según política.',
      wrong1:'Distingue entre “señal que merece revisión” y “conclusión de culpabilidad”.',
      route:['Compara la operación con el perfil.','Solicita y valida información pertinente.','Conserva evidencia y trazabilidad.','Escala cuando corresponda al oficial de cumplimiento.'],
      routeSummary:'La prevención se basa en análisis y proceso, no en automatismos.'
    }
  ],
  quiz:[
    {
      text:'¿Qué diferencia principal existe entre auditoría interna y auditoría externa según el material?',
      options:[
        ['La interna se integra al sistema de control y tiene enfoque continuo/preventivo; la externa aporta una validación profesional independiente y periódica.',1],
        ['La interna solo revisa estados financieros y la externa autoriza diariamente las operaciones de caja y transferencias.',0],
        ['Ambas son idénticas y solo cambia el nombre del profesional que firma el informe final.',0],
        ['La externa forma parte de la operación diaria y la interna solo interviene cuando una autoridad externa lo solicita.',0]
      ],correct:'Son perspectivas distintas y complementarias: control interno de la entidad frente a validación independiente.',application:'No intercambies responsabilidades.',contrast:'Las otras opciones invierten o igualan funciones.',rule:'Interna: continua/preventiva; externa: independiente/periódica.',wrong1:'Revisa responsable, alcance y enfoque temporal.',route:['Identifica vínculo con la entidad.','Identifica independencia.','Compara continuidad y periodicidad.'],routeSummary:'La Ruta correcta distingue función y propósito.'
    },
    {
      text:'¿Cuál de estas situaciones exige una prueba de cumplimiento aunque la cifra sea correcta?',
      options:[
        ['Una conciliación cuadra, pero fue preparada y revisada por la misma persona sin evidencia de una revisión independiente.',1],
        ['La suma de una partida contiene un error aritmético que puede detectarse directamente mediante recálculo.',0],
        ['Un saldo requiere confirmación con un tercero para verificar su existencia y monto.',0],
        ['Una factura presenta un total incorrecto y debe recalcularse para determinar el valor adecuado.',0]
      ],correct:'La prueba de cumplimiento verifica si el control previsto se ejecutó como estaba diseñado, incluso cuando el resultado numérico coincide.',application:'Evalúa segregación y evidencia.',contrast:'Las otras situaciones se orientan principalmente a cifras o confirmación.',rule:'Procedimiento correcto debe demostrarse, no suponerse.',wrong1:'Busca el caso donde el problema no es el número sino cómo se ejecutó el control.',route:['Separa cifra de proceso.','Identifica el control previsto.','Busca evidencia de ejecución.'],routeSummary:'La Ruta correcta revisa reglas y controles.'
    },
    {
      text:'¿Qué control reduce mejor el riesgo de concentración de poder en una agencia?',
      options:[
        ['Separar autorización, registro, custodia y revisión entre funciones compatibles con las facultades asignadas.',1],
        ['Permitir que una sola persona ejecute todas las fases si tiene amplia experiencia y conoce bien a los clientes.',0],
        ['Eliminar la revisión posterior siempre que el sistema tenga contraseña y registre la fecha de la operación.',0],
        ['Autorizar de manera verbal después de procesar la transacción para evitar demoras en atención.',0]
      ],correct:'La segregación de funciones reduce el riesgo de que una sola persona pueda iniciar, ocultar y aprobar una irregularidad.',application:'Es una barrera preventiva y detectiva.',contrast:'Los distractores concentran funciones o debilitan evidencia.',rule:'Separar funciones incompatibles.',wrong1:'Pregunta qué estructura dificulta que una sola persona controle todo el ciclo.',route:['Identifica funciones críticas.','Separa actores.','Mantén facultades y evidencia.'],routeSummary:'La Ruta correcta evita concentración de poder.'
    },
    {
      text:'Ante una señal LA/FT, ¿qué principio debe conservarse?',
      options:[
        ['Una señal requiere análisis y trazabilidad; no equivale por sí sola a una declaración de culpabilidad.',1],
        ['Toda señal obliga a informar al cliente exactamente qué criterio del sistema generó la alerta.',0],
        ['Si existe documentación formal, la operación deja de ser relevante para monitoreo aunque sea incoherente con el perfil.',0],
        ['El monitoreo debe centrarse solo en el origen del dinero y nunca considerar el destino de los fondos.',0]
      ],correct:'La alerta activa revisión y, si corresponde, escalamiento especializado. No reemplaza el análisis ni el debido proceso institucional.',application:'Conocer al cliente y monitorear permite contextualizar.',contrast:'Las otras opciones revelan criterios, ignoran contexto o excluyen el destino.',rule:'Señal ≠ culpabilidad.',wrong1:'Recuerda que el objetivo es detectar desviaciones y aplicar el proceso previsto.',route:['Detecta señal.','Analiza contexto.','Documenta.','Escala según política.'],routeSummary:'La Ruta correcta protege prevención y proporcionalidad.'
    },
    {
      text:'¿Por qué un control escrito pero sin evidencia puede ser insuficiente?',
      options:[
        ['Porque no permite demostrar que se ejecutó en el momento, por el responsable y con el alcance previsto.',1],
        ['Porque los controles solo sirven cuando son externos y ejecutados por auditores independientes.',0],
        ['Porque cualquier control interno debe eliminar por completo todo riesgo para considerarse válido.',0],
        ['Porque la evidencia solo es necesaria para operaciones con efectivo y no para sistemas, conciliaciones o autorizaciones.',0]
      ],correct:'La evidencia sostiene que el control existió en la práctica y permite verificar su oportunidad y responsable.',application:'Diseño sin ejecución puede dar falsa seguridad.',contrast:'Los distractores limitan indebidamente la evidencia o exigen eliminar todo riesgo.',rule:'Control efectivo = diseño + ejecución + responsable + evidencia.',wrong1:'Pregunta cómo demostrarías que el control realmente ocurrió.',route:['Define control.','Verifica responsable y momento.','Busca evidencia.','Evalúa efectividad.'],routeSummary:'La Ruta correcta convierte un control formal en verificable.'
    }
  ],
  resources:[
    {id:'ppt',type:'ppt',title:'PPT de la sesión',desc:'Presentación institucional: auditoría, control interno, agencia y prevención LA/FT.',thumb:'assets/thumbs/ppt.png'},
    {id:'pdf',type:'pdf',title:'Artículo de lectura',desc:'Artículo didáctico de la Sesión 5 con el caso Agencia Horizonte.',thumb:'assets/thumbs/pdf.png'},
    {id:'video-main',type:'video',title:'Video explicativo de apertura',desc:'Recorrido general de Gestión y Administración de Agencias y Auditoría Bancaria.',thumb:'assets/thumbs/video_main.jpg'},
    {id:'video-agencias',type:'video',title:'Video corto · Cómo las agencias blindan cada transacción',desc:'Control interno, auditoría y capas de protección de una operación.',thumb:'assets/thumbs/video_agencias.jpg'},
    {id:'video-laft',type:'video',title:'Video corto · Cómo los bancos bloquean el dinero sucio',desc:'Prevención LA/FT, conocimiento del cliente, monitoreo y señales de alerta.',thumb:'assets/thumbs/video_laft.jpg'},
    {id:'infographic',type:'image',title:'Infografía · Guía de Integridad Bancaria',desc:'Control interno, auditoría y prevención integrados en una sola ruta.',thumb:'assets/thumbs/infografia_s5.jpg'},
    {id:'audio',type:'audio',title:'Resumen de audio',desc:'Conversación completa: Blindaje bancario contra el lavado de activos.',thumb:'assets/thumbs/audio.png'}
  ]
};
