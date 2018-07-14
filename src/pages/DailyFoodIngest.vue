<template>
  <div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link to="/home">Dashboard</router-link></li>
        <li class="is-active"><a href="#" aria-current="page">Daily food ingest</a></li>
      </ul>
    </nav>
    <div class="columns">
      <div class="column is-3">
        <div class="tile notification widget is-primary">
          <div class="widget-icon">
            <i class="fa fa-list is-pulled-left"></i>
          </div>
          <div class="widget-content is-pulled-right">
            <span class="widget-count is-pulled-right">1200 kcal</span>
            <span class="widget-detail">Ingeridas hoy</span>
          </div>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <div class="panel">
          <div class="panel-heading">
            Latest food ingested
            <div class="is-pulled-right">
              <add-food-ingest></add-food-ingest>
            </div>
          </div>
          <div class="panel-block">
            <div class="columns">
              <div class="column">
                <b-table :data="data" :columns="columns"></b-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddFoodIngest from '@/components/AddFoodIngest';

export default {
  name: 'DailyFoodIngest',
  components: {
    AddFoodIngest,
  },
  data() {
    return {
      data: [
        { id: 1, first_name: 'Jesse', last_name: 'Simmons', date: '2016-10-15 13:43:27', gender: 'Male' },
        { id: 2, first_name: 'John', last_name: 'Jacobs', date: '2016-12-15 06:00:53', gender: 'Male' },
        { id: 3, first_name: 'Tina', last_name: 'Gilbert', date: '2016-04-26 06:26:28', gender: 'Female' },
        { id: 4, first_name: 'Clarence', last_name: 'Flores', date: '2016-04-10 10:28:46', gender: 'Male' },
        { id: 5, first_name: 'Anne', last_name: 'Lee', date: '2016-12-06 14:38:38', gender: 'Female' },
      ],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '40',
          numeric: true,
        },
        {
          field: 'first_name',
          label: 'First Name',
        },
        {
          field: 'last_name',
          label: 'Last Name',
        },
        {
          field: 'date',
          label: 'Date',
          centered: true,
        },
        {
          field: 'gender',
          label: 'Gender',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
