const brands = {
  1: 'NoBrand',
  2: 'AAA JEANS',
  3: 'ADORE DRESS',
  4: 'ADRIENNE VITTADINI',
  5: 'AFTERBEFORE',
  6: 'AFTF BASIC',
  7: 'AIRism',
  8: 'AJIMAL',
  9: 'AKUBA',
  10: 'ALAMODEvn',
  11: 'ALCADO',
  12: 'ALICE TÔ',
  13: 'AMADO',
  14: 'AMELIA',
  15: 'ANH THO LEATHER',
  16: 'ANLY',
  17: 'ANN CHERY',
  18: 'ANN SARA',
  19: 'ANNA NINA',
  20: 'ANNACOCO',
  21: 'ANNACOCO',
  22: 'ANNY',
  23: 'ANY BOUTIQUE',
  24: 'APROMS',
  25: 'ARIZONA JEANS',
  26: 'ATSUGI',
  27: 'AZAGO',
  28: 'AZUMI',
  29: 'Adrianna Papell',
  30: 'Aimy Boutique',
  31: 'Aino Sofia',
  32: 'Alayna',
  33: 'Alice',
  34: 'Ameo',
  35: 'Amilian',
  36: 'Anadi Home',
  37: 'Angelavic',
  38: 'Angelic Pretty',
  39: 'Anna',
  40: 'Asala',
  41: 'Azuno',
  42: 'adenflu',
  43: 'aerie',
  44: 'ailian',
  45: 'aimilian',
  46: 'CACHE',
  47: 'CALLIOPE',
  48: 'DANCO',
  49: 'HA GATTINI',
  50: 'ECOJEANS',
  51: 'DANY',
  52: 'FANTOM',
  53: 'GALASSIN',
  54: 'FASHION NOVA',
  55: 'FASVIN',
  56: 'KAIA',
  57: 'GBeauty',
  58: 'GCAROL',
  59: 'IFU',
  60: 'CATRIO',
  61: 'CATSA',
  62: 'BARDOT',
  63: 'IKIGAI',
  64: 'DEGREY',
  65: 'DELAMO',
  66: 'DELEAH',
  67: 'JANET STUDIO',
  68: 'GEMINI',
  69: 'KAMA',
  70: 'GENNI',
  71: 'KAMAYA',
  72: 'DEMEYO',
  73: 'GENZ',
  74: 'JARNO',
  75: 'KAMITO',
  76: 'JASPAL',
  77: 'BDG',
  78: 'INFASHION',
  79: 'HANAMA',
  80: 'ELISA LITZ',
  81: 'ELISE',
  82: 'ELLY',
  83: 'JERZEES',
  84: 'KAREN MILEN',
  85: 'CHARLOTTE FASHION',
  86: 'KAREN SCOTT',
  87: 'EMPOLHAM',
  88: 'EMWEAR',
  89: 'BEMINE',
  90: 'FMSTYLE',
  91: 'CHELLE',
  92: 'CHENNY',
  93: 'CHERRYKOKO',
  94: 'ENINA',
  95: 'HAPPY ZOO',
  96: 'ITEM DU JOUR',
  97: 'ENVY',
  98: 'ENVY LUXURY',
  99: 'FORCAST',
  100: 'GLORIA JEANS',
  101: 'DIDO',
  102: 'FORMAT',
  103: 'IVANKA TRUMP',
  104: 'IVY moda',
  105: 'DII',
  106: 'FORTUNE MOUSE',
  107: 'HASA',
  108: 'ERKE',
  109: 'EROSIA',
  110: 'JK CLOTHING',
  111: 'DIRTY COINS',
  112: 'GOKING',
  113: 'GOLD RHINO',
  114: 'BETTERISTA',
  115: 'BEUTER',
  116: 'DIVIDED',
  117: 'KELLYBUI',
  118: 'FRENCH CONNECTION',
  119: 'CIRIO',
  120: 'FRJ Jeans',
  121: 'JONES',
  122: 'CIZA',
  123: 'JONES NEW YORK',
  124: 'EVA DE EVA',
  125: 'FUGAZI',
  126: 'DODACO',
  127: 'HEATTECH',
  128: 'KENVA',
  129: 'CLEMENT',
  130: 'DOKMA',
  131: 'GOTI',
  132: 'CLOTHESRACK',
  133: 'CLOWNZ',
  134: 'EVERLANE',
  135: 'FUSIONISM',
  136: 'COCO FASHION',
  137: 'KHATOCO',
  138: 'iBasic',
  139: 'KHÂU BY CQ',
  140: 'EXR PERFORMANCE',
  141: 'COCO SIN',
  142: 'iDiva',
  143: 'JUNO',
  144: 'GRIMM DC',
  145: 'DOUX',
  146: 'JUST FEEL FREE',
  147: 'COLORFUL SEXY',
  148: 'JUSTMEN',
  149: 'HERMES PARIS',
  150: 'iMERRY',
  151: 'DRESSIE',
  152: 'GUGEE',
  153: 'ice yarns',
  154: 'GUNZE',
  155: 'Eden',
  156: 'Edifice',
  157: 'CPS CHAPS',
  158: 'DUPPO',
  159: 'KIOBI',
  160: 'BLUE EXCHANGE',
  161: 'CREME',
  162: 'DUY LỢI',
  163: 'HK FASHION',
  164: 'HK STORE',
  165: 'intercrew',
  166: 'Feetures',
  167: 'HNOSS',
  168: 'Felice',
  169: 'HOA THAI',
  170: 'HOAI VU DESIGN',
  171: 'Garage',
  172: 'HOLLIS',
  173: 'Jeanswest',
  174: 'KOCHI',
  175: 'Fig tree',
  176: 'BONADO',
  177: 'Daisy',
  178: 'Filanto',
  179: 'Elimaz',
  180: 'HONEY DESIGN',
  181: 'Gavani',
  182: 'BONNY',
  183: 'Eliza J',
  184: 'Gazzal',
  185: 'Firetrap',
  186: 'Jennyfer',
  187: 'Calie',
  188: 'Call it Spring',
  189: 'Callia',
  190: 'KOOKAI',
  191: 'Flaseek',
  192: 'Ellise',
  193: 'Genviet',
  194: 'HPVINA',
  195: 'Elpis',
  196: 'Fleur Studio',
  197: 'HTECH',
  198: 'Georges Rech',
  199: 'EmSpo',
  200: 'Ember Spirit',
  201: 'HUIDUO',
  202: 'HUMBGO',
  203: 'Emigo',
  204: 'Germe',
  205: 'BRENNA',
  206: 'HUONG BOUTIQUE',
  207: 'Gestuz',
  208: 'Emma Barnes',
  209: 'Jobelli',
  210: 'KT Fashion',
  211: 'KTA Fashion',
  212: 'Emum',
  213: 'GiGi',
  214: 'Gia Huy',
  215: 'BULBAL',
  216: 'Forever New',
  217: 'BWIN',
  218: 'KWIN',
  219: 'Halo BEAUTY',
  220: 'BZR',
  221: 'Enito',
  222: 'Francesca Mara',
  223: 'Hana Fashion',
  224: 'Ginkgo',
  225: 'Kalenji',
  226: 'David’s Bridal',
  227: 'KanCan',
  228: 'Freedy',
  229: 'Happy Socks',
  230: 'DeRuiLaDy',
  231: 'Glacier Rock',
  232: 'Haras',
  233: 'Gladys',
  234: 'Erosska',
  235: 'Jouri',
  236: 'Estini',
  237: 'Etam',
  238: 'Karoll',
  239: 'Baqiya',
  240: 'Kartopu',
  241: 'Ceci Cela',
  242: 'Bare Lifts',
  243: 'Kate By Linh Nguyen',
  244: 'Eunsoo',
  245: 'Demona',
  246: 'Golden Lady',
  247: 'Golden Legs',
  248: 'HeraDG',
  249: 'Eva Lover',
  250: 'Batino',
  251: 'Funani',
  252: 'Everich fashion',
  253: 'Everluxe',
  254: 'Evie The Label',
  255: 'BeanPole',
  256: 'Goosi',
  257: 'Beautiful Spring',
  258: 'Beauty Chipi',
  259: 'Charmia',
  260: 'Charmilles',
  261: 'Goût De Jun',
  262: 'fcuk',
  263: 'Hity lifestyle your way',
  264: 'Chener',
  265: 'elegart',
  266: 'Cherilon',
  267: 'Chiffon Fashion',
  268: 'entiati',
  269: 'Chikoko',
  270: 'Chillax',
  271: 'Khéo Fashion',
  272: 'eva',
  273: 'GUMAC',
  274: 'Dolly Boutique',
  275: 'Chris Christy',
  276: 'Bentoni',
  277: 'ezra',
  278: 'Betsey johnson',
  279: 'gaviya',
  280: 'Dorothy Perkins',
  281: 'Dowisi',
  282: 'Kiss Ring',
  283: 'Hurley',
  284: 'Citi Mode',
  285: 'HÀ CÚC',
  286: 'Kojiba',
  287: 'Clarita',
  288: 'Dzung Beiz',
  289: 'Bliss',
  290: 'Closshi',
  291: 'Cloud’Nine',
  292: 'Club L',
  293: 'dELIA',
  294: 'Coble',
  295: 'Bold Bikini',
  296: 'dear josé',
  297: 'Cofason',
  298: 'Bomia',
  299: 'kathy ireland',
  300: 'Coiincos',
  301: 'Boohoo',
  302: 'Colo Fashion',
  303: 'Dottie Premium',
  304: 'haru',
  305: 'dzzit',
  306: 'highcutstudio',
  307: 'honey fashion',
  308: 'ContRante',
  309: 'Conte',
  310: 'hot tuna',
  311: 'Breeze',
  312: 'hug Adore USA',
  313: 'hunkemoller',
  314: 'Crayzyteen',
  315: 'Button On',
  316: 'ByFeifein',
  317: 'Cropp',
  318: 'Cát Tiên Bridal',
  319: 'cache cache',
  320: 'can de blanc',
  321: 'cecina',
  322: 'charlotte russe',
  323: 'city chic',
  324: 'classic fashion',
  325: 'basic house',
  326: 'codes combine',
  327: 'colorfulsexy',
  328: 'BEESMART',
  329: 'cosher',
  330: 'bejirog',
  331: 'blook',
  332: 'LA LUNA',
  333: 'MA CHÉRIE',
  334: 'LA MURRINA',
  335: 'MADE LEN',
  336: 'NAMU',
  337: 'LADALI',
  338: 'LADOS',
  339: 'PALTAL',
  340: 'MAIDENFORM',
  341: 'MAKE IT RAIN',
  342: 'LAMER',
  343: 'LAMIA',
  344: 'PAVO',
  345: 'NAVI',
  346: 'QUICKSILVER',
  347: 'MAMA VIRUS',
  348: 'OLV',
  349: 'MANDO',
  350: 'SAII STUDIO',
  351: 'LANE JT',
  352: 'SALITO',
  353: 'SALOME FASHION',
  354: 'UBG',
  355: 'LARA',
  356: 'TAHARI ASL',
  357: 'ONONO',
  358: 'SAMY',
  359: 'RESERVED',
  360: 'QueenLinh',
  361: 'OPUS',
  362: 'MATELUCCA',
  363: 'PINK QUEEN',
  364: 'SANKOM',
  365: 'TALBOTS',
  366: 'WEFUN',
  367: 'UNIONBAY',
  368: 'TAM ANH',
  369: 'ROBERTA GANDOLFI',
  370: 'UNIQ',
  371: 'LCW CASUAL',
  372: 'MAX STUDIO',
  373: 'LE CHÂTEAU',
  374: 'YAT BOUTIQUE',
  375: 'OUTSET',
  376: 'WHITE ANT',
  377: 'OVERDOSE',
  378: 'NINOMAXX',
  379: 'PLUMZI',
  380: 'LECIEN',
  381: 'ZARA TRAFALUC',
  382: 'VERO MODA',
  383: 'ZART',
  384: 'YFFS',
  385: 'MAYBI',
  386: 'WINJEANS',
  387: 'LEDIN',
  388: 'ROSIE ASSOULIN',
  389: 'POLIDO',
  390: 'ROSY belle',
  391: 'ZENANA',
  392: 'URBAN REVIVO',
  393: 'ROVA',
  394: 'ROZALO',
  395: 'NK Fashion',
  396: 'YOFA',
  397: 'Odelia',
  398: 'MDBuddy',
  399: 'TATICHU',
  400: 'Xinh FASHION HOMEWEAR',
  401: 'LEMIA',
  402: 'MDS',
  403: 'NOHK',
  404: 'VIC SEXY',
  405: 'YOUR Fashion',
  406: 'USTHEBASIC',
  407: 'UTAN',
  408: 'VICERO',
  409: 'VICKY',
  410: 'Ugiz',
  411: 'Xuyen Chi',
  412: 'VIENA',
  413: 'VIENNE TRAN',
  414: 'YUQI',
  415: 'YAME',
  416: 'SEMIR',
  417: 'VIET THANG',
  418: 'PROSPECS',
  419: 'Zagu',
  420: 'Xí Cũn',
  421: 'NT FASHION',
  422: 'LIBÉ WORKSHOP',
  423: 'TED BAKER',
  424: 'PUNK RAVE',
  425: 'TEEFIT',
  426: 'Zavans',
  427: 'Zawin',
  428: 'Yami',
  429: 'VIGOSS',
  430: 'TEK GEAR',
  431: 'Rainbow',
  432: 'MENTOSA',
  433: 'SEVENTH WAVE',
  434: 'LIIQ rush',
  435: 'SEXY FOREVER',
  436: 'Wannabe',
  437: 'LILYA',
  438: 'Raku Raku',
  439: 'MERONA',
  440: 'LIME ORANGE',
  441: 'Padu',
  442: 'Warm',
  443: 'Zenda',
  444: 'SHALIMAR',
  445: 'Zenfdy',
  446: 'VINADOWN',
  447: 'YarnArt',
  448: 'MHL',
  449: 'Unplugged Museum',
  450: 'Zerasy',
  451: 'MIDDUA',
  452: 'Uptown girl',
  453: 'Omely',
  454: 'MIEGOFCE',
  455: 'Rare Editions',
  456: 'MIGIO',
  457: 'THAI TUAN',
  458: 'THAICOM',
  459: 'Utan Homewear',
  460: 'Pansy',
  461: 'Uwowo',
  462: 'VITAS',
  463: 'Yi Ren',
  464: 'MIKI',
  465: 'Panty Stocking',
  466: 'SHOJO',
  467: 'Zina Luxury',
  468: 'Papaya',
  469: 'LOFT',
  470: 'Yiyifang',
  471: 'Papka',
  472: 'SIENNA SKY',
  473: 'MINT Basic',
  474: 'THE SHIRTS STUDIO',
  475: 'SIMPLE APPAREL',
  476: 'Wephobia',
  477: 'LOUIS CASTEL',
  478: 'Zoé de Las Cases',
  479: 'SIMPLY Blessed',
  480: 'MIXSTAR',
  481: 'THIEN PHUC',
  482: 'LOVELL',
  483: 'LOVELY UNIQUE',
  484: 'SK angel',
  485: 'LOZA',
  486: 'MOKLADY',
  487: 'White House Black Market',
  488: 'MOLYS',
  489: 'zennic',
  490: 'MOMOCO',
  491: 'LUCKY BRAND',
  492: 'MONOCO',
  493: 'THOM BROWNE',
  494: 'Yoshino',
  495: 'Nappa',
  496: 'LUMIÈRE',
  497: 'THU NGÂN',
  498: 'Regart',
  499: 'Valleysa',
  500: 'Youmeiqi',
  501: 'MOUSSY',
  502: 'SMARTMEN',
  503: 'Vaness Dorothy',
  504: 'Vanilla HOUSE',
  505: 'MQF',
  506: 'SO YOUNG',
  507: 'Relax',
  508: 'SOCOMO',
  509: 'Relish',
  510: 'Wincent',
  511: 'LYCHEE',
  512: 'LYNO',
  513: 'LYRA',
  514: 'La Chapelle',
  515: 'SOHEE',
  516: 'Winmaxx',
  517: 'Vella',
  518: 'SOMALYNG',
  519: 'MYAN',
  520: 'Vento',
  521: 'MYM',
  522: 'MYMY by PHƯƠNG MY',
  523: 'Vera Bradley',
  524: 'La Senza',
  525: 'TINACE',
  526: 'Rettymom',
}

export default brands
