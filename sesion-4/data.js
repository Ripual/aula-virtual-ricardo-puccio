window.DATA = {
  concepts: [
    {
      id:'radiografia', number:'01', title:'Tres estados, tres preguntas', slide:3, audio:'assets/pista_radiografia.m4a',
      short:'Balance, resultados y flujo de efectivo muestran posición, desempeño y caja; no son intercambiables.',
      meaning:'Los estados financieros funcionan como una radiografía empresarial. El balance muestra recursos, obligaciones y patrimonio; el estado de resultados muestra ingresos, costos y utilidad; el flujo de efectivo sigue entradas y salidas reales de dinero.',
      example:'Panadería Horizonte puede registrar utilidad contable y aun así sentir presión de caja si cobra tarde, acumula inventario o debe pagar antes de recibir efectivo.',
      error:'Confundir utilidad con efectivo disponible o creer que un solo estado financiero basta para evaluar capacidad de pago.',
      question:'Una empresa muestra utilidades elevadas, pero su flujo operativo se vuelve negativo durante varios periodos. ¿Qué lectura es más defendible?',
      options:[
        ['La utilidad no elimina la alerta de caja; el analista debe revisar cobros, inventarios, pagos y sostenibilidad del flujo antes de concluir.',1],
        ['La utilidad elevada basta para considerar que existe liquidez, porque todo beneficio contable se convierte automáticamente en efectivo disponible.',0],
        ['El flujo operativo negativo solo importa cuando el patrimonio también es negativo, por lo que puede ignorarse mientras la empresa muestre ganancias.',0],
        ['La situación confirma que el balance general es innecesario, porque el estado de resultados resume por sí solo toda la capacidad financiera del negocio.',0]
      ],
      correct:'Utilidad y efectivo no son sinónimos. Una empresa puede ganar contablemente y al mismo tiempo enfrentar tensión de caja por desfases en cobros, inventarios o pagos.',
      application:'Antes de aprobar, conecta posición financiera, desempeño y movimientos reales de caja.',
      contrast:'Los distractores convierten la utilidad en equivalente de efectivo o eliminan información que sigue siendo necesaria.',
      rule:'Posición + desempeño + caja = lectura financiera más completa.',
      wrong1:'Pregunta si el dinero realmente entró a caja o si la utilidad quedó atrapada en cuentas por cobrar, inventarios u otros usos.',
      route:['Distingue utilidad contable de efectivo.','Observa el flujo operativo.','Busca la causa del desfase antes de decidir.'],
      routeSummary:'La Ruta correcta no confunde rentabilidad con liquidez.'
    },
    {
      id:'ratios', number:'02', title:'El ratio es una señal, no una sentencia', slide:7, audio:'assets/pista_ratios.m4a',
      short:'Liquidez, endeudamiento y cobertura ayudan a diagnosticar, pero necesitan contexto y lectura conjunta.',
      meaning:'Un ratio transforma cifras aisladas en una relación útil. Sin embargo, su interpretación depende de la composición de las cuentas, el periodo, el sector, la calidad de la información y otros indicadores.',
      example:'Una liquidez corriente de 2.00 significa literalmente que existen S/ 2 de activo corriente por cada S/ 1 de pasivo corriente. No significa que haya S/ 2 en caja: parte puede estar en inventarios o cuentas por cobrar lentas.',
      error:'Etiquetar automáticamente un ratio como “bueno” o “malo” sin revisar qué hay detrás del numerador y el denominador.',
      question:'Panadería Horizonte presenta liquidez corriente de 2.00. ¿Cuál es la mejor interpretación?',
      options:[
        ['Existe una cobertura corriente inicial favorable, pero debemos revisar la composición del activo corriente y su capacidad real de convertirse en efectivo a tiempo.',1],
        ['La empresa tiene exactamente S/ 2 en efectivo por cada sol de deuda corriente y, por lo tanto, el crédito puede aprobarse sin análisis adicional.',0],
        ['La empresa no necesita revisar inventarios ni cuentas por cobrar porque cualquier valor superior a 1 elimina por definición todo riesgo de corto plazo.',0],
        ['El valor 2.00 demuestra que la rentabilidad es alta, porque liquidez corriente y margen neto expresan esencialmente la misma relación financiera.',0]
      ],
      correct:'La lectura literal describe cobertura, pero la lectura bancaria debe preguntar qué tan líquidos son realmente los activos corrientes y cuándo vencen las obligaciones.',
      application:'En el laboratorio cada ratio tendrá lectura literal, pregunta contextual y factores que pueden cambiar su significado.',
      contrast:'Los distractores convierten activos corrientes en efectivo o confunden liquidez con rentabilidad.',
      rule:'Ratio = señal + composición + contexto + comparación.',
      wrong1:'No te quedes en “2 es mayor que 1”. Pregunta de qué está compuesto ese 2 y cuándo debe pagarse el 1.',
      route:['Lee la fórmula.','Interpreta qué representa cada cuenta.','Añade calidad, plazo y contexto antes de concluir.'],
      routeSummary:'La Ruta correcta pasa del cálculo a la interpretación contextual.'
    },
    {
      id:'rentabilidad', number:'03', title:'Rentabilidad y eficiencia no cuentan toda la historia', slide:8, audio:'assets/pista_contexto.m4a',
      short:'Margen, ROA (Rentabilidad sobre los Activos), ROE (Rentabilidad sobre el Patrimonio), rotación y días de cobro/pago deben leerse según el modelo de negocio y su ciclo financiero.',
      meaning:'El margen relaciona beneficio con ventas; ROA (Rentabilidad sobre los Activos) con activos; ROE (Rentabilidad sobre el Patrimonio) con patrimonio. La eficiencia observa rotación y tiempos de cobro/pago. Un valor alto o bajo no tiene el mismo significado en todos los sectores ni bajo todas las estructuras de capital.',
      example:'Un ROE muy alto puede reflejar buen desempeño, pero también una base patrimonial pequeña o alto apalancamiento. Una rotación baja puede ser preocupante en productos perecibles y normal en negocios con inventarios de ciclo largo.',
      error:'Comparar ratios entre empresas sin considerar sector, intensidad de activos, estacionalidad, apalancamiento o política comercial.',
      question:'Una empresa muestra ROE (Rentabilidad sobre el Patrimonio) muy alto. ¿Qué debería hacer un analista antes de concluir que la empresa es “excelente”?',
      options:[
        ['Revisar si el resultado proviene de buen desempeño operativo o también de una base patrimonial pequeña y mayor apalancamiento, comparándolo con el sector.',1],
        ['Aprobar el crédito inmediatamente porque un ROE alto siempre demuestra liquidez, solvencia y capacidad de pago suficientes para cualquier obligación.',0],
        ['Ignorar el patrimonio y concentrarse solo en ventas, porque el ROE no se relaciona con la estructura de financiamiento de la empresa.',0],
        ['Reducir el análisis al margen neto, porque todos los ratios de rentabilidad responden exactamente a la misma pregunta y deberían arrojar la misma lectura.',0]
      ],
      correct:'ROE relaciona beneficio y patrimonio. Puede ser alto por desempeño, por poco patrimonio o por apalancamiento; por eso debe conectarse con deuda, activos y contexto sectorial.',
      application:'El laboratorio permite modificar variables y observar qué indicadores cambian y cuáles permanecen aparentemente favorables.',
      contrast:'Los distractores convierten un ratio en aprobación automática o tratan todas las métricas de rentabilidad como equivalentes.',
      rule:'Un ratio aislado nunca reemplaza una lectura integrada.',
      wrong1:'Pregunta qué aparece en el denominador del ROE y cómo podría cambiar el resultado sin que el negocio sea necesariamente más sano.',
      route:['Identifica que ROE usa patrimonio.','Relaciona patrimonio con deuda.','Compara desempeño y estructura antes de concluir.'],
      routeSummary:'La Ruta correcta evita interpretar rentabilidad sin estructura financiera.'
    },
    {
      id:'riesgo', number:'04', title:'Del diagnóstico al riesgo residual', slide:14, audio:'assets/pista_riesgo.m4a',
      short:'Probabilidad e impacto priorizan amenazas; los controles solo reducen exposición cuando se ejecutan y dejan evidencia.',
      meaning:'Después del diagnóstico financiero, la gestión integral del riesgo pregunta qué puede salir mal, con qué probabilidad, qué impacto tendría, qué controles existen y qué exposición permanece. El riesgo inherente precede a controles; el residual queda después de controles efectivos.',
      example:'Si una caída de ventas es posible y tendría impacto significativo, el banco puede exigir seguimiento de ventas y flujo. Si ese control no se ejecuta o no deja evidencia, no deberíamos asumir que el riesgo residual realmente disminuyó.',
      error:'Restar mecánicamente un control al riesgo como si fuera una fórmula aritmética o suponer que un control escrito es automáticamente efectivo.',
      question:'Una empresa tiene riesgo inherente alto y un manual menciona varios controles, pero no existe evidencia de que se ejecuten. ¿Qué conclusión es más adecuada?',
      options:[
        ['No corresponde asumir que el riesgo residual es bajo; la efectividad del control exige ejecución, responsable, oportunidad y evidencia verificable.',1],
        ['El riesgo residual debe considerarse bajo porque la existencia formal del control en un manual demuestra que la exposición ya fue mitigada.',0],
        ['El riesgo inherente desaparece cuando existe cualquier control, aunque nadie pueda demostrar quién lo ejecuta ni con qué frecuencia se aplica.',0],
        ['La evidencia del control solo es relevante para auditoría después del crédito, pero no debería afectar la lectura de riesgo antes de decidir.',0]
      ],
      correct:'Un control no es efectivo por existir en papel. Debe funcionar en la práctica y dejar evidencia suficiente para sostener la reducción esperada del riesgo.',
      application:'La última misión del laboratorio separa riesgo inherente, controles evaluados y riesgo residual.',
      contrast:'Los distractores confunden existencia formal con efectividad y eliminan el valor de la evidencia.',
      rule:'Control efectivo = diseño + ejecución + responsable + oportunidad + evidencia.',
      wrong1:'Pregunta qué prueba que el control realmente ocurrió y produjo la mitigación esperada.',
      route:['Identifica el riesgo antes del control.','Verifica ejecución y evidencia.','Solo entonces evalúa la exposición residual.'],
      routeSummary:'La Ruta correcta exige comprobar la efectividad del control antes de reducir el riesgo.'
    }
  ],
  quiz:[
    {
      text:'¿Qué diferencia esencial existe entre balance general, estado de resultados y flujo de efectivo?',
      options:[
        ['El balance muestra posición financiera; resultados muestra desempeño; y flujo de efectivo sigue entradas y salidas reales de dinero.',1],
        ['Los tres muestran exactamente la misma información, pero con formatos distintos para facilitar la presentación a usuarios diferentes.',0],
        ['El balance solo sirve para impuestos, resultados para ventas y flujo de efectivo únicamente para calcular tasas de interés bancarias.',0],
        ['El flujo de efectivo reemplaza al balance y al estado de resultados porque cualquier análisis financiero puede hacerse solo con caja.',0]
      ],
      correct:'Cada estado responde una pregunta diferente. La lectura bancaria mejora cuando posición, desempeño y caja se conectan.',
      application:'Usa los tres antes de juzgar capacidad de pago.', contrast:'Los distractores confunden funciones o eliminan estados necesarios.', rule:'Tres estados, tres preguntas complementarias.', wrong1:'Piensa qué muestra “qué posee y debe”, qué muestra “qué ganó” y qué muestra “qué dinero entró o salió”.', route:['Balance = posición.','Resultados = desempeño.','Flujo = caja.'], routeSummary:'La Ruta correcta distingue finalidad de cada estado.'
    },
    {
      text:'Si aumentan los inventarios 30 % y el activo corriente total se mantiene, ¿qué señal es razonable observar?',
      options:[
        ['La liquidez corriente puede mantenerse igual, mientras la prueba ácida y la rotación de inventario se deterioran porque cambia la composición del activo corriente.',1],
        ['La liquidez corriente necesariamente cae a cero porque cualquier incremento de inventarios elimina automáticamente todos los demás activos corrientes.',0],
        ['La prueba ácida mejora porque excluye inventarios y, por eso, un inventario mayor siempre incrementa el numerador de ese ratio.',0],
        ['Ningún ratio puede cambiar porque los inventarios no forman parte de los estados financieros usados para evaluar liquidez o eficiencia.',0]
      ],
      correct:'El ejemplo muestra por qué composición importa. El total corriente puede no cambiar, pero la porción menos líquida aumenta.',
      application:'En “¿Qué pasaría si...?” compara no solo valores, sino qué cuenta cambió.', contrast:'Los distractores desconocen la fórmula o la composición del activo corriente.', rule:'El mismo total puede esconder una estructura diferente.', wrong1:'Revisa qué ratio descuenta inventarios y cuál usa el activo corriente total.', route:['Mantén AC total.','Aumenta inventario.','Compara liquidez corriente con prueba ácida y rotación.'], routeSummary:'La Ruta correcta distingue total y composición.'
    },
    {
      text:'¿Qué significa una cobertura de intereses de 3.0 veces en el ejercicio?',
      options:[
        ['Que la utilidad operativa utilizada en el cálculo equivale a tres veces los gastos financieros del periodo analizado.',1],
        ['Que la empresa puede triplicar cualquier deuda solicitada sin revisar flujo, vencimientos, garantías ni otros riesgos financieros.',0],
        ['Que los intereses representan tres veces el activo total y por eso el nivel de endeudamiento debe considerarse necesariamente extremo.',0],
        ['Que la empresa tiene tres años de liquidez garantizada porque cobertura de intereses y liquidez corriente son indicadores equivalentes.',0]
      ],
      correct:'Cobertura de intereses es BAII / gastos financieros. Describe cuántas veces la utilidad operativa cubre el costo financiero usado en el cálculo.',
      application:'Luego somete el indicador a estrés: si suben intereses o baja BAII, la cobertura cambia.', contrast:'Los distractores extrapolan el ratio a decisiones que no puede sostener solo.', rule:'Interpreta exactamente lo que relaciona la fórmula.', wrong1:'Mira numerador y denominador: BAII y gastos financieros.', route:['Identifica BAII.','Identifica gastos financieros.','Expresa la relación como veces.'], routeSummary:'La Ruta correcta mantiene el alcance del ratio.'
    },
    {
      text:'¿Qué diferencia existe entre capacidad y apetito de riesgo?',
      options:[
        ['La capacidad es el máximo que la entidad puede soportar; el apetito es el nivel que decide asumir activamente dentro de esa capacidad.',1],
        ['La capacidad y el apetito son sinónimos y ambos representan el monto exacto que la entidad debe prestar a cualquier cliente que califique.',0],
        ['La capacidad depende solo del cliente y el apetito depende solo de la tasa, por lo que no forman parte del gobierno de riesgos institucional.',0],
        ['El apetito siempre debe ser igual a la capacidad máxima porque dejar margen sin usar significa administrar el riesgo de manera ineficiente.',0]
      ],
      correct:'Capacidad es límite de supervivencia; apetito es una elección estratégica dentro de ese límite.',
      application:'Dos entidades pueden aceptar exposiciones diferentes aun observando datos similares.', contrast:'Los distractores confunden límite máximo con nivel elegido.', rule:'Apetito ≤ capacidad.', wrong1:'Distingue “cuánto puedo soportar” de “cuánto decido asumir”.', route:['Define límite máximo.','Define elección estratégica.','Relaciona ambos.'], routeSummary:'La Ruta correcta separa capacidad y apetito.'
    },
    {
      text:'¿Por qué un control sin evidencia no debería reducir automáticamente la evaluación del riesgo residual?',
      options:[
        ['Porque sin ejecución y evidencia no sabemos si el control funcionó realmente ni si mitigó la exposición que pretendía reducir.',1],
        ['Porque los controles nunca reducen riesgos y solo sirven para documentar procesos después de que un evento negativo ya ocurrió.',0],
        ['Porque la evidencia solo cambia la rentabilidad, mientras el riesgo residual se obtiene únicamente multiplicando ventas por patrimonio.',0],
        ['Porque todo control debe eliminar por completo el riesgo; si permanece cualquier exposición, el control debe considerarse inexistente.',0]
      ],
      correct:'La gestión requiere demostrar que el control se ejecuta con responsable, oportunidad y evidencia. Solo entonces puede sostenerse una reducción esperada.',
      application:'El laboratorio marca los controles sin evidencia como “no asumir efectividad”.', contrast:'Los distractores niegan la mitigación o exigen eliminación total.', rule:'No supongas efectividad sin evidencia.', wrong1:'Pregunta cómo comprobarías que el control ocurrió de verdad.', route:['Revisa diseño.','Verifica ejecución.','Busca evidencia antes de estimar residual.'], routeSummary:'La Ruta correcta convierte control formal en control verificable.'
    }
  ],
  resources:[
    {id:'ppt',type:'ppt',title:'PPT de la sesión',desc:'Presentación institucional: estados financieros, ratios, riesgos y gobierno.',thumb:'assets/thumbs/ppt.png'},
    {id:'pdf',type:'pdf',title:'Artículo de lectura',desc:'Artículo didáctico de la Sesión 4 con Panadería Horizonte y ejercicios.',thumb:'assets/thumbs/pdf.png'},
    {id:'excel',type:'excel',title:'Excel real · Laboratorio Sesión 4',desc:'Hoja funcional que sustenta los cálculos, escenarios y módulo de riesgos.',thumb:'assets/thumbs/excel.png'},
    {id:'video-main',type:'video',title:'Video explicativo de apertura',desc:'Finanzas y Gestión de Riesgos: recorrido general de la sesión.',thumb:'assets/thumbs/video.png'},
    {id:'video-short',type:'video',title:'Video corto · Cómo evalúan los bancos un crédito',desc:'Refuerzo breve sobre lectura financiera y decisión crediticia.',thumb:'assets/thumbs/microvideo.png'},
    {id:'infographic',type:'image',title:'Infografía · Gestión Bancaria y Análisis Financiero',desc:'Infografía integradora de diagnóstico financiero, ratios, decisión crediticia, riesgo, controles y líneas de defensa.',thumb:'assets/thumbs/infografia.png'},
    {id:'audio',type:'audio',title:'Resumen de audio',desc:'Conversación completa: Radiografía bancaria del riesgo corporativo.',thumb:'assets/thumbs/audio.png'}
  ]
};
