<script lang="ts">
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

    import type { PageData } from "./$types";

	export let data: PageData;

	$: ({ pets } = data);

	import { _urlFor } from "./+page";

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>

		{#if pets && pets.length}
		<ul>
		  {#each pets as pet}
			<li>{pet.name}</li>
			<img src={_urlFor(pet.image).width(200).url()} alt="{pet.name} image." />

		  {/each}
		</ul>
		{:else}
			<p>No pets found.</p>
		{/if}

		{#if pets && pets.length}
		<pre>
		{JSON.stringify(pets, null, 2)}
		</pre>
		{:else}
		<p>Your data will show up here when you've configured everything correctly</p>
		{/if}

	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
