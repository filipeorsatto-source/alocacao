
// ─── TEMPLATE DATA ────────────────────────────────────────────────────────────
const PALETTE = ["#6366f1","#0ea5e9","#f59e0b","#10b981","#ec4899","#ef4444","#8b5cf6","#14b8a6","#f97316","#64748b"];

const TEMPLATE_MACROS = [
  { id:1, name:"INFRA",                    color:"#6366f1", subetapas:["Introdução","Ajustes Tech"],                                                            tipo:"Implantação" },
  { id:2, name:"DISCOVERY",                color:"#0ea5e9", subetapas:["Pré-Kickoff","Discovery"],                                                              tipo:"Implantação" },
  { id:3, name:"SETUP HML",                color:"#f59e0b", subetapas:["Discovery Auditoria","Discovery Faturamento","Discovery Pós-Faturamento","Testes"],      tipo:"Implantação" },
  { id:4, name:"SETUP PROD",               color:"#10b981", subetapas:["Ajustes Tech","Testes","Treinamentos"],                                                  tipo:"Implantação" },
  { id:5, name:"GO LIVE",                  color:"#ec4899", subetapas:["Go Live"],                                                                              tipo:"Implantação" },
  { id:6, name:"MONITORAMENTO E EXPANSÃO", color:"#8b5cf6", subetapas:["Report"],                                                                               tipo:"Sustentação" },
];

// Template tasks — startOff/endOff in days from project start, funcaoResp = area responsible
const TEMPLATE_TASKS_DEF = [
  { id:"t1",  name:"Proposta Assinada",                  macroId:1, subetapa:"Introdução",                startOff:0,   endOff:1,   effort:1, funcaoResp:"Farmer"      },
  { id:"t2",  name:"Intro projeto ao cliente",           macroId:1, subetapa:"Introdução",                startOff:1,   endOff:2,   effort:1, funcaoResp:"Farmer"      },
  { id:"t3",  name:"Kickoff tech",                       macroId:1, subetapa:"Ajustes Tech",              startOff:2,   endOff:3,   effort:1, funcaoResp:"DS"          },
  { id:"t4",  name:"Criação do cliente no Medusa HML",   macroId:1, subetapa:"Ajustes Tech",              startOff:3,   endOff:4,   effort:1, funcaoResp:"Farmer"      },
  { id:"t5",  name:"Liberação de acessos HML",           macroId:1, subetapa:"Ajustes Tech",              startOff:4,   endOff:6,   effort:2, funcaoResp:"Farmer"      },
  { id:"t6",  name:"Implantação infra HML",              macroId:1, subetapa:"Ajustes Tech",              startOff:6,   endOff:7,   effort:1, funcaoResp:"DS"          },
  { id:"t7",  name:"Backlog e priorização",              macroId:2, subetapa:"Pré-Kickoff",               startOff:7,   endOff:9,   effort:2, funcaoResp:"DS"          },
  { id:"t8",  name:"Intro Cliente <> Time do projeto",   macroId:2, subetapa:"Pré-Kickoff",               startOff:9,   endOff:11,  effort:2, funcaoResp:"Farmer"      },
  { id:"t9",  name:"Discovery escopo go live",           macroId:2, subetapa:"Pré-Kickoff",               startOff:11,  endOff:13,  effort:2, funcaoResp:"DS"          },
  { id:"t10", name:"Kickoff implantação",                macroId:2, subetapa:"Pré-Kickoff",               startOff:13,  endOff:14,  effort:1, funcaoResp:"Farmer"      },
  { id:"t11", name:"Discovery auditoria",                macroId:2, subetapa:"Discovery",                 startOff:14,  endOff:24,  effort:5, funcaoResp:"Auditoria"   },
  { id:"t12", name:"Discovery faturamento",              macroId:2, subetapa:"Discovery",                 startOff:14,  endOff:24,  effort:5, funcaoResp:"Faturamento" },
  { id:"t13", name:"Discovery pós-faturamento",          macroId:2, subetapa:"Discovery",                 startOff:14,  endOff:24,  effort:5, funcaoResp:"Auditoria"   },
  { id:"t14", name:"Importação de contas",               macroId:3, subetapa:"Discovery Auditoria",       startOff:24,  endOff:28,  effort:3, funcaoResp:"FDE"         },
  { id:"t15", name:"Implantação de regras de auditoria", macroId:3, subetapa:"Discovery Auditoria",       startOff:29,  endOff:49,  effort:5, funcaoResp:"Auditoria"   },
  { id:"t16", name:"Definição novo fluxo operacional",   macroId:3, subetapa:"Discovery Auditoria",       startOff:29,  endOff:34,  effort:3, funcaoResp:"DS"          },
  { id:"t18", name:"Definição novo fluxo operacional",   macroId:3, subetapa:"Discovery Faturamento",     startOff:29,  endOff:34,  effort:3, funcaoResp:"DS"          },
  { id:"t19", name:"Cadastro de operadoras",             macroId:3, subetapa:"Discovery Faturamento",     startOff:49,  endOff:51,  effort:2, funcaoResp:"Faturamento" },
  { id:"t20", name:"Automação de regras de faturamento", macroId:3, subetapa:"Discovery Faturamento",     startOff:54,  endOff:59,  effort:4, funcaoResp:"FDE"         },
  { id:"t21", name:"Automação de regras de faturamento", macroId:3, subetapa:"Discovery Pós-Faturamento", startOff:24,  endOff:29,  effort:4, funcaoResp:"FDE"         },
  { id:"t22", name:"Cadastro de operadoras",             macroId:3, subetapa:"Discovery Pós-Faturamento", startOff:49,  endOff:54,  effort:3, funcaoResp:"Faturamento" },
  { id:"t23", name:"Teste Interno",                      macroId:3, subetapa:"Testes",                   startOff:59,  endOff:61,  effort:2, funcaoResp:"DS"          },
  { id:"t24", name:"Teste Cliente",                      macroId:3, subetapa:"Testes",                   startOff:61,  endOff:63,  effort:2, funcaoResp:"DS"          },
  { id:"t25", name:"Criação do cliente no Medusa PRD",   macroId:4, subetapa:"Ajustes Tech",              startOff:63,  endOff:64,  effort:1, funcaoResp:"Farmer"      },
  { id:"t26", name:"Liberação de acesso PRD",            macroId:4, subetapa:"Ajustes Tech",              startOff:64,  endOff:66,  effort:2, funcaoResp:"Farmer"      },
  { id:"t27", name:"Implantação infra PRD",              macroId:4, subetapa:"Ajustes Tech",              startOff:66,  endOff:69,  effort:3, funcaoResp:"Dev"         },
  { id:"t28", name:"Deploy em Produção",                 macroId:4, subetapa:"Ajustes Tech",              startOff:69,  endOff:72,  effort:4, funcaoResp:"FDE"         },
  { id:"t29", name:"Levantamento de contas para teste",  macroId:4, subetapa:"Testes",                   startOff:72,  endOff:74,  effort:2, funcaoResp:"DS"          },
  { id:"t30", name:"Teste em PRD",                       macroId:4, subetapa:"Testes",                   startOff:77,  endOff:80,  effort:3, funcaoResp:"DS"          },
  { id:"t31", name:"Treinamentos in Loco",               macroId:4, subetapa:"Treinamentos",              startOff:72,  endOff:77,  effort:4, funcaoResp:"Faturamento" },
  { id:"t32", name:"Ativação em Produção",               macroId:5, subetapa:"Go Live",                  startOff:80,  endOff:81,  effort:3, funcaoResp:"FDE"         },
  { id:"t33", name:"Monitoramento in Loco",              macroId:5, subetapa:"Go Live",                  startOff:81,  endOff:95,  effort:4, funcaoResp:"FDE"         },
  { id:"t34", name:"Apresentação Suporte N1",            macroId:6, subetapa:"Report",                   startOff:95,  endOff:115, effort:3, funcaoResp:"Farmer"      },
  { id:"t35", name:"Call de Resultados (30D)",           macroId:6, subetapa:"Report",                   startOff:115, endOff:145, effort:3, funcaoResp:"Farmer"      },
  { id:"t36", name:"Call de Resultados (60D)",           macroId:6, subetapa:"Report",                   startOff:145, endOff:175, effort:3, funcaoResp:"Farmer"      },
];

// ─── STATE ────────────────────────────────────────────────────────────────────
let projects = [];   // [{id, name, macros, tasks, expandedMacros, expandedGantt, linearApiKey, linearProjectId, linearIssues, ...}]
let currentPage = "projects";
let currentProjectId = null;
let modalChecklist = [];
let macroModalSubs = [];
let macroModalEditingId = null;
let linearFilterStatus = new Set();
let linearFilterResp = new Set();
let linearFilterPri = new Set();
let linearSearch = "";
let linearSort = "createdAt";

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function todayStr(){ return new Date().toISOString().slice(0,10); }
function addDays(d,n){ const dt=new Date(d); dt.setDate(dt.getDate()+n); return dt.toISOString().slice(0,10); }
function genId(){ return "x"+Math.random().toString(36).slice(2,8); }
function fmtDate(s){ return new Date(s).toLocaleDateString("pt-BR"); }
function initials(name){ if(!name)return"?"; return name.split(" ").map(n=>n[0]).join("").slice(0,2).toUpperCase(); }
function isOverdue(t){ return t.status!=="Finalizado" && t.end<todayStr(); }
function calcProgress(tks){
  const total=tks.reduce((s,t)=>s+t.effort,0);
  const done=tks.filter(t=>t.status==="Finalizado").reduce((s,t)=>s+t.effort,0);
  return total===0?0:Math.round((done/total)*100);
}
function getBadgeClass(t){ if(isOverdue(t))return"badge badge-late"; if(t.status==="Finalizado")return"badge badge-done"; if(t.status==="Em Execução")return"badge badge-run"; return"badge badge-ni"; }
function getBadgeLabel(t){ return isOverdue(t)?"Atrasado":t.status; }
function getBarColor(t){ if(isOverdue(t))return"#ef4444"; if(t.status==="Finalizado")return"#10b981"; if(t.status==="Em Execução")return"#3b82f6"; return"#9ca3af"; }
function dateFromOffset(base, off){
  const d = new Date(base); d.setDate(d.getDate()+off); return d.toISOString().slice(0,10);
}
function getProject(){ return projects.find(p=>p.id===currentProjectId); }

// ─── PROJECT CREATION ─────────────────────────────────────────────────────────
function openNewProjModal(){
  // Populate project name dropdown from alloc projects
  const sel = document.getElementById("np-name-sel");
  sel.innerHTML = `<option value="">Selecionar projeto...</option>` +
    allocProjects.map(p=>`<option value="${p.nome}">${p.nome}</option>`).join("");
  document.getElementById("np-format").value="zero";
  document.getElementById("np-date").value="2026-04-01";
  document.getElementById("np-date-field").style.display="none";
  document.getElementById("new-proj-modal").classList.add("open");
}
function closeNewProjModal(){ document.getElementById("new-proj-modal").classList.remove("open"); }
function onFormatChange(){
  const fmt=document.getElementById("np-format").value;
  document.getElementById("np-date-field").style.display=fmt==="template"?"block":"none";
}
function createProject(){
  const name = document.getElementById("np-name-sel").value.trim();
  if(!name){alert("Selecione um projeto.");return;}
  const fmt=document.getElementById("np-format").value;
  const startDate=document.getElementById("np-date").value||"2026-04-01";
  const id=genId();
  let macros=[],tasks=[];
  if(fmt==="template"){
    macros=JSON.parse(JSON.stringify(TEMPLATE_MACROS));

    // Build a map: funcao → first allocated employee name for this project
    // Match by project name against allocProjects, then look up vacancies
    const allocProj = allocProjects.find(ap => ap.nome === name);
    const funcaoToName = {};
    if(allocProj){
      allocVacancies
        .filter(v => v.projetoId === allocProj.id && v.funcionarioId)
        .forEach(v => {
          // Only store the first match per funcao
          if(!funcaoToName[v.funcao]){
            const emp = allocEmployees.find(e => e.id === v.funcionarioId);
            if(emp) funcaoToName[v.funcao] = emp.nome;
          }
        });
    }

    tasks=TEMPLATE_TASKS_DEF.map(def=>({
      id:genId(), name:def.name, macroId:def.macroId, subetapa:def.subetapa,
      start:dateFromOffset(startDate,def.startOff),
      end:dateFromOffset(startDate,def.endOff),
      status:"Não Iniciado",
      responsible: funcaoToName[def.funcaoResp] || "",
      effort:def.effort,
      description:"", checklist:[], notes:""
    }));
  }
  const proj={
    id, name, macros, tasks,
    expandedMacros: new Set(macros.map(m=>m.id).slice(0,2)),
    expandedGantt: new Set(macros.map(m=>m.id)),
    linearApiKey:"", linearProjectId:"", linearIssues:[],
  };
  projects.push(proj);
  closeNewProjModal();
  renderSidebarProjects();
  openProject(id);
}
function openProject(id){
  currentProjectId=id;
  currentPage="schedule";
  renderSidebarProjects();
  render();
}
function deleteProject(id,e){
  e.stopPropagation();
  const p=projects.find(x=>x.id===id);
  if(!confirm(`Excluir projeto "${p.name}"?`))return;
  projects=projects.filter(x=>x.id!==id);
  if(currentProjectId===id){currentProjectId=null;currentPage="projects";}
  renderSidebarProjects();
  render();
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
function navigate(page){
  if(page==="schedule"&&!currentProjectId){page="projects";}
  currentPage=page;
  document.querySelectorAll(".sb-btn[data-page]").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
  render();
}
function render(){
  sanitizeAppState();
  updateSidebarFooter();
  const c=document.getElementById("content");
  if(currentPage==="projects") c.innerHTML=renderProjects();
  else if(currentPage==="dashboard") c.innerHTML=renderDashboard();
  else if(currentPage==="schedule") c.innerHTML=renderSchedule();
  else if(currentPage==="vagas") c.innerHTML=renderVagas();
  else if(currentPage==="cadastro") c.innerHTML=renderCadastro();
  else if(currentPage==="resumo") c.innerHTML=renderResumo();
}
function updateSidebarFooter(){
  const footer=document.getElementById("sb-footer");
  if(currentPage==="schedule"&&currentProjectId){
    const p=getProject(); if(!p){footer.style.display="none";return;}
    const pct=calcProgress(p.tasks);
    footer.style.display="block";
    document.getElementById("sb-prog-fill").style.width=pct+"%";
    document.getElementById("sb-prog-pct").textContent=pct+"%";
  } else { footer.style.display="none"; }
}
function renderSidebarProjects(){
  const el=document.getElementById("sb-projects-list");
  if(!projects.length){el.innerHTML="";return;}
  el.innerHTML=`<div style="font-size:10px;color:#4b5563;font-weight:700;text-transform:uppercase;letter-spacing:.05em;padding:0 10px 6px">Projetos</div>`+
    projects.map(p=>`
      <div style="position:relative">
        <button class="sb-btn ${currentProjectId===p.id&&currentPage==='schedule'?'active':''}" onclick="openProject('${p.id}')" style="padding-right:32px">
          <div style="width:7px;height:7px;border-radius:50%;background:#6366f1;flex-shrink:0"></div>
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1;text-align:left">${p.name}</span>
        </button>
        <button onclick="deleteProject('${p.id}',event)" style="position:absolute;right:6px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:#4b5563;padding:3px;display:flex;align-items:center">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    `).join("");
}

// ─── PROJECTS PAGE ────────────────────────────────────────────────────────────
function renderProjects(){
  return `
    <div class="header-row">
      <div><h1 class="page-title">Projetos</h1><p class="page-sub">Gerencie seus projetos de implantação</p></div>
      <button class="btn-primary" onclick="openNewProjModal()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Novo projeto
      </button>
    </div>
    ${projects.length===0?`
      <div class="card" style="padding:60px;text-align:center;color:#9ca3af">
        <div style="font-size:40px;margin-bottom:12px">📋</div>
        <p style="font-weight:600;color:#374151;margin-bottom:6px;font-size:15px">Nenhum projeto criado</p>
        <p style="font-size:13px">Clique em "Novo projeto" para começar.</p>
      </div>
    `:`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">
        ${projects.map(p=>{
          const pct=calcProgress(p.tasks);
          const fin=p.tasks.filter(t=>t.status==="Finalizado").length;
          const late=p.tasks.filter(isOverdue).length;
          const allDates=p.tasks.flatMap(t=>[t.start,t.end]).filter(Boolean).sort();
          const startD=allDates[0]?fmtDate(allDates[0]):"—";
          const endD=allDates[allDates.length-1]?fmtDate(allDates[allDates.length-1]):"—";
          return `
            <div class="proj-card" onclick="openProject('${p.id}')">
              <div class="proj-card-name">${p.name}</div>
              <div class="proj-card-meta">${p.tasks.length} tarefas · ${startD} → ${endD}${late>0?` · <span style="color:#ef4444;font-weight:600">${late} atrasada${late>1?"s":""}</span>`:""}</div>
              <div class="proj-card-bar"><div class="proj-card-fill" style="width:${pct}%"></div></div>
              <div style="display:flex;justify-content:space-between;align-items:center">
                <span class="proj-card-pct">${pct}% concluído</span>
                <span style="font-size:11px;color:#9ca3af">${fin}/${p.tasks.length} tarefas</span>
              </div>
            </div>
          `;
        }).join("")}
      </div>
    `}
  `;
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
const priColors={0:"priority-none",1:"priority-urgent",2:"priority-high",3:"priority-medium",4:"priority-low"};
const priLabels={0:"Sem prioridade",1:"Urgente",2:"Alta",3:"Média",4:"Baixa"};

// Dashboard filter state
let dashTipoFilter    = "Todos"; // "Todos" | "Implantação" | "Sustentação"
let dashStatusFilter  = new Set(); // empty = todos
let dashProdutoFilter = new Set();
let dashEtapaFilter   = new Set();
let dashVariavel      = "count";   // "count" | "esforco"

function toggleDashStatus(v){if(v==="__clear__")dashStatusFilter.clear();else{if(dashStatusFilter.has(v))dashStatusFilter.delete(v);else dashStatusFilter.add(v);}render();}
function toggleDashProduto(v){if(v==="__clear__")dashProdutoFilter.clear();else{if(dashProdutoFilter.has(v))dashProdutoFilter.delete(v);else dashProdutoFilter.add(v);}render();}
function toggleDashEtapa(v){if(v==="__clear__")dashEtapaFilter.clear();else{if(dashEtapaFilter.has(v))dashEtapaFilter.delete(v);else dashEtapaFilter.add(v);}render();}

// Look up produto/etapa from the alloc projects table by matching the implant project name
function getProjectMeta(projName){
  const ap = allocProjects.find(a => a.nome === projName);
  return { produto: ap?.produto || "—", etapa: ap?.etapa || "—" };
}

// Returns the ISO date (YYYY-MM-DD) of the Monday of the week that contains dateStr
function getMondayOfWeek(dateStr){
  if(!dateStr) return null;
  const d = new Date(dateStr+"T00:00:00");
  const day = d.getDay();                    // 0=sun, 1=mon, ..., 6=sat
  const diff = day === 0 ? -6 : 1 - day;     // Sun -> -6, Mon -> 0, Tue -> -1, ...
  d.setDate(d.getDate()+diff);
  return d.toISOString().slice(0,10);
}

// Aggregate function honoring the variable selector
function dashValueOf(tasks){
  return dashVariavel === "esforco"
    ? tasks.reduce((s,t)=>s+(Number(t.effort)||0),0)
    : tasks.length;
}
function dashUnitLabel(){ return dashVariavel === "esforco" ? "esforço" : "tarefas"; }

function renderDashboard(){
  if(!projects.length) return `
    <h1 class="page-title">Dashboard</h1>
    <p class="page-sub">Visão consolidada de todos os projetos</p>
    <div class="card" style="padding:60px;text-align:center;color:#9ca3af">
      <div style="font-size:36px;margin-bottom:10px">📊</div>
      <p style="font-weight:600;color:#374151;margin-bottom:4px">Nenhum projeto ainda</p>
      <p style="font-size:12px">Crie um projeto na aba <a href="#" onclick="navigate('projects')" style="color:#6366f1">Projetos</a> para ver o dashboard.</p>
    </div>`;

  // ── Apply project-level filters (Produto / Etapa) ─────────────────────────
  const filteredProjects = projects.filter(p => {
    const meta = getProjectMeta(p.name);
    if(dashProdutoFilter.size && !dashProdutoFilter.has(meta.produto)) return false;
    if(dashEtapaFilter.size   && !dashEtapaFilter.has(meta.etapa))     return false;
    return true;
  });

  // ── Apply task-level filters (Tipo de macroetapa + Status) ─────────────────
  // opts.ignoreStatus: keep status filter off (used for the per-status counts in table 1)
  function filteredTasks(proj, opts={}){
    let tasks = proj.tasks;
    if(dashTipoFilter !== "Todos"){
      const macroIds = new Set(proj.macros.filter(m=>(m.tipo||"Implantação")===dashTipoFilter).map(m=>m.id));
      tasks = tasks.filter(t=>macroIds.has(t.macroId));
    }
    if(!opts.ignoreStatus && dashStatusFilter.size){
      tasks = tasks.filter(t => {
        const eff = isOverdue(t) ? "Atrasado" : t.status;
        return dashStatusFilter.has(eff);
      });
    }
    return tasks;
  }

  // ── Available filter options (derived from data) ───────────────────────────
  const STATUS_OPTS  = ["Não Iniciado","Em Execução","Finalizado","Atrasado"];
  const allProdutos  = [...new Set(projects.map(p=>getProjectMeta(p.name).produto))].filter(Boolean).sort();
  const allEtapas    = [...new Set(projects.map(p=>getProjectMeta(p.name).etapa))].filter(Boolean).sort();

  // Reusable chip-set renderer for multi-select filters
  const chipMulti = (set, options, fnName, label, prefixIcon) => `
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
      <span style="font-size:11px;color:#6b7280;font-weight:600;min-width:74px">${label}:</span>
      ${options.map(opt=>{
        const v  = typeof opt === "string" ? opt : opt.value;
        const l  = typeof opt === "string" ? opt : opt.label;
        const on = set.has(v);
        return `<button onclick="${fnName}('${v.replace(/'/g,"\\'")}')" style="padding:4px 10px;border-radius:20px;border:1px solid ${on?'#6366f1':'#e5e7eb'};background:${on?'#eef2ff':'#fff'};color:${on?'#6366f1':'#6b7280'};font-size:11px;font-weight:${on?700:500};cursor:pointer;font-family:inherit;transition:all .13s">${prefixIcon?prefixIcon(v):""}${l}</button>`;
      }).join("")}
      ${set.size>0?`<button onclick="${fnName}('__clear__')" style="padding:4px 8px;border-radius:20px;border:1px solid #e5e7eb;background:#fff;color:#ef4444;font-size:11px;cursor:pointer;font-family:inherit">✕ limpar</button>`:""}
    </div>`;

  const tipoChips = `
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
      <span style="font-size:11px;color:#6b7280;font-weight:600;min-width:74px">Tipo:</span>
      ${["Todos","Implantação","Sustentação"].map(opt=>{
        const on = dashTipoFilter===opt;
        const ic = opt==='Implantação'?'📋 ':opt==='Sustentação'?'🔧 ':'';
        return `<button onclick="dashTipoFilter='${opt}';render()" style="padding:4px 10px;border-radius:20px;border:1px solid ${on?'#6366f1':'#e5e7eb'};background:${on?'#eef2ff':'#fff'};color:${on?'#6366f1':'#6b7280'};font-size:11px;font-weight:${on?700:500};cursor:pointer;font-family:inherit;transition:all .13s">${ic}${opt}</button>`;
      }).join("")}
    </div>`;

  const variavelChips = `
    <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
      <span style="font-size:11px;color:#6b7280;font-weight:600;min-width:74px">Variável:</span>
      ${[{v:"count",l:"Qtd. de tarefas"},{v:"esforco",l:"Somatório de esforço"}].map(o=>{
        const on = dashVariavel===o.v;
        return `<button onclick="dashVariavel='${o.v}';render()" style="padding:4px 10px;border-radius:20px;border:1px solid ${on?'#6366f1':'#e5e7eb'};background:${on?'#eef2ff':'#fff'};color:${on?'#6366f1':'#6b7280'};font-size:11px;font-weight:${on?700:500};cursor:pointer;font-family:inherit;transition:all .13s">${o.l}</button>`;
      }).join("")}
    </div>`;

  const filterBar = `
    <div class="card" style="padding:14px 16px;margin-bottom:18px;display:grid;gap:8px">
      ${tipoChips}
      ${chipMulti(dashStatusFilter,  STATUS_OPTS,  "toggleDashStatus",  "Status")}
      ${chipMulti(dashProdutoFilter, allProdutos,  "toggleDashProduto", "Produto")}
      ${chipMulti(dashEtapaFilter,   allEtapas,    "toggleDashEtapa",   "Etapa")}
      ${variavelChips}
    </div>`;

  // ── KPI cards (respect all filters) ────────────────────────────────────────
  const allFilteredTasks = filteredProjects.flatMap(p => filteredTasks(p));
  const kpiTotalProj  = filteredProjects.length;
  const kpiTotalTasks = allFilteredTasks.length;
  const kpiEsforco    = allFilteredTasks.reduce((s,t)=>s+(Number(t.effort)||0),0);
  const kpiAtrasadas  = allFilteredTasks.filter(isOverdue).length;
  const kpiFinaliz    = allFilteredTasks.filter(t=>t.status==="Finalizado").length;
  const kpiPctProgress= kpiTotalTasks ? Math.round((kpiFinaliz/kpiTotalTasks)*100) : 0;

  const kpiCards = `
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:20px">
      <div class="stat-card-sm"><div style="font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#9ca3af;font-weight:700;margin-bottom:5px">Projetos</div><div class="stat-value-lg" style="color:#6366f1">${kpiTotalProj}</div></div>
      <div class="stat-card-sm"><div style="font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#9ca3af;font-weight:700;margin-bottom:5px">Tarefas</div><div class="stat-value-lg" style="color:#374151">${kpiTotalTasks}</div></div>
      <div class="stat-card-sm"><div style="font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#9ca3af;font-weight:700;margin-bottom:5px">Esforço</div><div class="stat-value-lg" style="color:#0ea5e9">${kpiEsforco}</div></div>
      <div class="stat-card-sm"><div style="font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#9ca3af;font-weight:700;margin-bottom:5px">Progresso</div><div class="stat-value-lg" style="color:#10b981">${kpiPctProgress}%</div></div>
      <div class="stat-card-sm"><div style="font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:#9ca3af;font-weight:700;margin-bottom:5px">Atrasadas</div><div class="stat-value-lg" style="color:${kpiAtrasadas>0?'#ef4444':'#9ca3af'}">${kpiAtrasadas}</div></div>
    </div>`;

  // ── Table 1: Progress summary ──────────────────────────────────────────────
  // Status counts ignore the Status filter (so the user always sees the breakdown);
  // but Tipo/Produto/Etapa filters still apply.
  const table1Rows = filteredProjects.map(p=>{
    const tasks = filteredTasks(p, {ignoreStatus:true});
    if(!tasks.length) return "";
    const totalEsforco = tasks.reduce((s,t)=>s+(Number(t.effort)||0),0);
    const doneEsforco  = tasks.filter(t=>t.status==="Finalizado").reduce((s,t)=>s+(Number(t.effort)||0),0);
    const pct = totalEsforco===0 ? 0 : Math.round((doneEsforco/totalEsforco)*100);
    const fin  = tasks.filter(t=>t.status==="Finalizado").length;
    const run  = tasks.filter(t=>t.status==="Em Execução").length;
    const ni   = tasks.filter(t=>t.status==="Não Iniciado").length;
    const late = tasks.filter(isOverdue).length;
    const meta = getProjectMeta(p.name);
    return `<tr>
      <td>
        <div style="font-weight:600;color:#374151;margin-bottom:2px">${p.name}</div>
        <div style="font-size:10px;color:#9ca3af;margin-bottom:4px">${meta.produto} · ${meta.etapa}</div>
        <div style="height:4px;background:#f3f4f6;border-radius:4px;width:120px;overflow:hidden">
          <div style="height:100%;width:${pct}%;background:#6366f1;border-radius:4px"></div>
        </div>
      </td>
      <td style="text-align:center;font-weight:700;color:#6366f1">${pct}%</td>
      <td style="text-align:center"><span style="color:#15803d;font-weight:600">${fin}</span></td>
      <td style="text-align:center"><span style="color:#1d4ed8;font-weight:600">${run}</span></td>
      <td style="text-align:center"><span style="color:#6b7280;font-weight:600">${ni}</span></td>
      <td style="text-align:center"><span style="color:${late>0?"#ef4444":"#9ca3af"};font-weight:600">${late}</span></td>
      <td style="text-align:center;color:#374151;font-weight:600">${tasks.length}</td>
    </tr>`;
  }).join("");

  const table1 = `
    <div class="table-wrap" style="margin-bottom:24px">
      <table class="dash-table">
        <thead><tr>
          <th>Projeto</th>
          <th style="text-align:center">Progresso</th>
          <th style="text-align:center">Finalizadas</th>
          <th style="text-align:center">Em Execução</th>
          <th style="text-align:center">Não Iniciadas</th>
          <th style="text-align:center">Atrasadas</th>
          <th style="text-align:center">Total</th>
        </tr></thead>
        <tbody>
          ${table1Rows || `<tr><td colspan="7" style="text-align:center;padding:30px;color:#9ca3af;font-size:13px">Nenhum projeto/tarefa atende aos filtros aplicados.</td></tr>`}
        </tbody>
      </table>
    </div>`;

  // ── Table 2: Tasks ending per week per project (Monday-anchored) ───────────
  // For each filtered task, the week is the Monday of that task's end-date week.
  // Header shows dd/mm of the Monday; cell counts tasks (or sums effort) whose
  // end falls in [Monday, Sunday] of that week.
  const allMondays = [...new Set(
    filteredProjects.flatMap(p => filteredTasks(p)
      .map(t => getMondayOfWeek(t.end))
      .filter(Boolean)
    )
  )].sort();

  let table2 = "";
  if(allMondays.length){
    const weekLabel = isoMon => {
      const [y,m,d] = isoMon.split("-");
      return `${d}/${m}`;
    };
    // Pre-compute aggregated values per (projectId, monday) for performance
    const valByProjWeek = {};
    filteredProjects.forEach(p => {
      valByProjWeek[p.id] = {};
      filteredTasks(p).forEach(t => {
        const mon = getMondayOfWeek(t.end);
        if(!mon) return;
        const inc = dashVariavel === "esforco" ? (Number(t.effort)||0) : 1;
        valByProjWeek[p.id][mon] = (valByProjWeek[p.id][mon] || 0) + inc;
      });
    });

    const headerCells = allMondays.map(m => `
      <th style="text-align:center;width:90px;min-width:90px;padding:8px 6px">
        <div style="font-size:9px;color:#9ca3af;font-weight:600;text-transform:uppercase">Sem</div>
        <div style="font-size:11px;color:#374151;font-weight:700;margin-top:1px">${weekLabel(m)}</div>
      </th>`).join("");

    const bodyRows = filteredProjects.map(p => {
      const cells = allMondays.map(m => {
        const v = valByProjWeek[p.id][m] || 0;
        return `<td class="week-cell" style="text-align:center;width:90px;min-width:90px">${v>0?`<span class="week-badge">${v}</span>`:`<span style="color:#e5e7eb">—</span>`}</td>`;
      }).join("");
      const totalRow = filteredTasks(p).filter(t => getMondayOfWeek(t.end)).length;
      if(totalRow===0 && dashStatusFilter.size===0) return ""; // skip projects with no tasks (when no status filter)
      return `<tr>
        <td class="proj-cell" style="font-weight:600;color:#374151;white-space:nowrap;position:sticky;left:0;background:#fff;border-right:1px solid #f3f4f6;min-width:200px;max-width:240px;overflow:hidden;text-overflow:ellipsis">${p.name}</td>
        ${cells}
      </tr>`;
    }).filter(Boolean).join("");

    // The wrapper limits the visible width to ~10 weeks (200 + 10*90 = 1100px).
    // Anything beyond that scrolls horizontally.
    table2 = `
      <div style="margin-bottom:8px;font-size:11px;color:#9ca3af">
        Cada coluna é a segunda-feira da semana. As tarefas são contadas com base na <strong>data de fim</strong>, na semana correspondente (seg → dom). Variável atual: <strong>${dashUnitLabel()}</strong>.
      </div>
      <div style="border-radius:12px;border:1px solid #e5e7eb;background:#fff;overflow-x:auto;max-width:100%">
        <table class="dash-table" style="border-collapse:collapse;font-size:12px;min-width:max-content">
          <thead>
            <tr>
              <th class="proj-col" style="text-align:left;position:sticky;left:0;background:#f9fafb;min-width:200px;max-width:240px;border-right:1px solid #e5e7eb;z-index:2">Projeto</th>
              ${headerCells}
            </tr>
          </thead>
          <tbody>${bodyRows || `<tr><td colspan="${allMondays.length+1}" style="text-align:center;padding:30px;color:#9ca3af;font-size:13px">Nenhuma tarefa atende aos filtros aplicados.</td></tr>`}</tbody>
        </table>
      </div>`;
  } else {
    table2 = `<div class="card" style="padding:30px;text-align:center;color:#9ca3af;font-size:13px">Nenhuma tarefa com data de fim atende aos filtros.</div>`;
  }

  // ── Chart 3: Tasks per responsible (respects filters + variable) ───────────
  const colorMap = {};
  filteredProjects.forEach((p,i)=>{ colorMap[p.id]=PALETTE[i%PALETTE.length]; });
  const allResp = [...new Set(filteredProjects.flatMap(p=>filteredTasks(p).map(t=>t.responsible).filter(Boolean)))].sort();
  const chartData = allResp.map(resp=>{
    return {
      resp,
      byProj: filteredProjects.map(p => ({
        id: p.id,
        name: p.name,
        value: dashValueOf(filteredTasks(p).filter(t=>t.responsible===resp))
      }))
    };
  }).filter(d=>d.byProj.some(x=>x.value>0));
  const maxBar = Math.max(1,...chartData.map(d=>d.byProj.reduce((s,x)=>s+x.value,0)));

  const chart3Title = dashStatusFilter.size
    ? `Distribuição por responsável (${dashUnitLabel()})`
    : `Tarefas por responsável (${dashUnitLabel()})`;

  const chart3 = chartData.length===0 ? `<div class="card" style="padding:30px;text-align:center;color:#9ca3af;font-size:13px">Sem dados de responsáveis para os filtros aplicados.</div>` : `
    <div class="card" style="padding:20px;margin-bottom:24px">
      <h3 style="font-size:14px;font-weight:700;color:#374151;margin-bottom:6px">${chart3Title}</h3>
      <div style="display:flex;gap:16px;flex-wrap:wrap;margin-bottom:16px">
        ${filteredProjects.map(p=>`<div style="display:flex;align-items:center;gap:5px;font-size:11px;color:#6b7280"><div style="width:10px;height:10px;border-radius:2px;background:${colorMap[p.id]}"></div>${p.name}</div>`).join("")}
      </div>
      <div style="display:grid;gap:10px">
        ${chartData.map(d=>{
          const total=d.byProj.reduce((s,x)=>s+x.value,0);
          return `
            <div style="display:grid;grid-template-columns:140px 1fr 36px;align-items:center;gap:12px">
              <div style="display:flex;align-items:center;gap:7px;min-width:0">
                <div class="avatar" style="flex-shrink:0">${initials(d.resp)}</div>
                <span style="font-size:12px;color:#374151;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.resp}</span>
              </div>
              <div style="height:20px;background:#f3f4f6;border-radius:4px;overflow:hidden;display:flex">
                ${d.byProj.filter(x=>x.value>0).map(x=>`
                  <div style="height:100%;width:${Math.round((x.value/maxBar)*100)}%;background:${colorMap[x.id]};min-width:2px" title="${x.name}: ${x.value}"></div>
                `).join("")}
              </div>
              <span style="font-size:12px;font-weight:700;color:#374151;text-align:right">${total}</span>
            </div>`;
        }).join("")}
      </div>
    </div>`;

  return `
    <h1 class="page-title">Dashboard</h1>
    <p class="page-sub">Visão consolidada de todos os projetos</p>
    ${filterBar}
    ${kpiCards}
    <h3 style="font-size:13px;font-weight:700;color:#374151;margin-bottom:10px">Resumo por projeto</h3>
    ${table1}
    <h3 style="font-size:13px;font-weight:700;color:#374151;margin-bottom:6px">Tarefas previstas por semana</h3>
    ${table2}
    <h3 style="font-size:13px;font-weight:700;color:#374151;margin:24px 0 10px">${chart3Title}</h3>
    ${chart3}
  `;
}

// ─── SCHEDULE ─────────────────────────────────────────────────────────────────
function renderSchedule(){
  const p=getProject(); if(!p) return `<p>Projeto não encontrado.</p>`;
  const overdue=p.tasks.filter(isOverdue);
  const finished=p.tasks.filter(t=>t.status==="Finalizado").length;
  const running=p.tasks.filter(t=>t.status==="Em Execução").length;
  const notStarted=p.tasks.filter(t=>t.status==="Não Iniciado").length;
  const total=calcProgress(p.tasks);
  const kpis=[
    {label:"Progresso total",value:total+"%",color:"#6366f1",bg:"#eef2ff",border:"#c7d2fe"},
    {label:"Finalizadas",value:finished,color:"#10b981",bg:"#f0fdf4",border:"#bbf7d0"},
    {label:"Em Execução",value:running,color:"#3b82f6",bg:"#eff6ff",border:"#bfdbfe"},
    {label:"Não Iniciadas",value:notStarted,color:"#6b7280",bg:"#f9fafb",border:"#e5e7eb"},
    {label:"Atrasadas",value:overdue.length,color:"#ef4444",bg:"#fef2f2",border:"#fecaca"},
  ];
  const respCounts={};
  p.tasks.filter(t=>t.status!=="Finalizado").forEach(t=>{if(t.responsible)respCounts[t.responsible]=(respCounts[t.responsible]||0)+1;});
  const respData=Object.entries(respCounts).sort((a,b)=>b[1]-a[1]);
  const maxCount=respData.length?respData[0][1]:1;

  return `
    <div class="header-row">
      <div>
        <h1 class="page-title">${p.name}</h1>
        <p class="page-sub">Cronograma de implantação</p>
      </div>
      <div style="display:flex;gap:10px">
        <button class="btn-outline" onclick="openMacroModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Nova macroetapa
        </button>
        <button class="btn-primary" onclick="openModal()">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Nova tarefa
        </button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:20px">
      ${kpis.map(k=>`
        <div style="background:${k.bg};border-radius:12px;padding:14px 16px;border:1px solid ${k.border}20">
          <div style="font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:${k.color};opacity:.8;margin-bottom:5px">${k.label}</div>
          <div style="font-size:26px;font-weight:800;color:${k.color};letter-spacing:-.03em">${k.value}</div>
        </div>`).join("")}
    </div>

    ${respData.length>0?`
    <div class="card" style="padding:18px 20px;margin-bottom:20px">
      <h3 style="font-size:13px;font-weight:700;color:#374151;margin-bottom:14px">Tarefas abertas por responsável</h3>
      <div style="display:grid;gap:9px">
        ${respData.map(([name,count])=>`
          <div style="display:grid;grid-template-columns:130px 1fr 28px;align-items:center;gap:12px">
            <div style="display:flex;align-items:center;gap:7px;min-width:0">
              <div class="avatar" style="flex-shrink:0">${initials(name)}</div>
              <span style="font-size:12px;color:#374151;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${name}</span>
            </div>
            <div style="height:8px;background:#f3f4f6;border-radius:4px;overflow:hidden">
              <div style="height:100%;width:${Math.round((count/maxCount)*100)}%;background:#6366f1;border-radius:4px"></div>
            </div>
            <span style="font-size:12px;font-weight:700;color:#6366f1;text-align:right">${count}</span>
          </div>`).join("")}
      </div>
    </div>`:""}

    ${p.macros.map(m=>renderMacroBlock(p,m)).join("")}

    <div style="margin-top:32px;margin-bottom:8px;display:flex;align-items:center;gap:10px">
      <h2 style="font-size:16px;font-weight:700;color:#111;margin:0">Linha do tempo</h2>
      <div style="height:1px;flex:1;background:#e5e7eb"></div>
    </div>
    <p style="font-size:12px;color:#9ca3af;margin:0 0 14px">Visualização Gantt por semana — marcações toda segunda-feira</p>
    ${p.tasks.length>0?buildGanttHTML(p):`<div class="card" style="padding:30px;text-align:center;color:#9ca3af;font-size:13px">Nenhuma tarefa ainda. Adicione tarefas para visualizar o Gantt.</div>`}

    <div style="margin-top:36px;margin-bottom:8px;display:flex;align-items:center;gap:10px">
      <h2 style="font-size:16px;font-weight:700;color:#111;margin:0">Backlog Linear</h2>
      <div style="height:1px;flex:1;background:#e5e7eb"></div>
    </div>
    <p style="font-size:12px;color:#9ca3af;margin:0 0 14px">Issues sincronizadas com o Linear</p>
    <div class="card" style="padding:14px 18px;margin-bottom:14px">
      <div style="display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap">
        <div style="flex:1;min-width:180px">
          <label class="field-label">Linear API Key</label>
          <input type="password" id="sch-apikey" class="inp-sm" value="${p.linearApiKey}" placeholder="lin_api_xxxxxxxxxxxx"/>
        </div>
        <div style="flex:1;min-width:160px">
          <label class="field-label">Project ID (opcional)</label>
          <input type="text" id="sch-projectid" class="inp-sm" value="${p.linearProjectId}" placeholder="UUID do projeto..."/>
        </div>
        <button class="btn-primary" onclick="saveSettingsInline()" style="white-space:nowrap;padding:8px 16px">Salvar e buscar</button>
      </div>
    </div>
    ${buildLinearHTML(p)}
  `;
}

function renderMacroBlock(p,m){
  const mts=p.tasks.filter(t=>t.macroId===m.id);
  const pct=calcProgress(mts);
  const isExp=p.expandedMacros.has(m.id);
  const iconEdit=`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
  const iconTrash=`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
  return `
    <div class="macro-block">
      <div class="macro-header" onclick="toggleMacro(${m.id})" style="gap:10px">
        <div class="macro-dot" style="background:${m.color}"></div>
        <div style="flex:1">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px">
            <span style="font-weight:700;font-size:14px;color:#111">${m.name}</span>
            <div style="display:flex;align-items:center;gap:8px">
              <span style="font-size:13px;font-weight:800;color:${m.color}">${pct}%</span>
              <button class="btn-ghost" onclick="event.stopPropagation();openMacroModal(${m.id})">${iconEdit}</button>
              <button class="btn-ghost" onclick="event.stopPropagation();deleteMacro(${m.id})" style="color:#d1d5db">${iconTrash}</button>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2">${isExp?'<polyline points="6 9 12 15 18 9"/>':'<polyline points="9 18 15 12 9 6"/>'}</svg>
            </div>
          </div>
          <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:${m.color}"></div></div>
        </div>
      </div>
      <div class="macro-body ${isExp?'open':''}">
        ${m.subetapas.map(sub=>renderSubBlock(p,m,sub)).join("")}
        <div class="add-task-row">
          <button class="btn-dashed" onclick="openModal(${m.id})">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Adicionar tarefa
          </button>
          <button class="btn-dashed" onclick="openAddSubModal(${m.id})" style="color:#6366f1;border-color:#c7d2fe">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Nova subetapa
          </button>
        </div>
      </div>
    </div>`;
}

function renderSubBlock(p,m,sub){
  const sts=p.tasks.filter(t=>t.macroId===m.id&&t.subetapa===sub);
  const iconEdit=`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
  const iconTrash=`<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
  const safeSub=sub.replace(/'/g,"\\'");
  return `
    <div>
      <div class="sub-header">
        <div style="width:6px;height:6px;border-radius:50%;background:${m.color}80;flex-shrink:0"></div>
        <span class="sub-name">${sub}</span>
        <span style="font-size:11px;font-weight:700;color:${m.color};margin-right:4px">${calcProgress(sts)}%</span>
        <span class="sub-count">${sts.length} tarefa${sts.length!==1?"s":""}</span>
        <button class="btn-ghost" onclick="openRenameSubModal(${m.id},'${safeSub}')">${iconEdit}</button>
        <button class="btn-ghost" onclick="deleteSubetapa(${m.id},'${safeSub}')" style="color:#d1d5db">${iconTrash}</button>
      </div>
      ${sts.length===0?`<div style="padding:8px 18px 8px 50px;font-size:11px;color:#d1d5db;font-style:italic">Nenhuma tarefa nesta subetapa.</div>`:`
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="background:#fdfdfd">
            <th style="padding:7px 14px 7px 34px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Tarefa</th>
            <th style="padding:7px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Responsável</th>
            <th style="padding:7px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Início</th>
            <th style="padding:7px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Fim</th>
            <th style="padding:7px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Esforço</th>
            <th style="padding:7px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Status</th>
            <th style="padding:7px 14px;border-bottom:1px solid #f3f4f6"></th>
          </tr></thead>
          <tbody>
            ${sts.map(t=>{const over=isOverdue(t);return`
              <tr style="border-bottom:1px solid #f9fafb">
                <td style="padding:9px 14px 9px 34px">
                  <div style="font-weight:600;color:#374151">${t.name}</div>
                  ${t.checklist.length>0?`<div style="font-size:10px;color:#9ca3af;margin-top:2px">${t.checklist.filter(c=>c.done).length}/${t.checklist.length} checklist</div>`:""}
                </td>
                <td style="padding:9px 14px">
                  <div style="display:flex;align-items:center;gap:6px">
                    <div class="avatar">${initials(t.responsible)}</div>
                    <span style="color:#374151">${t.responsible||"—"}</span>
                  </div>
                </td>
                <td style="padding:9px 14px;color:#6b7280;white-space:nowrap">${fmtDate(t.start)}</td>
                <td style="padding:9px 14px;white-space:nowrap;color:${over?"#ef4444":"#6b7280"};font-weight:${over?700:400}">${fmtDate(t.end)}</td>
                <td style="padding:9px 14px"><div class="effort-bars">${[1,2,3,4,5].map(n=>`<div class="effort-bar" style="background:${n<=t.effort?"#6366f1":"#e5e7eb"}"></div>`).join("")}</div></td>
                <td style="padding:9px 14px"><span class="${getBadgeClass(t)}">${getBadgeLabel(t)}</span></td>
                <td style="padding:9px 14px"><div style="display:flex;gap:4px">
                  <button class="btn-ghost" onclick="openModal(null,'${t.id}')">${iconEdit}</button>
                  <button class="btn-ghost" onclick="deleteTask('${t.id}')" style="color:#d1d5db">${iconTrash}</button>
                </div></td>
              </tr>`;}).join("")}
          </tbody>
        </table>`}
    </div>`;
}

// ─── GANTT ────────────────────────────────────────────────────────────────────
function buildGanttHTML(p){
  const allDates=p.tasks.flatMap(t=>[new Date(t.start),new Date(t.end)]);
  const minD=new Date(Math.min(...allDates));
  const maxD=new Date(Math.max(...allDates));
  const dayOfWeek=minD.getDay();
  const daysToMonday=dayOfWeek===0?6:dayOfWeek-1;
  minD.setDate(minD.getDate()-daysToMonday-7);
  maxD.setDate(maxD.getDate()+9);
  const span=maxD-minD;
  function pct(d){return Math.max(0,Math.min(100,((new Date(d)-minD)/span)*100));}
  function wid(s,e){return Math.max(0.3,pct(e)-pct(s));}
  const todayPct=pct(todayStr());
  // weeks
  const weeks=[];
  let cur=new Date(minD);
  while(cur.getDay()!==1)cur.setDate(cur.getDate()+1);
  while(cur<maxD){
    const iso=cur.toISOString().slice(0,10);
    weeks.push({label:`${String(cur.getDate()).padStart(2,'0')}/${String(cur.getMonth()+1).padStart(2,'0')}`,p:pct(iso),month:cur.toLocaleDateString("pt-BR",{month:"short"}),year:String(cur.getFullYear()).slice(2),monthNum:cur.getMonth()});
    cur=new Date(cur);cur.setDate(cur.getDate()+7);
  }
  // month bands
  const monthBands=[];let prevM=-1;
  weeks.forEach(w=>{if(w.monthNum!==prevM){monthBands.push({label:`${w.month} ${w.year}`,p:w.p});prevM=w.monthNum;}});
  const gridLines=weeks.map(w=>`<div style="position:absolute;left:${w.p}%;top:0;bottom:0;width:1px;background:#f0f0f0;pointer-events:none"></div>`).join("");
  const gridLinesLight=weeks.map(w=>`<div style="position:absolute;left:${w.p}%;top:0;bottom:0;width:1px;background:#f5f5f5;pointer-events:none"></div>`).join("");
  let rows="";
  p.macros.forEach(m=>{
    const mts=p.tasks.filter(t=>t.macroId===m.id);
    if(!mts.length)return;
    const macroStart=mts.reduce((mn,t)=>t.start<mn?t.start:mn,mts[0].start);
    const macroEnd=mts.reduce((mx,t)=>t.end>mx?t.end:mx,mts[0].end);
    const isExp=p.expandedGantt.has(m.id);
    rows+=`
      <div class="gantt-row gantt-macro-row" onclick="toggleGantt(${m.id})">
        <div class="gantt-row-label">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2">${isExp?'<polyline points="6 9 12 15 18 9"/>':'<polyline points="9 18 15 12 9 6"/>'}</svg>
          <div style="width:10px;height:10px;border-radius:3px;background:${m.color};flex-shrink:0"></div>
          <span style="font-size:12px;font-weight:700;color:#374151;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${m.name}</span>
        </div>
        <div class="gantt-row-chart">${gridLines}
          <div class="gantt-bar" style="left:${pct(macroStart)}%;width:${wid(macroStart,macroEnd)}%;height:10px;background:${m.color}40;border:1.5px solid ${m.color}"></div>
          <div class="gantt-today" style="left:${todayPct}%"></div>
        </div>
      </div>`;
    if(isExp){mts.forEach(t=>{const bar=getBarColor(t);rows+=`
      <div class="gantt-row">
        <div class="gantt-row-label" style="padding-left:32px">
          <span style="font-size:11px;color:#9ca3af;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1" title="${t.name}">${t.name}</span>
        </div>
        <div class="gantt-row-chart">${gridLinesLight}
          <div class="gantt-bar" style="left:${pct(t.start)}%;width:${wid(t.start,t.end)}%;height:8px;background:${bar};opacity:.85" title="${t.name}: ${fmtDate(t.start)} → ${fmtDate(t.end)}"></div>
          <div class="gantt-today" style="left:${todayPct}%;opacity:.35"></div>
        </div>
      </div>`;});}
  });
  return `
    <div class="gantt-wrap">
      <div class="gantt-inner">
        <div class="gantt-head">
          <div style="display:flex;border-bottom:1px solid #e5e7eb">
            <div class="gantt-label-col" style="height:22px">MÊS</div>
            <div style="flex:1;position:relative;height:22px">
              ${monthBands.map(b=>`<div style="position:absolute;left:${b.p}%;top:0;bottom:0;display:flex;align-items:center;padding-left:6px;font-size:11px;font-weight:700;color:#374151;white-space:nowrap;border-left:1px solid #e5e7eb">${b.label}</div>`).join("")}
            </div>
          </div>
          <div style="display:flex;border-bottom:1px solid #e5e7eb">
            <div class="gantt-label-col" style="height:22px">SEMANA</div>
            <div style="flex:1;position:relative;height:22px">
              ${weeks.map(w=>`<div style="position:absolute;left:${w.p}%;top:0;bottom:0;border-left:1px solid #e5e7eb;display:flex;align-items:center;padding-left:4px"><span style="font-size:10px;color:#9ca3af;white-space:nowrap;font-weight:500">${w.label}</span></div>`).join("")}
            </div>
          </div>
        </div>
        ${rows}
        <div class="gantt-legend">
          ${[["#9ca3af","Não Iniciado"],["#3b82f6","Em Execução"],["#10b981","Finalizado"],["#ef4444","Atrasado"]].map(([c,l])=>`<div class="gantt-legend-item"><div class="gantt-legend-dot" style="background:${c}"></div>${l}</div>`).join("")}
          <div class="gantt-legend-item" style="margin-left:8px"><div style="width:1.5px;height:14px;background:#ef4444;opacity:.6"></div>Hoje</div>
          <div class="gantt-legend-item"><div style="width:1px;height:14px;background:#e5e7eb"></div>Segunda-feira</div>
        </div>
      </div>
    </div>`;
}
function toggleMacro(id){const p=getProject();if(!p)return;if(p.expandedMacros.has(id))p.expandedMacros.delete(id);else p.expandedMacros.add(id);render();}
function toggleGantt(id){const p=getProject();if(!p)return;if(p.expandedGantt.has(id))p.expandedGantt.delete(id);else p.expandedGantt.add(id);render();}

// ─── LINEAR ───────────────────────────────────────────────────────────────────
function buildLinearHTML(p){
  if(!p.linearApiKey)return`
    <div class="card" style="padding:36px;text-align:center;color:#9ca3af">
      <div style="font-size:32px;margin-bottom:8px">🔗</div>
      <p style="font-weight:600;color:#374151;margin-bottom:4px;font-size:14px">Integração não configurada</p>
      <p style="font-size:12px">Insira sua API Key acima e clique em Salvar.</p>
    </div>`;
  let filtered=[...p.linearIssues];
  if(linearSearch)filtered=filtered.filter(i=>i.title.toLowerCase().includes(linearSearch.toLowerCase()));
  if(linearFilterStatus.size)filtered=filtered.filter(i=>linearFilterStatus.has(i.state?.name));
  if(linearFilterResp.size)filtered=filtered.filter(i=>linearFilterResp.has(i.assignee?.name));
  if(linearFilterPri.size)filtered=filtered.filter(i=>linearFilterPri.has(String(i.priority)));
  filtered.sort((a,b)=>{if(linearSort==="createdAt")return new Date(b.createdAt)-new Date(a.createdAt);if(linearSort==="priority")return a.priority-b.priority;return(a.assignee?.name||"").localeCompare(b.assignee?.name||"");});
  const allStatuses=[...new Set(p.linearIssues.map(i=>i.state?.name).filter(Boolean))].sort();
  const allResps=[...new Set(p.linearIssues.map(i=>i.assignee?.name).filter(Boolean))].sort();
  const allPris=[...new Set(p.linearIssues.map(i=>i.priority))].sort((a,b)=>a-b);
  const byStatus={};
  filtered.forEach(i=>{const s=i.state?.name||"Sem status";if(!byStatus[s])byStatus[s]=[];byStatus[s].push(i);});
  const statusOrder=allStatuses.filter(s=>byStatus[s]);
  if(byStatus["Sem status"]&&!statusOrder.includes("Sem status"))statusOrder.push("Sem status");
  const dotColor=s=>{const sl=s.toLowerCase();if(sl.includes("done")||sl.includes("conclu")||sl.includes("finaliz"))return"#10b981";if(sl.includes("progress")||sl.includes("andamento")||sl.includes("execu"))return"#3b82f6";if(sl.includes("cancel")||sl.includes("duplic"))return"#9ca3af";if(sl.includes("block")||sl.includes("impedi"))return"#ef4444";if(sl.includes("review"))return"#f59e0b";return"#8b5cf6";};
  const iconLink=`<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  const chipSet=(set,options,fn,lbl)=>`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap"><span style="font-size:11px;color:#6b7280;font-weight:600;white-space:nowrap">${lbl}</span>${options.map(o=>{const v=o.value!==undefined?String(o.value):o,l=o.label!==undefined?o.label:o,on=set.has(v);return`<button onclick="${fn}('${v}')" style="padding:3px 9px;border-radius:20px;border:1px solid ${on?'#6366f1':'#e5e7eb'};background:${on?'#eef2ff':'#fff'};color:${on?'#6366f1':'#6b7280'};font-size:11px;font-weight:${on?700:500};cursor:pointer;font-family:inherit">${l}</button>`;}).join("")}${set.size>0?`<button onclick="${fn}('__clear__')" style="padding:3px 7px;border-radius:20px;border:1px solid #e5e7eb;background:#fff;color:#ef4444;font-size:10px;cursor:pointer;font-family:inherit">✕</button>`:""}</div>`;
  return`
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:10px">
      <p style="font-size:12px;color:#9ca3af;margin:0">${filtered.length} de ${p.linearIssues.length} issues</p>
      <div style="display:flex;gap:10px;align-items:center">
        <select class="inp-sm" style="width:auto" onchange="linearSort=this.value;render()">
          <option value="createdAt" ${linearSort==="createdAt"?"selected":""}>Data</option>
          <option value="priority" ${linearSort==="priority"?"selected":""}>Prioridade</option>
          <option value="assignee" ${linearSort==="assignee"?"selected":""}>Responsável</option>
        </select>
        <button class="btn-primary" onclick="fetchLinear()" style="white-space:nowrap;padding:7px 14px">↻ Atualizar</button>
      </div>
    </div>
    <div class="card" style="padding:12px 16px;margin-bottom:12px;display:grid;gap:8px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap">
        <div class="search-wrap" style="flex:0 0 200px">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" class="inp-sm" placeholder="Buscar..." value="${linearSearch}" oninput="linearSearch=this.value;render()"/>
        </div>
      </div>
      ${chipSet(linearFilterStatus,allStatuses.map(s=>({value:s,label:s})),"toggleStatus","Status:")}
      ${chipSet(linearFilterResp,allResps.map(r=>({value:r,label:r})),"toggleResp","Responsável:")}
      ${chipSet(linearFilterPri,allPris.map(x=>({value:String(x),label:priLabels[x]||x})),"togglePri","Prioridade:")}
    </div>
    <div id="linear-status"></div>
    ${statusOrder.length===0?`<div class="card" style="padding:30px;text-align:center;color:#9ca3af;font-size:13px">Nenhuma issue encontrada.</div>`:""}
    ${statusOrder.map(status=>{const issues=byStatus[status]||[];const dot=dotColor(status);return`
      <div class="card" style="margin-bottom:12px;overflow:hidden">
        <div style="padding:10px 16px;background:#fafafa;border-bottom:1px solid #f3f4f6;display:flex;align-items:center;gap:8px">
          <div style="width:8px;height:8px;border-radius:50%;background:${dot}"></div>
          <span style="font-size:13px;font-weight:700;color:#374151">${status}</span>
          <span style="font-size:11px;color:#9ca3af">${issues.length} issue${issues.length!==1?"s":""}</span>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:12px">
          <thead><tr style="background:#fdfdfd">
            <th style="padding:8px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Título</th>
            <th style="padding:8px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Responsável</th>
            <th style="padding:8px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Prioridade</th>
            <th style="padding:8px 14px;text-align:left;font-weight:700;color:#9ca3af;font-size:10px;text-transform:uppercase;letter-spacing:.05em;border-bottom:1px solid #f3f4f6">Data</th>
            <th style="padding:8px 14px;border-bottom:1px solid #f3f4f6"></th>
          </tr></thead>
          <tbody>
            ${issues.map(issue=>`<tr style="border-bottom:1px solid #f9fafb">
              <td style="padding:9px 14px;font-weight:500;color:#374151">${issue.title}</td>
              <td style="padding:9px 14px;color:#374151;white-space:nowrap">${issue.assignee?.name?`<div style="display:flex;align-items:center;gap:5px"><div class="avatar">${initials(issue.assignee.name)}</div>${issue.assignee.name}</div>`:`<span style="color:#d1d5db">—</span>`}</td>
              <td style="padding:9px 14px;white-space:nowrap"><span class="${priColors[issue.priority]||"priority-none"}">${priLabels[issue.priority]||"—"}</span></td>
              <td style="padding:9px 14px;color:#9ca3af;white-space:nowrap">${issue.createdAt?fmtDate(issue.createdAt):"—"}</td>
              <td style="padding:9px 14px"><a href="${issue.url}" target="_blank" style="color:#9ca3af;display:flex;align-items:center">${iconLink}</a></td>
            </tr>`).join("")}
          </tbody>
        </table>
      </div>`;}).join("")}`;
}
function toggleStatus(v){if(v==="__clear__")linearFilterStatus.clear();else{if(linearFilterStatus.has(v))linearFilterStatus.delete(v);else linearFilterStatus.add(v);}render();}
function toggleResp(v){if(v==="__clear__")linearFilterResp.clear();else{if(linearFilterResp.has(v))linearFilterResp.delete(v);else linearFilterResp.add(v);}render();}
function togglePri(v){if(v==="__clear__")linearFilterPri.clear();else{if(linearFilterPri.has(v))linearFilterPri.delete(v);else linearFilterPri.add(v);}render();}
function saveSettingsInline(){
  const p=getProject();if(!p)return;
  p.linearApiKey=document.getElementById("sch-apikey").value.trim();
  p.linearProjectId=document.getElementById("sch-projectid").value.trim();
  fetchLinear();
}
async function fetchLinear(){
  const p=getProject();if(!p||!p.linearApiKey)return;
  const statusEl=document.getElementById("linear-status");
  if(statusEl)statusEl.innerHTML=`<div style="padding:12px;background:#eff6ff;border-radius:8px;color:#1d4ed8;font-size:12px;margin-bottom:10px">Carregando issues...</div>`;
  try{
    const q=`{issues(filter:{${p.linearProjectId?`project:{id:{eq:"${p.linearProjectId}"}}`:""}})  {nodes{id title state{name} assignee{name} priority createdAt url project{name} team{name}}}}`;
    const res=await fetch("https://api.linear.app/graphql",{method:"POST",headers:{"Authorization":p.linearApiKey,"Content-Type":"application/json"},body:JSON.stringify({query:q})});
    const data=await res.json();
    if(data.errors)throw new Error(data.errors[0].message);
    p.linearIssues=data.data?.issues?.nodes||[];
    render();
  }catch(e){if(statusEl)statusEl.innerHTML=`<div style="padding:12px;background:#fef2f2;border-radius:8px;color:#b91c1c;font-size:12px;margin-bottom:10px">Erro: ${e.message}</div>`;}
}

// ─── MACRO MANAGEMENT ─────────────────────────────────────────────────────────
function openMacroModal(macroId){
  const p=getProject();if(!p)return;
  const m=macroId?p.macros.find(x=>x.id===macroId):null;
  macroModalEditingId=macroId||null;
  macroModalSubs=m?[...m.subetapas]:[];
  document.getElementById("macro-modal-title").textContent=m?"Editar Macroetapa":"Nova Macroetapa";
  document.getElementById("m-id").value=macroId||"";
  document.getElementById("m-name").value=m?m.name:"";
  const color=m?m.color:"#6366f1";
  document.getElementById("m-color").value=color;
  selectMacroColor(color);
  // Set tipo radio
  const tipo = m?.tipo || "Implantação";
  document.getElementById("m-tipo-imp").checked = tipo==="Implantação";
  document.getElementById("m-tipo-sus").checked = tipo==="Sustentação";
  renderMacroSubList();
  document.getElementById("macro-modal").classList.add("open");
}
function closeMacroModal(){document.getElementById("macro-modal").classList.remove("open");macroModalSubs=[];macroModalEditingId=null;}
function selectMacroColor(color){
  document.getElementById("m-color").value=color;
  PALETTE.forEach(c=>{const btn=document.getElementById("mc-"+c.slice(1));if(btn)btn.style.borderColor=c===color?"#111":"transparent";});
}
function renderMacroSubList(){
  document.getElementById("m-subetapas-list").innerHTML=macroModalSubs.map((s,i)=>`
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
      <span style="flex:1;font-size:13px;color:#374151;padding:6px 10px;background:#f9fafb;border-radius:7px;border:1px solid #e5e7eb">${s}</span>
      <button class="btn-ghost" onclick="removeMacroSub(${i})" style="color:#d1d5db"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    </div>`).join("")||`<p style="font-size:12px;color:#d1d5db;font-style:italic">Nenhuma subetapa ainda.</p>`;
}
function addSubetapa(){const inp=document.getElementById("new-sub-input");const val=inp.value.trim();if(!val)return;macroModalSubs.push(val);inp.value="";renderMacroSubList();}
function removeMacroSub(idx){macroModalSubs.splice(idx,1);renderMacroSubList();}
function saveMacro(){
  const p=getProject();if(!p)return;
  const name=document.getElementById("m-name").value.trim();if(!name){alert("Informe o nome.");return;}
  const color=document.getElementById("m-color").value;
  const tipo=document.getElementById("m-tipo-sus").checked?"Sustentação":"Implantação";
  if(macroModalEditingId){
    const m=p.macros.find(x=>x.id===macroModalEditingId);
    if(m){m.name=name;m.color=color;m.subetapas=[...macroModalSubs];m.tipo=tipo;}
  }else{
    const newId=Math.max(0,...p.macros.map(x=>x.id))+1;
    p.macros.push({id:newId,name,color,subetapas:[...macroModalSubs],tipo});
    p.expandedMacros.add(newId);p.expandedGantt.add(newId);
  }
  closeMacroModal();render();
}
function deleteMacro(id){
  const p=getProject();if(!p)return;
  const m=p.macros.find(x=>x.id===id);
  const cnt=p.tasks.filter(t=>t.macroId===id).length;
  if(!confirm(`Excluir "${m.name}"?${cnt>0?` ${cnt} tarefa(s) também serão removidas.`:""}`))return;
  p.macros=p.macros.filter(x=>x.id!==id);
  p.tasks=p.tasks.filter(t=>t.macroId!==id);
  p.expandedMacros.delete(id);p.expandedGantt.delete(id);
  render();
}
function openAddSubModal(macroId){openMacroModal(macroId);setTimeout(()=>document.getElementById("new-sub-input").focus(),100);}
function openRenameSubModal(macroId,oldName){
  const p=getProject();if(!p)return;
  const newName=prompt("Renomear subetapa:",oldName);
  if(!newName||!newName.trim()||newName.trim()===oldName)return;
  const m=p.macros.find(x=>x.id===macroId);if(!m)return;
  const idx=m.subetapas.indexOf(oldName);if(idx>=0)m.subetapas[idx]=newName.trim();
  p.tasks.forEach(t=>{if(t.macroId===macroId&&t.subetapa===oldName)t.subetapa=newName.trim();});
  render();
}
function deleteSubetapa(macroId,subName){
  const p=getProject();if(!p)return;
  const cnt=p.tasks.filter(t=>t.macroId===macroId&&t.subetapa===subName).length;
  if(!confirm(`Excluir subetapa "${subName}"?${cnt>0?` ${cnt} tarefa(s) perderão a subetapa.`:""}`))return;
  const m=p.macros.find(x=>x.id===macroId);if(m)m.subetapas=m.subetapas.filter(s=>s!==subName);
  p.tasks.forEach(t=>{if(t.macroId===macroId&&t.subetapa===subName)t.subetapa="";});
  render();
}

// ─── TASK MODAL ───────────────────────────────────────────────────────────────
function openModal(macroIdHint,taskId){
  const p=getProject();if(!p)return;
  const task=taskId?p.tasks.find(t=>t.id===taskId):null;
  document.getElementById("modal-title").textContent=task?"Editar Tarefa":"Nova Tarefa";
  document.getElementById("f-id").value=task?task.id:genId();
  document.getElementById("f-name").value=task?task.name:"";
  document.getElementById("f-start").value=task?task.start:todayStr();
  document.getElementById("f-end").value=task?task.end:addDays(todayStr(),7);
  document.getElementById("f-effort").value=task?task.effort:3;
  document.getElementById("f-desc").value=task?task.description:"";
  document.getElementById("f-notes").value=task?task.notes:"";
  const macroSel=document.getElementById("f-macro");
  macroSel.innerHTML=p.macros.map(m=>`<option value="${m.id}">${m.name}</option>`).join("");
  const targetMacro=task?task.macroId:(macroIdHint||p.macros[0]?.id||1);
  macroSel.value=targetMacro;
  updateSubetapas();
  if(task)document.getElementById("f-sub").value=task.subetapa;
  document.getElementById("f-status").value=task?task.status:"Não Iniciado";
  // ── Populate responsible dropdown ──────────────────────────────────────────
  // Find alloc project matching this implant project by name to get team members
  const matchedAllocProj = allocProjects.find(ap=>ap.nome===p.name);
  const teamIds = matchedAllocProj
    ? allocVacancies.filter(v=>v.projetoId===matchedAllocProj.id&&v.funcionarioId).map(v=>v.funcionarioId)
    : [];
  const teamMembers   = allocEmployees.filter(e=>teamIds.includes(e.id));
  const otherMembers  = allocEmployees.filter(e=>!teamIds.includes(e.id));
  const currentResp   = task ? task.responsible : "";
  const respSel = document.getElementById("f-resp");
  respSel.innerHTML =
    `<option value="">— Sem responsável —</option>` +
    (teamMembers.length > 0
      ? `<optgroup label="── Time do projeto ──">${teamMembers.map(e=>`<option value="${e.nome}" ${currentResp===e.nome?"selected":""}>${e.nome}</option>`).join("")}</optgroup>`
      : "") +
    (otherMembers.length > 0
      ? `<optgroup label="── Todos os funcionários ──">${otherMembers.map(e=>`<option value="${e.nome}" ${currentResp===e.nome?"selected":""}>${e.nome}</option>`).join("")}</optgroup>`
      : "");
  // ───────────────────────────────────────────────────────────────────────────
  modalChecklist=task?JSON.parse(JSON.stringify(task.checklist)):[];
  renderChecklist();
  document.getElementById("task-modal").classList.add("open");
}
function closeModal(){document.getElementById("task-modal").classList.remove("open");}
function updateSubetapas(){
  const p=getProject();if(!p)return;
  const macroId=Number(document.getElementById("f-macro").value);
  const m=p.macros.find(x=>x.id===macroId);
  document.getElementById("f-sub").innerHTML=`<option value="">Selecionar...</option>`+(m?m.subetapas.map(s=>`<option value="${s}">${s}</option>`).join(""):"");
}
function renderChecklist(){
  document.getElementById("checklist-items").innerHTML=modalChecklist.map(c=>`
    <div class="checklist-item">
      <button class="check-toggle ${c.done?"done":""}" onclick="toggleCheckItem('${c.id}')">
        ${c.done?`<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`:""}
      </button>
      <span style="flex:1;font-size:13px;color:${c.done?"#9ca3af":"#374151"};text-decoration:${c.done?"line-through":"none"}">${c.text}</span>
      <button class="btn-ghost" onclick="removeCheckItem('${c.id}')" style="color:#d1d5db"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    </div>`).join("");
}
function addCheckItem(){const inp=document.getElementById("new-check-input");const text=inp.value.trim();if(!text)return;modalChecklist.push({id:genId(),text,done:false});inp.value="";renderChecklist();}
function toggleCheckItem(id){modalChecklist=modalChecklist.map(c=>c.id===id?{...c,done:!c.done}:c);renderChecklist();}
function removeCheckItem(id){modalChecklist=modalChecklist.filter(c=>c.id!==id);renderChecklist();}
function saveTask(){
  const p=getProject();if(!p)return;
  const id=document.getElementById("f-id").value;
  const task={
    id,name:document.getElementById("f-name").value.trim()||"Sem título",
    macroId:Number(document.getElementById("f-macro").value),
    subetapa:document.getElementById("f-sub").value,
    start:document.getElementById("f-start").value,
    end:document.getElementById("f-end").value,
    status:document.getElementById("f-status").value,
    responsible:document.getElementById("f-resp").value||"",
    effort:Number(document.getElementById("f-effort").value)||3,
    description:document.getElementById("f-desc").value,
    checklist:[...modalChecklist],
    notes:document.getElementById("f-notes").value,
  };
  const idx=p.tasks.findIndex(t=>t.id===id);
  if(idx>=0)p.tasks[idx]=task;else p.tasks.push(task);
  closeModal();render();
}
function deleteTask(id){
  const p=getProject();if(!p)return;
  if(!confirm("Excluir esta tarefa?"))return;
  p.tasks=p.tasks.filter(t=>t.id!==id);
  render();
}


// ══════════════════════════════════════════════════════════════════════════════
// ─── ALLOC MODULE ──────────────────────────────────────────────────────────────
// ══════════════════════════════════════════════════════════════════════════════

// ─── ALLOC CONSTANTS ─────────────────────────────────────────────────────────
const ALLOC_AREAS   = ["Farmer","Auditoria","DS","Dev","FDE","Suporte","Faturamento"];
const ALLOC_PRODUTOS= ["Auditoria","Rivio 2.0","Rivio 1.5","Rivio 1.0","Takeover","Glosa Garantida"];
const ALLOC_ETAPAS  = ["Negociação","Implantação","Adoção","Geração de Valor","Expansão"];
const ALLOC_FUNCOES = ["Farmer","Auditoria","DS","Dev","FDE","Suporte","Faturamento"];
const AREA_ORDER    = ["Farmer","Auditoria","DS","FDE","Dev","Suporte","Faturamento"];
const ETAPA_ORDER   = ["Negociação","Implantação","Adoção","Geração de Valor","Expansão"];
const AREA_COLORS   = {Farmer:"farmer",Auditoria:"auditoria",DS:"ds",Dev:"dev",FDE:"fde",Suporte:"suporte",Faturamento:"faturamento"};
const ETAPA_TAGS    = {Negociação:"neg",Implantação:"imp",Adoção:"ado","Geração de Valor":"gv",Expansão:"exp"};
const ALLOC_DOT_COLORS = {
  farmer:"#a78bfa", auditoria:"#34d399", ds:"#60a5fa",
  dev:"#fb923c", fde:"#f472b6", suporte:"#38bdf8", faturamento:"#fbbf24"
};

// ─── ALLOC STATE ─────────────────────────────────────────────────────────────
let allocEmployees = [
  {id:"e1",nome:"Maria Clara",area:"Farmer"},{id:"e2",nome:"Henrique Azevedo",area:"Farmer"},
  {id:"e3",nome:"Luís Felipe",area:"Farmer"},{id:"e4",nome:"Pedro Akra",area:"Farmer"},
  {id:"e5",nome:"Brunna Dopper",area:"Auditoria"},{id:"e6",nome:"Raquel Baptista",area:"Auditoria"},
  {id:"e7",nome:"Ana Baldovi",area:"Auditoria"},{id:"e8",nome:"Thaís Souza",area:"Auditoria"},
  {id:"e9",nome:"Larissa Hildebrando",area:"Auditoria"},{id:"e10",nome:"Alessandra Ferreira",area:"Auditoria"},
  {id:"e11",nome:"Rhavena Gomides",area:"Auditoria"},{id:"e12",nome:"Artur Giovanella",area:"Auditoria"},
  {id:"e13",nome:"Verônica Rodrighero",area:"DS"},{id:"e14",nome:"João Victor",area:"DS"},
  {id:"e15",nome:"Luís Lourenço",area:"DS"},{id:"e16",nome:"Bryan Muniz",area:"DS"},
  {id:"e17",nome:"Elma Diniz",area:"DS"},{id:"e18",nome:"Bruno Mafra",area:"FDE"},
  {id:"e19",nome:"Lucas Rota",area:"FDE"},{id:"e20",nome:"Amélio Junior",area:"Suporte"},
  {id:"e21",nome:"William Rocha",area:"Suporte"},{id:"e22",nome:"Jaime Neto",area:"Suporte"},
  {id:"e23",nome:"Gustavo",area:"Dev"},{id:"e24",nome:"Matheus Trevizan",area:"Dev"},
];

let allocProjects = [
  {id:"p1",nome:"Santa Catarina",produto:"Auditoria",etapa:"Negociação",dataInicio:"2026-08-01",descricao:""},
  {id:"p2",nome:"Moriah",produto:"Takeover",etapa:"Negociação",dataInicio:"2026-08-01",descricao:""},
  {id:"p3",nome:"Alberto Sabin",produto:"Rivio 2.0",etapa:"Negociação",dataInicio:"2026-06-01",descricao:""},
  {id:"p4",nome:"Santa Júlia",produto:"Rivio 2.0",etapa:"Negociação",dataInicio:"2026-06-01",descricao:""},
  {id:"p5",nome:"HCOR",produto:"Auditoria",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p6",nome:"Rede D'or SP",produto:"Auditoria",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p7",nome:"Rede D'or DF",produto:"Auditoria",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p8",nome:"Orion",produto:"Auditoria",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p9",nome:"AC Camargo",produto:"Auditoria",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p10",nome:"AACD",produto:"Auditoria",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p11",nome:"Santa Helena",produto:"Rivio 2.0",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p12",nome:"São Camilo",produto:"Glosa Garantida",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p13",nome:"BH",produto:"Rivio 2.0",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p14",nome:"Santa Rita",produto:"Rivio 2.0",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p15",nome:"Agnus Dei",produto:"Rivio 2.0",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p16",nome:"Incar",produto:"Rivio 2.0",etapa:"Implantação",dataInicio:"",descricao:""},
  {id:"p17",nome:"Sírio",produto:"Auditoria",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p18",nome:"Sabará",produto:"Auditoria",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p19",nome:"HAOC",produto:"Auditoria",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p20",nome:"FSFX",produto:"Auditoria",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p21",nome:"Orizonti",produto:"Auditoria",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p22",nome:"São Lucas",produto:"Auditoria",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p23",nome:"Beep",produto:"Rivio 1.5",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p24",nome:"Ang. Carón",produto:"Rivio 1.5",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p25",nome:"Pró Saúde",produto:"Rivio 1.0",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p26",nome:"Rafá",produto:"Rivio 1.0",etapa:"Adoção",dataInicio:"",descricao:""},
  {id:"p27",nome:"Samuel Libânio",produto:"Takeover",etapa:"Geração de Valor",dataInicio:"",descricao:""},
  {id:"p28",nome:"Einstein",produto:"Auditoria",etapa:"Expansão",dataInicio:"",descricao:""},
];

let allocVacancies = [
  {id:"v1",projetoId:"p5",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v2",projetoId:"p6",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v3",projetoId:"p7",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v4",projetoId:"p8",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v5",projetoId:"p9",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v6",projetoId:"p10",funcao:"Farmer",funcionarioId:"e2",descricao:""},
  {id:"v7",projetoId:"p11",funcao:"Farmer",funcionarioId:"e2",descricao:""},
  {id:"v8",projetoId:"p12",funcao:"Farmer",funcionarioId:"e3",descricao:""},
  {id:"v9",projetoId:"p13",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v10",projetoId:"p14",funcao:"Farmer",funcionarioId:"e2",descricao:""},
  {id:"v11",projetoId:"p15",funcao:"Farmer",funcionarioId:"e2",descricao:""},
  {id:"v12",projetoId:"p16",funcao:"Farmer",funcionarioId:"e4",descricao:""},
  {id:"v13",projetoId:"p17",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v14",projetoId:"p18",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v15",projetoId:"p19",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v16",projetoId:"p20",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v17",projetoId:"p21",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v18",projetoId:"p22",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v19",projetoId:"p23",funcao:"Farmer",funcionarioId:"e4",descricao:""},
  {id:"v20",projetoId:"p24",funcao:"Farmer",funcionarioId:"e4",descricao:""},
  {id:"v21",projetoId:"p25",funcao:"Farmer",funcionarioId:"e4",descricao:""},
  {id:"v22",projetoId:"p26",funcao:"Farmer",funcionarioId:"e4",descricao:""},
  {id:"v23",projetoId:"p27",funcao:"Farmer",funcionarioId:"e4",descricao:""},
  {id:"v24",projetoId:"p28",funcao:"Farmer",funcionarioId:"e1",descricao:""},
  {id:"v25",projetoId:"p5",funcao:"Auditoria",funcionarioId:"",descricao:""},
  {id:"v26",projetoId:"p6",funcao:"Auditoria",funcionarioId:"e8",descricao:""},
  {id:"v27",projetoId:"p7",funcao:"Auditoria",funcionarioId:"e8",descricao:""},
  {id:"v28",projetoId:"p9",funcao:"Auditoria",funcionarioId:"e5",descricao:""},
  {id:"v29",projetoId:"p10",funcao:"Auditoria",funcionarioId:"e5",descricao:""},
  {id:"v30",projetoId:"p11",funcao:"Auditoria",funcionarioId:"e6",descricao:""},
  {id:"v31",projetoId:"p12",funcao:"Auditoria",funcionarioId:"e12",descricao:""},
  {id:"v32",projetoId:"p17",funcao:"Suporte",funcionarioId:"e20",descricao:""},
  {id:"v33",projetoId:"p18",funcao:"Suporte",funcionarioId:"e20",descricao:""},
  {id:"v34",projetoId:"p19",funcao:"Suporte",funcionarioId:"e20",descricao:""},
  {id:"v35",projetoId:"p23",funcao:"Suporte",funcionarioId:"e22",descricao:""},
  {id:"v36",projetoId:"p24",funcao:"Suporte",funcionarioId:"e22",descricao:""},
  {id:"v37",projetoId:"p25",funcao:"Suporte",funcionarioId:"e22",descricao:""},
  {id:"v38",projetoId:"p26",funcao:"Suporte",funcionarioId:"e22",descricao:""},
  {id:"v39",projetoId:"p27",funcao:"Suporte",funcionarioId:"e22",descricao:""},
  {id:"v40",projetoId:"p28",funcao:"Suporte",funcionarioId:"e21",descricao:""},
  {id:"v41",projetoId:"p12",funcao:"DS",funcionarioId:"e15",descricao:""},
  {id:"v42",projetoId:"p9",funcao:"DS",funcionarioId:"e15",descricao:""},
  {id:"v43",projetoId:"p10",funcao:"DS",funcionarioId:"e17",descricao:""},
  {id:"v44",projetoId:"p11",funcao:"DS",funcionarioId:"e14",descricao:""},
  {id:"v45",projetoId:"p12",funcao:"DS",funcionarioId:"e16",descricao:""},
  {id:"v46",projetoId:"p13",funcao:"DS",funcionarioId:"e13",descricao:""},
  {id:"v47",projetoId:"p11",funcao:"FDE",funcionarioId:"e18",descricao:""},
  {id:"v48",projetoId:"p12",funcao:"FDE",funcionarioId:"e18",descricao:""},
];

// ─── ALLOC FILTER STATE ───────────────────────────────────────────────────────
let vacFilter = { search:"", projeto:"", funcionario:"", status:"" };
let allocModal = null; // {type, data}

// ─── ALLOC HELPERS ────────────────────────────────────────────────────────────
function allocGenId(){ return "a"+Math.random().toString(36).slice(2,9); }
function fmtAllocDate(d){ if(!d)return"—"; const[y,m,dd]=d.split("-"); return`${dd}/${m}/${y}`; }
function getEmployee(id){ return allocEmployees.find(e=>e.id===id); }
function getAllocProject(id){ return allocProjects.find(p=>p.id===id); }
function vacStatus(v){ return v.funcionarioId?"closed":"open"; }
function initials2(n){ if(!n)return"?"; return n.split(" ").slice(0,2).map(w=>w[0]).join("").toUpperCase(); }

// ─── PAGE: VAGAS ──────────────────────────────────────────────────────────────
function getFilteredVagas(){
  let vagas = [...allocVacancies];
  if(vacFilter.projeto)     vagas = vagas.filter(v=>v.projetoId===vacFilter.projeto);
  if(vacFilter.funcionario) vagas = vagas.filter(v=>v.funcionarioId===vacFilter.funcionario);
  if(vacFilter.status)      vagas = vagas.filter(v=>vacStatus(v)===vacFilter.status);
  if(vacFilter.search){
    const s=vacFilter.search.toLowerCase();
    vagas=vagas.filter(v=>{
      const pr=getAllocProject(v.projetoId);
      const em=getEmployee(v.funcionarioId);
      return(pr&&pr.nome.toLowerCase().includes(s))||(em&&em.nome.toLowerCase().includes(s))||v.funcao.toLowerCase().includes(s)||(v.descricao&&v.descricao.toLowerCase().includes(s));
    });
  }
  return vagas;
}

// Called only when typing in the search box — updates cards without re-rendering the whole page
function filterVagas(){
  vacFilter.search = document.getElementById("vac-search-input").value;
  const vagas = getFilteredVagas();
  const grid = document.getElementById("vac-cards-grid");
  const empty = document.getElementById("vac-empty");
  if(!grid) return;
  if(vagas.length===0){
    grid.innerHTML="";
    if(empty) empty.style.display="block";
  } else {
    if(empty) empty.style.display="none";
    grid.innerHTML = vagas.map(v=>renderVacancyCard(v)).join("");
  }
}

function renderVagas(){
  const vagas = getFilteredVagas();
  const total=allocVacancies.length;
  const openCount=allocVacancies.filter(v=>!v.funcionarioId).length;
  const closedCount=allocVacancies.filter(v=>!!v.funcionarioId).length;

  return `
    <div class="header-row">
      <div><h1 class="page-title">Vagas</h1><p class="page-sub">Gerencie alocações de pessoas por projeto</p></div>
      <button class="btn-primary" onclick="openAllocModal('vacancy',null)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Nova vaga
      </button>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:24px">
      <div class="stat-card-sm"><div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#9ca3af;font-weight:600;margin-bottom:6px">Total de vagas</div><div class="stat-value-lg" style="color:#6366f1">${total}</div></div>
      <div class="stat-card-sm"><div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#9ca3af;font-weight:600;margin-bottom:6px">Vagas abertas</div><div class="stat-value-lg" style="color:#f59e0b">${openCount}</div></div>
      <div class="stat-card-sm"><div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#9ca3af;font-weight:600;margin-bottom:6px">Vagas fechadas</div><div class="stat-value-lg" style="color:#10b981">${closedCount}</div></div>
    </div>

    <div class="filter-row">
      <div style="position:relative;flex:1 1 180px;max-width:240px">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" style="position:absolute;left:10px;top:50%;transform:translateY(-50%);pointer-events:none"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input id="vac-search-input" type="text" class="inp-sm" style="padding-left:30px;width:100%" placeholder="Buscar..." value="${vacFilter.search}" oninput="filterVagas()"/>
      </div>
      <select class="inp-sm" style="width:auto" onchange="vacFilter.projeto=this.value;render()">
        <option value="">Todos os projetos</option>
        ${allocProjects.map(p=>`<option value="${p.id}" ${vacFilter.projeto===p.id?"selected":""}>${p.nome}</option>`).join("")}
      </select>
      <select class="inp-sm" style="width:auto" onchange="vacFilter.funcionario=this.value;render()">
        <option value="">Todos os funcionários</option>
        ${allocEmployees.map(e=>`<option value="${e.id}" ${vacFilter.funcionario===e.id?"selected":""}>${e.nome}</option>`).join("")}
      </select>
      <select class="inp-sm" style="width:auto" onchange="vacFilter.status=this.value;render()">
        <option value="">Todos os status</option>
        <option value="open" ${vacFilter.status==="open"?"selected":""}>Aberto</option>
        <option value="closed" ${vacFilter.status==="closed"?"selected":""}>Fechado</option>
      </select>
    </div>

    <div id="vac-empty" style="display:${vagas.length===0?"block":"none"}">
      <div class="card" style="padding:50px;text-align:center;color:#9ca3af"><div style="font-size:34px;margin-bottom:10px">🔍</div><p style="font-weight:600;color:#374151;margin-bottom:4px">Nenhuma vaga encontrada</p><p style="font-size:13px">Ajuste os filtros ou cadastre uma nova vaga.</p></div>
    </div>

    <div id="vac-cards-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px">
      ${vagas.map(v=>renderVacancyCard(v)).join("")}
    </div>
  `;
}

function renderVacancyCard(v){
  const pr = getAllocProject(v.projetoId);
  const em = v.funcionarioId ? getEmployee(v.funcionarioId) : null;
  const isOpen = !v.funcionarioId;
  const etag = pr ? (ETAPA_TAGS[pr.etapa]||"neg") : "neg";
  const ac = AREA_COLORS[v.funcao] || "ds";
  const dotCol = ALLOC_DOT_COLORS[ac] || "#6366f1";
  return `
    <div class="vac-card ${isOpen?"open":"closed"}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:10px">
        <div style="font-size:15px;font-weight:700;color:#111">${pr?pr.nome:"—"}</div>
        <span class="${isOpen?"badge-vac-open":"badge-vac-closed"}">${isOpen?"Aberto":"Fechado"}</span>
      </div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px">
        ${pr?`<span class="tag tag-${etag}">${pr.etapa}</span>`:""}
        <span class="tag tag-${ac}">${v.funcao}</span>
        ${pr?`<span style="font-size:11px;color:#9ca3af;padding:3px 0">${pr.produto}</span>`:""}
      </div>
      ${em?`
        <div style="display:flex;align-items:center;gap:7px;margin-bottom:8px">
          <div class="person-tag">
            <div style="width:22px;height:22px;border-radius:50%;background:${dotCol}20;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;color:${dotCol}">${initials2(em.nome)}</div>
            <span style="font-size:13px;color:#374151;font-weight:500">${em.nome}</span>
          </div>
        </div>
      `:`<div style="font-size:13px;color:#f59e0b;font-weight:500;margin-bottom:8px">Vaga em aberto</div>`}
      ${v.descricao?`<p style="font-size:12px;color:#9ca3af;border-top:1px solid #f3f4f6;padding-top:8px;margin-bottom:8px;line-height:1.5">${v.descricao}</p>`:""}
      <div style="display:flex;gap:8px;padding-top:10px;border-top:1px solid #f3f4f6">
        <button class="btn-edit-sm" onclick="openAllocModal('vacancy','${v.id}')">Editar</button>
        <button class="btn-del-sm" onclick="deleteAlloc('vacancy','${v.id}')">Excluir</button>
      </div>
    </div>
  `;
}

// ─── PAGE: CADASTRO ───────────────────────────────────────────────────────────
function renderCadastro(){
  const sortedEmp = [...allocEmployees].sort((a,b)=>a.nome.localeCompare(b.nome));
  const sortedProj = [...allocProjects].sort((a,b)=>a.nome.localeCompare(b.nome));
  const iEd = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
  const iTr = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
  return `
    <h1 class="page-title">Cadastros</h1>
    <p class="page-sub">Gerencie funcionários e projetos de alocação</p>

    <!-- EMPLOYEES -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
      <h2 style="font-size:16px;font-weight:700;color:#111">Funcionários</h2>
      <button class="btn-primary" onclick="openAllocModal('employee',null)" style="padding:8px 14px">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Novo funcionário
      </button>
    </div>
    <div class="table-wrap" style="margin-bottom:36px">
      <table>
        <thead><tr>
          <th>Nome</th><th>Área</th><th>Vagas</th><th></th>
        </tr></thead>
        <tbody>
          ${sortedEmp.length===0?`<tr><td colspan="4" style="text-align:center;color:#9ca3af;padding:28px">Nenhum funcionário cadastrado</td></tr>`:""}
          ${sortedEmp.map(e=>{
            const ac=AREA_COLORS[e.area]||"ds";
            const vc=allocVacancies.filter(v=>v.funcionarioId===e.id).length;
            return `<tr>
              <td style="font-weight:500">${e.nome}</td>
              <td><span class="tag tag-${ac}">${e.area}</span></td>
              <td><span style="font-size:12px;color:#6b7280">${vc} vaga${vc!==1?"s":""}</span></td>
              <td><div style="display:flex;gap:6px">
                <button class="btn-edit-sm" onclick="openAllocModal('employee','${e.id}')">${iEd}</button>
                <button class="btn-del-sm" onclick="deleteAlloc('employee','${e.id}')">${iTr}</button>
              </div></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>

    <!-- PROJECTS -->
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
      <h2 style="font-size:16px;font-weight:700;color:#111">Projetos de Alocação</h2>
      <button class="btn-primary" onclick="openAllocModal('project',null)" style="padding:8px 14px">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Novo projeto
      </button>
    </div>
    <div class="table-wrap">
      <table>
        <thead><tr>
          <th>Nome</th><th>Produto</th><th>Etapa</th><th>Início</th><th>Descrição</th><th></th>
        </tr></thead>
        <tbody>
          ${sortedProj.length===0?`<tr><td colspan="6" style="text-align:center;color:#9ca3af;padding:28px">Nenhum projeto cadastrado</td></tr>`:""}
          ${sortedProj.map(p=>{
            const et=ETAPA_TAGS[p.etapa]||"neg";
            return `<tr>
              <td style="font-weight:500">${p.nome}</td>
              <td style="color:#6b7280">${p.produto}</td>
              <td><span class="tag tag-${et}">${p.etapa}</span></td>
              <td style="color:#6b7280;white-space:nowrap">${fmtAllocDate(p.dataInicio)}</td>
              <td style="color:#9ca3af;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.descricao||"—"}</td>
              <td><div style="display:flex;gap:6px">
                <button class="btn-edit-sm" onclick="openAllocModal('project','${p.id}')">${iEd}</button>
                <button class="btn-del-sm" onclick="deleteAlloc('project','${p.id}')">${iTr}</button>
              </div></td>
            </tr>`;
          }).join("")}
        </tbody>
      </table>
    </div>
  `;
}

// ─── PAGE: RESUMO EQUIPES ─────────────────────────────────────────────────────
function renderResumo(){
  const employees = [...allocEmployees].sort((a,b)=>{
    const ai=AREA_ORDER.indexOf(a.area), bi=AREA_ORDER.indexOf(b.area);
    return ai!==bi ? ai-bi : a.nome.localeCompare(b.nome);
  });
  const projects = [...allocProjects].sort((a,b)=>{
    const ai=ETAPA_ORDER.indexOf(a.etapa), bi=ETAPA_ORDER.indexOf(b.etapa);
    return ai!==bi ? ai-bi : a.nome.localeCompare(b.nome);
  });
  // Build allocation map: "empId|projId" -> vacancy
  const allocMap = {};
  allocVacancies.forEach(v=>{ if(v.funcionarioId) allocMap[v.funcionarioId+"|"+v.projetoId]=v; });

  let currentArea=null, rows="";
  employees.forEach(e=>{
    if(e.area!==currentArea){
      currentArea=e.area;
      const ac=AREA_COLORS[e.area]||"ds";
      const dotCol=ALLOC_DOT_COLORS[ac]||"#6366f1";
      rows+=`<tr class="matrix-group-header"><td colspan="${projects.length+1}" style="color:${dotCol}">▸ ${e.area}</td></tr>`;
    }
    const cells = projects.map(p=>{
      const key=e.id+"|"+p.id;
      const al=allocMap[key];
      if(al){
        const fc=AREA_COLORS[al.funcao]||"ds";
        const dotC=ALLOC_DOT_COLORS[fc]||"#6366f1";
        return `<td class="cell alloc" title="${e.nome} → ${p.nome} (${al.funcao})"><span class="alloc-dot" style="background:${dotC}"></span></td>`;
      }
      return `<td class="cell"></td>`;
    }).join("");
    rows+=`<tr><td class="row-header">${e.nome}</td>${cells}</tr>`;
  });

  let currentEtapa=null;
  const colHeaders = projects.map(p=>{
    let prefix="";
    if(p.etapa!==currentEtapa){
      currentEtapa=p.etapa;
      prefix=`<div style="font-size:8px;text-transform:uppercase;letter-spacing:.5px;color:#9ca3af;margin-bottom:2px">${p.etapa}</div>`;
    }
    return `<th style="max-width:90px"><div style="font-size:11px;color:#374151;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px" title="${p.nome}">${prefix}${p.nome}</div></th>`;
  }).join("");

  const totalAlloc=Object.keys(allocMap).length;

  return `
    <h1 class="page-title">Resumo Equipes</h1>
    <p class="page-sub">Visão matricial de alocação por projeto</p>

    <div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:20px;align-items:center">
      ${AREA_ORDER.map(a=>{
        const ac=AREA_COLORS[a];
        const dc=ALLOC_DOT_COLORS[ac]||"#6366f1";
        return `<div style="display:flex;align-items:center;gap:6px"><span style="width:9px;height:9px;border-radius:50%;background:${dc};display:inline-block"></span><span style="font-size:13px;color:#6b7280">${a}</span></div>`;
      }).join("")}
      <div style="margin-left:auto;font-size:12px;color:#9ca3af">${employees.length} pessoas · ${projects.length} projetos · ${totalAlloc} alocações</div>
    </div>

    ${employees.length===0||projects.length===0?`
      <div class="card" style="padding:50px;text-align:center;color:#9ca3af">
        <div style="font-size:34px;margin-bottom:10px">📊</div>
        <p style="font-weight:600;color:#374151;margin-bottom:4px">Dados insuficientes</p>
        <p style="font-size:13px">Cadastre funcionários, projetos e vagas para ver a matriz.</p>
      </div>
    `:`
      <div style="overflow-x:auto" class="table-wrap">
        <table class="matrix-table">
          <thead>
            <tr>
              <th style="min-width:150px;position:sticky;left:0;z-index:3;background:#f9fafb">Funcionário</th>
              ${colHeaders}
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `}
  `;
}

// ─── ALLOC MODAL ──────────────────────────────────────────────────────────────
function openAllocModal(type, id){
  let data={};
  if(id && type==="employee") data={...allocEmployees.find(e=>e.id===id)};
  else if(id && type==="project") data={...allocProjects.find(p=>p.id===id)};
  else if(id && type==="vacancy") data={...allocVacancies.find(v=>v.id===id)};
  allocModal={type,data};
  renderAllocModal();
}

function renderAllocModal(){
  // Remove old modal if exists
  const old=document.getElementById("alloc-modal");
  if(old) old.remove();

  const {type,data}=allocModal;
  const isEdit=!!data.id;
  let html="";

  if(type==="employee"){
    html=`
      <div class="modal-head"><h2>${isEdit?"Editar":"Novo"} Funcionário</h2>
        <button class="btn-ghost" onclick="closeAllocModal()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="modal-body">
        <div class="modal-field"><label class="field-label">Nome</label><input type="text" id="am-nome" value="${data.nome||""}" placeholder="Nome completo..."/></div>
        <div class="modal-field"><label class="field-label">Área</label>
          <select id="am-area">${ALLOC_AREAS.map(a=>`<option value="${a}" ${(data.area||"")===a?"selected":""}>${a}</option>`).join("")}</select>
        </div>
        <div class="modal-actions">
          <button class="btn-outline" onclick="closeAllocModal()">Cancelar</button>
          <button class="btn-primary" onclick="saveAllocEmployee('${data.id||""}')">Salvar</button>
        </div>
      </div>`;
  } else if(type==="project"){
    html=`
      <div class="modal-head"><h2>${isEdit?"Editar":"Novo"} Projeto</h2>
        <button class="btn-ghost" onclick="closeAllocModal()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="modal-body">
        <div class="modal-field"><label class="field-label">Nome</label><input type="text" id="am-nome" value="${data.nome||""}" placeholder="Nome do cliente/projeto..."/></div>
        <div class="modal-field" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          <div><label class="field-label">Produto</label><select id="am-produto">${ALLOC_PRODUTOS.map(p=>`<option value="${p}" ${(data.produto||"")===p?"selected":""}>${p}</option>`).join("")}</select></div>
          <div><label class="field-label">Etapa</label><select id="am-etapa">${ALLOC_ETAPAS.map(e=>`<option value="${e}" ${(data.etapa||"")===e?"selected":""}>${e}</option>`).join("")}</select></div>
        </div>
        <div class="modal-field"><label class="field-label">Data de início</label><input type="date" id="am-data" value="${data.dataInicio||""}"/></div>
        <div class="modal-field"><label class="field-label">Descrição</label><textarea id="am-desc" rows="3" placeholder="Descreva o projeto...">${data.descricao||""}</textarea></div>
        <div class="modal-actions">
          <button class="btn-outline" onclick="closeAllocModal()">Cancelar</button>
          <button class="btn-primary" onclick="saveAllocProject('${data.id||""}')">Salvar</button>
        </div>
      </div>`;
  } else if(type==="vacancy"){
    const sf=data.funcao||ALLOC_FUNCOES[0];
    const sameArea=allocEmployees.filter(e=>e.area===sf);
    const otherArea=allocEmployees.filter(e=>e.area!==sf);
    html=`
      <div class="modal-head"><h2>${isEdit?"Editar":"Nova"} Vaga</h2>
        <button class="btn-ghost" onclick="closeAllocModal()"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
      </div>
      <div class="modal-body">
        <div class="modal-field"><label class="field-label">Projeto</label>
          <select id="am-projeto">
            <option value="">Selecione um projeto...</option>
            ${allocProjects.map(p=>`<option value="${p.id}" ${(data.projetoId||"")===p.id?"selected":""}>${p.nome}</option>`).join("")}
          </select>
        </div>
        <div class="modal-field"><label class="field-label">Função</label>
          <select id="am-funcao" onchange="allocModalUpdateFuncao()">
            ${ALLOC_FUNCOES.map(f=>`<option value="${f}" ${sf===f?"selected":""}>${f}</option>`).join("")}
          </select>
        </div>
        <div class="modal-field"><label class="field-label">Funcionário <span style="font-size:11px;color:#9ca3af;font-weight:400;text-transform:none">(opcional)</span></label>
          <select id="am-func">
            <option value="">— Vaga aberta —</option>
            ${sameArea.length>0?`<optgroup label="── Mesma área (${sf}) ──">${sameArea.map(e=>`<option value="${e.id}" ${(data.funcionarioId||"")===e.id?"selected":""}>${e.nome}</option>`).join("")}</optgroup>`:""}
            ${otherArea.length>0?`<optgroup label="── Outras áreas ──">${otherArea.map(e=>`<option value="${e.id}" ${(data.funcionarioId||"")===e.id?"selected":""}>${e.nome} (${e.area})</option>`).join("")}</optgroup>`:""}
          </select>
        </div>
        <div class="modal-field" style="display:flex;align-items:center;gap:10px;background:#f9fafb;border-radius:8px;padding:10px 14px">
          <div style="font-size:13px;color:#6b7280">Status: <strong id="am-status-label" style="color:${data.funcionarioId?"#10b981":"#f59e0b"}">${data.funcionarioId?"Fechado":"Aberto"}</strong></div>
          <span style="font-size:11px;color:#9ca3af">(automático)</span>
        </div>
        <div class="modal-field"><label class="field-label">Descrição</label><textarea id="am-desc" rows="2" placeholder="Descrição da vaga...">${data.descricao||""}</textarea></div>
        <div class="modal-actions">
          <button class="btn-outline" onclick="closeAllocModal()">Cancelar</button>
          <button class="btn-primary" onclick="saveAllocVacancy('${data.id||""}')">Salvar</button>
        </div>
      </div>`;
  }

  const wrapper=document.createElement("div");
  wrapper.className="modal-overlay open";
  wrapper.id="alloc-modal";
  wrapper.innerHTML=`<div class="modal" style="max-width:520px">${html}</div>`;
  wrapper.addEventListener("click",e=>{if(e.target===wrapper)closeAllocModal();});
  document.body.appendChild(wrapper);

  // Update status label on funcionario change
  const func=document.getElementById("am-func");
  if(func){
    func.addEventListener("change",()=>{
      const lbl=document.getElementById("am-status-label");
      if(lbl){lbl.textContent=func.value?"Fechado":"Aberto";lbl.style.color=func.value?"#10b981":"#f59e0b";}
    });
  }
}

function allocModalUpdateFuncao(){
  const funcao=document.getElementById("am-funcao").value;
  const sameArea=allocEmployees.filter(e=>e.area===funcao);
  const otherArea=allocEmployees.filter(e=>e.area!==funcao);
  const sel=document.getElementById("am-func");
  if(!sel)return;
  sel.innerHTML=`<option value="">— Vaga aberta —</option>
    ${sameArea.length>0?`<optgroup label="── Mesma área (${funcao}) ──">${sameArea.map(e=>`<option value="${e.id}">${e.nome}</option>`).join("")}</optgroup>`:""}
    ${otherArea.length>0?`<optgroup label="── Outras áreas ──">${otherArea.map(e=>`<option value="${e.id}">${e.nome} (${e.area})</option>`).join("")}</optgroup>`:""}`;
}

function closeAllocModal(){
  const el=document.getElementById("alloc-modal");
  if(el)el.remove();
  allocModal=null;
}

// ─── ALLOC CRUD ───────────────────────────────────────────────────────────────
function saveAllocEmployee(editId){
  const nome=document.getElementById("am-nome").value.trim();
  const area=document.getElementById("am-area").value;
  if(!nome){alert("Informe o nome do funcionário.");return;}
  if(editId){
    const idx=allocEmployees.findIndex(e=>e.id===editId);
    if(idx>=0)allocEmployees[idx]={id:editId,nome,area};
  } else {
    allocEmployees.push({id:allocGenId(),nome,area});
  }
  closeAllocModal();
  render();
}

function saveAllocProject(editId){
  const nome=document.getElementById("am-nome").value.trim();
  const produto=document.getElementById("am-produto").value;
  const etapa=document.getElementById("am-etapa").value;
  const dataInicio=document.getElementById("am-data").value;
  const descricao=document.getElementById("am-desc").value.trim();
  if(!nome){alert("Informe o nome do projeto.");return;}
  if(editId){
    const idx=allocProjects.findIndex(p=>p.id===editId);
    if(idx>=0)allocProjects[idx]={id:editId,nome,produto,etapa,dataInicio,descricao};
  } else {
    allocProjects.push({id:allocGenId(),nome,produto,etapa,dataInicio,descricao});
  }
  closeAllocModal();
  render();
}

function saveAllocVacancy(editId){
  const projetoId=document.getElementById("am-projeto").value;
  const funcao=document.getElementById("am-funcao").value;
  const funcionarioId=document.getElementById("am-func").value||"";
  const descricao=document.getElementById("am-desc").value.trim();
  if(!projetoId){alert("Selecione um projeto.");return;}
  if(editId){
    const idx=allocVacancies.findIndex(v=>v.id===editId);
    if(idx>=0)allocVacancies[idx]={id:editId,projetoId,funcao,funcionarioId,descricao};
  } else {
    allocVacancies.push({id:allocGenId(),projetoId,funcao,funcionarioId,descricao});
  }
  closeAllocModal();
  render();
}

function deleteAlloc(type, id){
  let msg="Excluir este item?";
  if(type==="employee"){
    const e=allocEmployees.find(x=>x.id===id);
    msg=`Excluir funcionário "${e?.nome}"? As vagas vinculadas ficarão em aberto.`;
  } else if(type==="project"){
    const p=allocProjects.find(x=>x.id===id);
    msg=`Excluir projeto "${p?.nome}"? As vagas vinculadas também serão removidas.`;
  } else if(type==="vacancy"){
    msg="Excluir esta vaga?";
  }
  if(!confirm(msg))return;
  if(type==="employee"){
    allocEmployees=allocEmployees.filter(e=>e.id!==id);
    allocVacancies=allocVacancies.map(v=>v.funcionarioId===id?{...v,funcionarioId:""}:v);
  } else if(type==="project"){
    allocProjects=allocProjects.filter(p=>p.id!==id);
    allocVacancies=allocVacancies.filter(v=>v.projetoId!==id);
  } else if(type==="vacancy"){
    allocVacancies=allocVacancies.filter(v=>v.id!==id);
  }
  render();
}


// ─── SECURITY HELPERS ─────────────────────────────────────────────────────────
// Mantém textos digitados por usuários seguros quando são re-renderizados via innerHTML.
function decodeHtml(value){
  const txt = document.createElement('textarea');
  txt.innerHTML = String(value ?? '');
  return txt.value;
}
function escapeHTML(value){
  return decodeHtml(value).replace(/[&<>"']/g, ch => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#039;'
  }[ch]));
}
function cleanText(value){
  return escapeHTML(String(value ?? '').trim());
}
function sanitizeChecklist(list){
  return (list || []).map(item => ({ ...item, text: cleanText(item.text || '') }));
}
function sanitizeAppState(){
  projects = (projects || []).map(p => ({
    ...p,
    name: cleanText(p.name || ''),
    macros: (p.macros || []).map(m => ({
      ...m,
      name: cleanText(m.name || ''),
      tipo: cleanText(m.tipo || 'Implantação'),
      subetapas: (m.subetapas || []).map(cleanText)
    })),
    tasks: (p.tasks || []).map(t => ({
      ...t,
      name: cleanText(t.name || ''),
      subetapa: cleanText(t.subetapa || ''),
      status: cleanText(t.status || 'Não Iniciado'),
      responsible: cleanText(t.responsible || ''),
      description: cleanText(t.description || ''),
      notes: cleanText(t.notes || ''),
      checklist: sanitizeChecklist(t.checklist)
    }))
  }));
  allocEmployees = (allocEmployees || []).map(e => ({ ...e, nome: cleanText(e.nome || ''), area: cleanText(e.area || '') }));
  allocProjects = (allocProjects || []).map(p => ({
    ...p,
    nome: cleanText(p.nome || ''),
    produto: cleanText(p.produto || ''),
    etapa: cleanText(p.etapa || ''),
    descricao: cleanText(p.descricao || '')
  }));
  allocVacancies = (allocVacancies || []).map(v => ({
    ...v,
    funcao: cleanText(v.funcao || ''),
    descricao: cleanText(v.descricao || '')
  }));
}

// ─── FIREBASE CONFIG & SYNC ───────────────────────────────────────────────────
const firebaseConfig = {
  apiKey: "AIzaSyAfIUpGDAQrpXiU1RQJbbngyJp5RZx91T8",
  authDomain: "rivio-projetos.firebaseapp.com",
  databaseURL: "https://rivio-projetos-default-rtdb.firebaseio.com",
  projectId: "rivio-projetos",
  storageBucket: "rivio-projetos.firebasestorage.app",
  messagingSenderId: "549628278181",
  appId: "1:549628278181:web:86fbdaf2a7c0d5e2eee44c"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const auth = firebase.auth();
let _firebaseListenersStarted = false;

// ── Serialization helpers ──────────────────────────────────────────────────────
// Projects use Set for expandedMacros/expandedGantt — must convert for Firebase
function serializeProject(p) {
  return {
    ...p,
    expandedMacros: p.expandedMacros ? [...p.expandedMacros] : [],
    expandedGantt:  p.expandedGantt  ? [...p.expandedGantt]  : [],
  };
}
function deserializeProject(raw) {
  return {
    ...raw,
    tasks:          raw.tasks          || [],
    macros:         raw.macros         || [],
    expandedMacros: new Set(raw.expandedMacros || []),
    expandedGantt:  new Set(raw.expandedGantt  || []),
    linearIssues:   raw.linearIssues   || [],
    linearApiKey:   raw.linearApiKey   || "",
    linearProjectId:raw.linearProjectId|| "",
  };
}

// ── Save helpers — called after every mutation ─────────────────────────────────
function fbSaveProjects() {
  const payload = {};
  projects.forEach(p => { payload[p.id] = serializeProject(p); });
  db.ref("projects").set(payload).catch(e => console.error("FB projects write:", e));
}
function fbSaveEmployees() {
  const payload = {};
  allocEmployees.forEach(e => { payload[e.id] = e; });
  db.ref("employees").set(payload).catch(e => console.error("FB employees write:", e));
}
function fbSaveAllocProjects() {
  const payload = {};
  allocProjects.forEach(p => { payload[p.id] = p; });
  db.ref("allocProjects").set(payload).catch(e => console.error("FB allocProjects write:", e));
}
function fbSaveVacancies() {
  const payload = {};
  allocVacancies.forEach(v => { payload[v.id] = v; });
  db.ref("vacancies").set(payload).catch(e => console.error("FB vacancies write:", e));
}

// ── Patch all mutation functions to also save to Firebase ─────────────────────
// Projects
const _origCreateProject = createProject;
createProject = function() {
  _origCreateProject();
  fbSaveProjects();
};
const _origDeleteProject = deleteProject;
deleteProject = function(id, e) {
  _origDeleteProject(id, e);
  fbSaveProjects();
};
const _origSaveTask = saveTask;
saveTask = function() {
  _origSaveTask();
  fbSaveProjects();
};
const _origDeleteTask = deleteTask;
deleteTask = function(id) {
  _origDeleteTask(id);
  fbSaveProjects();
};
const _origSaveMacro = saveMacro;
saveMacro = function() {
  _origSaveMacro();
  fbSaveProjects();
};
const _origDeleteMacro = deleteMacro;
deleteMacro = function(id) {
  _origDeleteMacro(id);
  fbSaveProjects();
};

// Alloc employees
const _origSaveAllocEmployee = saveAllocEmployee;
saveAllocEmployee = function(editId) {
  _origSaveAllocEmployee(editId);
  fbSaveEmployees();
};

// Alloc projects
const _origSaveAllocProject = saveAllocProject;
saveAllocProject = function(editId) {
  _origSaveAllocProject(editId);
  fbSaveAllocProjects();
};

// Vacancies
const _origSaveAllocVacancy = saveAllocVacancy;
saveAllocVacancy = function(editId) {
  _origSaveAllocVacancy(editId);
  fbSaveVacancies();
};

// deleteAlloc handles all three types
const _origDeleteAlloc = deleteAlloc;
deleteAlloc = function(type, id) {
  _origDeleteAlloc(type, id);
  if (type === "employee")  fbSaveEmployees();
  if (type === "project")   { fbSaveAllocProjects(); fbSaveVacancies(); }
  if (type === "vacancy")   fbSaveVacancies();
};

// Patch saveLinear if it exists (project linear config changes)
if (typeof saveLinearConfig !== "undefined") {
  const _origSaveLinearConfig = saveLinearConfig;
  saveLinearConfig = function() {
    _origSaveLinearConfig();
    fbSaveProjects();
  };
}

// ── Toast notification ─────────────────────────────────────────────────────────
function showSyncToast(msg, color) {
  let t = document.getElementById("fb-toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "fb-toast";
    t.style.cssText = "position:fixed;bottom:24px;left:50%;transform:translateX(-50%);padding:10px 20px;border-radius:10px;font-size:13px;font-weight:600;color:#fff;z-index:9999;pointer-events:none;transition:opacity .4s;box-shadow:0 4px 16px rgba(0,0,0,.18)";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.background = color || "#6366f1";
  t.style.opacity = "1";
  clearTimeout(t._to);
  t._to = setTimeout(() => { t.style.opacity = "0"; }, 2500);
}

// ── Real-time listeners — update local state when Firebase changes ─────────────
let _fbReady = 0; // count nodes loaded; render once all 4 arrive on first load
let _fbFirstLoad = true;

function _checkFirstLoad() {
  _fbReady++;
  if (_fbReady >= 4 && _fbFirstLoad) {
    _fbFirstLoad = false;
    renderSidebarProjects();
    render();
  }
}

function startFirebaseSync(){
  if (_firebaseListenersStarted) return;
  _firebaseListenersStarted = true;

db.ref("projects").on("value", snap => {
  const raw = snap.val() || {};
  projects = Object.values(raw).map(deserializeProject);
  _checkFirstLoad();
  if (!_fbFirstLoad) { renderSidebarProjects(); render(); }
});

db.ref("employees").on("value", snap => {
  const raw = snap.val() || {};
  allocEmployees = Object.values(raw);
  _checkFirstLoad();
  if (!_fbFirstLoad) render();
});

db.ref("allocProjects").on("value", snap => {
  const raw = snap.val() || {};
  allocProjects = Object.values(raw);
  _checkFirstLoad();
  if (!_fbFirstLoad) render();
});

db.ref("vacancies").on("value", snap => {
  const raw = snap.val() || {};
  allocVacancies = Object.values(raw);
  _checkFirstLoad();
  if (!_fbFirstLoad) render();
});

// ── Connection indicator ───────────────────────────────────────────────────────
db.ref(".info/connected").on("value", snap => {
  if (snap.val() === true) {
    showSyncToast("🟢 Conectado ao Firebase", "#10b981");
  } else {
    showSyncToast("🔴 Sem conexão — alterações serão sincronizadas ao reconectar", "#ef4444");
  }
});


}

// ── AUTH + INIT ───────────────────────────────────────────────────────────────
function setLoadingState(){
  document.getElementById("content").innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh;gap:14px;color:#9ca3af">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="1.5" style="animation:spin 1s linear infinite"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
      <span style="font-size:14px;font-weight:600;color:#6366f1">Carregando dados...</span>
    </div>`;
}

function setupAuthUI(){
  const loginBtn = document.getElementById("google-login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const errorEl = document.getElementById("auth-error");
  if (loginBtn) {
    loginBtn.addEventListener("click", async () => {
      errorEl.textContent = "";
      loginBtn.disabled = true;
      loginBtn.textContent = "Entrando...";
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
      } catch (err) {
        console.error("Google sign-in error:", err);
        errorEl.textContent = "Não foi possível entrar com Google. Verifique se o provedor está habilitado no Firebase.";
      } finally {
        loginBtn.disabled = false;
        loginBtn.innerHTML = '<span class="google-icon">G</span> Entrar com Google';
      }
    });
  }
  if (logoutBtn) logoutBtn.addEventListener("click", () => auth.signOut());
}

setupAuthUI();
setLoadingState();

auth.onAuthStateChanged(user => {
  const authScreen = document.getElementById("auth-screen");
  const app = document.getElementById("app");
  const userbar = document.getElementById("auth-userbar");
  const userName = document.getElementById("auth-user-name");

  if (!user) {
    authScreen?.classList.remove("hidden");
    if (app) app.style.visibility = "hidden";
    if (userbar) userbar.style.display = "none";
    return;
  }

  authScreen?.classList.add("hidden");
  if (app) app.style.visibility = "visible";
  if (userbar) userbar.style.display = "flex";
  if (userName) userName.textContent = user.displayName || user.email || "Usuário";
  setLoadingState();
  startFirebaseSync();
});
