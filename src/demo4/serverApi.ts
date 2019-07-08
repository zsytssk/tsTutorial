type CreateRoleItemData = {
    is_cur: boolean;
    name: string;
};

type RoleData = CreateRoleItemData & {
    is_create?: boolean;
    is_cur?: boolean;
};
type RoleData1 =
    | CreateRoleItemData
    | {
          is_create?: boolean;
          is_cur?: boolean;
      };

//  http://tst-sgglory-h5-lizhi-stg216.1768.com/ roleList
