<template>
  <header class="titreFormulaireFacturier">
    <h5>Formulaire Attestation</h5>
    <a
      target="_blank"
      href="https://www.formulaires.service-public.fr/gf/getNotice.do?cerfaNotice=51649&cerfaFormulaire=10103"
      style="font-weight: bold"
      >Aide pour remplir le formulaire</a
    >
    <!--En attendant de pouvoir implémenter correctement les enums-->
  </header>
  <form class="formulaire">
    <div class="detailEmployeur">
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Attestation </span>
        <input type="checkbox" v-model="attestation_booleen" required />
      </div>

      <div class="inputBoxFacturier">
        <span class="detailFacturier">Fait à</span>
        <input type="text" v-model="fait_a" required />
      </div>
      <bouton-base
        class="BoutonBaseRecherche"
        intituleBouton="effacer"
        v-on:click="this.effacerFormulaire"
      ></bouton-base>
      <bouton-base
        class="BoutonBaseRecherche"
        intituleBouton="ajouter"
        v-on:click="this.rentrerEmployeurBDD"
      ></bouton-base>
    </div>
  </form>
</template>

<script>
import BoutonBase from '@/components/Controler/elementsHTML/bouton/BoutonBase.vue';
import construitURLService from '@/services/construitURL.service.vue';
import Attestation from '@/components/Model/EmployeurJS.Class';
import creationJSONService from '@/services/creationJSON.service.vue';
import configuration from '@/administration/configuration.vue';
import connexionAPIService from '@/services/connexionAPI.service.vue';

export default {
  name: 'formulaireEmployeur',
  components: {
    BoutonBase,
  },

  data() {
    return {
      attestation_booleen: false,
      fait_a: '',
    };
  },
  methods: {
    async rentrerEmployeurBDD(event) {
      console.log(this.$data);

      let attestation = new Attestation(
        this.$data.attestation_booleen,
        this.$data.fait_a
      );

      let JSON = creationJSONService.methods.construitJSON(attestation);
      let URL = construitURLService.methods.construitURLConnectionBack(
        configuration.data().collections.attestation,
        configuration.data().urlPossibles.ajouter
      );
      //Reservation case mémoire de la BDD
      let reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
      if (reponseBDD.code_reponse !== 0) {
        alert('erreur : ' + reponseBDD.Error_info);
      } else {
        attestation.modifieIdentifiantApprenti(
          reponseBDD.extra_info.identifiantApprenti
        );
        JSON = creationJSONService.methods.construitJSON(attestation);
        //Modification de la case mémoire et ajout de l'attestation en BDD
        URL = construitURLService.methods.construitURLConnectionBack(
          configuration.data().collections.attestation,
          configuration.data().urlPossibles.modifier
        );
        reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
        if (reponseBDD.code_reponse !== 0) {
          alert('erreur : ' + reponseBDD.Error_info);
        } else {
          this.$emit('remetEtatInitial', event);
          alert('attestation ajouté en base de données');
        }
      }
    },
    async effacerFormulaire() {
      for (let valeur of document.getElementsByClassName('detailEmployeur')[0]
        .children) {
        /*console.log(valeur.lastChild.value);*/
        valeur.lastChild.value = '';
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

/*section{
      display: flex;
      padding: 10px;
    }*/

.detailEmployeur {
  width: 100%;
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /*grid-template-columns: repeat(5, 1fr);
        grid-gap: 0.2rem 0.5rem;*/
  box-shadow: 0px 5px 5px -5px;
  justify-content: flex-start;
  align-items: flex-start;
}

.detailEmployeurMineur {
  width: 90%;
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.2rem 0.5rem;
  box-shadow: 0px 5px 5px -5px;
}

.etudiantMineur {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.detailEmployeurMineur .etudiantMineur div {
  margin: auto;
}

.etudiantMineur:last-child {
  max-width: content-box;
  border-radius: 5px;
  padding: 10px;
  background: white;
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.2rem 0.5rem;
}

.ligneHorizontaleFormulaire {
  margin: 1em;
  height: 3px;
  background: linear-gradient(#e66465, #9198e5);
  width: 95%;
}

.titreFormulaireFacturier {
  text-align: center;
}

.inputBoxFacturier {
  display: flex;
  flex-direction: column;
  margin-right: auto;
  width: inherit;
  flex-basis: 20%;
  margin-right: 1%;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 1%;
  align-items: flex-start;
  justify-content: center;
}

select {
  width: inherit;
}

option {
  data-width: 100%;
}
</style>

/* A faire : -formater l'uai_cfa -formater l'email -formater le type
d'attestation -formater l'attestation spécifique -formater le code NAF -formater
le code IDCC -formater la convention collective -formater l'attestation public
-formater l'adhésion de l'attestation au régime spécifique d'assurance chômage
-rajouter si les mentions sont obligatoires */ Suggestions : -prévoir d'utiliser
une API pour rentrer des données géographiques -prévoir d'utiliser une API pour
rentrer des données d'entreprise -faire une validation des données afin de
vérifier quelles sont bien dans le bon format */
