import ModelGenerator from '../utils/ModelGenerator';

//hosts
const host0 = ModelGenerator.generateMember("Micheal", "male", 13937653812, "images/avatar/cook0.png");
const host1 = ModelGenerator.generateMember("Aris", "female", 13937653812, "images/avatar/cook1.png");
const host2 = ModelGenerator.generateMember("Lucy", "female", 13937653812, "images/avatar/cook2.png");
const host3 = ModelGenerator.generateMember("Kate", "female", 13937653812, "images/avatar/cook3.png");

//members
const member0 = ModelGenerator.generateMember("Micheal", "male", 13937653812);
const member1 = ModelGenerator.generateMember("Aris", "female", 13937653812);
const member2 = ModelGenerator.generateMember("Lucy", "female", 13937653812);
const member3 = ModelGenerator.generateMember("Kate", "female", 13937653812);
const member4 = ModelGenerator.generateMember("Carl", "male", 13937653812);
const member5 = ModelGenerator.generateMember("Tom", "male", 13937653812);
const member6 = ModelGenerator.generateMember("Jim", "male", 13937653812);
const member7 = ModelGenerator.generateMember("God", "male", 13937653812);

export default [
    ModelGenerator.generateActivity("Great Dinner", host0, "Come and eat!", ["images/kitchen/kitchen0.png"], 8, "Shaanxi Xi'an Tian gu eight street Huanpu E606", new Date(2017, 5, 18, 12, 0), [member0, member1, member2, member3]),
    ModelGenerator.generateActivity("Funny Lunch", host1, "Come and eat!", ["images/kitchen/kitchen1.png"], 8, "Shaanxi Xi'an Tian gu eight street Huanpu E605", new Date(2017, 5, 18, 12, 0), [member4, member7, member2, member5]),
    ModelGenerator.generateActivity("Supper", host2, "Come and eat!", ["images/kitchen/kitchen2.png"], 8, "Shaanxi Xi'an Tian gu eight street Huanpu E604", new Date(2017, 5, 18, 18, 0), [member7, member6, member1, member3]),
    ModelGenerator.generateActivity("Breakfast", host3, "Come and eat!", ["images/kitchen/kitchen3.png"], 8, "Shaanxi Xi'an Tian gu eight street Huanpu E603", new Date(2017, 5, 18, 9, 0), [member2, member1, member4, member5]),
];