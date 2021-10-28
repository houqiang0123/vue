<template>
  <div class=""></div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["getCount"]),
  },
  watch: {},

  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped></style>
