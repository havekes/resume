<template>
  <div id="app" class="pb-16" v-if="content">
    <div class="container px-16 m-auto my-4 text-right link print-hidden">
      <span v-if="language == 'en'" @click="setLanguage('fr')">
        Francais
        <FaIcon icon="globe" class="ml-1" />
      </span>
      <span v-if="language == 'fr'" @click="setLanguage('en')">
        English
        <FaIcon icon="globe" class="ml-1" />
      </span>
    </div>

    <Header :info="content.info" />

    <div class="container px-16 m-auto">
      <Section :title="summary.title" class="mt-8">
        <p class="text-justify">{{ summary.content }}</p>
      </Section>

      <div class="flex flex-wrap mt-8">
        <Section :title="projects.title" class="w-2/3 pr-4">
          <Experience
            v-for="e in projects.items"
            :key="e.title"
            :title="e.title"
            :date="e.date"
            :description="e.description"
          >
            <ul>
              <li v-for="t in e.tasks" :key="t">{{ t }}</li>
            </ul>
          </Experience>
        </Section>

        <Section :title="skills.title" class="w-1/3 pl-4">
          <SkillCategory v-for="c in skills.categories" :key="c.name" :title="c.name">
            <Skill
              v-for="s in c.skills"
              :key="s.name"
              :name="s.name"
              :description="s.description"
              :level="s.level"
            ></Skill>
          </SkillCategory>
        </Section>
      </div>

      <Section :title="work.title" class="w-full page-break">
        <Experience
          v-for="e in work.items"
          :key="e.title"
          :title="e.title"
          :date="e.date"
          :description="e.description"
        >
          <ul>
            <li v-for="t in e.tasks" :key="t">{{ t }}</li>
          </ul>
        </Experience>
      </Section>

      <Section :title="school.title" class="w-full">
        <Experience
          v-for="e in school.items"
          :key="e.title"
          :title="e.title"
          :date="e.date"
          :description="e.description"
        >{{ e.content }}</Experience>
      </Section>

      <div class="mt-6 text-center print-hidden">
        <a href="https://github.com/havekes/resume" class="link">
          <FaIcon :icon="['fab', 'github']" class="mr-2" />Source
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Section from '@/components/Section.vue'
import Experience from '@/components/Experience.vue'
import Skill from '@/components/Skill/Skill.vue'
import SkillCategory from '@/components/Skill/SkillCategory.vue'

const axios = require('axios')

export default {
  name: 'App',
  components: {
    Header,
    Section,
    Experience,
    Skill,
    SkillCategory,
  },
  data() {
    return {
      language: 'en',
      userInfo: {
        name: 'Grégoire Havekes',
        email: 'greg@havek.es',
        phone: '438-522-1988',
        address: 'Montréal, QC',
        website: 'greg.havek.es',
      },
      content: undefined,
    }
  },
  computed: {
    summary() {
      return this.content.sections.summary
    },
    projects() {
      return this.content.sections.projects
    },
    skills() {
      return this.content.sections.skills
    },
    work() {
      return this.content.sections.work
    },
    school() {
      return this.content.sections.school
    },
  },
  methods: {
    loadContent() {
      let url = 'cv_' + this.language + '.json'
      axios.get(url).then(response => {
        this.content = response.data
      })
    },
    setLanguage(lang) {
      this.language = lang
      this.loadContent()
    },
  },
  created() {
    this.loadContent()
  },
}
</script>
