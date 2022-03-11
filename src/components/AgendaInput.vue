<style>
body {
  background-color: rgb(53, 230, 230);
  border-radius: 1px;
  position: relative;
  border: 2px;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}
.p2 {
  margin: 10px;
  padding: 80px;
  border-radius: 1px;
  position: relative;
  left: 200px;
  background-color: aqua;
  size: 100%;
  width: 600px;
  color: black;
}
.p3 {
  text-align: center;
}
.lane1 {
  color: black;
  text-align: center;
}
.h {
  color: black;
}
img {
  width: 440px;
  height: 350px;
}
ul {
  list-style-type: none;
}
</style>
 <template>
  <body>
    <div class="p2">
      <h2 class="lane1"><strong>Biografi</strong></h2>
      <hr class="h" />
      <img
        class="lane2"
        src="https://awsimages.detik.net.id/community/media/visual/2020/10/16/kimetsu-no-yaiba-movie-demon-slayer-1_169.jpeg?w=700&q=90"
      />
      <hr class="h" />
      <div class="p3">
        <center>
          <h3><strong>Contact :</strong></h3>
          <hr />
          <p>
            <b>Name : </b><br />
            Arya Dika Handi Saputra
          </p>
          <p>
            <b>Address:</b><br />
            Jl.Prigi Rt 07 Rw 06 Mranggen, Demak
          </p>
          <p>
            <b>Phone:</b><br />
            +62 831 0213 2052
          </p>
          <b>Email:</b><br />
          <u>aryadika@smkbinusademak.sch.id</u><br /><br />
          <b>Linkedln:</b><br />
          <u>linkedin.com/aryadika</u><br /><br />

          <h3>
            <strong>Languages :</strong>
            <hr class="h" />
          </h3>

          English - C2 <br />
          Japan - A1 <br />
          Indonesian - A2 <br /><br />

          <h3>
            <strong>Hobbies :</strong>
            <hr class="h" />
          </h3>
          <ul>
            <li>Adventure</li>
            <li>Programer</li>
            <li>Listen to Sing</li>
            <li>Design</li>
          </ul>

          <h3><strong>Skill Highlights :</strong></h3>
          <br />

          <hr class="h" />
          <ul>
            <span>
              <li>Project management</li>
              <li>Creative design</li>
              <li>Frontend Devoloper</li>
            </span>
          </ul>

          <hr class="h" />
          <p>
            PHP framework (certificate):
            <b>Zend, Codeigniter, Symfony.</b> Programming languages:
          </p>
          <div>HTML5, Java, JavaScript, CSS</div>
        </center>
      </div>
    </div>
  </body>
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
