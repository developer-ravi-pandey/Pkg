define("UsrNewRealty_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 220
						},
						{
							"id": "41e5a706-cd29-a5db-804a-f571c4678138",
							"code": "PDS_UsrPriceUSD",
							"path": "UsrPriceUSD",
							"caption": "#ResourceString(PDS_UsrPriceUSD)#",
							"dataValueType": 32
						},
						{
							"id": "4618dbfe-fed2-fd4f-b339-7692ff6f669e",
							"code": "PDS_UsrArea",
							"path": "UsrArea",
							"caption": "#ResourceString(PDS_UsrArea)#",
							"dataValueType": 32,
							"width": 203
						},
						{
							"id": "c8689d78-80ba-4e71-8cf2-fa478e3be5bc",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 216
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"features": {
						"editable": true
					}
				}
			},
			{
				"operation": "insert",
				"name": "Button_hebvlvt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_hebvlvt_caption)#",
					"color": "default",
					"disabled": false,
					"menuItems": [],
					"clickMode": "menu",
					"size": "large",
					"iconPosition": "only-text"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "MenuItem_8m672s8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_8m672s8_caption)#",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "DataTable"
						}
					},
					"icon": "export-button-icon"
				},
				"parentName": "Button_hebvlvt",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_sy8z6b6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_sy8z6b6_caption)#",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrNewRealty"
						}
					},
					"icon": "import-button-icon"
				},
				"parentName": "Button_hebvlvt",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_k5ng6yn",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_f65ub2d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "none"
				},
				"parentName": "GridContainer_k5ng6yn",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions_p4bcvr1",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_p4bcvr1_caption)#",
					"folderTree": "FolderTree_gm5sany"
				},
				"parentName": "FlexContainer_f65ub2d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nzr59ar",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "none"
				},
				"parentName": "GridContainer_k5ng6yn",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Button_kk2qf2e",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "FlexContainer_nzr59ar",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTree_gm5sany",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_gm5sany_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "UsrNewRealty",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					]
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Items": {
					"viewModelConfig": {
						"attributes": {
							"PDS_UsrName": {
								"modelConfig": {
									"path": "PDS.UsrName"
								}
							},
							"PDS_UsrPriceUSD": {
								"modelConfig": {
									"path": "PDS.UsrPriceUSD"
								}
							},
							"PDS_UsrArea": {
								"modelConfig": {
									"path": "PDS.UsrArea"
								}
							},
							"PDS_CreatedOn": {
								"modelConfig": {
									"path": "PDS.CreatedOn"
								}
							},
							"PDS_Id": {
								"modelConfig": {
									"path": "PDS.Id"
								}
							}
						}
					},
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting",
							"default": [
								{
									"direction": "desc",
									"columnName": "CreatedBy"
								}
							]
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_gm5sany_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							}
						]
					}
				},
				"ItemsSorting": {},
				"FolderTree_gm5sany_visible": {
					"value": false
				},
				"FolderTree_gm5sany_items": {
					"isCollection": true,
					"viewModelConfig": {
						"attributes": {
							"Id": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Id"
								}
							},
							"Name": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Name"
								}
							},
							"ParentId": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.Parent.Id"
								}
							},
							"FilterData": {
								"modelConfig": {
									"path": "FolderTree_gm5sany_items_DS.FilterData"
								}
							}
						}
					},
					"modelConfig": {
						"path": "FolderTree_gm5sany_items_DS",
						"filterAttributes": [
							{
								"name": "FolderTree_gm5sany_items_DS_filter",
								"loadOnChange": true
							}
						]
					},
					"embeddedModel": {
						"name": "FolderTree_gm5sany_items_DS",
						"config": {
							"type": "crt.EntityDataSource",
							"config": {
								"entitySchemaName": "FolderTree"
							}
						}
					}
				},
				"FolderTree_gm5sany_active_folder_id": {},
				"FolderTree_gm5sany_active_folder_name": {},
				"FolderTree_gm5sany_active_folder_filter": {
					"value": {}
				},
				"FolderTree_gm5sany_items_DS_filter": {
					"value": {
						"isEnabled": true,
						"trimDateTimeParameterToDate": false,
						"filterType": 6,
						"logicalOperation": 0,
						"items": {
							"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "EntitySchemaName"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "UsrNewRealty"
									}
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"hiddenInPageDesigner": true,
					"config": {
						"entitySchemaName": "UsrNewRealty",
						"attributes": {
							"UsrName": {
								"path": "UsrName"
							},
							"UsrPriceUSD": {
								"path": "UsrPriceUSD"
							},
							"UsrArea": {
								"path": "UsrArea"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					},
					"scope": "viewElement"
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});