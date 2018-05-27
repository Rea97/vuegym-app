<template>
  <section class="hero is-info welcome is-small">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hello, {{ user }}.
        </h1>
          <h2 id="dashboard-welcome-phrase" class="subtitle animated">
            {{ messageOfTheDay }}
          </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DashboardWelcome',
  props: {
    /**
     * Name of the user the messages are destined.
     */
    user: {
      type: String,
      required: true,
    },
    /**
     * Interval in seconds between each change of the message.
     */
    changeInterval: {
      type: Number,
      default: 5,
    },
    /**
     * Array with a list of phrases to display.
     */
    phrases: {
      type: Array,
      required: true,
    },
    /**
     * Name of the animation class that will be toggled.
     */
    animationClass: {
      type: String,
    },
    /**
     * Time in seconds the animation will be removed between each data change.
     */
    animationTimeout: {
      type: Number,
      default: 1,
    },
  },
  created() {
    if (!this.phrases) {
      throw new Error('You must provide a resource of phrases.');
    }

    this.messages = this.phrases;
    this.messageOfTheDay = this.messages[0];
    this.getMessageOfTheDay();
  },
  data() {
    return {
      messageOfTheDay: '',
      messages: [],
    };
  },
  methods: {
    getMessageOfTheDay() {
      setInterval(() => {
        const possibleMessages = this.messages.filter(message => message !== this.messageOfTheDay);
        this.messageOfTheDay = possibleMessages[
          Math.floor(Math.random() * possibleMessages.length)
        ];
      }, this.changeInterval * 1000);
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars,object-shorthand,func-names
    messageOfTheDay: function (newValue) {
      if (!this.animationClass) {
        return;
      }
      document.getElementById('dashboard-welcome-phrase').classList.add(this.animationClass);
      setTimeout(() => {
        document.getElementById('dashboard-welcome-phrase').classList.remove(this.animationClass);
      }, this.animationTimeout * 1000);
    },
  },
};
</script>

<style scoped>

</style>
