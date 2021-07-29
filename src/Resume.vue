<template>
  <div v-if="content">
    <div class="container px-4 py-2 m-auto text-right md:py-4 md:px-16 link print-hidden">
      <span v-if="language == 'en'" @click="setLanguage('fr')">
        Français
        <FaIcon icon="globe" class="ml-1" />
      </span>
      <span v-if="language == 'fr'" @click="setLanguage('en')">
        English
        <FaIcon icon="globe" class="ml-1" />
      </span>
    </div>

    <Header :info="content.info" />

    <div class="container px-4 py-2 m-auto space-y-2 md:py-8 md:px-16 md:space-y-8">
      <Section :title="summary.title">
        <p class="text-justify">{{ summary.content }}</p>
      </Section>

      <div class="md:flex md:space-x-6">
        <Section :title="projects.title" class="md:w-2/3">
          <Experience
            v-for="e in projects.items"
            :key="e.title"
            :title="e.title"
            :date="e.date"
            :description="e.description"
            :tasks="e.tasks"
          />
        </Section>

        <Section :title="skills.title" class="md:w-1/3">
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
          :tasks="e.tasks"
        />
      </Section>

      <Section :title="school.title" class="w-full">
        <Experience
          v-for="e in school.items"
          :key="e.title"
          :title="e.title"
          :date="e.date"
          :description="e.description"
          :certificate="e.certificate"
        >
          <template v-slot:default>
            {{ e.content }}
          </template>
          <template v-slot:certificate>
            {{ school.certificate }}
          </template>
        </Experience>
      </Section>

      <div class="text-center print-hidden">
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
      let url = 'resume_' + this.language + '.json'
      fetch(url)
        .then(response => response.json())
        .then(data => (this.content = data))
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
