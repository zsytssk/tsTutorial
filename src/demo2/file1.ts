import { convertServerData } from './file2';

export function receiveData(data: ServerListData) {
    const list = data.serverList.map(item => convertServerData(item));
    this.selectServerItem(list[0]);
}
