<template>
  <div id="app" class="p-8 container m-auto">
    <Header :info="userInfo" />
    <div class="flex">
      <div class="flex flex-col w-2/3">
        <p>Test</p>
      </div>
      <div class="flex flex-col w-1/3">
        <div>
          <h3>Backend</h3>
          <Skill name="Python" description="Django" :level="100" class="w-full"></Skill>
          <Skill name="PHP" description="Symfony" :level="100" class="w-full"></Skill>
          <Skill name="Java" description="Spring Boot" :level="60" class="w-full"></Skill>
          <Skill name="Node.js" :level="50" class="w-full"></Skill>
          <Skill name="Go" :level="30" class="w-full"></Skill>
          <Skill name="C#" description="ASP.NET" :level="30" class="w-full"></Skill>
        </div>
        <div>
          <h3>Frontend</h3>
          <Skill name="Vue.js" :level="75" class="w-full"></Skill>
          <Skill name="Angular" :level="60" class="w-full"></Skill>
        </div>
        <div>
          <h3>Tools</h3>
          <Skill name="Docker" :level="75" class="w-full"></Skill>
          <Skill name="Ansible" :level="60" class="w-full"></Skill>
          <Skill name="Nginx" :level="60" class="w-full"></Skill>
        </div>
        <div>
          <h3>Other</h3>
          <Skill name="C/C++" :level="50" class="w-full"></Skill>
          <Skill name="QML" :level="20" class="w-full"></Skill>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Skill from '@/components/Skill.vue'

export default {
  name: 'App',
  components: {
    Header,
    Skill,
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
