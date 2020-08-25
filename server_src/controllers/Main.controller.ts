

export default class MainController {
    constructor(key?, req?) {
        switch (key) {
            case 'solver':
                // @ts-ignore
                return this.solver(req.body)
            default:
                break;
        }

    }

    async solver(body) {
        if (!body.serverType || !body.virtualMachines) {
            throw "'serverType' or 'virtualMachines' property not available please check the README file"

        }
        console.log(body)
        const { serverType, virtualMachines } = body

        let result = 0;
        for (let i = 0; i < virtualMachines.length; i++) {
            const vm = virtualMachines[i];
            serverType.CPU -= vm.CPU
            serverType.RAM -= vm.RAM
            serverType.HDD -= vm.HDD
            if (serverType.CPU >= 0 && serverType.RAM >= 0 && serverType.HDD >= 0) {
                result++
            } else {
                break;
            }

        }
        return { result }
    }



}