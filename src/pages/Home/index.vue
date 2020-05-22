<template>
  <div class="container">
    <Header />
    <b-table class="mb" :data="data" hoverable :loading="loading">
      <template slot-scope="props">
        <b-table-column label="Nome">{{ props.row.name }}</b-table-column>
        <b-table-column label="URL">{{ props.row.url }}</b-table-column>
      </template>
    </b-table>
    <b-pagination
      class="mb"
      @change="changePage"
      :total="total"
      :per-page="perPage"
      :current="currentPage"
      icon-prev="chevron-left"
      icon-next="chevron-right"
    ></b-pagination>
  </div>
</template>

<script>
import Header from '@/components/Header/index.vue';
import pokemonService from '@/services/pokemonService';

export default {
  name: 'Home',
  components: { Header },
  data() {
    return {
      loading: false,
      data: [],
      currentPage: 1,
      total: 0,
      perPage: 20,
    };
  },
  methods: {
    async getPokemons(page = 0) {
      try {
        this.loading = true;
        const { data } = await pokemonService.getPokemons({ page: this.currentPage - 1, limit: this.perPage });
        const { count, results } = data;
        this.total = count;
        this.data = results;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    changePage(currentPage) {
      this.currentPage = currentPage;
      this.getPokemons();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  created() {
    this.getPokemons();
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.mb {
  margin-bottom: 20px;
}
</style>
