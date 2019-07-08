/** 地图元素的类型 */
export enum MapItemType {
    Player = 'player',
    Monster = 'monster',
    Npc = 'npc',
    Transfer = 'transfer',
    MonsterZone = 'monster_zone',
}
/** MapItem 需要实现的事件  */
export enum MapItemEvent {
    /** 位置更新 */
    PosChange = 'posChange',
    /** 被销毁 */
    Destroy = 'destroy',
}
export type MapEntityItemInfo = {
    /** 元素的id */
    id: string;
    /** 元素的名称 */
    name: string;
    /** 元素类型的id */
    type_id?: string;
    /** 元素的类型 */
    pos: Point;
    /** 元素的类型 */
    type: MapItemType;
};

/** MapItem 需要实现的接口  */
export interface MapEntityItemSource extends Laya.Box {
    /** 地图元素需要的信息 */
    getMapItemInfo(): MapEntityItemInfo;
    /** 从地图上清除... */
    clearFromMap(): void;
}
