package com.kakarote.crm9.utils;

import com.kakarote.crm9.erp.admin.entity.AdminFieldSort;
import com.jfinal.plugin.activerecord.Record;

import java.util.List;

/**
 * @author wyq
 */
public class FieldUtil {
    private List<Record> recordList;
    private List<AdminFieldSort> adminFieldSortList;
    private Long userId;
    private Integer label;

    public List<AdminFieldSort> getAdminFieldSortList() {
        return adminFieldSortList;
    }

    public List<Record> getRecordList(){
        return recordList;
    }

    public FieldUtil(){}

    public FieldUtil(List<AdminFieldSort> adminFieldSortList, Long userId, Integer label){
        this.adminFieldSortList = adminFieldSortList;
        this.userId = userId;
        this.label = label;
    }

    public FieldUtil(List<Record> list){
        this.recordList = list;
    }

    public <T> List<Record> getFixedField(List<Record> fieldList, String fieldName, String name, T value, String formType,
                                      Object[] settingArr, Integer isNull){
        Record record =new Record();
        record.set("name",name).set("value",value).set("field_name",fieldName).set("form_type",formType).set("field_type",1)
                .set("setting",settingArr).set("is_null",isNull);
        fieldList.add(record);
        return fieldList;
    }

    public void addListHead(List<Record> fieldList,String fieldName, String name){
        Record record = new Record();
        record.set("field_name",fieldName);
        record.set("name",name);
        fieldList.add(record);
    }

    public List<Record> getFixedField(String name, String value){
        Record record = new Record();
        record.set("name",name).set("value",value);
        recordList.add(record);
        return this.recordList;
    }

    public FieldUtil set(String fieldName, String value){
        if (null == value){
            this.getFixedField(fieldName,"");
        }else {
            this.getFixedField(fieldName, value);
        }
        return this;
    }

    public FieldUtil add(String fieldName, String name){
        AdminFieldSort adminFieldSort = new AdminFieldSort();
        adminFieldSort.setLabel(label).setIsHide(0).setUserId(userId).setFieldName(fieldName).setName(name);
        adminFieldSortList.add(adminFieldSort);
        return this;
    }

    public FieldUtil add(String fieldName, String name, Integer fieldId){
        AdminFieldSort adminFieldSort = new AdminFieldSort();
        adminFieldSort.setLabel(label).setIsHide(0).setUserId(userId).setFieldName(fieldName).setName(name).setFieldId(fieldId);
        adminFieldSortList.add(adminFieldSort);
        return this;
    }

    public <T> FieldUtil add(String fieldName, String name, String formType,T settingArr){
        Record record = new Record();
        record.set("fieldName",fieldName).set("name",name).set("formType",formType).set("setting",settingArr);
        recordList.add(record);
        return this;
    }

    /**
     *
     * @param fieldName  字段名
     * @param name  中文名
     * @param formType  类型
     * @param settingArr 选项
     * @param isNull 是否必填 0否 1 是
     * @param isUnique 是否验证 0否 1 是
     * @return
     */
    public FieldUtil oaFieldAdd(String fieldName, String name, String formType, String[] settingArr, Integer isNull,Integer isUnique,Object value,String defaultValue,Integer operating){
        Record record = new Record();
        record.set("fieldName",fieldName).set("name",name).set("formType",formType).set("setting",settingArr).set("isNull",isNull).set("isUnique",isUnique).set("value",value).set("defaultValue",defaultValue).set("operating",operating).set("maxLength",0);
        recordList.add(record);
        return this;
    }

}
