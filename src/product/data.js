// const data = [{
//         id: 1,
//         categorySlug: "3D Printer",
//         item: [{
//                 id: "1",
//                 name: "Hurakan DIY 3D Printer",
//                 slug: "hurakan-diy-3d-printer",
//                 price: 9432000,
//                 discount: 799000,
//                 from: ["China", "US", "EU"],
//                 size: ["110V US Plug", "230EU Plug", "230V British Plug"],
//                 description: `01 - Dual USB Ports
//                         A USB flash drive can be used to print without an Internet connection, a USB plug and play camera can be connected for wireless monitoring.
                        
//                         02 - Power Supply Optional
//                         Suitable for different voltages of 100-120V/200-240V.
                        
//                         03 - RJ45 Port
//                         Offer a choice of a more reliable wired network connection.
//                         *Note: This is a Gigabit Ethernet port.Currently, the CB1 installed on Hurakan only supports 100M Ethernet. If you want to experience Gigabit Ethernel, you can replace CB1 with CM4.
                        
//                         04 - SPI Interface
//                         Designed for connecting an ADXL345 accelerometer to realize Klipper's Resonance Compensation for a higher precision print.`,
//                 status: 1,
//                 image: {
//                     imgAvt: "https://cdn.shopify.com/s/files/1/1619/4791/products/2_b45c2ce0-8337-4f20-b270-31fb220ec7a6_600x.png",
//                     img01: "https://cdn.shopify.com/s/files/1/1619/4791/products/3_72eb25a2-55d8-4c62-9537-2d0445e56935_600x.png",
//                     img02: "https://cdn.shopify.com/s/files/1/1619/4791/products/5_7e995980-8b9e-4a0e-a1d6-10559b70bb24_600x.png",
//                     img03: "https://cdn.shopify.com/s/files/1/1619/4791/products/4_9d82085a-db55-4661-a382-efb6ed42db2f_600x.png",
//                     img04: "https://cdn.shopify.com/s/files/1/1619/4791/products/2_b45c2ce0-8337-4f20-b270-31fb220ec7a6_600x.png"
//                 },
//                 system: {
//                     name: "IPS LCD4.7 Retina HD", //3D Printer Name
//                     dimensions: "480x470x482mm", //3D Printer Dimensions
//                     head: "1 PC", //Print Head
//                     diameter: "Standard 0.4mm", //Nozzle Diameter
//                     firmware: "Klipper", //Firmware
//                     output: "24V", //Output Voltage
//                     power: "100W/240W", //Heated Bed Power
//                     temperature: "260℃", //Maximum Temperature of Nozzle
//                     printSpeed: "60mm/s", //Suggested Printing Speed
//                     volume: "220x220x270mm", //Build Volume          
//                     layer: "0.1mm-0.3mm", //Layer Thickness          
//                     accuracy: "±0.05mm", //Printing Accuracy
//                     format: "G-code", //File Format
//                     method: "USB Drive/LAN Controlled", //Printing Method          
//                     ratePower: "280W", //Rated Power
//                     maxTemperature: "100℃", //Maximum Temperature of Heated Bed
//                     speedDefault: "180mm/s", //Default Speed Limit(Firmware)
//                     filament: "Standard Feature", //Filament Runout Detection
//                     voltageRated: "100-120V/200-240V 50/60 Hz" //Rated Voltage
//                 },
//             },
//             {
//                 id: "2",
//                 name: "PIXEL L 9.1 inch 4K Photocuring LCD 3D Printer",
//                 slug: "pixel-4k-photocuring",
//                 price: 23373000,
//                 discount: 799000,
//                 from: ["China", "US", "EU"],
//                 description: `https://cdn.shopifycdn.net/s/files/1/1619/4791/files/1_90cf9b0f-d764-410f-b847-18a312b97591.jpg`,
//                 status: 1,
//                 image: {
//                     imgAvt: "https://cdn.shopify.com/s/files/1/1619/4791/products/Pixel_600x.png",
//                     img01: "https://cdn.shopify.com/s/files/1/1619/4791/products/Pixel_600x.jpg",
//                     img02: "https://cdn.shopify.com/s/files/1/1619/4791/products/3_fcc7c391-d909-4877-9f33-f2e666741050_600x.jpg",
//                     img03: "https://cdn.shopify.com/s/files/1/1619/4791/products/2_9bc9f091-f225-4695-a7d8-b675a32579da_600x.jpg",
//                     img04: "https://cdn.shopify.com/s/files/1/1619/4791/products/Pixel_600x.png"
//                 },
//             },
//             {
//                 id: "3",
//                 name: "B1 SE PLUS 3D Printer Upgrade 32Bit Control Board Full Metal Extruder With TMC Drive Automatic Leveling DIY 3D Drucker Kit",
//                 slug: "b1-se-plus",
//                 price: 18980000,
//                 discount: 799000,
//                 from: ["China", "US", "EU"],
//                 description: `https://cdn.shopifycdn.net/s/files/1/1619/4791/files/3_6a6f0d82-6484-488e-a321-1b9250f81902.jpg`,
//                 status: 1,
//                 image: {
//                     imgAvt: "https://cdn.shopify.com/s/files/1/1619/4791/products/B1seplusprinter_600x.jpg",
//                     img01: "https://cdn.shopify.com/s/files/1/1619/4791/products/0_600x.jpg",
//                     img02: "https://cdn.shopify.com/s/files/1/1619/4791/products/1_cfd9b10e-e49a-4a14-b55b-182e999b0343_600x.jpg",
//                     img03: "https://cdn.shopify.com/s/files/1/1619/4791/products/0_600x.jpg"
//                 },
//             },
//             {
//                 id: "4",
//                 name: "BX 3D Printer FDM 3D printer with 32 bit 400MHZ motherboard integrated octoprint",
//                 slug: "bx-fdm-3d",
//                 price: 12980000,
//                 discount: 799000,
//                 from: ["China", "US", "EU"],
//                 size: ["110V US Plug", "230EU Plug", "230V British Plug"],
//                 description: `https://cdn.shopifycdn.net/s/files/1/1619/4791/files/BX.jpg`,
//                 status: 1,
//                 image: {
//                     imgAvt: "https://cdn.shopify.com/s/files/1/1619/4791/products/BXprinter_600x.jpg",
//                     img01: "https://cdn.shopify.com/s/files/1/1619/4791/products/1_fd611b97-db5f-4d4a-a48b-d0f247abaea8_600x.jpg",
//                     img02: "https://cdn.shopify.com/s/files/1/1619/4791/products/2_5b8f15d8-66cd-4a72-9ff3-a0a584aa4ceb_600x.jpg",
//                     img03: "https://cdn.shopify.com/s/files/1/1619/4791/products/3_6a9fa1ce-4c78-4190-a519-750cb0bf22c0_600x.jpg"
//                 },
//             },
//             {
//                 id: "5",
//                 name: "B1 3D Printer TFT35 B1 V3.0 Dual Operation System FDM 3D printer",
//                 slug: "b1-tft35-dual-operation-system",
//                 price: 8950000,
//                 discount: 799000,
//                 from: ["China", "US", "EU"],
//                 size: ["110V ", "230EU Plug", "230V British Plug"],
//                 description: `https://cdn.shopify.com/videos/c/o/v/99c6b23dd5194daaac9065fa2635ffe9.mp4`,
//                 status: 1,
//                 image: {
//                     imgAvt: "https://cdn.shopify.com/s/files/1/1619/4791/products/B1printer_600x.jpg",
//                     img01: "https://cdn.shopify.com/s/files/1/1619/4791/products/4_cb198f18-a44f-4a3e-995e-724b11caf5a6_1_600x.jpg",
//                     img02: "https://cdn.shopify.com/s/files/1/1619/4791/products/2_0cfd0b8d-19ac-4600-a15c-f85705e6099d_600x.jpg",
//                     img03: "https://cdn.shopify.com/s/files/1/1619/4791/products/5_0dbc020f-f64d-424e-8520-ae16027910fd_600x.jpg"
//                 },
//             },
//         ]
//     },
//     {
//         id: 2,
//         categorySlug: "Control Board",
//         item: [{
//                 id: "1",
//                 name: "BIGTREETECH PI4B Adapter V1.0 for CM4 or CB1",
//                 slug: "bigtreetech",
//                 price: 145000,
//                 discount: 10000,
//                 from: ["China", "US", "EU"],
//                 option: ["Pro", "V1.0", "V1.1", "V3.0", "Mini"],
//                 description: `https://cdn.shopify.com/s/files/1/1619/4791/files/PI4B_CM4CB1-_1_01.jpg`,
//                 status: 1,
//                 image: {
//                     imgAvt: "https://cdn.shopify.com/s/files/1/1619/4791/products/1_8f611c0a-ec7d-4f9b-85ca-d5a57bb700e6_600x.jpg",
//                     img01: "https://cdn.shopify.com/s/files/1/1619/4791/products/2_b6f9123e-4cd7-42d4-a0e8-340f2483312d_600x.jpg",
//                     img02: "https://cdn.shopify.com/s/files/1/1619/4791/products/3_df450690-b697-4c87-be0a-f6c79cbcdd13_600x.jpg",
//                     img03: "https://cdn.shopify.com/s/files/1/1619/4791/products/4_8a9e0daf-1a3e-411c-9818-aaaccdfd888b_600x.jpg",
//                     img04: "https://cdn.shopify.com/s/files/1/1619/4791/products/1_8f611c0a-ec7d-4f9b-85ca-d5a57bb700e6_600x.jpg"
//                 }
//             },
//             {
//                 id: "2",
//                 name: "BIGTREETECH Manta M4P/M8P Control Board running Klipper with CB1/CM4",
//                 slug: "bigtreetech-manta",
//                 price: 189000,
//                 discount: 23000,
//                 from: ["China", "US", "EU"],
//                 description: `https://cdn.shopify.com/s/files/1/1619/4791/t/48/assets/2_06-1662542152728.jpg`,
//                 status: 1,
//                 image: {
//                     imgAvt: "https://cdn.shopify.com/s/files/1/1619/4791/products/3_26ebe1dd-9242-4226-b0a2-55e94a934acd_600x.jpg",
//                     img01: "https://cdn.shopify.com/s/files/1/1619/4791/products/3_e70b5540-5c9e-47d5-aa06-9db6fb32be68_600x.jpg",
//                     img02: "https://cdn.shopify.com/s/files/1/1619/4791/products/CB1-1_600x.jpg",
//                     img03: "https://cdn.shopify.com/s/files/1/1619/4791/products/CB1-2_600x.jpg",
//                     img04: "https://cdn.shopify.com/s/files/1/1619/4791/products/3_26ebe1dd-9242-4226-b0a2-55e94a934acd_600x.jpg"
//                 },
//             }
//         ]
//     }
// ]

const data = [

    {
        "id": 6730645143650,
        "title": "BIGTREETECH PI4B Adapter V1.0 for CM4 or CB1",
        "type": "3D Printer Control Board",
        "handle": "pi4b-adapter-v1-0",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 267411095650, 267109564514, 373322819, 261926125666],
        "tags": ["3d printer board", "3d printer motherboard", "cb1", "Control Board", "Expansion Board", "Main board"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_8f611c0a-ec7d-4f9b-85ca-d5a57bb700e6.jpg?v=1656744827", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_b6f9123e-4cd7-42d4-a0e8-340f2483312d.jpg?v=1656744827", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_df450690-b697-4c87-be0a-f6c79cbcdd13.jpg?v=1656744829", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_8a9e0daf-1a3e-411c-9818-aaaccdfd888b.jpg?v=1656744828", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_b06e0a40-0912-4ded-8a0e-4831c6c860a8.jpg?v=1656744828", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_16622a7e-b5c0-4898-b8b1-a8ddc2883e79.jpg?v=1656744827", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_bffb8e3d-5aa6-46d2-b156-1851d0850a33.jpg?v=1656744827", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/8_52772357-d764-467c-8583-bcf456037462.jpg?v=1656744828", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/9_c0fb8aa3-bab9-405f-bd86-0ebf508acf30.jpg?v=1656744828", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/11_af44a289-f996-4c47-b12f-cc78d0c4be01.jpg?v=1656744828", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_MINIE3V3.0.jpg?v=1656748528", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_1.1.jpg?v=1656748529", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_407.jpg?v=1656748529", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_pro1.0.1.jpg?v=1656748529", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_Pro429.jpg?v=1656748529", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B.jpg?v=1656748529", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_a26b4d72-9a2a-4748-aafb-ebac78033dff.jpg?v=1656753984"],
        "first_available_variant": {
            "id": 39847230242914
        },
        "available": true,
        "variants": [{
            "id": 39847230242914,
            "title": "CB1+PI4B",
            "price": 3998,
            "available": true,
            "inventory_quantity": 140,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B.jpg?v=1656748529"
        }, 
        {
            "id": 39919128969314,
            "title": "PI4B",
            "price": 1890,
            "available": true,
            "inventory_quantity": 690,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_8f611c0a-ec7d-4f9b-85ca-d5a57bb700e6.jpg?v=1656744827"
        }, 
        {
            "id": 39847230275682,
            "title": "CB1+PI4B+Octopus Pro V1.0（F429）",
            "price": 9800,
            "available": true,
            "inventory_quantity": 90,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_Pro429.jpg?v=1656748529"
        }, 
        {
            "id": 39847230308450,
            "title": "CB1+PI4B+Octopus V1.1(407)",
            "price": 7900,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_407.jpg?v=1656748529"
        }, 
        {
            "id": 39847230963810,
            "title": "CB1+PI4B+SKR MINI E3 V3.0",
            "price": 7368,
            "available": true,
            "inventory_quantity": 77,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_MINIE3V3.0.jpg?v=1656748528"
        }, 
        {
            "id": 39847230996578,
            "title": "CB1+PI4B+Octopus Pro V1.0 (F446)",
            "price": 9800,
            "available": true,
            "inventory_quantity": 97,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_pro1.0.1.jpg?v=1656748529"
        }, 
        {
            "id": 39847231029346,
            "title": "CB1+PI4B+Octopus V1.1",
            "price": 8450,
            "available": true,
            "inventory_quantity": 97,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_PI4B_1.1.jpg?v=1656748529"
        }, 
        {
            "id": 39847231062114,
            "title": "CB1 heatsink",
            "price": 590,
            "available": true,
            "inventory_quantity": 712,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_a26b4d72-9a2a-4748-aafb-ebac78033dff.jpg?v=1656753984"
        }]
    },
    {
        "id": 6730649239650,
        "title": "BIGTREETECH Manta M4P\/M8P Control Board running Klipper with CB1\/CM4",
        "type": "3D Printer Control Board",
        "handle": "manta-m4p-m8p",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 267411095650, 267109564514, 373322819, 261926125666],
        "tags": ["3d printer board", "3d printer motherboard", "cb1", "Control Board", "Expansion Board"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_26ebe1dd-9242-4226-b0a2-55e94a934acd.jpg?v=1656732345", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_e70b5540-5c9e-47d5-aa06-9db6fb32be68.jpg?v=1656732345", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1-1.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1-2.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_4c6243b3-0db0-43b9-aa61-625daaa17921.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_bed67ecc-7b7f-48df-b922-345baad000c3.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_4f9b6dad-4b6b-4053-8b6d-7c28442d06ad.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_407728fe-63b8-4908-9a8f-142b27d54918.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_551843e1-7590-4d88-afd7-39665f3f6fcd.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_3d2af38a-f008-4764-a004-2ff7c908d6b8.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_4f363cc5-b0a5-4528-9c15-dd00ce433160.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/8_f05a1059-a791-428d-b11b-9bed2818f796.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/9_81a64492-ee77-4a5e-9afd-5a8e7e5f44f1.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_310dfc82-7717-4d3d-be26-de7acf09bc27.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_cfb09860-6bce-4e5f-a7db-bb24bd5bab6f.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_07a16a81-10d2-4b86-8b79-22ee2b858398.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_7abe7de8-5f71-48f1-b8b8-8ca1893d52fc.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_a87c95c2-2266-4fd2-bd9c-43ad377ae44b.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_7f2448db-c172-4313-88e0-4e01e066ddce.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_b0e01a45-8615-49c3-a3b2-132f735d5231.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/M8P.jpg?v=1663813322", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_M8P.jpg?v=1663814050", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_M8P_8XTMC2209.jpg?v=1663814075", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_M4P.jpg?v=1663814095", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_M4P_4XTMC2209.jpg?v=1663814113"],
        "first_available_variant": {
            "id": 39847241056354
        },
        "available": true,
        "variants": [{
            "id": 39847241056354,
            "title": "Manta M4P",
            "price": 3998,
            "available": true,
            "inventory_quantity": 995,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_26ebe1dd-9242-4226-b0a2-55e94a934acd.jpg?v=1656732345"
        }, 
        {
            "id": 39859521716322,
            "title": "Manta M8P",
            "price": 5180,
            "available": true,
            "inventory_quantity": 878,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/M8P.jpg?v=1663813322"
        }, 
        {
            "id": 39847239123042,
            "title": "CB1+ Manta M8P",
            "price": 7868,
            "available": true,
            "inventory_quantity": 868,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_M8P.jpg?v=1663814050"
        }, 
        {
            "id": 39847239155810,
            "title": "CB1+Manta M8P+8 PCS TMC2209",
            "price": 9868,
            "available": true,
            "inventory_quantity": 591,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_M8P_8XTMC2209.jpg?v=1663814075"
        }, 
        {
            "id": 39847241089122,
            "title": "CB1+Manta M4P",
            "price": 6268,
            "available": true,
            "inventory_quantity": 989,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_M4P.jpg?v=1663814095"
        }, 
        {
            "id": 39847241154658,
            "title": "CB1+Manta M4P+4 Pcs TMC2209",
            "price": 7357,
            "available": true,
            "inventory_quantity": 983,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1_M4P_4XTMC2209.jpg?v=1663814113"
        }, 
        {
            "id": 39847241384034,
            "title": "CB1 (1GB RAM)",
            "price": 2688,
            "available": true,
            "inventory_quantity": 956,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1-1.jpg?v=1663813322"
        }, 
        {
            "id": 39847241416802,
            "title": "CB1 heatsink",
            "price": 590,
            "available": true,
            "inventory_quantity": 582,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/CB1.jpg?v=1663813322"
        }, 
        {
            "id": 39847241121890,
            "title": "CB1+Manta M8P-EZ (Coming soon)",
            "price": 99900,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }]
    },
    {
        "id": 6708157841506,
        "title": "BIGTREETECH BTT SKR 3 EZ  Control Board Mainboard for 3D printer",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-btt-skr-3-ez-control-board-mainboard-for-3d-printer",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066],
        "tags": ["3d mainboard", "3d printer board", "3d printer motherboard", "Control Board"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_a8c9f440-dea4-4dfc-a8a4-28494547f464.jpg?v=1654849684", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A6.jpg?v=1654850532", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A4.jpg?v=1654850532", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A3.jpg?v=1654850532", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A9.jpg?v=1654850532", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A8.jpg?v=1654850532", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A5.jpg?v=1654850532", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A7.jpg?v=1654850532", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A2.jpg?v=1654850532", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_e15d5193-8758-451e-b85f-9422c6da5c87.jpg?v=1654851839", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_fda2c4ba-01c6-48c8-b8b4-e5729e6e135f.jpg?v=1654851838", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_046c75c8-3e29-4077-b322-69f96d9f3256.jpg?v=1654851838", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_8f9793e8-ee3a-4faa-98a4-92656d3dcb35.jpg?v=1654851838", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/8_33f17e28-e2d9-460e-9593-828ec86c5246.jpg?v=1654851839"],
        "first_available_variant": {
            "id": 39786596171874
        },
        "available": true,
        "variants": [
            {
            "id": 39786596171874,
            "title": "SKR 3 EZ",
            "price": 6699,
            "available": true,
            "inventory_quantity": 976,
            "inventory_policy": "continue",
            "image": null
            },
            {
                "id": 39786596204642,
                "title": "SKR 3 EZ + 5pcs EZ2209",
                "price": 7888,
                "available": true,
                "inventory_quantity": 863,
                "inventory_policy": "continue",
                "image": null
            },
            {
                "id": 39786596237410,
                "title": "SKR 3 EZ + 5pcs EZ5160 Pro V1.0",
                "price": 15488,
                "available": true,
                "inventory_quantity": 980,
                "inventory_policy": "continue",
                "image": null
            },
            {
                "id": 39786596270178,
                "title": "SKR 3-DC MODE",
                "price": 728,
                "available": true,
                "inventory_quantity": 968,
                "inventory_policy": "continue",
                "image": null
            }]
    }, 
    {
        "id": 6708161806434,
        "title": "BIGTREETECH BTT SKR 3 Control Board for 3D printer",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-btt-skr-3-control-board-for-3d-printer",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066],
        "tags": ["3d printer board", "3d printer motherboard", "Control Board", "skr 2", "SKR2", "skr3"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_e01a4a41-2e17-47c6-bbb8-56b98544625e.png?v=1652154611", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_9cbd2006-da37-44f9-b72e-570c3324fafc.png?v=1652154609", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_69c9c4c7-3e47-43ba-ac5a-d431d0230956.png?v=1652154610", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/8_1ad6157d-539d-41d9-9694-4dcf14af8ef3.png?v=1652154610", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_56975e6e-e33a-4f35-b3bd-7123ea882c11.png?v=1652154610", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_b4b88acd-bd17-4478-8dc0-599634d17dcd.png?v=1652154609", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_f624db82-db53-4c11-bde3-28f8d7edb3b9.png?v=1652154610", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_7b8e3dbf-e6ab-46b7-8320-44a8bf052df3.png?v=1652154609"],
        "first_available_variant": {
            "id": 39786515759202
        },
        "available": true,
        "variants": [{
            "id": 39786515759202,
            "title": "SKR 3",
            "price": 6499,
            "available": true,
            "inventory_quantity": 29,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39786563436642,
            "title": "SKR 3 + 5pcs EZ2209+ 5pcs EZ-Driver Connector V1.0",
            "price": 7664,
            "available": true,
            "inventory_quantity": 459,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39786575593570,
            "title": "SKR 3 + 5pcs EZ5160 Pro V1.0+ 5pcs EZ-Driver Connector V1.0",
            "price": 14988,
            "available": true,
            "inventory_quantity": 93,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39786515791970,
            "title": "SKR 3 + 5pcs TMC2209",
            "price": 7899,
            "available": true,
            "inventory_quantity": 29,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39786515824738,
            "title": "5pcs EZ2209 + 5pcs EZ-Driver Connector V1.0",
            "price": 2399,
            "available": true,
            "inventory_quantity": 97,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39786515857506,
            "title": "5pcs EZ5160 Pro V1.0 + 5pcs EZ-Driver Connector V1.0",
            "price": 8859,
            "available": true,
            "inventory_quantity": 97,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39786515890274,
            "title": "SKR 3-DC MODE",
            "price": 728,
            "available": true,
            "inventory_quantity": 63,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39788004507746,
            "title": "EZ-Driver Connector V1.0",
            "price": 498,
            "available": true,
            "inventory_quantity": 94,
            "inventory_policy": "continue",
            "image": null
        }]
    }


    , {
        "id": 6611614367842,
        "title": "BIGTREETECH SKR MINI E3 V3.0 32 Bit Control Board for Ender 3\/Ender 3 Pro\/Ender 5\/Ender 5 plus\/CR-10",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-skr-mini-e3-v2-0-32-bit-control-board-for-ender-3",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 267411095650, 267109564514, 268139036770, 261926125666, 265834201186],
        "tags": ["3d printer board", "3d printer motherboard", "Control Board", "ender 3", "ender 3v2"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_a64655c5-0e4f-4d1e-91f7-deae5fc2a0c9.jpg?v=1650876363", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_54a34a5b-9f7f-4fef-8667-6f0ca8693220.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_2f8f0594-de76-4a4e-b973-fee627d7ed08.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_cc0d851c-02cf-4437-8a7c-7f47c3d665c3.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_41192e70-a4ba-445d-94ee-65cf3fd4e43e.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_f90f1743-6b95-427a-be94-4f784204ddd6.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_accbbf2c-557c-46b5-8b0c-f7e573bd067f.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/8_cff7eb83-a966-4d00-a982-42e5f4730c7f.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/9_c7a0cb4f-0332-4d8d-8060-63ec1f64de69.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/10_e720cd8c-55fb-4a5e-ae9f-4b2aa1b5d47e.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/11_6cc9bd48-6542-4436-9619-4088ee299dba.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/12_7c598df0-2366-4bee-8ca0-ba493c2616b0.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/13_f88405d8-8f9f-47de-a2ad-b78c91b797f4.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/14_af53d0be-7a0e-4474-944b-6c4cfe15d50c.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/15_5d9ea688-ef72-45ec-899d-908ac23188c0.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/16_5db60d70-42c9-4f06-b6ac-36f0613e4aa2.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/17_db15f873-cfd5-4b65-9805-94bfedfc9268.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/18_d38665f5-f0d2-4fae-9a93-d1dbcc1180fb.jpg?v=1639453300", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/skrminie3v3.0andcable.jpg?v=1666843295", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/H20131c62b412432ebec51a5274b7debbC_df007f01-7c97-4043-b4cc-5dcefbed022f.jpg?v=1666843390"],
        "first_available_variant": {
            "id": 39982232174690
        },
        "available": true,
        "variants": [{
            "id": 39982232174690,
            "title": "China \/ Without cable (for Ender V2 screen)",
            "price": 3699,
            "available": true,
            "inventory_quantity": 616,
            "inventory_policy": "continue",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_a64655c5-0e4f-4d1e-91f7-deae5fc2a0c9.jpg?v=1650876363"
        }, 
        {
            "id": 39982232207458,
            "title": "China \/ With cable (for Ender V2 screen)",
            "price": 3825,
            "available": true,
            "inventory_quantity": 58,
            "inventory_policy": "continue",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/skrminie3v3.0andcable.jpg?v=1666843295"
        }, 
        {
            "id": 40035469885538,
            "title": "US \/ Without cable (for Ender V2 screen)",
            "price": 4199,
            "available": true,
            "inventory_quantity": 60,
            "inventory_policy": "continue",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_a64655c5-0e4f-4d1e-91f7-deae5fc2a0c9.jpg?v=1650876363"
        }, 
        {
            "id": 40122770784354,
            "title": "China \/ Only E3 DCDC5V V1.0 Module",
            "price": 379,
            "available": true,
            "inventory_quantity": 98,
            "inventory_policy": "continue",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/H20131c62b412432ebec51a5274b7debbC_df007f01-7c97-4043-b4cc-5dcefbed022f.jpg?v=1666843390"
        }]
    }


    , {
        "id": 4493619789922,
        "title": "BIGTREETECH SKR MINI E3 V2.0 32 Bit Control Board Integrated TMC2209 UART For Ender 3",
        "type": "3D Printer Control Board Kit",
        "handle": "bigtreetech-skr-mini-e3-v2-0-32-bit-control-board-integrated-tmc2209-uart-for-ender-4",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 163054682210, 261841748066, 267109564514, 261926125666, 261860589666, 373323011],
        "tags": ["3D printer  parts"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/ZHUTU_71eb37e6-8427-446a-ae87-d0e2e4dd89b5.jpg?v=1599042359", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_be52848f-9f02-4bd5-96f3-f095b146f395.jpg?v=1599042360", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_594fcb3e-b019-4acd-89c6-4b62cd9a6ed4.jpg?v=1599042359"],
        "first_available_variant": {
            "id": 31915234885730
        },
        "available": true,
        "variants": [{
            "id": 31915234885730,
            "title": "Only SKR MINI E3 V2.0 \/ China warehouse",
            "price": 3238,
            "available": true,
            "inventory_quantity": 99,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 31995469922402,
            "title": "Only TFT35 E3 V3.0 \/ China warehouse",
            "price": 3360,
            "available": true,
            "inventory_quantity": 976,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39564431065186,
            "title": "Only SKR MINI E3 V2.0 \/ European warehouse",
            "price": 4299,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564431130722,
            "title": "SKR MINI E3 V2.0+TFT35 E3 V3.0 \/ European warehouse",
            "price": 6344,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 31995474640994,
            "title": "SKR MINI E3 V2.0+TFT35 E3 V3.0 \/ China warehouse",
            "price": 5862,
            "available": true,
            "inventory_quantity": 921,
            "inventory_policy": "continue",
            "image": null
        }]
    }


    , {
        "id": 6617767477346,
        "title": "BTT SKR Pico V1.0 Control Board Compatible with Raspberry PI for Voron V0",
        "type": "3D Printer Control Board",
        "handle": "btt-skr-pico-v1-0",
        "collections": [264590557282, 262031474786, 268056690786, 373321859, 268866355298, 261841748066, 267411095650, 267109564514, 261926125666, 261860589666, 268138578018, 265834201186],
        "tags": ["3d printer board", "3d printer motherboard", "Control Board"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_7e67ff49-56c6-443f-b649-2ba5f5ef8ade.jpg?v=1650874733", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_aba251bd-1bcd-47fa-b369-6d8309fe3a7a.jpg?v=1650874733", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_9a5c7e3a-faaf-48ac-88e8-5f7cfb5ad859.jpg?v=1639388915", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_ae86ee9f-4dd7-4b61-b44a-18d4cb156a6e.jpg?v=1639388915", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_d4c973e8-b0ff-4fdc-8c33-69d6cfdb0602.jpg?v=1639388912", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_84df30b7-cc3e-46bb-b956-a891337f5f8d.jpg?v=1639388912", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_d28fcba8-ccca-496d-b168-1ca5f1e567ab.jpg?v=1639388912", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/8_a70b6a30-1202-4496-a345-eda96267e9cb.jpg?v=1639388912", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/9_b8249c19-fbb3-486f-a974-531208e0a8b3.jpg?v=1639388912", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/16_10e6d57a-0b20-4bc5-81a0-0db85ad952fd.jpg?v=1639388912"],
        "first_available_variant": {
            "id": 40122762035298
        },
        "available": true,
        "variants": [{
            "id": 40122762035298,
            "title": "China warehouse",
            "price": 2998,
            "available": true,
            "inventory_quantity": 49,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 40122762068066,
            "title": "US warehouse",
            "price": 2998,
            "available": true,
            "inventory_quantity": 20,
            "inventory_policy": "continue",
            "image": null
        }]
    }


    , {
        "id": 6598546620514,
        "title": "BIGTREETECH Octopus Pro V1.0",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-octopus-pro-v1-0-chip-f446",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 267109564514, 268139036770, 261926125666, 265834201186],
        "tags": [],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_48830f6f-b7ff-496b-a024-814d875346a9.jpg?v=1644993586", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_16751899-2142-4651-98ff-917f8a4e4881.jpg?v=1644993586", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_0c3a2218-29ad-46b9-9a02-0b6095f8c38f.jpg?v=1644993586", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/8_c1cefd48-628b-4cd2-addb-87bca7b51599.jpg?v=1632883262", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/9_5f8a0af1-9dab-4b6f-ae40-26e42b361e76.jpg?v=1632883263", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/13_8f095aec-b6ce-4fc3-ae8d-eb46c43b0160.jpg?v=1632883263", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/14_24a63076-1e52-4240-82ed-dd6956fd4604.jpg?v=1632883262", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_201548ad-f203-4ed1-a48f-8b7fb47a96f4.jpg?v=1632883318", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_9029409e-a16d-4aa4-9e5f-a17a00e0ebd8.jpg?v=1634551753", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/638F8F6F-33A9-4048-B51D-7486D8DCF7C1.jpg?v=1634551753"],
        "first_available_variant": {
            "id": 39482177257570
        },
        "available": true,
        "variants": [{
            "id": 39482177257570,
            "title": "China \/ BTT Octopus Pro V1.0 with Chip F446 \/ Without drivers",
            "price": 5199,
            "available": true,
            "inventory_quantity": -12,
            "inventory_policy": "continue",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_0c3a2218-29ad-46b9-9a02-0b6095f8c38f.jpg?v=1644993586"
        }, 
        {
            "id": 39456281133154,
            "title": "China \/ BTT Octopus Pro V1.0 with Chip F446 \/ With 8 PCs TMC2209",
            "price": 7851,
            "available": true,
            "inventory_quantity": 797,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39456281460834,
            "title": "China \/ BTT Octopus Pro V1.0 with Chip F446 \/ With 8 PCs TMC2208 UART",
            "price": 6795,
            "available": true,
            "inventory_quantity": 80,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39482178175074,
            "title": "China \/ BTT Octopus Pro V1.0 with Chip F429 \/ Without drivers",
            "price": 6199,
            "available": true,
            "inventory_quantity": 80,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_9029409e-a16d-4aa4-9e5f-a17a00e0ebd8.jpg?v=1634551753"
        }, 
        {
            "id": 39482166804578,
            "title": "China \/ BTT Octopus Pro V1.0 with Chip F429 \/ With 8 PCs TMC2209",
            "price": 8851,
            "available": true,
            "inventory_quantity": 89,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39482166837346,
            "title": "China \/ BTT Octopus Pro V1.0 with Chip F429 \/ With 8 PCs TMC2208 UART",
            "price": 7795,
            "available": true,
            "inventory_quantity": 100,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39585170096226,
            "title": "US \/ BTT Octopus Pro V1.0 with Chip F446 \/ Without drivers",
            "price": 5699,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39585170128994,
            "title": "US \/ BTT Octopus Pro V1.0 with Chip F429 \/ Without drivers",
            "price": 6699,
            "available": true,
            "inventory_quantity": 44,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 6597602017378,
        "title": "BIGTREETECH Octopus V1.1 Control Board for Voron 2.4",
        "type": "3D Printer Control Board Kit",
        "handle": "bigtreetech-octopus-v1-1",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 267109564514, 261926125666, 268138578018],
        "tags": ["3d printer board", "3d printer motherboard", "Control Board"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/A_2230f45e-703c-4a43-a60f-4b74757ce32d.jpg?v=1632477651"],
        "first_available_variant": {
            "id": 39812758765666
        },
        "available": true,
        "variants": [{
            "id": 39812758765666,
            "title": "Without drivers",
            "price": 4999,
            "available": true,
            "inventory_quantity": 64,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39749193990242,
            "title": "With 6 PCs TMC2209",
            "price": 7066,
            "available": true,
            "inventory_quantity": 77,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39749194023010,
            "title": "With 8 PCs TMC2209",
            "price": 7859,
            "available": true,
            "inventory_quantity": 63,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 4423655293026,
        "title": "BIGTREETECH SKR MINI E3 V2.0 32 Bit Control Board Integrated TMC2209 UART For Ender 3",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-skr-mini-e3-v2-0-32-bit-control-board-integrated-tmc2209-uart-for-ender-3",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 163054682210, 261841748066, 267109564514, 261926125666, 268138578018, 265834201186],
        "tags": ["3d printer", "3D printer  parts", "3D Printer Accessories", "SKR MINI E3 V2.0"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/zhutu_39a03949-93ce-4190-bed2-151729241c86.jpg?v=1640679271", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/13_2d5a46c5-dad3-40bb-84e5-8df99092712f.jpg?v=1640679271", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_77ac2777-d51f-4342-a051-a02eeb100d17.jpg?v=1640679271"],
        "first_available_variant": {
            "id": 31995437744226
        },
        "available": true,
        "variants": [{
            "id": 31995437744226,
            "title": "China \/ Only SKR MINI E3 V2.0 board",
            "price": 3238,
            "available": true,
            "inventory_quantity": 250,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 40111994896482,
            "title": "China \/ With E3 DCDC5V Module",
            "price": 3538,
            "available": true,
            "inventory_quantity": 98,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 40035473424482,
            "title": "US \/ Only SKR MINI E3 V2.0 board",
            "price": 3738,
            "available": true,
            "inventory_quantity": 8,
            "inventory_policy": "continue",
            "image": null
        }]
    }


    , {
        "id": 3874438348898,
        "title": "BIGTREETECH SKR PRO V1.2 32 Bit Control Board",
        "type": "3D Printer Control Board Kit",
        "handle": "bigtreetech-skr-pro-v1-1-32-bit-control-board",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 261926125666],
        "tags": ["3D printer  parts", "SKR PRO V1.1"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/18_3adfe7a9-dec4-461b-bddd-947f27b4dec8.jpg?v=1592572873"],
        "first_available_variant": {
            "id": 29207358865506
        },
        "available": true,
        "variants": [{
            "id": 29207358865506,
            "title": "SKR PRO \/ Without Driver",
            "price": 4973,
            "available": true,
            "inventory_quantity": 86,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39564433752162,
            "title": "SKR PRO \/ With 6PCS A4988",
            "price": 5566,
            "available": true,
            "inventory_quantity": 99,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39564433784930,
            "title": "SKR PRO \/ With 6PCS TMC2209 V1.2",
            "price": 6877,
            "available": true,
            "inventory_quantity": 75,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39564433817698,
            "title": "SKR PRO \/ With 6PCS TMC2208 V3.0 STEP",
            "price": 6469,
            "available": true,
            "inventory_quantity": 99,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39564433850466,
            "title": "SKR PRO \/ With 6PCS TMC2208 V3.0 UART",
            "price": 6469,
            "available": true,
            "inventory_quantity": 20,
            "inventory_policy": "continue",
            "image": null
        }, 
        {
            "id": 39564433883234,
            "title": "SKR PRO \/ With 6PCS TMC2130 V3.0 DIY",
            "price": 8922,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564433916002,
            "title": "SKR PRO \/ With 6PCS TMC2130 V3.0 SPI",
            "price": 9210,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564433948770,
            "title": "SKR PRO \/ With 6PCS TMC5160 V1.3",
            "price": 11339,
            "available": true,
            "inventory_quantity": 0,
            "inventory_policy": "continue",
            "image": null
        }]
    }


    , {
        "id": 4355514007650,
        "title": "BIGTREETECH GTR V1.0  BIGTREETECH M5 V1.0 11 axis 3D printer  Motherboard",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-gtr-v1-0-bigtreetech-m5-v1-0-11-axis-3d-printer-motherboard",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 268138578018],
        "tags": ["11 axis 3D printer  Motherboard", "3d printer motherboard", "3D Printer parts"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/17_1463c671-6b68-4657-b7f1-1209bacd7920.jpg?v=1579254756", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_a299ffcf-c02b-4719-a882-4f563c1da923.jpg?v=1579254756", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/9_98e1e6cb-1e76-4011-80fe-2b3cfcde0c8a.jpg?v=1634552087"],
        "first_available_variant": {
            "id": 31261892313186
        },
        "available": true,
        "variants": [{
            "id": 31261892313186,
            "title": "With BTT GTR V1.0 \/ Without BTT M5 V1.0",
            "price": 4548,
            "available": true,
            "inventory_quantity": 4884,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 31261892280418,
            "title": "With BTT GTR V1.0 \/ With BTT M5 V1.0",
            "price": 6265,
            "available": true,
            "inventory_quantity": 1059,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 31261892345954,
            "title": "Without BTT GTR V1.0 \/ With BTT M5 V1.0",
            "price": 2628,
            "available": true,
            "inventory_quantity": 4947,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 4488200585314,
        "title": "BIGTREETECH SKR V1.4 Control Board",
        "type": "3D Printer Control Board Kit",
        "handle": "bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board-tmc2209-tmc2208-eeprom-v1-0-exp-mot-v1-0-3d-printer-parts-for-ender-3",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 261926125666, 268138578018],
        "tags": ["3D printer  parts", "skr 1 4 turbo", "skr 1.4"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_12eee506-f28e-49c5-bfab-c2b844b49f54.jpg?v=1659429585", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2Pro.jpg?v=1659429585"],
        "first_available_variant": {
            "id": 31898702970978
        },
        "available": true,
        "variants": [{
            "id": 31898702970978,
            "title": "SKR V1.4(On Sale) \/ Only the board",
            "price": 1998,
            "available": true,
            "inventory_quantity": 155,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564431229026,
            "title": "SKR V1.4(On Sale) \/ With 5*PCS TMC2208",
            "price": 3419,
            "available": true,
            "inventory_quantity": 74,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564431294562,
            "title": "SKR V1.4(On Sale) \/ With 5*pcs TMC2209",
            "price": 3876,
            "available": true,
            "inventory_quantity": 81,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 4519630405730,
        "title": "BIGTREETECH SKR MINI MZ V1.0+TFT35 MZ V3.0 Touch Screen Control Board TMC2209 3D Printer Parts For ANYCUBIC Mega Zero Upgrade",
        "type": "3D Printer Control Board Kit",
        "handle": "bigtreetech-skr-mini-mz-v1-0-tft35-mz-v3-0-touch-screen-control-board-tmc2209-3d-printer-parts-for-anycubic-mega-zero-upgrade",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 373323011],
        "tags": ["3D Prinnter parts", "3D printer  parts", "prusa i3"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_2961b872-78a8-4f21-8742-dfd717267d41.jpg?v=1605018981", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_66af73dd-5308-4440-ad07-8a2fffa613b3.jpg?v=1605018993"],
        "first_available_variant": {
            "id": 32023942725730
        },
        "available": true,
        "variants": [{
            "id": 32023942692962,
            "title": "SKR MINI MZ V1.0",
            "price": 4000,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 32023942725730,
            "title": "TFT35 MZ V3.0",
            "price": 4162,
            "available": true,
            "inventory_quantity": 981,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564430606434,
            "title": "SKR MINI MZ V1.0+TFT35 MZ V3.0",
            "price": 7759,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 6537231106146,
        "title": "BIGTREETECH E3 RRF V1.1 Wifi 32Bit Control Board Integrated TMC2209 with RRF IDEX V1.0 TFT35 E3 V3.0 BIQU IDEX Kit 3D Printer Parts For Ender 3\/5 Pro",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-e3-rrf-v1-1-mainboard-3d-printer-part-integrated-esp8266-wi-fi-module-for-ender3",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 373322819, 268138578018],
        "tags": ["3D Printer Accessories", "3D Printer parts"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_21a9fc14-e8fb-4552-a4e5-53346f82ded6.jpg?v=1614683409", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit5.jpg?v=1614683939", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit4.jpg?v=1614683939", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit3.jpg?v=1614683940", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit2.jpg?v=1614683942", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit6.jpg?v=1614683955", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit7.jpg?v=1614683959"],
        "first_available_variant": {
            "id": 39251709427810
        },
        "available": true,
        "variants": [{
            "id": 39251709427810,
            "title": "Type 1：BIGTREETECH E3 RRF V1.1",
            "price": 5299,
            "available": true,
            "inventory_quantity": 92,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_21a9fc14-e8fb-4552-a4e5-53346f82ded6.jpg?v=1614683409"
        }, 
        {
            "id": 39251709460578,
            "title": "Type 2：BIGTREETECH E3 RRF V1.1+BIGTREETECH E3 RRF IDEX V1.0",
            "price": 6732,
            "available": true,
            "inventory_quantity": 99,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit4.jpg?v=1614683939"
        }, 
        {
            "id": 39251709493346,
            "title": "Type 3：BIGTREETECH E3 RRF IDEX V1.0",
            "price": 2729,
            "available": true,
            "inventory_quantity": 99,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit7.jpg?v=1614683959"
        }, 
        {
            "id": 39251709526114,
            "title": "Type 4: BIGTREETECH E3 RRF V1.1+TFT35 E3 V3.0",
            "price": 8436,
            "available": true,
            "inventory_quantity": 96,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit2.jpg?v=1614683942"
        }, 
        {
            "id": 39251709558882,
            "title": "Type 5: BIGTREETECH E3 RRF V1.1+TFT35 E3 V3.0+BIGTREETECH E3 RRF IDEX V1.0",
            "price": 10613,
            "available": true,
            "inventory_quantity": 99,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit5.jpg?v=1614683939"
        }, 
        {
            "id": 39251709591650,
            "title": "Type 6: Ender3 IDEX Upgrade Kit",
            "price": 5821,
            "available": true,
            "inventory_quantity": 99,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit6.jpg?v=1614683955"
        }, 
        {
            "id": 39251709624418,
            "title": "Type 7:BIQU IDEX Kit+BIGTREETECH E3 RRF V1.1+BIGTREETECH E3 RRF IDEX V1.0",
            "price": 10351,
            "available": true,
            "inventory_quantity": 97,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Suit3.jpg?v=1614683940"
        }]
    }


    , {
        "id": 4531869843554,
        "title": "BTT Cloned Duet 2 Wifi V1.04 Control Board Duetwifi 32Bit Duet2 PanelDue Touch Screen 3D Printer Parts CNC Ender 3 Pro VS Duex5",
        "type": "3D Printer Control Board",
        "handle": "btt-cloned-duet-2-wifi-v1-04-control-board-duetwifi-32bit-duet2-paneldue-touch-screen-3d-printer-parts-cnc-ender-3-pro-vs-duex5",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 261860589666],
        "tags": ["Duet 2 Wifi"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/Hcf3df163d70946e48ebc6fbfd2a9f0a2l.jpg?v=1608114765", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/HTB1eK7hVVzqK1RjSZFvq6AB7VXaG.jpg?v=1608114764", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/HTB1gVnCV9zqK1RjSZPcq6zTepXa9.jpg?v=1608114765", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/HTB1J5U.i13tHKVjSZSgq6x4QFXat.jpg?v=1634551921"],
        "first_available_variant": {
            "id": 32066566094946
        },
        "available": true,
        "variants": [{
            "id": 32066566094946,
            "title": "Only Duet 2 Wifi \/ China warehouse",
            "price": 4999,
            "available": true,
            "inventory_quantity": 386,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564429754466,
            "title": "4.3 inch All Kits \/ European warehouse",
            "price": 7256,
            "available": true,
            "inventory_quantity": 71,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564429787234,
            "title": "5 inch All Kits \/ European warehouse",
            "price": 7479,
            "available": true,
            "inventory_quantity": 98,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564429820002,
            "title": "7 inch All Kits \/ European warehouse",
            "price": 8820,
            "available": true,
            "inventory_quantity": 74,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 4519800340578,
        "title": "BIGTREETECH MMU2-DIP V1.0  Control Board 3D Printer part for Original Prusa i3 MK3S,Prusa i3 MK2.5s",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-mmu2-dip-v1-0-control-board-3d-printer-part-for-original-prusa-i3-mk3s-prusa-i3-mk2-5s",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 163054682210, 373322819],
        "tags": ["3D Printer Accessories", "3D Printer parts", "mmu2"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_8d524af5-04a0-49f3-9adc-64a66112a963.jpg?v=1605062612"],
        "first_available_variant": {
            "id": 32024679481442
        },
        "available": true,
        "variants": [{
            "id": 32024679481442,
            "title": "Default Title",
            "price": 1184,
            "available": true,
            "inventory_quantity": 976,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 9230412803,
        "title": "Arduino UNO R3 ATMEGA328P ATMEGA16U2 CH340G Plus USB Cable",
        "type": "3D Printer Control Board",
        "handle": "the-latest-100-brand-new-factory-price-uno-r3-atmega328p-atmega16u2-1pcs-usb-cable-for-arduino-3d-printer-parts",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261926125666],
        "tags": ["Arduino", "ATMEGA16U2", "UNO R3", "USB Cable"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_e18874f5-48d8-4e97-98b2-001330deedfe.jpg?v=1630556652", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_4527e501-d099-41c9-930b-6aaf93cc96b1.jpg?v=1630556653"],
        "first_available_variant": {
            "id": 32546430403
        },
        "available": true,
        "variants": [{
            "id": 32546430403,
            "title": "Without logo - blue back \/ 1pc",
            "price": 1126,
            "available": true,
            "inventory_quantity": 896,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 12474647412834,
            "title": "With logo - white back \/ 1pc",
            "price": 1126,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 6703957934178,
        "title": "Rasberry Pi Pico-RP2040 Microcontroller Board",
        "type": "3D Printer Control Board",
        "handle": "rasberry-pi-pico-rp2040-microcontroller-board",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261926125666],
        "tags": ["3d printer board", "3d printer motherboard", "Control Board"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_9713b9f2-b5c5-4bce-8817-ce872d5abd7c.jpg?v=1651127444", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_5d99db15-cc75-474a-8b33-b09b97979fd5.jpg?v=1651127445", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_d8cec0e6-122d-425a-893f-640651d68ee7.jpg?v=1651127447", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_c526727d-7ce2-4d4a-9731-eea388b83097.jpg?v=1651127444", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_b359266c-e203-4f55-9e1b-cfe675776147.jpg?v=1651127445", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_0b0ce638-d6dc-445f-9bad-5cbd87200f91.jpg?v=1651127446", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_2624b223-59a4-4768-b417-c022272cfc89.jpg?v=1651127445", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/8_a0f4edbb-eac8-4eab-a420-4559524974aa.jpg?v=1651127445", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/9_5f24ee69-b025-4695-856d-0ba8007f5b39.jpg?v=1651127446", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/10_2b6ab603-0a5e-4eff-bdec-1715766cc54f.jpg?v=1651127446", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/11_648555bb-f59d-4ef4-8e37-df1019c99d0b.jpg?v=1651127447", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/12_fcb3be14-fd85-4843-9dd5-c64b3d29a8de.jpg?v=1651127444", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/13.jpg?v=1651127444"],
        "first_available_variant": {
            "id": 39760379412578
        },
        "available": true,
        "variants": [{
            "id": 39760379412578,
            "title": "Default Title",
            "price": 1199,
            "available": true,
            "inventory_quantity": 475,
            "inventory_policy": "continue",
            "image": null
        }]
    }


    , {
        "id": 4479980601442,
        "title": "RGBDuino RGB Sheild V1.0 + RGBDuino UNO For Arduino UNO Arduino mega 2560",
        "type": "Arduino",
        "handle": "rgbduino-rgb-sheild-v1-0-rgbduino-uno-v1-1-v1-2-for-arduino-uno-arduino-mega-2560",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 373322819, 261926125666, 262561136738],
        "tags": ["RGB", "RGBDuino", "UNO"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/lADPBG1Q5WYQkLXNA-jNA-g_1000_1000.jpg?v=1596798054", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/lADPBE1XcZsKk9TNA-jNA-g_1000_1000.jpg?v=1596798053", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_29459b11-aab0-4c0e-bea7-24c4c8ea5d3e.jpg?v=1634552005", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_1ac713a9-ae16-4d05-890b-ac669db4aef4.jpg?v=1634552005"],
        "first_available_variant": {
            "id": 31866330939490
        },
        "available": true,
        "variants": [{
            "id": 31866330939490,
            "title": "RGB Sheild V1.0 + UNO (GEEK DUCK)",
            "price": 1867,
            "available": true,
            "inventory_quantity": 4994,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 31866330972258,
            "title": "RGB Sheild V1.0 + UNO (Jenny)",
            "price": 1867,
            "available": true,
            "inventory_quantity": 98,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 299957518377,
        "title": "BIGTREETECH Ramps 1.5 Transfer Control Board",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-ramps-1-5-upgrade-base-on-ramps-1-4-3d-control-panel-mainboard-reprap-mendel-for-3d-printer-part",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261926125666],
        "tags": ["3d printer parts", "A4988", "Control Board", "For aeduinos", "Ramps 1.5"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_6e5e264f-c591-4ecb-80ed-c3cdb69afaae.jpg?v=1634552171"],
        "first_available_variant": {
            "id": 8227890593890
        },
        "available": true,
        "variants": [{
            "id": 8227890593890,
            "title": "Default Title",
            "price": 752,
            "available": true,
            "inventory_quantity": 698,
            "inventory_policy": "deny",
            "image": "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_6e5e264f-c591-4ecb-80ed-c3cdb69afaae.jpg?v=1634552171"
        }]
    }


    , {
        "id": 6712466866274,
        "title": "BIQU BX 3D Printer FDM 3D printer replaceable boards and screen kits",
        "type": "3D Printer Control Board Kit",
        "handle": "biqu-bx-3d-printer-fdm-3d-printer-with-32-bit-400mhz-motherboard-integrated-octoprint-1",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 373323011],
        "tags": ["BIQU BX", "BX"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/BX3Dprinterreplaceableboardsandscreenkits.png?v=1653377646"],
        "first_available_variant": {
            "id": 39792367960162
        },
        "available": true,
        "variants": [{
            "id": 39792367960162,
            "title": "SKR SE-BX V3.0 Control Board",
            "price": 6258,
            "available": true,
            "inventory_quantity": 63,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39792367992930,
            "title": "TFT70-BX V3.0 Screen",
            "price": 6789,
            "available": true,
            "inventory_quantity": 9,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39792368025698,
            "title": "BTT BX-HDMI Adapter Board",
            "price": 899,
            "available": true,
            "inventory_quantity": 211,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39792368058466,
            "title": "BTT BX-MICRO HDMI Adapter Board",
            "price": 999,
            "available": true,
            "inventory_quantity": 96,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39792368091234,
            "title": "BTT TFT70-BX HDMI V2.1",
            "price": 2299,
            "available": true,
            "inventory_quantity": 33,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39811355213922,
            "title": "BTT BX HOTMODE V2.0",
            "price": 790,
            "available": true,
            "inventory_quantity": 71,
            "inventory_policy": "continue",
            "image": null
        }]
    }


    , {
        "id": 4493560184930,
        "title": "BIGTREETECH SKR MINI E3 V1.2 32 Bit Control Board +TFT35 E3 V3.0  For Ender 3",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-skr-mini-e3-v1-2-32-bit-control-board-tft35-e3-v3-0-integrated-tmc2209-uart-for-ender-3",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 163054682210, 261841748066, 261926125666, 261860589666],
        "tags": ["3d mainboard", "3D Printer Accessories"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/SKRminiE3V2.jpg?v=1599034385", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/18.jpg?v=1599034383", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/14_da12a58e-66b1-4f23-8555-42d032da17f8.jpg?v=1599034383", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_c14f4641-d5ac-48d0-b2e1-ec04cab0a4fa.jpg?v=1599034383"],
        "first_available_variant": {
            "id": 31914888659042
        },
        "available": true,
        "variants": [{
            "id": 31914888659042,
            "title": "SKR MINI E3 V1.2+TFT35 E3 V3.0 \/ European warehouse",
            "price": 8127,
            "available": true,
            "inventory_quantity": 247,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 750997569634,
        "title": "BIGTREETECH Tango V1.0 Motherboard Upgrade on Rumba MPU \/ Optimized For 3D Printer",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-tango-v1-0-motherboard-upgrade-on-the-basis-of-rumba-control-board-for-3d-printer",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066],
        "tags": ["3d printer board", "BIQU Tango", "Mainly board", "matherboard", "rumba contorl board", "Tango V1.0"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_e8af3f27-ffca-4acb-b2b3-f08ec2d2079c.jpg?v=1640679361"],
        "first_available_variant": {
            "id": 8142123991138
        },
        "available": true,
        "variants": [{
            "id": 8142123991138,
            "title": "Tango 1.0",
            "price": 3690,
            "available": true,
            "inventory_quantity": 985,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564435718242,
            "title": "Tango +A4988*6",
            "price": 4390,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 39564435751010,
            "title": "Tango +DR8825*6",
            "price": 4590,
            "available": false,
            "inventory_quantity": 0,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 9212723331,
        "title": "BIGTREETECH Colorful Ramps 1.4 Transfer Control Board",
        "type": "3D Printer Control Board",
        "handle": "biqu-3d-printer-electronic-parts-ramps-1-4-3d-printer-control-panel-printer-control-reprap-mendel-prusa-free-shipping-mk2b",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261926125666],
        "tags": ["A4988", "Heatbed mk2b", "Mega 2560", "RAMPS 1.4", "Reprap Mendel Prusa"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_b374ba5c-8fc8-462a-88b6-58e8f0c44806.jpg?v=1634552493"],
        "first_available_variant": {
            "id": 32463941315
        },
        "available": true,
        "variants": [{
            "id": 32463941315,
            "title": "Default Title",
            "price": 656,
            "available": true,
            "inventory_quantity": 99985,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 6779379253346,
        "title": "BIGTREETECH SKR V1.4 Turbo Control Board",
        "type": "3D Printer Control Board Kit",
        "handle": "bigtreetech-skr-v1-4-skr-v1-4-turbo-control-board",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261841748066, 261926125666],
        "tags": ["3D printer  parts", "skr 1 4 turbo", "skr 1.4"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/SKRV1.4Turbo_5_TMC2209.jpg?v=1663658981", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/BBB.jpg?v=1663658981", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/AAA.jpg?v=1663658981"],
        "first_available_variant": {
            "id": 40048265822306
        },
        "available": true,
        "variants": [{
            "id": 40048265822306,
            "title": "SKR V1.4 Turbo \/ Only the board",
            "price": 3868,
            "available": true,
            "inventory_quantity": 95,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 40048265855074,
            "title": "SKR V1.4 Turbo \/ With 5*PCS TMC2208",
            "price": 5289,
            "available": true,
            "inventory_quantity": 98,
            "inventory_policy": "deny",
            "image": null
        }, 
        {
            "id": 40048265887842,
            "title": "SKR V1.4 Turbo \/ With 5*pcs TMC2209",
            "price": 5746,
            "available": true,
            "inventory_quantity": 80,
            "inventory_policy": "deny",
            "image": null
        }]
    }


    , {
        "id": 6796914360418,
        "title": "BIGTREETECH Ramps 1.6 Plus Motherboard Upgrade Ramps1.6 Control Board Controller with TMC2209 TMC2208 A4988",
        "type": "3D Printer Control Board",
        "handle": "bigtreetech-ramps-1-6-plus-motherboard-upgrade-ramps1-6-control-board-controller-r6-suitable-tmc2130-a4988-drv8825-peprap",
        "collections": [264590557282, 262031474786, 373321859, 268866355298, 261926125666],
        "tags": ["ramps"],
        "images": ["\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/4_519530ca-876e-4077-ac0e-a05d90871aed.jpg?v=1665983235", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/7_d5d7ac26-b883-4af4-b207-629ed1d4aba0.jpg?v=1665983235", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/6_1.jpg?v=1665983235", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/5_0498f9c1-df70-4e4e-a60f-ad9eebc95485.jpg?v=1665983235", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/3_1.jpg?v=1665973485", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/2_1.jpg?v=1665973485", "\/\/cdn.shopify.com\/s\/files\/1\/1619\/4791\/products\/1_1.jpg?v=1665973486"],
        "first_available_variant": {
            "id": 40106759618658
        },
        "available": true,
        "variants": [{
            "id": 40106759618658,
            "title": "Only Ramps 1.6 Plus",
            "price": 659,
            "available": true,
            "inventory_quantity": 99,
            "inventory_policy": "deny",
            "image": null
        },
        {
            "id": 40106759651426,
            "title": "Ramps 1.6 Plus + 4pcs TMC2209",
            "price": 1756,
            "available": true,
            "inventory_quantity": 98,
            "inventory_policy": "deny",
            "image": null
        },
        {
            "id": 40106759684194,
            "title": "Ramps 1.6 Plus + 4pcs TMC2208",
            "price": 1477,
            "available": true,
            "inventory_quantity": 100,
            "inventory_policy": "deny",
            "image": null
        },
        {
            "id": 40106759716962,
            "title": "Ramps 1.6 Plus + 4pcs A4988",
            "price": 1130,
            "available": true,
            "inventory_quantity": 100,
            "inventory_policy": "deny",
            "image": null
        }]
    }
]