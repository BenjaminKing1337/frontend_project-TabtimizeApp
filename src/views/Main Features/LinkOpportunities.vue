<template>
  <div id="backlinkEngine">
    <div class="flex" id="balance">
      <div class="balancedivs">Registered Pages</div>
      <div class="balancedivs">Analysis Balance</div>
    </div>
    <div id="pagelist">List area</div>
  </div>
</template>

<script>
export default {
    
 };
</script>

<style lang="scss" scoped>
.balancedivs {
  max-width: 500px;
  height: 200px;
  background-color: white;
}

.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>