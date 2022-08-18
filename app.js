const app = Vue.createApp({
  data() {
    return {
      alert: 'This is alert when you click button',
      output1: 'OUTPUT',
      output2: 'OUTPUT'
    }
  },
  methods: {
    alertButton() {
      alert(this.alert);
    },
    setOutput1(event) {
      // event.preventDefault();
      this.output1 = event.target.value;
    },
    setOutput2(event) {
      this.output2 = event.target.value;
    }
  }
});

app.mount("#event-practise");