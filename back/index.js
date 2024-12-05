import express from "express";
import router from "./router.js";
import cors from "cors";
const app = express();

app.use(router);
app.use(cors({ origin: ["http://localhost:5173"] }));

const serverPort = 3310;

const naturiste = {
	naturist_sites_in_france: [
		{
			id: 1,
			name: "Cap d'Agde Naturist Village",
			location: {
				city: "Agde",
				region: "Occitanie",
				country: "France",
			},
			features: ["Plage naturiste", "Commerces", "Restaurants", "Vie nocturne"],
			website: "https://www.capdagde.com",
			rating: 4.6,
			type: "Village naturiste",
		},
		{
			id: 2,
			name: "Euronat Naturist Resort",
			location: {
				city: "Grayan-et-l'Hôpital",
				region: "Nouvelle-Aquitaine",
				country: "France",
			},
			features: ["Forêt de pins", "Piscine chauffée", "Plage naturiste"],
			website: "https://www.euronat.fr",
			rating: 4.8,
			type: "Domaine naturiste",
		},
		{
			id: 3,
			name: "La Jenny Naturist Resort",
			location: {
				city: "Le Porge",
				region: "Nouvelle-Aquitaine",
				country: "France",
			},
			features: ["Golf naturiste", "Piscine", "Plage naturiste"],
			website: "https://www.lajenny.fr",
			rating: 4.5,
			type: "Village vacances",
		},
		{
			id: 4,
			name: "Domaine Naturiste La Genèse",
			location: {
				city: "Méjannes-le-Clap",
				region: "Occitanie",
				country: "France",
			},
			features: ["Rivière", "Randonnée", "Animations familiales"],
			website: "https://www.genese.fr",
			rating: 4.3,
			type: "Domaine naturiste",
		},
		{
			id: 5,
			name: "Domaine de Beauzyzy",
			location: {
				city: "Bedoin",
				region: "Provence-Alpes-Côte d'Azur",
				country: "France",
			},
			features: ["Vue sur le Mont Ventoux", "Spa", "Piscine"],
			website: "https://www.belezy.com",
			rating: 4.7,
			type: "Village naturiste",
		},
		{
			id: 6,
			name: "Arnaoutchot Naturist Center",
			location: {
				city: "Vielle-Saint-Girons",
				region: "Nouvelle-Aquitaine",
				country: "France",
			},
			features: ["Plage", "Animations", "Centre de bien-être"],
			website: "https://www.arna.com",
			rating: 4.6,
			type: "Camping naturiste",
		},
		{
			id: 7,
			name: "Riva Bella Naturist Resort",
			location: {
				city: "Aléria",
				region: "Corse",
				country: "France",
			},
			features: ["Plage naturiste", "Spa", "Yoga"],
			website: "https://www.naturisme-rivabella.com",
			rating: 4.4,
			type: "Village vacances",
		},
		{
			id: 8,
			name: "Le Sérignan Plage Nature",
			location: {
				city: "Sérignan",
				region: "Occitanie",
				country: "France",
			},
			features: ["Piscine lagon", "Accès plage", "Espace bien-être"],
			website: "https://www.leserignanplage.com",
			rating: 4.7,
			type: "Camping naturiste",
		},
		{
			id: 9,
			name: "Centre Naturiste Héliomonde",
			location: {
				city: "Saint-Chéron",
				region: "Île-de-France",
				country: "France",
			},
			features: ["Sauna", "Hammam", "Forêt naturiste"],
			website: "https://www.heliomonde.fr",
			rating: 4.2,
			type: "Village naturiste",
		},
		{
			id: 10,
			name: "La Sablière",
			location: {
				city: "Saint-Privat-de-Champclos",
				region: "Occitanie",
				country: "France",
			},
			features: ["Vallée naturiste", "Piscine", "Animations familiales"],
			website: "https://www.lasabliere.com",
			rating: 4.5,
			type: "Domaine naturiste",
		},
		{
			id: 11,
			name: "Le Domaine des Lauzons",
			location: {
				city: "Forcalquier",
				region: "Provence-Alpes-Côte d'Azur",
				country: "France",
			},
			features: ["Piscine chauffée", "Randonnée", "Vue montagne"],
			website: "https://www.leslauzons.com",
			rating: 4.3,
			type: "Camping naturiste",
		},
		{
			id: 12,
			name: "Village Naturiste de Montalivet",
			location: {
				city: "Vendays-Montalivet",
				region: "Nouvelle-Aquitaine",
				country: "France",
			},
			features: ["Plage naturiste", "Marché local", "Piscine"],
			website: "https://www.montalivet.com",
			rating: 4.7,
			type: "Village naturiste",
		},
		{
			id: 13,
			name: "Naturist Domaine du Petit Arlane",
			location: {
				city: "Valensole",
				region: "Provence-Alpes-Côte d'Azur",
				country: "France",
			},
			features: ["Piscine", "Lavande", "Calme et sérénité"],
			website: "https://www.petitarlane.com",
			rating: 4.4,
			type: "Domaine naturiste",
		},
		{
			id: 14,
			name: "Centre Naturiste Les Manoques",
			location: {
				city: "Valeilles",
				region: "Occitanie",
				country: "France",
			},
			features: ["Camping familial", "Piscine", "Aire de jeux"],
			website: "https://www.lesmanoques.com",
			rating: 4.2,
			type: "Camping naturiste",
		},
		{
			id: 15,
			name: "Camping Naturiste Le Clos Barrat",
			location: {
				city: "Sérignac",
				region: "Occitanie",
				country: "France",
			},
			features: ["Forêt", "Calme", "Ambiance conviviale"],
			website: "https://www.closbarrat.com",
			rating: 4.3,
			type: "Camping naturiste",
		},
		{
			id: 16,
			name: "Camping Naturiste Les Eglantiers",
			location: {
				city: "Héliopolis",
				region: "Provence-Alpes-Côte d'Azur",
				country: "France",
			},
			features: ["Île naturiste", "Ambiance relaxante", "Activités aquatiques"],
			website: "https://www.eglantier.com",
			rating: 4.5,
			type: "Camping naturiste",
		},
		{
			id: 17,
			name: "Centre Naturiste La Grande Cosse",
			location: {
				city: "Fleury",
				region: "Occitanie",
				country: "France",
			},
			features: ["Plage", "Réserve naturelle", "Ambiance familiale"],
			website: "https://www.grandecosse.com",
			rating: 4.4,
			type: "Camping naturiste",
		},
		{
			id: 18,
			name: "Domaine Naturiste La Tuquette",
			location: {
				city: "Callas",
				region: "Provence-Alpes-Côte d'Azur",
				country: "France",
			},
			features: ["Piscine", "Gîtes naturistes", "Randonnée"],
			website: "https://www.latuquette.com",
			rating: 4.6,
			type: "Domaine naturiste",
		},
		{
			id: 19,
			name: "La Clapère Naturiste",
			location: {
				city: "Maureillas-las-Illas",
				region: "Occitanie",
				country: "France",
			},
			features: ["Cadre naturel", "Piscine", "Ambiance tranquille"],
			website: "https://www.laclapere.com",
			rating: 4.5,
			type: "Camping naturiste",
		},
		{
			id: 20,
			name: "Le Camping Naturiste Les Lauzons",
			location: {
				city: "Limans",
				region: "Provence-Alpes-Côte d'Azur",
				country: "France",
			},
			features: ["Piscine chauffée", "Ateliers bien-être", "Nature préservée"],
			website: "https://www.campingleslauzons.com",
			rating: 4.3,
			type: "Camping naturiste",
		},
		{
			id: 21,
			name: "Camping Le Colombier",
			location: {
				city: "Saint-Martin-Lars-en-Sainte-Hermine",
				region: "Pays de la Loire",
				country: "France",
			},
			features: ["Piscine naturelle", "Calme", "Camping familial"],
			website: "https://www.lecolombier.com",
			rating: 4.5,
			type: "Camping naturiste",
		},
		{
			id: 22,
			name: "Domaine Naturiste Le Couderc",
			location: {
				city: "Naussannes",
				region: "Nouvelle-Aquitaine",
				country: "France",
			},
			features: [
				"Ambiance conviviale",
				"Piscine chauffée",
				"Activités familiales",
			],
			website: "https://www.lecouderc.com",
			rating: 4.6,
			type: "Domaine naturiste",
		},
		{
			id: 23,
			name: "Village Naturiste Club Oasis",
			location: {
				city: "Leucate",
				region: "Occitanie",
				country: "France",
			},
			features: ["Plage privée", "Sports nautiques", "Vie communautaire"],
			website: "https://www.cluboasis.com",
			rating: 4.7,
			type: "Village naturiste",
		},
		{
			id: 24,
			name: "Camping Naturiste Deveze",
			location: {
				city: "Gaudonville",
				region: "Occitanie",
				country: "France",
			},
			features: ["Ambiance rurale", "Piscine", "Marche en forêt"],
			website: "https://www.campingdeveze.com",
			rating: 4.3,
			type: "Camping naturiste",
		},
		{
			id: 25,
			name: "Naturist Resort Le Village du Bosc",
			location: {
				city: "Nébian",
				region: "Occitanie",
				country: "France",
			},
			features: ["Détente", "Piscine", "Randonnées"],
			website: "https://www.villagedubosc.com",
			rating: 4.6,
			type: "Village naturiste",
		},
		{
			id: 26,
			name: "Naturist Resort La Belle Paire",
			location: {
				city: "Bas-Loche",
				region: "Occitanie",
				country: "France",
			},
			features: ["Détente", "Piscine", "Randonnées"],
			website: "https://fr.wikipedia.org/wiki/Montcuq",
			rating: 10,
			type: "Village naturiste",
		},
	],
};

app.get("/naturiste", (req, res) => {
	res.json(naturiste);
});

app.listen(serverPort, () => {
	console.info(`SERVER STARTED : Listening on port ${serverPort}`);
});
