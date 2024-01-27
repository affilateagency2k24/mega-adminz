<script>
  import { clicksList, user } from "$lib/stores/user-store";
  import ClickDetails from "./ClickDetails.svelte";

  import HackDetails from "./HackDetails.svelte";

  export let domain;
  export let path="users/auth/login";



  $: linkclicks = $clicksList.filter((c)=>c.hostname.includes(domain))

  $: console.log("linkclicks", linkclicks);
</script>

<div class="col-list">
  <HackDetails {domain} {path} />
  <div class="separator"></div>
  <ClickDetails clicks={linkclicks} />
</div>

<style>
  .separator {
    width: 100%;
    height: 1px;
  }
  .col-list {
    display: flex;
    flex-direction: column;
  }
</style>
