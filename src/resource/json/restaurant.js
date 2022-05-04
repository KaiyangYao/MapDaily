var restaurants = [
    {
        "id": "1",
        "name": "Cafe Mac",
        "info": "Main dinning space on campus",
        "website": "https://macalester.cafebonappetit.com",
        "coordinate": [44.939667016694, -93.16740829869586],
        "hilightonmap" : false
    },
    {
        "id": "2",
        "name": "The Grill",
        "info": "A good place for a quick bite and more",
        "website": "https://macalester.cafebonappetit.com/cafe/cafe-mac-grill/",
        "coordinate": [44.939667016694, -93.16740829869586],
        "hilightonmap" : false
    },
    {
        "id": "3",
        "name": "Atrium",
        "info": "Quick sandwich (sub-style), bag o' chips, cooie and drink",
        "website": "https://macalester.cafebonappetit.com/cafe/atrium-market/",
        "coordinate": [44.939667016694, -93.16740829869586],
        "hilightonmap" : false
    },
    {
        "id": "4",
        "name": "Scotty's",
        "info": "Salad! Known for one thing and really one thing only",
        "website": "https://macalester.cafebonappetit.com/cafe/scottys/",
        "coordinate": [44.93772111526256, -93.16721234215599],
        "hilightonmap" : false
    },
    {
        "id": "5",
        "name": "French Meadow Cafe",
        "info": "Fresh-baked goods & an all-day American menu with an emphasis on organic, sustainable ingredients",
        "website": "https://www.frenchmeadowcafe.com",
        "coordinate": [44.93996124846888, -93.17054894590711],
        "hilightonmap" : false
    },
    {
        "id": "6",
        "name": "Shish Mediterranean Kitchen",
        "info": "Casual spot for standard Middle Eastern fare all day, plus breakfasts with Turkish coffee",
        "website": "https://www.shishongrand.com",
        "coordinate": [44.93996452937696, -93.17065186203995],
        "hilightonmap" : false
    },
    {
        "id": "7",
        "name": "Italian Pie Shoppe",
        "info": "Local spot for thin-crust & deep-dish pizzas, plus salads & sandwiches, in a brick-lined storefront",
        "website": "https://www.italianpieshoppe.com",
        "coordinate": [44.93996321038813, -93.17070496184837],
        "hilightonmap" : false
    },
    {
        "id": "8",
        "name": "Grand Catch",
        "info": "Southern-style shellfish, sandwiches & creative cocktails offered in a hip, colorful space",
        "website": "https://www.grandcatchmn.com",
        "coordinate": [44.93996132569295, -93.17082880686151],
        "hilightonmap" : false
    },
    {
        "id": "9",
        "name": "Pad Thai",
        "info": "Family-run Thai pick serving spiced-to-order classics in a casual dining room with large murals",
        "website": "https://padthaisp.com",
        "coordinate": [44.940232800108156, -93.17123230013131],
        "hilightonmap" : false
    },
    {
        "id": "10",
        "name": "Sencha Tea Bar",
        "info": "Simple counter-serve shop features a variety of cold & hot tea drinks in a mellow, sunlit interior",
        "website": "https://senchateabar.com",
        "coordinate": [44.93997061939797, -93.17203967441216],
        "hilightonmap" : false
    },
    {
        "id": "11",
        "name": "IndoChin",
        "info": "Down-to-earth eatery featuring an array of traditional Vietnamese & Chinese noodle & rice plates",
        "website": "https://indochingrandave.squarespace.com",
        "coordinate": [44.93996934467819, -93.17241692367249],
        "hilightonmap" : false
    },
    {
        "id": "12",
        "name": "Breadsmith",
        "info": "Retail bakery making a wide variety of hearth-baked breads from scratch",
        "website": "http://breadsmithmn.com/breadschedules/StPaul.pdf",
        "coordinate": [44.94018380736774, -93.16681014400648],
        "hilightonmap" : false
    },
    {
        "id": "13",
        "name": "Jamba Juice",
        "info": "Straightforward counter-serve chain for smoothies, juices & health-focused light bites",
        "website": "https://www.jamba.com/menu?rid=414?utm_source=google&utm_medium=organic&utm_campaign=menu",
        "coordinate": [44.94020044537804, -93.16666889918606],
        "hilightonmap" : false
    },
    {
        "id": "14",
        "name": "Dunn Brothers Coffee Company",
        "info": "Espresso & cold-brew drinks made from sustainable beans are the specialty of this coffeehouse chain",
        "website": "http://www.dunnbrosgrand.com",
        "coordinate": [44.94023387617911, -93.16636255272428],
        "hilightonmap" : false
    },
    {
        "id": "15",
        "name": "My Burger",
        "info": "Local counter-serve chain offering burgers, sides & shakes, plus breakfast items, in a modern space.",
        "website": "https://www.myburgerusa.com",
        "coordinate": [44.93988942177621, -93.16637480862903],
        "hilightonmap" : false
    },
    {
        "id": "16",
        "name": "Caribou Coffee",
        "info": "Coffeehouse chain serving signature drinks, mochas & lattes, plus coffee & breakfast",
        "website": "https://locations.cariboucoffee.com/us/mn/st-paul/68-snelling-avenue-south",
        "coordinate": [44.93952175401809, -93.16642484720187],
        "hilightonmap" : false
    },
    {
        "id": "17",
        "name": "Carmelo's Spaghetti Room",
        "info": "Neighborhood trattoria with a warm vibe for Italian comfort food, plus California & imported wines",
        "website": "https://www.carmelos.com",
        "coordinate": [44.934475717111106, -93.1668174949216],
        "hilightonmap" : false
    },
    {
        "id": "18",
        "name": "Tono Pizzeria + Cheesesteaks",
        "info": "Tono Pizzeria + Cheesesteaks honors award-winning family recipes that have been handed down for generations and prepared fresh here…just for you",
        "website": "https://tonomn.com/locations/saint-paul/",
        "coordinate": [44.93405733407764, -93.16730126637844],
        "hilightonmap" : false
    },
    {
        "id": "19",
        "name": "Simplicitea",
        "info": "Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better",
        "website": "https://simpliciteamn.com/",
        "coordinate": [44.93304709948257, -93.1668275648622],
        "hilightonmap" : false
    },
    {
        "id": "20",
        "name": "Nashville Coop",
        "info": "Chicken strips, burgers & sandwiches are dished up in this unpretentious restaurant",
        "website": "https://www.nashvillecoop.com",
        "coordinate": [44.932530227273055, -93.16667500046552],
        "hilightonmap" : false
    },
    {
        "id": "21",
        "name": "Subway",
        "info": "Casual counter-serve chain for build-your-own sandwiches & salads, with health-conscious options",
        "website": "https://restaurants.subway.com/united-states/mn/st-paul/1820-grand-ave?utm_source=yxt-goog&utm_medium=local&utm_term=acq&utm_content=2425&utm_campaign=evergreen-2020",
        "coordinate": [44.93992612912316, -93.17740447554782],
        "hilightonmap" : false
    },
    {
        "id": "22",
        "name": "Estelle",
        "info": "Southern European cooking is paired with a robust drink menu at this upscale neighborhood eatery",
        "website": "https://estellestp.com",
        "coordinate": [44.93414490563358, -93.1767933297074],
        "hilightonmap" : false
    },
    {
        "id": "23",
        "name": "Groveland Tap",
        "info": "Laid-back joint offering pub grub & a large array of tap beers, plus a pool table & jukebox",
        "website": "https://www.grovelandtap.com",
        "coordinate": [44.93417733367576, -93.17793459763048],
        "hilightonmap" : false
    },
    {
        "id": "24",
        "name": "Everest on Grand",
        "info": "Unassuming Tibetan-Nepalese eatery with a variety of veggie & vegan options",
        "website": "https://www.everestongrand.com",
        "coordinate": [44.93984352316363, -93.1540722920948],
        "hilightonmap" : false
    },
];

export default restaurants;