<template>
    <div>
      <button @click="launchFoodIngestModal" class="button is-primary is-small">
        Add ingest
      </button>
      <b-modal :active.sync="addIngestModalIsActive">
        <form>
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">What did you eat?</p>
            </header>
            <section class="modal-card-body">
              <b-field label="Select a food">
                <b-autocomplete
                  v-model="ingest.food.name"
                  placeholder="e.g. Burger"
                  :data="filteredDataObj"
                  field="name"
                  @select="option => Object.assign(ingest.food, option)">
                  <template slot="header">
                    <a @click="showAddFood">
                      <span> Add new... </span>
                    </a>
                  </template>
                </b-autocomplete>
              </b-field>
              <b-field label="Portion">
                <b-input
                  v-model="ingest.portion"
                  type="number"
                  :value="ingest.portion"
                  required>
                </b-input>
              </b-field>
            </section>
            <footer class="modal-card-foot">
              <button class="button" type="button" @click="closeFoodIngestModal">
                Close
              </button>
              <button class="button is-primary">Login</button>
            </footer>
          </div>
        </form>
      </b-modal>
    </div>
</template>

<script>
export default {
  name: 'AddFoodIngest',
  data() {
    return {
      addIngestModalIsActive: false,
      // foods: ['burger', 'pizza'],
      foods: [
        { id: 1, name: 'Burger', portion: 200 },
        { id: 2, name: 'Pizza' },
        { id: 3, name: 'Cheesecake' },
        { id: 4, name: 'Omelet' },
      ],
      ingest: {
        food: {
          name: '',
        },
        portion: 0,
      },
    };
  },
  computed: {
    filteredDataObj() {
      return this.foods.filter(food => food
        .name
        .toString()
        .toLowerCase()
        .indexOf(this.ingest.food.name.toLowerCase()) >= 0,
      );
    },
  },
  methods: {
    launchFoodIngestModal() {
      this.addIngestModalIsActive = true;
    },
    closeFoodIngestModal() {
      this.addIngestModalIsActive = false;
    },
    showAddFood() {
      this.$dialog.prompt({
        message: `Food`,
        inputAttrs: {
          placeholder: 'e.g. Watermelon',
          maxlength: 20,
          value: this.ingest.food.name,
        },
        confirmText: 'Add',
        onConfirm: (value) => {
          this.foods.push(value);
          this.$refs.autocomplete.setSelected(value);
        },
      });
    },
  },
};
</script>

<style scoped>

</style>
