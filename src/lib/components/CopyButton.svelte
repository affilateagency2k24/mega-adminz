<script>
	import CopyClipBoard from "./CopyClipBoard.svelte";

	export let name;

	const copy = () => {
		const app = new CopyClipBoard({
			target: document.getElementById("clipboard"),
			props: { name },
		});
		app.$destroy();
	};
</script>

<span
	class="copy-with-tooltip"
	on:click={copy}
	style="opacity: 40%; padding:0px 5px"
>
	<span class="toooltip">copy</span>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		height="16px"
		viewBox="0 0 24 24"
		width="16px"
		fill="#000000"
		><path d="M0 0h24v24H0V0z" fill="none" /><path
			d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
		/></svg
	>
</span>

<div id="clipboard"></div>

<style>
	span:hover {
		opacity: 80%;
	}
	.copy-with-tooltip {
		position: relative;
		display: inline-block;
	}

	.copy-with-tooltip .toooltip {
		visibility: hidden;
		background-color: black;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 2px 6px;
		margin-left: 20px;
		font-size: 12px;
		/* Position the copy-with-tooltip */
		position: absolute;
		z-index: 1;
		cursor: pointer;
	}

	.copy-with-tooltip:hover .toooltip {
		visibility: visible;
	}
</style>
