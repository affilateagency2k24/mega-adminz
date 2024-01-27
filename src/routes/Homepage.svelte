<script>
  import ClickdetailsWrap from "$lib/components/ClickdetailsWrap.svelte";
    import DetailsSummary from "$lib/components/DetailsSummary.svelte";

  var domain1 = "megabucks.cam";
  var domain2 = "megafun.pro";
  var domain3 = "megaper2nals.xyz";
  var domain4 = "megaperqnals.com";
  var domain5 = "megastar.pro";
</script>

<!-- <DashboardInfo/> -->
<div class="summary-container">
  <DetailsSummary/>
</div>
<div class="card-container">
  <div class="card-box">
    <ClickdetailsWrap domain={domain1} />
  </div>
  <div class="card-box">
    <ClickdetailsWrap domain={domain2} />
  </div>
  <div class="card-box">
    <ClickdetailsWrap domain={domain3} />
  </div>
  <div class="card-box">
    <ClickdetailsWrap domain={domain4} />
  </div>
  <div class="card-box">
    <ClickdetailsWrap domain={domain5} />
  </div>
</div>

<style>
  .card-container {
    padding: 8px 8px;
    display: grid;
    gap:16px;
    place-items: center;
  }
  .card-box {
    overflow-x: auto;
    border-radius: 8px;
    background-color: white;
    max-width: 600px;
    width: 100%;
  }
  .card-box {
    white-space: nowrap;
  }

  .card-box::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  .card-box::-webkit-scrollbar-thumb {
    background-color: #4c52a1;
}
.card-box:hover::-webkit-scrollbar-thumb {
    background-color: #4c52a1;
}

.card-box::-webkit-scrollbar-track {
    background-color: transparent;
}
</style>
