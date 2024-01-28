<script>
  import CopyButton from "./CopyButton.svelte";
  import DeviceIcon from "./DeviceIcon.svelte";
  import WebIcon from "./icons/WebIcon.svelte";
  import HackData from "./HackData.svelte";


  import { hacksList, user } from "$lib/stores/user-store";


  export let domain;
  export let path;


  $: hacks = $hacksList.filter((e)=>{
    console.log('$hacksList.filter',e)
    e.hostname.includes(domain)
  });
  $: latesthacks = hacks.filter((el) => el.timestamp > $user.lastChecked);



</script>

<div class="item">
  <span class="left">
    <span class="text bolded">{domain}</span>
    <span class="text suffix">/{path} </span>
    <CopyButton name={`${domain}/${path}?t=${$user.ref}`} />
  </span>
  <div class="meta">
    <div class="oneline">
      {#if latesthacks.length > 0}
        <div style="padding-right:10px;">
          <span class="label label-default mdc-typography--subtitle"
            >new {latesthacks.length}</span
          >
        </div>
      {/if}
      <div class="mdc-typography--headline6 smpadding">{hacks.length}</div>
    </div>
  </div>
</div>


<style>

  .bolded {
    font-weight: 600;
    color: #545353;
    font-size: 15px;
  }
  .left {
    padding: 8px 6px 8px 16px;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .suffix {
    font-size: 10px;
    padding: 2px 4px 0 2px;
    border-radius: 3px;
    /* border: 1px solid rgb(181 151 151); */
  }

  .item {
    display: flex;
    justify-content: space-between;
    padding-right: 16px;
    padding-top: 6px;
  }
  .meta {
    display: flex;
  }
  .oneline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .label-default {
    background-color: red;
  }

  .label {
    display: flex;
    padding: 0.2em 0.35em 0.23em;
    font-size: 90%;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    border-radius: 0.25em;
  }

  .notification {
    background-color: #555;
    color: white;
    display: flex;
    align-items: center;
    gap: 2px;
    border-radius: 3px;
    padding-right: 2px;
  }

  .notification:hover {
    background: rgb(7, 7, 7);
  }

  .smpadding {
    padding: 0px 6px;
  }
</style>
