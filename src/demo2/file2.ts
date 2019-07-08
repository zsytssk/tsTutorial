export type ServerDataItem = {
    serverId: string;
    serverName: string;
    serverStatus: string;
};

const ServerStatus = {
    '0': '正常',
    '1': '爆满',
};

/** 转化服务端数据 */
export function convertServerData(ori_data: ServerListItemData): ServerDataItem {
    const { serverId, serverName, status } = ori_data;
    const serverStatus = ServerStatus[status] || '正常';
    return {
        serverId,
        serverName,
        serverStatus,
    };
}
