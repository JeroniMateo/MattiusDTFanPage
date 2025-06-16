<template>
  <div id="form-sended" class="subscription">
    <div class="form-sended-content">
      <div class="brand-content align-items-center">
        <img class="logo" src="../../assets/img/logo.webp" alt="timeinn-logo"/>
        <p class="m-0 fs-1"><b>Xayona</b></p>
      </div>
      <div class="subscription-info">
        <p class="p-form-sended">Compra realizada</p>
        <img class="img-check" src="../../assets/img/Yes_Check_Circle.webp" alt="">
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Confirmation"
}
</script>

<style scoped>
.form-sended-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 36vw;
  height: auto;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  text-align: center;
}

.brand-content {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
}

.logo{
  width: 100px;
  margin-right: 15px;
}

.subscription-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.p-form-sended{
  font-size: 24px;
  color: black;
}

.img-check{
  width: 100px;
  margin-top: 15px;
}

.subscription {
  display: none;
  align-items: center;
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; /* Enable scroll if needed */
  backdrop-filter: blur(6px); /* blur effect for the overlay! */
}
</style>