let blogs = [
    {
      pealkiri: 'Uudis 1',
      lyhikokkuvote:`Ööl vastu 24. veebruari teatas Venemaa liider Vladimir Putin sissetungist Ukrainasse.
        Vene väed alustasid pealetungi nii põhjast, idast kui lõunast. Postimees kajastab 33. sõjapäeva sündmusi allolevas blogis.`,
      pilt:'https://creativereview.imgix.net/content/uploads/2012/02/p503_0.jpg?auto=compress,format&q=60&w=569&h=837',
      viide: 'https://maailm.postimees.ee/7485749/33-sojapaev-istanbulis-algab-tana-labiraakimiste-uus-voor#_ga=2.188807851.1451968098.1648460248-324479376.1648460247',
    },
    {
      pealkiri: 'Uudis 2',
      lyhikokkuvote:`Nafta hind kukkus järsult, kuna Covid-19 puhangu tõttu on pool Shanghai linna karmide
        liikumispiirangute mõju all ja see lööb kütuse nõudlust.`,
      pilt:'https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      viide: 'https://investor.postimees.ee/7487114/nafta-hind-kukkus-jarsult#_ga=2.144235445.1451968098.1648460248-324479376.1648460247',
    },
    {
      pealkiri: 'Uudis 3',
      lyhikokkuvote:`Oscarite auhinnagalal andis parima dokumentaalfilmi Oscari üle koomik Chris Rock. Enne auhinna üle andmist tegi Rock veidi nalja, kuid üks nali lõppes sellega, et Will Smith läks talle otse-eetris kallale.`,
      pilt:'https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg',
      viide: 'https://elu24.postimees.ee/7486994/will-smith-muutus-oscarite-otse-eetris-abikaasa-kulul-tehtud-nalja-parast-vagivaldseks#_ga=2.180491943.1451968098.1648460248-324479376.1648460247',
    },
  ];
  
  for (let i = 0; i < blogs.length; i++) {
    uudisedElement.innerHTML += `
    <div class="uudis">
    <img src= ${uudised[i]}
    
    
    `