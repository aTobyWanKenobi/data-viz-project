
export class EventCodes {

  constructor() {

    this.classes = {
      1:{'name':'Verbal Cooperation', 'types':[0, 1, 2, 3, 4]},
      2:{'name':'Material Cooperation', 'types':[5, 6, 7, 8]},
      3:{'name':'Verbal Conflict', 'types':[9, 10, 11, 12, 13]},
      4:{'name':'Material Conflict', 'types':[14, 15, 16, 17, 18, 19]}
    }

    this.codes = {
      10:{'name':'Make statement', 'type':0},
      11:{'name':'Decline comment', 'type':0},
      12:{'name':'Make pessimistic comment', 'type':0},
      13:{'name':'Make optimistic comment', 'type':0},
      14:{'name':'Consider policy option', 'type':0},
      15:{'name':'Acknowledge or claim responsibility', 'type':0},
      16:{'name':'Reject accusation, deny responsibility', 'type':0},
      17:{'name':'Engage in symbolic act', 'type':0},
      18:{'name':'Make empathetic comment', 'type':0},
      19:{'name':'Express accord', 'type':0},
      20:{'name':'Make an appeal or request', 'type':1},
      21:{'name':'Appeal for material cooperation', 'type':1},
      211:{'name':'Appeal for economic cooperation', 'type':1},
      212:{'name':'Appeal for military cooperation', 'type':1},
      213:{'name':'Appeal for judicial cooperation', 'type':1},
      214:{'name':'Appeal for intelligence cooperation', 'type':1},
      22:{'name':'Appeal for diplomatic cooperation', 'type':1},
      23:{'name':'Appeal for material aid', 'type':1},
      231:{'name':'Appeal for economic aid', 'type':1},
      232:{'name':'Appeal for military aid', 'type':1},
      233:{'name':'Appeal for humanitarian aid', 'type':1},
      234:{'name':'Appeal for military protection or peacekeeping', 'type':1},
      24:{'name':'Appeal for political reform', 'type':1},
      241:{'name':'Appeal for leadership change', 'type':1},
      242:{'name':'Appeal for policy change', 'type':1},
      243:{'name':'Appeal for rights', 'type':1},
      244:{'name':'Appeal for change in institutions, regime', 'type':1},
      25:{'name':'Appeal to yield', 'type':1},
      251:{'name':'Appeal for easing of administrative sanction', 'type':1},
      252:{'name':'Appeal for easing of political dissent', 'type':1},
      253:{'name':'Appeal for release of persons or property', 'type':1},
      254:{'name':'Appeal for easing of economic sanctions, boycott or embargo', 'type':1},
      255:{'name':'Appeal to allow international involvement', 'type':1},
      256:{'name':'Appeal for target to de.escalation of military engagement', 'type':1},
      26:{'name':'Appeal to others to meet or negotiate', 'type':1},
      27:{'name':'Appeal to others to settle dispute', 'type':1},
      28:{'name':'Appeal to others to engage in or accept mediation', 'type':1},
      30:{'name':'Express intent to cooperate', 'type':2},
      31:{'name':'Express intent to engage in material cooperation', 'type':2},
      311:{'name':'Express intent to cooperate economically', 'type':2},
      312:{'name':'Express intent to cooperate militarly', 'type':2},
      313:{'name':'Express intent to cooperate on judicial matters', 'type':2},
      314:{'name':'Express intent to cooperate on intelligence', 'type':2},
      32:{'name':'Express intent to engage in diplomatic cooperation', 'type':2},
      33:{'name':'Express intent to provide material aid', 'type':2},
      331:{'name':'Express intent to provide economic aid', 'type':2},
      332:{'name':'Express intent to provide military aid', 'type':2},
      333:{'name':'Express intent to provide humanitarian aid', 'type':2},
      334:{'name':'Express intent to provide military protection or peacekeeping', 'type':2},
      34:{'name':'Express intent to institute political reform', 'type':2},
      341:{'name':'Express intent to change leadership', 'type':2},
      342:{'name':'Express intent to change policy', 'type':2},
      343:{'name':'Express intent to provide rights', 'type':2},
      344:{'name':'Epress intent to change institutions, regime', 'type':2},
      35:{'name':'Express intent to yield', 'type':2},
      351:{'name':'Express intent to ease administrative sanctions', 'type':2},
      352:{'name':'Express intent to ease popular dissent', 'type':2},
      353:{'name':'Express intent to release persons or property', 'type':2},
      354:{'name':'Express intent to ease economic sanctions, boycott or embargo', 'type':2},
      355:{'name':'Express intent to allow international involvement', 'type':2},
      356:{'name':'Epress intent to de-escalate military engagement', 'type':2},
      36:{'name':'Express intent to meet or negotiate', 'type':2},
      37:{'name':'Express intent to settle dispute', 'type':2},
      38:{'name':'Express intent to accept mediation', 'type':2},
      39:{'name':'Express intent to mediate', 'type':2},
      40:{'name':'Consult', 'type':3},
      41:{'name':'Discuss by telephone', 'type':3},
      42:{'name':'Make a visit', 'type':3},
      43:{'name':'Host a visit', 'type':3},
      44:{'name':'Meet at third location', 'type':3},
      45:{'name':'Engage in mediation', 'type':3},
      46:{'name':'Engage in negotiation', 'type':3},
      50:{'name':'Engage in diplomatic cooperation', 'type':4},
      51:{'name':'Praise or endorse', 'type':4},
      52:{'name':'Defend verbally', 'type':4},
      53:{'name':'Rally support on behalf of', 'type':4},
      54:{'name':'Grant diplomatic recognition', 'type':4},
      55:{'name':'Apologize', 'type':4},
      56:{'name':'Forgive', 'type':4},
      57:{'name':'Sign formal agreement', 'type':4},
      60:{'name':'Engage in material cooperation', 'type':5},
      61:{'name':'Cooperate economically', 'type':5},
      62:{'name':'Cooperate militarly', 'type':5},
      63:{'name':'Engage in judicial cooperation', 'type':5},
      64:{'name':'Share intelligence or information', 'type':5},
      70:{'name':'Provide aid', 'type':6},
      71:{'name':'Provide economic aid', 'type':6},
      72:{'name':'Provide military aid', 'type':6},
      73:{'name':'Provide humanitarian aid', 'type':6},
      74:{'name':'Provide military protection or peacekeeping', 'type':6},
      75:{'name':'Grant asylum', 'type':6},
      80:{'name':'Yield', 'type':7},
      81:{'name':'Ease administrative sanctions', 'type':7},
      811:{'name':'Ease restrictions on political freedoms', 'type':7},
      812:{'name':'Ease ban on political parties or politicians', 'type':7},
      813:{'name':'Ease curfew', 'type':7},
      814:{'name':'Ease state of emergency or martial law', 'type':7},
      82:{'name':'Ease political dissent', 'type':7},
      83:{'name':'Accede to requests or demands for political reform', 'type':7},
      831:{'name':'Accede to demands for change in leadership', 'type':7},
      832:{'name':'Accede to demands for change in policy', 'type':7},
      833:{'name':'Accede to demands for rights', 'type':7},
      834:{'name':'Accede to demands for change in institutions, regime', 'type':7},
      84:{'name':'Return, release', 'type':7},
      841:{'name':'Return, release persons', 'type':7},
      842:{'name':'Return, release property', 'type':7},
      85:{'name':'Ease economic sanction, boycott ot embargo', 'type':7},
      86:{'name':'Allow international involvement', 'type':7},
      861:{'name':'Receive deployement of peacekeepers', 'type':7},
      862:{'name':'Receive inspectors', 'type':7},
      863:{'name':'Allor for humanitarian access', 'type':7},
      87:{'name':'De-escalate military engagement', 'type':7},
      871:{'name':'Declare truce, creasefire', 'type':7},
      872:{'name':'Ease military blockade', 'type':7},
      873:{'name':'Demobilize armed forces', 'type':7},
      874:{'name':'Retreat or surrender militarly', 'type':7},
      90:{'name':'Investigate', 'type':8},
      91:{'name':'Investigate crime, corruption', 'type':8},
      92:{'name':'Investigate human rights abuses', 'type':8},
      93:{'name':'Investigate military action', 'type':8},
      94:{'name':'Investigate war crimes', 'type':8},
      100:{'name':'Demand', 'type':9},
      101:{'name':'Demand material cooperation', 'type':9},
      1011:{'name':'Demand economic cooperation', 'type':9},
      1012:{'name':'Demand military cooperation', 'type':9},
      1013:{'name':'Demand judicial cooperation', 'type':9},
      1014:{'name':'Demand intelligence cooperation', 'type':9},
      102:{'name':'Demand for diplomatic cooperation', 'type':9},
      103:{'name':'Demand material aid', 'type':9},
      1031:{'name':'Demand economic aid', 'type':9},
      1032:{'name':'Demand military aid', 'type':9},
      1033:{'name':'Demand humanitarian aid', 'type':9},
      1034:{'name':'Demand military protection or peacekeeping', 'type':9},
      104:{'name':'Demand political reform', 'type':9},
      1041:{'name':'Demand leadership change', 'type':9},
      1042:{'name':'Demand policy change', 'type':9},
      1043:{'name':'Demand rights', 'type':9},
      1044:{'name':'Demand change in institutions, regime', 'type':9},
      105:{'name':'Demand that target yield', 'type':9},
      1051:{'name':'Demand easing of administrative sanctions', 'type':9},
      1052:{'name':'Demand easing of political dissent', 'type':9},
      1053:{'name':'Demand release of persons or property', 'type':9},
      1054:{'name':'Demand easing of economic sanctions, boycott or embargo', 'type':9},
      1055:{'name':'Demand to allow international involvement', 'type':9},
      1056:{'name':'Demand de-escalation of military engagement', 'type':9},
      106:{'name':'Demand meeting, negotiation', 'type':9},
      107:{'name':'Demand settling of dispute', 'type':9},
      108:{'name':'Demand mediation', 'type':9},
      110:{'name':'Disapprove', 'type':10},
      111:{'name':'Criticize or denounce', 'type':10},
      112:{'name':'Accuse', 'type':10},
      1121:{'name':'Accuse of crime, corruption', 'type':10},
      1122:{'name':'Accuse of human rights abuses', 'type':10},
      1123:{'name':'Accuse of aggression', 'type':10},
      1124:{'name':'Accuse of war crimes', 'type':10},
      1125:{'name':'Accuse of espionage, treason', 'type':10},
      113:{'name':'Rally opposition against', 'type':10},
      114:{'name':'Complain officially', 'type':10},
      115:{'name':'Bring lawsuit against', 'type':10},
      116:{'name':'Find guilty or liable', 'type':10},
      120:{'name':'Reject', 'type':11},
      121:{'name':'Reject material cooperation', 'type':11},
      1211:{'name':'Reject economic cooperation', 'type':11},
      1212:{'name':'Reject military cooperation', 'type':11},
      1213:{'name':'Reject judicial cooperation', 'type':11},
      1214:{'name':'Reject intelligence cooperation', 'type':11},
      122:{'name':'Reject request or demand for material aid', 'type':11},
      1221:{'name':'Reject request for economic aid', 'type':11},
      1222:{'name':'Reject request for military aid', 'type':11},
      1223:{'name':'Reject request for humanitarian aid', 'type':11},
      1224:{'name':'Reject request for military protection or peacekeeping', 'type':11},
      123:{'name':'Reject request or demand for political reform', 'type':11},
      1231:{'name':'Reject request to change leadership', 'type':11},
      1232:{'name':'Reject request to change policy', 'type':11},
      1233:{'name':'Reject request for rights', 'type':11},
      1234:{'name':'Reject request for change in institutions, regime', 'type':11},
      124:{'name':'Refuse to yield', 'type':11},
      1241:{'name':'Refuse to ease administrative sanctions', 'type':11},
      1242:{'name':'Refuse to ease popular dissent', 'type':11},
      1243:{'name':'Refuse to release person or property', 'type':11},
      1244:{'name':'Refuse to ease economic sanctions, boycott or embargo', 'type':11},
      1245:{'name':'Refuse to allow international involvement', 'type':11},
      1246:{'name':'Refuse to de.escalate military engagement', 'type':11},
      125:{'name':'Reject proposal to meet, discuss, negotiate', 'type':11},
      126:{'name':'Reject mediation', 'type':11},
      127:{'name':'Reject plan, agreement to settle dispute', 'type':11},
      128:{'name':'Defy norms, laws', 'type':11},
      129:{'name':'Veto', 'type':11},
      130:{'name':'Threaten', 'type':12},
      131:{'name':'Threaten non-force', 'type':12},
      1311:{'name':'Threaten to reduce or stop aid', 'type':12},
      1312:{'name':'Threaten to boycott, embargo or sanction', 'type':12},
      1313:{'name':'Threaten to reduce or break relations', 'type':12},
      132:{'name':'Threaten with administrative sanctions', 'type':12},
      1321:{'name':'Threaten with restrictions on political freedoms', 'type':12},
      1322:{'name':'Threaten to ban politcal parties or politicians', 'type':12},
      1323:{'name':'Threaten to impose curfew', 'type':12},
      1324:{'name':'Threaten to impose state of emergency or martial law', 'type':12},
      133:{'name':'Threaten political dissent', 'type':12},
      134:{'name':'Threaten to halt negotiations', 'type':12},
      135:{'name':'Threaten to halt mediation', 'type':12},
      136:{'name':'Threaten to halt international involvement', 'type':12},
      137:{'name':'Threaten with repression', 'type':12},
      138:{'name':'Threaten with military force', 'type':12},
      1381:{'name':'Threaten blockade', 'type':12},
      1382:{'name':'Threaten occupation', 'type':12},
      1383:{'name':'Threaten unconventional attack', 'type':12},
      1384:{'name':'Threaten conventional attack', 'type':12},
      1385:{'name':'Threaten unconventional mass violence', 'type':12},
      139:{'name':'Give ultimatum', 'type':12},
      140:{'name':'Engage in political dissent', 'type':13},
      141:{'name':'Demonstrate or rally', 'type':13},
      1411:{'name':'Demonstrate or rally for leadership change', 'type':13},
      1412:{'name':'Demonstrate or rally for policy change', 'type':13},
      1413:{'name':'Demonstrate for rights', 'type':13},
      1414:{'name':'Demonstrate for change in institutions, regime', 'type':13},
      142:{'name':'Conduct hunger strike', 'type':13},
      1421:{'name':'Conduct hunger strike for leadership change', 'type':13},
      1422:{'name':'Conduct hunger strike for policy change', 'type':13},
      1423:{'name':'Conduct hunger strike for rights', 'type':13},
      1424:{'name':'Conduct hunger strike for change in institutions, regime', 'type':13},
      143:{'name':'Conduct strike or boycott', 'type':13},
      1431:{'name':'Conduct strike or boycott for leadership change', 'type':13},
      1432:{'name':'Conduct strike or boycott for policy change', 'type':13},
      1433:{'name':'Conduct strike or boycott for rights', 'type':13},
      1434:{'name':'Conduct strike or boycott for change in institutions, regime', 'type':13},
      144:{'name':'Obstruct passage, block', 'type':13},
      1441:{'name':'Obstruct passage to demand leadership change', 'type':13},
      1442:{'name':'Obstruct passage to demand policy change', 'type':13},
      1443:{'name':'Obstruct passage to demand rights', 'type':13},
      1444:{'name':'Obstruct passage to demande change in institutions, regime', 'type':13},
      145:{'name':'Protest violently, riot', 'type':13},
      1451:{'name':'Engage in violent protest for leadership change', 'type':13},
      1452:{'name':'Engage in violent protest to demand policy change', 'type':13},
      1453:{'name':'Engage in violent protest to demand rights', 'type':13},
      1454:{'name':'Engage in violent protest to demand change in institutions, regime', 'type':13},
      150:{'name':'Exhibit military or police power', 'type':14},
      151:{'name':'Increase police alert status', 'type':14},
      152:{'name':'Increase military alert status', 'type':14},
      153:{'name':'Mobilize or increase police power', 'type':14},
      154:{'name':'Mobilize or increase armed forces', 'type':14},
      155:{'name':'Mobilize or increase cyber-forces', 'type':14},
      160:{'name':'Reduce relations', 'type':15},
      161:{'name':'Reduce or brak diplomatic relations', 'type':15},
      162:{'name':'Reduce or stop material aid', 'type':15},
      1621:{'name':'Reduce or stop economic assistance', 'type':15},
      1622:{'name':'Reduce or stop military assistance', 'type':15},
      1623:{'name':'Reduce or stop humanitarian assistance', 'type':15},
      163:{'name':'Impose embargo, boycott or sanctions', 'type':15},
      164:{'name':'Halt negotiations', 'type':15},
      165:{'name':'Halt mediation', 'type':15},
      166:{'name':'Expel or withdraw', 'type':15},
      1661:{'name':'Expel or withdraw peacekeepers', 'type':15},
      1662:{'name':'Expel or withdraw inspectors, observers', 'type':15},
      1663:{'name':'Expel or withdraw aid agencies', 'type':15},
      170:{'name':'Coerce', 'type':16},
      171:{'name':'Seize or damage property', 'type':16},
      1711:{'name':'Confiscate property', 'type':16},
      1712:{'name':'Destroy property', 'type':16},
      172:{'name':'Impose administrative sanctions', 'type':16},
      1721:{'name':'Impose restrictions on political freedoms', 'type':16},
      1722:{'name':'Ban political parties or politicians', 'type':16},
      1723:{'name':'Impose curfew', 'type':16},
      1724:{'name':'Impose state of emergency or martial law', 'type':16},
      173:{'name':'Arrest, detain', 'type':16},
      174:{'name':'Expel or deport individuals', 'type':16},
      175:{'name':'Use repression', 'type':16},
      176:{'name':'Attack cybernetically', 'type':16},
      180:{'name':'Use unconventional violence', 'type':17},
      181:{'name':'Abduct, hijack, take hostage', 'type':17},
      182:{'name':'Physically assault', 'type':17},
      1821:{'name':'Sexually assault', 'type':17},
      1822:{'name':'Torture', 'type':17},
      1823:{'name':'Kill by physical assault', 'type':17},
      183:{'name':'Conduct suicide, car or other non-military bombing', 'type':17},
      1831:{'name':'Carry out suicide bombing', 'type':17},
      1832:{'name':'Carry out vehicular bombing', 'type':17},
      1833:{'name':'Carry out roadside bombing', 'type':17},
      1834:{'name':'Carry out location bombing', 'type':17},
      184:{'name':'Use as human shield', 'type':17},
      185:{'name':'Attempt to assassinate', 'type':17},
      186:{'name':'Assassinate', 'type':17},
      190:{'name':'Use conventional military force', 'type':18},
      191:{'name':'Impose blockade, restrict movement', 'type':18},
      192:{'name':'Occupy territory', 'type':18},
      193:{'name':'Fight with small arms and light weapons', 'type':18},
      194:{'name':'Fight with artillery and tanks', 'type':18},
      195:{'name':'Employ aerial weapons', 'type':18},
      1951:{'name':'Employ precision-guided aerial munitions', 'type':18},
      1952:{'name':'Employ remotely piloted aerial munitions', 'type':18},
      196:{'name':'Violate ceasefire', 'type':18},
      200:{'name':'Use massive unconventional force', 'type':19},
      201:{'name':'Engage in mass expulsion', 'type':19},
      202:{'name':'Engage in mass killings', 'type':19},
      203:{'name':'Engage in ethnic cleansing', 'type':19},
      204:{'name':'Use weapon of mass distruction', 'type':19},
      2041:{'name':'Use chemical, biological or radiological weapons', 'type':19},
      2042:{'name':'Detonate nuclear weapons', 'type':19}
    }

    this.types = {
      0:'Make public statement',
      1:'Appeal',
      2:'Express intent to cooperate',
      3:'Consult',
      4:'Engage in diplomatic cooperation',
      5:'Engage in material cooperation',
      6:'Provide aid',
      7:'Yield',
      8:'Investigate',
      9:'Demand',
      10:'Disapprove',
      11:'Reject',
      12:'Threaten',
      13:'Protest',
      14:'Exhibit military posture',
      15:'Reduce relations',
      16:'Coerce',
      17:'Assault',
      18:'Fight',
      19:'Engage in unconventional mass violence'
    }
  }
}