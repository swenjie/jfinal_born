#namespace("admin.menu")
    #sql("queryMenuByUserId")
      SELECT  c.realm,c.menu_id,c.parent_id FROM 72crm_admin_user_role as a
      LEFT JOIN 72crm_admin_role_menu as b on a.role_id=b.role_id
      LEFT JOIN 72crm_admin_menu as c on b.menu_id=c.menu_id
      WHERE a.user_id=?
    #end
    #sql("queryAllMenu")
      SELECT  c.realm,c.menu_id,c.parent_id FROM 72crm_admin_menu as c
    #end
    #sql("queryMenuByParentId")
      select * from 72crm_admin_menu where parent_id = ?
    #end
#end
