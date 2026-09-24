const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const SECTIONS=['inicio','conceptos','simulador','comprobacion','recursos','cierre'];
let conceptIndex=0, resourceContext=null, currentUtter=null, toneCtx=null;
const state={
  section:'inicio',font:1,sound:true,layout:'auto',theme:'light',
  concepts:{},simIndex:0,simStates:{},scenarios:new Set(),detect:null,
  quizOrder:[],quizIndex:0,quizStates:{},quizScore:0
};
function esc(v=''){return String(v).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function shuffleIndices(n){const a=[...Array(n).keys()];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function toast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');clearTimeout(t._tm);t._tm=setTimeout(()=>t.classList.remove('show'),1800);}
function beep(kind='ok'){if(!state.sound)return;try{toneCtx=toneCtx||new (window.AudioContext||window.webkitAudioContext)();const o=toneCtx.createOscillator(),g=toneCtx.createGain();o.type='sine';o.frequency.value=kind==='bad'?220:kind==='soft'?420:640;g.gain.setValueAtTime(.0001,toneCtx.currentTime);g.gain.exponentialRampToValueAtTime(.055,toneCtx.currentTime+.01);g.gain.exponentialRampToValueAtTime(.0001,toneCtx.currentTime+.10);o.connect(g);g.connect(toneCtx.destination);o.start();o.stop(toneCtx.currentTime+.11);}catch(e){}}
function go(section){if(!SECTIONS.includes(section))return;closeAllDialogs();state.section=section;$$('.section').forEach(s=>s.classList.toggle('active',s.id===section));$$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.go===section));window.scrollTo({top:0,behavior:'smooth'});if(section==='conceptos')renderConceptCards();if(section==='simulador')renderSimulator();if(section==='comprobacion')ensureQuiz();if(section==='recursos')renderResources();}
function openDialog(id){const d=$('#'+id);if(!d)return;try{if(!d.open)d.showModal();document.body.classList.add('dialog-open');}catch(e){d.setAttribute('open','');document.body.classList.add('dialog-open');}}
function closeDialog(id){const d=$('#'+id);if(!d)return;stopSpeech();$$('audio,video',d).forEach(m=>{try{m.pause();m.currentTime=m.currentTime||0;}catch(e){}});try{if(d.open)d.close();}catch(e){d.removeAttribute('open');}if(!$$('dialog[open]').length)document.body.classList.remove('dialog-open');}
function closeAllDialogs(){$$('dialog[open]').forEach(d=>closeDialog(d.id));}
function toggleFullscreen(el){const y=window.scrollY; if(!document.fullscreenElement){el.requestFullscreen?.().then(()=>{el.dataset.preFsScroll=String(y);setTimeout(()=>{try{el.scrollTop=0;}catch(e){}},30);}).catch(()=>{});}else{document.exitFullscreen?.().then(()=>{const yy=Number(el.dataset.preFsScroll||y);setTimeout(()=>window.scrollTo(0,yy),30);});}}
function applyLayout(){const mode=state.layout;let active=mode;if(mode==='auto')active=innerWidth/Math.max(innerHeight,1)>1.5?'16x9':'4x3';document.documentElement.dataset.layoutActive=active;document.documentElement.dataset.layoutMode=mode;$('#layoutSelect').value=mode;}
function updateFont(){document.documentElement.style.setProperty('--font-scale',state.font.toFixed(2));}
function applyTheme(){document.documentElement.dataset.theme=state.theme;const b=$('#themeBtn');if(b){b.textContent=state.theme==='dark'?'☀':'◐';b.setAttribute('aria-pressed',state.theme==='dark'?'true':'false');b.title=state.theme==='dark'?'Cambiar a modo claro':'Cambiar a modo oscuro';}}

/* speech */
function pickVoice(){const voices=speechSynthesis.getVoices?.()||[];const wants=['es-PE','es-419','es-MX','es-US','es'];for(const lang of wants){const v=voices.find(x=>(x.lang||'').toLowerCase()===lang.toLowerCase())||voices.find(x=>(x.lang||'').toLowerCase().startsWith(lang.toLowerCase()));if(v)return v;}return voices.find(x=>(x.lang||'').toLowerCase().startsWith('es'))||null;}
function speak(text){if(!text||!('speechSynthesis'in window))return;stopSpeech();currentUtter=new SpeechSynthesisUtterance(text);currentUtter.lang='es-PE';const v=pickVoice();if(v)currentUtter.voice=v;currentUtter.rate=.96;currentUtter.pitch=1;speechSynthesis.speak(currentUtter);}
function stopSpeech(){if('speechSynthesis'in window)speechSynthesis.cancel();currentUtter=null;}
function pauseSpeech(){if('speechSynthesis'in window)speechSynthesis.pause();}
function resumeSpeech(){if('speechSynthesis'in window)speechSynthesis.resume();}
function speechControlsHTML(extra=''){return `<div class="speech-controls" ${extra}><button type="button" data-speech="read">▶ Leer</button><button type="button" data-speech="explain">💡 Explicar</button><button type="button" data-speech="pause">Ⅱ Pausar</button><button type="button" data-speech="resume">↻ Continuar</button><button type="button" data-speech="stop">■ Detener</button></div>`;}
function bindSpeechControls(root,getText){$$('[data-speech]',root).forEach(b=>b.addEventListener('click',()=>{const a=b.dataset.speech;if(a==='pause')return pauseSpeech();if(a==='resume')return resumeSpeech();if(a==='stop')return stopSpeech();const t=getText(a);if(t)speak(t);}));}
function slideText(slide,type){const o=RT.ppt?.[Math.max(0,slide-1)]||{};return o[type]||'';}

/* question engine */
function createQState(q){return{order:shuffleIndices(q.options.length),selected:null,firstWrong:null,phase:'select1',result:null};}
function questionDone(s){return s.phase==='correct'||s.phase==='route';}
function feedbackGrid(items){return `<div class="feedback-grid">${items.map(x=>`<div><strong>${esc(x[0])}</strong><p>${esc(x[1])}</p></div>`).join('')}</div>`;}
function renderQuestion(host,q,s,cfg={}){
  if(!s.order)s.order=shuffleIndices(q.options.length);
  const locked=s.phase==='firstWrong'||questionDone(s);
  const opts=s.order.map((orig,pos)=>{
    const [text,ok]=q.options[orig];
    const selected=s.selected===orig;
    const firstWrong=s.firstWrong===orig;
    const route=s.phase==='route';
    const classes=['option',selected?'selected':'',firstWrong?'wrong-choice':'',route&&ok?'correct-choice':''].filter(Boolean).join(' ');
    const disabled=(locked||(s.phase==='select2'&&firstWrong))?'disabled':'';
    return `<button type="button" class="${classes}" data-opt="${orig}" ${disabled} aria-pressed="${selected?'true':'false'}"><strong>${String.fromCharCode(65+pos)}.</strong> ${esc(text)}</button>`;
  }).join('');
  let feedback='';
  if(s.phase==='correct'){
    feedback=`<div class="feedback good" data-feedback><div class="feedback-title"><span>✓</span><div><h4>Respuesta correcta</h4><p>Tu elección es defendible. Ahora revisa el razonamiento completo.</p></div></div><p class="feedback-main">${esc(q.correct)}</p>${feedbackGrid([
      ['Por qué es correcta',q.correct],['Cómo se aplica',q.application],['Por qué no las otras',q.contrast],['Regla que puedes transferir',q.rule]
    ])}<div class="feedback-closing"><strong>Conexión con la sesión:</strong> la respuesta no depende de memorizar una letra, sino de reconocer qué evidencia cambia la voluntad, la capacidad, el respaldo o la recuperación del crédito.</div></div>`;
  }else if(s.phase==='firstWrong'){
    const chosen=q.options[s.firstWrong]?.[0]||'';
    feedback=`<div class="feedback bad" data-feedback><div class="feedback-title"><span>↺</span><div><h4>Primer intento incorrecto</h4><p>No se revela todavía la respuesta correcta. Usa la pista y vuelve a decidir.</p></div></div><p class="feedback-main">${esc(q.wrong1)}</p>${feedbackGrid([
      ['Tu elección',chosen],['Qué debes revisar','Identifica primero qué dimensión del crédito está en juego: voluntad, capacidad, respaldo, entorno, seguimiento, deterioro o impacto financiero.'],['Pista de razonamiento',q.rule],['Segundo intento','Pulsa “Cambiar respuesta · segundo intento”. La alternativa elegida antes quedará bloqueada para obligarte a reconsiderar el criterio.']
    ])}</div>`;
  }else if(s.phase==='route'){
    const correct=q.options.find(x=>x[1])?.[0]||'';
    feedback=`<div class="feedback route" data-feedback><div class="feedback-title"><span>→</span><div><h4>Ruta correcta</h4><p>El segundo intento también fue incorrecto. Reconstruimos el razonamiento paso a paso y marcamos la alternativa defendible.</p></div></div><p class="feedback-main">${esc(q.routeSummary)}</p><ol class="route-steps">${(q.route||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ol>${feedbackGrid([
      ['Alternativa defendible',correct],['Por qué corresponde',q.correct],['Aplicación al caso',q.application],['Por qué se descartan las otras',q.contrast],['Regla que debes conservar',q.rule],['Qué hacer en un caso nuevo','Repite la secuencia de análisis antes de mirar las opciones: identifica evidencia, dimensión de riesgo, efecto y decisión proporcional.']
    ])}<div class="feedback-closing"><strong>Observa la pregunta:</strong> la alternativa correcta quedó seleccionada y resaltada en verde para que puedas compararla con el razonamiento anterior.</div></div>`;
  }
  const label=s.phase==='select1'?'Intento 1 de 2':s.phase==='firstWrong'?'Primer intento revisado':s.phase==='select2'?'Intento 2 de 2':s.phase==='correct'?'Pregunta completada':'Ruta correcta';
  const status=s.phase==='select1'||s.phase==='select2'?'Selecciona una alternativa y pulsa “Comprobar respuesta”.':s.phase==='firstWrong'?'Lee la retroalimentación antes de cambiar tu respuesta.':s.phase==='correct'?'Acierto confirmado: revisa por qué es correcta.':'Segundo intento incorrecto: revisa la Ruta correcta.';
  const actions=s.phase==='select1'||s.phase==='select2'?`<button class="btn primary" type="button" data-check ${s.selected===null?'disabled':''}>Comprobar respuesta</button>`:s.phase==='firstWrong'?`<button class="btn orange" type="button" data-change>Cambiar respuesta · segundo intento</button>`:'';
  host.innerHTML=`<div class="qbox"><div class="qmeta"><span class="attempt-badge">${label}</span><span class="qstatus">${status}</span></div><div class="question-prompt"><span class="question-label">PREGUNTA</span><p>${esc(q.text||q.question||'')}</p></div><div class="options">${opts}</div><div class="qactions">${actions}</div>${feedback}</div>`;
  $$('[data-opt]',host).forEach(b=>b.addEventListener('click',()=>{if(locked)return;s.selected=Number(b.dataset.opt);beep('soft');renderQuestion(host,q,s,cfg);}));
  $('[data-check]',host)?.addEventListener('click',()=>{
    if(s.selected===null)return;
    const ok=!!q.options[s.selected][1];
    if(ok){s.phase='correct';s.result='correct';beep('ok');renderQuestion(host,q,s,cfg);setTimeout(()=>$('[data-feedback]',host)?.scrollIntoView({behavior:'smooth',block:'nearest'}),30);cfg.onFinish?.({correct:true,route:false});}
    else if(s.phase==='select1'){s.firstWrong=s.selected;s.phase='firstWrong';s.result=null;beep('bad');renderQuestion(host,q,s,cfg);setTimeout(()=>$('[data-feedback]',host)?.scrollIntoView({behavior:'smooth',block:'nearest'}),30);cfg.onFirstWrong?.();}
    else{s.firstWrong=s.selected;s.phase='route';s.result='route';const correctIdx=q.options.findIndex(x=>x[1]);s.selected=correctIdx;beep('bad');renderQuestion(host,q,s,cfg);setTimeout(()=>$('[data-feedback]',host)?.scrollIntoView({behavior:'smooth',block:'nearest'}),30);cfg.onFinish?.({correct:false,route:true});}
  });
  $('[data-change]',host)?.addEventListener('click',()=>{s.selected=null;s.phase='select2';beep('soft');renderQuestion(host,q,s,cfg);setTimeout(()=>$('.question-prompt',host)?.scrollIntoView({behavior:'smooth',block:'nearest'}),30);});
}

/* concepts */
function conceptState(c){return state.concepts[c.id]||(state.concepts[c.id]={openQ:false,q:createQState(c)});}
function renderConceptCards(){
  const host=$('#conceptGrid');
  host.innerHTML=DATA.concepts.map((c,i)=>{const s=conceptState(c),done=questionDone(s.q);return `<article class="concept-card" tabindex="0" data-concept="${i}"><div class="concept-card-inner"><div class="concept-face concept-front">${done?'<span class="concept-status">✓ Revisada</span>':''}<div class="concept-slide-thumb"><img src="assets/ppt/slide-${String(c.slide).padStart(2,'0')}.png" alt="${esc(c.title)}"></div><div class="concept-front-copy"><span class="concept-number">${c.number}</span><h3>${esc(c.title)}</h3><p>${esc(c.short)}</p><small>Pasa el mouse para ver el resumen · clic para abrir</small></div></div><div class="concept-face concept-back"><span class="concept-number">${c.number}</span><h3>${esc(c.title)}</h3><p>${esc(c.meaning)}</p><div class="open-cue">Haz clic para abrir →</div></div></div></article>`;}).join('');
  $$('[data-concept]',host).forEach(card=>{const fn=()=>openConcept(Number(card.dataset.concept));card.addEventListener('click',fn);card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();fn();}});});
  const done=DATA.concepts.filter(c=>questionDone(conceptState(c).q)).length;$('#conceptProgress').textContent=`${done} / ${DATA.concepts.length} revisadas`;
  if(done===DATA.concepts.length)$$('.nav-item').find(b=>b.dataset.go==='conceptos')?.classList.add('done');
}
function openConcept(i){conceptIndex=Math.max(0,Math.min(DATA.concepts.length-1,i));renderConceptModal();openDialog('conceptModal');setTimeout(()=>$('#conceptBody').scrollTo({top:0}),20);}
function renderConceptModal(){
  const c=DATA.concepts[conceptIndex],s=conceptState(c),slide=`assets/ppt/slide-${String(c.slide).padStart(2,'0')}.png`;
  $('#conceptKicker').textContent=`Tarjeta ${c.number} · concepto aplicado`;$('#conceptTitle').textContent=c.title;$('#conceptCounter').textContent=`${conceptIndex+1} / ${DATA.concepts.length}`;$('#prevConcept').disabled=conceptIndex===0;$('#nextConcept').disabled=conceptIndex===DATA.concepts.length-1;
  const questionPart=s.openQ?`<div id="conceptQuestion"></div>`:`<div class="question-gate"><div><strong>¿Listo para comprobar?</strong><span>Revisa primero el concepto, la diapositiva y la pista de audio. La pregunta se activa solo cuando tú decidas.</span></div><button class="btn primary" type="button" data-show-question>Ver pregunta →</button></div>`;
  const micro=c.id==='riesgo'?`<div class="actions"><button class="btn orange" type="button" data-open-resource="video-short">▶ Ver microvideo · 59 s</button><button class="btn secondary" type="button" data-open-resource="ppt" data-resource-index="11">Ver provisiones y protección</button></div>`:'';
  $('#conceptBody').innerHTML=`<div class="concept-modal-layout"><div class="concept-image-column"><img class="concept-main-slide" src="${slide}" alt="Diapositiva de ${esc(c.title)}" data-image="${slide}">${speechControlsHTML()}</div><div class="concept-detail-scroll"><section class="detail-box"><span class="mini-label">QUÉ SIGNIFICA</span><p>${esc(c.meaning)}</p></section><section class="detail-box example"><span class="mini-label">EJEMPLO</span><p>${esc(c.example)}</p></section><section class="detail-box warning"><span class="mini-label">ERROR QUE CONVIENE EVITAR</span><p>${esc(c.error)}</p></section><div class="audio-pista"><strong>🎧 Pista de audio antes de responder</strong><p>Escúchala si necesitas reforzar el concepto antes de activar la pregunta.</p><audio controls preload="metadata"><source src="${c.audio}" type="audio/mp4"></audio></div>${micro}${questionPart}</div></div>`;
  bindSpeechControls($('#conceptBody'),type=>slideText(c.slide,type));
  $('[data-image]',$('#conceptBody'))?.addEventListener('click',e=>openImage(e.currentTarget.dataset.image,e.currentTarget.alt));
  $$('[data-open-resource]',$('#conceptBody')).forEach(b=>b.addEventListener('click',()=>openResource(b.dataset.openResource,Number(b.dataset.resourceIndex||0))));
  $('[data-show-question]',$('#conceptBody'))?.addEventListener('click',()=>{s.openQ=true;beep('soft');renderConceptModal();setTimeout(()=>$('#conceptQuestion')?.scrollIntoView({behavior:'smooth',block:'start'}),30);});
  if(s.openQ){const qhost=$('#conceptQuestion');renderQuestion(qhost,c,s.q,{onFinish:()=>{renderConceptCards();}});}
}

/* simulator */
const SIM_SUPPORTS={caracter:[5,4],capacidad:[5,4],respaldo:[6,4],decision:[7,5],mora:[14,10,15]};
const SCENARIO_SUPPORTS={A:[5,4],B:[5,3],C:[6,4],AB:[5,7],AC:[6,5],BC:[6,5],ABC:[17,12,16]};
function supportThumbs(slides){return `<div class="support-thumbs"><strong>Apoyos PPT del paso</strong><div>${slides.map(n=>`<button type="button" class="support-thumb-btn" data-open-slide="${n}"><img src="assets/ppt/slide-${String(n).padStart(2,'0')}.png" alt="Diapositiva ${n}"><span>Diap. ${n}</span></button>`).join('')}</div></div>`;}
function bindSupportThumbs(root){$$('[data-open-slide]',root).forEach(b=>b.addEventListener('click',()=>openResource('ppt',Number(b.dataset.openSlide)-1)));}
function simState(step){return state.simStates[step.id]||(state.simStates[step.id]=createQState(step.q));}
function updateRouteMap(){
  const completed=DATA.simSteps.filter(x=>questionDone(simState(x))).map(x=>x.id);
  $('#node-maria').classList.toggle('done',completed.includes('caracter'));
  $('#node-evaluacion').classList.toggle('done',completed.includes('capacidad')||completed.includes('respaldo'));
  $('#node-decision').classList.toggle('done',completed.includes('decision'));
  $('#node-seguimiento').classList.toggle('done',completed.includes('mora'));
  $('#simProgress').textContent=`${completed.length} / ${DATA.simSteps.length} decisiones`;
}
function renderSimulator(){updateRouteMap();renderSimStep();}
function renderSimStep(){
  const host=$('#simHost');updateRouteMap();
  if(state.simIndex>=DATA.simSteps.length){
    const report=`Informe de evaluación inicial de Panadería Horizonte. Carácter: favorable por historial y transparencia. Capital y colateral: existe respaldo, pero no sustituyen la fuente normal de pago. Capacidad: estrecha; con ventas de dieciocho mil soles, egresos de dieciséis mil y una cuota estimada de mil seiscientos, el margen residual sería aproximadamente cuatrocientos soles. Decisión: no aprobar las condiciones solicitadas tal como están; revisar monto, plazo o información adicional para hacer la cuota compatible con el flujo. Seguimiento: si aparece mora, actuar temprano, documentar la causa y escalar de forma proporcional.`;
    host.innerHTML=`<div class="callout green"><strong>Escenario base completado</strong><p>Evaluaste a María desde Carácter y Capacidad hasta la decisión crediticia y el seguimiento de una mora. Ahora modifica condiciones con “¿Qué pasaría si...?” para observar cómo cambia el riesgo.</p></div><div class="sim-report"><span class="eyebrow dark">INFORME EJECUTIVO DEL CASO</span><h3>Panadería Horizonte · lectura inicial</h3><div class="sim-report-grid"><div><strong>Carácter</strong><p>Favorable: historial y transparencia aportan confianza.</p></div><div><strong>Capacidad</strong><p>Estrecha: la cuota propuesta deja un margen mensual muy reducido.</p></div><div><strong>Respaldo</strong><p>Existe, pero actúa como mitigante; no genera el flujo de pago.</p></div><div><strong>Decisión</strong><p>Revisar monto, plazo o evidencia antes de aprobar las condiciones solicitadas.</p></div></div><div class="actions"><button class="btn secondary" type="button" id="readSimReport">▶ Leer informe</button><button class="btn secondary" type="button" id="explainSimReport">💡 Explicar informe</button><button class="btn ghost" type="button" id="downloadSimReport">⇩ Descargar informe</button></div></div>`;
    $('#readSimReport').onclick=()=>speak(report);
    $('#explainSimReport').onclick=()=>speak('Este informe no asigna una puntuación mecánica a las cinco C. Integra señales. María muestra voluntad favorable y respaldo, pero la capacidad queda muy ajustada. Por eso la decisión responsable es rediseñar la operación antes de asumir el riesgo. La garantía reduce una pérdida eventual, pero el flujo es el que debe pagar cada cuota.');
    $('#downloadSimReport').onclick=()=>{const blob=new Blob([report],{type:'text/plain;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='Informe_Evaluacion_Panaderia_Horizonte.txt';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);};
    $('#whatWrap').classList.remove('hidden');renderDetect();bindWhatIf();return;
  }
  const step=DATA.simSteps[state.simIndex],qs=simState(step),slide=`assets/ppt/slide-${String(step.slide).padStart(2,'0')}.png`;
  host.innerHTML=`<div class="sim-panel"><section class="support-card"><span class="eyebrow dark">APOYO ${state.simIndex+1}</span><h3>${esc(step.title)}</h3><div class="support-visual"><img src="${slide}" alt="Apoyo visual: ${esc(step.title)}" data-image="${slide}"></div>${speechControlsHTML()}${supportThumbs(SIM_SUPPORTS[step.id]||[step.slide])}${step.audio?`<div class="audio-pista"><strong>🎧 Pista de audio contextual</strong><p>Escúchala antes de responder si necesitas reforzar exactamente este paso.</p><audio controls preload="metadata"><source src="${step.audio}" type="audio/mp4"></audio></div>`:''}</section><section class="decision-card"><span class="eyebrow dark">DECISIÓN ${state.simIndex+1} DE ${DATA.simSteps.length}</span><h3>Comprobar el recorrido</h3><div id="simQuestion"></div><div id="simNext"></div></section></div>`;
  bindSpeechControls(host,type=>slideText(step.slide,type));bindSupportThumbs(host);$('[data-image]',host)?.addEventListener('click',e=>openImage(e.currentTarget.dataset.image,e.currentTarget.alt));
  renderQuestion($('#simQuestion'),step.q,qs,{onFinish:()=>{renderSimStep();}});
  if(questionDone(qs)){$('#simNext').innerHTML=`<button type="button" class="btn teal sim-next">${state.simIndex===DATA.simSteps.length-1?'Finalizar escenario base':'Continuar simulación →'}</button>`;$('.sim-next').addEventListener('click',()=>{state.simIndex++;beep('ok');renderSimStep();setTimeout(()=>$('#simHost').scrollIntoView({behavior:'smooth',block:'start'}),20);});}
}
function bindWhatIf(){
  const checks=$$('#whatWrap input[type=checkbox]');const run=$('#analyzeScenario'),clear=$('#clearScenario');
  const refresh=()=>{const n=checks.filter(x=>x.checked).length;run.disabled=!n;clear.disabled=!n;};
  checks.forEach(c=>{c.onchange=()=>{refresh();beep('soft');};});refresh();
  run.onclick=analyzeScenario;clear.onclick=()=>{checks.forEach(c=>c.checked=false);refresh();$('#scenarioResult').innerHTML='';};
}
function analyzeScenario(){
  const key=$$('#whatWrap input[type=checkbox]:checked').map(x=>x.value).sort().join('');const s=DATA.scenarios[key];if(!s)return;state.scenarios.add(key);const slide=`assets/ppt/slide-${String(s.slide).padStart(2,'0')}.png`;
  $('#scenarioResult').innerHTML=`<div class="scenario-card"><h3>${esc(s.title)}</h3><div class="scenario-support"><div><img src="${slide}" alt="Apoyo visual del escenario ${esc(key)}" data-image="${slide}">${speechControlsHTML()}</div><div><div class="scenario-intro"><strong>Lectura del escenario</strong><p>Compara esta combinación con el escenario base. La clave no es decir solamente que algo “sube” o “baja”, sino explicar qué parte del circuito cambia, cuál permanece y qué conclusión sería prematura.</p></div>${supportThumbs(SCENARIO_SUPPORTS[key]||[s.slide])}<div class="scenario-grid"><div><strong>1. Qué cambia</strong><p>${esc(s.changes)}</p></div><div><strong>2. Qué se mantiene</strong><p>${esc(s.stays)}</p></div><div><strong>3. Efecto sobre el sistema</strong><p>${esc(s.implication)}</p></div><div><strong>4. Error de interpretación a evitar</strong><p>${esc(s.avoid)}</p></div></div><div class="callout orange"><strong>5. Decisión o pregunta que abre el escenario</strong><p>${esc(s.decision)}</p></div><div class="scenario-conclusion"><strong>Conclusión razonada</strong><p>${esc(s.implication)} ${esc(s.decision)}</p></div>${s.audio?`<div class="audio-pista"><strong>🎧 Extracto específico de esta combinación</strong><p>Se muestra porque existe un audio pertinente para este escenario.</p><audio controls preload="metadata"><source src="${s.audio}" type="audio/mp4"></audio></div>`:''}</div></div><div class="actions"><button class="btn ghost" type="button" id="tryAnother">Probar otra combinación</button></div></div>`;
  bindSpeechControls($('#scenarioResult'),type=>slideText(s.slide,type));bindSupportThumbs($('#scenarioResult'));$('[data-image]',$('#scenarioResult'))?.addEventListener('click',e=>openImage(e.currentTarget.dataset.image,e.currentTarget.alt));$('#tryAnother').onclick=()=>{$$('#whatWrap input[type=checkbox]').forEach(c=>c.checked=false);$('#scenarioResult').innerHTML='';$('#analyzeScenario').disabled=true;$('#clearScenario').disabled=true;};beep('ok');
}
const detectQ={
  text:'Un compañero afirma: “La garantía vale más que el crédito, así que ya no importa si el negocio genera suficiente flujo para pagar”. ¿Qué error contiene ese razonamiento?',
  options:[
    ['Confunde colateral con capacidad: una garantía puede reducir la pérdida potencial, pero no reemplaza el flujo que debe sostener las cuotas.',1],
    ['La afirmación es correcta porque toda garantía superior al monto solicitado elimina la necesidad de revisar ingresos, gastos y otras deudas.',0],
    ['El error está en revisar garantías, porque el colateral nunca forma parte de una evaluación crediticia cuando existe historial de pago.',0],
    ['La afirmación falla solo porque la garantía debería ser exactamente igual al crédito, sin exceder ni quedar por debajo del monto solicitado.',0]
  ],
  correct:'La garantía es una red de seguridad frente a una pérdida eventual. La fuente normal de pago sigue siendo la capacidad de generar flujo suficiente para cubrir la obligación.',
  application:'Una operación no se vuelve sana solo porque la garantía sea alta. Si el flujo es insuficiente, aumenta el riesgo de incumplimiento aunque la pérdida final pueda mitigarse.',
  contrast:'Los otros distractores eliminan variables relevantes o inventan una equivalencia entre monto de garantía y viabilidad del crédito.',
  rule:'Colateral mitiga pérdida; capacidad sostiene el pago normal.',
  wrong1:'Pregunta qué debería pagar cada cuota mes a mes. Si la respuesta es “la garantía”, se está confundiendo respaldo con fuente de pago.',
  route:['Primero revisa el flujo disponible.','Luego identifica la garantía como protección de última instancia.','Mantén separadas capacidad de pago y mitigación de pérdida.'],
  routeSummary:'La Ruta correcta reconoce que una garantía alta no reemplaza una capacidad suficiente.'
};
function renderDetect(){state.detect=state.detect||createQState(detectQ);renderQuestion($('#detectHost'),detectQ,state.detect,{onFinish:()=>{}});}

/* quiz */
function resetQuiz(){state.quizOrder=shuffleIndices(DATA.quiz.length);state.quizIndex=0;state.quizStates={};state.quizScore=0;$('#scoreCard').classList.add('hidden');ensureQuiz();}
function ensureQuiz(){if(!state.quizOrder.length)state.quizOrder=shuffleIndices(DATA.quiz.length);renderQuizItem();}
function quizState(idx,q){return state.quizStates[idx]||(state.quizStates[idx]=createQState(q));}
function renderQuizItem(){
  if(state.quizIndex>=DATA.quiz.length){finishQuiz();return;}
  const qIndex=state.quizOrder[state.quizIndex],q=DATA.quiz[qIndex],qs=quizState(qIndex,q);$('#quizBadge').textContent=`Pregunta ${state.quizIndex+1} / ${DATA.quiz.length}`;$('#quizBar').style.width=`${(state.quizIndex)/DATA.quiz.length*100}%`;
  $('#quizHost').innerHTML=`<div id="quizQuestion"></div><div id="quizNext"></div>`;renderQuestion($('#quizQuestion'),q,qs,{onFinish:r=>{if(r.correct&&!qs._counted){state.quizScore++;qs._counted=true;}renderQuizItem();}});
  if(questionDone(qs)){$('#quizNext').innerHTML=`<button type="button" class="btn teal" style="margin-top:.7rem">${state.quizIndex===DATA.quiz.length-1?'Ver resultado':'Siguiente pregunta →'}</button>`;$('#quizNext button').onclick=()=>{state.quizIndex++;renderQuizItem();window.scrollTo({top:0,behavior:'smooth'});};}
}
function finishQuiz(){$('#quizBar').style.width='100%';$('#quizHost').innerHTML='';$('#scoreCard').classList.remove('hidden');$('#scoreTitle').textContent=`${state.quizScore} de ${DATA.quiz.length} respuestas correctas sin Ruta correcta`;$('#scoreText').textContent=state.quizScore>=5?'Tu lectura del crédito es sólida. Puedes relacionar 5C, capacidad, cobranza, provisiones y priorización con buen criterio.':state.quizScore>=3?'Tienes una base funcional. Revisa las preguntas en las que necesitaste la Ruta correcta y vuelve a relacionarlas con las 5C, el ciclo de cobranza y el impacto del deterioro.':'Conviene regresar a los cuatro conceptos y reconstruir el ciclo del crédito antes de repetir la comprobación.';$$('.nav-item').find(b=>b.dataset.go==='comprobacion')?.classList.add('done');}

/* resources */
function renderResources(){const host=$('#resourceGrid');host.innerHTML=DATA.resources.map(r=>`<article class="resource-card"><div class="resource-thumb"><img src="${r.thumb}" alt="Miniatura de ${esc(r.title)}"></div><div class="resource-copy"><h3>${esc(r.title)}</h3><p>${esc(r.desc)}</p><button type="button" class="btn secondary" data-open-resource="${r.id}">Abrir dentro del programa</button></div></article>`).join('');$$('[data-open-resource]',host).forEach(b=>b.addEventListener('click',()=>openResource(b.dataset.openResource,0)));}
function openResource(id,index=0){if(id==='video-main'||id==='video-short'){openFloatingVideo(id);return;}resourceContext={id,index};renderResource();openDialog('resourceModal');}
function openFloatingVideo(id){const r=DATA.resources.find(x=>x.id===id);const v=$('#floatingVideo');if(!v)return;v.src=id==='video-main'?'assets/video_apertura.mp4':'assets/microvideo_credito_59s.mp4';v.setAttribute('aria-label',r?.title||'Video');openDialog('videoModal');setTimeout(()=>v.play().catch(()=>{}),80);}
function resourceMeta(){return DATA.resources.find(x=>x.id===resourceContext?.id);}
function resourceSpeech(type){const id=resourceContext.id,idx=resourceContext.index||0;if(id==='ppt')return RT.ppt?.[idx]?.[type]||'';if(id==='pdf')return RT.pdf?.[idx]?.[type]||'';return RT[id]?.[type]||'';}
function renderResource(){
  const r=resourceMeta();if(!r)return;$('#resourceType').textContent=r.type.toUpperCase();$('#resourceTitle').textContent=r.title;const body=$('#resourceBody'),foot=$('#resourceFooter');body.className='resource-body';
  if(r.id==='ppt'){
    const i=Math.max(0,Math.min(17,resourceContext.index||0));resourceContext.index=i;body.innerHTML=`<div class="fit-stage"><img src="assets/ppt/slide-${String(i+1).padStart(2,'0')}.png" alt="Diapositiva ${i+1} de 18" data-image="assets/ppt/slide-${String(i+1).padStart(2,'0')}.png"></div>`;foot.innerHTML=`<div class="resource-nav"><button data-rnav="-1" ${i===0?'disabled':''}>← Anterior</button><strong>Diapositiva ${i+1} / 18</strong><button data-rnav="1" ${i===17?'disabled':''}>Siguiente →</button></div>${speechControlsHTML()}`;bindResourceNav(18);$('[data-image]',body).onclick=e=>openImage(e.currentTarget.dataset.image,e.currentTarget.alt);
  }else if(r.id==='pdf'){
    const i=Math.max(0,Math.min(14,resourceContext.index||0));resourceContext.index=i;body.innerHTML=`<div class="fit-stage"><img src="assets/pdf/page-${String(i+1).padStart(2,'0')}.png" alt="Página ${i+1} de 15" data-image="assets/pdf/page-${String(i+1).padStart(2,'0')}.png"></div>`;foot.innerHTML=`<div class="resource-nav"><button data-rnav="-1" ${i===0?'disabled':''}>← Anterior</button><strong>Página ${i+1} / 15</strong><button data-rnav="1" ${i===14?'disabled':''}>Siguiente →</button></div>${speechControlsHTML()}`;bindResourceNav(15);$('[data-image]',body).onclick=e=>openImage(e.currentTarget.dataset.image,e.currentTarget.alt);
  }else if(r.id==='infographic'){
    body.innerHTML=`<div class="fit-stage"><img src="assets/infografia_riesgo_crediticio.png" alt="Infografía de gestión del riesgo crediticio" data-image="assets/infografia_riesgo_crediticio.png"></div>`;foot.innerHTML=`<div class="resource-nav"><strong>Infografía de riesgo crediticio</strong></div>${speechControlsHTML()}`;$('[data-image]',body).onclick=e=>openImage(e.currentTarget.dataset.image,e.currentTarget.alt);
  }else if(r.id==='video-main'||r.id==='video-short'){
    const src=r.id==='video-main'?'assets/video_apertura.mp4':'assets/microvideo_credito_59s.mp4';body.innerHTML=`<div class="media-stage"><video controls autoplay preload="metadata"><source src="${src}" type="video/mp4"></video></div>`;foot.innerHTML=`<div class="resource-nav"><strong>${r.id==='video-main'?'Video de apertura':'Microvideo · 59 s'}</strong></div>${speechControlsHTML()}`;
  }else if(r.id==='audio'){
    body.innerHTML=`<div class="audio-stage"><div class="audio-card"><img src="assets/thumbs/audio.png" alt="Resumen de audio"><h3>Cómo funciona por dentro el crédito bancario</h3><audio controls preload="metadata"><source src="assets/podcast_completo.m4a" type="audio/mp4"></audio></div></div>`;foot.innerHTML=`<div class="resource-nav"><strong>Audio completo</strong></div>${speechControlsHTML()}`;
  }
  bindSpeechControls(foot,type=>resourceSpeech(type));
}
function bindResourceNav(total){$$('[data-rnav]',$('#resourceFooter')).forEach(b=>b.onclick=()=>{resourceContext.index=Math.max(0,Math.min(total-1,(resourceContext.index||0)+Number(b.dataset.rnav)));stopSpeech();renderResource();});}
function openImage(src,alt='Vista ampliada'){$('#imageModalImg').src=src;$('#imageModalImg').alt=alt;openDialog('imageModal');}

/* global bindings */
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.go)));$$('.modal-close').forEach(b=>b.addEventListener('click',()=>closeDialog(b.dataset.close)));$$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)closeDialog(d.id);}));
$('#prevConcept').onclick=()=>{conceptIndex=Math.max(0,conceptIndex-1);renderConceptModal();setTimeout(()=>$('#conceptBody').scrollTo({top:0}),20);};$('#nextConcept').onclick=()=>{conceptIndex=Math.min(DATA.concepts.length-1,conceptIndex+1);renderConceptModal();setTimeout(()=>$('#conceptBody').scrollTo({top:0}),20);};
$('#resourceFull').onclick=()=>toggleFullscreen($('#resourceShell'));$('#fullBtn').onclick=()=>toggleFullscreen($('.app-shell'));$('#fontMinus').onclick=()=>{state.font=Math.max(.88,state.font-.08);updateFont();};$('#fontPlus').onclick=()=>{state.font=Math.min(1.24,state.font+.08);updateFont();};$('#soundBtn').onclick=()=>{state.sound=!state.sound;$('#soundBtn').textContent=state.sound?'🔊':'🔇';if(state.sound)beep('ok');};$('#themeBtn').onclick=()=>{state.theme=state.theme==='light'?'dark':'light';applyTheme();beep('soft');};$('#layoutSelect').onchange=e=>{state.layout=e.target.value;applyLayout();};$('#restartQuiz').onclick=resetQuiz;
$$('[data-open-resource]').forEach(b=>b.addEventListener('click',()=>openResource(b.dataset.openResource,Number(b.dataset.resourceIndex||0))));
window.addEventListener('resize',()=>{if(state.layout==='auto')applyLayout();});document.addEventListener('fullscreenchange',()=>{document.documentElement.classList.toggle('is-fullscreen',!!document.fullscreenElement);});if('speechSynthesis'in window)speechSynthesis.onvoiceschanged=()=>{};
applyLayout();applyTheme();updateFont();renderConceptCards();renderSimulator();renderResources();resetQuiz();
