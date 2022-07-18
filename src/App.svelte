<script>
	import { Router, Link, Route } from "svelte-navigator";
	import { onMount } from "svelte";
	import { sortBy } from './stores.js';
	import Helper from "./helper.js";
	import Settings from "./routes/Settings.svelte";
	import TilesContainer from "./components/TilesContainer.svelte";
	
	//die Parameter um anhand der Server-Daten die richtigen Texte und CSS-Klassen zu laden
	const param = [
		{ idx: 1, class: 'verylow', text: 'Es besteht sehr geringe Gefahr eines Waldbrands.' },
		{ idx: 2, class: 'low', text: 'Es besteht geringe Gefahr eines Waldbrands.' },
		{ idx: 3, class: 'middle', text: 'Es besteht mittlere Gefahr eines Waldbrands.' },
		{ idx: 4, class: 'high', text: 'Es besteht hohe Gefahr eines Waldbrands.' },
		{ idx: 5, class: 'veryhigh', text: 'Es besteht sehr hohe Gefahr eines Waldbrands.' },
	];

	//Helfer-Klasse wird instantiiert.
	let helper = new Helper();

	//Definition des Endpoints
	const endpoint = "https://tl4.l0e.de/";

	//Deklarieren der Variablen für die späteren Arrays
	let data = []; //enthält das gesamte JSON-Array
	let bundesLandKeys = []; //enthält später die Schlüssel(=Namen) der Bundesländer
		
	//Hier werden die Daten vom Server geladen und erste Funktion für die Array-Aufbereitung ausgeführt
	onMount(async () => {
		const res = await fetch(endpoint);
		data = await res.json();
		data = helper.rebuildArray(data); //Array wird für unsere Zwecke umgebaut
		data = helper.sortDataByOrtAZ(data);
		bundesLandKeys = helper.bundeslandKeys;
	});

	//reagieren auf das Änderungen von der Einstellungseite
    sortBy.subscribe((value) => {
        if(value == 'name') data = helper.sortDataByOrtAZ(data);
		else data = helper.sortDataByIndexDesc(data);
    });	

</script>

<!-- Das Modul svelte-navigator unterstützt beim Routing -->
<Router primary={false}>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<Link to="/" class="logo"><img src="favicon.png" alt="logo" /> Brandgefahr-Index</Link>
			<div class="collapse navbar-collapse" id="navbarCollapse">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<Link to="/">Übersicht</Link>
					</li>
					<li class="nav-item">
						<Link to="/settings">Einstellungen</Link>
					</li>
				</ul>
			</div>
		</nav>
	</header>
	
	<main>
		<Route path="/">
			<TilesContainer {data} {param} {bundesLandKeys} />
		</Route>

		<Route path="settings">
			<Settings />
		</Route>
	</main>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.fixed-top {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		z-index: 1030;
	}

	:global(a:visited), :global(a){
		color: white !important;
		text-decoration: none !important;
	}

	:global(a:hover){
		color: white !important;
		text-decoration: underline !important;
	}

	:global(.navbar) {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		color: white;
		padding: 1rem !important;
	}

	:global(.logo), :global(.logo:hover) {
		margin-right: 5rem !important;
		font-size: 1.2rem;
		font-weight: bold;
		text-decoration: none !important;
	}

	:global(.navbar li) {
		margin-right: 3rem !important;
	}

	:global(header) {
		margin-bottom: 4rem;
	}

	img{
		height: 2rem;
		width: 2rem;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
