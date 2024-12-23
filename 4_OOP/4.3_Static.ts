// Static variables and method are associated with the class itself, not with the instances of the class.
class Thing {
    private static thingCount = 0;
    name: string;

    constructor(name: string) {
        this.name = name;
        Thing.thingCount++;
    }

    public static getCount() {
        console.log(Thing.thingCount);
    }
}

const thing1 = new Thing("thing1");
const thing2 = new Thing("thing2");
Thing.getCount(); // 2