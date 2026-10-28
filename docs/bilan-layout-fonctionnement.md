# BWE app v2 — Bilan du layout & du fonctionnement

> Établi le 2026-07-15, **mis à jour le 2026-07-29** sur le code réel de
> `BWE_app_v2/index.html` (~5 480 lignes) et `BWE_app_v2/app.css` (~500 lignes).
> Chaque nom de composant / classe CSS cité existe dans le code.
> ⚠️ Depuis la v2 du doc (22/07) : **colonne KPI simplifiée + section Journal intégrée**
> (l'onglet Journal a été supprimé le 29/07 — la colonne est la seule surface du journal),
> zoom des graphes temps réel, export Pine, T0, et la passe d'audit du 29/07 (bugs +
> code mort purgés, voir « Points d'attention » en bas de doc).

---

## 1. Bilan du layout

### Squelette global

```
┌────────────────────────────────────────────────────────────────────────────┐
│ ₿  BTC Wallets Evolution         [● 118,204 $ · BTC·il y a 2 min]  ⟳   ⋯    │ ← Header (.topbar, 52px)
└────────────────────────────────────────────────────────────────────────────┘
  Live │ Simulation │ Copie du Live │ +                                    ⋯    ← Barre de vues (.viewnav-row)
  ════                                                                (SimTabMenu = .viewnav-tail)

           VUE LIVE   ou   VUE ONGLET SIMULATION   (settings.view)             ← contenu dans .wrap (max 1280px, centré)

  Hors flux (enfants de .app) : CreateAccountModal (×2 : compte / « Nouvelle
  simulation »), NewSimTabModal, <input type=file> caché
```

### Vue Live

```
  ┌── .dash : grille 2 colonnes (¼ KPI  |  ¾ graphe), empile ≤1180px ──────────┐
  ┌─────────────────────────┐  ┌───────────────────────────────────────────┐
  │ Valeur totale live      │  │ [USDC|%]              [30J 90J 1A TOUT]    │ ← EvoChart (.panel)
  │  52,340.50              │  │                                    ╱╲      │   · 2× SegmentedControl (.panel-controls)
  │ ─────────────────────── │  │                        ╱╲    ╱╲ ╱╲╱  ╲     │   · courbe SVG (ChartCanvas, Y adaptatif)
  │ Gains        USDC / %   │  │      ╱╲   ╱╲    ╱────╱  ╲──╱             │   · zoom ⌘+molette / pan / dbl-clic ⟲
  │  Réalisés   +8,000.00   │  │ ╱──╱  ╲─╱  ╲──╱                          │   · survol → .chart-tip
  │  Latents    +2,340.50   │  │                                           │   · état vide → .chart-empty
  │  Aujourd'hui  +180.00   │  │  6 jan     20 jan    3 fév    17 fév      │
  │ ─────────────────────── │  └───────────────────────────────────────────┘
  │ Valeur si TP  64,780.00 │   ● Total ○ Cash ● Bybit ○ Kraken   ← .chips (SeriesChip, persistés)
  │ Valeur si SL  49,440.00 │
  │ ─────────────────────── │  ← Colonne KPI (.kpi-col = SummaryBar)
  │ Exposition 2[L]1[S] 48% │     · « Réalisés » porte l'Initiale en infobulle
  │ Win rate       60% 3/5  │     · .kpi-expo-sides + % texte (rouge ≥75 %)
  │ ─────────────────────── │
  │ Journal  [2 à faire] 📊⋯ │  ← .kpi-fil : chip → paquet de cartes, stats, réglages
  │ À jour            12/14 │
  │ ●●●◐●○●●●◐ (JournalGrid)│  ← pastilles scrollables (~4,5 rangées), tooltip .jrn-tip
  └─────────────────────────┘

  ● Bybit │ ● Kraken │ +                                                        ← Onglets comptes (.accttabs)
  ════════

┌──────────────────────────────────────────────────────────────────────── ⋯ ─┐ ← AccountPanel (.account-panel)
│ Valeur     Cash dispo   Réalisé ⇄   Win rate ⇄ ┊ Valeur si TP  Valeur si SL │   kebab (.account-menu ⋯)
│ 28,540.50  9,100.00    +5,300.00    3/5        ┊  29,780.00    26,440.00    │ ← .modal-stats (+ .divider)
│ Définis des TP pour la projection                                           │ ← .stat-note (si aucun TP)
├─────────────────────────────────────────────────────────────────────────────┤
│ ▾ Positions ouvertes                                                      1 │ ← accordéon .acc-list (Section) — OUVERTE
│     Ouvrir une position                                                  ›  │   · CollapsibleHeader → OpenPositionForm
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │[Long] ◔ 5,000 USDC @ 92,000 ┊ Valeur  Latent ⇄ ┊ Si TP  Si SL ▹✎✕🗑 │   │ ← PositionRowView (OpenPosRow)
│  │[10×] 48% 0.54 BTC·TP·SL     ┊ 5,820   +820     ┊ 5,940  4,760      │   │   · 3 sections (.oprow) + actions
│  └────────────────────────────────────────────────────────────────────┘   │
│ ▾ Évolution               ╱╲╱╲  (repères TP/SL + marqueurs clôture)         │ ← AccountChart — OUVERTE (contrôles locaux)
│ ▸ Stratégies                                                              2 │ ← StrategyRow (notes datées, antichrono)
│ ▸ Historique                                                              7 │ ← ClosedPositionRow (+ badge Rekt centré)
│ ▸ Trésorerie                                                       9,100.00 │ ← Dépôt/Retrait (.grid2) + Mouvements
└─────────────────────────────────────────────────────────────────────────────┘
```

### Vue simple (téléphone — `SimpleView`, ajoutée le 2026-10-28)

```
  ₿              [● 81,673 $]  ⟳  ⋯          ← Header (inchangé ; menu ⋯ → « Vue simple »)
  ┌─ .simple-card ─────────────────────┐
  │ Valeur totale        il y a 5 s ⟳  │     ← .simple-top : âge de la donnée la plus ancienne
  │ 17,260.19 USDC                     │       (cours BTC, synchro de chaque wallet HL)
  │ Latent −309   Aujourd'hui +396     │     ← .simple-gains (agg.latent, today.latent)
  │ ──────────────────────────────────│
  │ Si TP 24,151 +6,891 │ Si SL 13,569 −3,691 │ ← .simple-targets (mêmes formules que SummaryBar)
  └────────────────────────────────────┘
  ┌─ SimpleChart (150 px) ─────────────┐     ← courbe Total seule + hlines TP/SL globales
  │  TP - - - - - - - - - - [24,151]   │       (graduations masquées sous les badges)
  │  ────╱╲──╱╲───                      │
  │  SL - - - - - - - - - - [13,569]   │
  │ [7J] [30J] [90J] [TOUT]            │     ← période mémorisée dans bwe.ui.v1
  └────────────────────────────────────┘
  ┌─ Positions ouvertes · 3 ───────────┐     ← simplePositions : tous wallets, triés par
  │ ● Bybit (S)(20×) BTC     +83  +6 % │       distance à la liquidation croissante
  │   Entrée 81,900 · Liq 85,995 · à 5.3 % ⚠ │ ← orange < 10 %, rouge < 5 %
  └────────────────────────────────────┘
               Vue complète ›                ← forceFull (session) ; toucher une ligne = idem
                                               + wallet sélectionné ; « ‹ Vue simple » en tête
```

Activation : `ui.simple` (clé `bwe.ui.v1`, par appareil, hors export) sinon automatique
≤640px (`useMedia`). Lecture seule. Cadence de rafraîchissement 20 s (`SIMPLE_REFRESH_MS`)
au lieu de 60 s ; actualisation immédiate au retour sur l'app si données > 15 s ; point
live de `hl.samples` limité à 1/min quelle que soit la cadence. Mark price HL reconstitué
du latent du snapshot (`entrée + latent / (taille × sens)`).

### Vue Simulation (un onglet sim)

```
  ┌── .dash (identique : ¼ KPI | ¾ graphe) ───────────────────────────────────┐
  ┌─────────────────────────┐  ┌───────────────────────────────────────────┐
  │ Valeur totale · scénario│  │ [USDC|%]                                   │ ← SimChart (.panel)
  │  61,200.00              │  │   ●────●                                   │   · PAS de plage temporelle
  │ Initiale     55,000.00  │  │  ╱      ╲───●───●   Total plein, sims       │   · axe X = ÉTAPES Départ, P1, P2…
  │ ─────────────────────── │  │ ╱                  en pointillés           │     (stepMode, tabOrderSteps)
  │ Gains        USDC / %   │  └───────────────────────────────────────────┘
  │  Si tous TP  +8,000.00  │   ● Total ● Sim A ● Sim B   ← .chips
  │  Si tous SL  −4,000.00  │
  │ ─────────────────────── │  ← Colonne KPI (.kpi-col = SimSummaryBar)
  │ Positions    2 [Long]   │
  │  ouvertes    1 [Short]  │
  │ Expo moyenne   ◔ 42%    │  ← 2 anneaux (.kpi-ring) : moyenne / max
  │ Expo max       ◔ 90%    │
  │ Levier moyen    [12×]   │
  └─────────────────────────┘

  ● Sim A │ ● Sim B │ +                                                         ← .accttabs (sims de l'onglet, sélection locale)
  ════════

┌──────────────────────────────────────────────────────────────────────── ⋯ ─┐ ← SimAccountPanel
│ Capital  ┊ Capital scénario · Gain · x/y ┊ Tout TP · Tout SL / liq.         │ ← .modal-stats
│ ▾ Positions simulées                                                      n │ ← triées par ordre (p.order)
│  ┌────────────────────────────────────────────────────────────────────┐   │
│  │[Long] ◔  1,000 USDC @ 117,000      ⌃    [ @TP   +1,500 ]  🗒 ✎ 🗑  │   │ ← SimPositionRowView : stepper d'ordre
│  │[10×]  25% cap. avant 10,000 · TP…  |2|  [ @SL   −1,000 ]           │   │   central (.pos-order-stepper),
│  └────────────────────────────────────────────────────────────────────┘   │   PickBtn @TP/@SL (issue = bordure accent)
│ ▾ Évolution     SimAccountChart : marches + markers « TP +… / SL −… »       │
│ ▸ Stratégies                                                              n │
└─────────────────────────────────────────────────────────────────────────────┘
   (pas d'Historique ni de Trésorerie côté sim — voulu, commentaire L1607)
```

### Description section par section

1. **Header** (`Header`, `.topbar`, 52 px, `border-bottom` hairline) — `Monogram`
   (**₿ Bitcoin en traits**, `.brand-mark` couleur accent) + `.brand-name` « BTC Wallets
   Evolution » (`text-md` ≤640 px, masqué ≤480 px). À droite `.topbar-right` : **pastille
   prix** `.btc-pill` cliquable (= refresh) avec `StatusDot` (`fresh` pulsé / `stale`
   >5 min / `offline` si auto-refresh coupé **ou erreur de fetch** — l'infobulle porte
   alors le détail de l'erreur et `.time` affiche « BTC · erreur »), prix
   `numFmt(price,0)+' $'`, sous-libellé `.time` « Mise à jour… » ou « BTC · il y a X min »
   (`relTime`, masqué ≤640 px) ;
   `IconButton` Rafraîchir ⟳ ; **menu ⋯** (`.menu-wrap` → `.menu`, fermé au clic-dehors) :
   *Affichage* (Switch « Thème sombre/clair », Switch « Rafraîchissement auto »),
   *Historique* (« Reconstruire l'historique », meta « CoinGecko »), *TradingView*
   (« Script Pine — tous les portefeuilles »), *Sauvegarde*
   (« Exporter (JSON) », « Importer (JSON) »), « Réinitialiser les données » en rouge.
2. **Barre de vues** (`.viewnav-row` > `nav.viewnav`) — onglet fixe « Live » + un onglet
   par `state.simTabs` + bouton `.add` « + » (→ `NewSimTabModal`) ; actif = `aria-pressed`
   + soulignement 2 px accent ; `overflow-x:auto`. Quand un onglet sim est actif,
   `.viewnav-tail` affiche `SimTabMenu` : kebab ⋯ → « Renommer l'onglet » (input inline
   `.simtab-rename`, Enter/Échap/blur), « Dupliquer l'onglet », « Supprimer l'onglet » (rouge).
3. **Dashboard** (`.dash`, grille **2 colonnes ¼ | ¾** `minmax(260px,1fr) 3fr`,
   `align-items:stretch`, empile 1 colonne ≤1180 px ; le graphe s'étire à la hauteur de la
   colonne via `.dash .chart-body{height:auto;flex:1;min-height:320px}`).
4. **Colonne KPI Live** (`SummaryBar`, `.kpi-col` — carte assortie au `.panel` du graphe) —
   hero `ModalStat` **Valeur totale live** (`agg.equity`, `MoneyValue` lg accent) ; le
   **groupe Gains** (`.kpi-gains`, toute la zone cliquable — bascule **USDC ⇄ %** sans
   saut de hauteur via `gMain/gSub` ; en-tête « Gains » + `.unit-toggle`) : **Réalisés**
   (la ligne porte l'« Initiale » en infobulle) / **Latents** / **Aujourd'hui** ; une
   section **Projections** si positions ouvertes : `KpiRow` **Valeur si TP** / **Valeur
   si SL/liq** — VALEURS totales projetées, somme exacte des « Valeur si TP/SL » des
   panneaux (`computeForecast` additif), nudge `.kpi-note` « Définis des TP » si aucun
   TP ; **Exposition** en texte (`gnum` « 48 % », **rouge ≥75 %**) précédée des compteurs
   fusionnés `.kpi-expo-sides` (`2 [L] 1 [S]`, badges mono-lettre, masqués si 0
   position) ; **Win rate** cumulé tous comptes ; enfin la **section Journal**
   (`.kpi-fil`) : en-tête « Journal » + chip « N à faire » (clic → paquet de cartes
   `JournalCardModal`) + icônes stats (`JournalStatsModal`) et réglages
   (`JournalConfigModal`), ligne « À jour x/y » (y = TOUS les trades de l'historique),
   grille `JournalGrid` (pastilles scrollables ~4,5 rangées, auto-scroll en bas,
   tooltip maison `.jrn-tip`). Absente si aucun enregistrement (aucun wallet HL suivi).
5. **Graphe Live** (`EvoChart`, coque `.panel`) — contrôles persistés (`SegmentedControl`
   USDC/% = `settings.chartUnit`, plages `RANGES` 30J/90J/1A/TOUT = `settings.range`) ;
   les graphes de compte (`AccountChart`/`HlAccountChart`) mémorisent eux aussi plage et
   unité, mais **par compte** (`acc.chartRange` / `acc.chartUnit`, lecture défensive →
   90J/USDC si absent) — ils survivent au changement d'onglet et au rechargement ;
   `.chart-body` avec le SVG maison `ChartCanvas` (tooltip `.chart-tip`, hover = ligne
   verticale + points), chips de séries persistées (`state.chart`) : Total, Cash dispo
   (pointillé), une par compte. État vide `.chart-empty` avec bouton « Reconstruire
   l'historique ».
6. **Onglets de comptes** (`nav.accttabs`) — 1 bouton `ColorDot`+nom par compte
   (clic → `settings.liveAcct`), « + » → `CreateAccountModal`.
7. **Panneau du compte actif** (`AccountPanel`, `.account-panel`, remonté `key={id}`) —
   kebab ⋯ absolu (`.account-menu`) : Éditer / Dupliquer / — / Supprimer (rouge) ;
   bandeau `.modal-stats` : Valeur · Cash dispo · Réalisé ⇄ · Win rate ⇄ · Depuis T0,
   puis si positions ouvertes ⎮ Valeur si TP · Valeur si SL/liq — ces deux-là sont des
   VALEURS du compte aux cibles (mêmes niveaux que les repères TP/SL du graphe), pas des
   écarts au capital de référence ; « Réalisé » et « Win rate » partagent une bascule
   USDC ⇄ % (`.modal-stat.togglable`, le win rate passant de `3/5` à `60 %`) ; un
   `.stat-note` sous le bandeau prévient quand aucune position n'a de TP — sans lui,
   « Valeur si TP » vaudrait la valeur actuelle sans le dire ;
   `EditAccountForm` inline (nom + couleur) si édition ; **accordéon** `.acc-list`
   (composant `Section`, multi-ouverture), ordre :
   **Positions ouvertes** (ouverte ; sous-formulaire « Ouvrir une position » replié via
   `CollapsibleHeader` ; lignes `PositionRowView`/`PosRow` : pile Long/Short+levier, anneau
   `AllocationRing` = expo au moment du trade, PnL live, icônes Note/Éditer/Fermer/Supprimer,
   note `PosNote` dessous) → **Évolution** (ouverte ; `AccountChart` à contrôles locaux,
   chips Valeur/Cash dispo/Repères, hlines TP/SL et markers de clôture TP/SL/Rekt) →
   **Stratégies** (textarea `.strat-input` + liste `StrategyRow` antichronologique) →
   **Historique** (`ClosedPositionRow`, tri `closedAt` desc, badge « Rekt » en colonne
   centrale) → **Trésorerie** (dépôt/retrait datés en `.grid2`, liste « Mouvements »
   `.mv-row` avec ligne « Init » fixe).
8. **Vue Simulation** — même gabarit `.dash` : `SimSummaryBar` (`.kpi-col` : Valeur totale ·
   scénario / Initiale ⎮ groupe Gains cliquable « Si tous TP / Si tous SL/liq. » ⎮
   Positions ouvertes / Expo moyenne / Expo max (2 `.kpi-ring`) / Levier moyen) et `SimChart`
   (`stepMode`, axe « Départ, P1, P2… » partagé par l'onglet via `tabOrderSteps`, unité
   `settings.simUnit`, chips `settings.simChart` ; pas de plage ni backfill) →
   `.accttabs` (sélection **locale**, non persistée) → `SimAccountPanel` : stats Capital /
   Capital scénario / « Gain · x/y » / Tout TP / Tout SL ; accordéon **3 sections**
   (Positions simulées, Évolution = `SimAccountChart`, Stratégies) ; lignes
   `SimPositionRowView` avec **stepper d'ordre** central (`.pos-order-stepper`) et
   **`PickBtn` @TP/@SL** (montants affichés ; actif = accent ; re-clic = exclusion du
   scénario) ; pas de PnL live, pas de clôture, pas de Trésorerie/Historique.
9. **Modales & formulaires** — 8 modales DS (`Modal`) : `CreateAccountModal` (nom,
   pastilles couleur `ID_ORDER`, date, cash ; variante **Wallet Hyperliquid** avec aperçu
   fetché ; réutilisée en « Nouvelle simulation »), `NewSimTabModal` (« Copier depuis le
   Live » / « Onglet vide »), `PineScriptModal`, `JournalCardModal` (paquet de cartes de saisie),
   `JournalTradeModal` (fiche journal), `JournalStatsModal`, `JournalConfigModal`.
   Le reste est **inline** :
   `OpenPositionForm` (ticket d'exchange : Long/Short, marge + slider `.range`
   synchronisés, presets `.preset-chip` 25/50/75/100 % et 5/10/20/30×, date, frais,
   TP/SL, bloc `.derived` Marge nette/Coût · Quantité · Prix liquidation · Exposition),
   `ClosePositionForm` (prix de sortie avec chips TP/SL, frais, date bornée, Résultat
   net), `EditPositionForm`, `NoteEditor`, `EditAccountForm`, formulaires trésorerie et
   stratégie.

---

## 2. Bilan du fonctionnement des fonctionnalités

**Persistance** — Tout l'état vit dans `localStorage` clé `bwe.state.v1` ;
`useStore.update()` clone profond + `persist()` à **chaque** mutation — mais **un seul
onglet écrit** : bail d'écriture `bwe.owner.v1` (ré-estampillé 20 s, réputé abandonné
après 60 s, bandeau `SaveWarning` + « Prendre la main » dans les onglets
non-propriétaires, qui suivent passivement via l'événement `storage`). Libéré sur
`pagehide` (+ `beforeunload`) — seul événement de sortie fiable sur mobile ; repris dès le
retour sur la page (`visibilitychange`/`pageshow`) ; tout onglet qui reprend le bail
**relit d'abord** le document (`resync`), sa mémoire pouvant dater d'avant les écritures
d'un autre onglet. Un document illisible part en **quarantaine**
(copie `bwe.state.broken.<ts>`, toute écriture bloquée) au lieu d'être écrasé. La part
**saisie à la main** du journal est doublée sous `bwe.journal.backup.v1` (restauration
depuis les réglages du journal). **Nouvelle version** (`useUpdateCheck`, hors `file://`) :
le script Babel en mémoire et `app.css` chargée sont comparés au code servi en `no-store`
(10 s après l'ouverture, à chaque retour sur la page, toutes les 15 min) → `UpdateBanner`
« Nouvelle version disponible » + Recharger (`reloadFresh` : caches rafraîchis en
`cache: 'reload'` puis `location.reload()`). Au chargement, `loadState` fusionne avec
`defaultState()` et rejoue deux migrations : `migrateSims` (crée `strategies`, assigne
`order`, convertit l'ancienne marge absolue en `marginPct`) et `migrateSimTabs`
(rattache les sims orphelines, corrige une vue invalide) ; **l'import JSON rejoue les
mêmes migrations** (correctif 2026-07-29). Les anciennes couleurs sont mappées à la
lecture (`COLOR_MIGRATION`, non destructif).

**Prix BTC** — `useBtcPrice` : CoinGecko `simple/price` au montage + auto-refresh toutes
les 60 s si `settings.autoRefresh` ; chaque succès écrit aussi
`priceHistory[aujourd'hui]`. Fraîcheur affichée par le `StatusDot` (stale à 5 min). Le
refresh manuel passe par la pastille ou l'icône ⟳.

**Comptabilité (fonctions pures)** — Pas de snapshots : `accAt(acc, date, prix)`
reconstruit l'état d'un compte à n'importe quelle date (cash = openingCash ± cashflows
≤ date, − marge+frais des ouvertures, + marge+P&L−frais des clôtures ; équity = cash +
valeur des ouvertes ; **réalisé = résiduel** équity − dépôts nets − latent, donc frais
inclus). `aggregateAt` somme les comptes. `equityAtOpen` donne la **base d'exposition au
moment du trade** (clone : position forcée « open », cashflows du jour exclus) — c'est
elle qui alimente les anneaux, toujours ≤ 100 %. Liquidation = `entry×(1∓1/levier)` ;
`posStopPrice` borne le SL saisi par la liquidation.

**Comptes réels** — Créer (modale ; auto-sélection), éditer (nom+couleur seulement — la
date porte l'historique), **dupliquer** (jumeau complet à nouveaux ids, 1ʳᵉ couleur
libre, inséré après, sélectionné, sans confirm), supprimer (confirm ; `liveAcct`
réassigné).

**T0 — point de départ des calculs (par portefeuille)** — Champ optionnel `acc.t0`
(`'YYYY-MM-DD'`, absent = comportement d'origine, aucune migration). Se règle par le
kebab `⋯` → « Point de départ (T0) » (le `.meta` de l'item montre la date courante) qui
ouvre `T0Form` à l'emplacement d'`EditAccountForm` (date bornée [début du compte,
aujourd'hui], boutons Annuler / Effacer le T0 / Enregistrer). Disponible sur les comptes
manuels **et** Hyperliquid ; pas sur les simulations (axe par étapes).

Le calcul passe par `accNow(acc, prix, priceHistory)` (et `aggregateNow` pour l'agrégat
de la colonne KPI), qui re-base les grandeurs de **flux** sans toucher aux **stocks**
(cash, équity, exposition, levier — les filtrer casserait la comptabilité) :

```
base     = équity(T0) + flux nets depuis T0        → la ligne « Initiale (T0) »
total    = équity − base
latent   = latent(now) − latent(T0)                → gain des positions DEPUIS le T0
réalisé  = total − latent   (≡ réalisé(now) − réalisé(T0))
si TP/SL = équity − latent_réel + P&L projeté − base
```

Sans T0, `base = dépôts nets` et `latent(T0) = 0` → les formules redonnent exactement
`accAt`. `accAt` / `aggregateAt` / `buildHistory` / `equityAtOpen` restent intacts, et le
delta « Aujourd'hui » se calcule sur un `aggRaw` non re-basé (il se compare à `history`).
`accWinStats` filtre sur la **date de clôture** ≥ T0 (un trade ouvert avant et fermé
après compte donc en entier) — manuel par `dOf(p.closedAt)`, HL par `ep.t1`.
Limite Hyperliquid : `hlAccAt` historise un latent constant, donc `latent(T0) = 0` pour
un wallet suivi (le latent affiché reste le latent réel, l'écart tombe dans le réalisé).

**Positions réelles** — Ouverture façon ticket : marge = **enveloppe qui sort du cash**
(le collatéral stocké est `netMargin = max(marge−frais,0)`), slider/presets en % du cash
dispo, plafonné à `floor(basis)` ; dépassement du cash **bloqué** sauf trade antidaté
(« Toléré (trade passé) »). Prix d'entrée prérempli au prix live. Édition libre après
coup (sans confirm). Clôture inline : chips **TP**/**SL** (SL → liquidation si absent),
date bornée [ouverture, aujourd'hui], aperçu « Résultat net » ; suppression = correction
de saisie (confirm). Badge **« Rekt »** en historique si sortie = liquidation ET expo à
l'ouverture ≥ 99,5 %. **Notes de trade** par position (ouverte ou clôturée), note vide =
suppression. Chaque ligne **ouverte** (`OpenPosRow`, `.oprow*`, partagée live/HL) est en
**trois sections** séparées par des `.divider` verticaux : **config à l'ouverture** (badges
sens/levier, anneau, marge @ entrée, quantité, TP · SL) ⎮ **métriques courantes** (**Valeur**
= collatéral + P&L, **Latent** avec bascule USDC ⇄ % — un état par panneau, partagé par
toutes les lignes, indépendant de la bascule du bandeau) ⎮ **projection** (**Si TP**, « — »
sans TP · **Si SL**, libellé « Si liq. » quand la protection est la liquidation, valeur 0
quand aucun SL n'est saisi). Les lignes **clôturées** et les **simulations** gardent `PosRow`.

Sur une ligne de position **HL** (`HlPositionRowView`), une icône **Journal** (`IBook`)
ouvre la **carte de saisie** si le trade est à journaliser, sinon sa **fiche** (title
dynamique « Journaliser ce trade » / « Fiche journal du trade ») ; même icône sur les
lignes d'historique HL (`HlClosedTradeRow`). Les notes
(`PosNote` → `NoteBody`, `--text-sm`) interprètent des **marqueurs texte** : `**gras**`,
`*italique*`, `__souligné__`, `- ` = puce ; `NoteEditor` porte une barre `.note-toolbar`
(G/I/S/•) qui insère les marqueurs autour de la sélection. Texte stocké **brut** — aucune
migration, rendu en nœuds React (jamais de HTML injecté).

**Trésorerie** — Dépôts/retraits datés (12:00), retrait borné au cash dispo (erreur
inline), liste antichronologique avec ligne « Init » indélébile ; suppression d'un
mouvement **avec confirmation** depuis le 2026-07-29 (aligné sur les autres deletes).

**Stratégies** — Journal daté par compte (live ET sim), sans incidence comptable : ajout
(textarea), édition inline, suppression avec confirm, plus récentes en premier.

**Export Pine Script (TradingView)** — Entrée « Script TradingView (Pine) » dans le kebab
des comptes manuels **et** Hyperliquid (un portefeuille), plus « Script Pine — tous les
portefeuilles » dans le menu du header (groupe *TradingView*) pour un script **global**
fusionnant tous les comptes sur un axe commun → `PineScriptModal` (props `acc` OU
`accounts`, récap `.derived`, code en `.pine-code`, bouton « Copier »). En mode global,
chaque compte garde **son** T0, les trades sont triés par date d'ouverture et l'étiquette
est préfixée du nom du portefeuille (`shortName`, 12 car.) puisque les `L#n` se répètent
d'un compte à l'autre ; le nom complet est dans l'infobulle. Couleurs : **bleu `#2962FF`
pour les gagnants, rose `#FF4081` pour les perdants** — le vert/rouge se noyait dans les
bougies de TradingView (les deux restent des `input.color`, modifiables dans les réglages
de l'indicateur). `collectBtcTrades(acc, price)` ramène les trades **BTC
uniquement** au même format des deux côtés : manuel = positions (tout est BTC, `n` = rang
par `openedAt` comme les marqueurs du graphe) ; HL = `hlEpisodes(...)` filtré
`ep.coin === 'BTC'` **après** numérotation (pour garder les `L#n` des badges du graphe HL),
prix de sortie via **`hlEpisodeExit(fills, ep)`** — helper partagé (aussi consommé par la
synchro du journal ; l'ex-`TradeModal` qui l'utilisait a été supprimé). Filtre T0 identique à `accWinStats` (date de clôture ≥ T0) ; la
position ouverte est toujours incluse. `buildPineScript` émet du **Pine v6** : un appel
`f_trade(...)` par trade (pas de tableaux — lignes courtes, on évite la règle de
continuation de ligne de Pine), coordonnées en `xloc.bar_time` (ms epoch absolus), zones
entrée→TP / entrée→SL quand les cibles sont connues, sinon boîte entrée→sortie colorée par
le résultat, étiquette `L#3 +417` + tooltip détaillé, garde `var bool drawn` (les dessins
ne sont créés qu'une fois) et avertissement si le symbole du graphe n'est pas du BTC.
Limites signalées dans l'en-tête du script et dans la modale : plafond **200 trades**
(Pine plafonne à 500 objets par type), horizon des 200 fills côté HL, et horodatage **à
midi** côté manuel (l'app ne stocke pas d'heure de trade). ⚠️ Pine ne peut pas instancier
les outils « Long/Short Position » de TradingView — leur visuel est reproduit en
box/line/label.

**Prévisions** — `computeForecast` sur les positions ouvertes : bas = P&L à
SL-borné-liquidation ; haut = P&L au TP, **ou latent actuel si pas de TP** (d'où le
nudge « Définis des TP »). Conséquence sur les graphes : la hline **TP** n'est tracée que
si `fc.anyTp` — sans aucun TP saisi elle se confondrait avec la valeur courante. La hline
SL est toujours tracée (la liquidation sert toujours de borne). Affiché en global (colonne KPI : lignes « Si TP / Si SL·liq »
= `forecast.up/down = réalisé + P&L projeté`, dans le groupe Gains bascule USDC/%) et par
compte (4 stats projetées du bandeau `.modal-stats`).

**Graphes** — `ChartCanvas` (SVG maison partagé) : échelle Y adaptative (pas de plancher
0), padding 12 %, tooltip au survol, hlines pointillées, markers cliqués sur la courbe,
mode % : les trois graphes **temps réel** tracent `gainsPct` = (valeur − dépôts nets du
jour) ÷ |dépôts nets du jour| (séries, hlines et markers convertis par le parent, prop
`pctDirect` — dépôts neutralisés, même règle que BWE_Android ; « Cash dispo » désactivé
en %) ; les graphes sim gardent la normalisation sur le capital de départ (`pctBase`).
Axes et infobulles USDC signés (`numFmtSigned`). Les trois graphes temps réel
(`EvoChart`/`AccountChart`/`HlAccountChart`) sont **zoomables** (prop `zoomable`) :
⌘/Ctrl + molette ou pincement (wheel+ctrlKey, GestureEvent Safari) = zoom centré curseur
— la molette seule n'est pas interceptée et fait défiler la page —, glisser = pan quand zoomé (curseurs grab/grabbing),
double-clic ou badge ⟲ = reset ; échelle Y recalculée sur les points visibles,
`key={unit+range}` → reset naturel au changement de plage/unité. Les graphes sim
(`stepMode`) ne zooment pas. `EvoChart` (contrôles persistés) trace
`buildHistory` = un point par date **présente dans `priceHistory`** ; « Reconstruire
l'historique » = CoinGecko `market_chart`, **plafond 365 j**, fusion non destructive
(l'existant gagne). `AccountChart` (contrôles locaux) ajoute repères TP/SL agrégés +
markers de clôture TP/SL/Rekt. La prop **`vlines`** (`[{f, label, color}]`, `f` = fraction
du domaine complet comme `spans`) pose la **barre verticale du T0** sur les graphes de
compte (`AccountChart` sur l'axe indexé, `HlAccountChart` sur l'axe temporel) : dessinée
après les `hlines` donc au premier plan, elle suit le zoom/pan par la même soustraction de
fenêtre, et **n'est pas tracée si le T0 sort de la plage affichée** (sinon elle se
collerait au bord gauche). Le graphe global `EvoChart` n'en a pas (T0 propre à chaque
compte). Côté sim, `SimChart`/`SimAccountChart` remplacent le
temps par les **créneaux d'ordre** partagés de l'onglet (`tabOrderSteps` +
`simTrajectory`, plat quand une sim n'a rien au créneau).

**Onglets de simulation** — « + » de la barre de vues → onglet vide (« Simulation N »)
ou **« Copier depuis le Live »** : 1 sim par compte réel, capital = `max(0, cash +
marges ouvertes)` (hors latent), positions ouvertes converties en `marginPct` clampé
avec ordre séquentiel (notes et dates conservées, frais remis à 0). Renommage live,
duplication (clone intégral, vue basculée), suppression (confirm, purge des sims, repli
de vue).

**Comptes simulés** — Chaîne séquentielle : chaque position stocke `marginPct` (0–100)
et `order` ; `simChain` rejoue les positions dans l'ordre, marge dérivée du capital
laissé par les précédentes (plancher 0 pour le sizing). Issue par position via `PickBtn`
@TP/@SL — re-clic = **exclusion** (`scenario:null`, net 0) ; défaut = TP si TP saisi,
sinon SL. Bornes « Tout TP » / « Tout SL / liq. » = chaîne rejouée avec issue forcée. Le
stepper réordonne la rotation à la volée. Édition en `pctMode` sur `capitalBefore` de la
ligne ; duplication de sim = clone dans l'onglet, couleur libre scopée à l'onglet.

**Comptes Hyperliquid (ajout 2026-07-22)** — Nouveau type de compte Live **read-only**
suivi par **adresse de wallet** (`source:'hyperliquid'`, `address`, données dans `acc.hl`)
via l'API publique `POST https://api.hyperliquid.xyz/info` (CORS ouvert, sans
authentification, nombres = strings). Création : `CreateAccountModal` avec
`SegmentedControl` **Manuel | Wallet Hyperliquid** (adresse validée + anti-doublon +
**aperçu fetché obligatoire**). Valorisation : branche pivot dans `accAt` → `hlAccAt`
(présent = snapshot `clearinghouseState` ; passé = `equityHistory`/`pnlHistory` du
endpoint `portfolio` ; `netDeposits = équity − PnL all-time`, négatif si retraits >
dépôts). ⚠️ `portfolio.pnlHistory` a une **baseline par fenêtre** — seule `perpAllTime`
est un cumul vrai. Synchro : légère (état+ordres, ~22 pts de rate limit) sur le tick
60 s, complète (+portfolio/ledger/fills/spot) au montage et toutes les 10 min ; ⟳ header
= BTC + HL. Panneau `HlAccountPanel` : stats identiques au manuel + `.hl-meta` (pastille
adresse, « Synchro : il y a X min », erreurs, note spot non compté) ; kebab
Resynchroniser / **Point de départ (T0)** / **Script TradingView (Pine)** / Éditer /
**Ne plus suivre** (pas de Dupliquer — un wallet est unique ; « Ne plus suivre » marque
les enregistrements du journal du wallet comme **orphelins**, purgeables depuis les
réglages du journal) ; accordéon **Positions** (read-only, multi-actifs
`size coin @ entry`, TP/SL = triggers reduce-only **classés par `orderType` réel**,
liq API, icône Journal) · **Évolution** (`HlAccountChart` **haute résolution** sur
`hl.samples` — axe temps réel, rétention à paliers, points de clôture injectés et
protégés, entrées/filigranes de trades, marqueurs cliquables → la ligne d'historique du
trade s'affiche SOUS le graphe, dans la section, avec notes locale et partagée — plus de
modale ; re-clic sur le même trade ou bouton × pour refermer) ·
**Stratégies** (seule section éditable) · **Historique** (**adossé aux enregistrements
du journal** — survit à la fenêtre des 200 fills ; ordres regroupés à la minute, badge
TP/SL/Rekt d'après l'`orderType` réel) · **Trésorerie** (ledger read-only). Intégré partout : totaux/KPI (`SummaryBar` compte ses positions),
`computeForecast` (branche dédiée), `EvoChart` (série via `buildHistory`, axe union +
prix carry-forward), `createSimTabFromLive` (positions → `marginPct`, coin en note).
« Aujourd'hui » est passé au **delta latent+réalisé** (delta d'équity hors flux).

**Journal de trading (wallets Hyperliquid uniquement)** — Détection automatique dans
`syncHl` : `hlEpisodes` reconstruit les épisodes par coin (ouverture → retour exact à
zéro, partielles incluses), `journalDetect` crée/complète un enregistrement par trade
(`journal.trades`, clé `wallet|coin|t0`) — idempotent, **aucune migration** (lecture par
accesseurs défensifs `jXxx()`). `journalObserveLive` capture à chaque tick ce que l'API
ne conserve pas après clôture (levier, marge, TP/SL, funding) et force une clôture
provisoire après 3 synchros sans la position (anti-poussière). Saisie par **cartes
enchaînées** (`JournalCardModal` : ouverture / clôture / partielle / DCA — setup, cible,
état d'esprit, risque, raison de sortie ; « Plus tard » = snooze en fin de file), depuis
la chip « N à faire », les pastilles de la grille, ou l'icône Journal des lignes HL.
Relecture par `JournalTradeModal` (faits + saisies + déroulé des ordres + vie des
TP/SL) ; la **saisie d'ouverture y est rééditable** après coup (crayon → même
formulaire prérempli, save ciblé `jSetOpening` qui préserve `savedAt` et
`closureKnownAtSave`, trace `editedAt`/`editedAfterClose` — hint « Modifié après la
clôture » collant), stats par `JournalStats` (décomptes, % masqués sous n = 10), réglages par
`JournalConfig` (désactiver/ajouter des options `c_*`, purge des orphelins, poids du
journal, restauration depuis `bwe.journal.backup.v1`). Les comptes **manuels** n'ont pas
de journal (pas de détection de trades).

**Sauvegarde / thème** — Export = état complet daté `btc-wallets-evolution-YYYY-MM-DD.json`
(ancre insérée au DOM, révocation différée) ;
import validé (`accounts` requis) + confirm + **migrations rejouées** + fusion des
defaults ; reset avec confirm.
Thème dark/light via `data-theme` sur `<html>`, persisté. Accent **monochrome** (blanc en
dark / noir en light) ; l'**orange est réservé au sens** (escalade du `LeverageBadge`).

### Points d'attention relevés (mis à jour au 2026-07-29, après la passe d'audit)

**Corrigés le 2026-07-29** (audit complet) : import JSON sans migrations · erreur de
fetch prix invisible · `change24h` stocké pour rien · perte d'une position manuelle
ouverte non bornée à la marge (nouveau `posPnlOpen`, la liquidation plafonne) ·
rétention `hl.samples` qui laminait l'historique (paliers + clôtures protégées `s[2]`) ·
TP/SL Hyperliquid classés par heuristique de prix (désormais `orderType` réel) ·
suppression d'un mouvement de trésorerie sans confirm · enregistrements de journal
jamais marqués orphelins (« Purger les orphelins » était inopérant) · export JSON
fragile (révocation immédiate) · renommage d'onglet sim persisté à chaque frappe ·
« Copier depuis le Live » à conversion non chaînée · code mort (5 classes CSS,
6 composants DS, `IPlus`, helpers `accXxx`, `cap.tpslLog` non borné, props mortes).

**Corrigés le 2026-10-25** (bilan de la v2) : graphes en % plats à 0 % quand la 1re valeur
visible valait 0, et dépôts comptés comme des gains (→ `gainsPct` + `pctDirect`) · signe
moins absent des graduations et infobulles USDC (→ `numFmtSigned`) · molette toujours
captée par les graphes, qui bloquaient le défilement de la page (→ ⌘/Ctrl ou pincement) ·
interrupteur « Thème sombre » coché en thème clair · marqueur d'entrée d'un trade ouvert
avant la plage collé au bord gauche · clôture manuelle étiquetée « TP » si gagnante et
« SL » si perdante (→ TP/SL seulement si la cible ou le stop est touché, sinon montant seul).

**Rendu téléphone revu le 2026-10-25** (≤640px, bloc « Responsive » d'app.css) : échelle
typographique resserrée (tokens `--text-*` −1 à −8px, tout le DS suit), champs à 16px
(pas de zoom iOS), marges des cartes réduites, bandeau `.modal-stats` en grille 2 colonnes
(séparateurs → filets horizontaux, « Valeur » pleine largeur dans les panneaux de compte),
`.oprow` en grille 5 colonnes (config / Valeur · Latent ⎮ Si TP · Si SL / actions),
`PosRow` passé en classes `.posrow*` → 2 rangées sur téléphone (texte ⎮ [Rekt / ordre
sim] + résultat + icônes), segments insécables `.seg` (`lineSegs`) pour ne couper qu'entre
deux montants, barre de défilement parasite des onglets supprimée. Desktop inchangé.
Graphes au doigt : `ChartCanvas` passe aux événements **pointeur** (souris et doigt, même
code) avec `touch-action: pan-y` — 1 doigt = curseur + infobulle qui suivent le doigt et
disparaissent au relâchement (`onUp`) ou quand le navigateur reprend le défilement vertical
(`pointercancel`) ; tap sur un repère = ligne du trade. **Pas de zoom ni de pan tactiles**
(choix utilisateur : les boutons de période suffisent) — le pincement est neutralisé sur le
graphe (`pointer: coarse`) pour ne pas zoomer la page.

**Restent exacts :**
- `data-theme="dark"` est en dur dans le HTML → possible flash sombre au premier rendu
  si le thème stocké est clair.
- `duplicateSimTab` désélectionne (`setActiveSim(null)`) → le nouvel onglet s'ouvre sur
  sa 1ʳᵉ sim, alors que `duplicateSim` sélectionne bien le doublon.
- Incohérence mineure : quantité BTC affichée à 4 décimales sur les lignes, 6 dans le
  bloc dérivé du formulaire.
- **Funding Hyperliquid** : absent du net des trades (`closedPnl`) mais absorbé dans le
  « Réalisé » global — les deux ne se réconcilient pas exactement (documenté README).
- Le journal ne couvre que les wallets Hyperliquid ; rien ne le dit dans l'UI à un
  utilisateur 100 % manuel (la section Journal est simplement absente).
- L'adresse d'un wallet HL n'est **pas éditable** après création — corriger une faute de
  frappe = supprimer/recréer, ce qui orphelinise le journal du wallet (`jKey` sur
  l'id du compte ; `rec.walletAddr` est conservé comme crochet de ré-adoption future).
