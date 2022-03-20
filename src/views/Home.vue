<template>
  <div class="home">
    <h1>Font Awesome <span class="smaller">By Salah Bedeiwi</span></h1>
    <p>Call Solid laptop-code Icon: <FontAwesome icon="laptop-code" /></p>
    <p>Call Solid Coffe Icon: <FontAwesome icon="coffee" /></p>
    <p>
      Call Solid angle-double-left Icon:
      <FontAwesome icon="angle-double-left" />
    </p>
    <p>Call Solid User Icon: <FontAwesome :icon="['fas', 'user']" /></p>
    <p>Call Solid Anchor Icon: <FontAwesome icon="anchor" /></p>
    <p>Call Solid Anchor Icon: <FontAwesome :icon="['fas', 'anchor']" /></p>
    <hr />
    <p>Call Reg. User Icon: <FontAwesome :icon="['far', 'user']" /></p>
    <p>
      Call Reg. calendar-alt Icon:
      <FontAwesome :icon="['far', 'calendar-alt']" />
    </p>
    <hr />
    <p>
      Call Facebook Messenger Icon:
      <FontAwesome :icon="['fab', 'facebook-messenger']" />
    </p>
    <p>Call Twitter Icon: <FontAwesome :icon="['fab', 'twitter']" /></p>
    <p>Call Youtube Icon: <FontAwesome :icon="['fab', 'youtube']" /></p>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
h1 {
  background-color: cadetblue;
  padding: 10px;
  margin-top: 0;
  margin-bottom: 10px;
  color: white;
}
.smaller {
  font-size: 0.85rem;
}
</style>
