<template>
  <div id="app" class="p-8 container m-auto">
    <Header :info="userInfo" />
    <Category title="Sommaire">
      <p class="text-justify">
        Passionné par la programmation depuis mon plus jeune âge, je suis autodidacte et j’ai réalisé plusieurs projets
        personnels et professionnels. Je suis consciencieux, je dispose d’un sens aigu du détail et mes compétences sont
        diversifiés. Même si je n’ai pas encore complété mon baccalauréat en génie logiciel, je cherche à utiliser mon
        expérience acquise au cours des dernières années et travailler sur des projets de plus grande envergure.
      </p>
    </Category>

    <div class="flex flex-wrap">
      <Category title="Projets" class="w-2/3 pr-4">
        <Experience title="Contrails" date="Depuis 2020">
          <template slot="description">Application de gestion d'extensions pour un simulateur de vol</template>
          <ul>
            <li>Backend Go, PostgreSQL</li>
            <li>Frontend Vue.js, Electron</li>
            <li>Configuration de serveurs avec Ansible, Docker, Nginx</li>
          </ul>
        </Experience>

        <Experience title="Administration de serveurs" date="Depuis 2018">
          <template slot="description">Configuration de réseau personnel</template>
          <ul>
            <li>Firewall pfSense, serveur FreeNAS et OpenVPN</li>
            <li>Configuration d'applications dans un environement Docker</li>
          </ul>
        </Experience>

        <Experience title="Simstatus" date="2018 - 2019">
          <template slot="description">Application de gestion d'extensions pour un simulateur de vol</template>
          <ul>
            <li>Backend Django, frontend Angular</li>
            <li>Configuration d’un serveur avec Docker, Nginx et PostgreSQL</li>
          </ul>
        </Experience>

        <Experience title="Away stats" date="2014 - 2016">
          <template slot="description">Site web pour statistiques des joueurs de World of Tanks</template>
          <ul>
            <li>Backend PHP, Symfony</li>
            <li>Frontend JavaScript, JQuery</li>
          </ul>
        </Experience>
      </Category>

      <Category title="Compétences" class="w-1/3 pl-4">
        <SkillCategory title="Backend">
          <Skill name="Python" description="Django" :level="100" />
          <Skill name="PHP" description="Symfony" :level="100" />
          <Skill name="Java" description="Spring Boot" :level="60" />
          <Skill name="Node.js" :level="50" />
          <Skill name="Go" :level="30" />
          <Skill name="C#" description="ASP.NET" :level="30" />
        </SkillCategory>
        <SkillCategory title="Frontend">
          <Skill name="Vue.js" :level="75" />
          <Skill name="Angular" :level="60" />
        </SkillCategory>
        <SkillCategory title="Outils">
          <Skill name="Docker" :level="75" />
          <Skill name="Ansible" :level="60" />
          <Skill name="Nginx" :level="60" />
        </SkillCategory>
        <SkillCategory title="Autres">
          <Skill name="C/C++" :level="50" />
          <Skill name="QML" :level="20" />
        </SkillCategory>
      </Category>

      <Category title="Expériences de travail" class="w-2/3 pr-4">
        <Experience title="Programmeur" date="Depuis 2019">
          <template slot="description">Optimum Informatique, Montréal, QC</template>
          <ul>
            <li>Application web avec Angular, Spring Boot</li>
            <li>Configuration de serveurs Linux</li>
            <li>Déploiement d’applications avec Ansible</li>
            <li>Formations sur Angular et Docker pour les membres de mon équipe</li>
            <li>Communiquer avec les clients et répondre à leurs demandes de support</li>
          </ul>
        </Experience>

        <Experience title="Équipier d'étage" date="Mai - août 2019">
          <template slot="description">Hôtel Delta par Marriott, Montréal, QC</template>
          <ul>
            <li>Répondre aux demandes des clients</li>
            <li>Communiquer avec le département de l’entretien ménager</li>
          </ul>
        </Experience>

        <Experience title="Équipier entretien ménager" date="2018 - 2019">
          <template slot="description">Hôtel Sheraton, Laval, QC</template>
          <ul>
            <li>Approvisionner les réserves des étages en linge</li>
            <li>Porter les bagages pour les clients et répondre à leurs demandes</li>
            <li>Communiquer avec le département de l’entretien ménager</li>
          </ul>
        </Experience>
      </Category>

      <Category title="Formations" class="w-2/3 pr-4">
        <Experience title="Baccalauréat en informatique et génie logiciel" date="Depuis 2018">
          <template slot="description">Université du Québec à Montréal, QC</template>
        </Experience>

        <Experience title="Baccalauréat en génie électrique" date="2015 - 2017">
          <template slot="description">Polytechnique Montréal, QC</template>
          Réorientation pour poursuivre ma passion pour la programmation
        </Experience>

        <Experience title="Baccalauréat scientifique" date="2012 - 2015">
          <template slot="description">Lycée Sacré-Coeur, Yssingeaux, France</template>
          Spécialité physique-chimie
        </Experience>
      </Category>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Category from '@/components/Category.vue'
import Experience from '@/components/Experience.vue'
import Skill from '@/components/Skill/Skill.vue'
import SkillCategory from '@/components/Skill/SkillCategory.vue'

export default {
  name: 'App',
  components: {
    Header,
    Category,
    Experience,
    Skill,
    SkillCategory,
  },
  data() {
    return {
      userInfo: {
        name: 'Grégoire Havekes',
        email: 'greg@havek.es',
        phone: '438-522-1988',
        address: 'Montréal, QC',
        website: 'greg.havek.es',
      },
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir Next', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
