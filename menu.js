class Part{
    constructor (name){
        this.name = name;
    }
    describe(){
        return `${this.name}`;
    }
}
class Vehicle{
    constructor (make, model){
        this.make = make;
        this.model = model;
        this.parts = [];
    }
    addPart(){
       let part = prompt('What does this vehicle need: ');
       this.vehicles.push(new Part(part));
     //if(part instanceof Part){
       //  this.parts.push(part);
     
    }
    describe(){
        return`${this.make} + ${this.model} has ${this.parts.length} parts`;
    }
}
class Menu{
    constructor(){
        this.vehicles = [];
        this.selectedVehicle = null;
    }
    start(){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch (selection){
                case '1':
                    this.addVehicle();
                    break;
                case '2':       
                    this.viewVehicle();
                    break;
                case '3':
                    this.deleteVehicle();
                    break;
                case '4':
                    this.displayVehicles();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Have a great day :)');
    }

    showMainMenuOptions(){
        return prompt(`
        0) Exit
        1) Add New Vehicle
        2) View Vehicle
        3) Delete Vehicle
        4) Display All Vehicles
        `);
    }
    showVehicleMenuOptions(vehicleInfo){
        return prompt (`
        0) Back
        1) Add Parts Needed
        2) Delete Parts
        *****************
        ${vehicleInfo}
        `)
    }
    displayVehicles(){
        let vehicleString = '';
        for (let i = 0; i < this.vehicles.length; i++){
            vehicleString += i + ') ' + this.vehicles[i].make + ' ' + this.vehicles[i].model + '\n';
        } // not sure about .name, want make and model to show
        alert(vehicleString);
    }
    addVehicle(){
        let make = prompt('Enter Make of Vehicle:');
        let model = prompt('Enter Model of Vehicle:');

        
        this.vehicles.push(new Vehicle(make, model));
        
    }
    viewVehicle(){
        let index = prompt('Enter index of the Vehicle to view:');
        if (index > -1 && index < this.vehicles.length){
            this.selectedVehicle = this.vehicles[index];
            
            let description = 'Vehicle make and model: ' + this.selectedVehicle.make + ' ' + this.selectedVehicle.model + '\n';

            for (let i=0; i<this.selectedVehicle.parts.length; i++){
                description += i + ')' + this.selectedVehicle.parts[i].name + `\n`;
            }
            let selection = this.showVehicleMenuOptions(description);
            switch (selection){
                case '1':
                    this.createParts();
                    break
                case '2':
                    this.deleteParts();
            }
        }
    }
    createParts(){
        let name = prompt ('Enter Part needed for Vehicle: ');
        this.selectedVehicle.parts.push(new Part(name));
    }
    deleteParts(){
        let index = prompt ('Enter index of Parts to delete: ');
        if (index > -1 && index < this.selectedVehicle.parts.length){
            this.selectedVehicle.parts.splice(index, 1);
        }
    }
    deleteVehicle(){
        let index = prompt('Enter index of Vehicle to delete: ');
        if (index > -1 && index < this.vehicles.length){
            this.vehicles.splice(index, 1);
        }
    }
} 
let menu = new Menu();
menu.start ();



//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