export default class Contrat {
  mode_contractuel;
  type_de_contrat;
  type_de_derogation;
  numero_contrat_precedent;

  date_conclusion;
  date_debut_execution_contrat;
  date_fin_contrat;

  duree_hebdomadaire_travail_heures;
  duree_hebdomadaire_travail_minutes;
  travail_sur_machines_dangereuses;
  date_effet_avenant;
  salaire_brut_embauche;

  date_début_annee_un;
  date_fin_annee_un;
  pourcentage_annee_un;
  type_remuneration_annee_un;

  date_début_annee_un_changement_tranche_age;
  date_fin_annee_un_changement_tranche_age;
  pourcentage_annee_un_changement_tranche_age;
  type_remuneration_annee_un_changement_tranche_age;

  date_début_annee_deux;
  date_fin_annee_deux;
  pourcentage_annee_deux;
  type_remuneration_annee_deux;

  date_début_annee_deux_changement_tranche_age;
  date_fin_annee_deux_changement_tranche_age;
  ourcentage_annee_deux_changement_tranche_age;
  type_remuneration_annee_deux_changement_tranche_age;

  date_début_annee_trois;
  date_fin_annee_trois;
  pourcentage_annee_trois;
  type_remuneration_annee_trois;

  date_début_annee_trois_changement_tranche_age;
  date_fin_annee_trois_changement_tranche_age;
  ourcentage_annee_trois_changement_tranche_age;
  type_remuneration_annee_trois_changement_tranche_age;

  date_début_annee_quatre;
  date_fin_annee_quatre;
  pourcentage_annee_quatre;
  type_remuneration_annee_quatre;

  date_début_annee_quatre_changement_tranche_age;
  date_fin_annee_quatre_changement_tranche_age;
  pourcentage_annee_quatre_changement_tranche_age;
  type_remuneration_annee_quatre_changement_tranche_age;

  nourriture;
  logement;
  autres;
  constructor(
    mode_contractuel,
    type_de_contrat,
    type_de_derogation,
    numero_contrat_precedent,

    date_conclusion,
    date_debut_execution_contrat,
    date_fin_contrat,

    duree_hebdomadaire_travail_heures,
    duree_hebdomadaire_travail_minutes,
    travail_sur_machines_dangereuses,
    date_effet_avenant,
    salaire_brut_embauche,

    date_début_annee_un,
    date_fin_annee_un,
    pourcentage_annee_un,
    type_remuneration_annee_un,

    date_début_annee_un_changement_tranche_age,
    date_fin_annee_un_changement_tranche_age,
    pourcentage_annee_un_changement_tranche_age,
    type_remuneration_annee_un_changement_tranche_age,

    date_début_annee_deux,
    date_fin_annee_deux,
    pourcentage_annee_deux,
    type_remuneration_annee_deux,

    date_début_annee_deux_changement_tranche_age,
    date_fin_annee_deux_changement_tranche_age,
    ourcentage_annee_deux_changement_tranche_age,
    type_remuneration_annee_deux_changement_tranche_age,

    date_début_annee_trois,
    date_fin_annee_trois,
    pourcentage_annee_trois,
    type_remuneration_annee_trois,

    date_début_annee_trois_changement_tranche_age,
    date_fin_annee_trois_changement_tranche_age,
    ourcentage_annee_trois_changement_tranche_age,
    type_remuneration_annee_trois_changement_tranche_age,

    date_début_annee_quatre,
    date_fin_annee_quatre,
    pourcentage_annee_quatre,
    type_remuneration_annee_quatre,

    date_début_annee_quatre_changement_tranche_age,
    date_fin_annee_quatre_changement_tranche_age,
    pourcentage_annee_quatre_changement_tranche_age,
    type_remuneration_annee_quatre_changement_tranche_age,

    nourriture,
    logement,
    autres
  ) {
    this.mode_contractuel = mode_contractuel;
    this.type_de_contrat = type_de_contrat;
    this.type_de_derogation = type_de_derogation;
    this.numero_contrat_precedent = numero_contrat_precedent;
    this.date_conclusion = date_conclusion;
    this.date_debut_execution_contrat = date_debut_execution_contrat;
    this.date_fin_contrat = date_fin_contrat;
    this.duree_hebdomadaire_travail_heures = duree_hebdomadaire_travail_heures;
    this.duree_hebdomadaire_travail_minutes =
      duree_hebdomadaire_travail_minutes;
    this.travail_sur_machines_dangereuses = travail_sur_machines_dangereuses;
    this.date_effet_avenant = date_effet_avenant;
    this.salaire_brut_embauche = salaire_brut_embauche;
    this.date_début_annee_un = date_début_annee_un;
    this.date_fin_annee_un = date_fin_annee_un;
    this.pourcentage_annee_un = pourcentage_annee_un;
    this.type_remuneration_annee_un = type_remuneration_annee_un;
    this.date_début_annee_un_changement_tranche_age =
      date_début_annee_un_changement_tranche_age;
    this.date_fin_annee_un_changement_tranche_age =
      date_fin_annee_un_changement_tranche_age;
    this.pourcentage_annee_un_changement_tranche_age =
      pourcentage_annee_un_changement_tranche_age;
    this.type_remuneration_annee_un_changement_tranche_age =
      type_remuneration_annee_un_changement_tranche_age;
    this.date_début_annee_deux = date_début_annee_deux;
    this.date_fin_annee_deux = date_fin_annee_deux;
    this.pourcentage_annee_deux = pourcentage_annee_deux;
    this.type_remuneration_annee_deux = type_remuneration_annee_deux;
    this.date_début_annee_deux_changement_tranche_age =
      date_début_annee_deux_changement_tranche_age;
    this.date_fin_annee_deux_changement_tranche_age =
      date_fin_annee_deux_changement_tranche_age;
    this.ourcentage_annee_deux_changement_tranche_age =
      ourcentage_annee_deux_changement_tranche_age;
    this.type_remuneration_annee_deux_changement_tranche_age =
      type_remuneration_annee_deux_changement_tranche_age;
    this.date_début_annee_trois = date_début_annee_trois;
    this.date_fin_annee_trois = date_fin_annee_trois;
    this.pourcentage_annee_trois = pourcentage_annee_trois;
    this.type_remuneration_annee_trois = type_remuneration_annee_trois;
    this.date_début_annee_trois_changement_tranche_age =
      date_début_annee_trois_changement_tranche_age;
    this.date_fin_annee_trois_changement_tranche_age =
      date_fin_annee_trois_changement_tranche_age;
    this.ourcentage_annee_trois_changement_tranche_age =
      ourcentage_annee_trois_changement_tranche_age;
    this.type_remuneration_annee_trois_changement_tranche_age =
      type_remuneration_annee_trois_changement_tranche_age;
    this.date_début_annee_quatre = date_début_annee_quatre;
    this.date_fin_annee_quatre = date_fin_annee_quatre;
    this.pourcentage_annee_quatre = pourcentage_annee_quatre;
    this.type_remuneration_annee_quatre = type_remuneration_annee_quatre;
    this.date_début_annee_quatre_changement_tranche_age =
      date_début_annee_quatre_changement_tranche_age;
    this.date_fin_annee_quatre_changement_tranche_age =
      date_fin_annee_quatre_changement_tranche_age;
    this.pourcentage_annee_quatre_changement_tranche_age =
      pourcentage_annee_quatre_changement_tranche_age;
    this.type_remuneration_annee_quatre_changement_tranche_age =
      type_remuneration_annee_quatre_changement_tranche_age;
    this.nourriture = nourriture;
    this.logement = logement;
    this.autres = autres;
    this.identifiantContrat = null;
  }

  modifieIdentifiantContrat(identifiantContrat) {
    this.identifiantContrat = identifiantContrat;
  }
}
