// Product data (same as in features.js)
const products = [
    {
        "id": 1,
        "name": "Nike Air Max 270",
        "category": "Men's Running Shoes",
        "type": "Shoes",
        "sport": "Running",
        "price": 12450,
        "rating": 4.7,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png",
        "description": "The Nike Air Max 270 delivers unrivaled comfort with its large Air unit. The lightweight, flexible upper provides a secure fit while the responsive cushioning gives you the energy to keep going.",
        "colors": ["Black/White", "Red/Black", "Blue/White"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72f335df-061a-43e0-a837-7a22307f2ff9/W+AIR+MAX+270.png"
        ]
    },
    {
        "id": 2,
        "name": "Nike Air Force 1 '07",
        "category": "Men's Lifestyle Shoes",
        "type": "Shoes",
        "sport": "Lifestyle",
        "price": 8300,
        "rating": 4.9,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png",
        "description": "The Nike Air Force 1 '07 is a modern take on the classic basketball shoe. With its clean design and comfortable cushioning, it's perfect for everyday wear.",
        "colors": ["White/White", "Black/Black", "Sail/White"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55a52599-1fa9-46ee-8d3d-3627c30fa976/NIKE+AIR+FORCE+1+%2707+NN.png"
        ]
    },
    {
        "id": 3,
        "name": "Nike React Infinity",
        "category": "Women's Running Shoes",
        "type": "Shoes",
        "sport": "Running",
        "price": 13280,
        "rating": 4.5,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/W+NIKE+REACTX+INFINITY+RUN+4+W.png",
        "description": "The Nike React Infinity Run Flyknit is designed to help reduce injury and keep you on the run. More foam means better cushioning under every step.",
        "colors": ["Black/White", "Blue/White", "Pink/White"],
        "sizes": ["5", "6", "7", "8", "9", "10", "11"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/W+NIKE+REACTX+INFINITY+RUN+4+W.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/W+NIKE+REACTX+INFINITY+RUN+4+W.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f062fa29-72c7-4c13-8132-1544eefbffc2/W+NIKE+REACTX+INFINITY+RUN+4+W.png"
        ]
    },
    {
        "id": 4,
        "name": "Nike Air Zoom Pegasus 40",
        "category": "Men's Running Shoes",
        "type": "Shoes",
        "sport": "Running",
        "price": 12980,
        "rating": 4.7,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d7baf18a-e835-4487-9bde-fb4f09ff79b9/ZOOMX+VAPORFLY+NEXT%25+4.png",
        "description": "The Nike Air Zoom Pegasus 40 offers a responsive ride for your everyday runs. With a lightweight design and responsive cushioning, it helps you push your pace.",
        "colors": ["Black/White", "Blue/White", "Red/White"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e2a3c5f-0c4c-4c8c-8c8c-8c8c8c8c8c8c/air-zoom-pegasus-40-road-running-shoes-2Qp5nN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e2a3c5f-0c4c-4c8c-8c8c-8c8c8c8c8c8c/air-zoom-pegasus-40-road-running-shoes-2Qp5nN.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e2a3c5f-0c4c-4c8c-8c8c-8c8c8c8c8c8c/air-zoom-pegasus-40-road-running-shoes-2Qp5nN.png"
        ]
    },
    {
        "id": 5,
        "name": "Nike SB PS8",
        "category": "Skateboarding Shoes",
        "type": "Shoes",
        "sport": "Skateboarding",
        "price": 12450,
        "rating": 4.6,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82f23f19-8b9a-496f-a1da-5ef0560304ae/NIKE+SB+PS8.png",
        "description": "The Nike SB PS8 is built for skateboarding. With its durable construction and responsive cushioning, it provides the perfect balance of board feel and impact protection.",
        "colors": ["Black/White", "Gray/Black", "Blue/White"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82f23f19-8b9a-496f-a1da-5ef0560304ae/NIKE+SB+PS8.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82f23f19-8b9a-496f-a1da-5ef0560304ae/NIKE+SB+PS8.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/82f23f19-8b9a-496f-a1da-5ef0560304ae/NIKE+SB+PS8.png"
        ]
    },
    {
        "id": 6,
        "name": "Nike Pegasus 41",
        "category": "Men's Running Shoes",
        "type": "Shoes",
        "sport": "Running",
        "price": 9960,
        "rating": 4.4,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/216eac69-96a8-4e1a-81ab-752a271d43ba/AIR+ZOOM+PEGASUS+41.png",
        "description": "The Nike Pegasus 41 offers a responsive ride for your everyday runs. With its responsive Zoom Air units and lightweight construction, it's perfect for runners of all levels.",
        "colors": ["Black/White", "Blue/White", "Red/White"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/216eac69-96a8-4e1a-81ab-752a271d43ba/AIR+ZOOM+PEGASUS+41.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/216eac69-96a8-4e1a-81ab-752a271d43ba/AIR+ZOOM+PEGASUS+41.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/216eac69-96a8-4e1a-81ab-752a271d43ba/AIR+ZOOM+PEGASUS+41.png"
        ]
    },
    {
        "id": 7,
        "name": "Nike Blazer Mid 77",
        "category": "Unisex Lifestyle Shoes",
        "type": "Shoes",
        "sport": "Lifestyle",
        "price": 8300,
        "rating": 4.7,
        "image": "https://api.nike.com/customization/images/v2?vn=2&bi=edba4c80-b128-429d-9097-ba1eebed08a9&bs=1715015034593&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgSQIoAwAQABA+wKEDNA4DgOMCrAnQJMECWA1gPEDeAmwFsYwARALJCsAFACQAbgDMAVrkB7gH0BBAIgAHACEASXQEWAxdQD6AfwC5AFoCSAYYD1AfoBwAArEAm4EICZAIM8AJ4ArwBsANQA5wAwAPwAOQDqlACwAL0ZzgBuAGquGAT0AJEAHI4A4ngAlAA6AJwAqAAVAJgA-23AAMuxACcA9rEAJgBzzgCpAHQAJQBmMAATAHeuJQDwAI-TAFwAFEizAB0AvwCaAPkALAAXADMAiQA7UjVgAMH7ABECAHIAB4AyAAjJb7ADkGQAzwAFAC+YgA6V4iAAsc4AVgAqgBTADTACsAGBydyPMolABMAIAlQB545cAAyMgAa-DbAA6gDXAFtTgB0ACgjwAKVSACMAJ5IAEAWDg0SQAHYAQvOADymucAIQAJYAAwACADhNTKW2oQgA0ksIHkNgAz4LCgJcxQAW4APqYAGnnAC87nxADaygBhABQAHphQBdRLzb4ALwANlwAK7OCEAPZ4AG3tBh+g0AgAMAArNQAYoKAC4NNruY4GGQAK4AaBI6gAG4WVR4AEAAXVgABoAYi8AB4-QBzSwAKPhABoAIYcGO6gAxACIAOyxAR7gCkACp9gEAO2enofTSTgDOYAPDTQaIAeBJ1zU4JM1TYKkACmC2sUxHiaJgkAAGuuCRtAAb53XUAHejCMU5vgAJAAZTQZwtjSAAwzNgIACUmABjAAhgAxyhTV0RIAHLEgkZJyIAdYIFMowAG4AS4AbC8Uw2gAT9pUxwgAUdpOVMwCDpngAHtpABuj4ACkAGg2VDNUxFDfpP1uJhwmmAAg09eyReEcDTIgEC2P4wEDa9sQALIAY54T1rG+YT+O0gALNUAA2Aj+bQeUqKQAHdnA6HIcAAP8sU0AC1QgARg2G15nsYiuKK+ZsJ81CWKdAAyb4EpouAkEefFaQAQIAH4BIcAFKAD5TR5MAGnsNl8QhAAv1wh3iEdEL+XM-mlLhc12J8AX4xRcRATUACV5mcGMAEbhNktVNH4jpdpHPqeWCNo+QADwAXZtOQAEPcTGNFVK5KiIRq2YvF1AA3sAeSsj5KSIaEACdgESAItn2GMJAAHHneFYmZVSRksXQACq2lNABtAA9GoJptHg-Dadd6CEDqyDFSZJhJiLXCC+NgAShB9nOPc5BJ4j+NXNAmj+VC+rongPmsMQnQZRI+UFW44BHcIqSpJAOC2DAuQAA3I445BAR42oARQ6lpAx3XQnV1eFBlPWwqQklptFuAB5AQLboy5gM1Z7z2uXLbEEoFaFuSYAA-EPiMUeVC8imCaKAgA",
        "description": "The Nike Blazer Mid 77 is a classic basketball shoe that's been reimagined for everyday wear. With its clean design and comfortable fit, it's perfect for any casual occasion.",
        "colors": ["White/White", "Black/White", "Sail/White"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://api.nike.com/customization/images/v2?vn=2&bi=edba4c80-b128-429d-9097-ba1eebed08a9&bs=1715015034593&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgSQIoAwAQABA+wKEDNA4DgOMCrAnQJMECWA1gPEDeAmwFsYwARALJCsAFACQAbgDMAVrkB7gH0BBAIgAHACEASXQEWAxdQD6AfwC5AFoCSAYYD1AfoBwAArEAm4EICZAIM8AJ4ArwBsANQA5wAwAPwAOQDqlACwAL0ZzgBuAGquGAT0AJEAHI4A4ngAlAA6AJwAqAAVAJgA-23AAMuxACcA9rEAJgBzzgCpAHQAJQBmMAATAHeuJQDwAI-TAFwAFEizAB0AvwCaAPkALAAXADMAiQA7UjVgAMH7ABECAHIAB4AyAAjJb7ADkGQAzwAFAC+YgA6V4iAAsc4AVgAqgBTADTACsAGBydyPMolABMAIAlQB545cAAyMgAa-DbAA6gDXAFtTgB0ACgjwAKVSACMAJ5IAEAWDg0SQAHYAQvOADymucAIQAJYAAwACADhNTKW2oQgA0ksIHkNgAz4LCgJcxQAW4APqYAGnnAC87nxADaygBhABQAHphQBdRLzb4ALwANlwAK7OCEAPZ4AG3tBh+g0AgAMAArNQAYoKAC4NNruY4GGQAK4AaBI6gAG4WVR4AEAAXVgABoAYi8AB4-QBzSwAKPhABoAIYcGO6gAxACIAOyxAR7gCkACp9gEAO2enofTSTgDOYAPDTQaIAeBJ1zU4JM1TYKkACmC2sUxHiaJgkAAGuuCRtAAb53XUAHejCMU5vgAJAAZTQZwtjSAAwzNgIACUmABjAAhgAxyhTV0RIAHLEgkZJyIAdYIFMowAG4AS4AbC8Uw2gAT9pUxwgAUdpOVMwCDpngAHtpABuj4ACkAGg2VDNUxFDfpP1uJhwmmAAg09eyReEcDTIgEC2P4wEDa9sQALIAY54T1rG+YT+O0gALNUAA2Aj+bQeUqKQAHdnA6HIcAAP8sU0AC1QgARg2G15nsYiuKK+ZsJ81CWKdAAyb4EpouAkEefFaQAQIAH4BIcAFKAD5TR5MAGnsNl8QhAAv1wh3iEdEL+XM-mlLhc12J8AX4xRcRATUACV5mcGMAEbhNktVNH4jpdpHPqeWCNo+QADwAXZtOQAEPcTGNFVK5KiIRq2YvF1AA3sAeSsj5KSIaEACdgESAItn2GMJAAHHneFYmZVSRksXQACq2lNABtAA9GoJptHg-Dadd6CEDqyDFSZJhJiLXCC+NgAShB9nOPc5BJ4j+NXNAmj+VC+rongPmsMQnQZRI+UFW44BHcIqSpJAOC2DAuQAA3I445BAR42oARQ6lpAx3XQnV1eFBlPWwqQklptFuAB5AQLboy5gM1Z7z2uXLbEEoFaFuSYAA-EPiMUeVC8imCaKAgA",
            "https://api.nike.com/customization/images/v2?vn=2&bi=edba4c80-b128-429d-9097-ba1eebed08a9&bs=1715015034593&bgc=f5f5f5&qlt=90&wid=864&designs=PgaIEAAFUEAMAFqAZBZgSQIoAwAQABA+wKEDNA4DgOMCrAnQJMECWA1gPEDeAmwFsYwARALJCsAFACQAbgDMAVrkB7gH0BBAIgAHACEASXQEWAxdQD6AfwC5AFoCSAYYD1AfoBwAArEAm4EICZAIM8AJ4ArwBsANQA5wAwAPwAOQDqlACwAL0ZzgBuAGquGAT0AJEAHI4A4ngAlAA6AJwAqAAVAJgA-23AAMuxACcA9rEAJgBzzgCpAHQAJQBmMAATAHeuJQDwAI-TAFwAFEizAB0AvwCaAPkALAAXADMAiQA7UjVgAMH7ABECAHIAB4AyAAjJb7ADkGQAzwAFAC+YgA6V4iAAsc4AVgAqgBTADTACsAGBydyPMolABMAIAlQB545cAAyMgAa-DbAA6gDXAFtTgB0ACgjwAKVSACMAJ5IAEAWDg0SQAHYAQvOADymucAIQAJYAAwACADhNTKW2oQgA0ksIHkNgAz4LCgJcxQAW4APqYAGnnAC87nxADaygBhABQAHphQBdRLzb4ALwANlwAK7OCEAPZ4AG3tBh+g0AgAMAArNQAYoKAC4NNruY4GGQAK4AaBI6gAG4WVR4AEAAXVgABoAYi8AB4-QBzSwAKPhABoAIYcGO6gAxACIAOyxAR7gCkACp9gEAO2enofTSTgDOYAPDTQaIAeBJ1zU4JM1TYKkACmC2sUxHiaJgkAAGuuCRtAAb53XUAHejCMU5vgAJAAZTQZwtjSAAwzNgIACUmABjAAhgAxyhTV0RIAHLEgkZJyIAdYIFMowAG4AS4AbC8Uw2gAT9pUxwgAUdpOVMwCDpngAHtpABuj4ACkAGg2VDNUxFDfpP1uJhwmmAAg09eyReEcDTIgEC2P4wEDa9sQALIAY54T1rG+YT+O0gALNUAA2Aj+bQeUqKQAHdnA6HIcAAP8sU0AC1QgARg2G15nsYiuKK+ZsJ81CWKdAAyb4EpouAkEefFaQAQIAH4BIcAFKAD5TR5MAGnsNl8QhAAv1wh3iEdEL+XM-mlLhc12J8AX4xRcRATUACV5mcGMAEbhNktVNH4jpdpHPqeWCNo+QADwAXZtOQAEPcTGNFVK5KiIRq2YvF1AA3sAeSsj5KSIaEACdgESAItn2GMJAAHHneFYmZVSRksXQACq2lNABtAA9GoJptHg-Dadd6CEDqyDFSZJhJiLXCC+NgAShB9nOPc5BJ4j+NXNAmj+VC+rongPmsMQnQZRI+UFW44BHcIqSpJAOC2DAuQAA3I445BAR42oARQ6lpAx3XQnV1eFBlPWwqQklptFuAB5AQLboy5gM1Z7z2uXLbEEoFaFuSYAA-EPiMUeVC8imCaKAgA"
        ]
    },
    {
        "id": 8,
        "name": "Nike Free Run NN",
        "category": "Women's Running Shoes",
        "type": "Shoes",
        "sport": "Running",
        "price": 8300,
        "rating": 4.3,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8274be-4991-4f23-ba23-e34e4650340a/NIKE+FREE+RN+FK+NEXT+NATURE.png",
        "description": "The Nike Free Run NN is designed for a natural running experience. With its flexible construction and responsive cushioning, it allows your foot to move naturally.",
        "colors": ["Black/White", "Blue/White", "Pink/White"],
        "sizes": ["5", "6", "7", "8", "9", "10", "11"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8274be-4991-4f23-ba23-e34e4650340a/NIKE+FREE+RN+FK+NEXT+NATURE.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8274be-4991-4f23-ba23-e34e4650340a/NIKE+FREE+RN+FK+NEXT+NATURE.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8274be-4991-4f23-ba23-e34e4650340a/NIKE+FREE+RN+FK+NEXT+NATURE.png"
        ]
    },
    {
        "id": 9,
        "name": "Nike Metcon 1 OG",
        "category": "Training Shoes",
        "type": "Shoes",
        "sport": "Training",
        "price": 10790,
        "rating": 4.8,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a7535f7-75f0-4a99-95e3-f13a002f9887/NIKE+METCON+1+OG.png",
        "description": "The Nike Metcon 1 OG is designed for high-intensity workouts. With its stable platform and responsive cushioning, it's perfect for lifting, jumping, and other training exercises.",
        "colors": ["Black/White", "Gray/Black", "Blue/White"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a7535f7-75f0-4a99-95e3-f13a002f9887/NIKE+METCON+1+OG.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a7535f7-75f0-4a99-95e3-f13a002f9887/NIKE+METCON+1+OG.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a7535f7-75f0-4a99-95e3-f13a002f9887/NIKE+METCON+1+OG.png"
        ]
    },
    {
        "id": 10,
        "name": "Nike Phantom GT",
        "category": "Soccer Cleats",
        "type": "Shoes",
        "sport": "Soccer",
        "price": 22825,
        "rating": 4.9,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9618c1c4-9470-45bb-81ac-a03c6dc75e30/PHANTOM+LUNA+II+ELITE+FG.png",
        "description": "The Nike Phantom GT is designed for soccer players who demand precision and control. With its innovative design and responsive touch, it helps you make the perfect pass or shot.",
        "colors": ["Black/White", "Blue/White", "Red/White"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9618c1c4-9470-45bb-81ac-a03c6dc75e30/PHANTOM+LUNA+II+ELITE+FG.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9618c1c4-9470-45bb-81ac-a03c6dc75e30/PHANTOM+LUNA+II+ELITE+FG.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9618c1c4-9470-45bb-81ac-a03c6dc75e30/PHANTOM+LUNA+II+ELITE+FG.png"
        ]
    },
    {
        id: 11,
        name: "Nike Dri-FIT",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2900,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aade315f-2e63-4482-b781-5c2de36af69f/AS+M+NK+DF+TEE+RLGD+RESET.png",
        description: "The Nike Air Max 270 delivers unrivaled comfort with its large Air unit. The lightweight, flexible upper provides a secure fit while the responsive cushioning gives you the energy to keep going.",
        colors: ["Black/White", "Red/Black", "Blue/White", "Triple Black", "Pure Platinum"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aade315f-2e63-4482-b781-5c2de36af69f/AS+M+NK+DF+TEE+RLGD+RESET.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aade315f-2e63-4482-b781-5c2de36af69f/AS+M+NK+DF+TEE+RLGD+RESET.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aade315f-2e63-4482-b781-5c2de36af69f/AS+M+NK+DF+TEE+RLGD+RESET.png"
        ]
    },
    {
        id: 12,
        name: "Nike Pro Shorts",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0767d63f-9b00-424f-9f4e-c457418a35d3/G+NP+DF+3IN+SHORT+SPORT+PACK.png",
        description: "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
        colors: ["White/White", "Black/Black", "Sail/White", "Triple White", "Triple Black"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0767d63f-9b00-424f-9f4e-c457418a35d3/G+NP+DF+3IN+SHORT+SPORT+PACK.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0767d63f-9b00-424f-9f4e-c457418a35d3/G+NP+DF+3IN+SHORT+SPORT+PACK.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0767d63f-9b00-424f-9f4e-c457418a35d3/G+NP+DF+3IN+SHORT+SPORT+PACK.png"
        ]
    },
    {
        id: 13,
        name: "Nike Tech",
        category: "Men's Hoodie",
        type: "Clothing",
        sport: "Lifestyle",
        price: 9130,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e0729c8-2b67-4677-ac42-e57e49d995eb/AS+M+NK+TCH+FLC+JGGR.png",
        description: "Nothing as fly, nothing as comfortable, nothing as proven—the Nike Tech Fleece hoodie stays true to its roots with premium materials and classic design elements for everyday comfort and style.",
        colors: ["Black/White", "White/Red", "Blue/White", "Grey/Black", "University Red"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e0729c8-2b67-4677-ac42-e57e49d995eb/AS+M+NK+TCH+FLC+JGGR-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e0729c8-2b67-4677-ac42-e57e49d995eb/AS+M+NK+TCH+FLC+JGGR-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e0729c8-2b67-4677-ac42-e57e49d995eb/AS+M+NK+TCH+FLC+JGGR-detail.png"
        ]
    },
    {
        id: 14,
        name: "Nike One",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b24d814-da69-4f9c-a547-aaf0a1d6ffb2/AS+W+NK+DF+ONE+HR+7%2F8+TGHT.png",
        description: "The Nike One Tights combine sweat-wicking technology with a supportive high-rise waistband for comfort during your workout. Their stretchy fabric offers just the right amount of compression while keeping you cool and dry.",
        colors: ["Black", "Dark Grey", "Navy Blue", "Burgundy", "Olive Green"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b24d814-da69-4f9c-a547-aaf0a1d6ffb2/AS+W+NK+DF+ONE+HR+7%2F8+TGHT-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b24d814-da69-4f9c-a547-aaf0a1d6ffb2/AS+W+NK+DF+ONE+HR+7%2F8+TGHT-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1b24d814-da69-4f9c-a547-aaf0a1d6ffb2/AS+W+NK+DF+ONE+HR+7%2F8+TGHT-detail.png"
        ]
    },
    {
        id: 15,
        name: "Nike Interact Run",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 14940,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32ab21e7-069a-4f35-b2bb-5d46d40d4ea2/W+NIKE+INTERACT+RUN+EASYON.png",
        description: "The Nike Interact Run delivers exceptional comfort and responsive cushioning for your daily runs. The breathable mesh upper and innovative lacing system provide a secure fit, while the foam midsole offers impact protection on various surfaces.",
        colors: ["White/Pink", "Black/Teal", "Grey/Volt", "Blue/Orange", "Purple/White"],
        sizes: ["5", "6", "7", "8", "9", "10", "11"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32ab21e7-069a-4f35-b2bb-5d46d40d4ea2/W+NIKE+INTERACT+RUN+EASYON-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32ab21e7-069a-4f35-b2bb-5d46d40d4ea2/W+NIKE+INTERACT+RUN+EASYON-top.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32ab21e7-069a-4f35-b2bb-5d46d40d4ea2/W+NIKE+INTERACT+RUN+EASYON-sole.png"
        ]
    },
    {
        id: 16,
        name: "Nike Air Max 97",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 14110,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48f18af6-c29d-4e43-8319-cbc66d82ab45/W+AIR+MAX+97+FUTURA.png",
        description: "Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead. Taking the revolutionary full-length Nike Air unit that shook up the running world and adding fresh colors and crisp details, it lets you ride in first-class comfort.",
        colors: ["Silver/Red", "Triple Black", "White/Navy", "Gold/Black", "Wolf Grey"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48f18af6-c29d-4e43-8319-cbc66d82ab45/W+AIR+MAX+97+FUTURA-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48f18af6-c29d-4e43-8319-cbc66d82ab45/W+AIR+MAX+97+FUTURA-top.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/48f18af6-c29d-4e43-8319-cbc66d82ab45/W+AIR+MAX+97+FUTURA-heel.png"
        ]
    },
    {
        id: 17,
        name: "Nike Kyrie 8",
        category: "Basketball Shoes",
        type: "Shoes",
        sport: "Basketball",
        price: 11620,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/437de71c-fd9f-471f-81da-8d0bef59e2d5/KD18+NRG+EP.png",
        description: "The Nike Kyrie 8 is designed for one of basketball's most creative players. The responsive cushioning and multidirectional traction pattern help you move confidently in any direction, while the secure fit keeps your foot locked in during quick cuts and explosive moves.",
        colors: ["Black/Green", "White/Gold", "Red/Navy", "Purple/Orange", "Grey/Volt"],
        sizes: ["7", "8", "9", "10", "11", "12", "13", "14"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/437de71c-fd9f-471f-81da-8d0bef59e2d5/KD18+NRG+EP-lateral.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/437de71c-fd9f-471f-81da-8d0bef59e2d5/KD18+NRG+EP-medial.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/437de71c-fd9f-471f-81da-8d0bef59e2d5/KD18+NRG+EP-sole.png"
        ]
    },
    {
        id: 18,
        name: "Nike NBA Jersey",
        category: "Basketball Apparel",
        type: "Clothing",
        sport: "Basketball",
        price: 9130,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff811433-a53d-4fd7-8680-82f0bed9b775/DAL+MNK+DF+SWGMN+JSY+ASC+22.png",
        description: "The Nike NBA Swingman Jersey gives you the same look that players wear on the court. Made with premium double-knit fabric and authentic design details, this jersey helps you celebrate your favorite team and player in style.",
        colors: ["Team Colors", "Statement Edition", "City Edition", "Classic Edition", "Association Edition"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff811433-a53d-4fd7-8680-82f0bed9b775/DAL+MNK+DF+SWGMN+JSY+ASC+22-front.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff811433-a53d-4fd7-8680-82f0bed9b775/DAL+MNK+DF+SWGMN+JSY+ASC+22-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ff811433-a53d-4fd7-8680-82f0bed9b775/DAL+MNK+DF+SWGMN+JSY+ASC+22-detail.png"
        ]
    },
    {
        id: 19,
        name: "Nike Soccer Jersey",
        category: "Soccer Apparel",
        type: "Clothing",
        sport: "Soccer",
        price: 7470,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/750bcde7-bc01-43ba-9b08-ea4a341f82b8/LFC+M+NK+DF+JSY+SS+STAD+AW.png",
        description: "Show your team pride with the Nike Soccer Jersey. Made with Dri-FIT technology that wicks away sweat, this authentic jersey features team colors and crests just like the pros wear on the pitch. The lightweight fabric helps keep you cool and comfortable whether you're playing or cheering from the stands.",
        colors: ["Home Kit", "Away Kit", "Third Kit", "Goalkeeper Kit", "Special Edition"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/750bcde7-bc01-43ba-9b08-ea4a341f82b8/LFC+M+NK+DF+JSY+SS+STAD+AW-front.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/750bcde7-bc01-43ba-9b08-ea4a341f82b8/LFC+M+NK+DF+JSY+SS+STAD+AW-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/750bcde7-bc01-43ba-9b08-ea4a341f82b8/LFC+M+NK+DF+JSY+SS+STAD+AW-crest.png"
        ]
    },
    {
        id: 20,
        name: "Mercurial Superfly",
        category: "Soccer Cleats",
        type: "Shoes",
        sport: "Soccer",
        price: 22825,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88c30a26-d663-4fb2-b7a3-d456689ca404/SUPERFLY+10+CLUB+FG%2FMG.png",
        description: "The Nike Mercurial Superfly is designed for explosive speed on the pitch. The innovative Flyknit upper wraps your foot for a secure, second-skin fit, while the specialized traction pattern on the lightweight plate helps you make quick cuts and accelerate rapidly on firm-ground surfaces.",
        colors: ["Bright Crimson/Black", "Black/Electric Green", "White/Gold", "Blue/Silver", "Volt/Black"],
        sizes: ["6", "7", "8", "9", "10", "11", "12"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88c30a26-d663-4fb2-b7a3-d456689ca404/SUPERFLY+10+CLUB+FG%2FMG-lateral.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88c30a26-d663-4fb2-b7a3-d456689ca404/SUPERFLY+10+CLUB+FG%2FMG-medial.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88c30a26-d663-4fb2-b7a3-d456689ca404/SUPERFLY+10+CLUB+FG%2FMG-sole.png"
        ]
    },
    {
        "id": 21,
        "name": "Nike LeBron 19",
        "category": "Basketball Shoes",
        "type": "Shoes",
        "sport": "Basketball",
        "price": 16600,
        "rating": 4.8,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5713de6-8871-4951-b569-633583f9b7a4/ZM+LEBRON+NXXT+GEN+AMPD+EP.png",
        "description": "The Nike LeBron 19 Basketball Shoes provide outstanding impact cushioning and responsive energy return to help power your game. The lightweight construction and supportive fit help you stay comfortable and focused on the court.",
        "colors": ["Black", "White", "University Red", "Game Royal", "Volt"],
        "sizes": ["7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5713de6-8871-4951-b569-633583f9b7a4/lebron-19-basketball-shoes-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5713de6-8871-4951-b569-633583f9b7a4/lebron-19-basketball-shoes-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5713de6-8871-4951-b569-633583f9b7a4/lebron-19-basketball-shoes-worn.png"
        ]
    },
    {
        "id": 22,
        "name": "Nike Wildhorse 7",
        "category": "Trail Running Shoes",
        "type": "Shoes",
        "sport": "Running",
        "price": 10790,
        "rating": 4.3,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83b27f25-1db2-46a6-ba25-bf63fbc7ee56/NIKE+PEGASUS+TRAIL+5+%28GS%29.png",
        "description": "The Nike Wildhorse 7 Trail Running Shoes deliver durable traction and responsive cushioning for your off-road runs. The rock plate helps shield your foot from rough terrain while the breathable upper keeps your feet cool.",
        "colors": ["Black/Anthracite", "Thunder Blue/Photon Dust", "Dark Smoke Grey/Volt", "Orange/Black", "Khaki/Medium Olive"],
        "sizes": ["6", "7", "8", "9", "10", "11", "12"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83b27f25-1db2-46a6-ba25-bf63fbc7ee56/wildhorse-7-trail-running-shoes-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83b27f25-1db2-46a6-ba25-bf63fbc7ee56/wildhorse-7-trail-running-shoes-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83b27f25-1db2-46a6-ba25-bf63fbc7ee56/wildhorse-7-trail-running-shoes-worn.png"
        ]
    },
    {
        "id": 23,
        "name": "Tiempo Legend 9",
        "category": "Soccer Cleats",
        "type": "Shoes",
        "sport": "Soccer",
        "price": 19090,
        "rating": 4.6,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b452bda-cc90-4763-b045-6ddc3c0fc576/LEGEND+10+ELITE+FG.png",
        "description": "The Nike Tiempo Legend 9 Soccer Cleats feature premium kangaroo leather for a superior touch and comfortable fit. The specialized cleat pattern provides optimal traction for quick cuts and acceleration on natural grass surfaces.",
        "colors": ["Black/Chile Red", "White/Volt", "University Blue/White", "Guava Ice/Black", "Team Red/White"],
        "sizes": ["6", "7", "8", "9", "10", "11", "12"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b452bda-cc90-4763-b045-6ddc3c0fc576/tiempo-legend-9-soccer-cleats-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b452bda-cc90-4763-b045-6ddc3c0fc576/tiempo-legend-9-soccer-cleats-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3b452bda-cc90-4763-b045-6ddc3c0fc576/tiempo-legend-9-soccer-cleats-worn.png"
        ]
    },
    {
        "id": 24,
        "name": "Nike Alphafly 3",
        "category": "Racing Shoes",
        "type": "Shoes",
        "sport": "Running",
        "price": 22825,
        "rating": 4.9,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13b44e66-d45a-43d9-94d8-fb6922a9ff59/AIR+ZOOM+ALPHAFLY+NEXT%25+3+PRM.png",
        "description": "The Nike Alphafly 3 Racing Shoes are built for record-breaking performance with responsive ZoomX foam and carbon fiber plate technology. The lightweight design and specialized cushioning help propel you forward with every step.",
        "colors": ["Hyper Violet/Flash Crimson", "Black/Laser Orange", "White/Racer Blue", "Bright Mango/Black", "Photon Dust/Volt"],
        "sizes": ["5", "6", "7", "8", "9", "10", "11", "12"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13b44e66-d45a-43d9-94d8-fb6922a9ff59/alphafly-3-racing-shoes-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13b44e66-d45a-43d9-94d8-fb6922a9ff59/alphafly-3-racing-shoes-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13b44e66-d45a-43d9-94d8-fb6922a9ff59/alphafly-3-racing-shoes-worn.png"
        ]
    },
    {
        "id": 25,
        "name": "Nike Windrunner Jacket",
        "category": "Men's Running Jacket",
        "type": "Apparel",
        "sport": "Running",
        "price": 8300,
        "rating": 4.6,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/739b6411-0e9d-458c-bf5e-04849e8bf30d/AS+M+NK+IMP+LGHT+WINDRNNER+JKT.png",
        "description": "The Nike Windrunner Jacket is made with lightweight, water-repellent fabric to help keep you covered during your run. The iconic chevron design and packable hood provide classic style and versatile coverage.",
        "colors": ["Black", "Obsidian/White", "University Red", "Mint Foam", "Grey"],
        "sizes": ["S", "M", "L", "XL", "XXL"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/739b6411-0e9d-458c-bf5e-04849e8bf30d/windrunner-mens-running-jacket-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/739b6411-0e9d-458c-bf5e-04849e8bf30d/windrunner-mens-running-jacket-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/739b6411-0e9d-458c-bf5e-04849e8bf30d/windrunner-mens-running-jacket-worn.png"
        ]
    },
    {
        "id": 26,
        "name": "Nike Primary Fleece",
        "category": "Men's Training Pants",
        "type": "Apparel",
        "sport": "Training",
        "price": 7470,
        "rating": 4.5,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a22a839-a65c-48cc-a834-8b727b41cca1/AS+M+NK+DF+UV+PRIMARY+TPR+PANT.png",
        "description": "The Nike Primary Fleece Training Pants are made with soft brushed-back fleece to help keep you warm and comfortable. The tapered design and elastic waistband provide a streamlined fit that's perfect for training or everyday wear.",
        "colors": ["Black", "Dark Grey Heather", "Navy", "Burgundy Crush", "Olive Green"],
        "sizes": ["S", "M", "L", "XL", "XXL"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a22a839-a65c-48cc-a834-8b727b41cca1/primary-fleece-mens-training-pants-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a22a839-a65c-48cc-a834-8b727b41cca1/primary-fleece-mens-training-pants-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8a22a839-a65c-48cc-a834-8b727b41cca1/primary-fleece-mens-training-pants-worn.png"
        ]
    },
    {
        "id": 27,
        "name": "Nike Dunk High Retro",
        "category": "Men's Lifestyle Shoes",
        "type": "Shoes",
        "sport": "Lifestyle",
        "price": 9130,
        "rating": 4.5,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dfbc23e2-9250-4c2a-83e6-94edb935d300/W+NIKE+DUNK+HIGH.png",
        "description": "The Nike Dunk High Retro brings back the iconic basketball design that's become a streetwear staple. The durable leather upper and high-top silhouette provide a classic look and lasting comfort for everyday wear.",
        "colors": ["White/Black", "Black/White", "Game Royal/White", "University Red/White", "Purple/White"],
        "sizes": ["6", "7", "8", "9", "10", "11", "12", "13"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dfbc23e2-9250-4c2a-83e6-94edb935d300/dunk-high-retro-mens-shoes-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dfbc23e2-9250-4c2a-83e6-94edb935d300/dunk-high-retro-mens-shoes-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/dfbc23e2-9250-4c2a-83e6-94edb935d300/dunk-high-retro-mens-shoes-worn.png"
        ]
    },
    {
        "id": 28,
        "name": "Nike Air Huarache",
        "category": "Men's Lifestyle Shoes",
        "type": "Shoes",
        "sport": "Lifestyle",
        "price": 9960,
        "rating": 4.4,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c1c2263-cf59-4eb8-9ecc-9c1f63410c43/NIKE+AIR+HUARACHE+PRM.png",
        "description": "The Nike Air Huarache brings back the iconic '90s design with modern comfort technologies. The stretchy inner sleeve and leather upper combine with the cushioned midsole to create a shoe that's as comfortable as it is stylish.",
        "colors": ["White/Pure Platinum", "Black/Dark Grey", "Triple Black", "Aquatone/Bright Mandarin", "Desert Sand/Royal Tint"],
        "sizes": ["6", "7", "8", "9", "10", "11", "12"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c1c2263-cf59-4eb8-9ecc-9c1f63410c43/air-huarache-mens-shoes-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c1c2263-cf59-4eb8-9ecc-9c1f63410c43/air-huarache-mens-shoes-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0c1c2263-cf59-4eb8-9ecc-9c1f63410c43/air-huarache-mens-shoes-worn.png"
        ]
    },
    {
        "id": 29,
        "name": "Nike Air Max 90",
        "category": "Women's Lifestyle Shoes",
        "type": "Shoes",
        "sport": "Lifestyle",
        "price": 9960,
        "rating": 4.7,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56583215-2f99-401c-80ff-8f20dcfc26e9/WMNS+AIR+MAX+90.png",
        "description": "The Nike Air Max 90 Women's Shoes update the legendary design with premium materials and iconic details. The visible Max Air unit in the heel provides the same cushioned comfort that made the original a hit.",
        "colors": ["White/Rose Gold", "Black/White", "Barely Rose/White", "Laser Blue/White", "Sesame/Coconut Milk"],
        "sizes": ["5", "6", "7", "8", "9", "10", "11"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56583215-2f99-401c-80ff-8f20dcfc26e9/air-max-90-womens-shoes-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56583215-2f99-401c-80ff-8f20dcfc26e9/air-max-90-womens-shoes-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56583215-2f99-401c-80ff-8f20dcfc26e9/air-max-90-womens-shoes-worn.png"
        ]
    },
    {
        "id": 30,
        "name": "Pegasus Trail 3",
        "category": "Trail Running Shoes",
        "type": "Shoes",
        "sport": "Running",
        "price": 10790,
        "rating": 4.2,
        "image": "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f2e8e2a-576e-40d4-8270-9ac2dbdaa2c0/W+NIKE+REACTX+PEGASUS+TRAIL+5.png",
        "description": "The Nike Pegasus Trail 3 delivers the right balance of traction, cushioning and support for your off-road runs. The responsive foam midsole and rugged outsole pattern help you tackle a variety of trail conditions with confidence.",
        "colors": ["Light Bone/Thunder Blue", "Dark Smoke Grey/Photon Dust", "Black/Dark Pony", "Pink Oxford/Magic Ember", "Olive Green/Orange"],
        "sizes": ["5", "6", "7", "8", "9", "10", "11"],
        "additionalImages": [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f2e8e2a-576e-40d4-8270-9ac2dbdaa2c0/pegasus-trail-3-running-shoes-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f2e8e2a-576e-40d4-8270-9ac2dbdaa2c0/pegasus-trail-3-running-shoes-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f2e8e2a-576e-40d4-8270-9ac2dbdaa2c0/pegasus-trail-3-running-shoes-worn.png"
        ]
    },
    {
        id: 31,
        name: "Nike Air Jordan 1",
        category: "Basketball Shoes",
        type: "Shoes",
        sport: "Basketball",
        price: 9545,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/74590832-a628-49ff-a804-2ef5f1cd9e68/AIR+JORDAN+1+MID.png",
        description: "The Nike Air Jordan 1 brings full-court style and premium comfort to an iconic look. Its Air-Sole unit cushions play on the hardwood, while the padded collar gives you a supportive feel.",
        colors: ["Bred", "Chicago", "Royal Blue", "Shadow", "Pine Green"],
        sizes: ["5", "6", "7", "8", "9", "10", "11"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-jordan-1-mid-womens-shoes-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-jordan-1-mid-womens-shoes-top.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-jordan-1-mid-womens-shoes-back.png"
        ]
    },
    {
        id: 32,
        name: "Nike Court Vision Low",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 5810,
        rating: 4.3,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9db3dcb1-1ffb-4c8c-9328-09b84ab583b2/W+NIKE+COURT+VISION+LO.png",
        description: "The Nike Court Vision Low delivers a comfortable fit with its lightweight design and responsive cushioning. The classic court-inspired silhouette offers a versatile look that goes with everything.",
        colors: ["Black/White", "White/Red", "Blue/White", "Grey/Black", "University Red"],
        sizes: ["5", "6", "7", "8", "9", "10", "11"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/court-vision-low-womens-shoes-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/court-vision-low-womens-shoes-top.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/court-vision-low-womens-shoes-back.png"
        ]
    },
    {
        id: 33,
        name: "Luka .77 PF",
        category: "Basketball Shoes",
        type: "Shoes",
        sport: "Basketball",
        price: 12450,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32af6541-5b8a-4933-8cb4-54878aa9668c/JORDAN+LUKA+.77+PF.png",
        description: "The Jordan Luka .77 PF is designed with inspiration from Luka Dončić's playing style. The responsive cushioning and supportive fit make it perfect for players who want to elevate their game on the court.",
        colors: ["Sail/Red", "Black/White", "Green/White", "Blue/White", "Grey/Orange"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/luka-77-pf-basketball-shoes-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/luka-77-pf-basketball-shoes-top.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/luka-77-pf-basketball-shoes-back.png"
        ]
    },
    {
        id: 34,
        name: "Nike Club Fleece",
        category: "Men's Sweatpants",
        type: "Clothing",
        sport: "Lifestyle",
        price: 4565,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8cbacb39-a9d2-4a87-a648-ff4cdbb20903/AS+M+NK+CLUB+FT+OVERSIZED+PO+H.png",
        description: "The Nike Club Fleece sweatpants combine comfort and style for your everyday wear. Made with soft fleece fabric, they feature a relaxed fit and ribbed cuffs for a classic look that goes with everything.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/club-fleece-mens-sweatpants-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/club-fleece-mens-sweatpants-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/club-fleece-mens-sweatpants-worn.png"
        ]
    },
    {
        id: 35,
        name: "Nike Zenvy Rib",
        category: "Women's Yoga Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4150,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ba7bade7-0919-482f-b004-d3805d4b4b06/AS+W+NK+INF+WIDE+RIB+BRA.png",
        description: "The Nike Zenvy Rib apparel collection is designed for yoga and low-impact workouts. The soft, ribbed fabric provides gentle support and comfort while allowing for full range of motion during your practice.",
        colors: ["Black", "Mauve", "Sage Green", "Light Blue", "Burgundy"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/zenvy-rib-womens-yoga-apparel-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/zenvy-rib-womens-yoga-apparel-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/zenvy-rib-womens-yoga-apparel-worn.png"
        ]
    },
    {
        id: 36,
        name: "Nike Air Zoom Structure",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e55a9c09-d03e-4f01-b977-a40772b98d80/NIKE+AIR+ZOOM+STRUCTURE+24.png",
        description: "The Nike Air Zoom Structure delivers the stability you need to run with confidence. The refreshed upper uses multiple layers of breathable mesh and synthetic materials for durability and support.",
        colors: ["Black/White", "Blue/Silver", "Grey/Volt", "Red/Black", "White/Blue"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-zoom-structure-mens-road-running-shoes-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-zoom-structure-mens-road-running-shoes-top.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-zoom-structure-mens-road-running-shoes-back.png"
        ]
    },
    {
        id: 37,
        name: "Nike Dri-FIT Training Top",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2900,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2b61fdfc-4c78-43aa-8d6a-e301cceb8097/AS+W+NK+ONE+CLASSIC+DF+TANK.png",
        description: "The Nike Dri-FIT Training Top is made with sweat-wicking technology to help keep you dry and comfortable during your workout. The lightweight fabric and ergonomic seams allow for a natural range of motion.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/dri-fit-womens-training-top-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/dri-fit-womens-training-top-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/dri-fit-womens-training-top-worn.png"
        ]
    },
    {
        id: 38,
        name: "Nike Air Max Plus",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/33f28084-0962-4632-92d7-bde08cdc2839/AIR+MAX+PLUS+ECLAIR+LIGHTENING.png",
        description: "The Nike Air Max Plus Eclair Lightning brings bold style with its iconic design. Featuring visible Air cushioning technology and a tuned Air system, these shoes deliver both comfort and a head-turning aesthetic.",
        colors: ["Black/Volt", "White/Blue", "Grey/Orange", "Red/Black", "Blue/White"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-max-plus-mens-shoes-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-max-plus-mens-shoes-top.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-max-plus-mens-shoes-back.png"
        ]
    },
    {
        id: 39,
        name: "Nike Pro Training Bra",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/54e4c772-0df9-44ad-a43f-748b6466adcc/AS+W+NP+INDY+PLUNGE+BRA+BOLD.png",
        description: "The Nike Pro Training Bra provides the perfect balance of support and comfort for your workouts. The sweat-wicking fabric and adjustable straps ensure a secure fit, while the mesh panels enhance breathability.",
        colors: ["Black", "White", "Grey", "Pink", "Blue"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/pro-training-bra-back.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/pro-training-bra-detail.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/pro-training-bra-worn.png"
        ]
    },
    {
        id: 40,
        name: "Nike Air Force 1 '07 Low",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 8300,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bf6159aa-7db1-4cdd-913e-bda14cd66bd5/WMNS+AIR+FORCE+1+%2707+LX.png",
        description: "The radiance lives on in the Nike Air Force 1 '07 Low, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
        colors: ["White/White", "Black/Black", "Sail/White", "Triple White", "Triple Black"],
        sizes: ["5", "6", "7", "8", "9", "10", "11"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-force-1-07-low-womens-shoes-side.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-force-1-07-low-womens-shoes-top.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5e17d3eb-c17b-4f2c-8a4d-e41a0709b8b1/air-force-1-07-low-womens-shoes-back.png"
        ]
    },

    {
        id: 41,
        name: "Nike Therma-FIT Training Jacket",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49745316-7bd6-4966-b2a4-26de67eedf4c/AS+M+NK+RPL+STRK%2B+HD+JKT+W.png",
        description: "The Nike Sportswear Club Fleece Kids Hoodie is made with soft, brushed-back fleece for all-day comfort. The adjustable hood and kangaroo pocket provide practical features for everyday wear.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49745316-7bd6-4966-b2a4-26de67eedf4c/AS+M+NK+RPL+STRK%2B+HD+JKT+W.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49745316-7bd6-4966-b2a4-26de67eedf4c/AS+M+NK+RPL+STRK%2B+HD+JKT+W.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49745316-7bd6-4966-b2a4-26de67eedf4c/AS+M+NK+RPL+STRK%2B+HD+JKT+W.png"
        ]
    },
    {
        id: 42,
        name: "Nike React Miler",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62e8fafa-45ff-4822-abad-5ab0738062d8/NIKE+AIR+ZOOM+RIVAL+FLY+4.png",
        description: "The Nike Dri-FIT Kids Training Shorts are made with sweat-wicking technology to help keep young athletes dry and comfortable. The lightweight fabric and elastic waistband provide a secure, comfortable fit.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["4", "6", "8", "10", "12", "14", "16"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62e8fafa-45ff-4822-abad-5ab0738062d8/NIKE+AIR+ZOOM+RIVAL+FLY+4.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62e8fafa-45ff-4822-abad-5ab0738062d8/NIKE+AIR+ZOOM+RIVAL+FLY+4.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/62e8fafa-45ff-4822-abad-5ab0738062d8/NIKE+AIR+ZOOM+RIVAL+FLY+4.png"
        ]
    },
    {
        id: 43,
        name: "Nike Dri-FIT Training Shorts",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4734f10d-7a9c-4089-85dc-2d8deaa14fbc/AS+W+NK+ONE+DF+HR+2IN1+SHORT.png",
        description: "The Nike Air Force 1 '07 Kids Shoes bring the classic style to your little one's wardrobe. The durable leather upper and Air-Sole unit provide comfort and support for all-day wear.",
        colors: ["White", "Black", "Red", "Blue", "Grey"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4734f10d-7a9c-4089-85dc-2d8deaa14fbc/AS+W+NK+ONE+DF+HR+2IN1+SHORT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4734f10d-7a9c-4089-85dc-2d8deaa14fbc/AS+W+NK+ONE+DF+HR+2IN1+SHORT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4734f10d-7a9c-4089-85dc-2d8deaa14fbc/AS+W+NK+ONE+DF+HR+2IN1+SHORT.png"
        ]
    },
    {
        id: 44,
        name: "Nike Air Max 270 React",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 14110,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4fd12abf-727b-41f5-9211-9e664235dde8/AIR+MAX+270.png",
        description: "The Nike Revolution 6 Kids Road Running Shoes deliver lightweight comfort for young runners. The breathable mesh upper and cushioned midsole provide support for active play and running.",
        colors: ["Black/White", "Blue/White", "Red/White", "Grey/Black", "White/Red"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4fd12abf-727b-41f5-9211-9e664235dde8/AIR+MAX+270.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4fd12abf-727b-41f5-9211-9e664235dde8/AIR+MAX+270.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4fd12abf-727b-41f5-9211-9e664235dde8/AIR+MAX+270.png"

        ]
    },
    {
        id: 45,
        name: "Nike Pro Training Pants",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c930392-4859-441e-8ab7-66d970a2e1ed/AS+M+NP+DF+TIGHT.png",
        description: "The Nike Air Max 270 Kids Shoes deliver all-day comfort with the largest Air unit yet. The lightweight upper and responsive cushioning make these shoes perfect for everyday wear.",
        colors: ["Black/White", "White/Red", "Blue/White", "Grey/Black", "Red/Black"],
        sizes:["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c930392-4859-441e-8ab7-66d970a2e1ed/AS+M+NP+DF+TIGHT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c930392-4859-441e-8ab7-66d970a2e1ed/AS+M+NP+DF+TIGHT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c930392-4859-441e-8ab7-66d970a2e1ed/AS+M+NP+DF+TIGHT.png"
        ]
    },
    {
        id: 46,
        name: "Nike Zoom Fly 5",
        category: "Men's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7003371-1bf1-470a-9819-cfcd52174932/W+ZOOM+FLY+6.png",

        description: "The Nike Dri-FIT Kids Training Top is made with sweat-wicking technology to help keep young athletes dry and comfortable during their workout. The lightweight fabric and ergonomic seams allow natural range of motion.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["4", "6", "8", "10", "12", "14", "16"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7003371-1bf1-470a-9819-cfcd52174932/W+ZOOM+FLY+6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7003371-1bf1-470a-9819-cfcd52174932/W+ZOOM+FLY+6.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c7003371-1bf1-470a-9819-cfcd52174932/W+ZOOM+FLY+6.png"
        ]
    },
    {
        id: 47,
        name: "Nike Dri-FIT Training Leggings",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa7cef70-f953-4e1b-ad8c-9cd8aefb0704/AS+W+NK+DF+UNVRSA+HR+7%2F8+TGHT.png",
        description: "The Nike Sportswear Club Fleece Kids Hoodie is made with soft, brushed-back fleece for all-day comfort. The adjustable hood and kangaroo pocket provide practical features for everyday wear.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa7cef70-f953-4e1b-ad8c-9cd8aefb0704/AS+W+NK+DF+UNVRSA+HR+7%2F8+TGHT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa7cef70-f953-4e1b-ad8c-9cd8aefb0704/AS+W+NK+DF+UNVRSA+HR+7%2F8+TGHT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/aa7cef70-f953-4e1b-ad8c-9cd8aefb0704/AS+W+NK+DF+UNVRSA+HR+7%2F8+TGHT.png"
        ]
    },
    {
        id: 48,
        name: "Nike Air Max 2090",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 12450,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9be73c40-4e33-4afc-bbc2-e3af3e2cbf56/AIR+MAX+90+G.png",
        description: "The Nike Dri-FIT Kids Training Shorts are made with sweat-wicking technology to help keep young athletes dry and comfortable. The lightweight fabric and elastic waistband provide a secure, comfortable fit.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["4", "6", "8", "10", "12", "14", "16"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9be73c40-4e33-4afc-bbc2-e3af3e2cbf56/AIR+MAX+90+G.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9be73c40-4e33-4afc-bbc2-e3af3e2cbf56/AIR+MAX+90+G.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9be73c40-4e33-4afc-bbc2-e3af3e2cbf56/AIR+MAX+90+G.png"
        ]
    },
    {
        id: 49,
        name: "Nike Pro Training Hoodie",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/516c42e6-256f-4491-8b14-28837dce32f2/AS+M+NK+DF+HD+PO+GFX.png",
        description: "The Nike Air Force 1 '07 Kids Shoes bring the classic style to your little one's wardrobe. The durable leather upper and Air-Sole unit provide comfort and support for all-day wear.",
        colors: ["White", "Black", "Red", "Blue", "Grey"],
        sizes:["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/516c42e6-256f-4491-8b14-28837dce32f2/AS+M+NK+DF+HD+PO+GFX.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/516c42e6-256f-4491-8b14-28837dce32f2/AS+M+NK+DF+HD+PO+GFX.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/516c42e6-256f-4491-8b14-28837dce32f2/AS+M+NK+DF+HD+PO+GFX.png",


        ]
    },
    {
        id: 50,
        name: "Nike React Infinity Run",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 16600,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/639129a4-b012-4f51-8ee8-0e1dfef712a4/W+NIKE+REACTX+INFINITY+RUN+4.png",
        description: "The Nike Revolution 6 Kids Road Running Shoes deliver lightweight comfort for young runners. The breathable mesh upper and cushioned midsole provide support for active play and running.",
        colors: ["Black/White", "Blue/White", "Red/White", "Grey/Black", "White/Red"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/639129a4-b012-4f51-8ee8-0e1dfef712a4/W+NIKE+REACTX+INFINITY+RUN+4.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/639129a4-b012-4f51-8ee8-0e1dfef712a4/W+NIKE+REACTX+INFINITY+RUN+4.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/639129a4-b012-4f51-8ee8-0e1dfef712a4/W+NIKE+REACTX+INFINITY+RUN+4.png",

        ]
    },
    {
        id: 51,
        name: "Nike Dri-FIT Training Tank",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a6779151-2bb1-46f0-ad8f-d330dc299325/AS+W+NK+ONE+FITTED+DFCROPTNKNV.png",
         description: "The Nike Air Max 90 Kids Shoes bring the iconic style to your little one's wardrobe. The visible Air unit and durable construction provide comfort and support for all-day wear.",
        colors: ["Black/White", "White/Red", "Blue/White", "Grey/Black", "University Red"],
        sizes:["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a6779151-2bb1-46f0-ad8f-d330dc299325/AS+W+NK+ONE+FITTED+DFCROPTNKNV.png", 
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a6779151-2bb1-46f0-ad8f-d330dc299325/AS+W+NK+ONE+FITTED+DFCROPTNKNV.png", 
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a6779151-2bb1-46f0-ad8f-d330dc299325/AS+W+NK+ONE+FITTED+DFCROPTNKNV.png", 

        ]
    },

    {

       
        id: 52,
        name: "Nike Air Max 720",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a86c8878-8ad1-4e7c-b930-cb40aeb17e74/WMNS+AIR+MAX+COMMAND+PRM.png",
        description: "The Nike Blazer Mid '77 Kids Shoes bring classic style to your little one's wardrobe. The durable leather upper and rubber outsole provide comfort and support for everyday wear.",
        colors: ["White/Black", "Sail/Red", "Black/White", "Green/White", "Blue/White"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a86c8878-8ad1-4e7c-b930-cb40aeb17e74/WMNS+AIR+MAX+COMMAND+PRM.png",
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a86c8878-8ad1-4e7c-b930-cb40aeb17e74/WMNS+AIR+MAX+COMMAND+PRM.png",
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a86c8878-8ad1-4e7c-b930-cb40aeb17e74/WMNS+AIR+MAX+COMMAND+PRM.png",

        ]
    },
    {
        id: 53,
        name: "Nike Pro Training Shorts",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0de70fe-1f30-4a41-bdcd-f93cafda2254/AS+M+NP+DF+SHORT.png",
        description: "The Nike React Infinity Run Kids Shoes deliver a smooth, stable ride for young runners. The React foam and Flyknit upper provide responsive cushioning and breathable comfort.",
        colors: ["Black/Volt", "White/Blue", "Grey/Red", "Blue/White", "Red/Black"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0de70fe-1f30-4a41-bdcd-f93cafda2254/AS+M+NP+DF+SHORT.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0de70fe-1f30-4a41-bdcd-f93cafda2254/AS+M+NP+DF+SHORT.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0de70fe-1f30-4a41-bdcd-f93cafda2254/AS+M+NP+DF+SHORT.png",

        ]
    },
    {
        id: 54,
        name: "Nike Air Zoom Pegasus 39",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b3eff57-dd39-45ea-b636-2ed2940d0371/W+AIR+ZOOM+PEGASUS+41.png",
        description: "The Nike Air Zoom Pegasus 38 Kids Shoes deliver responsive cushioning for young runners. The Zoom Air units and engineered mesh upper provide a smooth, comfortable ride.",
        colors: ["Black/White", "Blue/Red", "Grey/Orange", "White/Blue", "Red/Black"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b3eff57-dd39-45ea-b636-2ed2940d0371/W+AIR+ZOOM+PEGASUS+41.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b3eff57-dd39-45ea-b636-2ed2940d0371/W+AIR+ZOOM+PEGASUS+41.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b3eff57-dd39-45ea-b636-2ed2940d0371/W+AIR+ZOOM+PEGASUS+41.png",

        ]
    },
    {
        id: 55,
        name: "Nike Dri-FIT Training Jacket",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79d74183-87bb-4eb7-91c9-a46dc04abd14/AS+W+NK+ONE+DF+JACKET+OPP2.png",
        description: "The Nike Dri-FIT Kids Training Top is made with sweat-wicking technology to help keep young athletes dry and comfortable during their workout. The lightweight fabric and ergonomic seams allow natural range of motion.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79d74183-87bb-4eb7-91c9-a46dc04abd14/AS+W+NK+ONE+DF+JACKET+OPP2.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79d74183-87bb-4eb7-91c9-a46dc04abd14/AS+W+NK+ONE+DF+JACKET+OPP2.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/79d74183-87bb-4eb7-91c9-a46dc04abd14/AS+W+NK+ONE+DF+JACKET+OPP2.png",

        ]
    },
    {
        id: 56,
        name: "Nike Air Max 270",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 12450,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78a0d42c-471f-4fdd-84c3-b64fd6d006c4/NIKE+AIR+MAX+270+GS.png",
        description: "The Nike Sportswear Club Fleece Kids Hoodie is made with soft, brushed-back fleece for all-day comfort. The adjustable hood and kangaroo pocket provide practical features for everyday wear.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["4", "6", "8", "10", "12", "14", "16"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78a0d42c-471f-4fdd-84c3-b64fd6d006c4/NIKE+AIR+MAX+270+GS.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78a0d42c-471f-4fdd-84c3-b64fd6d006c4/NIKE+AIR+MAX+270+GS.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78a0d42c-471f-4fdd-84c3-b64fd6d006c4/NIKE+AIR+MAX+270+GS.png",
        ]
    },
    {
        id: 57,
        name: "Nike Pro Training Pants",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed74e81d-3d4f-401c-be26-80501b58487a/AS+W+NP+SCULPT+DF+HR+TIGHT.png",
        description: "The Nike Dri-FIT Kids Training Shorts are made with sweat-wicking technology to help keep young athletes dry and comfortable. The lightweight fabric and elastic waistband provide a secure, comfortable fit.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed74e81d-3d4f-401c-be26-80501b58487a/AS+W+NP+SCULPT+DF+HR+TIGHT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed74e81d-3d4f-401c-be26-80501b58487a/AS+W+NP+SCULPT+DF+HR+TIGHT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ed74e81d-3d4f-401c-be26-80501b58487a/AS+W+NP+SCULPT+DF+HR+TIGHT.png",

        ]
    },
    {
        id: 58,
        name: "Nike React Miler 3",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdd9bd43-1d83-49ae-90a7-cfcc2f877749/WMNS+ZOOMX+INVINCIBLE+RUN+FK+3.png",
        description: "The Nike Air Force 1 '07 Kids Shoes bring the classic style to your little one's wardrobe. The durable leather upper and Air-Sole unit provide comfort and support for all-day wear.",
        colors: ["White", "Black", "Red", "Blue", "Grey"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdd9bd43-1d83-49ae-90a7-cfcc2f877749/WMNS+ZOOMX+INVINCIBLE+RUN+FK+3.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdd9bd43-1d83-49ae-90a7-cfcc2f877749/WMNS+ZOOMX+INVINCIBLE+RUN+FK+3.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fdd9bd43-1d83-49ae-90a7-cfcc2f877749/WMNS+ZOOMX+INVINCIBLE+RUN+FK+3.png",

        ]
    },
    {
        id: 59,
        name: "Nike Dri-FIT Training Hoodie",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b166e38e-3e86-401f-8d45-9f478f921601/AS+W+NK+ONE+DF+FZ+HOODIE+LBR.png",
        description: "The Nike Revolution 6 Kids Road Running Shoes deliver lightweight comfort for young runners. The breathable mesh upper and cushioned midsole provide support for active play and running.",
        colors: ["Black/White", "Blue/White", "Red/White", "Grey/Black", "White/Red"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b166e38e-3e86-401f-8d45-9f478f921601/AS+W+NK+ONE+DF+FZ+HOODIE+LBR.png",
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b166e38e-3e86-401f-8d45-9f478f921601/AS+W+NK+ONE+DF+FZ+HOODIE+LBR.png",
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b166e38e-3e86-401f-8d45-9f478f921601/AS+W+NK+ONE+DF+FZ+HOODIE+LBR.png",
        ]
    },
    {
        id: 60,
        name: "Nike Air Max 90",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 12450,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e45vf6wjfhyf8ypen5li/AIR+MAX+90.png",
        description: "The Nike Air Max 270 Kids Shoes deliver all-day comfort with the largest Air unit yet. The lightweight upper and responsive cushioning make these shoes perfect for everyday wear.",
        colors: ["Black/White", "White/Red", "Blue/White", "Grey/Black", "Red/Black"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e45vf6wjfhyf8ypen5li/AIR+MAX+90.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e45vf6wjfhyf8ypen5li/AIR+MAX+90.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e45vf6wjfhyf8ypen5li/AIR+MAX+90.png",

        ]
    },
    {
        id: 61,
        name: "Nike Pro Training Tank",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55820803-0d4e-429a-a3fb-ff70296cedc3/AS+M+NP+DF+TOP+SL+TIGHT.png",
        description: "The Nike Dri-FIT Kids Training Top is made with sweat-wicking technology to help keep young athletes dry and comfortable during their workout. The lightweight fabric and ergonomic seams allow natural range of motion.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55820803-0d4e-429a-a3fb-ff70296cedc3/AS+M+NP+DF+TOP+SL+TIGHT.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55820803-0d4e-429a-a3fb-ff70296cedc3/AS+M+NP+DF+TOP+SL+TIGHT.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/55820803-0d4e-429a-a3fb-ff70296cedc3/AS+M+NP+DF+TOP+SL+TIGHT.png",

        ]
    },
    {
        id: 62,
        name: "Nike Zoom Fly 5",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/136905cb-f040-4e33-a9d4-65d0c2b30fda/W+NIKE+ZOOMX+ZEGAMA+TRAIL+2.png",
        description: "The Nike Sportswear Club Fleece Kids Hoodie is made with soft, brushed-back fleece for all-day comfort. The adjustable hood and kangaroo pocket provide practical features for everyday wear.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["4", "6", "8", "10", "12", "14", "16"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/136905cb-f040-4e33-a9d4-65d0c2b30fda/W+NIKE+ZOOMX+ZEGAMA+TRAIL+2.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/136905cb-f040-4e33-a9d4-65d0c2b30fda/W+NIKE+ZOOMX+ZEGAMA+TRAIL+2.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/136905cb-f040-4e33-a9d4-65d0c2b30fda/W+NIKE+ZOOMX+ZEGAMA+TRAIL+2.png",

        ]
    },
    {
        id: 63,
        name: "Nike Dri-FIT Training Leggings",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 4565,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4637ae5b-1298-4453-aa58-322d8d2958d9/AS+M+NP+DF+3QT+TIGHT.png",
        description: "The Nike Dri-FIT Kids Training Shorts are made with sweat-wicking technology to help keep young athletes dry and comfortable. The lightweight fabric and elastic waistband provide a secure, comfortable fit.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4637ae5b-1298-4453-aa58-322d8d2958d9/AS+M+NP+DF+3QT+TIGHT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4637ae5b-1298-4453-aa58-322d8d2958d9/AS+M+NP+DF+3QT+TIGHT.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4637ae5b-1298-4453-aa58-322d8d2958d9/AS+M+NP+DF+3QT+TIGHT.png",

        ]
    },
    {
        id: 64,
        name: "Nike Air Max Plus",
        category: "Women's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 16600,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d227de0b-03b2-420d-a8c9-6b1b9a6e0edb/WMNS+AIR+MAX+PLUS.png",
        description: "The Nike Air Force 1 '07 Kids Shoes bring the classic style to your little one's wardrobe. The durable leather upper and Air-Sole unit provide comfort and support for all-day wear.",
        colors: ["White", "Black", "Red", "Blue", "Grey"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d227de0b-03b2-420d-a8c9-6b1b9a6e0edb/WMNS+AIR+MAX+PLUS.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d227de0b-03b2-420d-a8c9-6b1b9a6e0edb/WMNS+AIR+MAX+PLUS.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d227de0b-03b2-420d-a8c9-6b1b9a6e0edb/WMNS+AIR+MAX+PLUS.png",
       
        ]
    },
    {
        id: 65,
        name: "Nike Pro Training Bra",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/755bb859-4b00-4c30-b607-a462249222db/AS+W+NK+DF+INDY+HGH+SPT+BRA.png",
        description: "The Nike Revolution 6 Kids Road Running Shoes deliver lightweight comfort for young runners. The breathable mesh upper and cushioned midsole provide support for active play and running.",
        colors: ["Black/White", "Blue/White", "Red/White", "Grey/Black", "White/Red"],
        sizes:["XS", "S", "M", "L", "XL"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/755bb859-4b00-4c30-b607-a462249222db/AS+W+NK+DF+INDY+HGH+SPT+BRA.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/755bb859-4b00-4c30-b607-a462249222db/AS+W+NK+DF+INDY+HGH+SPT+BRA.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/755bb859-4b00-4c30-b607-a462249222db/AS+W+NK+DF+INDY+HGH+SPT+BRA.png",

        ]
    },
    {
        id: 66,
        name: "Nike Air Zoom Structure",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.4,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e55a9c09-d03e-4f01-b977-a40772b98d80/NIKE+AIR+ZOOM+STRUCTURE+24.png",
        description: "The Nike Air Max 270 Kids Shoes deliver all-day comfort with the largest Air unit yet. The lightweight upper and responsive cushioning make these shoes perfect for everyday wear.",
        colors: ["Black/White", "White/Red", "Blue/White", "Grey/Black", "Red/Black"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e55a9c09-d03e-4f01-b977-a40772b98d80/NIKE+AIR+ZOOM+STRUCTURE+24.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e55a9c09-d03e-4f01-b977-a40772b98d80/NIKE+AIR+ZOOM+STRUCTURE+24.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e55a9c09-d03e-4f01-b977-a40772b98d80/NIKE+AIR+ZOOM+STRUCTURE+24.png",

        ]
    },
    {
        id: 67,
        name: "Nike Dri-FIT Training Top",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2900,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb19e6a4-803a-4d80-b650-404aa1492fd2/AS+M+NP+DF+TIGHT+TOP+SS.png",
        description: "The Nike Dri-FIT Kids Training Top is made with sweat-wicking technology to help keep young athletes dry and comfortable during their workout. The lightweight fabric and ergonomic seams allow natural range of motion.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb19e6a4-803a-4d80-b650-404aa1492fd2/AS+M+NP+DF+TIGHT+TOP+SS.png",
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb19e6a4-803a-4d80-b650-404aa1492fd2/AS+M+NP+DF+TIGHT+TOP+SS.png",
         "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cb19e6a4-803a-4d80-b650-404aa1492fd2/AS+M+NP+DF+TIGHT+TOP+SS.png",

        ]
    },
    {
        id: 68,
        name: "Nike Air Force 1 '07 Low",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 8300,
        rating: 4.8,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/daac1905-ddc0-4860-9903-dfb3b05ec37a/WMNS+AIR+FORCE+1+%2707+NN.png",
        description: "The Nike Sportswear Club Fleece Kids Hoodie is made with soft, brushed-back fleece for all-day comfort. The adjustable hood and kangaroo pocket provide practical features for everyday wear.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["4", "6", "8", "10", "12", "14", "16"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/daac1905-ddc0-4860-9903-dfb3b05ec37a/WMNS+AIR+FORCE+1+%2707+NN.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/daac1905-ddc0-4860-9903-dfb3b05ec37a/WMNS+AIR+FORCE+1+%2707+NN.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/daac1905-ddc0-4860-9903-dfb3b05ec37a/WMNS+AIR+FORCE+1+%2707+NN.png",

        ]
    },
    { 
        id: 69,
        name: "Nike Therma-FIT Training Jacket",
        category: "Women's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 7470,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3bf8c1e8-53be-4fc1-af4e-c9024b45b44d/AS+W+NK+ONE+DF+JACKET+I2SP.png",
        description: "The Nike Dri-FIT Kids Training Shorts are made with sweat-wicking technology to help keep young athletes dry and comfortable. The lightweight fabric and elastic waistband provide a secure, comfortable fit.",
        colors: ["Black", "Grey", "Navy", "Red", "White"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3bf8c1e8-53be-4fc1-af4e-c9024b45b44d/AS+W+NK+ONE+DF+JACKET+I2SP.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3bf8c1e8-53be-4fc1-af4e-c9024b45b44d/AS+W+NK+ONE+DF+JACKET+I2SP.png",
            "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3bf8c1e8-53be-4fc1-af4e-c9024b45b44d/AS+W+NK+ONE+DF+JACKET+I2SP.png",

        ]
    },
    {
        id: 70,
        name: "Nike React Miler",
        category: "Women's Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 12450,
        rating: 4.5,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fbb2d2d-340f-46cb-b5c1-e101cf5b98c3/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
        description: "The Nike Air Force 1 '07 Kids Shoes bring the classic style to your little one's wardrobe. The durable leather upper and Air-Sole unit provide comfort and support for all-day wear.",
        colors: ["White", "Black", "Red", "Blue", "Grey"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fbb2d2d-340f-46cb-b5c1-e101cf5b98c3/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fbb2d2d-340f-46cb-b5c1-e101cf5b98c3/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8fbb2d2d-340f-46cb-b5c1-e101cf5b98c3/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",

        ]
    },
    {
        id: 71,
        name: "Nike Air Max 270 React",
        category: "Men's Lifestyle Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 14110,
        rating: 4.7,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d164455-549f-457b-b335-01f10df1dbd7/W+AIR+MAX+270.png",
        description: "The Nike Revolution 6 Kids Road Running Shoes deliver lightweight comfort for young runners. The breathable mesh upper and cushioned midsole provide support for active play and running.",
        colors: ["Black/White", "Blue/White", "Red/White", "Grey/Black", "White/Red"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d164455-549f-457b-b335-01f10df1dbd7/W+AIR+MAX+270.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d164455-549f-457b-b335-01f10df1dbd7/W+AIR+MAX+270.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7d164455-549f-457b-b335-01f10df1dbd7/W+AIR+MAX+270.png",

        ]
    },
    {  id: 72,
        name: "Nike Dri-FIT Training Shorts",
        category: "Men's Training Apparel",
        type: "Clothing",
        sport: "Training",
        price: 2490,
        rating: 4.6,
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/857c992d-332f-4a6d-b6ab-61a7ea07d77f/AS+M+NK+DF+UNLMTD+5IN+UL+SEERS.png",
        description: "The Nike Air Max 270 Kids Shoes deliver all-day comfort with the largest Air unit yet. The lightweight upper and responsive cushioning make these shoes perfect for everyday wear.",
        colors: ["Black/White", "White/Red", "Blue/White", "Grey/Black", "Red/Black"],
        sizes: ["XS", "S", "M", "L", "XL"],
        additionalImages: [
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/857c992d-332f-4a6d-b6ab-61a7ea07d77f/AS+M+NK+DF+UNLMTD+5IN+UL+SEERS.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/857c992d-332f-4a6d-b6ab-61a7ea07d77f/AS+M+NK+DF+UNLMTD+5IN+UL+SEERS.png",
             "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/857c992d-332f-4a6d-b6ab-61a7ea07d77f/AS+M+NK+DF+UNLMTD+5IN+UL+SEERS.png",

        ]
    },
    // Add products from Find Your Max section
    {
        id: "air-max-90-lv8",
        name: "Air Max 90 LV8",
        category: "Men's Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 11620,
        rating: 4.6,
        image: "img/image.jpg",
        description: "The Air Max 90 LV8 combines classic style with modern comfort. Perfect for everyday wear, these shoes feature the iconic Air Max cushioning for all-day comfort.",
        colors: ["Black/White", "Red/Black", "Blue/White"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "img/image.jpg",
            "img/image.jpg",
            "img/image.jpg"
        ]
    },
    {
        id: "air-max-plus",
        name: "Air Max Plus",
        category: "Men's Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 14110,
        rating: 4.8,
        image: "img/image2.jpg",
        description: "The Air Max Plus delivers maximum comfort with its innovative Tuned Air technology. The sleek design and responsive cushioning make these shoes perfect for both style and performance.",
        colors: ["Black/White", "Red/Black", "Blue/White"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "img/image2.jpg",
            "img/image2.jpg",
            "img/image2.jpg"
        ]
    },
    {
        id: "air-max-90",
        name: "Air Max 90",
        category: "Men's Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 10790,
        rating: 4.7,
        image: "img/image3.jpg",
        description: "The Air Max 90 is a timeless classic that never goes out of style. With its iconic design and comfortable Air Max cushioning, these shoes are perfect for everyday wear.",
        colors: ["Black/White", "Red/Black", "Blue/White"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "img/image3.jpg",
            "img/image3.jpg",
            "img/image3.jpg"
        ]
    },
    {
        id: "air-max-dn",
        name: "Air Max DN",
        category: "Men's Shoes",
        type: "Shoes",
        sport: "Lifestyle",
        price: 15770,
        rating: 4.9,
        image: "img/image1.jpg",
        description: "The Air Max DN represents the future of Air Max technology. With its innovative design and advanced cushioning, these shoes provide unparalleled comfort and style.",
        colors: ["Black/White", "Red/Black", "Blue/White"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "img/image1.jpg",
            "img/image1.jpg",
            "img/image1.jpg"
        ]
    },

    // Add products from New In Running section
    {
        id: "nike-vaporfly-4",
        name: "Nike Vaporfly 4",
        category: "Men's Road Racing Shoes",
        type: "Shoes",
        sport: "Running",
        price: 22495,
        originalPrice: 24995,
        discount: "10% off",
        image: "img/New In Running/vaporfly-4-road-racing-shoes-vdLF5d.png",
        rating: 4.5,
        description: "The Nike Vaporfly 4 is designed for speed. With its responsive ZoomX foam and carbon fiber plate, it helps you run faster with less effort.",
        colors: ["#e60012", "#000000", "#ffffff"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "img/New In Running/vaporfly-4-road-racing-shoes-vdLF5d.png",
            "img/New In Running/vaporfly-4-road-racing-shoes-vdLF5d.png",
            "img/New In Running/vaporfly-4-road-racing-shoes-vdLF5d.png"
        ]
    },
    {
        id: "nike-vomero-18",
        name: "Nike Vomero 18",
        category: "Older Kid's Road Running shoes",
        type: "Shoes",
        sport: "Running",
        price: 9995,
        image: "img/New In Running/vomero-18-older-road-running-shoes-50VPz0 (1).png",
        rating: 5,
        description: "The Nike Vomero 18 is designed for comfort and durability. Perfect for young runners, these shoes provide the support and cushioning needed for long runs.",
        colors: ["#005cb9", "#e3e4e6", "#3d3d3d"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
            "img/New In Running/vomero-18-older-road-running-shoes-50VPz0 (1).png",
            "img/New In Running/vomero-18-older-road-running-shoes-50VPz0 (1).png",
            "img/New In Running/vomero-18-older-road-running-shoes-50VPz0 (1).png"
        ]
    },
    {
        id: "nike-vomero-18-w",
        name: "Nike Vomero 18",
        category: "Older Kid's Road Running shoes",
        type: "Shoes",
        sport: "Running",
        price: 9995,
        originalPrice: 14995,
        discount: "11% off",
        image: "img/New In Running/vomero-18-older-road-running-shoes-50VPz0.png",
        rating: 4.5,
        description: "The Nike Vomero 18 is designed for comfort and durability. Perfect for young runners, these shoes provide the support and cushioning needed for long runs.",
        colors: ["#ffc0cb", "#000000", "#ffffff"],
        sizes: ["1", "2", "3", "4", "5", "6", "7"],
        additionalImages: [
            "img/New In Running/vomero-18-older-road-running-shoes-50VPz0.png",
            "img/New In Running/vomero-18-older-road-running-shoes-50VPz0.png",
            "img/New In Running/vomero-18-older-road-running-shoes-50VPz0.png"
        ]
    },
    {
        id: "Nike-Vomero-18",
        name: "Nike Vomero 18",
        category: "Men's Road Running Shoes",
        type: "Shoes",
        sport: "Running",
        price: 13995,
        image: "img/New In Running/vomero-18-road-running-shoes-r8NUvicZ.png",
        rating: 4.5,
        description: "The Nike Vomero 18 delivers a smooth, responsive ride for your everyday runs. With its responsive Zoom Air units and lightweight construction, it's perfect for runners of all levels.",
        colors: ["#000000", "#e3e4e6", "#3d3d3d"],
        sizes: ["7", "8", "9", "10", "11", "12", "13"],
        additionalImages: [
            "img/New In Running/vomero-18-road-running-shoes-r8NUvicZ.png",
            "img/New In Running/vomero-18-road-running-shoes-r8NUvicZ.png",
            "img/New In Running/vomero-18-road-running-shoes-r8NUvicZ.png"
        ]
    },


];

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to load product details
function loadProductDetails() {
    // Get product ID from URL
    const productId = getUrlParameter('id');

    if (!productId) {
        // If no product ID is provided, redirect to features page
        window.location.href = 'features.html';
        return;
    }

    // Find the product - now works with both numeric and string IDs
    const product = products.find(p => p.id == productId || p.id === productId);

    if (!product) {
        // If product not found, redirect to features page
        window.location.href = 'features.html';
        return;
    }

    // Update page title
    document.title = `${product.name} - Nike`;

    // Update product details
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-price').textContent = `₹${product.price}`;
    document.getElementById('product-description').textContent = product.description ||
        `Experience the ultimate comfort and style with the ${product.name}. Perfect for ${product.sport.toLowerCase()} activities, this ${product.type.toLowerCase()} offers superior performance and durability.`;

    // Set main product image
    document.getElementById('main-product-image').src = product.image;
    document.getElementById('main-product-image').alt = product.name;

    // Generate thumbnails
    const thumbnailContainer = document.getElementById('thumbnail-container');
    thumbnailContainer.innerHTML = '';

    // Add main image as first thumbnail
    const mainThumbnail = document.createElement('div');
    mainThumbnail.className = 'thumbnail active';
    mainThumbnail.innerHTML = `<img src="${product.image}" alt="${product.name}">`;
    mainThumbnail.addEventListener('click', function () {
        document.getElementById('main-product-image').src = product.image;
        // Update active thumbnail
        document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
        this.classList.add('active');
    });
    thumbnailContainer.appendChild(mainThumbnail);

    // Add additional images as thumbnails if available
    if (product.additionalImages && product.additionalImages.length > 0) {
        product.additionalImages.forEach((imgSrc, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            thumbnail.innerHTML = `<img src="${imgSrc}" alt="${product.name} - View ${index + 2}">`;
            thumbnail.addEventListener('click', function () {
                document.getElementById('main-product-image').src = imgSrc;
                // Update active thumbnail
                document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
            });
            thumbnailContainer.appendChild(thumbnail);
        });
    }

    // Generate color options
    const colorOptions = document.getElementById('color-options');
    colorOptions.innerHTML = '';

    if (product.colors && product.colors.length > 0) {
        product.colors.forEach(color => {
            const colorOption = document.createElement('div');
            colorOption.className = 'color-option';
            colorOption.setAttribute('data-color', color);

            // Create color circle
            const colorCircle = document.createElement('div');
            colorCircle.className = 'color-circle';

            // Set background color based on the color name
            const colorMap = {
                'Black/White': '#000000',
                'Red/Black': '#FF0000',
                'Blue/White': '#0000FF',
                'White/White': '#FFFFFF',
                'Black/Black': '#000000',
                'Sail/White': '#F5F5DC',
                'Gray/Black': '#808080',
                'Pink/White': '#FFC0CB'
            };

            colorCircle.style.backgroundColor = colorMap[color] || '#CCCCCC';

            colorOption.appendChild(colorCircle);
            colorOption.addEventListener('click', function () {
                // Update active color
                document.querySelectorAll('.color-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
            });
            colorOptions.appendChild(colorOption);
        });

        // Set first color as active by default
        colorOptions.querySelector('.color-option').classList.add('active');
    }

    // Generate size options
    const sizeOptions = document.getElementById('size-options');
    sizeOptions.innerHTML = '';

    if (product.sizes && product.sizes.length > 0) {
        product.sizes.forEach(size => {
            const sizeOption = document.createElement('div');
            sizeOption.className = 'size-option';
            sizeOption.setAttribute('data-size', size);
            sizeOption.innerHTML = `<span>${size}</span>`;
            sizeOption.addEventListener('click', function () {
                // Update active size
                document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
                this.classList.add('active');
            });
            sizeOptions.appendChild(sizeOption);
        });

        // Set first size as active by default
        sizeOptions.querySelector('.size-option').classList.add('active');
    }

    // Add event listener for Add to Cart button
    document.getElementById('add-to-cart-btn').addEventListener('click', function () {
        const selectedColor = document.querySelector('.color-option.active').dataset.color;
        const selectedSize = document.querySelector('.size-option.active').dataset.size;

        if (!selectedColor || !selectedSize) {
            showNotification('Please select both color and size');
            return;
        }

        addToCart(product, selectedColor, selectedSize);
    });

    // Load related products
    loadRelatedProducts(product);
}

// Function to load related products
function loadRelatedProducts(currentProduct) {
    const relatedProductsContainer = document.getElementById('related-products-container');
    relatedProductsContainer.innerHTML = '';

    // Find related products (same type or sport)
    const relatedProducts = products.filter(p =>
        p.id !== currentProduct.id &&
        (p.type === currentProduct.type || p.sport === currentProduct.sport)
    ).slice(0, 4); // Limit to 4 related products

    if (relatedProducts.length === 0) {
        relatedProductsContainer.innerHTML = '<p>No related products found.</p>';
        return;
    }

    relatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'related-product-card';

        // Generate stars based on rating
        const fullStars = Math.floor(product.rating);
        const hasHalfStar = product.rating % 1 >= 0.5;
        let starsHTML = '';

        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '★';
            } else if (i === fullStars && hasHalfStar) {
                starsHTML += '★';
            } else {
                starsHTML += '☆';
            }
        }

        productCard.innerHTML = `
            <div class="related-product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
                <div class="related-product-info">
                <h3 class="related-product-name">${product.name}</h3>
                <p class="related-product-category">${product.category}</p>
                <p class="related-product-price">₹${product.price}</p>
                <div class="related-product-rating">
                    <div class="stars">${starsHTML}</div>
                    <span>${product.rating}</span>
                </div>
                </div>
            `;

        // Add click event to navigate to product detail
        productCard.addEventListener('click', function () {
            window.location.href = `ProductDetail.html?id=${product.id}`;
        });

        relatedProductsContainer.appendChild(productCard);
    });
}

// Function to show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to add item to cart
function addToCart(product, color, size) {
    // Get existing cart from localStorage or initialize empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the exact same item (same product, color, and size) exists
    const existingItem = cart.find(item => 
        item.id === product.id && 
        item.color === color && 
        item.size === size
    );

    if (existingItem) {
        // Show alert that item is already in cart
        alert(`This item (${product.name} - Color: ${color}, Size: ${size}) is already in your cart!\nYou can adjust the quantity in the cart page.`);
        return;
    }

    // If item doesn't exist, add it to cart
    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        color: color,
        size: size,
        quantity: 1
    });

    // Save updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show success notification
    showNotification('Item added to cart successfully!');

    // Update cart count if function exists
    if (typeof window.updateCartCount === 'function') {
        window.updateCartCount();
    }
}

// Load product details when the page loads
document.addEventListener('DOMContentLoaded', loadProductDetails);
