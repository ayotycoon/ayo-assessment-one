

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
        const { serverType, virtualMachines } = body
        if (!serverType || !virtualMachines) {
            throw "'serverType' or 'virtualMachines' property not available please check the README file"

        }
        // extract the required properties from the body


        const res = {
            acceptedVMs: [],
            rejectedVMs: []
        }
        for (let i = 0; i < virtualMachines.length; i++) {
            const vm = virtualMachines[i];
            // remaining properties when the vm resource is deducted from the server's
            const CPU_left = serverType.CPU - vm.CPU;
            const RAM_left = serverType.RAM - vm.RAM;
            const HDD_left = serverType.HDD - vm.HDD;
            // if the difference is greater or equal to zero, push to acceptedVMs and deduct the previous resources
            if (CPU_left >= 0 && RAM_left >= 0 && HDD_left >= 0) {
                serverType.CPU = CPU_left;
                serverType.RAM = RAM_left;
                serverType.HDD = HDD_left;
                res.acceptedVMs.push(vm);
            } else {

                let reason = '';

                if (CPU_left < 0) {
                    reason += 'not enough CPU;'
                }
                if (RAM_left < 0) {
                    reason += 'not enough RAM;'
                }
                if (HDD_left < 0) {
                    reason += 'not enough HDD;'
                }

                // else push to rejected VMS with a reason 
                res.rejectedVMs.push({ ...vm, reason })

            }


        }
        return { result: res.acceptedVMs.length, ...res }
    }



}