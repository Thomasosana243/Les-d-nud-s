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
      Capacity: 69,
      type: "Village naturiste",
      image:
        "https://images.midilibre.fr/api/v1/images/view/636a76c056f14202144060e8/large/image.jpg?v=1",
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
      Capacity: 69,
      type: "Domaine naturiste",
      image:
        "https://i0.wp.com/www.euronat.com/wp-content/uploads/2022/03/Bien-etre.jpg?resize=1024%2C683",
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
      Capacity: 69,
      type: "Village vacances",
      image:
        "https://i0.wp.com/www.lajenny.fr/wp-content/uploads/2020/09/EB1A5413-e1600708395753-600x400.jpg",
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
      Capacity: 69,
      type: "Domaine naturiste",
      image:
        "https://www.lagenese.com/wp-content/uploads/sites/49/2024/01/RIVIERE-PH1.jpg",
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
      Capacity: 69,
      type: "Village naturiste",
      image:
        "https://cdn0.mariages.net/vendor/7084/3_2/960/jpg/dsc01283_3_327084-172375785393376.webp",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://www.arna.com/images/arna/espace-aquatique/photo-arnaoutchot-04.jpg",
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
      Capacity: 69,
      type: "Village vacances",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/268428313.jpg?k=aca030734793dfc4ece9fbe2ed9c9ef2860760b8073caa5160dad93dc9b5dfbf&o=&hp=1",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://www.campingfrance.com/asset/cms/700x455/155155/config/107893/image.jpg",
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
      Capacity: 69,
      type: "Village naturiste",
      image:
        "https://www.heliomonde.fr/sites/default/files/styles/slider/public/vo_satellites/fiche/slider/08_heliomonde%20%287%29_0.jpg?itok=N_zS1uj6",
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
      Capacity: 69,
      type: "Domaine naturiste",
      image:
        "https://www.hit-occitanie.com/media/hit/ois/SITRA2_CAM_6013381/images/14776720.jpg",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://www.camping-lauzons.com/assets/images/galerie-accueil/galerie/06_plaisir-fou.webp",
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
      Capacity: 69,
      type: "Village naturiste",
      image:
        "https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/327261841_8653889158019259_5123324554802571704_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=6iZrfgipAAAQ7kNvgErNW6F&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=Au0ZXNpMQJy3nv4U-3IVgB3&oh=00_AYDdfwVYVDZ9Um0RD_wj61Yd2Uksx_SGG_IbhlLz9EezfA&oe=6757BBE9",
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
      Capacity: 69,
      type: "Domaine naturiste",
      image:
        "https://www.campingdefrance.com/images/images_camping/image_camping_135_10819_1000_0.jpg",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://static.campyng.nl/photo_static/2998/c9079548-3e5c-4801-8c58-abe647951f3a-600.jpg",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://static.wixstatic.com/media/4c1113_be6e9c1bb64a45c6a69aab3a515327c9~mv2.jpg/v1/fill/w_981,h_519,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4c1113_be6e9c1bb64a45c6a69aab3a515327c9~mv2.jpg",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://cs-assets.campsited.com/accommodation_photos/303/84181/medium/camping-helio-nature-l-eglantiere-accommodation-84181-2.jpg",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/vdn_864w/2023/08/14/node_1361975/56476243/public/2023/08/14/B9734887745Z.1_20230814122130_000%2BGJIN99VAR.2-0.jpg?itok=WCmpoZib1692027147",
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
      Capacity: 69,
      type: "Domaine naturiste",
      image:
        "https://www.tuquette.com/medias/images/_mobile/emplacements/allees.jpg",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://cdn-fgdbjf.nitrocdn.com/dZFVRuelVIZbsSKirsnAVBhWGxhITFZP/assets/images/optimized/rev-caa20e4/www.odeaanaude.com/wp-content/uploads/2022/04/natlaclapere76-600x450.jpg",
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
      Capacity: 69,
      type: "Camping naturiste",
      image: "https://www.campingnaturiste.com/photo/fr/1989/1989-1.jpg",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://static.secureholiday.net/static/Pictures/210/00000019789.jpg?width=1200",
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
      Capacity: 69,
      type: "Domaine naturiste",
      image:
        "https://static.secureholiday.net/static/CMS/photos/000/074/000074661.jpg?w=1200&format=webp",
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
      Capacity: 69,
      type: "Village naturiste",
      image:
        "https://www.go-france.nl/images/id/slideshownew/542_b_00003_Baignade.webp",
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
      Capacity: 69,
      type: "Camping naturiste",
      image:
        "https://www.toocamp.com/medias/campings/medium/fr-camping-lac-du-salagou-1001711-39cd27.jpeg",
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
      Capacity: 69,
      type: "Village naturiste",
      image:
        "https://static.alanrogers.com/images/cache/campsiteimages/FR/FR3/FR34930/148435/FR34930-info-01_8a39923b1b2b.jpg",
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
      Capacity: 69,
      type: "Village naturiste",
      image:
        "https://www.naturisme-rivabella.com/images/accueil/infos-voyage-corse.webp",
    },
  ],
};

app.get("/naturiste", (req, res) => {
  res.json(naturiste);
});

app.listen(serverPort, () => {
  console.info(`SERVER STARTED : Listening on port ${serverPort}`);
});
