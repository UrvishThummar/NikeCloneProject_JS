const products = [
    {
        id: 1,
        name: "Nike Air Max 270",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png",
        description: "The Nike Air Max 270 delivers unrivaled comfort with its large Air unit. The lightweight, flexible upper provides a secure fit while the responsive cushioning gives you the energy to keep going.",
        colors: ["Black/White", "Red/Black", "Blue/White"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png"
        ]
    },
    {
        id: 2,
        name: "Nike Air Force 1 '07",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 8300,
        rating: 4.9,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png",
        description: "The Nike Air Force 1 '07 is a modern take on the classic basketball shoe. With its clean design and comfortable cushioning, it's perfect for everyday wear.",
        colors: ["White/White", "Black/Black", "Sail/White"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png"
        ]
    },
    {
        id: 3,
        name: "Nike React Infinity",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 13280,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/W+NIKE+REACTX+INFINITY+RUN+4+W.png",
        description: "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam means better cushioning under every step.",
        colors: ["Black/White", "Blue/White", "Pink/White"],
        sizes: ["5", "6", "7", "8", "9", "10", "11"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/W+NIKE+REACTX+INFINITY+RUN+4+W.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/W+NIKE+REACTX+INFINITY+RUN+4+W.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/W+NIKE+REACTX+INFINITY+RUN+4+W.png"
        ]
    },
    {
        id: 4,
        name: "Nike Air Zoom Pegasus 40",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12980,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7baf18a-e835-4487-9bde-fb4f09ff79b9/ZOOMX+VAPORFLY+NEXT%25+4.png",
        description: "The Nike Air Zoom Pegasus 40 offers a responsive ride for your everyday runs. With a lightweight design and responsive cushioning, it helps you push your pace.",
        colors: ["Black/White", "Blue/White", "Red/White"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e2a3c5f-0c4c-4c8c-8c8c-8c8c8c8c8c8c/air-zoom-pegasus-40-road-running-shoes-2Qp5nN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e2a3c5f-0c4c-4c8c-8c8c-8c8c8c8c8c8c/air-zoom-pegasus-40-road-running-shoes-2Qp5nN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e2a3c5f-0c4c-4c8c-8c8c-8c8c8c8c8c8c/air-zoom-pegasus-40-road-running-shoes-2Qp5nN.png"
        ]
    },
    {
        id: 5,
        name: "Nike SB PS8",
        category: "Skateboarding Shoes",
        type: "Shoes",
        sport: "Skateboarding",
        price: 12450,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82f23f19-8b9a-496f-a1da-5ef0560304ae/NIKE+SB+PS8.png"
    },
    {
        id: 6,
        name: "Nike Pegasus 41",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 9960,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/216eac69-96a8-4e1a-81ab-752a271d43ba/AIR+ZOOM+PEGASUS+41.png"
    },
    {
        id: 7,
        name: "Nike Blazer Mid 77",
        category: "Unisex Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 8300,
        rating: 4.7,
        image: "https://api.nike.com/customization/images/v2?vn=2&bi=edba4c80-b128-429d-9097-ba1eebed08a9&bs=1715015034593&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgSQIoAwAQABA+wKEDNA4DgOMCrAnQJMECWA1gPEDeAmwFsYwARALJCsAFACQAbgDMAVrkB7gH0BBAIgAHACEASXQEWAxdQD6AfwC5AFoCSAYYD1AfoBwAArEAm4EICZAIM8AJ4ArwBsANQA5wAwAPwAOQDqlACwAL0ZzgBuAGquGAT0AJEAHI4A4ngAlAA6AJwAqAAVAJgA-23AAMuxACcA9rEAJgBzzgCpAHQAJQBmMAATAHeuJQDwAI-TAFwAFEizAB0AvwCaAPkALAAXADMAiQA7UjVgAMH7ABECAHIAB4AyAAjJb7ADkGQAzwAFAC+YgA6V4iAAsc4AVgAqgBTADTACsAGBydyPMolABMAIAlQB545cAAyMgAa-DbAA6gDXAFtTgB0ACgjwAKVSACMAJ5IAEAWDg0SQAHYAQvOADymucAIQAJYAAwACADhNTKW2oQgA0ksIHkNgAz4LCgJcxQAW4APqYAGnnAC87nxADaygBhABQAHphQBdRLzb4ALwANlwAK7OCEAPZ4AG3tBh+g0AgAMAArNQAYoKAC4NNruY4GGQAK4AaBI6gAG4WVR4AEAAXVgABoAYi8AB4-QBzSwAKPhABoAIYcGO6gAxACIAOyxAR7gCkACp9gEAO2enofTSTgDOYAPDTQaIAeBJ1zU4JM1TYKkACmC2sUxHiaJgkAAGuuCRtAAb53XUAHejCMU5vgAJAAZTQZwtjSAAwzNgIACUmABjAAhgAxyhTV0RIAHLEgkZJyIAdYIFMowAG4AS4AbC8Uw2gAT9pUxwgAUdpOVMwCDpngAHtpABuj4ACkAGg2VDNUxFDfpP1uJhwmmAAg09eyReEcDTIgEC2P4wEDa9sQALIAY54T1rG+YT+O0gALNUAA2Aj+bQeUqKQAHdnA6HIcAAP8sU0AC1QgARg2G15nsYiuKK+ZsJ81CWKdAAyb4EpouAkEefFaQAQIAH4BIcAFKAD5TR5MAGnsNl8QhAAv1wh3iEdEL+XM-mlLhc12J8AX4xRcRATUACV5mcGMAEbhNktVNH4jpdpHPqeWCNo+QADwAXZtOQAEPcTGNFVK5KiIRq2YvF1AA3sAeSsj5KSIaEACdgESAItn2GMJAAHHneFYmZVSRksXQACq2lNABtAA9GoJptHg-Dadd6CEDqyDFSZJhJiLXCC+NgAShB9nOPc5BJ4j+NXNAmj+VC+rongPmsMQnQZRI+UFW44BHcIqSpJAOC2DAuQAA3I445BAR42oARQ6lpAx3XQnV1eFBlPWwqQklptFuAB5AQLboy5gM1Z7z2uXLbEEoFaFuSYAA-EPiMUeVC8imCaKAgA"
    },
    {
        id: 8,
        name: "Nike Free Run NN",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 8300,
        rating: 4.3,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8274be-4991-4f23-ba23-e34e4650340a/NIKE+FREE+RN+FK+NEXT+NATURE.png"
    },
    {
        id: 9,
        name: "Nike Metcon 1 OG",
        category: "Training Shoes",
        type: "Shoes",
        sport: "Training",
        price: 10790,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a7535f7-75f0-4a99-95e3-f13a002f9887/NIKE+METCON+1+OG.png"
    },
    {
        id: 10,
        name: "Nike Phantom GT",
        category: "Soccer Cleats",
        type: "Shoes",
        sport: "Soccer",
        price: 22825,
        rating: 4.9,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9618c1c4-9470-45bb-81ac-a03c6dc75e30/PHANTOM+LUNA+II+ELITE+FG.png"
    },
    {
        id: 11,
        name: "Nike Dri-FIT",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2900,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aade315f-2e63-4482-b781-5c2de36af69f/AS+M+NK+DF+TEE+RLGD+RESET.png"
    },
    {
        id: 12,
        name: "Nike Pro Shorts",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0767d63f-9b00-424f-9f4e-c457418a35d3/G+NP+DF+3IN+SHORT+SPORT+PACK.png"
    },
    {
        id: 13,
        name: "Nike Tech ",
        category: "Men's Hoodie",
        type: "Clothing",
        sport: "Lifestyle",
        price: 9130,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e0729c8-2b67-4677-ac42-e57e49d995eb/AS+M+NK+TCH+FLC+JGGR.png"
    },
    {
        id: 14,
        name: "Nike One",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b24d814-da69-4f9c-a547-aaf0a1d6ffb2/AS+W+NK+DF+ONE+HR+7%2F8+TGHT.png"
    },
    {
        id: 15,
        name: "Nike Interact Run",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 14940,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32ab21e7-069a-4f35-b2bb-5d46d40d4ea2/W+NIKE+INTERACT+RUN+EASYON.png"
    },
    {
        id: 16,
        name: "Nike Air Max 97",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 14110,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48f18af6-c29d-4e43-8319-cbc66d82ab45/W+AIR+MAX+97+FUTURA.png"
    },
    {
        id: 17,
        name: "Nike Kyrie 8",
        category: "Basketball Shoes",
        type: "Shoes",
        sport: "Basketball",
        price: 11620,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/437de71c-fd9f-471f-81da-8d0bef59e2d5/KD18+NRG+EP.png"
    },
    {
        id: 18,
        name: "Nike NBA Jersey",
        category: "Basketball Apparel",
        type: "Clothing",
        sport: "Basketball",
        price: 9130,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff811433-a53d-4fd7-8680-82f0bed9b775/DAL+MNK+DF+SWGMN+JSY+ASC+22.png"
    },
    {
        id: 19,
        name: "Nike Soccer Jersey",
        category: "Soccer Apparel",
        type: "Clothing",
        sport: "Soccer",
        price: 7470,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/750bcde7-bc01-43ba-9b08-ea4a341f82b8/LFC+M+NK+DF+JSY+SS+STAD+AW.png"
    },
    {
        id: 20,
        name: "Mercurial Superfly",
        category: "Soccer Cleats",
        type: "Shoes",
        sport: "Soccer",
        price: 22825,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88c30a26-d663-4fb2-b7a3-d456689ca404/SUPERFLY+10+CLUB+FG%2FMG.png"
    },
    {
        id: 21,
        name: "Nike LeBron 19",
        category: "Basketball Shoes",
        type: "Shoes",
        sport: "Basketball",
        price: 16600,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5713de6-8871-4951-b569-633583f9b7a4/ZM+LEBRON+NXXT+GEN+AMPD+EP.png"
    },
    {
        id: 22,
        name: "Nike Wildhorse 7",
        category: "Trail Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 10790,
        rating: 4.3,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83b27f25-1db2-46a6-ba25-bf63fbc7ee56/NIKE+PEGASUS+TRAIL+5+%28GS%29.png"
    },
    {
        id: 23,
        name: "Tiempo Legend 9",
        category: "Soccer Cleats",
        type: "Shoes",
        sport: "Soccer",
        price: 19090,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b452bda-cc90-4763-b045-6ddc3c0fc576/LEGEND+10+ELITE+FG.png"
    },
    {
        id: 24,
        name: "Nike Alphafly 3 ",
        category: "Racing Shoes",
        type: "Shoes",
        sport: "Running",
        price: 22825,
        rating: 4.9,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13b44e66-d45a-43d9-94d8-fb6922a9ff59/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png"
    },
    {
        id: 25,
        name: " Windrunner Jacket",
        category: "Men's Running Jacket",
        type: "Clothing",
        sport: "Running",
        price: 8300,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/739b6411-0e9d-458c-bf5e-04849e8bf30d/AS+M+NK+IMP+LGHT+WINDRNNER+JKT.png"
    },
    {
        id: 26,
        name: " Primary Fleece",
        category: "Men's Training Pants",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a22a839-a65c-48cc-a834-8b727b41cca1/AS+M+NK+DF+UV+PRIMARY+TPR+PANT.png"
    },
    {
        id: 27,
        name: " Dunk High Retro",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 9130,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dfbc23e2-9250-4c2a-83e6-94edb935d300/W+NIKE+DUNK+HIGH.png"
    },
    {
        id: 28,
        name: "Nike Air Huarache",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 9960,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c1c2263-cf59-4eb8-9ecc-9c1f63410c43/NIKE+AIR+HUARACHE+PRM.png"
    },
    {
        id: 29,
        name: "Nike Air Max 90",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 9960,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56583215-2f99-401c-80ff-8f20dcfc26e9/WMNS+AIR+MAX+90.png"
    },
    {
        id: 30,
        name: "Pegasus Trail 3",
        category: "Trail Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 10790,
        rating: 4.2,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f2e8e2a-576e-40d4-8270-9ac2dbdaa2c0/W+NIKE+REACTX+PEGASUS+TRAIL+5.png"
    },
    {
        id: 31,
        name: "Nike Air Jordan 1 ",
        category: "Basketball Shoes",
        type: "Shoes",
        sport: "Basketball",
        price: 9545,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/74590832-a628-49ff-a804-2ef5f1cd9e68/AIR+JORDAN+1+MID.png"
    },
    {
        id: 32,
        name: " Court Vision Low",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 5810,
        rating: 4.3,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9db3dcb1-1ffb-4c8c-9328-09b84ab583b2/W+NIKE+COURT+VISION+LO.png"
    },
    {
        id: 33,
        name: "Luka .77 PF",
        category: "Basketball Shoes",
        type: "Shoes",
        sport: "Basketball",
        price: 12450,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32af6541-5b8a-4933-8cb4-54878aa9668c/JORDAN+LUKA+.77+PF.png"
    },
    {
        id: 34,
        name: "Nike Club Fleece",
        category: "Men's Sweatpants",
        type: "Clothing",
        sport: "Lifestyle",
        price: 4565,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cbacb39-a9d2-4a87-a648-ff4cdbb20903/AS+M+NK+CLUB+FT+OVERSIZED+PO+H.png"
    },
    {
        id: 35,
        name: "Nike Zenvy Rib",
        category: "Women's Yoga Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4150,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ba7bade7-0919-482f-b004-d3805d4b4b06/AS+W+NK+INF+WIDE+RIB+BRA.png"
    },
    {
        id: 36,
        name: "Nike Air Zoom Structure",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e55a9c09-d03e-4f01-b977-a40772b98d80/NIKE+AIR+ZOOM+STRUCTURE+24.png"
    },
    {
        id: 37,
        name: "Nike Dri-FIT Training Top",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2900,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2b61fdfc-4c78-43aa-8d6a-e301cceb8097/AS+W+NK+ONE+CLASSIC+DF+TANK.png"
    },
    {
        id: 38,
        name: "Nike Air Max Plus",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33f28084-0962-4632-92d7-bde08cdc2839/AIR+MAX+PLUS+ECLAIR+LIGHTENING.png"
    },
    {
        id: 39,
        name: "Nike Pro Training Bra",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/54e4c772-0df9-44ad-a43f-748b6466adcc/AS+W+NP+INDY+PLUNGE+BRA+BOLD.png"
    },
    {
        id: 40,
        name: "Nike Air Force 1 '07 Low",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 8300,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bf6159aa-7db1-4cdd-913e-bda14cd66bd5/WMNS+AIR+FORCE+1+%2707+LX.png"
    },
    {
        id: 41,
        name: "Nike Therma-FIT Training Jacket",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49745316-7bd6-4966-b2a4-26de67eedf4c/AS+M+NK+RPL+STRK%2B+HD+JKT+W.png"
    },
    {
        id: 42,
        name: "Nike React Miler",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62e8fafa-45ff-4822-abad-5ab0738062d8/NIKE+AIR+ZOOM+RIVAL+FLY+4.png"
    },
    {
        id: 43,
        name: "Nike Dri-FIT Training Shorts",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4734f10d-7a9c-4089-85dc-2d8deaa14fbc/AS+W+NK+ONE+DF+HR+2IN1+SHORT.png"
    },
    {
        id: 44,
        name: "Nike Air Max 270 React",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 14110,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4fd12abf-727b-41f5-9211-9e664235dde8/AIR+MAX+270.png"
    },
    {
        id: 45,
        name: "Nike Pro Training Pants",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c930392-4859-441e-8ab7-66d970a2e1ed/AS+M+NP+DF+TIGHT.png"
    },
    {
        id: 46,
        name: "Nike Zoom Fly 5",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7003371-1bf1-470a-9819-cfcd52174932/W+ZOOM+FLY+6.png"
    },
    {
        id: 47,
        name: "Nike Dri-FIT Training Leggings",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa7cef70-f953-4e1b-ad8c-9cd8aefb0704/AS+W+NK+DF+UNVRSA+HR+7%2F8+TGHT.png"
    },
    {
        id: 48,
        name: "Nike Air Max 2090",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 12450,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9be73c40-4e33-4afc-bbc2-e3af3e2cbf56/AIR+MAX+90+G.png"
    },
    {
        id: 49,
        name: "Nike Pro Training Hoodie",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/516c42e6-256f-4491-8b14-28837dce32f2/AS+M+NK+DF+HD+PO+GFX.png"
    },
    {
        id: 50,
        name: "Nike React Infinity Run",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 16600,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/639129a4-b012-4f51-8ee8-0e1dfef712a4/W+NIKE+REACTX+INFINITY+RUN+4.png"
    },
    {
        id: 51,
        name: "Nike Dri-FIT Training Tank",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a6779151-2bb1-46f0-ad8f-d330dc299325/AS+W+NK+ONE+FITTED+DFCROPTNKNV.png"
    },
    {
        id: 52,
        name: "Nike Air Max 720",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a86c8878-8ad1-4e7c-b930-cb40aeb17e74/WMNS+AIR+MAX+COMMAND+PRM.png"
    },
    {
        id: 53,
        name: "Nike Pro Training Shorts",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0de70fe-1f30-4a41-bdcd-f93cafda2254/AS+M+NP+DF+SHORT.png"
    },
    {
        id: 54,
        name: "Nike Air Zoom Pegasus 39",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b3eff57-dd39-45ea-b636-2ed2940d0371/W+AIR+ZOOM+PEGASUS+41.png"
    },
    {
        id: 55,
        name: "Nike Dri-FIT Training Jacket",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79d74183-87bb-4eb7-91c9-a46dc04abd14/AS+W+NK+ONE+DF+JACKET+OPP2.png"
    },
    {
        id: 56,
        name: "Nike Air Max 270",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 12450,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78a0d42c-471f-4fdd-84c3-b64fd6d006c4/NIKE+AIR+MAX+270+GS.png"
    },
    {
        id: 57,
        name: "Nike Pro Training Pants",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed74e81d-3d4f-401c-be26-80501b58487a/AS+W+NP+SCULPT+DF+HR+TIGHT.png"
    },
    {
        id: 58,
        name: "Nike React Miler 3",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdd9bd43-1d83-49ae-90a7-cfcc2f877749/WMNS+ZOOMX+INVINCIBLE+RUN+FK+3.png"
    },
    {
        id: 59,
        name: "Nike Dri-FIT Training Hoodie",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b166e38e-3e86-401f-8d45-9f478f921601/AS+W+NK+ONE+DF+FZ+HOODIE+LBR.png"
    },
    {
        id: 60,
        name: "Nike Air Max 90",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 12450,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e45vf6wjfhyf8ypen5li/AIR+MAX+90.png"
    },
    {
        id: 61,
        name: "Nike Pro Training Tank",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55820803-0d4e-429a-a3fb-ff70296cedc3/AS+M+NP+DF+TOP+SL+TIGHT.png"
    },
    {
        id: 62,
        name: "Nike Zoom Fly 5",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/136905cb-f040-4e33-a9d4-65d0c2b30fda/W+NIKE+ZOOMX+ZEGAMA+TRAIL+2.png"
    },
    {
        id: 63,
        name: "Nike Dri-FIT Training Leggings",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4637ae5b-1298-4453-aa58-322d8d2958d9/AS+M+NP+DF+3QT+TIGHT.png"
    },
    {
        id: 64,
        name: "Nike Air Max Plus",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d227de0b-03b2-420d-a8c9-6b1b9a6e0edb/WMNS+AIR+MAX+PLUS.png"
    },
    {
        id: 65,
        name: "Nike Pro Training Bra",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/755bb859-4b00-4c30-b607-a462249222db/AS+W+NK+DF+INDY+HGH+SPT+BRA.png"
    },
    {
        id: 66,
        name: "Nike Air Zoom Structure",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e55a9c09-d03e-4f01-b977-a40772b98d80/NIKE+AIR+ZOOM+STRUCTURE+24.png"
    },
    {
        id: 67,
        name: "Nike Dri-FIT Training Top",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2900,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb19e6a4-803a-4d80-b650-404aa1492fd2/AS+M+NP+DF+TIGHT+TOP+SS.png"
    },
    {
        id: 68,
        name: "Nike Air Force 1 '07 Low",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 8300,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/daac1905-ddc0-4860-9903-dfb3b05ec37a/WMNS+AIR+FORCE+1+%2707+NN.png"
    },
    {
        id: 69,
        name: "Nike Therma-FIT Training Jacket",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3bf8c1e8-53be-4fc1-af4e-c9024b45b44d/AS+W+NK+ONE+DF+JACKET+I2SP.png"
    },
    {
        id: 70,
        name: "Nike React Miler",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fbb2d2d-340f-46cb-b5c1-e101cf5b98c3/W+NIKE+REACT+PHANTOM+RUN+FK+2.png"
    },
    {
        id: 71,
        name: "Nike Air Max 270 React",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 14110,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d164455-549f-457b-b335-01f10df1dbd7/W+AIR+MAX+270.png"
    },
    {
        id: 72,
        name: "Nike Dri-FIT Training Shorts",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/857c992d-332f-4a6d-b6ab-61a7ea07d77f/AS+M+NK+DF+UNLMTD+5IN+UL+SEERS.png"
    }
];

// Format price with thousand separators
function formatPrice(price) {
    return price.toLocaleString('en-IN');
}

// Check if products array exists, if not create an empty array
// This prevents errors if the products data hasn't loaded yet
if (typeof products === 'undefined') {
    console.warn('Products array not defined. Using empty array.');
}

// Render products function
function renderProducts(productList) {
    const productsContainer = document.getElementById('products');
    if (!productsContainer) {
        console.error('Products container element not found');
        return;
    }
    
    productsContainer.innerHTML = '';
    
    console.log('Rendering products:', productList.length);
    
    if (productList.length === 0) {
        productsContainer.innerHTML = '<div class="no-results">No products match your filters.</div>';
        return;
    }
    
    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        // Generate stars based on rating
        const starsHTML = generateStars(product.rating);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='images/placeholder.jpg'">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <div class="product-price">₹${formatPrice(product.price)}</div>
                <div class="product-rating">
                    <div class="stars">${starsHTML}</div>
                    <span>${product.rating}</span>
                </div>
                <div class="button-group">
                    <button class="favorite-btn" data-product-id="${product.id}">Favorite</button>
                    <button class="view-detail" data-product-id="${product.id}">View Detail</button>
                </div>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners after all cards have been rendered
    addProductCardEventListeners();
}

// Add event listeners to product cards
function addProductCardEventListeners() {
    // Add event listeners for view detail buttons
    document.querySelectorAll('.view-detail').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            navigateToProductDetail(productId);
        });
    });
    
    // Add event listeners for favorite buttons
    document.querySelectorAll('.favorite-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            addToWishlist(productId);
            this.textContent = 'Favorited';
            this.classList.add('favorited');
        });
    });
}

// Function to add product to wishlist
function addToWishlist(productId) {
    // Find the product by ID
    const product = products.find(p => p.id == productId);
    if (!product) {
        showNotification("Product not found");
        return;
    }
    
    // Retrieve existing wishlist or initialize
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    // Check if product is already in wishlist
    const existingItem = wishlist.find(item => item.id == product.id);
    if (existingItem) {
        showNotification(`${product.name} is already in your wishlist!`);
        return;
    }
    
    // Add to wishlist
    wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        rating: product.rating
    });
    
    // Save to localStorage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    showNotification(`${product.name} added to wishlist!`);
}

// Function to navigate to product detail page
function navigateToProductDetail(productId) {
    // Check if product exists to prevent navigation to non-existent products
    const product = products.find(p => p.id == productId);
    if (product) {
        window.location.href = `ProductDetail.html?id=${productId}`;
    } else {
        showNotification("Product not found!");
    }
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add fade-in effect
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300); // Wait for fade-out transition
    }, 3000);
}

// Improved function to generate stars for product ratings
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHTML = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            starsHTML += '<span class="star full">★</span>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            starsHTML += '<span class="star half">★</span>';
        } else {
            starsHTML += '<span class="star empty">☆</span>';
        }
    }
    
    return starsHTML;
}

// Define a debounce function to limit how often the search function runs
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Safely get filter elements and apply default values
function safeGetElement(id, defaultValue = null) {
    const element = document.getElementById(id);
    return element || defaultValue;
}

document.addEventListener('DOMContentLoaded', function() {
    // Safely get DOM elements with error handling
    const filterDropdown = safeGetElement('filterDropdown');
    const searchInput = safeGetElement('searchInput');
    const ratingFilter = safeGetElement('ratingFilter');
    const ratingValue = safeGetElement('ratingValue');
    const clearFiltersBtn = safeGetElement('clearFilters');
    const minPriceInput = safeGetElement('minPrice');
    const maxPriceInput = safeGetElement('maxPrice');
    const categoryFilter = safeGetElement('categoryFilter');
    const applyFiltersBtn = safeGetElement('applyFilters');
    
    // Check if required elements exist before adding event listeners
    if (!filterDropdown) {
        console.error('Filter elements not found in the DOM');
        // Still render products if possible
        if (typeof products !== 'undefined') {
            renderProducts(products);
        }
        return;
    }
    
    // Update rating value display
    ratingFilter.addEventListener('input', function() {
        ratingValue.textContent = this.value;
    });
    
    // Clear filters
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            if (minPriceInput) minPriceInput.value = "";
            if (maxPriceInput) maxPriceInput.value = "";
            if (ratingFilter) {
                ratingFilter.value = "1";
                if (ratingValue) ratingValue.textContent = "1";
            }
            if (categoryFilter) categoryFilter.value = "";
            if (searchInput) searchInput.value = "";
            
            renderProducts(products); // Reset to show all products
        });
    }
    
    // Function to apply all filters (including search)
    function applyAllFilters() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const minPrice = minPriceInput ? (parseFloat(minPriceInput.value) || 0) : 0;
        const maxPrice = maxPriceInput ? (parseFloat(maxPriceInput.value) || Infinity) : Infinity;
        const minRating = ratingFilter ? (parseFloat(ratingFilter.value) || 0) : 0;
        const selectedCategory = categoryFilter ? categoryFilter.value.toLowerCase() : "";
        
        console.log('Applying filters:', { searchTerm, minPrice, maxPrice, minRating, selectedCategory });
        
        // Make sure products exists before filtering
        if (!Array.isArray(products)) {
            console.error('Products array is not defined or not an array');
            return;
        }
        
        const filteredProducts = products.filter(product => {
            // Safely check properties that might not exist
            const name = (product.name || "").toLowerCase();
            const category = (product.category || "").toLowerCase();
            const sport = (product.sport || "").toLowerCase();
            const type = (product.type || "").toLowerCase();
            
            const matchesSearch = searchTerm === "" || 
                name.includes(searchTerm) || 
                category.includes(searchTerm) ||
                sport.includes(searchTerm);
            
            const matchesPrice = product.price >= minPrice && 
                (maxPrice === Infinity || product.price <= maxPrice);
            
            const matchesRating = product.rating >= minRating;
            
            const matchesCategory = selectedCategory === "" || 
                category.includes(selectedCategory) || 
                type.includes(selectedCategory) || 
                sport.includes(selectedCategory);
            
            return matchesSearch && matchesPrice && matchesRating && matchesCategory;
        });
        
        console.log('Filtered products count:', filteredProducts.length);
        renderProducts(filteredProducts);
    }
    
    // Live search functionality - filter as user types
    if (searchInput) {
        searchInput.addEventListener('input', debounce(function() {
            applyAllFilters();
        }, 300)); // 300ms delay to avoid filtering on every keystroke
    }
    
    // Apply filters button
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', function() {
            applyAllFilters();
        });
    }
    
    // Initialize the page - check if products array exists first
    if (Array.isArray(products)) {
        renderProducts(products);
    } else {
        console.error('Products array is not defined or not an array');
        // Show error message in product container
        const productsContainer = document.getElementById('products');
        if (productsContainer) {
            productsContainer.innerHTML = '<div class="error-message">Error loading products. Please refresh the page.</div>';
        }
    }
});