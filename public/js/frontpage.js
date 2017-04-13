var headerLinks = {
  props: ['message', 'active', 'isactive', 'notactive', 'clicked', 'baseurl', 'current'],
  methods: {
    getBaseUrl(base, pathname) {
      return base + pathname;
    }
  },
  template: `<a
      :href="getBaseUrl(baseurl,message.path)"
      @focus="isactive(message)"
      @mouseenter="isactive(message, this)"
      @mouseleave="notactive(this.location.pathname)"
      @blur="notactive(this.location.pathname)"
      @click="!current && clicked"
      v-bind:class="
        [(message.name === active) ? 'Header__linkContainer--active' : '', 
        current && 'Header__linkContainer--current',
        'Header__linkContainer']"
    >
      <i v-bind:class="['fa', message.icon]" aria-hidden="true"></i>{{ message.name }}
    </a>`
};

var vueApp = new Vue({
  el: '#app',
  data: {
   text: 'Hello World!',
   active: "",
   scrollDown: false,
   path: this.location.pathname,
   messages: [
    {
      name: "Frontpage",
      path: '/',
      icon: 'fa-home',
      subtext: 'Welcome',
    },
    {
      name: "About",
      path: '/introducing-himself/',
      icon: 'fa-info',
      subtext: 'Hello, my name is Gudmundur Mar. Nice to meet you',
    },
    {
      name: "Resumé",
      path: "/working/",
      icon: 'fa-file-text',
      subtext: "I've worked as a frontend developer for a few years for a flight search company, but also worked quite a bit with kids. Recently been enabling surgeons to control images in the surgical operating room hands free."
    },
    {
      name: "Projects",
      path: "/practicing/",
      icon: 'fa-briefcase',
      subtext: "I really like to learn new things. So I'll put stuff I'm testing or what I'm doing here.",
    },
    {
      name: "Thoughts",
      path: "/thinking/",
      icon: 'fa-cloud',
      subtext: "Sometimes I like to doze off and think a little bit about life. I might right down my thoughts here.",
    }
   ]
  },
  components: {
    'header-links': headerLinks,
  },
  methods: {
    isactive(message, bla) {
      this.path = message.path;
      this.active = message.name;
    },
    notactive(fullpath) {
      this.active = "";
      this.path = fullpath
    },
    clicked(e) {
      this.active = message.name;
    }
  }
});


document.body.onscroll = function() {
  var currentScrollPosition = window.pageYOffset;
  if (currentScrollPosition > vueApp.scrollPosition) {
    vueApp.scrollDown = true;
  } else {
    vueApp.scrollDown = false;
  }
  vueApp.scrollPosition = currentScrollPosition;
}