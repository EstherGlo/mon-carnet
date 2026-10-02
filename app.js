/* ============================================================
   TABLEAU DE BORD QUOTIDIEN — Logique complète
   ============================================================ */

/* ------------------------------------------------------------
   PARTIE 1 — PROGRAMME PAR DÉFAUT (tes données personnalisées)
   ------------------------------------------------------------ */

const PROGRAMME_PAR_DEFAUT = {
  lundi: {
    label: "Lundi 28 sept",
    fasting: true,
    slots: [
      { time: "02h30", cat: "revision",      text: "Cours du lundi: nouvel EDT ISSEA à intégrer" },
      { time: "4h00",  cat: "spiritualite",  text: "Prière-Méditation de la Parole" },
      { time: "7h30-15h00", cat: "cours",    text: "ISSEA" },
      { time: "15h00", cat: "organisation",  text: "Trajet retour - pas de collation" },
      { time: "16h00", cat: "organisation",  text: "Pause calme" },
      { time: "16h45", cat: "revision",      text: "Révision : BDD 1" },
      { time: "18h00", cat: "spiritualite",  text: "Rupture du jeûne & dîner" },
      { time: "19h00", cat: "auto-formation",text: "Langage R" },
      { time: "20h30", cat: "actualite",     text: "France 24 / RFI Afrique à la maison" },
      { time: "21h00", cat: "lecture",       text: "Livre en cours" },
      { time: "21h30", cat: "organisation",  text: "Préparation du sac & coucher" }
    ]
  },
  mardi: {
    label: "Mardi 29 sept",
    slots: [
      { time: "02h30", cat: "revision",      text: "Cours du mardi: BDD1 - Concurrence imparfaite" },
      { time: "4h30",  cat: "spiritualite",  text: "Prière-Méditation de la Parole" },
      { time: "7h30-15h00", cat: "cours",    text: "ISSEA" },
      { time: "15h00", cat: "organisation",  text: "Trajet retour" },
      { time: "16h00", cat: "organisation",  text: "Pause & collation" },
      { time: "17h00", cat: "revision",      text: "Révision : Logiciels de saisie · BDD 1 · Concurrence imparfaite" },
      { time: "19h00", cat: "auto-formation",text: "Bases de données (pratique SGBD)" },
      { time: "20h30", cat: "actualite",     text: "France 24 / RFI Afrique" },
      { time: "21h00", cat: "lecture",       text: "Livre en cours" },
      { time: "21h30", cat: "organisation",  text: "Préparation & coucher" }
    ]
  },
  mercredi: {
    label: "Mercredi 30 sept",
    slots: [
      { time: "02h30", cat: "revision",      text: "Cours du mercredi: Microéconomie de l'incertain - Stat. inf." },
      { time: "4h30",  cat: "spiritualite",  text: "Prière-Méditation de la Parole" },
      { time: "7h30-14h30", cat: "cours",    text: "ISSEA" },
      { time: "15h00", cat: "organisation",  text: "Trajet retour" },
      { time: "16h00", cat: "organisation",  text: "Pause & collation" },
      { time: "17h00", cat: "revision",      text: "Révision : Microéconomie incertain - Stat. inf." },
      { time: "19h00", cat: "auto-formation",text: "SPSS" },
      { time: "20h30", cat: "actualite",     text: "France 24 / RFI Afrique" },
      { time: "21h00", cat: "lecture",       text: "Livre en cours" },
      { time: "21h30", cat: "organisation",  text: "Préparation & coucher" }
    ]
  },
  jeudi: {
    label: "Jeudi 1er oct",
    slots: [
      { time: "02h30", cat: "revision",      text: "Cours du jeudi: Stat. inf. - Big data&Cloud computing" },
      { time: "4h30",  cat: "spiritualite",  text: "Prière-Méditation de la Parole" },
      { time: "7h30-15h00", cat: "cours",    text: "ISSEA" },
      { time: "15h00", cat: "organisation",  text: "Trajet retour" },
      { time: "16h00", cat: "organisation",  text: "Pause & collation" },
      { time: "17h00", cat: "revision",      text: "Révision : Stat. inf. - Big Data" },
      { time: "19h00", cat: "auto-formation",text: "Langage R" },
      { time: "20h30", cat: "actualite",     text: "France 24 / RFI Afrique" },
      { time: "21h00", cat: "lecture",       text: "Livre en cours" },
      { time: "21h30", cat: "organisation",  text: "Préparation & coucher" }
    ]
  },
  vendredi: {
    label: "Vendredi 2 oct",
    fasting: true,
    slots: [
      { time: "02h30", cat: "revision",      text: "Cours du vendredi: Logiciels de saisie - Microéconomie de l'incertain" },
      { time: "4h00",  cat: "spiritualite",  text: "Prière-Méditation de la Parole" },
      { time: "7h30-15h00", cat: "cours",    text: "ISSEA" },
      { time: "15h00", cat: "organisation",  text: "Trajet retour - pas de collation" },
      { time: "16h00", cat: "organisation",  text: "Pause calme" },
      { time: "16h45", cat: "revision",      text: "Révision : Logiciels de saisie - Microéconomie" },
      { time: "18h00", cat: "spiritualite",  text: "Rupture du jeûne & dîner" },
      { time: "19h00", cat: "auto-formation",text: "Bases de données" },
      { time: "20h30", cat: "actualite",     text: "France 24 / RFI Afrique" },
      { time: "21h00", cat: "lecture",       text: "Livre en cours" },
      { time: "21h30", cat: "organisation",  text: "Préparation du sac & coucher" }
    ]
  },
  samedi: {
    label: "Samedi 3 oct",
    slots: [
      { time: "02h30", cat: "revision",      text: "Cours du samedi: anthropologie" },
      { time: "4h30",  cat: "spiritualite",  text: "Prière-Méditation de la Parole" },
      { time: "7h30-11h45", cat: "cours",    text: "ISSEA" },
      { time: "12h00", cat: "organisation",  text: "Retour & déjeuner" },
      { time: "13h00", cat: "organisation",  text: "Préparation des repas de la semaine" },
      { time: "17h00", cat: "revision",      text: "Rattrapage anciennes épreuves & fiches de TD en retard" },
      { time: "19h30", cat: "organisation",  text: "Pause" },
      { time: "20h00", cat: "actualite",     text: "France 24 / RFI Afrique" },
      { time: "20h30", cat: "lecture",       text: "Livre en cours" },
      { time: "21h00", cat: "organisation",  text: "Soirée libre" }
    ]
  },
  dimanche: {
    label: "Dimanche 4 oct",
    sport: true,
    slots: [
      { time: "Matin", cat: "spiritualite",  text: "Eglise (2 dimanches sur 4) ou ménage" },
      { time: "15h00", cat: "actualite",     text: "Synthèse de l'actualité de la semaine + lecture" },
      { time: "16h00", cat: "sport",         text: "Séance de sport - la seule de la semaine, 1h" },
      { time: "17h00", cat: "organisation",  text: "Repos" },
      { time: "18h00", cat: "organisation",  text: "Préparation de la semaine suivante - nouvel EDT ISSEA à intégrer" },
      { time: "20h00", cat: "actualite",     text: "France 24 / RFI Afrique" },
      { time: "20h30", cat: "lecture",       text: "Livre en cours" },
      { time: "21h00", cat: "organisation",  text: "Préparation du sac & coucher" }
    ]
  }
};

/* Programme vierge (structure vide, 7 jours sans créneaux) */
const PROGRAMME_VIERGE = {
  lundi:     { label: "Lundi",     slots: [] },
  mardi:     { label: "Mardi",     slots: [] },
  mercredi:  { label: "Mercredi",  slots: [] },
  jeudi:     { label: "Jeudi",     slots: [] },
  vendredi:  { label: "Vendredi",  slots: [] },
  samedi:    { label: "Samedi",    slots: [] },
  dimanche:  { label: "Dimanche",  slots: [], sport: true }
};

const ORDRE_JOURS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
const ABREV_JOURS = { lundi: "Lun.", mardi: "Mar.", mercredi: "Mer.", jeudi: "Jeu.", vendredi: "Ven.", samedi: "Sam.", dimanche: "Dim." };

/* ------------------------------------------------------------
   PARTIE 2 — SAUVEGARDE ET CHARGEMENT
   ------------------------------------------------------------ */

const KEY_PROGRAMME = "carnet-esther-programme-v1";
const KEY_ETAT      = "carnet-esther-etat-v1";
const KEY_PERSO     = "carnet-esther-perso-v1";
const KEY_ARCHIVES  = "carnet-esther-archives-v1";

function chargerProgramme() {
  try {
    const saved = localStorage.getItem(KEY_PROGRAMME);
    if (saved) return JSON.parse(saved);
  } catch (e) { console.warn("Erreur chargement programme", e); }
  return JSON.parse(JSON.stringify(PROGRAMME_PAR_DEFAUT));
}

function sauverProgramme(p) {
  localStorage.setItem(KEY_PROGRAMME, JSON.stringify(p));
}

function chargerEtat() {
  try {
    return JSON.parse(localStorage.getItem(KEY_ETAT)) || { checked: {}, notes: "" };
  } catch { return { checked: {}, notes: "" }; }
}

function sauverEtat(e) {
  localStorage.setItem(KEY_ETAT, JSON.stringify(e));
}

/* ---------- Perso (prénom + thème) ---------- */
function chargerPerso() {
  try {
    const saved = localStorage.getItem(KEY_PERSO);
    if (saved) return JSON.parse(saved);
  } catch (e) { console.warn("Erreur chargement perso", e); }
  return { prenom: "", theme: "mauve", configure: false };
}

function sauverPerso(p) {
  localStorage.setItem(KEY_PERSO, JSON.stringify(p));
}

/* ---------- Archives de notes ---------- */
function chargerArchives() {
  try {
    return JSON.parse(localStorage.getItem(KEY_ARCHIVES)) || [];
  } catch { return []; }
}

function sauverArchives(a) {
  localStorage.setItem(KEY_ARCHIVES, JSON.stringify(a));
}

/* ------------------------------------------------------------
   PARTIE 3 — VARIABLES GLOBALES
   ------------------------------------------------------------ */

let programme = chargerProgramme();
let etat      = chargerEtat();
let perso     = chargerPerso();
let archives  = chargerArchives();
let modeEdition = false;

function jourDuJour() {
  const jsDay = new Date().getDay();
  return jsDay === 0 ? 6 : jsDay - 1;
}

let jourActif = ORDRE_JOURS[jourDuJour()];

/* ------------------------------------------------------------
   PARTIE 4 — APPLICATION DU THÈME + PRÉNOM
   ------------------------------------------------------------ */

function appliquerTheme(nomTheme) {
  document.documentElement.setAttribute("data-theme", nomTheme);
}

function appliquerPrenom() {
  const el = document.getElementById("welcome-name-display");
  if (!el) return;
  const prenom = (perso.prenom || "").trim();
  el.textContent = prenom ? `Coucou ${prenom} !` : "Coucou !";
}

function preRemplirFormulaires() {
  const wname = document.getElementById("welcome-name");
  const sname = document.getElementById("settings-name");
  if (wname) wname.value = perso.prenom || "";
  if (sname) sname.value = perso.prenom || "";

  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.theme === perso.theme);
  });
}

/* ------------------------------------------------------------
   PARTIE 5 — NAVIGATION ENTRE LES PAGES
   ------------------------------------------------------------ */

function afficherPage(nom) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const page = document.getElementById("page-" + nom);
  if (page) page.classList.add("active");
  window.scrollTo(0, 0);
  if (nom === "accueil") mettreAJourAccueil();
  if (nom === "carnet")  { afficherJour(); mettreAJourProgressionSemaine(); }
  if (nom === "personnaliser") preRemplirFormulaires();
  if (nom === "historique") afficherHistorique();
}

/* ------------------------------------------------------------
   PARTIE 6 — BARRE DES JOURS
   ------------------------------------------------------------ */

function construireNav() {
  const nav = document.getElementById("day-nav");
  if (!nav) return;
  nav.innerHTML = "";
  const mobile = window.innerWidth <= 600;
  ORDRE_JOURS.forEach(j => {
    const jour = programme[j];
    if (!jour) return;
    const btn = document.createElement("button");
    btn.textContent = mobile ? ABREV_JOURS[j] : jour.label.split(" ")[0];
    btn.dataset.jour = j;
    if (jour.fasting) btn.classList.add("fasting");
    if (jour.sport)   btn.classList.add("sport");
    if (j === jourActif) btn.classList.add("active");
    btn.addEventListener("click", () => {
      if (modeEdition && !confirm("Tu es en mode édition. Changer de jour quand même ?")) return;
      jourActif = j;
      construireNav();
      afficherJour();
    });
    nav.appendChild(btn);
  });
}

window.addEventListener("resize", construireNav);

/* ------------------------------------------------------------
   PARTIE 7 — AFFICHAGE DU JOUR
   ------------------------------------------------------------ */

function afficherJour() {
  const conteneur = document.getElementById("day-content");
  if (!conteneur) return;
  const jour = programme[jourActif];
  if (!jour) return;
  conteneur.innerHTML = `<h2 style="margin-bottom:1rem;">${jour.label}</h2>`;

  if (jour.fasting) {
    const b = document.createElement("div");
    b.className = "slot";
    b.style.background = "rgba(253, 240, 240, 0.7)";
    b.innerHTML = `<div class="slot-time">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"/></svg>
      </div>
      <div class="slot-body">
        <span class="slot-category cat-spiritualite">Jeûne</span>
        <div class="slot-text">Jour de jeûne — rupture au dîner</div>
      </div>`;
    conteneur.appendChild(b);
  }

  if (jour.sport) {
    const b = document.createElement("div");
    b.className = "slot";
    b.style.background = "rgba(255, 245, 238, 0.7)";
    b.innerHTML = `<div class="slot-time">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"/></svg>
      </div>
      <div class="slot-body">
        <span class="slot-category cat-sport">Sport</span>
        <div class="slot-text">Séance de sport — la seule de la semaine</div>
      </div>`;
    conteneur.appendChild(b);
  }

  jour.slots.forEach((slot, index) => {
    const id = `${jourActif}-${index}`;
    const div = document.createElement("div");
    div.className = "slot";
    if (etat.checked[id]) div.classList.add("done");

    const label = document.createElement("label");
    label.style.display = "flex";
    label.style.alignItems = "flex-start";
    label.style.width = "100%";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = !!etat.checked[id];
    cb.addEventListener("change", (ev) => {
      ev.stopPropagation();
      if (cb.checked) etat.checked[id] = true;
      else delete etat.checked[id];
      div.classList.toggle("done", cb.checked);
      sauverEtat(etat);
      mettreAJourProgression();
      mettreAJourProgressionSemaine();
    });

    const body = document.createElement("div");
    body.className = "slot-body";
    body.innerHTML = `
      <span class="slot-category cat-${slot.cat}">${slot.cat.replace("-", " ")}</span>
      <div class="slot-text">${slot.text}</div>
    `;

    label.appendChild(cb);
    label.appendChild(body);
    div.innerHTML = `<div class="slot-time">${slot.time}</div>`;
    div.appendChild(label);

    div.addEventListener("click", (ev) => {
      if (!modeEdition) return;
      ev.preventDefault();
      ouvrirModalEdition(index);
    });

    conteneur.appendChild(div);
  });

  mettreAJourProgression();
}

/* ------------------------------------------------------------
   PARTIE 8 — PROGRESSIONS
   ------------------------------------------------------------ */

function mettreAJourProgression() {
  const container = document.getElementById("progress-bar-container");
  const fill      = document.getElementById("progress-fill");
  const text      = document.getElementById("progress-text");
  const jour      = programme[jourActif];

  if (!container || !jour) return;
  container.classList.remove("hidden");

  const total = jour.slots.length;
  if (total === 0) {
    fill.style.width = "0%";
    text.textContent = "0 %";
    return;
  }

  let faits = 0;
  jour.slots.forEach((_, i) => {
    if (etat.checked[`${jourActif}-${i}`]) faits++;
  });

  const pct = Math.round((faits / total) * 100);
  fill.style.width = pct + "%";

  let couleur = "#c0392b";
  if (pct >= 40) couleur = "#e67e22";
  if (pct >= 70) couleur = "#7cb342";
  if (pct >= 100) couleur = "#2e7d32";
  fill.style.background = couleur;

  text.textContent = pct + " %";
}

function calculerPctSemaine() {
  let totalTaches = 0, totalFaits = 0;
  ORDRE_JOURS.forEach(j => {
    const jour = programme[j];
    if (!jour) return;
    totalTaches += jour.slots.length;
    jour.slots.forEach((_, i) => { if (etat.checked[`${j}-${i}`]) totalFaits++; });
  });
  return totalTaches === 0 ? 0 : Math.round((totalFaits / totalTaches) * 100);
}

function mettreAJourProgressionSemaine() {
  const pct = calculerPctSemaine();
  const fill = document.getElementById("accueil-bar-fill");
  const txt  = document.getElementById("pct-accueil");
  if (fill) fill.style.width = pct + "%";
  if (txt)  txt.textContent = pct + " %";
}

function mettreAJourAccueil() { mettreAJourProgressionSemaine(); }

/* ------------------------------------------------------------
   PARTIE 9 — MODE ÉDITION
   ------------------------------------------------------------ */

function activerModeEdition() {
  modeEdition = true;
  document.body.classList.add("editing");
  document.getElementById("btn-edit").classList.add("hidden");
  document.getElementById("btn-save").classList.remove("hidden");
  document.getElementById("btn-cancel").classList.remove("hidden");
  document.getElementById("add-slot-container").classList.remove("hidden");
}

function desactiverModeEdition() {
  modeEdition = false;
  document.body.classList.remove("editing");
  document.getElementById("btn-edit").classList.remove("hidden");
  document.getElementById("btn-save").classList.add("hidden");
  document.getElementById("btn-cancel").classList.add("hidden");
  document.getElementById("add-slot-container").classList.add("hidden");
}

/* ------------------------------------------------------------
   PARTIE 10 — MODALE D'ÉDITION
   ------------------------------------------------------------ */

let indexEnCours = null;

function ouvrirModalEdition(index) {
  indexEnCours = index;
  const slot = programme[jourActif].slots[index];

  document.getElementById("modal-title").textContent = "Modifier le créneau";
  document.getElementById("edit-time").value = slot.time;
  document.getElementById("edit-cat").value  = slot.cat;
  document.getElementById("edit-text").value = slot.text;
  document.getElementById("modal-delete").style.display = "block";

  document.getElementById("edit-modal").classList.remove("hidden");
}

function ouvrirModalAjout() {
  indexEnCours = -1;
  document.getElementById("modal-title").textContent = "Ajouter un créneau";
  document.getElementById("edit-time").value = "";
  document.getElementById("edit-cat").value  = "cours";
  document.getElementById("edit-text").value = "";
  document.getElementById("modal-delete").style.display = "none";

  document.getElementById("edit-modal").classList.remove("hidden");
}

function fermerModal() {
  document.getElementById("edit-modal").classList.add("hidden");
  indexEnCours = null;
}

function validerModal() {
  const time = document.getElementById("edit-time").value.trim();
  const cat  = document.getElementById("edit-cat").value;
  const text = document.getElementById("edit-text").value.trim();

  if (!time || !text) {
    alert("Merci de remplir l'heure et la description.");
    return;
  }

  if (indexEnCours === -1) {
    programme[jourActif].slots.push({ time, cat, text });
  } else {
    programme[jourActif].slots[indexEnCours] = { time, cat, text };
  }

  fermerModal();
  afficherJour();
}

function supprimerSlot() {
  if (indexEnCours === null || indexEnCours === -1) return;
  if (!confirm("Supprimer ce créneau ?")) return;
  programme[jourActif].slots.splice(indexEnCours, 1);
  fermerModal();
  afficherJour();
}

/* ------------------------------------------------------------
   PARTIE 11 — NOTES
   ------------------------------------------------------------ */

const notesEl = document.getElementById("notes");
if (notesEl) {
  notesEl.value = etat.notes || "";
  notesEl.addEventListener("input", () => {
    etat.notes = notesEl.value;
    sauverEtat(etat);
  });
}

/* ------------------------------------------------------------
   PARTIE 12 — HISTORIQUE DES NOTES
   ------------------------------------------------------------ */

function archiverNotes() {
  const contenu = (etat.notes || "").trim();
  if (!contenu) return false;

  const aujourdHui = new Date();
  const dateStr = aujourdHui.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  archives.unshift({
    id: Date.now(),
    date: dateStr,
    contenu: contenu
  });

  sauverArchives(archives);
  return true;
}

function afficherHistorique() {
  const conteneur = document.getElementById("historique-list");
  if (!conteneur) return;

  conteneur.innerHTML = "";

  if (archives.length === 0) {
    conteneur.innerHTML = `<div class="historique-vide">Aucune note archivée pour l'instant.<br>Elles apparaîtront ici au fil des semaines.</div>`;
    return;
  }

  archives.forEach((archive) => {
    const card = document.createElement("div");
    card.className = "historique-card";

    const header = document.createElement("div");
    header.className = "historique-header";

    const dateEl = document.createElement("span");
    dateEl.className = "historique-date";
    dateEl.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/></svg> Semaine du ` + archive.date;

    const btnDel = document.createElement("button");
    btnDel.className = "btn-delete-archive";
    btnDel.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/></svg> Supprimer`;
    btnDel.addEventListener("click", () => {
      if (!confirm("Supprimer définitivement cette note archivée ?")) return;
      archives = archives.filter(a => a.id !== archive.id);
      sauverArchives(archives);
      afficherHistorique();
    });

     // Bouton "Exporter en PDF" pour cette archive
    const btnPdf = document.createElement("button");
    btnPdf.className = "btn-delete-archive";
    btnPdf.style.color = "#5a3a6a";
    btnPdf.style.borderColor = "#d8b8d0";
    btnPdf.innerHTML = `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg> PDF`;
    btnPdf.addEventListener("click", () => {
      const win = window.open("", "_blank");
      win.document.write(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <title>Note du ${archive.date}</title>
          <style>
            body {
              font-family: Georgia, serif;
              padding: 2rem;
              max-width: 700px;
              margin: 0 auto;
              color: #2c2c2c;
              line-height: 1.8;
            }
            h1 {
              color: #7c5a9e;
              font-size: 1.4rem;
              border-bottom: 2px solid #7c5a9e;
              padding-bottom: 0.5rem;
              margin-bottom: 1rem;
            }
            .date {
              color: #888;
              font-size: 0.9rem;
              font-style: italic;
              margin-bottom: 2rem;
            }
            .contenu {
              white-space: pre-wrap;
              font-size: 1rem;
            }
          </style>
        </head>
        <body>
          <h1>Note archivée</h1>
          <p class="date">Semaine du ${archive.date}</p>
          <div class="contenu">${archive.contenu.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
        </body>
        </html>
      `);
      win.document.close();
      win.focus();
      setTimeout(() => win.print(), 300);
    });

    header.appendChild(dateEl);
    header.appendChild(btnPdf);
    header.appendChild(btnDel);

    const content = document.createElement("div");
    content.className = "historique-content";
    content.textContent = archive.contenu;

    card.appendChild(header);
    card.appendChild(content);
    conteneur.appendChild(card);
  });
}

/* ------------------------------------------------------------
   PARTIE 13 — BOUTONS PRINCIPAUX
   ------------------------------------------------------------ */

document.getElementById("btn-edit").addEventListener("click", activerModeEdition);

document.getElementById("btn-save").addEventListener("click", () => {
  sauverProgramme(programme);
  desactiverModeEdition();
  alert("Programme enregistré !");
});

document.getElementById("btn-cancel").addEventListener("click", () => {
  if (!confirm("Annuler les modifications non enregistrées ?")) return;
  programme = chargerProgramme();
  desactiverModeEdition();
  afficherJour();
});

document.getElementById("btn-reset-week").addEventListener("click", () => {
  const contenu = (etat.notes || "").trim();
  let message = "Décocher toutes les cases ?";
  if (contenu) {
    message = "Décocher toutes les cases et ARCHIVER les notes actuelles ?\n\n(Ton programme reste intact, tes notes sont conservées dans l'historique)";
  }
  if (!confirm(message)) return;

  if (contenu) archiverNotes();

  etat.checked = {};
  etat.notes = "";
  sauverEtat(etat);
  if (notesEl) notesEl.value = "";
  afficherJour();
  mettreAJourProgressionSemaine();
});

document.getElementById("btn-add-slot").addEventListener("click", ouvrirModalAjout);
document.getElementById("modal-cancel").addEventListener("click", fermerModal);
document.getElementById("modal-ok").addEventListener("click", validerModal);
document.getElementById("modal-delete").addEventListener("click", supprimerSlot);

document.getElementById("edit-modal").addEventListener("click", (ev) => {
  if (ev.target.id === "edit-modal") fermerModal();
});

/* ------------------------------------------------------------
   PARTIE 14 — NAVIGATION ENTRE LES PAGES
   ------------------------------------------------------------ */

document.getElementById("btn-vers-carnet").addEventListener("click", () => afficherPage("carnet"));
document.getElementById("btn-carnet-vers-accueil").addEventListener("click", () => afficherPage("accueil"));
document.getElementById("btn-carnet-vers-notes").addEventListener("click", () => afficherPage("notes"));
document.getElementById("btn-notes-vers-accueil").addEventListener("click", () => afficherPage("accueil"));
document.getElementById("btn-notes-vers-carnet").addEventListener("click", () => afficherPage("carnet"));
document.getElementById("btn-notes-vers-historique").addEventListener("click", () => afficherPage("historique"));
document.getElementById("btn-historique-vers-notes").addEventListener("click", () => afficherPage("notes"));
document.getElementById("btn-historique-vers-accueil").addEventListener("click", () => afficherPage("accueil"));
document.getElementById("btn-accueil-vers-notes").addEventListener("click", () => afficherPage("notes"));
document.getElementById("btn-accueil-vers-personnaliser").addEventListener("click", () => afficherPage("personnaliser"));
document.getElementById("btn-personnaliser-vers-accueil").addEventListener("click", () => afficherPage("accueil"));

/* ------------------------------------------------------------
   PARTIE 15 — ÉCRAN DE BIENVENUE
   ------------------------------------------------------------ */

document.getElementById("btn-welcome-start").addEventListener("click", () => {
  const prenomInput = document.getElementById("welcome-name").value.trim();
  const themeChoisi  = document.querySelector("#page-bienvenue .theme-btn.selected")?.dataset.theme || "mauve";
  const modeChoisi   = document.querySelector('input[name="start-mode"]:checked')?.value || "exemple";

  if (!prenomInput) {
    alert("Merci d'entrer ton prénom pour continuer.");
    return;
  }

  perso.prenom = prenomInput;
  perso.theme = themeChoisi;
  perso.configure = true;
  sauverPerso(perso);

  if (modeChoisi === "vierge") {
    programme = JSON.parse(JSON.stringify(PROGRAMME_VIERGE));
    sauverProgramme(programme);
  } else {
    programme = JSON.parse(JSON.stringify(PROGRAMME_PAR_DEFAUT));
    sauverProgramme(programme);
  }

  appliquerTheme(perso.theme);
  appliquerPrenom();

  construireNav();
  afficherJour();

  afficherPage("accueil");
});

/* Sélection d'un thème (bienvenue + personnaliser) */
document.querySelectorAll(".theme-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".theme-btn").forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    appliquerTheme(btn.dataset.theme);
  });
});

/* ------------------------------------------------------------
   PARTIE 16 — PAGE PERSONNALISER
   ------------------------------------------------------------ */

document.getElementById("btn-settings-save").addEventListener("click", () => {
  const prenomInput = document.getElementById("settings-name").value.trim();
  const themeChoisi  = document.querySelector("#page-personnaliser .theme-btn.selected")?.dataset.theme || perso.theme;

  if (!prenomInput) {
    alert("Merci d'entrer un prénom.");
    return;
  }

  perso.prenom = prenomInput;
  perso.theme = themeChoisi;
  perso.configure = true;
  sauverPerso(perso);

  appliquerTheme(perso.theme);
  appliquerPrenom();

  alert("✅ Modifications enregistrées !");
  afficherPage("accueil");
});

/* ------------------------------------------------------------
   PARTIE 17 — EXPORT / IMPORT
   ------------------------------------------------------------ */

document.getElementById("btn-export").addEventListener("click", () => {
  const sauvegarde = {
    version: 1,
    date: new Date().toISOString(),
    programme: programme,
    etat: etat,
    perso: perso,
    archives: archives
  };

  const dataStr = JSON.stringify(sauvegarde, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  const date = new Date().toISOString().slice(0, 10);
  a.href = url;
  a.download = `tableau-bord-${date}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("✅ Fichier exporté ! Range-le bien (Drive, WhatsApp à toi-même…).");
});

document.getElementById("btn-import").addEventListener("click", () => {
  document.getElementById("file-import").click();
});

document.getElementById("file-import").addEventListener("change", (ev) => {
  const file = ev.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const sauvegarde = JSON.parse(e.target.result);

      if (!sauvegarde.programme) {
        alert("❌ Fichier invalide : impossible de lire le programme.");
        return;
      }

      if (!confirm("Remplacer ton programme actuel par celui du fichier ?\n\n(Attention : tes modifications actuelles seront perdues)")) {
        return;
      }

      programme = sauvegarde.programme;
      etat = sauvegarde.etat || { checked: {}, notes: "" };
      if (sauvegarde.perso) perso = sauvegarde.perso;
      if (sauvegarde.archives) archives = sauvegarde.archives;

      sauverProgramme(programme);
      sauverEtat(etat);
      sauverPerso(perso);
      sauverArchives(archives);

      appliquerTheme(perso.theme);
      appliquerPrenom();

      if (notesEl) notesEl.value = etat.notes || "";
      construireNav();
      afficherJour();
      mettreAJourProgressionSemaine();

      alert("✅ Programme importé avec succès !");
    } catch (err) {
      alert("❌ Fichier illisible. Vérifie que c'est bien un fichier exporté depuis l'app.");
      console.error(err);
    }
  };
  reader.readAsText(file);
  ev.target.value = "";
});

/* ------------------------------------------------------------
   PARTIE 18 — EXPORT PDF
   ------------------------------------------------------------ */

document.getElementById("btn-export-pdf").addEventListener("click", () => {
  const choix = confirm(
    "📄 Exporter en PDF\n\n" +
    "Une fenêtre d'impression va s'ouvrir.\n\n" +
    "👉 Choisis 'Enregistrer au format PDF' comme destination.\n\n" +
    "Clique OK pour continuer."
  );
  if (!choix) return;
  setTimeout(() => window.print(), 200);
});

/* ------------------------------------------------------------
   PARTIE 19 — DÉMARRAGE
   ------------------------------------------------------------ */

appliquerTheme(perso.theme);
construireNav();

if (perso.configure && perso.prenom) {
  appliquerPrenom();
  afficherPage("accueil");
} else {
  afficherPage("bienvenue");
}
/* ------------------------------------------------------------
   PARTIE 19 — EXPORT PDF DES NOTES
   ------------------------------------------------------------ */

/* Export des notes actuelles */
document.getElementById("btn-notes-export-pdf").addEventListener("click", () => {
  const contenu = (etat.notes || "").trim();
  if (!contenu) {
    alert("Aucune note à exporter pour l'instant.");
    return;
  }

  const dateStr = new Date().toLocaleDateString("fr-FR", {
    day: "numeric", month: "long", year: "numeric"
  });

  // Créer une fenêtre d'impression dédiée
  const win = window.open("", "_blank");
  win.document.write(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <title>Notes de la semaine — ${dateStr}</title>
      <style>
        body {
          font-family: Georgia, serif;
          padding: 2rem;
          max-width: 700px;
          margin: 0 auto;
          color: #2c2c2c;
          line-height: 1.8;
        }
        h1 {
          color: #7c5a9e;
          font-size: 1.5rem;
          border-bottom: 2px solid #7c5a9e;
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }
        .date {
          color: #888;
          font-size: 0.9rem;
          font-style: italic;
          margin-bottom: 2rem;
        }
        .contenu {
          white-space: pre-wrap;
          font-size: 1rem;
        }
      </style>
    </head>
    <body>
      <h1>Notes de la semaine</h1>
      <p class="date">${dateStr}</p>
      <div class="contenu">${contenu.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
    </body>
    </html>
  `);
  win.document.close();
  win.focus();
  setTimeout(() => win.print(), 300);
});

afficherJour();
mettreAJourProgressionSemaine();