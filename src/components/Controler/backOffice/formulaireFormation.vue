<template>
  <header class="titreFormulaireFacturier">
    <h5>Formulaire Formation</h5>
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
        <span class="detailFacturier">Dénomination de l'établissement</span>
        <input type="text" v-model="etablissement" />
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Numéro SIRET</span>
        <input
          id="inputSiret"
          type="text"
          v-model="siret"
          pattern="^[0-9]{14}$"
          placeholder="obligatoire"
          required
        />
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">N° UAI du CFA</span>
        <input
          id="inputEffectif"
          type="text"
          v-model="uai_cfa"
          pattern="^[0-9]{7}[a-zA-Z]$"
          placeholder="obligatoire"
          required
        />
      </div>

      <div class="inputBoxFacturier">
        <span class="detailFacturier">Adresse</span>
        <input type="text" v-model="adresse" minlength="1" maxlength="50" />
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Complément d'adresse</span>
        <input
          type="text"
          v-model="complement_adresse"
          minlength="1"
          maxlength="155"
        />
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Code postal</span>
        <input type="text" v-model="code_postal" minlength="1" maxlength="5" />
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier">Commune</span>
        <input type="text" v-model="commune" minlength="1" maxlength="80" />
      </div>

      <div class="inputBoxFacturier">
        <span class="detailFacturier">Type de diplome</span>
        <select v-model="type_diplome" required>
          <optgroup label="Dipl&ocirc;me ou titre de niveau bac +5 et plus">
            <option :value="80" label="Doctorat"></option>
            <option :value="71" label="Master professionnel/DESS"></option>
            <option :value="72" label="Master recherche/DEA"></option>
            <option :value="73" label="Master indifférencié"></option>
            <option
              :value="74"
              label="Dipl&ocirc;me d'ingénieur, dipl&ocirc;me d'école de commerce"
            ></option>
            <option
              :value="79"
              label="Autre dipl&ocirc;me ou titre de niveau bac+5 ou plus"
            ></option>
          </optgroup>
          <optgroup label="Dipl&ocirc;me ou titre de niveau bac +3 et 4 ">
            <option :value="61" label="1ère année de Master"></option>
            <option :value="62" label="Licence professionnelle"></option>
            <option :value="63" label="Licence générale"></option>
            <option
              :value="69"
              label="Autre dipl&ocirc;me ou titre de niveau bac +3 ou 4"
            ></option>
          </optgroup>
          <optgroup label="Dipl&ocirc;me ou titre de niveau bac +2">
            <option :value="54" label="Brevet de Technicien Supérieur"></option>
            <option
              :value="55"
              label="Dipl&ocirc;me Universitaire de technologie"
            ></option>
            <option
              :value="58"
              label="Autre dipl&ocirc;me ou titre de niveau bac+2"
            ></option>
          </optgroup>
          <optgroup label="Dipl&ocirc;me ou titre de niveau bac">
            <option :value="41" label="Baccalauréat professionnel"></option>
            <option :value="42" label="Baccalauréat général"></option>
            <option :value="43" label="Baccalauréat technologique"></option>
            <option
              :value="49"
              label="Autre dipl&ocirc;me ou titre de niveau bac"
            ></option>
          </optgroup>
          <optgroup label="Dipl&ocirc;me ou titre de niveau CAP/BEP">
            <option :value="33" label="CAP"></option>
            <option :value="34" label="BEP"></option>
            <option :value="35" label="Mention complémentaire"></option>
            <option
              :value="38"
              label="Autre dipl&ocirc;me ou titre de niveau CAP/BEP"
            ></option>
          </optgroup>
          <optgroup label="Aucun dipl&ocirc;me ni titre">
            <option
              :value="25"
              label="Dipl&ocirc;me national du Brevet"
            ></option>
            <option
              :value="26"
              label="Certificat de formation générale"
            ></option>
            <option
              :value="13"
              label="Aucun dipl&ocirc;me ni titre professionnel"
            ></option>
          </optgroup>
        </select>
      </div>
      <div class="inputBoxFacturier">
        <span class="detailFacturier"
          >Code diplome (Code du diplôme ou titre visé par l'Alternant, basé sur
          le référentiel France Compétences)</span
        >
        <input type="text" v-model="code_diplome" maxlength="8" required />
      </div>

      <div class="inputBoxFacturier">
        <span class="detailFacturier">Intitulé précis</span>
        <input
          type="text"
          v-model="intitule_precis"
          minlength="1"
          maxlength="255"
          required
        />
      </div>

      <div class="inputBoxFacturier">
        <span class="detailFacturier">Date de début du cycle de formation</span>
        <input
          id="dateNaissanceApprenti"
          type="date"
          :value="debut_cycle_formation"
          required
        />
      </div>

      <div class="inputBoxFacturier">
        <span class="detailFacturier">Date de fin du cycle de formation</span>
        <input
          id="dateNaissanceApprenti"
          type="date"
          :value="fin_cycle_formation"
          required
        />
      </div>

      <div class="inputBoxFacturier">
        <div class="inputBoxFacturier">
          <span class="detailFacturier">Durée de la formation en heures </span>
          <input
            type="number"
            v-model="duree_formation_heures"
            step="0.5"
            required
          />
        </div>
      </div>

      <div class="inputBoxFacturier">
        <span class="detailFacturier">CFA d'entreprise </span>
        <input type="checkbox" v-model="cfa_entreprise_booleen" required />
      </div>

      <div class="inputBoxFacturier">
        <span class="detailFacturier"
          >Code RNCP (Qualification public visée numéro RNCP du diplôme ou titre
          visé par l'Alternant )</span
        >
        <input
          type="text"
          v-model="code_rncp"
          minlength="1"
          maxlength="9"
          required
        />
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
import Formation from '@/components/Model/EmployeurJS.Class';
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
      afficheEmployeurPublic: true,
      siret: '',
      uai_cfa: '',
      type_diplome: '',
      code_diplome: '',
      debut_cycle_formation: '',
      fin_cycle_formation: '',
      etablissement: '',
      adresse: '',
      complement_adresse: '',
      code_postal: '',
      commune: '',
      intitule_precis: '',
      duree_formation_heures: '',
      cfa_entreprise_booleen: '',
      code_rncp: '',
    };
  },
  methods: {
    async rentrerEmployeurBDD(event) {
      console.log(this.$data.nom_de_naissance);

      let formation = new Formation(
        this.$data.siret,
        this.$data.uai_cfa,
        this.$data.type_diplome,
        this.$data.code_diplome,
        this.$data.debut_cycle_formation,
        this.$data.fin_cycle_formation,
        this.$data.etablissement,
        this.$data.adresse,
        this.$data.complement_adresse,
        this.$data.code_postal,
        this.$data.commune,
        this.$data.intitule_precis,
        this.$data.duree_formation_heures,
        this.$data.cfa_entreprise_booleen,
        this.$data.code_rncp
      );

      let JSON = creationJSONService.methods.construitJSON(formation);
      let URL = construitURLService.methods.construitURLConnectionBack(
        configuration.data().collections.formation,
        configuration.data().urlPossibles.ajouter
      );
      //Reservation case mémoire de la BDD
      let reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
      if (reponseBDD.code_reponse !== 0) {
        alert('erreur : ' + reponseBDD.Error_info);
      } else {
        formation.modifieIdentifiantApprenti(
          reponseBDD.extra_info.identifiantApprenti
        );
        JSON = creationJSONService.methods.construitJSON(formation);
        //Modification de la case mémoire et ajout de l'formation en BDD
        URL = construitURLService.methods.construitURLConnectionBack(
          configuration.data().collections.formation,
          configuration.data().urlPossibles.modifier
        );
        reponseBDD = await connexionAPIService.methods.requete(URL, JSON);
        if (reponseBDD.code_reponse !== 0) {
          alert('erreur : ' + reponseBDD.Error_info);
        } else {
          this.$emit('remetEtatInitial', event);
          alert('formation ajouté en base de données');
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

#formulaire {
  width: 90%;
}
</style>

/* A faire : -formater l'uai_cfa -formater l'email -formater le type d'formation
-formater l'formation spécifique -formater le code NAF -formater le code IDCC
-formater la convention collective -formater l'formation public -formater
l'adhésion de l'formation au régime spécifique d'assurance chômage -rajouter si
les mentions sont obligatoires */ Suggestions : -prévoir d'utiliser une API pour
rentrer des données géographiques -prévoir d'utiliser une API pour rentrer des
données d'entreprise -faire une validation des données afin de vérifier quelles
sont bien dans le bon format */
