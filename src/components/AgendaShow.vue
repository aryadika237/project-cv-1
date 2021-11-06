<template>
  <div class="col-md-5">
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">PROFILE</h4>
        <hr />
      </div>
      <div class="card-body">
        <h6>Name</h6>
        <p>Calvin Sheeran</p>
        <h6>DATE OF BIRTH</h6>
        <p>12 December 1988</p>
        <h6>ADDRESS</h6>
        <p>
          Hope of life street 108 Apartment Future 12th floor South Jakarta
          Indonesia
        </p>
        <h6>WEBSITE</h6>
        <p>calvinsheeran.com</p>
        <h4>AWARDS</h4>
        <hr />
        <h6>CREATIVE AWARDS 2012</h6>
        <p>Openminded.org</p>
        <h6>INTERFACE DESIGN 2013</h6>
        <p>Collideas.com</p>
        <h4>CONTACT</h4>
        <hr />
        <h6>HOME NUMBER &#9743;</h6>
        <p>(0411) 123 456</p>
        <h6>PHONE NUMBER &#128222;</h6>
        <p>0821 945 123 456</p>
        <h6>EMAIL &#9993;</h6>
        <p>Youremail@gmail.com</p>
        <h4>SOCIAL</h4>
        <hr />
        <h6>TWITTER &#116;</h6>
        <p>@Calvin_sheeran</p>
        <h6>FACEBOOK &#102;</h6>
        <p>Calvin_sheeran</p>
        <tbody>
          <tr v-for="(row, index) in agenda" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ row.hari }}</td>
            <td>{{ row.kegiatan }}</td>
            <td>{{ row.harga }}</td>
            <td></td>
          </tr>
        </tbody>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  nama: "AgendaShow",
  computed: {
    agenda() {
      return this.$store.state.listAgenda;
    },
  },
};
</script>
<style>
h4 {
  text-align: right;
}
p {
  text-align: right;
}
h6 {
  text-align: right;
}
</style>
