package com.kakarote.crm9.erp.crm.entity.base;

import com.jfinal.plugin.activerecord.IBean;
import com.jfinal.plugin.activerecord.Model;

/**
 * Generated by JFinal, do not modify this file.
 */
@SuppressWarnings("serial")
public abstract class BaseCrmContactsBusiness<M extends BaseCrmContactsBusiness<M>> extends Model<M> implements IBean {

	public void setId(Integer id) {
		set("id", id);
	}

	public Integer getId() {
		return getInt("id");
	}

	public void setBusinessId(Integer businessId) {
		set("business_id", businessId);
	}

	public Integer getBusinessId() {
		return getInt("business_id");
	}

	public void setContactsId(Integer contactsId) {
		set("contacts_id", contactsId);
	}

	public Integer getContactsId() {
		return getInt("contacts_id");
	}

}
