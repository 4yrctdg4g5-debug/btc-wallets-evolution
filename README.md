# BTC Wallets Evolution — v2

Suivi local de comptes de trading BTC à effet de levier (long/short, USDC).
Application autonome : **un seul `index.html`** (logique + UI inline), React + Babel et police **Geist** embarqués, aucun build, aucun serveur. Hors-ligne, sauf le prix BTC (CoinGecko) et la synchro des wallets Hyperliquid.

Design system « functional dark minimalism » (dossier `BTC Wallets Design System/`, bundle `_ds_bundle.js`) : **accent monochrome** (blanc en sombre / noir en clair — l'orange `--warn` est réservé à l'escalade du levier), couleurs réservées au sens (gain/perte), thème sombre/clair.

## Lancer

- **Double-clic sur `index.html`**, ou via la preview : serveur `bwe2` (`.claude/launch.json`, port 8766).
- **En ligne** : publiée telle quelle sur **GitHub Pages** (branche `main`, racine du dépôt) — aucun build, chaque push redéploie en ~1 min (le navigateur peut garder l'ancienne version jusqu'à 10 min).

### Version en ligne — à savoir

- **Aucune donnée n'est dans le dépôt.** Comptes, positions et journal vivent dans le `localStorage` du navigateur de chaque appareil, comme en local. Première ouverture en ligne = app vide : **Exporter (JSON)** depuis la version locale, puis **Importer (JSON)** dans la version en ligne. Pas de synchro entre appareils (l'export/import sert de passerelle).
- **`.nojekyll` est indispensable** : sans lui, GitHub Pages ignore les fichiers commençant par `_`, donc `_ds_bundle.js` (composants du design system) ne serait pas servi.
- **Une seule app BWE par compte GitHub Pages** : tous les sites `<pseudo>.github.io/…` partagent le même `localStorage`, et la v2 comme BWE_Android utilisent la clé `bwe.state.v1` — publiées côte à côte, elles s'écraseraient.

## Fonctionnalités

**Vue Live** — dashboard 2 colonnes : colonne KPI (valeur totale, gains avec bascule USDC⇄%, projections « Valeur si TP / si SL-liq », exposition, win rate, **section Journal**) | graphe global `EvoChart` (série Total / Cash / une par compte). En dessous, un onglet par compte.

**Comptes manuels** — saisie marge + levier + prix d'entrée (quantité/liq. dérivées), TP/SL optionnels, dates antidatables, frais, clôture avec presets TP/SL, notes de trade (mini-markup), trésorerie datée, stratégies, duplication, graphe par compte `AccountChart` (repères TP/SL, marqueurs de trades cliquables → la ligne du trade s'affiche sous le graphe, avec ses notes).

**Notes partagées** — un même commentaire (ex. une stratégie plus large qu'un trade) attachable à plusieurs positions à travers tous les wallets (manuel, Hyperliquid, simulation) via l'icône lien des lignes de position ; objet unique référencé (`state.sharedNotes` + `snoteId`), édition répercutée partout, gestion centrale dans le menu ⋯ → « Notes partagées », incluses dans la sauvegarde séparée du journal.

**Comptes Hyperliquid** (lecture seule) — suivi d'une adresse `0x…` via l'API publique `POST /info` (aucune clé). Positions, TP/SL depuis les ordres déclencheurs (classés par `orderType` réel), équity perp + USDC spot, historique haute résolution (`hl.samples`, rétention à paliers), ledger, historique des trades adossé au journal (survit à la fenêtre des 200 fills), graphe `HlAccountChart` sur axe temps réel. Synchro légère 60 s / complète 10 min.

**Journal de trading** (wallets Hyperliquid uniquement) — détection automatique des ouvertures/clôtures/partielles/DCA, cartes de saisie enchaînées (setup, cible, état d'esprit, risque, raison de sortie — catalogue configurable), grille de pastilles (1 point = 1 trade), fiche de relecture (saisie d'ouverture rééditable après coup, édition tracée), statistiques. Vit dans la colonne KPI de la vue Live.

**Simulation** — onglets indépendants de scénarios chaînés : marge en **% du capital disponible avant la position** (le résultat d'une position dimensionne la suivante), issue @TP/@SL choisie par position, bornes Tout TP / Tout SL, trajectoire par étapes, « Copier depuis le Live » (conversion chaînée fidèle).

**Transverse** — **T0** par portefeuille (re-base les flux à une date choisie, stocks intacts), **zoom** des graphes temps réel (⌘/Ctrl + molette ou pincement du trackpad = zoom — la molette seule fait défiler la page —, glisser = pan, double-clic = reset ; au doigt : curseur qui suit le doigt, pas de zoom tactile — boutons de période), **graphes en %** = gains cumulés ÷ capital déposé du jour (les dépôts ne comptent pas comme des gains ; le cash n'a pas d'équivalent en %), **export Pine Script v6** (TradingView, trades BTC, par compte ou global), export/import JSON, thème sombre/clair.

## Formules comptables de base

```
quantité_BTC   = (marge × levier) / prix_entrée
PnL long       = quantité × (prix − prix_entrée)
PnL short      = quantité × (prix_entrée − prix)
prix liquidation ≈ entrée × (1 ∓ 1/levier)

Ouvrir   : cash_libre −= marge + frais_ouverture
Fermer   : cash_libre += marge + PnL_prix − frais_clôture

Équity (valeur compte) = cash_libre + Σ_ouvertes(marge + PnL_borné)
Capital net            = cash_ouverture + dépôts − retraits

Latent   = Σ_ouvertes(PnL_borné)           ;  % sur la marge déployée
Réalisé  = (Équity − Capital net) − Latent
Total    = Équity − Capital net            (= Réalisé + Latent)
```

- **La perte d'une position ouverte est bornée à sa marge** (`posPnlOpen`) : sous le prix de liquidation, la position vaut 0 — l'équity ne descend jamais sous le cash. Les clôtures enregistrées gardent leur PnL réel.
- **T0** : avec un point de départ, `base = équity(T0) + flux nets depuis T0` remplace le capital net ; latent re-basé, réalisé résiduel. Sans T0, formules ci-dessus inchangées.
- **Hyperliquid** (`hlAccAt`) : équity/latent viennent du snapshot API ; `réalisé = équity − dépôts nets − latent` (résiduel). Les dépôts nets peuvent être **négatifs** (retraits > dépôts) — l'« Initiale » aussi, c'est comptablement correct.
- **« Aujourd'hui »** = delta de gains totaux (latent + réalisé) depuis le dernier jour connu de l'historique — variation d'équity hors flux.
- Le graphe global est **reconstruit** jour par jour depuis les données (positions + mouvements + cours BTC). Menu ⋯ → « Reconstruire l'historique » comble les cours manquants (CoinGecko, 365 j max).

## Persistance

| Clé localStorage | Contenu |
|---|---|
| `bwe.state.v1` | le document complet (auto à chaque action) |
| `bwe.owner.v1` | bail d'écriture : **un seul onglet persiste** (les autres suivent et peuvent « prendre la main ») ; libéré à la sortie de page (`pagehide`, fiable sur mobile), abandonné après 60 s sans renouvellement |
| `bwe.state.broken.<ts>` | quarantaine d'un document illisible (copie, jamais écrasé) |
| `bwe.journal.backup.v1` | sauvegarde séparée des **saisies manuelles du journal** (seule donnée non retéléchargeable) |

- Export/Import JSON via le menu ⋯. L'import **rejoue les migrations** comme le chargement et double-confirme si des saisies de journal seraient perdues.
- Exporter régulièrement : le `localStorage` est lié au navigateur.

## Limites connues (assumées)

- **Funding Hyperliquid** : absorbé dans le « Réalisé » global (l'équity API l'inclut) mais **absent du net des trades** (`closedPnl` ne le contient pas) — le win rate/l'historique/le Pine et le Réalisé ne se réconcilient donc pas exactement sur un wallet à fort funding.
- **200 fills** conservés par wallet : les numéros d'épisode `#n` sont **relatifs à cet horizon** (ils peuvent glisser) ; le journal, lui, persiste ses enregistrements.
- **Spot non-USDC non valorisé** (affiché en note « Spot non compté »).
- **Export Pine : trades BTC uniquement**, plafonné à 200 objets.
- Le journal ne couvre que les wallets Hyperliquid (les comptes manuels n'ont pas de détection de trades).

## Structure

```
index.html            app (logique + UI inline)   styles.css / tokens/   tokens du DS (forkés : accent
app.css               layout (dash, panneaux…)                           monochrome, typo relevée, Geist locale)
_ds_bundle.js         composants du DS (patché :  vendor/                react, react-dom, babel
                      LeverageBadge, accent)      assets/fonts/          Geist .woff2 (local)
docs/                 bilan layout/fonctionnement
```

> L'ancienne v1 (`Archive/BWE_app/`) partageait la même clé `bwe.state.v1` **sans** bail d'écriture ni quarantaine — ne pas la rouvrir sur la même origine que la v2.
