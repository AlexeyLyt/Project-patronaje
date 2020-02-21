<template>
  <div class="first-section">
    <b-container class="container-fs" lg>
      <header>
        <h2>Security and compliance at the core</h2>
      </header>
      <section class="about-us">
        <div>
          <article class="content">
            <h2 class="content-uppercaseTitle">Comprehensive security</h2>
            <p class="content-text">Data security is of utmost importance to Stripe. We invest heavily in securing our infrastructure in close partnership with world-class security experts.</p>
            <p class="content-a">
              <a href="#" class="content-link">Security at Stripe</a>
            </p>
          </article>
          <figure>
            <ul>
              <li>All card numbers are encrypted on disk with AES-256. Decryption keys are stored on separate machines.</li>
              <li>Stripe’s infrastructure for storing, decrypting, and transmitting card numbers runs in separate hosting infrastructure, and doesn’t share any credentials with Stripe’s primary services.</li>
            </ul>
          </figure>
        </div>
      </section>
      <section class="about-us">

      </section>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  components: {},
  data() {
    return {

    };
  },
  methods: {
      
  },
  created() {
    //   setInterval(function(){ 
    //     console.log(1);
    // }, 1000);
  }
};
</script>

<style lang="scss">
.first-section {
  font-family: 'Nunito', sans-serif;
  position: relative;
  margin-top: 120px;
  .container-fs {
    header {
      max-width: 450px;
      text-align: left;
      @media (min-width: 670px) {
        padding-bottom: 60px;
      }
      h2 {
        font-size: 42px;
        line-height: 52px;
      }
    }
    .about-us div {
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 60px 0;
      }
    }
  }
}

.about-us > div {
  display: flex;
  flex-direction: column;
  @media (min-width: 670px) {
    flex-direction: row;
  }
}
</style>
