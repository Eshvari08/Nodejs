class Asset {
    constructor(assetName, assignedTo) {
        this.assetName = assetName;
        this.assignedTo = assignedTo;
    }

    assign() {
        console.log(
          `${this.assetName} assigned to ${this.assignedTo}`
        );
    }
}

var Asset1 =new Asset("Eshvari","Laptop");
Asset1.assign();

var Asset2 =new Asset("sanika","dell laptop");
Asset2.assign();