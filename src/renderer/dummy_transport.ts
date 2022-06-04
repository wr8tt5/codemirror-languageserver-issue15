import { getNotifications, JSONRPCRequestData } from "@open-rpc/client-js/build/Request";
import { Transport } from "@open-rpc/client-js/build/transports/Transport";

export class DummyTransport extends Transport {

    public connect(): Promise<void> {
        return Promise.resolve()
    }

    public close() {}

    // Dummy sendData which should eventually time out
    public sendData(data: JSONRPCRequestData, timeout: number | null = null): Promise<any> {
        let prom = this.transportRequestManager.addRequest(data, timeout)
        const notifications = getNotifications(data)
        this.transportRequestManager.settlePendingRequest(notifications)
        return prom
    }
}