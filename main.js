function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const leaf_1 = { //left
        color_point_1: [0.960, 0.870, 0.624], // warna cream (atas)
        color_point_2: [0.980, 0.787, 0.255], // warna kuning (bawah)
        color_point_5: [1.00, 0.348, 0.150], // bulet oren
        color_point_8: [0.960, 0.489, 0.346], // untuk bulet oren warna muda
        point_c: [-0.7,0.45],
        point_d: [-0.71425,0.42363],
        point_e: [-0.66002,0.44417],
        point_f: [-0.63791,0.42205],
        point_g: [-0.72215,0.41416],
        point_h: [-0.67634,0.34835],
        point_i: [-0.78709,0.43069],
        point_j: [-0.56894,0.43364],
        point_k: [-0.82902,0.3952],
        point_l: [-0.8585,0.35677],
        point_m: [-0.87774,0.2786],
        point_n: [-0.68165,0.15944],
        point_o: [-0.92551,0.1931],
        point_p: [-0.93068,0.15564],
        point_q: [-0.92293,0.11947],
        point_r: [-0.86351,0.07168],
        point_s: [-0.7718,-0.0097],
        point_t: [-0.68784,-0.06524],
        point_u: [-0.62067,-0.07945],
        point_v: [-0.5,0.2],
        point_w: [-0.48634,-0.10399],
        point_z: [-0.55867,-0.08461],
        point_a1: [-0.45128,0.42679],
        point_b1: [-0.32777,0.3796],
        point_c1: [-0.41271,-0.0872],
        point_d1: [-0.3228,0.18052],
        point_e1: [-0.20786,0.34618],
        point_f1: [-0.1549,0.30223],
        point_g1: [-0.1549,0.26617],
        point_h1: [-0.1132,0.19066],
        point_i1: [-0.10767,0.10081],
        point_j1: [-0.15264,0.01599],
        point_k1: [-0.17969,-0.03134],
        point_l1: [-0.18532,-0.08092],
        point_m1: [-0.34167,-0.08332],
        point_n1: [-0.26417,-0.09366],
        point_o1: [-0.87291,-0.05779],
        point_p1: [-0.87526,-0.16824],
        point_q1: [-0.82239,-0.28455],
        point_r1: [-0.7,-0.4],
        point_s1: [-0.62618,-0.45374],
        point_t1: [-0.50987,-0.45256],
        point_u1: [-0.4667,-0.44317],
        point_v1: [-0.43232,-0.45139],
        point_w1: [-0.37945,-0.45491],
        point_z1: [-0.28311,-0.42084],
        point_a2: [-0.19041,-0.35743],
        point_b2: [-0.10887,-0.2621],
        point_c2: [-0.14095,-0.0437],
        point_d2: [-0.13796,-0.1297],
        point_e2: [-0.10456,-0.22545],
        point_f2: [-0.71993,0.34484],
        point_g2: [-0.74503,0.31349],
        point_h2: [-0.68574,0.33334],
        point_i2: [-0.74244,0.28138],
        point_j2: [-0.63778,0.27443],
        point_k2: [-0.66908,0.27913],
        point_l2: [-0.71636,0.2534],
        point_m2: [-0.67221,0.23845],
        point_n2: [-0.63466,0.32059],
        point_o2: [-0.65656,0.34171],
        point_p2: [-0.52577,0.3056],
        point_q2: [-0.55904,0.29743],
        point_r2: [-0.52577,0.2449],
        point_s2: [-0.58648,0.26182],
        point_w2: [-0.56021,0.21046],
        point_z2: [-0.52752,0.17252],
        point_a3: [-0.47791,0.19411],
        point_b3: [-0.49367,0.16493],
        point_c3: [-0.46682,0.24315],
        point_d3: [-0.47149,0.27175],
        point_e3: [-0.48288,0.30161],
        point_f3: [-0.63317,0.36806],
        point_g3: [-0.60749,0.37856],
        point_h3: [-0.55962,0.35697],
        point_i3: [-0.64251,0.33946],
        point_j3: [-0.618,0.31494],
        point_k3: [-0.55729,0.33245],
        point_l3: [-0.54853,0.39082],
        point_m3: [-0.50009,0.36397],
        point_n3: [-0.52519,0.32019],
        point_o3: [-0.49133,0.30969],
        point_p3: [-0.44755,0.33012],
        point_q3: [-0.41662,0.37448],
        point_r3: [-0.41136,0.406],
        point_s3: [-0.51818,0.40833],
        point_t3: [-0.48024,0.42118],
        point_u3: [-0.44989,0.41767],
        point_v3: [-0.65542,0.30108],
    };

    const leaf_2 = { //right
        color_point_3: [0.960, 0.870, 0.624], // warna cream (atas)
        color_point_4: [0.980, 0.787, 0.255],  // warna kuning (bawah)
        color_point_6: [1.00, 0.348, 0.150], // bulet oren
        color_point_7: [0.960, 0.489, 0.346], // untuk bulet oren warna muda
        point_a4: [0.31711,0.42338],
        point_b4: [0.24678,0.39468],
        point_c4: [0.32889,0.18067],
        point_d4: [0.36303,0.40616],
        point_e4: [0.18875,0.33426],
        point_f4: [0.41327,0.39037],
        point_g4: [0.48216,0.41764],
        point_h4: [0.53985,0.42421],
        point_i4: [0.16021,0.33226],
        point_j4: [0.12502,0.30173],
        point_k4: [0.09162,0.21649],
        point_l4: [0.0476,0.12813],
        point_m4: [0.0564,0.07437],
        point_n4: [0.05307,0.01649],
        point_o4: [0.07824,-0.02401],
        point_p4: [0.10239,-0.09223],
        point_q4: [0.51715,0.14127],
        point_r4: [0.22382,-0.17798],
        point_s4: [0.34438,-0.2397],
        point_t4: [0.46207,-0.24401],
        point_u4: [0.55249,-0.22678],
        point_v4: [0.58236,0.43635],
        point_w4: [0.62002,0.42542],
        point_z4: [0.69169,0.35254],
        point_a5: [0.74878,0.30152],
        point_b5: [0.80951,0.26629],
        point_c5: [0.63864,-0.21227],
        point_d5: [0.73168,0.0548],
        point_e5: [0.77656,-0.19256],
        point_f5: [0.71307,-0.22978],
        point_g5: [0.86968,0.2325],
        point_h5: [0.9,0.2],
        point_i5: [0.90269,0.11624],
        point_j5: [0.87255,-0.00145],
        point_k5: [0.86681,-0.12057],
        point_m5: [0.1,-0.2],
        point_n5: [0.09909,-0.25851],
        point_o5: [0.12525,-0.29962],
        point_p5: [0.17136,-0.33578],
        point_q5: [0.20747,-0.38434],
        point_r5: [0.28845,-0.43542],
        point_s5: [0.3532,-0.44014],
        point_t5: [0.46038,-0.43791],
        point_u5: [0.5725,-0.43666],
        point_v5: [0.63137,-0.42071],
        point_w5: [0.67943,-0.42583],
        point_z5: [0.73946,-0.3832],
        point_a6: [0.80418,-0.27169],
        point_b6: [0.819,-0.20229],
        point_c6: [0.84136,-0.20252],
        point_d6: [0.37071,0.22926],
        point_e6: [0.34559,0.24057],
        point_f6: [0.30121,0.18895],
        point_g6: [0.30981,0.2368],
        point_h6: [0.28156,0.23178],
        point_i6: [0.25016,0.20666],
        point_j6: [0.23823,0.16171],
        point_k6: [0.25123,0.13181],
        point_l6: [0.28703,0.10233],
        point_m6: [0.32124,0.09993],
        point_n6: [0.37949,0.11751],
        point_o6: [0.39253,0.17963],
        point_p6: [0.38766,0.20855],
        point_q6: [0.41688,0.21888],
        point_r6: [0.45829,0.23394],
        point_s6: [0.50032,0.21135],
        point_t6: [0.52354,0.1781],
        point_u6: [0.53323,0.16333],
        point_v6: [0.42765,0.11453],
        point_w6: [0.42448,0.02929],
        point_z6: [0.37736,0.07333],
        point_a7: [0.36983,0.04134],
        point_b7: [0.38865,0.01436],
        point_c7: [0.42128,0.00934],
        point_d7: [0.45327,0.01123],
        point_e7: [0.47084,0.03695],
        point_f7: [0.50032,0.05953],
        point_g7: [0.50283,0.09419],
        point_h7: [0.49562,0.12687],
        point_i7: [0.565,0.19194],
        point_j7: [0.6,0.12],
        point_k7: [0.56619,0.05209],
        point_l7: [0.63522,0.09434],
        point_m7: [0.65724,0.12826],
        point_n7: [0.65248,0.16337],
        point_o7: [0.6382,0.18123],
        point_p7: [0.60309,0.18182],
        point_q7: [0.70855,-0.13905],
        point_r7: [0.7,-0.16],
        point_s7: [0.73632,-0.13548],
        point_t7: [0.75298,-0.15215],
        point_u7: [0.7506,-0.17317],
        point_v7: [0.70419,-0.18031],
        point_w7: [0.72997,-0.18587],
    };

    const vertices = [
        //Left Object

        // ini untuk bagian warna cream nya (atas)
        //triangle CDE
        ...leaf_1.point_c, ...leaf_1.color_point_1,
        ...leaf_1.point_d, ...leaf_1.color_point_1,
        ...leaf_1.point_e, ...leaf_1.color_point_1,

        //triangle DEF
        ...leaf_1.point_d, ...leaf_1.color_point_1,
        ...leaf_1.point_e, ...leaf_1.color_point_1,
        ...leaf_1.point_f, ...leaf_1.color_point_1,

        // 30
        
        //triangle GDF
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        ...leaf_1.point_d, ...leaf_1.color_point_1,
        ...leaf_1.point_f, ...leaf_1.color_point_1,

        //triangle GFH
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        ...leaf_1.point_f, ...leaf_1.color_point_1,
        ...leaf_1.point_h, ...leaf_1.color_point_1,

        //60
        
        //triangle IGH
        ...leaf_1.point_i, ...leaf_1.color_point_1,
        ...leaf_1.point_g, ...leaf_1.color_point_1,
        ...leaf_1.point_h, ...leaf_1.color_point_1,

        //triangle KIH
        ...leaf_1.point_k, ...leaf_1.color_point_1,
        ...leaf_1.point_i, ...leaf_1.color_point_1,
        ...leaf_1.point_h, ...leaf_1.color_point_1,

        //90
        
        //triangle KLH
        ...leaf_1.point_k, ...leaf_1.color_point_1,
        ...leaf_1.point_l, ...leaf_1.color_point_1,
        ...leaf_1.point_h, ...leaf_1.color_point_1,

        //triangle LMH
        ...leaf_1.point_l, ...leaf_1.color_point_1,
        ...leaf_1.point_m, ...leaf_1.color_point_1,
        ...leaf_1.point_h, ...leaf_1.color_point_1,

        //120

        //triangle MNH
        ...leaf_1.point_m, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,
        ...leaf_1.point_h, ...leaf_1.color_point_1,

        //triangle MON
        ...leaf_1.point_m, ...leaf_1.color_point_1,
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,

        //150

        //triangle OPN
        ...leaf_1.point_o, ...leaf_1.color_point_1,
        ...leaf_1.point_p, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,

        //triangle PQN
        ...leaf_1.point_p, ...leaf_1.color_point_1,
        ...leaf_1.point_q, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,

        //180

        //triangle QRN
        ...leaf_1.point_q, ...leaf_1.color_point_1,
        ...leaf_1.point_r, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,

        //triangle RSN
        ...leaf_1.point_r, ...leaf_1.color_point_1,
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,

        //210

        //triangle STN
        ...leaf_1.point_s, ...leaf_1.color_point_1,
        ...leaf_1.point_t, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,

        //triangle TUN
        ...leaf_1.point_t, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,

        //240

        //triangle NUV
        ...leaf_1.point_n, ...leaf_1.color_point_1,
        ...leaf_1.point_u, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //triangle HNV
        ...leaf_1.point_h, ...leaf_1.color_point_1,
        ...leaf_1.point_n, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //270

        //triangle HJV
        ...leaf_1.point_h, ...leaf_1.color_point_1,
        ...leaf_1.point_j, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //triangle JA1V
        ...leaf_1.point_j, ...leaf_1.color_point_1,
        ...leaf_1.point_a1, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //300

        //triangle UZV
        ...leaf_1.point_u, ...leaf_1.color_point_1,
        ...leaf_1.point_z, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //triangle ZWV
        ...leaf_1.point_z, ...leaf_1.color_point_1,
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //330

        //triangle WC1V
        ...leaf_1.point_w, ...leaf_1.color_point_1,
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //triangle A1B1V
        ...leaf_1.point_a1, ...leaf_1.color_point_1,
        ...leaf_1.point_b1, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //360

        //triangle C1D1V
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //triangle B1D1V
        ...leaf_1.point_b1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,
        ...leaf_1.point_v, ...leaf_1.color_point_1,

        //390

        //triangle B1E1D1
        ...leaf_1.point_b1, ...leaf_1.color_point_1,
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //triangle C1M1D1
        ...leaf_1.point_c1, ...leaf_1.color_point_1,
        ...leaf_1.point_m1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //420

        //triangle FHJ
        ...leaf_1.point_f, ...leaf_1.color_point_1,
        ...leaf_1.point_h, ...leaf_1.color_point_1,
        ...leaf_1.point_j, ...leaf_1.color_point_1,

        //triangle E1F1D1
        ...leaf_1.point_e1, ...leaf_1.color_point_1,
        ...leaf_1.point_f1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //450

        //triangle F1G1D1
        ...leaf_1.point_f1, ...leaf_1.color_point_1,
        ...leaf_1.point_g1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //triangle G1H1D1
        ...leaf_1.point_g1, ...leaf_1.color_point_1,
        ...leaf_1.point_h1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //480

        //triangle H1I1D1
        ...leaf_1.point_h1, ...leaf_1.color_point_1,
        ...leaf_1.point_i1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //triangle I1J1D1
        ...leaf_1.point_i1, ...leaf_1.color_point_1,
        ...leaf_1.point_j1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //510

        //triangle J1K1D1
        ...leaf_1.point_j1, ...leaf_1.color_point_1,
        ...leaf_1.point_k1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //triangle K1L1D1
        ...leaf_1.point_k1, ...leaf_1.color_point_1,
        ...leaf_1.point_l1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //540

        //triangle L1N1D1
        ...leaf_1.point_l1, ...leaf_1.color_point_1,
        ...leaf_1.point_n1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //triangle M1N1D1
        ...leaf_1.point_m1, ...leaf_1.color_point_1,
        ...leaf_1.point_n1, ...leaf_1.color_point_1,
        ...leaf_1.point_d1, ...leaf_1.color_point_1,

        //570

        //ini untuk bagian warna kuningnya (bawah) ===========
        //triangle RSO1
        ...leaf_1.point_r, ...leaf_1.color_point_2,
        ...leaf_1.point_s, ...leaf_1.color_point_2,
        ...leaf_1.point_o1, ...leaf_1.color_point_2,

        //triangle SO1P1
        ...leaf_1.point_s, ...leaf_1.color_point_2,
        ...leaf_1.point_o1, ...leaf_1.color_point_2,
        ...leaf_1.point_p1, ...leaf_1.color_point_2,

        //600

        //triangle SP1Q1
        ...leaf_1.point_s, ...leaf_1.color_point_2,
        ...leaf_1.point_p1, ...leaf_1.color_point_2,
        ...leaf_1.point_q1, ...leaf_1.color_point_2,

        //triangle SQ1R1
        ...leaf_1.point_s, ...leaf_1.color_point_2,
        ...leaf_1.point_q1, ...leaf_1.color_point_2,
        ...leaf_1.point_r1, ...leaf_1.color_point_2,

        //630

        //triangle STR1
        ...leaf_1.point_s, ...leaf_1.color_point_2,
        ...leaf_1.point_t, ...leaf_1.color_point_2,
        ...leaf_1.point_r1, ...leaf_1.color_point_2,

        //triangle R1S1T
        ...leaf_1.point_r1, ...leaf_1.color_point_2,
        ...leaf_1.point_s1, ...leaf_1.color_point_2,
        ...leaf_1.point_t, ...leaf_1.color_point_2,

        //660

        //triangle TS1T1
        ...leaf_1.point_t, ...leaf_1.color_point_2,
        ...leaf_1.point_s1, ...leaf_1.color_point_2,
        ...leaf_1.point_t1, ...leaf_1.color_point_2,

        //triangle TUT1
        ...leaf_1.point_t, ...leaf_1.color_point_2,
        ...leaf_1.point_u, ...leaf_1.color_point_2,
        ...leaf_1.point_t1, ...leaf_1.color_point_2,

        //690

        //triangle UZT1
        ...leaf_1.point_u, ...leaf_1.color_point_2,
        ...leaf_1.point_z, ...leaf_1.color_point_2,
        ...leaf_1.point_t1, ...leaf_1.color_point_2,

        //triangle ZWT1
        ...leaf_1.point_z, ...leaf_1.color_point_2,
        ...leaf_1.point_w, ...leaf_1.color_point_2,
        ...leaf_1.point_t1, ...leaf_1.color_point_2,

        //720

        //triangle T1U1W
        ...leaf_1.point_t1, ...leaf_1.color_point_2,
        ...leaf_1.point_u1, ...leaf_1.color_point_2,
        ...leaf_1.point_w, ...leaf_1.color_point_2,

        //triangle WU1C1
        ...leaf_1.point_w, ...leaf_1.color_point_2,
        ...leaf_1.point_u1, ...leaf_1.color_point_2,
        ...leaf_1.point_c1, ...leaf_1.color_point_2,

        //750

        //triangle U1V1C1
        ...leaf_1.point_u1, ...leaf_1.color_point_2,
        ...leaf_1.point_v1, ...leaf_1.color_point_2,
        ...leaf_1.point_c1, ...leaf_1.color_point_2,

        //triangle C1M1V1
        ...leaf_1.point_c1, ...leaf_1.color_point_2,
        ...leaf_1.point_m1, ...leaf_1.color_point_2,
        ...leaf_1.point_v1, ...leaf_1.color_point_2,

        //780

        //Leaf Bone
        //triangle M1V1W1
        ...leaf_1.point_m1, ...leaf_1.color_point_2,
        ...leaf_1.point_v1, ...leaf_1.color_point_2,
        ...leaf_1.point_w1, ...leaf_1.color_point_2,

        //triangle M1N1W1
        ...leaf_1.point_m1, ...leaf_1.color_point_2,
        ...leaf_1.point_n1, ...leaf_1.color_point_2,
        ...leaf_1.point_w1, ...leaf_1.color_point_2,

        //810

        //triangle W1N1Z1
        ...leaf_1.point_w1, ...leaf_1.color_point_2,
        ...leaf_1.point_n1, ...leaf_1.color_point_2,
        ...leaf_1.point_z1, ...leaf_1.color_point_2,

        //triangle Z1N1A2
        ...leaf_1.point_z1, ...leaf_1.color_point_2,
        ...leaf_1.point_n1, ...leaf_1.color_point_2,
        ...leaf_1.point_a2, ...leaf_1.color_point_2,

        //840

        //triangle N1A2B2
        ...leaf_1.point_n1, ...leaf_1.color_point_2,
        ...leaf_1.point_a2, ...leaf_1.color_point_2,
        ...leaf_1.point_b2, ...leaf_1.color_point_2,

        //triangle N1L1B2
        ...leaf_1.point_n1, ...leaf_1.color_point_2,
        ...leaf_1.point_l1, ...leaf_1.color_point_2,
        ...leaf_1.point_b2, ...leaf_1.color_point_2,

        //870

        //triangle L1D2B2
        ...leaf_1.point_l1, ...leaf_1.color_point_2,
        ...leaf_1.point_d2, ...leaf_1.color_point_2,
        ...leaf_1.point_b2, ...leaf_1.color_point_2,

        //triangle D2E2B2
        ...leaf_1.point_d2, ...leaf_1.color_point_2,
        ...leaf_1.point_e2, ...leaf_1.color_point_2,
        ...leaf_1.point_b2, ...leaf_1.color_point_2,

        //900

        //triangle L1C2D2
        ...leaf_1.point_l1, ...leaf_1.color_point_2,
        ...leaf_1.point_c2, ...leaf_1.color_point_2,
        ...leaf_1.point_d2, ...leaf_1.color_point_2,

        //triangle K1L1C2
        ...leaf_1.point_k1, ...leaf_1.color_point_2,
        ...leaf_1.point_l1, ...leaf_1.color_point_2,
        ...leaf_1.point_c2, ...leaf_1.color_point_2,

        //930

        //triangle K1J1C2
        ...leaf_1.point_k1, ...leaf_1.color_point_2,
        ...leaf_1.point_j1, ...leaf_1.color_point_2,
        ...leaf_1.point_c2, ...leaf_1.color_point_2,

        //INI BULET OREN NYA =================================
        //triangle F2G2H2
        ...leaf_1.point_f2, ...leaf_1.color_point_5,
        ...leaf_1.point_g2, ...leaf_1.color_point_5,
        ...leaf_1.point_h2, ...leaf_1.color_point_5,

        //960

        //triangle G2I2H2
        ...leaf_1.point_g2, ...leaf_1.color_point_5,
        ...leaf_1.point_i2, ...leaf_1.color_point_5,
        ...leaf_1.point_h2, ...leaf_1.color_point_5,
        
        //triangle I2K2H2
        ...leaf_1.point_i2, ...leaf_1.color_point_5,
        ...leaf_1.point_k2, ...leaf_1.color_point_5,
        ...leaf_1.point_h2, ...leaf_1.color_point_5,

        //990

        //triangle I2L2K2
        ...leaf_1.point_i2, ...leaf_1.color_point_5,
        ...leaf_1.point_l2, ...leaf_1.color_point_5,
        ...leaf_1.point_k2, ...leaf_1.color_point_8,

        //triangle L2M2K2
        ...leaf_1.point_l2, ...leaf_1.color_point_5,
        ...leaf_1.point_m2, ...leaf_1.color_point_8,
        ...leaf_1.point_k2, ...leaf_1.color_point_8,

        //1020

        //triangle H2K2V
        ...leaf_1.point_h2, ...leaf_1.color_point_5,
        ...leaf_1.point_k2, ...leaf_1.color_point_5,
        ...leaf_1.point_v3, ...leaf_1.color_point_8,

        //triangle K2J2V3
        ...leaf_1.point_k2, ...leaf_1.color_point_8,
        ...leaf_1.point_j2, ...leaf_1.color_point_8,
        ...leaf_1.point_v3, ...leaf_1.color_point_5,

        //1050

        //triangle N2J2V3
        ...leaf_1.point_n2, ...leaf_1.color_point_8,
        ...leaf_1.point_j2, ...leaf_1.color_point_8,
        ...leaf_1.point_v3, ...leaf_1.color_point_8,

        //triangle H2N2V3
        ...leaf_1.point_h2, ...leaf_1.color_point_5,
        ...leaf_1.point_n2, ...leaf_1.color_point_5,
        ...leaf_1.point_v3, ...leaf_1.color_point_8,

        //1080

        //triangle O2N2H2
        ...leaf_1.point_o2, ...leaf_1.color_point_5,
        ...leaf_1.point_n2, ...leaf_1.color_point_5,
        ...leaf_1.point_h2, ...leaf_1.color_point_5,

        //triangle P2Q2R2
        ...leaf_1.point_p2, ...leaf_1.color_point_8,
        ...leaf_1.point_q2, ...leaf_1.color_point_5,
        ...leaf_1.point_r2, ...leaf_1.color_point_5,

        //1110

        //triangle Q2S2R2
        ...leaf_1.point_q2, ...leaf_1.color_point_5,
        ...leaf_1.point_s2, ...leaf_1.color_point_5,
        ...leaf_1.point_r2, ...leaf_1.color_point_8,

        //triangle S2W2R2
        ...leaf_1.point_s2, ...leaf_1.color_point_5,
        ...leaf_1.point_w2, ...leaf_1.color_point_5,
        ...leaf_1.point_r2, ...leaf_1.color_point_8,

        //1140

        //triangle W2Z2R2
        ...leaf_1.point_w2, ...leaf_1.color_point_8,
        ...leaf_1.point_z2, ...leaf_1.color_point_8,
        ...leaf_1.point_r2, ...leaf_1.color_point_8,

        //triangle Z2A3R2
        ...leaf_1.point_z2, ...leaf_1.color_point_8,
        ...leaf_1.point_a3, ...leaf_1.color_point_8,
        ...leaf_1.point_r2, ...leaf_1.color_point_8,

        //1170

        //triangle Z2A3B3
        ...leaf_1.point_z2, ...leaf_1.color_point_8,
        ...leaf_1.point_a3, ...leaf_1.color_point_8,
        ...leaf_1.point_b3, ...leaf_1.color_point_8,

        //triangle A3C3R2
        ...leaf_1.point_a3, ...leaf_1.color_point_8,
        ...leaf_1.point_c3, ...leaf_1.color_point_8,
        ...leaf_1.point_r2, ...leaf_1.color_point_8,

        //1200

        //triangle C3D3R2
        ...leaf_1.point_c3, ...leaf_1.color_point_8,
        ...leaf_1.point_d3, ...leaf_1.color_point_5,
        ...leaf_1.point_r2, ...leaf_1.color_point_5,

        //triangle D3E3R2
        ...leaf_1.point_d3, ...leaf_1.color_point_5,
        ...leaf_1.point_e3, ...leaf_1.color_point_8,
        ...leaf_1.point_r2, ...leaf_1.color_point_5,

        //1230

        //triangle P2E3R2
        ...leaf_1.point_p2, ...leaf_1.color_point_8,
        ...leaf_1.point_e3, ...leaf_1.color_point_5,
        ...leaf_1.point_r2, ...leaf_1.color_point_5,

        //triangle G3F3H3
        ...leaf_1.point_g3, ...leaf_1.color_point_8,
        ...leaf_1.point_f3, ...leaf_1.color_point_8,
        ...leaf_1.point_h3, ...leaf_1.color_point_8,

        //1260

        //triangle F3I3H3
        ...leaf_1.point_f3, ...leaf_1.color_point_8,
        ...leaf_1.point_i3, ...leaf_1.color_point_8,
        ...leaf_1.point_h3, ...leaf_1.color_point_8,

        //triangle I3J3H3
        ...leaf_1.point_i3, ...leaf_1.color_point_8,
        ...leaf_1.point_j3, ...leaf_1.color_point_8,
        ...leaf_1.point_h3, ...leaf_1.color_point_5,

        //1290

        //triangle J3K3H3
        ...leaf_1.point_j3, ...leaf_1.color_point_5,
        ...leaf_1.point_k3, ...leaf_1.color_point_5,
        ...leaf_1.point_h3, ...leaf_1.color_point_5,

        //triangle L3H3M3
        ...leaf_1.point_l3, ...leaf_1.color_point_5,
        ...leaf_1.point_h3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //1320

        //triangle H3K3M3
        ...leaf_1.point_h3, ...leaf_1.color_point_5,
        ...leaf_1.point_k3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //triangle K3N3M3
        ...leaf_1.point_k3, ...leaf_1.color_point_5,
        ...leaf_1.point_n3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //1350

        //triangle N3O3M3
        ...leaf_1.point_n3, ...leaf_1.color_point_5,
        ...leaf_1.point_o3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //triangle O3P3M3
        ...leaf_1.point_o3, ...leaf_1.color_point_5,
        ...leaf_1.point_p3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //1380

        //triangle P3Q3M3
        ...leaf_1.point_p3, ...leaf_1.color_point_5,
        ...leaf_1.point_q3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //triangle Q3R3M3
        ...leaf_1.point_q3, ...leaf_1.color_point_5,
        ...leaf_1.point_r3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //1410

        //triangle R3U3M3
        ...leaf_1.point_r3, ...leaf_1.color_point_5,
        ...leaf_1.point_u3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //triangle U3T3M3
        ...leaf_1.point_u3, ...leaf_1.color_point_5,
        ...leaf_1.point_t3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //1440

        //triangle T3S3M3
        ...leaf_1.point_t3, ...leaf_1.color_point_5,
        ...leaf_1.point_s3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //triangle S3L3M3
        ...leaf_1.point_s3, ...leaf_1.color_point_5,
        ...leaf_1.point_l3, ...leaf_1.color_point_5,
        ...leaf_1.point_m3, ...leaf_1.color_point_5,

        //Right Object ======================================= INI GAMBAR KEDUA

        // ini untuk bagian warna creamnya (atas)
        //triangle A4B4C4
        ...leaf_2.point_a4, ...leaf_2.color_point_3,
        ...leaf_2.point_b4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle A4D4C4
        ...leaf_2.point_a4, ...leaf_2.color_point_3,
        ...leaf_2.point_d4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle B4E4C4
        ...leaf_2.point_b4, ...leaf_2.color_point_3,
        ...leaf_2.point_e4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle D4F4C4
        ...leaf_2.point_d4, ...leaf_2.color_point_3,
        ...leaf_2.point_f4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle F4G4C4
        ...leaf_2.point_f4, ...leaf_2.color_point_3,
        ...leaf_2.point_g4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle G4H4C4
        ...leaf_2.point_g4, ...leaf_2.color_point_3,
        ...leaf_2.point_h4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle E4I4C4
        ...leaf_2.point_e4, ...leaf_2.color_point_3,
        ...leaf_2.point_i4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle I4J4C4
        ...leaf_2.point_i4, ...leaf_2.color_point_3,
        ...leaf_2.point_j4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle J4K4C4
        ...leaf_2.point_j4, ...leaf_2.color_point_3,
        ...leaf_2.point_k4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle K4L4C4
        ...leaf_2.point_k4, ...leaf_2.color_point_3,
        ...leaf_2.point_l4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle L4M4C4
        ...leaf_2.point_l4, ...leaf_2.color_point_3,
        ...leaf_2.point_m4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle M4N4C4
        ...leaf_2.point_m4, ...leaf_2.color_point_3,
        ...leaf_2.point_n4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle N4O4C4
        ...leaf_2.point_n4, ...leaf_2.color_point_3,
        ...leaf_2.point_o4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle O4P4C4
        ...leaf_2.point_o4, ...leaf_2.color_point_3,
        ...leaf_2.point_p4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle P4R4C4
        ...leaf_2.point_p4, ...leaf_2.color_point_3,
        ...leaf_2.point_r4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle R4S4C4
        ...leaf_2.point_r4, ...leaf_2.color_point_3,
        ...leaf_2.point_s4, ...leaf_2.color_point_3,
        ...leaf_2.point_c4, ...leaf_2.color_point_3,

        //triangle C4S4Q4
        ...leaf_2.point_c4, ...leaf_2.color_point_3,
        ...leaf_2.point_s4, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle C4H4Q4
        ...leaf_2.point_c4, ...leaf_2.color_point_3,
        ...leaf_2.point_h4, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle H4V4Q4
        ...leaf_2.point_h4, ...leaf_2.color_point_3,
        ...leaf_2.point_v4, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle V4W4Q4
        ...leaf_2.point_v4, ...leaf_2.color_point_3,
        ...leaf_2.point_w4, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle W4Z4Q4
        ...leaf_2.point_w4, ...leaf_2.color_point_3,
        ...leaf_2.point_z4, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle Z4A5Q4
        ...leaf_2.point_z4, ...leaf_2.color_point_3,
        ...leaf_2.point_a5, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle A5B5Q4
        ...leaf_2.point_a5, ...leaf_2.color_point_3,
        ...leaf_2.point_b5, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle B5D5Q4
        ...leaf_2.point_b5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle C5D5Q4
        ...leaf_2.point_c5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle U4C5Q4
        ...leaf_2.point_u4, ...leaf_2.color_point_3,
        ...leaf_2.point_c5, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle T4U4Q4
        ...leaf_2.point_t4, ...leaf_2.color_point_3,
        ...leaf_2.point_u4, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle S4T4Q4
        ...leaf_2.point_s4, ...leaf_2.color_point_3,
        ...leaf_2.point_t4, ...leaf_2.color_point_3,
        ...leaf_2.point_q4, ...leaf_2.color_point_3,

        //triangle C5F5D5
        ...leaf_2.point_c5, ...leaf_2.color_point_3,
        ...leaf_2.point_f5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,

        //triangle F5E5D5
        ...leaf_2.point_f5, ...leaf_2.color_point_3,
        ...leaf_2.point_e5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,

        //triangle E5K5D5
        ...leaf_2.point_e5, ...leaf_2.color_point_3,
        ...leaf_2.point_k5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,

        //triangle K5J5D5
        ...leaf_2.point_k5, ...leaf_2.color_point_3,
        ...leaf_2.point_j5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,

        //triangle I5J5D5
        ...leaf_2.point_i5, ...leaf_2.color_point_3,
        ...leaf_2.point_j5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,

        //triangle H5I5D5
        ...leaf_2.point_h5, ...leaf_2.color_point_3,
        ...leaf_2.point_i5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,

        //triangle G5H5D5
        ...leaf_2.point_g5, ...leaf_2.color_point_3,
        ...leaf_2.point_h5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,

        //triangle B5G5D5
        ...leaf_2.point_b5, ...leaf_2.color_point_3,
        ...leaf_2.point_g5, ...leaf_2.color_point_3,
        ...leaf_2.point_d5, ...leaf_2.color_point_3,

        // ini untuk bagian warna kuningnya (bawah) =============
        //triangle P4M5R4
        ...leaf_2.point_p4, ...leaf_2.color_point_4,
        ...leaf_2.point_m5, ...leaf_2.color_point_4,
        ...leaf_2.point_r4, ...leaf_2.color_point_4,

        //triangle M5N5R4
        ...leaf_2.point_m5, ...leaf_2.color_point_4,
        ...leaf_2.point_n5, ...leaf_2.color_point_4,
        ...leaf_2.point_r4, ...leaf_2.color_point_4,

        //triangle N5O5R4
        ...leaf_2.point_n5, ...leaf_2.color_point_4,
        ...leaf_2.point_o5, ...leaf_2.color_point_4,
        ...leaf_2.point_r4, ...leaf_2.color_point_4,

        //triangle O5P5R4
        ...leaf_2.point_o5, ...leaf_2.color_point_4,
        ...leaf_2.point_p5, ...leaf_2.color_point_4,
        ...leaf_2.point_r4, ...leaf_2.color_point_4,

        //triangle R4P5S4
        ...leaf_2.point_r4, ...leaf_2.color_point_4,
        ...leaf_2.point_p5, ...leaf_2.color_point_4,
        ...leaf_2.point_s4, ...leaf_2.color_point_4,

        //triangle P5Q5S4
        ...leaf_2.point_p5, ...leaf_2.color_point_4,
        ...leaf_2.point_q5, ...leaf_2.color_point_4,
        ...leaf_2.point_s4, ...leaf_2.color_point_4,

        //triangle Q5R5S4
        ...leaf_2.point_q5, ...leaf_2.color_point_4,
        ...leaf_2.point_r5, ...leaf_2.color_point_4,
        ...leaf_2.point_s4, ...leaf_2.color_point_4,

        //triangle R5S5S4
        ...leaf_2.point_r5, ...leaf_2.color_point_4,
        ...leaf_2.point_s5, ...leaf_2.color_point_4,
        ...leaf_2.point_s4, ...leaf_2.color_point_4,

        //triangle S4S5T4
        ...leaf_2.point_s4, ...leaf_2.color_point_4,
        ...leaf_2.point_s5, ...leaf_2.color_point_4,
        ...leaf_2.point_t4, ...leaf_2.color_point_4,

        //triangle S5T5T4
        ...leaf_2.point_s5, ...leaf_2.color_point_4,
        ...leaf_2.point_t5, ...leaf_2.color_point_4,
        ...leaf_2.point_t4, ...leaf_2.color_point_4,

        //triangle T5U5T4
        ...leaf_2.point_t5, ...leaf_2.color_point_4,
        ...leaf_2.point_u5, ...leaf_2.color_point_4,
        ...leaf_2.point_t4, ...leaf_2.color_point_4,

        //triangle T4U5U4
        ...leaf_2.point_t4, ...leaf_2.color_point_4,
        ...leaf_2.point_u5, ...leaf_2.color_point_4,
        ...leaf_2.point_u4, ...leaf_2.color_point_4,

        //triangle U5V5U4
        ...leaf_2.point_u5, ...leaf_2.color_point_4,
        ...leaf_2.point_v5, ...leaf_2.color_point_4,
        ...leaf_2.point_u4, ...leaf_2.color_point_4,

        //triangle U4V5C5
        ...leaf_2.point_u4, ...leaf_2.color_point_4,
        ...leaf_2.point_v5, ...leaf_2.color_point_4,
        ...leaf_2.point_c5, ...leaf_2.color_point_4,

        //triangle C5V5F5
        ...leaf_2.point_c5, ...leaf_2.color_point_4,
        ...leaf_2.point_v5, ...leaf_2.color_point_4,
        ...leaf_2.point_f5, ...leaf_2.color_point_4,

        //triangle V5W5F5
        ...leaf_2.point_v5, ...leaf_2.color_point_4,
        ...leaf_2.point_w5, ...leaf_2.color_point_4,
        ...leaf_2.point_f5, ...leaf_2.color_point_4,

        //triangle F5W5E5
        ...leaf_2.point_f5, ...leaf_2.color_point_4,
        ...leaf_2.point_w5, ...leaf_2.color_point_4,
        ...leaf_2.point_e5, ...leaf_2.color_point_4,

        //triangle W5Z5E5
        ...leaf_2.point_w5, ...leaf_2.color_point_4,
        ...leaf_2.point_z5, ...leaf_2.color_point_4,
        ...leaf_2.point_e5, ...leaf_2.color_point_4,

        //triangle E5Z5A6
        ...leaf_2.point_e5, ...leaf_2.color_point_4,
        ...leaf_2.point_z5, ...leaf_2.color_point_4,
        ...leaf_2.point_a6, ...leaf_2.color_point_4,

        //triangle Z5C6A6
        ...leaf_2.point_z5, ...leaf_2.color_point_4,
        ...leaf_2.point_c6, ...leaf_2.color_point_4,
        ...leaf_2.point_a6, ...leaf_2.color_point_4,

        //triangle E5B6A6
        ...leaf_2.point_e5, ...leaf_2.color_point_4,
        ...leaf_2.point_b6, ...leaf_2.color_point_4,
        ...leaf_2.point_a6, ...leaf_2.color_point_4,

        //triangle E5K5B6
        ...leaf_2.point_e5, ...leaf_2.color_point_4,
        ...leaf_2.point_k5, ...leaf_2.color_point_4,
        ...leaf_2.point_b6, ...leaf_2.color_point_4,

        // INI BULET ORENNYA ==================================
        //triangle G6H6F6
        ...leaf_2.point_g6, ...leaf_2.color_point_7,
        ...leaf_2.point_h6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_7,

        //triangle H6I6F6
        ...leaf_2.point_h6, ...leaf_2.color_point_7,
        ...leaf_2.point_i6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_7,

        //triangle I6J6F6
        ...leaf_2.point_i6, ...leaf_2.color_point_7,
        ...leaf_2.point_j6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_7,

        //triangle J6K6F6
        ...leaf_2.point_j6, ...leaf_2.color_point_7,
        ...leaf_2.point_k6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_7,

        //triangle K6L6F6
        ...leaf_2.point_k6, ...leaf_2.color_point_7,
        ...leaf_2.point_l6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_7,

        //triangle L6M6F6
        ...leaf_2.point_l6, ...leaf_2.color_point_7,
        ...leaf_2.point_m6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_7,

        //triangle M6N6F6
        ...leaf_2.point_m6, ...leaf_2.color_point_7,
        ...leaf_2.point_n6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_6,

        //triangle N6O6F6
        ...leaf_2.point_n6, ...leaf_2.color_point_7,
        ...leaf_2.point_o6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_6,

        //triangle G6E6F6
        ...leaf_2.point_g6, ...leaf_2.color_point_7,
        ...leaf_2.point_e6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_6,

        //triangle E6D6F6
        ...leaf_2.point_e6, ...leaf_2.color_point_7,
        ...leaf_2.point_d6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_6,

        //triangle D6P6F6
        ...leaf_2.point_d6, ...leaf_2.color_point_7,
        ...leaf_2.point_p6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_6,

        //triangle P6O6F6
        ...leaf_2.point_p6, ...leaf_2.color_point_7,
        ...leaf_2.point_o6, ...leaf_2.color_point_7,
        ...leaf_2.point_f6, ...leaf_2.color_point_6,

        //triangle P6Q6O6
        ...leaf_2.point_p6, ...leaf_2.color_point_6,
        ...leaf_2.point_q6, ...leaf_2.color_point_6,
        ...leaf_2.point_o6, ...leaf_2.color_point_6,

        //triangle N6V6O6
        ...leaf_2.point_n6, ...leaf_2.color_point_6,
        ...leaf_2.point_v6, ...leaf_2.color_point_6,
        ...leaf_2.point_o6, ...leaf_2.color_point_6,

        //triangle Q6R6O6
        ...leaf_2.point_q6, ...leaf_2.color_point_6,
        ...leaf_2.point_r6, ...leaf_2.color_point_6,
        ...leaf_2.point_o6, ...leaf_2.color_point_6,

        //triangle R6S6O6
        ...leaf_2.point_r6, ...leaf_2.color_point_6,
        ...leaf_2.point_s6, ...leaf_2.color_point_6,
        ...leaf_2.point_o6, ...leaf_2.color_point_6,

        //triangle S6T6O6
        ...leaf_2.point_s6, ...leaf_2.color_point_6,
        ...leaf_2.point_t6, ...leaf_2.color_point_6,
        ...leaf_2.point_o6, ...leaf_2.color_point_6,

        //triangle T6U6O6
        ...leaf_2.point_t6, ...leaf_2.color_point_6,
        ...leaf_2.point_u6, ...leaf_2.color_point_6,
        ...leaf_2.point_o6, ...leaf_2.color_point_6,

        //triangle U6H7O6
        ...leaf_2.point_u6, ...leaf_2.color_point_6,
        ...leaf_2.point_h7, ...leaf_2.color_point_6,
        ...leaf_2.point_o6, ...leaf_2.color_point_6,

        //triangle H7V6O6
        ...leaf_2.point_h7, ...leaf_2.color_point_6,
        ...leaf_2.point_v6, ...leaf_2.color_point_6,
        ...leaf_2.point_o6, ...leaf_2.color_point_6,

        //triangle V6N6W6
        ...leaf_2.point_v6, ...leaf_2.color_point_6,
        ...leaf_2.point_n6, ...leaf_2.color_point_7,
        ...leaf_2.point_w6, ...leaf_2.color_point_7,

        //triangle N6Z6W6
        ...leaf_2.point_n6, ...leaf_2.color_point_7,
        ...leaf_2.point_z6, ...leaf_2.color_point_7,
        ...leaf_2.point_w6, ...leaf_2.color_point_6,

        //triangle Z6A7W6
        ...leaf_2.point_z6, ...leaf_2.color_point_7,
        ...leaf_2.point_a7, ...leaf_2.color_point_7,
        ...leaf_2.point_w6, ...leaf_2.color_point_6,

        //triangle A7B7W6
        ...leaf_2.point_a7, ...leaf_2.color_point_6,
        ...leaf_2.point_b7, ...leaf_2.color_point_7,
        ...leaf_2.point_w6, ...leaf_2.color_point_7,

        //triangle B7C7W6
        ...leaf_2.point_b7, ...leaf_2.color_point_6,
        ...leaf_2.point_c7, ...leaf_2.color_point_7,
        ...leaf_2.point_w6, ...leaf_2.color_point_7,

        //triangle C7D7W6
        ...leaf_2.point_c7, ...leaf_2.color_point_7,
        ...leaf_2.point_d7, ...leaf_2.color_point_7,
        ...leaf_2.point_w6, ...leaf_2.color_point_6,

        //triangle D7E7W6
        ...leaf_2.point_d7, ...leaf_2.color_point_7,
        ...leaf_2.point_e7, ...leaf_2.color_point_7,
        ...leaf_2.point_w6, ...leaf_2.color_point_6,

        //triangle E7F7W6
        ...leaf_2.point_e7, ...leaf_2.color_point_6,
        ...leaf_2.point_f7, ...leaf_2.color_point_7,
        ...leaf_2.point_w6, ...leaf_2.color_point_7,

        //triangle F7G7W6
        ...leaf_2.point_f7, ...leaf_2.color_point_7,
        ...leaf_2.point_g7, ...leaf_2.color_point_6,
        ...leaf_2.point_w6, ...leaf_2.color_point_6,

        //triangle G7V6W6
        ...leaf_2.point_g7, ...leaf_2.color_point_6,
        ...leaf_2.point_v6, ...leaf_2.color_point_6,
        ...leaf_2.point_w6, ...leaf_2.color_point_6,

        //triangle H7G7V6
        ...leaf_2.point_h7, ...leaf_2.color_point_6,
        ...leaf_2.point_g7, ...leaf_2.color_point_6,
        ...leaf_2.point_v6, ...leaf_2.color_point_6,

        //triangle H7G7U6
        ...leaf_2.point_h7, ...leaf_2.color_point_6,
        ...leaf_2.point_g7, ...leaf_2.color_point_6,
        ...leaf_2.point_u6, ...leaf_2.color_point_6,

        //triangle F7G7U6
        ...leaf_2.point_f7, ...leaf_2.color_point_6,
        ...leaf_2.point_g7, ...leaf_2.color_point_6,
        ...leaf_2.point_u6, ...leaf_2.color_point_6,

        //triangle T6U6I7
        ...leaf_2.point_t6, ...leaf_2.color_point_6,
        ...leaf_2.point_u6, ...leaf_2.color_point_6,
        ...leaf_2.point_i7, ...leaf_2.color_point_6,

        //triangle U6I7F7
        ...leaf_2.point_u6, ...leaf_2.color_point_6,
        ...leaf_2.point_i7, ...leaf_2.color_point_6,
        ...leaf_2.point_f7, ...leaf_2.color_point_6,

        //triangle I7F7J7
        ...leaf_2.point_i7, ...leaf_2.color_point_6,
        ...leaf_2.point_f7, ...leaf_2.color_point_6,
        ...leaf_2.point_j7, ...leaf_2.color_point_6,

        //triangle F7K7J7
        ...leaf_2.point_f7, ...leaf_2.color_point_6,
        ...leaf_2.point_k7, ...leaf_2.color_point_6,
        ...leaf_2.point_j7, ...leaf_2.color_point_6,

        //triangle K7L7J7
        ...leaf_2.point_k7, ...leaf_2.color_point_6,
        ...leaf_2.point_l7, ...leaf_2.color_point_7,
        ...leaf_2.point_j7, ...leaf_2.color_point_7,

        //triangle L7M7J7
        ...leaf_2.point_l7, ...leaf_2.color_point_7,
        ...leaf_2.point_m7, ...leaf_2.color_point_7,
        ...leaf_2.point_j7, ...leaf_2.color_point_6,

        //triangle M7N7J7
        ...leaf_2.point_m7, ...leaf_2.color_point_6,
        ...leaf_2.point_n7, ...leaf_2.color_point_7,
        ...leaf_2.point_j7, ...leaf_2.color_point_7,

        //triangle N7O7J7
        ...leaf_2.point_n7, ...leaf_2.color_point_7,
        ...leaf_2.point_o7, ...leaf_2.color_point_7,
        ...leaf_2.point_j7, ...leaf_2.color_point_6,

        //triangle O7P7J7
        ...leaf_2.point_o7, ...leaf_2.color_point_6,
        ...leaf_2.point_p7, ...leaf_2.color_point_7,
        ...leaf_2.point_j7, ...leaf_2.color_point_7,

        //triangle P7I7J7
        ...leaf_2.point_p7, ...leaf_2.color_point_7,
        ...leaf_2.point_i7, ...leaf_2.color_point_7,
        ...leaf_2.point_j7, ...leaf_2.color_point_6,

        //INI BULET OREN YG PALING BAWAH ========================
        //triangle Q7S7R7
        ...leaf_2.point_q7, ...leaf_2.color_point_7,
        ...leaf_2.point_s7, ...leaf_2.color_point_7,
        ...leaf_2.point_r7, ...leaf_2.color_point_7,

        //triangle S7T7R7
        ...leaf_2.point_s7, ...leaf_2.color_point_7,
        ...leaf_2.point_t7, ...leaf_2.color_point_7,
        ...leaf_2.point_r7, ...leaf_2.color_point_7,

        //triangle T7U7R7
        ...leaf_2.point_t7, ...leaf_2.color_point_7,
        ...leaf_2.point_u7, ...leaf_2.color_point_7,
        ...leaf_2.point_r7, ...leaf_2.color_point_7,

        //triangle U7W7R7
        ...leaf_2.point_u7, ...leaf_2.color_point_7,
        ...leaf_2.point_w7, ...leaf_2.color_point_7,
        ...leaf_2.point_r7, ...leaf_2.color_point_7,

        //triangle V7W7R7
        ...leaf_2.point_v7, ...leaf_2.color_point_7,
        ...leaf_2.point_w7, ...leaf_2.color_point_7,
        ...leaf_2.point_r7, ...leaf_2.color_point_7,
    ];

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    // Speed set to my NRP
    var speed = 0.0033;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (change < -0.56 || change > 0.56) {
            speed = speed * -1;
        }

        for (let i = 1471; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.00120, 0.0300, 0.00504, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 612;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
}