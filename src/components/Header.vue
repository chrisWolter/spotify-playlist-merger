<template>
  <div class="header text-center">
    <h1 class="headline">Spotify Playlist Merger</h1>
  </div>
</template>

<style lang="sass" scoped>
.header
    height: 150px
    line-height: 150px
    background-color: #1DB954
    color: white

.headline
    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    font-weight: bold

@media only screen and (max-width: 767px)
    .header
        height: 75px
        line-height: 75px
    .headline
        font-size: 24px
</style>
