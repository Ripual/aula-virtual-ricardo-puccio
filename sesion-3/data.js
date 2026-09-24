window.DATA = {
  concepts: [
    {
      id:'segmentos', number:'01', title:'Segmentar antes de ofrecer', slide:3, audio:'assets/pista_segmentos.m4a',
      short:'Personal, PyME y Empresa responden a clientes, fuentes de pago y necesidades distintas.',
      meaning:'La segmentación no depende únicamente del monto. También cambia según quién genera el ingreso, el destino del financiamiento, la complejidad de la operación y la forma de evaluar el riesgo.',
      example:'María puede pedir un crédito personal para mejorar su vivienda y, en otra operación, solicitar capital de trabajo para Panadería Horizonte. Es la misma persona, pero la necesidad y la fuente de pago cambian.',
      error:'Pensar que S/ 50,000 siempre pertenece al mismo segmento. El monto ayuda, pero no define por sí solo si la evaluación corresponde a Banca Personal, PyME o Empresa.',
      question:'María solicita S/ 30,000 para comprar harina, empaques y mantequilla para una campaña de Panadería Horizonte. ¿Qué lectura es más coherente?',
      options:[
        ['La necesidad corresponde principalmente a Banca PyME porque el destino es capital de trabajo del negocio y la fuente de repago depende de su operación.',1],
        ['La solicitud corresponde a Banca Personal porque María es una persona natural y cualquier crédito a su nombre se evalúa como consumo individual.',0],
        ['La solicitud corresponde a Banca Empresa porque el monto supera un gasto cotidiano y toda inversión comercial debe tratarse como operación corporativa.',0],
        ['El segmento puede definirse solo por el monto solicitado, sin revisar quién genera el ingreso ni para qué se utilizarán los recursos.',0]
      ],
      correct:'El destino es financiar la operación del negocio. Por eso la evaluación debe observar ventas, flujo, patrimonio, comportamiento y perfil del titular dentro de una lógica PyME.',
      application:'Antes de elegir un producto, identifica quién genera el ingreso, para qué se usará el dinero y de dónde saldrá el repago.',
      contrast:'Los distractores confunden identidad personal con destino empresarial o convierten el monto en criterio único de segmentación.',
      rule:'Segmento = cliente + fuente de pago + destino + complejidad; no solo monto.',
      wrong1:'Mira primero el destino del dinero y la fuente que pagará las cuotas. Aquí ambos están ligados al negocio.',
      route:['Identifica la necesidad: insumos para operar.','Identifica la fuente de pago: flujo de Panadería Horizonte.','Relaciona necesidad empresarial de pequeña escala con Banca PyME.'],
      routeSummary:'La Ruta correcta clasifica por naturaleza de la operación, no solo por quién firma o por el monto.'
    },
    {
      id:'motor', number:'02', title:'Motor de decisión PyME', slide:6, audio:'assets/pista_capacidad.m4a',
      short:'Puede pagar, quiere pagar, podemos recuperar y cumple con las reglas: cuatro preguntas antes de decidir.',
      meaning:'La evaluación PyME combina capacidad de pago, actitud de pago, capacidad de recuperación y cumplimiento de políticas. No es un puntaje aislado: es una lectura conjunta del negocio y del titular.',
      example:'Panadería Horizonte puede generar caja suficiente, pero si María presenta atrasos reiterados o información inconsistente, la capacidad positiva no elimina la alerta de comportamiento.',
      error:'Aprobar porque una sola variable luce bien. Ventas altas, garantía o buen historial no sustituyen el análisis integral.',
      question:'Dos negocios muestran el mismo excedente mensual. Uno tiene historial ordenado y el otro registra atrasos reiterados. ¿Qué conclusión es más sólida?',
      options:[
        ['La capacidad puede ser similar, pero el riesgo total cambia porque la actitud de pago y el comportamiento histórico agregan una dimensión distinta.',1],
        ['El riesgo es idéntico porque el excedente mensual determina por sí solo la posibilidad de aprobar y desembolsar el crédito solicitado.',0],
        ['El historial deja de ser relevante cuando el negocio genera excedente, porque la voluntad de pago no forma parte de la evaluación PyME.',0],
        ['La diferencia solo debería reflejarse en la garantía exigida, sin modificar la lectura de comportamiento ni la decisión crediticia general.',0]
      ],
      correct:'La capacidad responde si puede pagar; la actitud e historial ayudan a interpretar cómo ha cumplido. Dos clientes con igual flujo pueden representar riesgos distintos.',
      application:'La evaluación debe integrar números y conducta. Una precalificación cuantitativa favorable no equivale automáticamente a desembolso.',
      contrast:'Los distractores reducen toda la decisión al flujo o eliminan el valor de la información cualitativa.',
      rule:'Puede pagar ≠ quiere pagar. La decisión final necesita ambas lecturas y evidencia suficiente.',
      wrong1:'Separa la pregunta “¿puede pagar?” de “¿cómo ha pagado y qué tan consistente es la información?”.',
      route:['Compara la capacidad: es similar.','Compara el historial: es distinto.','Concluye que el riesgo total no puede ser idéntico.'],
      routeSummary:'La Ruta correcta distingue capacidad cuantitativa de actitud y comportamiento.'
    },
    {
      id:'capacidad', number:'03', title:'Capacidad, evidencia y trazabilidad', slide:8, audio:'assets/pista_capacidad.m4a',
      short:'Un dato declarado gana valor cuando puede verificarse y relacionarse con la fuente real de pago.',
      meaning:'El material construye ingreso neto y cuota máxima a partir de ingresos, descuentos, vivienda y obligaciones vigentes. En el simulador cada dato se acompaña de la evidencia que debería respaldarlo.',
      example:'Si un independiente declara S/ 8,000 mensuales, el sistema no trata esa cifra igual que un ingreso documentado: pedirá evidencia de continuidad, por ejemplo recibos por honorarios y antigüedad de actividad.',
      error:'Tomar un número ingresado como verdadero solo porque aparece en el formulario. Crédito requiere consistencia documental y trazabilidad.',
      question:'Un solicitante independiente declara ingresos elevados, pero solo puede mostrar un comprobante reciente y no acredita continuidad. ¿Cómo debería tratarse ese dato?',
      options:[
        ['Como un ingreso que requiere validación adicional antes de asignarle el mismo peso que a una fuente documentada y recurrente.',1],
        ['Como ingreso plenamente validado porque el monto declarado es suficiente para calcular capacidad sin revisar continuidad ni evidencia adicional.',0],
        ['Como señal automática de mal carácter porque la falta de documentos prueba que el solicitante pretende incumplir la obligación futura.',0],
        ['Como dato irrelevante porque los ingresos de trabajadores independientes no deberían formar parte de ninguna evaluación crediticia personal.',0]
      ],
      correct:'La cifra puede ser real, pero la evaluación debe comprobar recurrencia y estabilidad. La evidencia no reemplaza al dato: ayuda a decidir cuánto confiar en él.',
      application:'En el simulador, cada variable mostrará “de dónde sale” y si está sustentada o solo declarada.',
      contrast:'Los distractores aceptan el dato sin validación, convierten falta de evidencia en juicio moral o excluyen indebidamente una fuente de ingresos.',
      rule:'Dato declarado + evidencia + consistencia = dato útil para la decisión.',
      wrong1:'No confundas “no está suficientemente sustentado” con “es falso”. La respuesta correcta pide validar antes de ponderar igual.',
      route:['Identifica el dato: ingreso.','Pregunta por continuidad y respaldo documental.','Reduce confianza hasta verificar, sin prejuzgar al solicitante.'],
      routeSummary:'La Ruta correcta exige evidencia proporcional antes de asignar peso pleno al dato.'
    },
    {
      id:'soluciones', number:'04', title:'Necesidad, producto y riesgo', slide:17, audio:'assets/pista_productos.m4a',
      short:'Capital de trabajo, inversión, leasing e infraestructura responden a horizontes y respaldos diferentes.',
      meaning:'No existe un “mejor producto” en abstracto. La solución debe guardar coherencia con el destino, la vida útil del activo, el plazo de repago, la garantía y el riesgo que la entidad está dispuesta a asumir.',
      example:'Un horno que producirá durante años no debería financiarse con una estructura de caja de 90 días. El plazo debe conversar con la generación de valor del activo.',
      error:'Escoger producto por tasa o por monto sin verificar el destino y la fuente de pago.',
      question:'Panadería Horizonte necesita comprar un horno industrial que utilizará durante varios años. ¿Qué principio debería guiar la estructura financiera?',
      options:[
        ['Relacionar el plazo y el producto con la vida útil y generación de valor del activo, evaluando inversión o leasing según la estructura aplicable.',1],
        ['Usar siempre capital de trabajo de corto plazo porque cualquier necesidad empresarial debe pagarse rápidamente para reducir el riesgo del banco.',0],
        ['Elegir el producto con menor cuota inicial sin considerar destino, garantía ni duración del activo porque el monto mensual resume toda la operación.',0],
        ['Clasificar la operación como Banca Personal si el horno se compra a nombre de María, aunque el activo se utilice exclusivamente en el negocio.',0]
      ],
      correct:'Un activo de larga vida requiere una estructura compatible con el periodo en que generará valor. El producto debe seguir la necesidad, no al revés.',
      application:'La herramienta PyME recomendará una familia de solución a partir del destino, sin fingir una aprobación real.',
      contrast:'Los distractores fuerzan corto plazo, reducen la decisión a la cuota o confunden titularidad con naturaleza económica del uso.',
      rule:'Necesidad → producto → plazo → garantía → riesgo.',
      wrong1:'Piensa cuánto tiempo generará valor el activo y evita financiar una inversión de largo uso con una obligación demasiado corta.',
      route:['Define destino: activo productivo.','Relaciona vida útil con plazo.','Evalúa inversión o leasing según estructura y garantías.'],
      routeSummary:'La Ruta correcta alinea producto y plazo con el destino económico del financiamiento.'
    }
  ],
  quiz:[
    {
      text:'¿Qué variable, además del monto, ayuda a distinguir Banca Personal, PyME y Empresa?',
      options:[
        ['La fuente de repago, el destino del financiamiento y la complejidad de la operación ayudan a ubicar correctamente el segmento.',1],
        ['El color del producto comercial determina el segmento, porque las políticas internas se organizan principalmente por campañas publicitarias.',0],
        ['La edad del solicitante define por sí sola si pertenece a Personal, PyME o Empresa, sin necesidad de observar la actividad financiada.',0],
        ['El monto solicitado es suficiente para clasificar cualquier operación, por lo que revisar destino o fuente de pago solo agrega información secundaria.',0]
      ],
      correct:'La segmentación necesita entender cliente, fuente de pago, destino y complejidad; el monto por sí solo no basta.',
      application:'La misma persona puede tener una necesidad personal y otra empresarial en momentos distintos.',
      contrast:'Los distractores convierten una sola variable irrelevante o insuficiente en criterio absoluto.',
      rule:'Clasifica la operación por su naturaleza económica y fuente de repago.',
      wrong1:'Busca la opción que explique por qué la misma persona puede relacionarse con más de un segmento.',
      route:['Identifica quién genera el ingreso.','Define para qué se usa el dinero.','Evalúa complejidad y fuente de pago.'],
      routeSummary:'La Ruta correcta usa varias dimensiones para segmentar.'
    },
    {
      text:'En un scoring personal didáctico, ¿por qué no debería bastar con ingresar el sueldo declarado?',
      options:[
        ['Porque también importa verificar la fuente, la estabilidad, las obligaciones vigentes y la evidencia que respalda el ingreso utilizado.',1],
        ['Porque el sueldo solo sirve para calcular impuestos y no debería utilizarse en ninguna estimación de capacidad de pago crediticia.',0],
        ['Porque la única variable válida para un crédito personal es el historial, aunque la cuota supere ampliamente el ingreso disponible.',0],
        ['Porque todos los solicitantes deberían recibir el mismo monto siempre que declaren una ocupación formal, sin importar sus demás obligaciones.',0]
      ],
      correct:'La capacidad se construye con ingreso verificable, estabilidad y obligaciones. Un número aislado no explica cuánto flujo queda disponible.',
      application:'El simulador muestra evidencias y permite marcar si cada dato fue validado.',
      contrast:'Las otras opciones eliminan variables necesarias o convierten una sola señal en criterio universal.',
      rule:'Ingreso útil = monto + fuente + continuidad + evidencia.',
      wrong1:'Piensa qué necesita saber el banco para confiar en que ese ingreso continuará y estará disponible para pagar.',
      route:['Identifica el ingreso.','Verifica su origen.','Descuenta obligaciones y revisa estabilidad.'],
      routeSummary:'La Ruta correcta evalúa ingreso verificable y disponible.'
    },
    {
      text:'Un cliente obtiene un score alto, pero durante la validación aparecen referencias negativas graves e información inconsistente. ¿Qué lectura corresponde?',
      options:[
        ['La precalificación cuantitativa puede ser favorable, pero la decisión final debe incorporar la validación cualitativa antes de aprobar o desembolsar.',1],
        ['El score alto obliga a desembolsar porque cualquier observación cualitativa debe ignorarse cuando los números superan el umbral de aprobación.',0],
        ['La información cualitativa solo sirve después del desembolso para definir cobranza, por lo que no debe intervenir en la decisión inicial.',0],
        ['Una referencia negativa elimina automáticamente toda posibilidad de crédito en cualquier entidad, sin importar su gravedad ni la política aplicable.',0]
      ],
      correct:'Los números apoyan la decisión, pero no sustituyen carácter, consistencia y evidencia. Precalificar no equivale automáticamente a desembolsar.',
      application:'El simulador separa resultado cuantitativo, validación cualitativa y decisión final.',
      contrast:'Los distractores convierten el score o una referencia aislada en una regla absoluta.',
      rule:'Score favorable ≠ desembolso automático.',
      wrong1:'Recuerda las 5C: capacidad y carácter son dimensiones distintas y ambas pueden modificar la decisión.',
      route:['Revisa resultado numérico.','Revisa consistencia y referencias.','Integra ambas capas antes de decidir.'],
      routeSummary:'La Ruta correcta combina cuantitativo y cualitativo.'
    },
    {
      text:'¿Qué enseña comparar el mismo cliente bajo políticas expansiva, equilibrada y conservadora?',
      options:[
        ['Que el cliente puede ser el mismo y cambiar la decisión porque la entidad modifica ponderaciones, umbrales y tolerancia al riesgo.',1],
        ['Que el score del cliente debería ser idéntico en todos los bancos porque el riesgo crediticio es una propiedad fija e independiente de políticas.',0],
        ['Que una política expansiva siempre debe aprobar todas las solicitudes, aunque la capacidad sea insuficiente o existan alertas documentales graves.',0],
        ['Que una política conservadora solo cambia la tasa comercial, pero nunca puede modificar monto, condiciones o decisión de aprobación crediticia.',0]
      ],
      correct:'El apetito de riesgo cambia la forma en que una entidad pondera variables y define umbrales. Por eso una misma información puede producir decisiones diferentes.',
      application:'El comparador muestra los tres resultados simultáneamente sin volver a ingresar datos.',
      contrast:'Los distractores tratan el riesgo como un resultado universal o convierten cada política en una regla simplista.',
      rule:'Mismo cliente + política distinta = decisión potencialmente distinta.',
      wrong1:'No cambies al cliente. Pregunta qué elemento del banco sí está cambiando: tolerancia, ponderaciones y umbrales.',
      route:['Mantén los datos del cliente.','Cambia la política de riesgo.','Observa cómo varían score, monto o decisión.'],
      routeSummary:'La Ruta correcta atribuye el cambio a la política de riesgo.'
    },
    {
      text:'En PyME, un negocio declara ventas suficientes pero presenta patrimonio negativo. ¿Qué conclusión es más adecuada?',
      options:[
        ['Cumplir el umbral de ventas no basta; el patrimonio negativo es una alerta que obliga a profundizar la evaluación antes de continuar.',1],
        ['Las ventas suficientes compensan automáticamente cualquier patrimonio negativo porque el banco debe priorizar el volumen sobre la estructura financiera.',0],
        ['El patrimonio negativo solo importa en Banca Empresa y no debería influir en una evaluación PyME cuando existe movimiento comercial frecuente.',0],
        ['La mejor respuesta es aprobar el crédito con una tasa mayor porque el precio compensa completamente el deterioro patrimonial del negocio.',0]
      ],
      correct:'El material presenta ventas, antigüedad y salud contable como filtros que deben leerse en conjunto. Un solo requisito positivo no resuelve toda la evaluación.',
      application:'El preevaluador PyME señala el patrimonio como evidencia distinta a ventas y flujo.',
      contrast:'Los distractores permiten que ventas o tasa sustituyan una alerta estructural.',
      rule:'Una evaluación integral no compensa mecánicamente todas las alertas.',
      wrong1:'Vuelve al filtro de preevaluación: destino, ventas y patrimonio son capas diferentes.',
      route:['Confirma ventas.','Revisa patrimonio.','Mantén la alerta y profundiza antes de decidir.'],
      routeSummary:'La Ruta correcta no deja que ventas oculten deterioro patrimonial.'
    },
    {
      text:'¿Qué solución es conceptualmente más coherente para una necesidad de maquinaria que generará valor durante varios años?',
      options:[
        ['Una estructura de inversión o leasing con plazo compatible con la vida útil y generación de valor del activo.',1],
        ['Un financiamiento de caja muy corto, aunque la cuota absorba el flujo, porque reducir plazo siempre disminuye el riesgo total de la operación.',0],
        ['Un préstamo personal de libre disponibilidad sin importar que el activo se use en el negocio y que la fuente de pago sea empresarial.',0],
        ['Una carta fianza como sustituto del financiamiento porque garantiza la compra del activo y entrega automáticamente los recursos al proveedor.',0]
      ],
      correct:'La estructura debe conversar con el destino y la vida del activo. Inversión y leasing son familias coherentes para activos productivos de mediano o largo uso.',
      application:'El evaluador PyME propone familias de producto, no una aprobación comercial real.',
      contrast:'Las otras opciones fuerzan corto plazo, confunden segmento o usan una garantía como si fuera desembolso.',
      rule:'Alinea plazo y producto con la generación de valor del activo.',
      wrong1:'Pregunta cuánto tiempo utilizará el activo y qué producto está diseñado para financiar inversión.',
      route:['Identifica activo productivo.','Estima horizonte de uso.','Relaciona con inversión o leasing.'],
      routeSummary:'La Ruta correcta vincula inversión con plazo coherente.'
    }
  ],
  resources:[
    {id:'ppt',type:'ppt',title:'PPT de la sesión',desc:'Presentación institucional de Banca Personal, PyME y Empresa.',thumb:'assets/thumbs/ppt.png'},
    {id:'pdf',type:'pdf',title:'Artículo de lectura',desc:'Artículo didáctico de la Sesión 3 con caso conductor y ejemplos.',thumb:'assets/thumbs/pdf.png'},
    {id:'infographic',type:'image',title:'Infografía · Evaluación y Soluciones Banca PyME',desc:'Mapa visual del motor de decisión, preevaluación, soluciones y riesgo.',thumb:'assets/thumbs/infografia.png'},
    {id:'video-main',type:'video',title:'Video explicativo de apertura',desc:'Resumen general de la Sesión 3.',thumb:'assets/thumbs/video.png'},
    {id:'video-short',type:'video',title:'Microvideo · Cómo entender la segmentación bancaria',desc:'Video corto completo sobre Personal, PyME y Empresa.',thumb:'assets/thumbs/microvideo.png'},
    {id:'video-clip',type:'video',title:'Extracto · Evaluación dual y clasificación',desc:'Fragmento breve del segundo video, utilizado solo como refuerzo.',thumb:'assets/thumbs/clip.png'},
    {id:'audio',type:'audio',title:'Resumen de audio',desc:'Conversación sobre cómo deciden los bancos financiar una PyME.',thumb:'assets/thumbs/audio.png'}
  ]
};
