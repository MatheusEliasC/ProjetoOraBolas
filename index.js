function recebeRobo() {
    myChart.data.datasets[1].data[0].x = document.querySelector("#roboX").value;
    myChart.data.datasets[1].data[0].y = document.querySelector("#roboY").value;
    myChart.update();
}


var i;
    	var bolaX = [1,1.01000004,1.02000032,1.03000108,1.04000256,1.050005,1.06000864,1.07001372,1.08002048,1.09002916,1.10004,1.11005324,1.12006912,1.13008788,1.14010976,1.150135,1.16016384,1.17019652,1.18023328,1.19027436,1.20032,1.21037044,1.22042592,1.23048668,1.24055296,1.250625,1.26070304,1.27078732,1.28087808,1.29097556,1.30108,1.31119164,1.32131072,1.33143748,1.34157216,1.351715,1.36186624,1.37202612,1.38219488,1.39237276,1.40256,1.41275684,1.42296352,1.43318028,1.44340736,1.453645,1.46389344,1.47415292,1.48442368,1.49470596,1.505,1.51530604,1.52562432,1.53595508,1.54629856,1.556655,1.56702464,1.57740772,1.58780448,1.59821516,1.60864,1.61907924,1.62953312,1.64000188,1.65048576,1.660985,1.67149984,1.68203052,1.69257728,1.70314036,1.71372,1.72431644,1.73492992,1.74556068,1.75620896,1.766875,1.77755904,1.78826132,1.79898208,1.80972156,1.82048,1.83125764,1.84205472,1.85287148,1.86370816,1.874565,1.88544224,1.89634012,1.90725888,1.91819876,1.92916,1.94014284,1.95114752,1.96217428,1.97322336,1.984295,1.99538944,2.00650692,2.01764768,2.02881196,2.04,2.05121204,2.06244832,2.07370908,2.08499456,2.096305,2.10764064,2.11900172,2.13038848,2.14180116,2.15324,2.16470524,2.17619712,2.18771588,2.19926176,2.210835,2.22243584,2.23406452,2.24572128,2.25740636,2.26912,2.28086244,2.29263392,2.30443468,2.31626496,2.328125,2.34001504,2.35193532,2.36388608,2.37586756,2.38788,2.39992364,2.41199872,2.42410548,2.43624416,2.448415,2.46061824,2.47285412,2.48512288,2.49742476,2.50976,2.52212884,2.53453152,2.54696828,2.55943936,2.571945,2.58448544,2.59706092,2.60967168,2.62231796,2.635,2.64771804,2.66047232,2.67326308,2.68609056,2.698955,2.71185664,2.72479572,2.73777248,2.75078716,2.76384,2.77693124,2.79006112,2.80322988,2.81643776,2.829685,2.84297184,2.85629852,2.86966528,2.88307236,2.89652,2.91000844,2.92353792,2.93710868,2.95072096,2.964375,2.97807104,2.99180932,3.00559008,3.01941356,3.03328,3.04718964,3.06114272,3.07513948,3.08918016,3.103265,3.11739424,3.13156812,3.14578688,3.16005076,3.17436,3.18871484,3.20311552,3.21756228,3.23205536,3.246595,3.26118144,3.27581492,3.29049568,3.30522396,3.32,3.33482404,3.34969632,3.36461708,3.37958656,3.394605,3.40967264,3.42478972,3.43995648,3.45517316,3.47044,3.48575724,3.50112512,3.51654388,3.53201376,3.547535,3.56310784,3.57873252,3.59440928,3.61013836,3.62592,3.64175444,3.65764192,3.67358268,3.68957696,3.705625,3.72172704,3.73788332,3.75409408,3.77035956,3.78668,3.80305564,3.81948672,3.83597348,3.85251616,3.869115,3.88577024,3.90248212,3.91925088,3.93607676,3.95296,3.96990084,3.98689952,4.00395628,4.02107136,4.038245,4.05547744,4.07276892,4.09011968,4.10752996,4.125,4.14253004,4.16012032,4.17777108,4.19548256,4.213255,4.23108864,4.24898372,4.26694048,4.28495916,4.30304,4.32118324,4.33938912,4.35765788,4.37598976,4.394385,4.41284384,4.43136652,4.44995328,4.46860436,4.48732,4.50610044,4.52494592,4.54385668,4.56283296,4.581875,4.60098304,4.62015732,4.63939808,4.65870556,4.67808,4.69752164,4.71703072,4.73660748,4.75625216,4.775965,4.79574624,4.81559612,4.83551488,4.85550276,4.87556,4.89568684,4.91588352,4.93615028,4.95648736,4.976895,4.99737344,5.01792292,5.03854368,5.05923596,5.08,5.10083604,5.12174432,5.14272508,5.16377856,5.184905,5.20610464,5.22737772,5.24872448,5.27014516,5.29164,5.31320924,5.33485312,5.35657188,5.37836576,5.400235,5.42217984,5.44420052,5.46629728,5.48847036,5.51072,5.53304644,5.55544992,5.57793068,5.60048896,5.623125,5.64583904,5.66863132,5.69150208,5.71445156,5.73748,5.76058764,5.78377472,5.80704148,5.83038816,5.853815,5.87732224,5.90091012,5.92457888,5.94832876,5.97216,5.99607284,6.02006752,6.04414428,6.06830336,6.092545,6.11686944,6.14127692,6.16576768,6.19034196,6.215,6.23974204,6.26456832,6.28947908,6.31447456,6.339555,6.36472064,6.38997172,6.41530848,6.44073116,6.46624,6.49183524,6.51751712,6.54328588,6.56914176];
    	var bolaY = [0.5,0.517992,0.535968,0.553928,0.571872,0.5898,0.607712,0.625608,0.643488,0.661352,0.6792,0.697032,0.714848,0.732648,0.750432,0.7682,0.785952,0.803688,0.821408,0.839112,0.8568,0.874472,0.892128,0.909768,0.927392,0.945,0.962592,0.980168,0.997728,1.015272,1.0328,1.050312,1.067808,1.085288,1.102752,1.1202,1.137632,1.155048,1.172448,1.189832,1.2072,1.224552,1.241888,1.259208,1.276512,1.2938,1.311072,1.328328,1.345568,1.362792,1.38,1.397192,1.414368,1.431528,1.448672,1.4658,1.482912,1.500008,1.517088,1.534152,1.5512,1.568232,1.585248,1.602248,1.619232,1.6362,1.653152,1.670088,1.687008,1.703912,1.7208,1.737672,1.754528,1.771368,1.788192,1.805,1.821792,1.838568,1.855328,1.872072,1.8888,1.905512,1.922208,1.938888,1.955552,1.9722,1.988832,2.005448,2.022048,2.038632,2.0552,2.071752,2.088288,2.104808,2.121312,2.1378,2.154272,2.170728,2.187168,2.203592,2.22,2.236392,2.252768,2.269128,2.285472,2.3018,2.318112,2.334408,2.350688,2.366952,2.3832,2.399432,2.415648,2.431848,2.448032,2.4642,2.480352,2.496488,2.512608,2.528712,2.5448,2.560872,2.576928,2.592968,2.608992,2.625,2.640992,2.656968,2.672928,2.688872,2.7048,2.720712,2.736608,2.752488,2.768352,2.7842,2.800032,2.815848,2.831648,2.847432,2.8632,2.878952,2.894688,2.910408,2.926112,2.9418,2.957472,2.973128,2.988768,3.004392,3.02,3.035592,3.051168,3.066728,3.082272,3.0978,3.113312,3.128808,3.144288,3.159752,3.1752,3.190632,3.206048,3.221448,3.236832,3.2522,3.267552,3.282888,3.298208,3.313512,3.3288,3.344072,3.359328,3.374568,3.389792,3.405,3.420192,3.435368,3.450528,3.465672,3.4808,3.495912,3.511008,3.526088,3.541152,3.5562,3.571232,3.586248,3.601248,3.616232,3.6312,3.646152,3.661088,3.676008,3.690912,3.7058,3.720672,3.735528,3.750368,3.765192,3.78,3.794792,3.809568,3.824328,3.839072,3.8538,3.868512,3.883208,3.897888,3.912552,3.9272,3.941832,3.956448,3.971048,3.985632,4.0002,4.014752,4.029288,4.043808,4.058312,4.0728,4.087272,4.101728,4.116168,4.130592,4.145,4.159392,4.173768,4.188128,4.202472,4.2168,4.231112,4.245408,4.259688,4.273952,4.2882,4.302432,4.316648,4.330848,4.345032,4.3592,4.373352,4.387488,4.401608,4.415712,4.4298,4.443872,4.457928,4.471968,4.485992,4.5,4.513992,4.527968,4.541928,4.555872,4.5698,4.583712,4.597608,4.611488,4.625352,4.6392,4.653032,4.666848,4.680648,4.694432,4.7082,4.721952,4.735688,4.749408,4.763112,4.7768,4.790472,4.804128,4.817768,4.831392,4.845,4.858592,4.872168,4.885728,4.899272,4.9128,4.926312,4.939808,4.953288,4.966752,4.9802,4.993632,5.007048,5.020448,5.033832,5.0472,5.060552,5.073888,5.087208,5.100512,5.1138,5.127072,5.140328,5.153568,5.166792,5.18,5.193192,5.206368,5.219528,5.232672,5.2458,5.258912,5.272008,5.285088,5.298152,5.3112,5.324232,5.337248,5.350248,5.363232,5.3762,5.389152,5.402088,5.415008,5.427912,5.4408,5.453672,5.466528,5.479368,5.492192,5.505,5.517792,5.530568,5.543328,5.556072,5.5688,5.581512,5.594208,5.606888,5.619552,5.6322,5.644832,5.657448,5.670048,5.682632,5.6952,5.707752,5.720288,5.732808,5.745312,5.7578,5.770272,5.782728,5.795168,5.807592,5.82,5.832392,5.844768,5.857128,5.869472,5.8818,5.894112,5.906408,5.918688,5.930952,5.9432,5.955432,5.967648,5.979848,5.992032];
    var myChart = new Chart(document.getElementById("bubble-chart"), {
    type: 'scatter',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["Bola"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [
           	   	{x: bolaX[0],
            	y: bolaY[0],
           },
           {x: bolaX[1],
            	y: bolaY[1],
           },
           {x: bolaX[2],
            	y: bolaY[2],
           },
           {x: bolaX[3],
            	y: bolaY[3],
           },
           {x: bolaX[4],
            	y: bolaY[4],
           },
           {x: bolaX[5],
            	y: bolaY[5],
           },
           {x: bolaX[6],
            	y: bolaY[6],
           },
           {x: bolaX[7],
            	y: bolaY[7],
           },
           {x: bolaX[8],
            	y: bolaY[8],
           },
           {x: bolaX[9],
            	y: bolaY[9],
           },
           {x: bolaX[10],
            	y: bolaY[10],
           },
           {x: bolaX[11],
            	y: bolaY[11],
           },
           {x: bolaX[12],
            	y: bolaY[12],
           },
           {x: bolaX[13],
            	y: bolaY[13],
           },
           {x: bolaX[14],
            	y: bolaY[14],
           },
           {x: bolaX[15],
            	y: bolaY[15],
           },
           {x: bolaX[16],
            	y: bolaY[16],
           },
           {x: bolaX[17],
            	y: bolaY[17],
           },
           {x: bolaX[18],
            	y: bolaY[18],
           },
           {x: bolaX[19],
            	y: bolaY[19],
           },{x: bolaX[20],
            	y: bolaY[20],
           },
           {x: bolaX[21],
            	y: bolaY[21],
           },
           {x: bolaX[22],
            	y: bolaY[22],
           },
           {x: bolaX[23],
            	y: bolaY[23],
           },
           {x: bolaX[24],
            	y: bolaY[24],
           },
           {x: bolaX[25],
            	y: bolaY[25],
           },
           {x: bolaX[26],
            	y: bolaY[26],
           },
           {x: bolaX[27],
            	y: bolaY[27],
           },
           {x: bolaX[28],
            	y: bolaY[28],
           },
           {x: bolaX[29],
            	y: bolaY[29],
           },{x: bolaX[30],
            	y: bolaY[30],
           },
           {x: bolaX[31],
            	y: bolaY[31],
           },
           {x: bolaX[32],
            	y: bolaY[32],
           },
           {x: bolaX[33],
            	y: bolaY[33],
           },
           {x: bolaX[34],
            	y: bolaY[34],
           },
           {x: bolaX[35],
            	y: bolaY[35],
           },
           {x: bolaX[36],
            	y: bolaY[36],
           },
           {x: bolaX[37],
            	y: bolaY[37],
           },
           {x: bolaX[38],
            	y: bolaY[38],
           },
           {x: bolaX[39],
            	y: bolaY[39],
           },{x: bolaX[40],
            	y: bolaY[40],
           },
           {x: bolaX[41],
            	y: bolaY[41],
           },
           {x: bolaX[42],
            	y: bolaY[42],
           },
           {x: bolaX[43],
            	y: bolaY[43],
           },
           {x: bolaX[44],
            	y: bolaY[44],
           },
           {x: bolaX[45],
            	y: bolaY[45],
           },
           {x: bolaX[46],
            	y: bolaY[46],
           },
           {x: bolaX[47],
            	y: bolaY[47],
           },
           {x: bolaX[48],
            	y: bolaY[48],
           },
           {x: bolaX[49],
            	y: bolaY[49],
           },{x: bolaX[50],
            	y: bolaY[50],
           },
           {x: bolaX[51],
            	y: bolaY[51],
           },
           {x: bolaX[52],
            	y: bolaY[52],
           },
           {x: bolaX[53],
            	y: bolaY[53],
           },
           {x: bolaX[54],
            	y: bolaY[54],
           },
           {x: bolaX[55],
            	y: bolaY[55],
           },
           {x: bolaX[56],
            	y: bolaY[56],
           },
           {x: bolaX[57],
            	y: bolaY[57],
           },
           {x: bolaX[58],
            	y: bolaY[58],
           },
           {x: bolaX[59],
            	y: bolaY[59],
           },{x: bolaX[60],
            	y: bolaY[60],
           },
           {x: bolaX[61],
            	y: bolaY[61],
           },
           {x: bolaX[62],
            	y: bolaY[62],
           },
           {x: bolaX[63],
            	y: bolaY[63],
           },
           {x: bolaX[64],
            	y: bolaY[64],
           },
           {x: bolaX[65],
            	y: bolaY[65],
           },
           {x: bolaX[66],
            	y: bolaY[66],
           },
           {x: bolaX[67],
            	y: bolaY[67],
           },
           {x: bolaX[68],
            	y: bolaY[68],
           },
           {x: bolaX[69],
            	y: bolaY[69],
           },{x: bolaX[70],
            	y: bolaY[70],
           },
           {x: bolaX[71],
            	y: bolaY[71],
           },
           {x: bolaX[72],
            	y: bolaY[72],
           },
           {x: bolaX[73],
            	y: bolaY[73],
           },
           {x: bolaX[74],
            	y: bolaY[74],
           },
           {x: bolaX[75],
            	y: bolaY[75],
           },
           {x: bolaX[76],
            	y: bolaY[76],
           },
           {x: bolaX[77],
            	y: bolaY[77],
           },
           {x: bolaX[78],
            	y: bolaY[78],
           },
           {x: bolaX[79],
            	y: bolaY[79],
           },{x: bolaX[80],
            	y: bolaY[80],
           },
           {x: bolaX[81],
            	y: bolaY[81],
           },
           {x: bolaX[82],
            	y: bolaY[82],
           },
           {x: bolaX[83],
            	y: bolaY[83],
           },
           {x: bolaX[84],
            	y: bolaY[84],
           },
           {x: bolaX[85],
            	y: bolaY[85],
           },
           {x: bolaX[86],
            	y: bolaY[86],
           },
           {x: bolaX[87],
            	y: bolaY[87],
           },
           {x: bolaX[88],
            	y: bolaY[88],
           },
           {x: bolaX[89],
            	y: bolaY[89],
           },{x: bolaX[90],
            	y: bolaY[90],
           },
           {x: bolaX[91],
            	y: bolaY[91],
           },
           {x: bolaX[92],
            	y: bolaY[92],
           },
           {x: bolaX[93],
            	y: bolaY[93],
           },
           {x: bolaX[94],
            	y: bolaY[94],
           },
           {x: bolaX[95],
            	y: bolaY[95],
           },
           {x: bolaX[96],
            	y: bolaY[96],
           },
           {x: bolaX[97],
            	y: bolaY[97],
           },
           {x: bolaX[98],
            	y: bolaY[98],
           },
           {x: bolaX[99],
            	y: bolaY[99],
           },
           {x: bolaX[100],
            	y: bolaY[100],
           },
           {x: bolaX[101],
            	y: bolaY[101],
           },
           {x: bolaX[102],
            	y: bolaY[102],
           },
           {x: bolaX[103],
            	y: bolaY[103],
           },
           {x: bolaX[104],
            	y: bolaY[104],
           },
           {x: bolaX[105],
            	y: bolaY[105],
           },
           {x: bolaX[106],
            	y: bolaY[106],
           },
           {x: bolaX[107],
            	y: bolaY[107],
           },
           {x: bolaX[108],
            	y: bolaY[108],
           },
           {x: bolaX[109],
            	y: bolaY[109],
           },
           {x: bolaX[110],
            	y: bolaY[110],
           },
           {x: bolaX[111],
            	y: bolaY[111],
           },
           {x: bolaX[112],
            	y: bolaY[112],
           },
           {x: bolaX[113],
            	y: bolaY[113],
           },
           {x: bolaX[114],
            	y: bolaY[114],
           },
           {x: bolaX[115],
            	y: bolaY[115],
           },
           {x: bolaX[116],
            	y: bolaY[116],
           },
           {x: bolaX[117],
            	y: bolaY[117],
           },
           {x: bolaX[118],
            	y: bolaY[118],
           },
           {x: bolaX[119],
            	y: bolaY[119],
           },{x: bolaX[120],
            	y: bolaY[120],
           },
           {x: bolaX[121],
            	y: bolaY[121],
           },
           {x: bolaX[122],
            	y: bolaY[122],
           },
           {x: bolaX[123],
            	y: bolaY[123],
           },
           {x: bolaX[124],
            	y: bolaY[124],
           },
           {x: bolaX[125],
            	y: bolaY[125],
           },
           {x: bolaX[126],
            	y: bolaY[126],
           },
           {x: bolaX[127],
            	y: bolaY[127],
           },
           {x: bolaX[128],
            	y: bolaY[128],
           },
           {x: bolaX[129],
            	y: bolaY[129],
           },{x: bolaX[130],
            	y: bolaY[130],
           },
           {x: bolaX[131],
            	y: bolaY[131],
           },
           {x: bolaX[132],
            	y: bolaY[132],
           },
           {x: bolaX[133],
            	y: bolaY[133],
           },
           {x: bolaX[134],
            	y: bolaY[134],
           },
           {x: bolaX[135],
            	y: bolaY[135],
           },
           {x: bolaX[136],
            	y: bolaY[136],
           },
           {x: bolaX[137],
            	y: bolaY[137],
           },
           {x: bolaX[138],
            	y: bolaY[138],
           },
           {x: bolaX[139],
            	y: bolaY[139],
           },{x: bolaX[140],
            	y: bolaY[140],
           },
           {x: bolaX[141],
            	y: bolaY[141],
           },
           {x: bolaX[142],
            	y: bolaY[142],
           },
           {x: bolaX[143],
            	y: bolaY[143],
           },
           {x: bolaX[144],
            	y: bolaY[144],
           },
           {x: bolaX[145],
            	y: bolaY[145],
           },
           {x: bolaX[146],
            	y: bolaY[146],
           },
           {x: bolaX[147],
            	y: bolaY[147],
           },
           {x: bolaX[148],
            	y: bolaY[148],
           },
           {x: bolaX[149],
            	y: bolaY[149],
           },{x: bolaX[150],
            	y: bolaY[150],
           },
           {x: bolaX[151],
            	y: bolaY[151],
           },
           {x: bolaX[152],
            	y: bolaY[152],
           },
           {x: bolaX[153],
            	y: bolaY[153],
           },
           {x: bolaX[154],
            	y: bolaY[154],
           },
           {x: bolaX[155],
            	y: bolaY[155],
           },
           {x: bolaX[156],
            	y: bolaY[156],
           },
           {x: bolaX[157],
            	y: bolaY[157],
           },
           {x: bolaX[158],
            	y: bolaY[158],
           },
           {x: bolaX[159],
            	y: bolaY[159],
           },{x: bolaX[160],
            	y: bolaY[160],
           },
           {x: bolaX[161],
            	y: bolaY[161],
           },
           {x: bolaX[162],
            	y: bolaY[162],
           },
           {x: bolaX[163],
            	y: bolaY[163],
           },
           {x: bolaX[164],
            	y: bolaY[164],
           },
           {x: bolaX[165],
            	y: bolaY[165],
           },
           {x: bolaX[166],
            	y: bolaY[166],
           },
           {x: bolaX[167],
            	y: bolaY[167],
           },
           {x: bolaX[168],
            	y: bolaY[168],
           },
           {x: bolaX[169],
            	y: bolaY[169],
           },{x: bolaX[170],
            	y: bolaY[170],
           },
           {x: bolaX[171],
            	y: bolaY[171],
           },
           {x: bolaX[172],
            	y: bolaY[172],
           },
           {x: bolaX[173],
            	y: bolaY[173],
           },
           {x: bolaX[174],
            	y: bolaY[174],
           },
           {x: bolaX[175],
            	y: bolaY[175],
           },
           {x: bolaX[176],
            	y: bolaY[176],
           },
           {x: bolaX[177],
            	y: bolaY[177],
           },
           {x: bolaX[178],
            	y: bolaY[178],
           },
           {x: bolaX[179],
            	y: bolaY[179],
           },{x: bolaX[180],
            	y: bolaY[180],
           },
           {x: bolaX[181],
            	y: bolaY[181],
           },
           {x: bolaX[182],
            	y: bolaY[182],
           },
           {x: bolaX[183],
            	y: bolaY[183],
           },
           {x: bolaX[184],
            	y: bolaY[184],
           },
           {x: bolaX[185],
            	y: bolaY[185],
           },
           {x: bolaX[186],
            	y: bolaY[186],
           },
           {x: bolaX[187],
            	y: bolaY[187],
           },
           {x: bolaX[188],
            	y: bolaY[188],
           },
           {x: bolaX[189],
            	y: bolaY[189],
           },{x: bolaX[190],
            	y: bolaY[190],
           },
           {x: bolaX[191],
            	y: bolaY[191],
           },
           {x: bolaX[192],
            	y: bolaY[192],
           },
           {x: bolaX[193],
            	y: bolaY[193],
           },
           {x: bolaX[194],
            	y: bolaY[194],
           },
           {x: bolaX[195],
            	y: bolaY[195],
           },
           {x: bolaX[196],
            	y: bolaY[196],
           },
           {x: bolaX[197],
            	y: bolaY[197],
           },
           {x: bolaX[198],
            	y: bolaY[198],
           },
           {x: bolaX[199],
            	y: bolaY[199],
           },
           {x: bolaX[200],
            	y: bolaY[200],
           },{x: bolaX[201],
            	y: bolaY[201],
           },
           {x: bolaX[202],
            	y: bolaY[202],
           },
           {x: bolaX[203],
            	y: bolaY[203],
           },
           {x: bolaX[204],
            	y: bolaY[204],
           },
           {x: bolaX[205],
            	y: bolaY[205],
           },
           {x: bolaX[206],
            	y: bolaY[206],
           },
           {x: bolaX[207],
            	y: bolaY[207],
           },
           {x: bolaX[208],
            	y: bolaY[208],
           },
           {x: bolaX[209],
            	y: bolaY[209],
           },
           {x: bolaX[210],
            	y: bolaY[210],
           },
           {x: bolaX[211],
            	y: bolaY[211],
           },
           {x: bolaX[212],
            	y: bolaY[212],
           },
           {x: bolaX[213],
            	y: bolaY[213],
           },
           {x: bolaX[214],
            	y: bolaY[214],
           },
           {x: bolaX[215],
            	y: bolaY[215],
           },
           {x: bolaX[216],
            	y: bolaY[216],
           },
           {x: bolaX[217],
            	y: bolaY[217],
           },
           {x: bolaX[218],
            	y: bolaY[218],
           },
           {x: bolaX[219],
            	y: bolaY[219],
           },{x: bolaX[220],
            	y: bolaY[220],
           },
           {x: bolaX[221],
            	y: bolaY[221],
           },
           {x: bolaX[222],
            	y: bolaY[222],
           },
           {x: bolaX[223],
            	y: bolaY[223],
           },
           {x: bolaX[224],
            	y: bolaY[224],
           },
           {x: bolaX[225],
            	y: bolaY[225],
           },
           {x: bolaX[226],
            	y: bolaY[226],
           },
           {x: bolaX[227],
            	y: bolaY[227],
           },
           {x: bolaX[228],
            	y: bolaY[228],
           },
           {x: bolaX[229],
            	y: bolaY[229],
           },{x: bolaX[230],
            	y: bolaY[230],
           },
           {x: bolaX[231],
            	y: bolaY[231],
           },
           {x: bolaX[232],
            	y: bolaY[232],
           },
           {x: bolaX[233],
            	y: bolaY[233],
           },
           {x: bolaX[234],
            	y: bolaY[234],
           },
           {x: bolaX[235],
            	y: bolaY[235],
           },
           {x: bolaX[236],
            	y: bolaY[236],
           },
           {x: bolaX[237],
            	y: bolaY[237],
           },
           {x: bolaX[238],
            	y: bolaY[238],
           },
           {x: bolaX[239],
            	y: bolaY[239],
           },{x: bolaX[240],
            	y: bolaY[240],
           },
           {x: bolaX[241],
            	y: bolaY[241],
           },
           {x: bolaX[242],
            	y: bolaY[242],
           },
           {x: bolaX[243],
            	y: bolaY[243],
           },
           {x: bolaX[244],
            	y: bolaY[244],
           },
           {x: bolaX[245],
            	y: bolaY[245],
           },
           {x: bolaX[246],
            	y: bolaY[246],
           },
           {x: bolaX[247],
            	y: bolaY[247],
           },
           {x: bolaX[248],
            	y: bolaY[248],
           },
           {x: bolaX[249],
            	y: bolaY[249],
           },{x: bolaX[250],
            	y: bolaY[250],
           },
           {x: bolaX[251],
            	y: bolaY[251],
           },
           {x: bolaX[252],
            	y: bolaY[252],
           },
           {x: bolaX[253],
            	y: bolaY[253],
           },
           {x: bolaX[254],
            	y: bolaY[254],
           },
           {x: bolaX[255],
            	y: bolaY[255],
           },
           {x: bolaX[256],
            	y: bolaY[256],
           },
           {x: bolaX[257],
            	y: bolaY[257],
           },
           {x: bolaX[258],
            	y: bolaY[258],
           },
           {x: bolaX[259],
            	y: bolaY[259],
           },{x: bolaX[260],
            	y: bolaY[260],
           },
           {x: bolaX[261],
            	y: bolaY[261],
           },
           {x: bolaX[262],
            	y: bolaY[262],
           },
           {x: bolaX[263],
            	y: bolaY[263],
           },
           {x: bolaX[264],
            	y: bolaY[264],
           },
           {x: bolaX[265],
            	y: bolaY[265],
           },
           {x: bolaX[266],
            	y: bolaY[266],
           },
           {x: bolaX[267],
            	y: bolaY[267],
           },
           {x: bolaX[268],
            	y: bolaY[268],
           },
           {x: bolaX[269],
            	y: bolaY[269],
           },{x: bolaX[270],
            	y: bolaY[270],
           },
           {x: bolaX[271],
            	y: bolaY[271],
           },
           {x: bolaX[272],
            	y: bolaY[272],
           },
           {x: bolaX[273],
            	y: bolaY[273],
           },
           {x: bolaX[274],
            	y: bolaY[274],
           },
           {x: bolaX[275],
            	y: bolaY[275],
           },
           {x: bolaX[276],
            	y: bolaY[276],
           },
           {x: bolaX[277],
            	y: bolaY[277],
           },
           {x: bolaX[278],
            	y: bolaY[278],
           },
           {x: bolaX[279],
            	y: bolaY[279],
           },{x: bolaX[280],
            	y: bolaY[280],
           },
           {x: bolaX[281],
            	y: bolaY[281],
           },
           {x: bolaX[282],
            	y: bolaY[282],
           },
           {x: bolaX[283],
            	y: bolaY[283],
           },
           {x: bolaX[284],
            	y: bolaY[284],
           },
           {x: bolaX[285],
            	y: bolaY[285],
           },
           {x: bolaX[286],
            	y: bolaY[286],
           },
           {x: bolaX[287],
            	y: bolaY[287],
           },
           {x: bolaX[288],
            	y: bolaY[288],
           },
           {x: bolaX[289],
            	y: bolaY[289],
           },{x: bolaX[290],
            	y: bolaY[290],
           },
           {x: bolaX[291],
            	y: bolaY[291],
           },
           {x: bolaX[292],
            	y: bolaY[292],
           },
           {x: bolaX[293],
            	y: bolaY[293],
           },
           {x: bolaX[294],
            	y: bolaY[294],
           },
           {x: bolaX[295],
            	y: bolaY[295],
           },
           {x: bolaX[296],
            	y: bolaY[296],
           },
           {x: bolaX[297],
            	y: bolaY[297],
           },
           {x: bolaX[298],
            	y: bolaY[298],
           },
           {x: bolaX[299],
            	y: bolaY[299],
           },{x: bolaX[300],
            	y: bolaY[300],
           },{x: bolaX[301],
            	y: bolaY[301],
           },
           {x: bolaX[302],
            	y: bolaY[302],
           },
           {x: bolaX[303],
            	y: bolaY[303],
           },
           {x: bolaX[304],
            	y: bolaY[304],
           },
           {x: bolaX[305],
            	y: bolaY[305],
           },
           {x: bolaX[306],
            	y: bolaY[306],
           },
           {x: bolaX[307],
            	y: bolaY[307],
           },
           {x: bolaX[308],
            	y: bolaY[308],
           },
           {x: bolaX[309],
            	y: bolaY[309],
           },
           {x: bolaX[310],
            	y: bolaY[310],
           },
           {x: bolaX[311],
            	y: bolaY[311],
           },
           {x: bolaX[312],
            	y: bolaY[312],
           },
           {x: bolaX[313],
            	y: bolaY[313],
           },
           {x: bolaX[314],
            	y: bolaY[314],
           },
           {x: bolaX[315],
            	y: bolaY[315],
           },
           {x: bolaX[316],
            	y: bolaY[316],
           },
           {x: bolaX[317],
            	y: bolaY[317],
           },
           {x: bolaX[318],
            	y: bolaY[318],
           },
           {x: bolaX[319],
            	y: bolaY[319],
           },{x: bolaX[320],
            	y: bolaY[320],
           },
           {x: bolaX[321],
            	y: bolaY[321],
           },
           {x: bolaX[322],
            	y: bolaY[322],
           },
           {x: bolaX[323],
            	y: bolaY[323],
           },
           {x: bolaX[324],
            	y: bolaY[324],
           },
           {x: bolaX[325],
            	y: bolaY[325],
           },
           {x: bolaX[326],
            	y: bolaY[326],
           },
           {x: bolaX[327],
            	y: bolaY[327],
           },
           {x: bolaX[328],
            	y: bolaY[328],
           },
           {x: bolaX[329],
            	y: bolaY[329],
           },{x: bolaX[330],
            	y: bolaY[330],
           },
           {x: bolaX[331],
            	y: bolaY[331],
           },
           {x: bolaX[332],
            	y: bolaY[332],
           },
           {x: bolaX[333],
            	y: bolaY[333],
           },
           {x: bolaX[334],
            	y: bolaY[334],
           },
           {x: bolaX[335],
            	y: bolaY[335],
           },
           {x: bolaX[336],
            	y: bolaY[336],
           },
           {x: bolaX[337],
            	y: bolaY[337],
           },
           {x: bolaX[338],
            	y: bolaY[338],
           },
           {x: bolaX[339],
            	y: bolaY[339],
           },{x: bolaX[340],
            	y: bolaY[340],
           },
           {x: bolaX[341],
            	y: bolaY[341],
           },
           {x: bolaX[342],
            	y: bolaY[342],
           },
           {x: bolaX[343],
            	y: bolaY[343],
           },
           {x: bolaX[344],
            	y: bolaY[344],
           },
           {x: bolaX[345],
            	y: bolaY[345],
           },
           {x: bolaX[346],
            	y: bolaY[346],
           },
           {x: bolaX[347],
            	y: bolaY[347],
           },
           {x: bolaX[348],
            	y: bolaY[348],
           },
           {x: bolaX[349],
            	y: bolaY[349],
           },{x: bolaX[350],
            	y: bolaY[350],
           },
           {x: bolaX[351],
            	y: bolaY[351],
           },
           {x: bolaX[352],
            	y: bolaY[352],
           },
           {x: bolaX[353],
            	y: bolaY[353],
           },
           {x: bolaX[354],
            	y: bolaY[354],
           },
           {x: bolaX[355],
            	y: bolaY[355],
           },
           {x: bolaX[356],
            	y: bolaY[356],
           },
           {x: bolaX[357],
            	y: bolaY[357],
           },
           {x: bolaX[358],
            	y: bolaY[358],
           },
           {x: bolaX[359],
            	y: bolaY[359],
           },{x: bolaX[360],
            	y: bolaY[360],
           },
           {x: bolaX[361],
            	y: bolaY[361],
           },
           {x: bolaX[362],
            	y: bolaY[362],
           },
           {x: bolaX[363],
            	y: bolaY[363],
           },
           {x: bolaX[364],
            	y: bolaY[364],
           }]
        }, {
          label: ["Robô"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: roboX,
            y: roboY,
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Interceptação do Robô com a Bola'
      }, scales: {
        yAxes: [{ 
        ticks: {
        beginAtZero: true,
        steps:6,
        stepValue:1,
        max:6
    	},
        scaleLabel: {
            display: true,
            labelString: "Y"
          }
        }],
        xAxes: [{ 
       		ticks: {
        	beginAtZero: true,
        	steps:9,
        	stepValue:1,
       	 	max:9
    		},
          scaleLabel: {
            display: true,
            labelString: "X"
          }
        }]
      }
    }
});
var distances = [];
for(i=0;i<bolaX.length;i++){
  distances[i] = Math.sqrt(Math.pow((bolaX[i] - roboX), 2) + Math.pow((bolaY[i] - roboY), 2));
}

var length = distances.length;
    //Number of passes
    for (var i = 0; i < length; i++) { 
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) { 
            //Compare the adjacent positions
            if(distances[j] > distances[j+1]) {
                //Swap the numbers
                var tmp = distances[j];  //Temporary variable to hold the current number
                distances[j] = distances[j+1]; //Replace current number with adjacent number
                distances[j+1] = tmp; //Replace adjacent number with current number
            }
        }        
    }

for(i=0;i<length;i++){
  console.log(distances[i]);
}
