define("UsrRealty1Page",["RightUtilities", "ServiceHelper"], function(RightUtilities, ServiceHelper) {
	return {
		entitySchemaName: "UsrRealty",
		attributes: {
			"UsrManager": {
				"dataValueType": Terrasoft.DataValueType.LOOKUP,
				"lookupListConfig": {
					/* The array of filters to apply to the query that populates the lookup field with data. */
					"filters": [
						function() {
							var filterGroup = Ext.create("Terrasoft.FilterGroup");
							filterGroup.add("ConnectedUserIsPresentAndActive",
								Terrasoft.createColumnFilterWithParameter(
								   Terrasoft.ComparisonType.EQUAL, 
								   "[SysAdminUnit:Contact:].Active",
								    true));
							return filterGroup;
						}
					]
				}
			},
			"CanChangePrice":{
			     dataValueType: this.Terrasoft.DataValueType.BOOLEAN,
		         value: false
		     },
			"CommissionUSD": {
				"dataValueType": Terrasoft.DataValueType.FLOAT,
				"type": Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"value": 0,
				dependencies: [
                    {
                        
                        columns: ["UsrPriceUSD", "UsrOfferType"],
                        methodName: "calculateCommission"
                    }
                ]
			},
			"UsrOfferType": {
				lookupListConfig:{
					columns: ["UsrCommissionMultiplier"]
				}
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrRealtyFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrRealty"
				}
			},
			"UsrSchema54231906Detaild5c5cae3": {
				"schemaName": "UsrRealtyVisitDetailGrid",
				"entitySchemaName": "UsrRealtyvisit",
				"filter": {
					"detailColumn": "UsrParentRealty",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrComment": {
				"3bf01130-5df6-4d5b-a19b-5e56fdfdca26": {
					"uId": "3bf01130-5df6-4d5b-a19b-5e56fdfdca26",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 7,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrPriceUSD"
							},
							"rightExpression": {
								"type": 0,
								"value": 999.99,
								"dataValueType": 5
							}
						}
					]
				}
			},
			"UsrManager": {
				"4bfb6121-89d9-4cc3-8c35-4bec908a7540": {
					"uId": "4bfb6121-89d9-4cc3-8c35-4bec908a7540",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "Type",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "60733efc-f36b-1410-a883-16d83cab0980",
					"dataValueType": 10
				}
			},
			"UsrPriceUSD": {
				"383f5657-6f3b-4cc8-90d5-2ce03f64e304": {
					"uId": "383f5657-6f3b-4cc8-90d5-2ce03f64e304",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "CanChangePrice"
							},
							"rightExpression": {
								"type": 0,
								"value": true,
								"dataValueType": 12
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			setValidationConfig: function() {
				/* Call the initialization of the parent view model's validators. */
				this.callParent(arguments);
				this.addColumnValidator("UsrPriceUSD", this.positiveValueValidator);
				this.addColumnValidator("UsrArea", this.positiveValueValidator);
			},
			positiveValueValidator: function(value, column) {
				var msg = "";
				if (value < 0) {
					msg = this.get("Resources.Strings.ValueMustBeGreaterThanZero");
				}
				return {
					invalidMessage: msg
				};
			},
			calculateCommission: function() {
				var price = this.get("UsrPriceUSD");
				if (!price) {
					price = 0;
				}
				var offerTypeObject = this.get("UsrOfferType");
				var coeff = 0;
				if (offerTypeObject) {
					coeff = offerTypeObject.UsrCommissionMultiplier;
				}
				var commission = price * coeff;
				this.set("CommissionUSD", commission);
			},
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.setSecurityAttribute();
				this.calculateCommission();
			},
			
			setSecurityAttribute: function() {
				RightUtilities.checkCanExecuteOperation({
					operation: "canchangerealtyprice"
				},
				this.getPriceOperationResult, this);
			},
			getPriceOperationResult: function(result) {
				this.set("CanChangePrice", result);
			},
			onMyButtonClick : function(){
				this.console.log("button clicked");
				this.showInformationDialog("Button pressed!");
				var managerData = {
					value: "410006e1-ca4e-4502-a9ec-e54d922d2c00",
					displayValue: "Supervisor"
				};
				this.set("UsrManager", managerData);
			},
		getMyButtonEnabled : function(){
				var result = true;
				var name = this.get("UsrName");
				if (!name) 
				{
					result = false;
				}
				this.console.log("'get button enabled property' method called");
				return result;
			},
		onRunWebServiceButtonClick: function() {
			var typeObject = this.get("UsrType");
			if (!typeObject) {
				return;
			}
			var typeId = typeObject.value;
			var offerTypeObject = this.get("UsrOfferType");
			if (!offerTypeObject) {
				return;
			}
			var offerTypeId = offerTypeObject.value;
			var serviceData = {
				realtyTypeId: typeId,realtyOfferTypeId: offerTypeId
			};
			this.console.log("1");
			ServiceHelper.callService("RealtyService", "GetTotalAmountByTypeId", this.getWebServiceResult, serviceData, this);
			this.console.log("2");
		},
		getWebServiceResult: function(response, success) {
			this.console.log("3");
			this.Terrasoft.showInformation("Total amount by typeId: " + response.GetTotalAmountByTypeIdResult);
		}
			
		},
		
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrName9c0ac703-525c-414d-bd4d-6d0870d151da",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FLOAT383d260a-38aa-4831-b5ae-ed4ed005a567",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrPriceUSD",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FLOATa762145d-82ea-4b5b-9c7c-403bc9fc0408",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrArea",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "CommissionControl",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "CommissionUSD",
					"enabled": false,
					"caption": {
						"bindTo": "Resources.Strings.CommissionCaption"
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "MyButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.MyCaption"
					},
					"click": {
						"bindTo": "onMyButtonClick"
					},
					"enabled": {
						"bindTo": "getMyButtonEnabled"
					},
					"style": "red",
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "RunWebServiceButton",
				"values": {
					"itemType": 5,
					"caption": {
						"bindTo": "Resources.Strings.RunWebServiceButtonCaption"
					},
					"click": {
						"bindTo": "onRunWebServiceButtonClick"
					},
					"style": "green",
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "ProfileContainer"
					}
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP1d1cf944-983e-4f16-862d-1aa6a5a37f8c",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP8bf39a3c-eb93-4179-b6fa-0263975f0316",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "UsrOfferType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING8813c03f-0ff3-4434-bff4-5133c6d2a1bf",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrComment",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "LOOKUP72e102bf-e145-4696-accd-34c019c6e9b6",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "UsrManager",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Tab6e4d6b42TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab6e4d6b42TabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrSchema54231906Detaild5c5cae3",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "Tab6e4d6b42TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 2
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
