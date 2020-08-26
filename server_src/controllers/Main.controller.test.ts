import MainController from './Main.controller'


describe('Testing the MainController', () => {
    it('should find the number of vms that can fit in a server - test1', () => {
        expect.assertions(1);
        const body = {
            "serverType": {
                "CPU": 2,
                "RAM": 32,
                "HDD": 100
            },
            "virtualMachines": [
                {
                    "CPU": 1,
                    "RAM": 16,
                    "HDD": 10
                },
                {
                    "CPU": 1,
                    "RAM": 16,
                    "HDD": 10
                },
                {
                    "CPU": 2,
                    "RAM": 32,
                    "HDD": 100
                }
            ]
        };


       
        return new MainController().solver(body)
            .then(res => {
                expect(res).toMatchObject({ result: 2 })
            })





    });
    it('should find the number of vms that can fit in a server - test2', () => {
        expect.assertions(1);
        const body = {
            "serverType": {
                "CPU": 2,
                "RAM": 32,
                "HDD": 100
            },
            "virtualMachines": [
                {
                    "CPU": 1,
                    "RAM": 16,
                    "HDD": 10
                },
           
                {
                    "CPU": 2,
                    "RAM": 32,
                    "HDD": 100
                },
                {
                    "CPU": 1,
                    "RAM": 16,
                    "HDD": 10
                }
            ]
        };


       
        return new MainController().solver(body)
            .then(res => {
                expect(res).toMatchObject({ result: 2 })
            })





    });


})