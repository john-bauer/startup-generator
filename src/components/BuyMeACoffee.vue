<template>
  <a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/johnbauer">
    <link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet">
    <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy John a coffee">
    <span style="margin-left:5px">Buy me a coffee</span>
  </a>
</template>

<script>
export default {
  name: 'BuyMeACoffee'
}
</script>


<style scoped>
.bmc-button>span {
  font-family:'Cookie', cursive !important;
}
.bmc-button img {
  width: 27px !important;
  margin-bottom: 1px !important;
  box-shadow: none !important;
  order: none !important;
  vertical-align: middle !important;
  }.bmc-button{line-height: 36px !important;
  height:37px !important;
  text-decoration: none !important;
  display:inline-flex !important;
  color: #D1D5DB !important;
  border-radius: 3px !important;
  border: 1px solid #6B7280 !important;
  padding: 1px 9px !important;
  font-size: 23px !important;
  letter-spacing:0.6px !important;
  margin: 0 auto !important;
  -webkit-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -o-transition: 0.3s all linear !important;
  -webkit-transition: 0.3s all linear !important;
  -moz-transition: 0.3s all linear !important;
  -ms-transition: 0.3s all linear !important;
  transition: 0.3s all linear !important;
}
.bmc-button:hover, .bmc-button:active, .bmc-button:focus {
  text-decoration: none !important;
  opacity: 0.85 !important;
  color:#F3F4F6 !important;
  border-color: #F3F4F6 !important
}
</style>